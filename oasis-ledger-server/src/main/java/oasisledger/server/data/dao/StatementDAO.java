package oasisledger.server.data.dao;

import oasisledger.server.data.dto.StatementDTO;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

public interface StatementDAO {

    @SqlUpdate("insert into statement (statement_id, statement_date, account_id, amount, description, posted) "
            + "values (:statementId, :statementDate, :accountId, :amount, :description, :posted)")
    void insert(@BindBean StatementDTO s);

    @SqlUpdate("update statement "
            + "set posted = 'Y' "
            + "where statement_id = ? "
            + "and account_id = ? "
            + "and posted = 'N'")
    boolean setPosted(long statementId, int accountId);
}
