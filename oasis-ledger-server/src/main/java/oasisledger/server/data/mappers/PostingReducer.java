package oasisledger.server.data.mappers;

import oasisledger.server.data.dto.PostingDTO;
import org.jdbi.v3.core.result.LinkedHashMapRowReducer;
import org.jdbi.v3.core.result.RowView;

import java.util.Map;

public class PostingReducer implements LinkedHashMapRowReducer<Long, PostingDTO.Header> {
    @Override
    public void accumulate(Map<Long, PostingDTO.Header> map, RowView rowView) {
        PostingDTO.Header ph = map.computeIfAbsent(rowView.getColumn("posting_header_id", Long.class),
                id -> rowView.getRow(PostingDTO.Header.class));
        PostingDTO.Detail pd = rowView.getRow(PostingDTO.Detail.class);
        pd.setAmount(pd.getAmount().movePointLeft(rowView.getColumn("scale", Integer.class)));
        ph.getDetails().add(pd);
    }
}
