package oasisledger.server.resources;

import oasisledger.server.data.dao.InstitutionDAO;
import oasisledger.server.data.dao.InstitutionLinkDAO;
import org.jdbi.v3.core.Jdbi;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Map;

@Path("/institution")
@Produces(MediaType.APPLICATION_JSON)
public class InstitutionResource {

    private final Jdbi jdbi;

    @Inject
    public InstitutionResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    public List<Map<String, Object>> fetchAll() {
        return jdbi.withExtension(InstitutionDAO.class, dao -> dao.findAll());
    }

    @GET
    @Path("link")
    public List<Map<String, Object>> fetchLinks() {
        return jdbi.withExtension(InstitutionLinkDAO.class, dao -> dao.findAll());
    }

}
