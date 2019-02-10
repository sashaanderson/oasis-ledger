package oasisledger.server.data.dto;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public class PostingDTO {

    public static class Header {
        private long postingHeaderId;
        public long getPostingHeaderId() { return postingHeaderId; }
        public void setPostingHeaderId(long postingHeaderId) { this.postingHeaderId = postingHeaderId; }

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
        private List<Detail> details;
        public List<Detail> getDetails() { return details; }
        public void setDetails(List<Detail> details) { this.details = details; }
    }

    public static class Detail {
        private long postingDetailId;
        public long getPostingDetailId() { return postingDetailId; }
        public void setPostingDetailId(long postingDetailId) { this.postingDetailId = postingDetailId; }

        private long postingHeaderId;
        public long getPostingHeaderId() { return postingHeaderId; }
        public void setPostingHeaderId(long postingHeaderId) { this.postingHeaderId = postingHeaderId; }

        private int accountId;
        public int getAccountId() { return accountId; }
        public void setAccountId(int accountId) { this.accountId = accountId; }

        private int currencyId;
        public int getCurrencyId() { return currencyId; }
        public void setCurrencyId(int currencyId) { this.currencyId = currencyId; }

        @Pattern(regexp = "^[A-Z]{3}$")
        @Size(min = 3, max = 3)
        private String currency;
        public String getCurrency() { return currency; }
        public void setCurrency(String currency) {  this.currency = currency; }

        @NotNull
        private BigDecimal amount;
        public BigDecimal getAmount() { return amount; }
        public void setAmount(BigDecimal amount) { this.amount = amount; }

        private Long statementId;
        public Long getStatementId() { return statementId; }
        public void setStatementId(Long statementId) { this.statementId = statementId; }
    }
}
