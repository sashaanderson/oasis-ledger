package oasisledger.server.data.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class PostingDTO {

    public static class Header {

        private long postingHeaderId;
        public long getPostingHeaderId() { return postingHeaderId; }
        public void setPostingHeaderId(long postingHeaderId) { this.postingHeaderId = postingHeaderId; }

        @JsonFormat(shape = JsonFormat.Shape.STRING)
        @NotNull
        private LocalDate postingDate;
        public LocalDate getPostingDate() { return postingDate; }
        public void setPostingDate(LocalDate postingDate) { this.postingDate = postingDate; }

        @Pattern(regexp = "^\\p{Print}{0,128}$")
        @Size(max = 128)
        private String description;
        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        @NotNull
        @Valid
        private List<Detail> details = new ArrayList<>();
        public List<Detail> getDetails() { return details; }
        public void setDetails(List<Detail> details) { this.details = details; }

        private int auditUserId;
        public int getAuditUserId() { return auditUserId; }
        public void setAuditUserId(int auditUserId) { this.auditUserId = auditUserId; }

        private long auditTs;
        public long getAuditTs() { return auditTs; }
        public void setAuditTs(long auditTs) { this.auditTs = auditTs; }
    }

    public static class Detail {

        private long postingDetailId;
        public long getPostingDetailId() { return postingDetailId; }
        public void setPostingDetailId(long postingDetailId) { this.postingDetailId = postingDetailId; }

        @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
        private long postingHeaderId;
        public long getPostingHeaderId() { return postingHeaderId; }
        public void setPostingHeaderId(long postingHeaderId) { this.postingHeaderId = postingHeaderId; }

        private int accountId;
        public int getAccountId() { return accountId; }
        public void setAccountId(int accountId) { this.accountId = accountId; }

        @NotNull
        private BigDecimal amount;
        public BigDecimal getAmount() { return amount; }
        public void setAmount(BigDecimal amount) { this.amount = amount; }

        @JsonIgnore
        private long rawAmount;
        public long getRawAmount() { return rawAmount; }
        public void setRawAmount(long rawAmount) { this.rawAmount = rawAmount; }

        private Long statementId;
        public Long getStatementId() { return statementId; }
        public void setStatementId(Long statementId) { this.statementId = statementId; }

        private StatementDTO statement;
        public StatementDTO getStatement() { return statement; }
        public void setStatement(StatementDTO statement) { this.statement = statement; }
    }
}
