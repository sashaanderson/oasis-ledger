package oasisledger.server.data.mappers;

import org.jdbi.v3.core.mapper.ColumnMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;

public class DateColumnMapper implements ColumnMapper<LocalDate> {
    @Override
    public LocalDate map(ResultSet rs, int columnNumber, StatementContext ctx) throws SQLException {
        return LocalDate.ofEpochDay(rs.getLong(columnNumber));
    }
}
