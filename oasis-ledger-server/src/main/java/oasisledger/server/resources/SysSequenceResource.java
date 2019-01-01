package oasisledger.server.resources;

import org.jdbi.v3.core.Jdbi;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/sys-sequence")
@Produces(MediaType.APPLICATION_JSON)
public class SysSequenceResource {

    private final String SQL_SELECT_NEXT_VALUE = String.join(" \n",
            "select next_value",
            "from sys_sequence",
            "where table_name = :tableName",
            "and column_name = :columnName");

    private final String SQL_UPDATE_NEXT_VALUE = String.join(" \n",
            "update sys_sequence",
            "set next_value = next_value + 1",
            "where table_name = :tableName",
            "and column_name = :columnName");

    private final Jdbi jdbi;

    @Inject
    public SysSequenceResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @POST
    @Path("{tableName}/{columnName}")
    public long nextValue(
            @PathParam("tableName") String tableName,
            @PathParam("columnName") String columnName) {
        return nextValue(tableName, columnName, Long.class);
    }

    protected synchronized <T extends Number> T nextValue(
            String tableName,
            String columnName,
            Class<T> numberClass) {
        return jdbi.withHandle(h -> {
            T id = h.createQuery(SQL_SELECT_NEXT_VALUE)
                    .bind("tableName", tableName)
                    .bind("columnName", columnName)
                    .mapTo(numberClass)
                    .findOnly();
            h.createUpdate(SQL_UPDATE_NEXT_VALUE)
                    .bind("tableName", tableName)
                    .bind("columnName", columnName)
                    .execute();
            return id;
        });
    }
}
