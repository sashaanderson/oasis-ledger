package oasisledger.server.data.dao;

import org.jdbi.v3.sqlobject.statement.SqlUpdate;

public interface StatementDAO {

    @SqlUpdate("update statement "
            + "set posted = 'Y' "
            + "where statement_id = ? "
            + "and account_id = ? "
            + "and currency_id = ? "
            + "and posted = 'N'")
    boolean setPosted(long statementId, int accountId, int currencyId);
}
