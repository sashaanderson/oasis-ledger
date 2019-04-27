package oasisledger.server.resources;

import oasisledger.server.data.dao.AccountDAO;
import oasisledger.server.data.dto.AccountDTO;
import oasisledger.server.data.dao.SysSequenceDAO;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Path("/account")
@Produces(MediaType.APPLICATION_JSON)
public class AccountResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Jdbi jdbi;

    @Inject
    public AccountResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    public List<Map<String, Object>> fetchAll() throws SQLException {
        return jdbi.withExtension(AccountDAO.class, dao -> dao.findAll());
    }

    @POST
    public AccountDTO create(@NotNull @Valid AccountDTO account) {
        AccountDTO parentAccount = null;
        if (account.getParentAccount() != null) {
            parentAccount = jdbi.withExtension(AccountDAO.class, dao ->
                dao.findByCode(account.getParentAccount())
            );
            if (parentAccount == null)
                throw new BadRequestException("Invalid parent account: " + account.getParentAccount());
            if (account.getParentAccountId() == null)
                account.setParentAccountId(parentAccount.getAccountId());
            else if (account.getParentAccountId().intValue() != parentAccount.getAccountId())
                throw new BadRequestException("Conflicting parentAccount and parentAccountId");
        }
        if (account.getParentAccountId() != null) {
            if (parentAccount == null)
                parentAccount = jdbi.withExtension(AccountDAO.class, dao ->
                        dao.findById(account.getParentAccountId())
                );
            if (parentAccount.getAccountTypeId() != account.getAccountTypeId())
                throw new BadRequestException("Account type cannot be different from parent account");
        }

        // use transaction, so as not to increment sequence in case account creation fails
        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            int accountId = h.attach(SysSequenceDAO.class).getAccountId();
            account.setAccountId(accountId);
            h.attach(AccountDAO.class).createAccount(account);
        });

        logger.info("Account " + account.getAccountCode() + " has been created");
        return account;
    }
}
