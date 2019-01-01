package oasisledger.server.resources;

import oasisledger.server.data.MapMapper;
import org.jdbi.v3.core.Jdbi;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Path("/account-type")
@Produces(MediaType.APPLICATION_JSON)
public class AccountTypeResource {

    private final String SQL_SELECT_ALL = String.join(" \n",
            "select",
            "  account_type_id,",
            "  account_type_code,",
            "  account_type_name,",
            "  sign",
            "from account_type",
            "order by account_type_id");

    private final Jdbi jdbi;

    @Inject
    public AccountTypeResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    public List<Map<String, Object>> fetchAll() throws SQLException {
        return jdbi.withHandle(h ->
                h.createQuery(SQL_SELECT_ALL)
                        .map(new MapMapper())
                        .list()
        );
    }
}
