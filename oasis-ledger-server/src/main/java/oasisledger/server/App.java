package oasisledger.server;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

import java.io.IOException;

public class App extends Application<AppConfig> {

    public static void main(final String[] args) throws Exception {
        new App().run(args);
    }

    @Override
    public void run(AppConfig config, Environment env) throws IOException {
        env.healthChecks().register("health", new AppHealth());

        ResourceModule rm = new ResourceModule();
        Injector injector = Guice.createInjector(rm);
        rm.getResources().forEach(c ->
                env.jersey().register(injector.getInstance(c))
        );
    }

    @Override
    public void initialize(final Bootstrap<AppConfig> bootstrap) {
        bootstrap.addBundle(new AssetsBundle("/assets/", "/", "index.html", "assets"));
    }
}
