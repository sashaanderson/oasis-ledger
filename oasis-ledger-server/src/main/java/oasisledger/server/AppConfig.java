package oasisledger.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.ImmutableMap;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;
import org.sqlite.SQLiteConfig;

import javax.validation.Valid;
import javax.validation.constraints.*;

public class AppConfig extends Configuration {

    @NotNull
    @Valid
    private DataSourceFactory database = new DataSourceFactory();

    @JsonProperty("database")
    public void setDataSourceFactory(DataSourceFactory database) {
        database.setDriverClass(org.sqlite.JDBC.class.getName()); // org.sqlite.JDBC
        database.setProperties(ImmutableMap.of(
                "open_mode", "2" // SQLITE_OPEN_READWRITE, do not create if not exists
        ));
        database.setInitializationQuery("pragma foreign_keys = on");
        this.database = database;
    }

    @JsonProperty("database")
    public DataSourceFactory getDataSourceFactory() {
        return database;
    }

}
