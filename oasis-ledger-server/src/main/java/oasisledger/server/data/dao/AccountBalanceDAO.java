package oasisledger.server.data.dao;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.time.LocalDate;

public interface AccountBalanceDAO {

    @SqlUpdate("insert into account_balance (posting_date, account_id, currency_id, amount) "
            + "select :postingDate, :accountId, :currencyId, coalesce("
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
            + "  where posting_date = :postingDate "
            + "  and account_id = :accountId "
            + "  and currency_id = :currencyId"
            + ")")
    void insertDate(@Bind("postingDate") LocalDate postingDate,
                    @Bind("accountId") int accountId,
                    @Bind("currencyId") int currencyId);

    @SqlUpdate("update account_balance "
            + "set amount = amount + :rawAmount, reconciled = 'N' "
            + "where posting_date >= :postingDate "
            + "and account_id = :accountId "
            + "and currency_id = :currencyId")
    void updateAmount(@Bind("postingDate") LocalDate postingDate,
                      @Bind("accountId") int accountId,
                      @Bind("currencyId") int currencyId,
                      @Bind("rawAmount") long rawAmount);

}
