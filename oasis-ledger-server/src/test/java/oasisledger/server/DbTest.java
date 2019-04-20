package oasisledger.server;

import oasisledger.server.data.dao.PostingDAO;
import oasisledger.server.data.dto.PostingDTO;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;
import org.junit.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.*;
import java.time.LocalDate;
import java.util.List;

import static org.junit.Assert.*;

public class DbTest {

    @Test
    public void testLocalDateConversionWithJDBC() throws SQLException, IOException {
        //Files.deleteIfExists(Paths.get("test2.db"));
        //Connection con = DriverManager.getConnection("jdbc:sqlite:test2.db");
        Connection con = DriverManager.getConnection("jdbc:sqlite::memory:");
        try (Statement st = con.createStatement()) {
            st.executeUpdate("create table foo (i integer, d date)");
        }

        LocalDate d = LocalDate.of(2019, 4, 18);
        try (PreparedStatement st = con.prepareStatement("insert into foo values (?, ?)")) {
            st.setObject(1, Integer.valueOf(1));
            st.setObject(2, d);
            st.execute();
        }

        try (Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("select * from foo")) {
            assertTrue(rs.next());
            Object o1 = rs.getObject(1);
            Object o2 = rs.getObject(2);
            System.out.println(o1.getClass() + " -> " + o1);
            System.out.println(o2.getClass() + " -> " + o2);
            assertEquals(Integer.class, o1.getClass());
            assertEquals(1, o1);
            assertEquals(String.class, o2.getClass());
            assertEquals("2019-04-18", o2);
            assertFalse(rs.next());
        }
        con.close();
    }

    @Test
    public void testLocalDateConversionWithJDBI() throws SQLException, IOException {
        //Files.deleteIfExists(Paths.get("test3.db"));
        //Jdbi jdbi = Jdbi.create("jdbc:sqlite:test3.db");
        Jdbi jdbi = Jdbi.create("jdbc:sqlite::memory:");
        jdbi.installPlugin(new SqlObjectPlugin());

        LocalDate postingDate = LocalDate.of(2019, 4, 20);
        System.out.println(java.sql.Date.valueOf(postingDate).getTime());

        PostingDTO.Header ph = new PostingDTO.Header();
        ph.setPostingHeaderId(1);
        ph.setDescription("testing123");
        ph.setPostingDate(postingDate);

        jdbi.useHandle(h -> {
            h.execute("CREATE TABLE posting_header (\n" +
                    "  posting_header_id   INTEGER NOT NULL,\n" +
                    "  posting_date        DATE NOT NULL,\n" +
                    "  description         TEXT NOT NULL\n" +
                    ");\n");

            PostingDAO dao = h.attach(PostingDAO.class);
            dao.insertPostingHeader(ph);

            Connection con = h.getConnection();
            try (Statement st = con.createStatement();
                 ResultSet rs = st.executeQuery("select * from posting_header")) {
                assertTrue(rs.next());
                Object o1 = rs.getObject(1);
                Object o2 = rs.getObject(2);
                System.out.println(o1.getClass() + " -> " + o1);
                System.out.println(o2.getClass() + " -> " + o2);
                assertEquals(Integer.class, o1.getClass());
                assertEquals(1, o1);
                assertEquals(Long.class, o2.getClass());
                assertEquals(java.sql.Date.valueOf(postingDate).getTime(), o2);
                assertFalse(rs.next());
            }
            // how does JDBC store date as string, but JDBI as int (unix epoch)?

            h.registerRowMapper(BeanMapper.factory(PostingDTO.Header.class));
            List<PostingDTO.Header> list = h.createQuery("select * from posting_header")
                    .mapTo(PostingDTO.Header.class)
                    .list();
            assertEquals(1, list.size());
            assertEquals(ph.getPostingHeaderId(), list.get(0).getPostingHeaderId());
            assertEquals(ph.getDescription(), list.get(0).getDescription());
            assertEquals(ph.getPostingDate(), list.get(0).getPostingDate());
        });
    }

}
