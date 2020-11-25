package oasisledger.server.data.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;

public class StatementDTO {

    private long statementId;
    public long getStatementId() { return statementId;  }
    public void setStatementId(long statementId) { this.statementId = statementId; }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @NotNull
    private LocalDate statementDate;
    public LocalDate getStatementDate() { return statementDate; }
    public void setStatementDate(LocalDate statementDate) { this.statementDate = statementDate; }

    private int accountId;
    public int getAccountId() { return accountId; }
    public void setAccountId(int accountId) { this.accountId = accountId; }

    private int currencyId;
    public int getCurrencyId() { return currencyId; }
    public void setCurrencyId(int currencyId) { this.currencyId = currencyId; }

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Pattern(regexp = "^[A-Z]{3}$")
    @Size(min = 3, max = 3)
    private String currency;
    public String getCurrency() { return currency; }
    public void setCurrency(String currency) {  this.currency = currency; }

    @NotNull
    private BigDecimal amount;
    public BigDecimal getAmount() { return amount; }
    public void setAmount(BigDecimal amount) { this.amount = amount; }

    @JsonIgnore
    private long rawAmount;
    public long getRawAmount() { return rawAmount; }
    public void setRawAmount(long rawAmount) { this.rawAmount = rawAmount; }

    @Pattern(regexp = "^\\p{Print}{0,128}$")
    @Size(max = 128)
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    private char posted = 'N';
    public char getPosted() { return posted; }
    public void setPosted(char posted) {
        if (!(posted == 'N' || posted == 'Y')) {
            throw new IllegalArgumentException("Invalid posted: " + posted);
        }
        this.posted = posted;
    }

}