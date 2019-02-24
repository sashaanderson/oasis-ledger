package oasisledger.server;

import com.google.common.reflect.ClassPath;
import com.google.inject.AbstractModule;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.statement.SqlLogger;
import org.jdbi.v3.core.statement.StatementContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class DbModule extends AbstractModule implements SqlLogger {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final String EOL = System.lineSeparator();

    private final Jdbi jdbi;
    private final List<Class<?>> repoClasses;

    public DbModule(Jdbi jdbi) throws IOException {
        this.jdbi = jdbi;
        jdbi.setSqlLogger(this);

        String packageName = getClass().getPackage().getName() + ".data.repo";
        this.repoClasses = ClassPath.from(ClassLoader.getSystemClassLoader())
                .getTopLevelClassesRecursive(packageName)
                .stream()
                .map(ci -> ci.load())
                .collect(Collectors.collectingAndThen(
                        Collectors.toList(),
                        Collections::unmodifiableList));
    }

    @Override
    protected void configure() {
        bind(Jdbi.class).toInstance(jdbi);
        repoClasses.forEach(c -> bind(c));
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
