package oasisledger.server.data.logging;

import org.jdbi.v3.core.statement.StatementContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SqlLogger implements org.jdbi.v3.core.statement.SqlLogger {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final String EOL = System.lineSeparator();

    @Override
    public void logBeforeExecution(StatementContext ctx) {
        if (logger.isDebugEnabled()) {
            String sql = ctx.getRawSql();
            String indent = EOL + "  ";
            logger.debug("SQL = " + EOL
                    + indent + String.join(indent, sql.trim().split("\\r?\\n"))
                    + EOL);
            if (!ctx.getBinding().isEmpty()) {
                logger.debug("Bindings = " + ctx.getBinding().toString());
                if (sql.contains(":")) {
                    Pattern p = Pattern.compile(":\\w+");
                    Matcher m = p.matcher(sql);
                    while (m.find()) {
                        logger.debug("Binding " + m.group() + " = " + ctx.getBinding()
                                .findForName(m.group().substring(1), ctx)
                                .orElse(null));
                    }
                }
            }
        }
    }
}
