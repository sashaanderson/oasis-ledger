package oasisledger.server;

import com.codahale.metrics.health.HealthCheck;

public class AppHealth extends HealthCheck {
    @Override
    protected Result check() throws Exception {
        return Result.healthy();
    }
}
