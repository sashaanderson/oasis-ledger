package oasisledger.server;

import org.jdbi.v3.core.statement.UnableToExecuteStatementException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.sqlite.SQLiteException;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

public class AppExceptionMapper implements ExceptionMapper<Exception> {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public Response toResponse(Exception e) {
        String message;
        if (e instanceof WebApplicationException) {
            message = e.getMessage();
        } else if (e instanceof UnableToExecuteStatementException && e.getCause() instanceof SQLiteException) {
            message = e.getCause().getMessage();
            // for example: [SQLITE_CONSTRAINT] Abort due to constraint violation (UNIQUE constraint failed: ...)
        } else {
            message = e.toString();
            logger.warn("Exception occurred: " + e.toString(), e);
        }
        return Response.serverError()
                .entity(message)
                .type(MediaType.TEXT_PLAIN)
                .build();
    }
}
