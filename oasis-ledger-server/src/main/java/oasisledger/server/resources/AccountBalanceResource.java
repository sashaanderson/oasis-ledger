package oasisledger.server.resources;

import oasisledger.server.data.dao.AccountBalanceDAO;
import oasisledger.server.data.dto.AccountBalanceDTO;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.time.LocalDate;
import java.util.List;

@Path("/account-balance")
@Produces(MediaType.APPLICATION_JSON)
public class AccountBalanceResource {

    private static final String SQL_SELECT_SUMMARY = String.join(" \n",
            "with d1 as (",
            "  select account_id, max(posting_date) as posting_date",
            "  from account_balance",
            "  where posting_date <= :postingDate",
            "  group by account_id",
            "), d2 as (",
            "  select account_id, max(posting_date) as posting_date",
            "  from account_balance",
            "  where posting_date <= :postingDate",
            "  and reconciled = 'Y'",
            "  group by account_id",
            ")",
            "select ab.*",
            "from account_balance ab",
            "join d1 on d1.account_id = ab.account_id",
            "left join d2 on d2.account_id = ab.account_id",
            "where ab.posting_date >= coalesce(d2.posting_date, d1.posting_date)",
            "order by ab.account_id, ab.posting_date");

    private static final String SQL_SELECT_ONE = String.join("\n",
            "select ab.*",
            "from account_balance ab",
            "where ab.account_id = :accountId",
            "and ab.posting_date = :postingDate");

    private final Jdbi jdbi;

    @Inject
    public AccountBalanceResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    @Path("summary/{postingDate}")
    public List<AccountBalanceDTO> getSummary(
            @PathParam("postingDate") @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}") String postingDateParam) {
        LocalDate postingDate = LocalDate.parse(postingDateParam);
        List<AccountBalanceDTO> rows = jdbi.withHandle(h ->
                h.createQuery(SQL_SELECT_SUMMARY)
                        //.bind("postingDate", postingDate.toEpochDay())
                        .bind("postingDate", postingDate)
                        .mapToBean(AccountBalanceDTO.class)
                        .list()
        );
        rows.forEach(row -> {
            row.setAmount(row.getAmount().movePointLeft(2)); // scale = 2
        });
        return rows;
    }

    @POST
    @Path("reconcile")
    public void reconcile(@NotNull @Valid AccountBalanceDTO ab1) {
        // if postingDate >= today, fail?
        int accountId = ab1.getAccountId();
        LocalDate postingDate = ab1.getPostingDate();
        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            AccountBalanceDAO abdao = h.attach(AccountBalanceDAO.class);
            AccountBalanceDTO ab2 = selectOne(h, accountId, postingDate);
            if (ab2 == null) {
                abdao.addBalanceIfNotExists(ab1.getAccountId(), ab1.getPostingDate());
                ab2 = selectOne(h, accountId, postingDate);
                if (ab2 == null) throw new AssertionError();
            }
            ab2.setAmount(ab2.getAmount().movePointLeft(2)); // scale = 2
            if (ab2.getAmount().compareTo(ab1.getAmount()) != 0) {
                throw new BadRequestException("Can't reconcile if amounts don't match");
            }
            abdao.reconcile(ab1.getAccountId(), ab1.getPostingDate());
        });
    }

    private AccountBalanceDTO selectOne(Handle h, int accountId, LocalDate postingDate) {
        return h.createQuery(SQL_SELECT_ONE)
                .bind("accountId", accountId)
                .bind("postingDate", postingDate)
                .mapToBean(AccountBalanceDTO.class)
                .findFirst()
                .orElse(null);
    }
}
