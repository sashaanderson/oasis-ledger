package oasisledger.server.resources;

import oasisledger.server.ResultSetSerializer;
import org.jdbi.v3.core.Jdbi;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
public class SysUserResource {

    private final Jdbi jdbi;

    @Inject
    public SysUserResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @GET
    public String doGet() throws SQLException {
        String sql = "select user_id, user_name, full_name \n"
                + "from sys_user \n"
                + "order by user_id \n";
        return jdbi.withHandle(h -> {
            try (PreparedStatement st = h.getConnection().prepareStatement(sql)) {
                return ResultSetSerializer.serialize(st.executeQuery());
            }
        });
    }

}
