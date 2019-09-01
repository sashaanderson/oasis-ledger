package oasisledger.server.data.dao;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.time.LocalDate;

public interface AccountBalanceDAO {

    @SqlUpdate("insert into account_balance (account_id, currency_id, posting_date, posting_count, amount) "
            + "select :accountId, :currencyId, :postingDate, 0, coalesce("
            + " (select amount from account_balance "
            + "  where account_id = :accountId "
            + "  and currency_id = :currencyId "
            + "  and posting_date = "
            + "   (select max(posting_date) "
            + "    from account_balance "
            + "    where account_id = :accountId "
            + "    and currency_id = :currencyId "
            + "    and posting_date < :postingDate)), 0)"
            + "where not exists ("
            + "  select 1 from account_balance "
            + "  where account_id = :accountId "
            + "  and currency_id = :currencyId "
            + "  and posting_date = :postingDate "
            + ")")
    void insertDate(@Bind("accountId") int accountId,
                    @Bind("currencyId") int currencyId,
                    @Bind("postingDate") LocalDate postingDate);

    @SqlUpdate("update account_balance "
            + "set amount = amount + :rawAmount, "
            + "  reconciled = 'N', "
            + "  posting_count = posting_count + 1 "
            + "where account_id = :accountId "
            + "and currency_id = :currencyId "
            + "and posting_date >= :postingDate")
    void updateAmount(@Bind("accountId") int accountId,
                      @Bind("currencyId") int currencyId,
                      @Bind("postingDate") LocalDate postingDate,
                      @Bind("rawAmount") long rawAmount);

}
