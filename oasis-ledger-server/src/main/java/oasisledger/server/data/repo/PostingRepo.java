package oasisledger.server.data.repo;

import oasisledger.server.data.dao.*;
import oasisledger.server.data.dto.PostingDTO;
import oasisledger.server.data.dto.StatementDTO;
import oasisledger.server.data.mappers.PostingReducer;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;

import javax.inject.Inject;
import javax.ws.rs.BadRequestException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public class PostingRepo {

    private final Jdbi jdbi;

    @Inject
    public PostingRepo(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    public void persist(PostingDTO.Header ph) {
        ph.setDescription(ph.getDescription() == null ? "" : ph.getDescription().trim());

        if (ph.getDetails() == null || ph.getDetails().isEmpty()) {
            throw new IllegalArgumentException("Missing posting details");
        }
        ph.getDetails().forEach(pd -> {
            BigDecimal rawAmount = pd.getAmount().movePointRight(2); // scale = 2
            if (rawAmount.remainder(BigDecimal.ONE).compareTo(BigDecimal.ZERO) != 0)
                throw new IllegalArgumentException("Invalid fractional amount: " + pd.getAmount());
            pd.setRawAmount(rawAmount.longValue());
        });

        if (ph.getPostingDate().getYear() > LocalDate.now().getYear() + 100 ||
                ph.getPostingDate().getYear() < LocalDate.now().getYear() - 100) {
            throw new IllegalArgumentException("Invalid posting date: " + ph.getPostingDate());
        }

        {
            BigDecimal total = ph.getDetails().stream()
                    .map(pd -> pd.getAmount())
                    .reduce((a, b) -> a.add(b))
                    .get();
            if (total.compareTo(BigDecimal.ZERO) != 0) {
                throw new IllegalArgumentException("Unbalanced posting with non zero total: " + total);
            }
        }

        if (!ph.getDetails().stream()
                .map(pd -> pd.getAccountId())
                .allMatch(new HashSet<>()::add)) {
            throw new IllegalArgumentException("Accounts must be unique within a single posting");
        }

        ph.getDetails().forEach(pd -> {
            if (pd.getStatement() != null) {
                if (pd.getStatementId() != null)
                    throw new IllegalArgumentException("Statement to be posted must be without id");

                StatementDTO s = pd.getStatement();

                if (Math.abs(ChronoUnit.DAYS.between(ph.getPostingDate(), s.getStatementDate())) > 5)
                    throw new IllegalArgumentException("Statement and posting date too far apart");

                if (s.getAccountId() == 0)
                    s.setAccountId(pd.getAccountId());
                else if (s.getAccountId() != pd.getAccountId())
                    throw new IllegalArgumentException("Statement and posting accounts must be same");

                if (!s.getAmount().equals(pd.getAmount()))
                    throw new IllegalArgumentException("Statement and posting amount must be same");

                s.setDescription(s.getDescription() == null ? "" : s.getDescription().trim());
                s.setPosted('Y');
            }
        });

        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            failIfAccountBalanceIsClosed(ph, h);

            PostingDAO pdao = h.attach(PostingDAO.class);
            StatementDAO sdao = h.attach(StatementDAO.class);
            SysSequenceDAO seq = h.attach(SysSequenceDAO.class);

            long phid = seq.getPostingId();
            ph.setPostingHeaderId(phid);
            pdao.insertPostingHeader(ph);

            ph.getDetails().forEach(pd -> {
                if (pd.getStatement() != null) {
                    StatementDTO s = pd.getStatement();
                    long sid = seq.getStatementId();
                    s.setStatementId(sid);
                    sdao.insert(s);
                    pd.setStatementId(sid);
                }

                long pdid = seq.getPostingId();
                pd.setPostingDetailId(pdid);
                pd.setPostingHeaderId(phid);
                pdao.insertPostingDetail(pd);

                if (pd.getStatement() == null && pd.getStatementId() != null) {
                    if (!sdao.setPosted(pd.getStatementId(), pd.getAccountId())) {
                        throw new BadRequestException("Failed to link posting detail to statement id "
                                + pd.getStatementId());
                    }
                }
            });

            AccountBalanceDAO abdao = h.attach(AccountBalanceDAO.class);
            ph.getDetails().forEach(pd -> {
                abdao.addBalanceIfNotExists(pd.getAccountId(), ph.getPostingDate());
                abdao.addPosting(pd.getAccountId(), ph.getPostingDate(), pd.getRawAmount());
            });
        });
    }

    private void failIfAccountBalanceIsClosed(PostingDTO.Header ph, Handle h) {
        // check account balances are not closed (i.e., not reconciled)
        String sql = String.join(" \n",
                "select count(*)",
                "from account_balance",
                "where account_id in (" + ph.getDetails().stream()
                        .map(pd -> String.valueOf(pd.getAccountId()))
                        .collect(Collectors.joining(","))
                        + ")",
                "and posting_date >= " + ph.getPostingDate().toEpochDay(),
                "and reconciled  = 'Y'",
                "");
        int count = h.createQuery(sql)
                .mapTo(Integer.TYPE)
                .findOnly();
        if (count > 0) {
            throw new BadRequestException("Failed to post to account marked as reconciled");
        }
    }

    public List<PostingDTO.Header> findTop(int days) {
        String where1 = "posting_date >= " + (LocalDate.now().toEpochDay() - days);
        return find(where1);
    }

    public List<PostingDTO.Header> findMonth(int month, int year) {
        LocalDate d1 = LocalDate.of(year, month, 1);
        LocalDate d2 = d1.plusMonths(1);
        String where1 = "posting_date >= " + d1.toEpochDay()
                + " and posting_date < " + d2.toEpochDay();
        return find(where1);
    }

    private List<PostingDTO.Header> find(String where1) {
        String sql = String.join(" \n",
                "select",
                "  ph.posting_header_id,",
                "  ph.posting_date,",
                "  ph.description,",
                "  pd.posting_detail_id,",
                "  pd.account_id,",
                "  pd.amount,",
                "  pd.statement_id,",
                "  ph.audit_user_id,",
                "  ph.audit_ts,",
                "  s.statement_id s_statement_id,",
                "  s.statement_date s_statement_date,",
                "  s.account_id s_account_id,",
                "  s.amount s_amount,",
                "  s.description s_description,",
                "  s.posted s_posted",
                "from (",
                "  select * from posting_header",
                "  where " + where1,
                "  order by posting_date desc, posting_header_id desc",
                ") ph",
                "join posting_detail pd",
                "  on pd.posting_header_id = ph.posting_header_id",
                "left join statement s",
                "  on s.statement_id = pd.statement_id",
                "order by ph.posting_date desc, ph.posting_header_id desc, pd.posting_detail_id",
                "");
        return jdbi.withHandle(h -> h.createQuery(sql)
                .registerRowMapper(BeanMapper.factory(PostingDTO.Header.class))
                .registerRowMapper(BeanMapper.factory(PostingDTO.Detail.class))
                .registerRowMapper(BeanMapper.factory(StatementDTO.class, "s_"))
                .reduceRows(new PostingReducer())
                .collect(Collectors.toList()));
    }
}
