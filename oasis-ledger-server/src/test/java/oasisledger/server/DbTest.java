package oasisledger.server;

import oasisledger.server.data.DateArgumentFactory;
import oasisledger.server.data.DateColumnMapper;
import oasisledger.server.data.dao.PostingDAO;
import oasisledger.server.data.dto.PostingDTO;
import org.jdbi.v3.core.Handle;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.argument.Arguments;
import org.jdbi.v3.core.mapper.reflect.BeanMapper;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;
import org.junit.Test;

import java.io.IOException;
import java.sql.*;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
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
            //System.out.println(o1.getClass() + " -> " + o1);
            //System.out.println(o2.getClass() + " -> " + o2);
            assertEquals(Integer.class, o1.getClass());
            assertEquals(1, o1);
            assertEquals(String.class, o2.getClass());
            assertEquals("2019-04-18", o2);
            assertFalse(rs.next());
        }
        con.close();
    }

    @Test
    public void testLocalDateConversionWithJDBI() throws SQLException {
        //Files.deleteIfExists(Paths.get("test3.db"));
        //Jdbi jdbi = Jdbi.create("jdbc:sqlite:test3.db");
        Jdbi jdbi = Jdbi.create("jdbc:sqlite::memory:");
        jdbi.installPlugin(new SqlObjectPlugin());

        final String postingDateStr = "2019-04-20";
        LocalDate postingDate = LocalDate.parse(postingDateStr);
        //System.out.println(java.sql.Date.valueOf(postingDate).getTime()); // 1555732800000

        PostingDTO.Header ph = new PostingDTO.Header();
        ph.setPostingHeaderId(1);
        ph.setDescription("testing123");
        ph.setPostingDate(postingDate);

        try (Handle h = jdbi.open()) {
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
                //System.out.println(o1.getClass() + " -> " + o1);
                //System.out.println(o2.getClass() + " -> " + o2); // 1555732800000
                assertEquals(Integer.class, o1.getClass());
                assertEquals(1, o1);
                assertEquals(Long.class, o2.getClass());

                assertEquals(java.sql.Date.valueOf(postingDate).getTime(), o2);
                assertEquals(postingDate.atStartOfDay(ZoneId.systemDefault()).toEpochSecond() * 1000, o2);

                assertFalse(rs.next());
            }
            // how does JDBC store date as string, but JDBI as int (unix epoch)?

            try (Statement st = con.createStatement();
                 ResultSet rs = st.executeQuery("select "
                         + " datetime(posting_date/1000,'unixepoch','localtime')"
                         + " from posting_header")) {
                assertTrue(rs.next());
                Object o = rs.getObject(1);
                //System.out.println(o.getClass() + " -> " + o);
                assertEquals(postingDateStr + " 00:00:00", o);
                assertFalse(rs.next());
            }

            try (Statement st = con.createStatement();
                 ResultSet rs = st.executeQuery("select "
                         + " date(posting_date/1000,'unixepoch','localtime')"
                         + " from posting_header")) {
                assertTrue(rs.next());
                Object o = rs.getObject(1);
                //System.out.println(o.getClass() + " -> " + o);
                assertEquals(postingDateStr, o);
                assertFalse(rs.next());
            }

            h.registerRowMapper(BeanMapper.factory(PostingDTO.Header.class));
            List<PostingDTO.Header> list = h.createQuery("select * from posting_header")
                    .mapTo(PostingDTO.Header.class)
                    .list();
            assertEquals(1, list.size());
            assertEquals(ph.getPostingHeaderId(), list.get(0).getPostingHeaderId());
            assertEquals(ph.getDescription(), list.get(0).getDescription());
            assertEquals(postingDate, list.get(0).getPostingDate());
        }
    }

    @Test
    public void testLocalDateConversionWithArgumentFactory() throws SQLException {
        Jdbi jdbi = Jdbi.create("jdbc:sqlite::memory:");
        jdbi.installPlugin(new SqlObjectPlugin());

        // important bits:
        jdbi.getConfig(Arguments.class).register(new DateArgumentFactory());
        jdbi.registerColumnMapper(LocalDate.class, new DateColumnMapper());

        final String postingDateStr = "2019-04-26";
        LocalDate postingDate = LocalDate.parse(postingDateStr);

        PostingDTO.Header ph = new PostingDTO.Header();
        ph.setPostingHeaderId(1);
        ph.setDescription("testing123");
        ph.setPostingDate(postingDate);

        try (Handle h = jdbi.open()) {
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
                //System.out.println(o1.getClass() + " -> " + o1);
                //System.out.println(o2.getClass() + " -> " + o2); // 18012
                assertEquals(Integer.class, o1.getClass());
                assertEquals(1, o1);
                assertEquals(Integer.class, o2.getClass());

                LocalDate epochDate = LocalDate.of(1970, 1, 1);
                long days = ChronoUnit.DAYS.between(epochDate, postingDate);

                assertEquals(days, postingDate.toEpochDay());

                assertEquals(days, ((Number)o2).longValue());
                assertEquals((int)days, ((Number)o2).intValue());

                assertEquals(days, rs.getInt(2));
                assertEquals(days, rs.getLong(2));

                assertFalse(rs.next());
            }

            h.registerRowMapper(BeanMapper.factory(PostingDTO.Header.class));
            List<PostingDTO.Header> list = h.createQuery("select * from posting_header")
                    .mapTo(PostingDTO.Header.class)
                    .list();
            assertEquals(1, list.size());
            assertEquals(ph.getPostingHeaderId(), list.get(0).getPostingHeaderId());
            assertEquals(ph.getDescription(), list.get(0).getDescription());
            assertEquals(postingDate, list.get(0).getPostingDate());
        }
    }

}
