package oasisledger.server.data.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class InstitutionDTO {

    private int institutionId;
    public int getInstitutionId() { return institutionId; }
    public void setInstitutionId(int institutionId) { this.institutionId = institutionId; }

    @NotEmpty
    @Pattern(regexp = "^[a-z0-9]+$")
    private String institutionCode;
    public String getInstitutionCode() { return institutionCode; }
    public void setInstitutionCode(String institutionCode) { this.institutionCode = institutionCode; }

    @NotEmpty
    private String institutionName;
    public String getInstitutionName() { return institutionName; }
    public void setInstitutionName(String institutionName) { this.institutionName = institutionName; }

}
