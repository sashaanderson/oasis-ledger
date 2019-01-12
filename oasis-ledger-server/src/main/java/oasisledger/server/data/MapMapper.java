package oasisledger.server.data;

import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.Map;

public class MapMapper implements RowMapper<Map<String, Object>> {

    private static class MapMapperContext {
        private ResultSet rs;
        private String[] columnNames; // converted from snake_case to camelCase
    }

    private volatile MapMapperContext mapperContext = null;

    @Override
    public Map<String, Object> map(ResultSet rs, StatementContext ctx) throws SQLException {
        ResultSetMetaData md = rs.getMetaData();
        int columnCount = md.getColumnCount();

        MapMapperContext mapperContext = this.mapperContext;
        if (mapperContext == null || rs != mapperContext.rs) {
            mapperContext = new MapMapperContext();
            mapperContext.rs = rs;
            mapperContext.columnNames = new String[columnCount];
            for (int i = 1; i <= columnCount; i++) {
                String s = md.getColumnName(i);
                mapperContext.columnNames[i - 1] = convertSnakeCaseToCamelCase(s);
            }
            this.mapperContext = mapperContext;
        }

        Map<String, Object> row = new LinkedHashMap<>();
        for (int i = 1; i <= columnCount; i++) {
            String columnName = mapperContext.columnNames[i - 1];
            row.put(columnName, rs.getObject(i));
        }
        return row;
    }

    private static String convertSnakeCaseToCamelCase(String s) {
        StringBuilder sb = new StringBuilder(s.length());
        boolean uppercaseFlag = false;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '_') {
                uppercaseFlag = true;
                continue;
            }
            if (uppercaseFlag) {
                c = Character.toUpperCase(c);
                uppercaseFlag = false;
            }
            sb.append(c);
        }
        return sb.toString();
    }
}