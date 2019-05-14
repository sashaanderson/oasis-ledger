package oasisledger.server.data.dao;

import oasisledger.server.data.dto.AccountDTO;
import oasisledger.server.data.mappers.MapMapper;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.List;
import java.util.Map;

public interface AccountDAO {

    @SqlQuery("select * from account order by account_code")
    @RegisterRowMapper(MapMapper.class)
    List<Map<String, Object>> findAll();

    @SqlUpdate("insert into account (account_id, account_type_id, parent_account_id, account_code, account_name) "
            + "values (:accountId, :accountTypeId, :parentAccountId, :accountCode, :accountName)")
    void createAccount(@BindBean AccountDTO account);

    @SqlQuery("select * from account where account_id = ?")
    @RegisterBeanMapper(AccountDTO.class)
    AccountDTO findById(int accountId);

    @SqlQuery("select * from account where account_code = ?")
    @RegisterBeanMapper(AccountDTO.class)
    AccountDTO findByCode(String accountCode);

}