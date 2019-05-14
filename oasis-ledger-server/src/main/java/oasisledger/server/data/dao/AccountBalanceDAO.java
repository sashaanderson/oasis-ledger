package oasisledger.server.data.dao;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.time.LocalDate;

public interface AccountBalanceDAO {

    @SqlUpdate("insert or replace into account_balance "
            + "(posting_date, account_id, currency_id, amount) "
            + "select :postingDate, :accountId, :currencyId, :rawAmount + coalesce( "
            + " (select amount from account_balance "
            + "  where account_id = :accountId "
            + "  and currency_id = :currencyId "
            + "  and posting_date = "
            + "   (select max(posting_date) "
            + "    from account_balance "
            + "    where account_id = :accountId "
            + "    and currency_id = :currencyId "
            + "    and posting_date <= :postingDate)), 0)")
    void add(@Bind("postingDate") LocalDate postingDate,
             @Bind("accountId") int accountId,
             @Bind("currencyId") int currencyId,
             @Bind("rawAmount") long rawAmount);

}
