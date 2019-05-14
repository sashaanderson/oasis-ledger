package oasisledger.server.data.mappers;

import org.jdbi.v3.core.argument.AbstractArgumentFactory;
import org.jdbi.v3.core.argument.Argument;
import org.jdbi.v3.core.config.ConfigRegistry;

import java.sql.Types;
import java.time.LocalDate;

public class DateArgumentFactory extends AbstractArgumentFactory<LocalDate> {

    public DateArgumentFactory() {
        super(Types.BIGINT);
    }

    @Override
    protected Argument build(LocalDate date, ConfigRegistry config) {
        return (i, st, ctx) -> st.setLong(i, date.toEpochDay());
    }
}
