package oasisledger.server.data.dao;

import oasisledger.server.data.dto.PostingDTO;
import org.jdbi.v3.core.result.LinkedHashMapRowReducer;
import org.jdbi.v3.core.result.RowView;
import org.jdbi.v3.sqlobject.SqlObject;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.sqlobject.statement.UseRowReducer;

import java.util.List;
import java.util.Map;

public interface PostingDAO extends SqlObject {

    @SqlUpdate("insert into posting_header (posting_header_id, posting_date, description) "
            + "values (:postingHeaderId, :postingDate, :description)")
    void insertPostingHeader(@BindBean PostingDTO.Header ph);

    @SqlUpdate("insert into posting_detail (posting_detail_id, posting_header_id, account_id, currency_id, amount, statement_id) "
            + "values (:postingDetailId, :postingHeaderId, :accountId, :currencyId, :amount, :statementId)")
    void insertPostingDetail(@BindBean PostingDTO.Detail ph);

}
