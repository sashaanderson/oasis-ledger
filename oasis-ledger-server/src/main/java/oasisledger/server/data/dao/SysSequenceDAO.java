package oasisledger.server.data.dao;

import org.jdbi.v3.core.transaction.TransactionIsolationLevel;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.transaction.Transaction;

public interface SysSequenceDAO {

    @SqlQuery("select next_value from sys_sequence "
            + "where table_name = ? "
            + "and column_name = ?")
    long selectNextValue(String tableName, String columnName);

    @SqlUpdate("update sys_sequence "
            + "set next_value = next_value + 1 "
            + "where table_name = ? "
            + "and column_name = ?")
    void updateNextValue(String tableName, String columnName);

    @Transaction(TransactionIsolationLevel.SERIALIZABLE)
    default long nextValue(String tableName, String columnName) {
        long nextValue = selectNextValue(tableName, columnName);
        updateNextValue(tableName, columnName);
        return nextValue;
    }

    default int getAccountId() {
        return (int)nextValue("account", "account_id");
    }
    default long getPostingId() {
        return nextValue("posting", "posting_id");
    }
    default int getUserId() {
        return (int)nextValue("sys_user", "user_id");
    }
    default int getRoleId() {
        return (int)nextValue("sys_role", "role_id");
    }

}
