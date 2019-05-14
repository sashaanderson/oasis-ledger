package oasisledger.server.data.dao;

import oasisledger.server.data.mappers.MapMapper;
import oasisledger.server.data.dto.CurrencyDTO;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.List;
import java.util.Map;

public interface CurrencyDAO {

    @SqlQuery("select currency_id, currency_code, currency_name, scale "
            + "from currency order by currency_code")
    @RegisterRowMapper(MapMapper.class)
    List<Map<String, Object>> findAll();

    @SqlQuery("select * from currency where currency_id = ?")
    @RegisterBeanMapper(CurrencyDTO.class)
    CurrencyDTO findById(int currencyId);

    @SqlQuery("select * from currency where currency_code = ?")
    @RegisterBeanMapper(CurrencyDTO.class)
    CurrencyDTO findByCode(String currencyCode);

}