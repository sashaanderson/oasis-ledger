package oasisledger.server.resources;

import oasisledger.server.data.dao.CurrencyDAO;
import org.jdbi.v3.core.Jdbi;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Path("/currency")
@Produces(MediaType.APPLICATION_JSON)
public class CurrencyResource {

    private final Jdbi jdbi;

    @Inject
    public CurrencyResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    public List<Map<String, Object>> fetchAll() throws SQLException {
        return jdbi.withExtension(CurrencyDAO.class, dao -> dao.findAll());
    }
}
