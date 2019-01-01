package oasisledger.server.resources;

import oasisledger.server.data.AccountDAO;
import oasisledger.server.data.AccountDTO;
import org.jdbi.v3.core.Jdbi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Path("/account")
@Produces(MediaType.APPLICATION_JSON)
public class AccountResource {

    private static final Logger logger = LoggerFactory.getLogger(AccountResource.class);

    private final Jdbi jdbi;
    private final SysSequenceResource sysSequenceResource;

    @Inject
    public AccountResource(Jdbi jdbi, SysSequenceResource sysSequenceResource) {
        this.jdbi = jdbi;
        this.sysSequenceResource = sysSequenceResource;
    }

    @GET
    public List<Map<String, Object>> fetchAll() throws SQLException {
        return jdbi.withExtension(AccountDAO.class, dao -> dao.findAll());
    }

    @POST
    public AccountDTO create(
            @NotNull @Valid AccountDTO account) {
        if (account.getParentAccountId() != null) {
            AccountDTO parentAccount = jdbi.withExtension(AccountDAO.class, dao -> {
                return dao.findById(account.getParentAccountId());
            });
            if (parentAccount.getAccountTypeId() != account.getAccountTypeId()) {
                throw new BadRequestException("Account type cannot be different from parent account");
            }
        }

        int accountId = sysSequenceResource.nextValue("account", "account_id", Integer.class);
        account.setAccountId(accountId);
        jdbi.useExtension(AccountDAO.class, dao -> {
            dao.createAccount(account);
        });
        return account;
    }
}