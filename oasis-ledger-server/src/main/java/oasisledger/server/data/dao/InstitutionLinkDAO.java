package oasisledger.server.data.dao;

import oasisledger.server.data.mappers.MapMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.List;
import java.util.Map;

public interface InstitutionLinkDAO {

    @SqlQuery("select account_id, institution_id, reference "
            + "from institution_link "
            + "order by account_id, institution_id")
    @RegisterRowMapper(MapMapper.class)
    List<Map<String, Object>> findAll();

}
