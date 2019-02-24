package oasisledger.server.data.repo;

import oasisledger.server.data.dao.CurrencyDAO;
import oasisledger.server.data.dao.PostingDAO;
import oasisledger.server.data.dao.SysSequenceDAO;
import oasisledger.server.data.dto.CurrencyDTO;
import oasisledger.server.data.dto.PostingDTO;
import org.apache.commons.lang3.StringUtils;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import org.jdbi.v3.core.result.LinkedHashMapRowReducer;
import org.jdbi.v3.core.result.RowView;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;

import javax.inject.Inject;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
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
            "order by ph.posting_header_id, pd.posting_detail_id";

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

            BigDecimal amount = pd.getAmount().movePointRight(c.getScale());
            if (amount.remainder(BigDecimal.ONE).compareTo(BigDecimal.ZERO) != 0)
                throw new IllegalArgumentException("Invalid fractional amount for currency "
                        + c.getCurrencyCode() + ": " + pd.getAmount());
            pd.setAmount(amount);
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

        // check account balances are not closed (i.e., not reconciled)
        //TODO

        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            SysSequenceDAO seq = h.attach(SysSequenceDAO.class);
            PostingDAO dao = h.attach(PostingDAO.class);
            long phid = seq.getPostingId();
            ph.setPostingHeaderId(phid);
            dao.insertPostingHeader(ph);
            ph.getDetails().forEach(pd -> {
                long pdid = seq.getPostingId();
                pd.setPostingDetailId(pdid);
                pd.setPostingHeaderId(phid);
                dao.insertPostingDetail(pd);
            });
        });
    }

    public List<PostingDTO.Header> findAll() {
        return findWhere(null);
    }

    public List<PostingDTO.Header> findRecent() {
        return findWhere("ph.audit_ts >= strftime('%s', date('now')) - 60*60*24*30");
    }

    public List<PostingDTO.Header> findWhere(String where) {
        String sql = SQL_SELECT_POSTINGS +
                (StringUtils.isEmpty(where) ? "" : "where " + where + "\n") +
                SQL_SELECT_POSTINGS_ORDER_BY;
        return jdbi.withHandle(h -> h.createQuery(sql)
                .registerRowMapper(BeanMapper.factory(PostingDTO.Header.class))
                .registerRowMapper(BeanMapper.factory(PostingDTO.Detail.class))
                .reduceRows(new PostingReducer())
                .collect(Collectors.toList()));
    }

    class PostingReducer implements LinkedHashMapRowReducer<Long, PostingDTO.Header> {
        @Override
        public void accumulate(Map<Long, PostingDTO.Header> map, RowView rowView) {
            PostingDTO.Header ph = map.computeIfAbsent(rowView.getColumn("posting_header_id", Long.class),
                    id -> rowView.getRow(PostingDTO.Header.class));
            PostingDTO.Detail pd = rowView.getRow(PostingDTO.Detail.class);
            pd.setAmount(pd.getAmount().movePointLeft(rowView.getColumn("scale", Integer.class)));
            ph.getDetails().add(pd);
        }
    }
}
