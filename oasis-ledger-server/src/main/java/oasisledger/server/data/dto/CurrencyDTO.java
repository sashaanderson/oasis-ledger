package oasisledger.server.data.dto;

public class CurrencyDTO {

    private int currencyId;
    public int getCurrencyId() { return currencyId; }
    public void setCurrencyId(int currencyId) { this.currencyId = currencyId; }

    private String currencyCode;
    public String getCurrencyCode() { return currencyCode; }
    public void setCurrencyCode(String currencyCode) { this.currencyCode = currencyCode; }

    private String currencyName;
    public String getCurrencyName() { return currencyName; }
    public void setCurrencyName(String currencyName) { this.currencyName = currencyName; }

    private int scale;
    public int getScale() { return scale; }
    public void setScale(int scale) { this.scale = scale; }

    private int auditUserId;
    public int getAuditUserId() { return auditUserId; }
    public void setAuditUserId(int auditUserId) { this.auditUserId = auditUserId; }

    private long auditTs;
    public long getAuditTs() { return auditTs; }
    public void setAuditTs(long auditTs) { this.auditTs = auditTs; }
}