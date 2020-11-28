package oasisledger.server.data.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.time.LocalDate;

public class AccountBalanceDTO {

    private int accountId;
    public int getAccountId() { return accountId; }
    public void setAccountId(int accountId) { this.accountId = accountId; }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @NotNull
    private LocalDate postingDate;
    public LocalDate getPostingDate() { return postingDate; }
    public void setPostingDate(LocalDate postingDate) { this.postingDate = postingDate; }

    private int postingCount;
    public int getPostingCount() { return postingCount; }
    public void setPostingCount(int postingCount) { this.postingCount = postingCount; }

    @NotNull
    private BigDecimal amount;
    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    private char reconciled = 'Y';
    public char getReconciled() { return reconciled; }
    public void setReconciled(char reconciled) {
        if (!(reconciled == 'N' || reconciled == 'Y')) {
            throw new IllegalArgumentException("Invalid reconciled: " + reconciled);
        }
        this.reconciled = reconciled;
    }

    private int auditUserId;
    public int getAuditUserId() { return auditUserId; }
    public void setAuditUserId(int auditUserId) { this.auditUserId = auditUserId; }

    private long auditTs;
    public long getAuditTs() { return auditTs; }
    public void setAuditTs(long auditTs) { this.auditTs = auditTs; }
}
