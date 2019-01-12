package oasisledger.server;

import com.google.inject.AbstractModule;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.statement.SqlLogger;
import org.jdbi.v3.core.statement.StatementContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DbModule extends AbstractModule implements SqlLogger {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final String EOL = System.lineSeparator();

    private final Jdbi jdbi;

    public DbModule(Jdbi jdbi) {
        this.jdbi = jdbi;
        jdbi.setSqlLogger(this);
    }

    @Override
    protected void configure() {
        bind(Jdbi.class).toInstance(jdbi);
    }

    @Override
    public void logBeforeExecution(StatementContext ctx) {
        String indent = EOL + "  ";
        logger.debug("SQL = " + EOL
                + indent + String.join(indent, ctx.getRawSql().trim().split("\\r?\\n"))
                + EOL);
        if (!ctx.getBinding().isEmpty()) {
            logger.debug("Bindings = " + ctx.getBinding().toString());
        }
    }
}
