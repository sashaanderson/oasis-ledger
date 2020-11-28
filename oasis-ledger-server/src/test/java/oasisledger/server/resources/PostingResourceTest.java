package oasisledger.server.resources;

//import org.junit.Test;

import oasisledger.server.data.dao.AccountBalanceDAO;
import oasisledger.server.data.dto.AccountDTO;
import oasisledger.server.data.dto.PostingDTO;
import oasisledger.server.data.mappers.DateArgumentFactory;
import oasisledger.server.data.mappers.DateColumnMapper;
import oasisledger.server.data.mappers.MapMapper;
import oasisledger.server.data.repo.PostingRepo;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.argument.Arguments;
import org.jdbi.v3.sqlobject.SqlObjectPlugin;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

public class PostingResourceTest {

    @Test
    public void testBalanceAfterBackDatedPosting() throws IOException {
        Path p1 = Paths.get("../oasis-ledger-db/build/oasis-ledger-core.db");
        assertTrue(Files.exists(p1));
        Path p2 = Files.createTempFile("oasysledger-", ".db");
        p2.toFile().deleteOnExit();
        Files.copy(p1, p2, StandardCopyOption.REPLACE_EXISTING);
        //System.out.println(p2.toAbsolutePath().toString());

        Jdbi jdbi = Jdbi.create("jdbc:sqlite:" + p2.toString());
        jdbi.installPlugin(new SqlObjectPlugin());

        jdbi.getConfig(Arguments.class).register(new DateArgumentFactory());
        jdbi.registerColumnMapper(LocalDate.class, new DateColumnMapper());

        assertEquals(0, jdbi.withHandle(h ->
                h.createQuery("select count(*) from posting_header")
                        .mapTo(Integer.class).findOnly()).intValue());
        assertEquals(0, jdbi.withHandle(h ->
                h.createQuery("select count(*) from posting_detail")
                        .mapTo(Integer.class).findOnly()).intValue());
        assertEquals(0, jdbi.withHandle(h ->
                h.createQuery("select count(*) from account_balance")
                        .mapTo(Integer.class).findOnly()).intValue());

        assertEquals(0, jdbi.withHandle(h ->
                h.createQuery("select count(*) from account")
                        .mapTo(Integer.class).findOnly()).intValue());

        AccountResource accountResource = new AccountResource(jdbi);

        AccountDTO a1 = new AccountDTO();
        a1.setAccountCode("A1");
        a1.setAccountName("Test account 1");
        a1.setAccountTypeId(1); //1=Asset
        a1 = accountResource.create(a1);
        assertEquals(1, a1.getAccountId());

        AccountDTO a2 = new AccountDTO();
        a2.setAccountCode("A2");
        a2.setAccountName("Test account 2");
        a2.setAccountTypeId(1); //1=Asset
        a2 = accountResource.create(a2);
        assertEquals(2, a2.getAccountId());

        PostingDTO.Header ph;
        PostingDTO.Detail pd;

        PostingResource postingResource = new PostingResource(new PostingRepo(jdbi));

        LocalDate date1 = LocalDate.of(2019, 8, 22);

        ph = new PostingDTO.Header();
        ph.setPostingDate(date1);
        ph.setDescription("Test posting 1");

        pd = new PostingDTO.Detail();
        pd.setAccountId(a1.getAccountId());
        pd.setAmount(BigDecimal.valueOf(-1000));
        ph.getDetails().add(pd);

        pd = new PostingDTO.Detail();
        pd.setAccountId(a2.getAccountId());
        pd.setAmount(BigDecimal.valueOf(1000));
        ph.getDetails().add(pd);

        postingResource.post(ph);
        assertTrue(ph.getPostingHeaderId() > 0);

        assertEquals(2, jdbi.withHandle(h ->
                h.createQuery("select count(*) from account_balance")
                        .mapTo(Integer.class).findOnly()).intValue());

        {
            List<Map<String, Object>> accountBalances = jdbi.withHandle(h ->
                    h.createQuery("select * from account_balance order by account_id")
                            .map(new MapMapper()).list());
            assertEquals(2, accountBalances.size());

            assertEquals(1, accountBalances.get(0).get("accountId"));
            assertEquals(2, accountBalances.get(1).get("accountId"));

            assertTrue(accountBalances.get(0).get("postingDate") instanceof Integer);
            assertTrue(accountBalances.get(1).get("postingDate") instanceof Integer);
            assertEquals((int)date1.toEpochDay(), (int)accountBalances.get(0).get("postingDate"));
            assertEquals((int)date1.toEpochDay(), (int)accountBalances.get(1).get("postingDate"));

            // amount may come back as either Integer or Long, depending on how bit it is
            BigDecimal amount1 = new BigDecimal(accountBalances.get(0).get("amount").toString());
            BigDecimal amount2 = new BigDecimal(accountBalances.get(1).get("amount").toString());

            // $1,000.00
            assertEquals(0, amount1.compareTo(BigDecimal.valueOf(-100000)));
            assertEquals(0, amount2.compareTo(BigDecimal.valueOf(100000)));
        }

        LocalDate date2 = LocalDate.of(2019, 8, 21);
        assertTrue(date2.isBefore(date1));

        ph = new PostingDTO.Header();
        ph.setPostingDate(date2);
        ph.setDescription("Test posting 2");

        pd = new PostingDTO.Detail();
        pd.setAccountId(a1.getAccountId());
        pd.setAmount(BigDecimal.valueOf(-200));
        ph.getDetails().add(pd);

        pd = new PostingDTO.Detail();
        pd.setAccountId(a2.getAccountId());
        pd.setAmount(BigDecimal.valueOf(200));
        ph.getDetails().add(pd);

        postingResource.post(ph);
        assertTrue(ph.getPostingHeaderId() > 0);

        assertEquals(4, jdbi.withHandle(h ->
                h.createQuery("select count(*) from account_balance")
                        .mapTo(Integer.class).findOnly()).intValue());

        {
            List<Map<String, Object>> accountBalances = jdbi.withHandle(h ->
                    h.createQuery("select * from account_balance "
                            + "order by account_id, posting_date")
                            .map(new MapMapper()).list());
            assertEquals(4, accountBalances.size());

            assertEquals(1, accountBalances.get(0).get("accountId"));
            assertEquals(1, accountBalances.get(1).get("accountId"));
            assertEquals(2, accountBalances.get(2).get("accountId"));
            assertEquals(2, accountBalances.get(3).get("accountId"));

            // date2 < date1
            assertEquals((int)date2.toEpochDay(), (int)accountBalances.get(0).get("postingDate"));
            assertEquals((int)date1.toEpochDay(), (int)accountBalances.get(1).get("postingDate"));
            assertEquals((int)date2.toEpochDay(), (int)accountBalances.get(2).get("postingDate"));
            assertEquals((int)date1.toEpochDay(), (int)accountBalances.get(3).get("postingDate"));

            BigDecimal amount1 = new BigDecimal(accountBalances.get(0).get("amount").toString());
            BigDecimal amount2 = new BigDecimal(accountBalances.get(1).get("amount").toString());
            BigDecimal amount3 = new BigDecimal(accountBalances.get(2).get("amount").toString());
            BigDecimal amount4 = new BigDecimal(accountBalances.get(3).get("amount").toString());

            assertEquals(0, amount1.compareTo(BigDecimal.valueOf(-20000)));
            assertEquals(0, amount2.compareTo(BigDecimal.valueOf(-120000)));
            assertEquals(0, amount3.compareTo(BigDecimal.valueOf(20000)));
            assertEquals(0, amount4.compareTo(BigDecimal.valueOf(120000)));
        }
    }
}
