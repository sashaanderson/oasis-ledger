package oasisledger.server;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class ResultSetSerializer {

    private static final Logger logger = LoggerFactory.getLogger(ResultSetSerializer.class);

    public static String serialize(ResultSet rs) {
        List<Map<String, Object>> rows = new ArrayList<>();
        try {
            ResultSetMetaData md = rs.getMetaData();
            int columnCount = md.getColumnCount();

            String[] columnNames = new String[columnCount];
            for (int i = 1; i <= columnCount; i++) {
                String s = md.getColumnName(i);
                columnNames[i - 1] = convertUnderscoresToCamelcase(s);
            }

            while (rs.next()) {
                Map<String, Object> row = new LinkedHashMap<>();
                for (int i = 1; i <= columnCount; i++) {
                    row.put(columnNames[i - 1], rs.getObject(i));
                }
                rows.add(row);
            }
            logger.debug("Fetched " + rows.size() + " rows from result set");
        } catch (SQLException e) {
            throw new IllegalArgumentException(e);
        }

        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(rows);
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException(e);
        }
    }

    private static String convertUnderscoresToCamelcase(String s) {
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
