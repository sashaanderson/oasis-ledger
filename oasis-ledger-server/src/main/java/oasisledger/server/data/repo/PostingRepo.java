package oasisledger.server.data.repo;

import oasisledger.server.data.dao.*;
import oasisledger.server.data.dto.CurrencyDTO;
import oasisledger.server.data.dto.PostingDTO;
import oasisledger.server.data.mappers.PostingReducer;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;

import javax.inject.Inject;
import javax.ws.rs.BadRequestException;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public class PostingRepo {

    private static final String SQL_SELECT_POSTINGS = String.join(" \n",
            "select",
            "  ph.posting_header_id,",
            "  ph.posting_date,",
            "  ph.description,",
            "  pd.posting_detail_id,",
            "  pd.account_id,",
            "  pd.currency_id,",
            "  pd.amount,",
            "  pd.statement_id,",
            "  c.scale,",
            "  ph.audit_user_id,",
            "  ph.audit_ts",
            "from posting_header ph",
            "join posting_detail pd",
            "  on pd.posting_header_id = ph.posting_header_id",
            "join currency c",
            "  on c.currency_id = pd.currency_id",
            "");

    private static final String SQL_SELECT_POSTINGS_ORDER_BY =
            "order by ph.posting_header_id desc, pd.posting_detail_id \n";

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
            CurrencyDTO c;
            if (pd.getCurrency() != null) {
                c = jdbi.withExtension(CurrencyDAO.class, dao -> dao.findByCode(pd.getCurrency()));
                if (c == null)
                    throw new IllegalArgumentException("Invalid currency: " + pd.getCurrency());
                if (pd.getCurrencyId() == 0)
                    pd.setCurrencyId(c.getCurrencyId());
                else if (pd.getCurrencyId() != c.getCurrencyId())
                    throw new IllegalArgumentException("Conflicting currency and currencyId");
            } else {
                if (pd.getCurrencyId() == 0)
                    throw new IllegalArgumentException("Missing currency");
                c = jdbi.withExtension(CurrencyDAO.class, dao -> dao.findById(pd.getCurrencyId()));
                if (c == null)
                    throw new IllegalArgumentException("Invalid currencyId: " + pd.getCurrencyId());
            }

            BigDecimal rawAmount = pd.getAmount().movePointRight(c.getScale());
            if (rawAmount.remainder(BigDecimal.ONE).compareTo(BigDecimal.ZERO) != 0)
                throw new IllegalArgumentException("Invalid fractional amount for currency "
                        + c.getCurrencyCode() + ": " + pd.getAmount());
            pd.setRawAmount(rawAmount.longValue());
        });

        if (ph.getPostingDate().getYear() > LocalDate.now().getYear() + 100 ||
                ph.getPostingDate().getYear() < LocalDate.now().getYear() - 100) {
            throw new IllegalArgumentException("Invalid posting date: " + ph.getPostingDate());
        }

        long countCurrencies = ph.getDetails().stream().map(pd -> pd.getCurrencyId()).distinct().count();
        if (countCurrencies > 2) {
            throw new IllegalArgumentException("Invalid posting with " + countCurrencies + " currencies");
        }
        if (countCurrencies == 1) {
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

        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            failIfAccountBalanceIsClosed(ph, h);

            PostingDAO pdao = h.attach(PostingDAO.class);
            SysSequenceDAO seq = h.attach(SysSequenceDAO.class);
            long phid = seq.getPostingId();
            ph.setPostingHeaderId(phid);
            pdao.insertPostingHeader(ph);
            ph.getDetails().forEach(pd -> {
                long pdid = seq.getPostingId();
                pd.setPostingDetailId(pdid);
                pd.setPostingHeaderId(phid);
                pdao.insertPostingDetail(pd);
            });

            StatementDAO sdao = h.attach(StatementDAO.class);
            ph.getDetails().forEach(pd -> {
                if (pd.getStatementId() != null) {
                    if (!sdao.setPosted(pd.getStatementId(), pd.getAccountId(), pd.getCurrencyId())) {
                        throw new BadRequestException("Failed to link posting detail to statement id "
                                + pd.getStatementId());
                    }
                }
            });

            AccountBalanceDAO abdao = h.attach(AccountBalanceDAO.class);
            ph.getDetails().forEach(pd -> {
                abdao.add(ph.getPostingDate(), pd.getAccountId(), pd.getCurrencyId(), pd.getRawAmount());
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

    public List<PostingDTO.Header> findAll() {
        return findWithSql(SQL_SELECT_POSTINGS + SQL_SELECT_POSTINGS_ORDER_BY);
    }

    public List<PostingDTO.Header> findRecent() {
        return findWithSql(SQL_SELECT_POSTINGS
                + "where ph.audit_ts / 1000 >= strftime('%s', date('now')) - 60*60*24*30 \n" // 30 days
                + SQL_SELECT_POSTINGS_ORDER_BY
                + "limit 100");
    }

    public List<PostingDTO.Header> findWhere(String where) {
        return findWithSql(SQL_SELECT_POSTINGS
                + "where " + where + " \n"
                + SQL_SELECT_POSTINGS_ORDER_BY);
    }

    private List<PostingDTO.Header> findWithSql(String sql) {
        return jdbi.withHandle(h -> h.createQuery(sql)
                .registerRowMapper(BeanMapper.factory(PostingDTO.Header.class))
                .registerRowMapper(BeanMapper.factory(PostingDTO.Detail.class))
                .reduceRows(new PostingReducer())
                .collect(Collectors.toList()));
    }

}
