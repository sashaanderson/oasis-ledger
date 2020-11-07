package oasisledger.server.data.dao;

import oasisledger.server.data.dto.InstitutionDTO;
import oasisledger.server.data.mappers.MapMapper;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.List;
import java.util.Map;

public interface InstitutionDAO {

    @SqlQuery("select institution_id, institution_code, institution_name "
            + "from institution "
            + "order by institution_id")
    @RegisterRowMapper(MapMapper.class)
    List<Map<String, Object>> findAll();

    @SqlQuery("select * from institution where institution_id = ?")
    @RegisterBeanMapper(InstitutionDTO.class)
    InstitutionDTO findById(int institutionId);

    @SqlQuery("select * from institution where institution_code = ?")
    @RegisterBeanMapper(InstitutionDTO.class)
    InstitutionDTO findByCode(String institutionCode);

}
