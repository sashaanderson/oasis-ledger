package oasisledger.server;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;

import javax.validation.Valid;
import javax.validation.constraints.*;

public class AppConfig extends Configuration {

    @NotNull
    @Valid
    private DataSourceFactory database = new DataSourceFactory();

    @JsonProperty("database")
    public void setDataSourceFactory(DataSourceFactory factory) {
        this.database = factory;
    }
    @JsonProperty("database")
    public DataSourceFactory getDataSourceFactory() {
        return database;
    }

}
