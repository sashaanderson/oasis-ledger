package oasisledger.server;

import com.google.common.reflect.ClassPath;
import com.google.inject.AbstractModule;
import oasisledger.server.data.logging.SqlLogger;
import oasisledger.server.data.mappers.DateArgumentFactory;
import oasisledger.server.data.mappers.DateColumnMapper;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.argument.Arguments;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class DbModule extends AbstractModule {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Jdbi jdbi;
    private final List<Class<?>> repoClasses;

    public DbModule(Jdbi jdbi) throws IOException {
        this.jdbi = jdbi;
        jdbi.setSqlLogger(new SqlLogger());

        jdbi.getConfig(Arguments.class).register(new DateArgumentFactory());
        jdbi.registerColumnMapper(LocalDate.class, new DateColumnMapper());

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

}
