package oasisledger.server;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.jdbi3.JdbiFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.glassfish.jersey.logging.LoggingFeature;
import org.glassfish.jersey.server.ServerProperties;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.jdbi.v3.core.Jdbi;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class App extends Application<AppConfig> {

    public static void main(final String[] args) throws Exception {
        new App().run(args);
    }

    @Override
    public void initialize(final Bootstrap<AppConfig> bootstrap) {
        bootstrap.addBundle(new AssetsBundle("/assets/", "/", "index.html", "assets"));
    }

    @Override
    public void run(AppConfig config, Environment env) throws IOException {
        env.healthChecks().register("health", new AppHealth());

        JdbiFactory jdbiFactory = new JdbiFactory();
        Jdbi jdbi = jdbiFactory.build(env, config.getDataSourceFactory(), "db");

        Injector injector = Guice.createInjector(
                new DbModule(jdbi),
                new ResourceModule()
        );
        injector.getInstance(ResourceModule.class)
                .getResourceClasses()
                .forEach(c -> {
                    env.jersey().register(injector.getInstance(c));
                });

        env.jersey().register(new LoggingFeature(
                Logger.getLogger(getClass().getName()),
                Level.FINE, // DEBUG
                LoggingFeature.Verbosity.PAYLOAD_ANY,
                LoggingFeature.DEFAULT_MAX_ENTITY_SIZE));

        env.jersey().register(RolesAllowedDynamicFeature.class);
        env.jersey().property(ServerProperties.BV_SEND_ERROR_IN_RESPONSE, true);

        env.jersey().register(AppExceptionMapper.class);
    }
}
