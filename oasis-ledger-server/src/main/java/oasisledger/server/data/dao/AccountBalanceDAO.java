package oasisledger.server.data.dao;

import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.time.LocalDate;

public interface AccountBalanceDAO {

    @SqlUpdate("insert into account_balance (account_id, posting_date, posting_count, amount) "
            + "select :accountId, :postingDate, 0, coalesce("
            + " (select amount from account_balance "
            + "  where account_id = :accountId "
            + "  and posting_date = "
            + "   (select max(posting_date) "
            + "    from account_balance "
            + "    where account_id = :accountId "
            + "    and posting_date < :postingDate)), 0) "
            + "where not exists ("
            + "  select 1 from account_balance "
            + "  where account_id = :accountId "
            + "  and posting_date = :postingDate "
            + ")")
    void addBalanceIfNotExists(@Bind("accountId") int accountId,
                    @Bind("postingDate") LocalDate postingDate);

    @SqlUpdate("update account_balance "
            + "set amount = amount + :rawAmount, "
            + "  reconciled = 'N', "
            + "  posting_count = posting_count + 1 "
            + "where account_id = :accountId "
            + "and posting_date >= :postingDate")
    void addPosting(@Bind("accountId") int accountId,
                      @Bind("postingDate") LocalDate postingDate,
                      @Bind("rawAmount") long rawAmount);

    @SqlUpdate("update account_balance "
            + "set reconciled = 'Y' "
            + "where account_id = :accountId "
            + "and posting_date = :postingDate")
    void reconcile(@Bind("accountId") int accountId,
                   @Bind("postingDate") LocalDate postingDate);

}
