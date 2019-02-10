package oasisledger.server.resources;

import oasisledger.server.data.dao.CurrencyDAO;
import oasisledger.server.data.dao.PostingDAO;
import oasisledger.server.data.dao.SysSequenceDAO;
import oasisledger.server.data.dto.CurrencyDTO;
import oasisledger.server.data.dto.PostingDTO;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.transaction.TransactionIsolationLevel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

@Path("/posting")
@Produces(MediaType.APPLICATION_JSON)
public class PostingResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Jdbi jdbi;

    @Inject
    public PostingResource(Jdbi jdbi) {
        this.jdbi = jdbi;
    }

    @POST
    public PostingDTO.Header post(@NotNull @Valid PostingDTO.Header ph) throws IOException {
        ph.setDescription(ph.getDescription() == null ? "" : ph.getDescription().trim());

        ph.getDetails().forEach(pd -> {
            CurrencyDTO c;
            if (pd.getCurrency() != null) {
                c = jdbi.withExtension(CurrencyDAO.class, dao -> dao.findByCode(pd.getCurrency()));
                if (c == null)
                    throw new BadRequestException("Invalid currency: " + pd.getCurrency());
                if (pd.getCurrencyId() == 0)
                    pd.setCurrencyId(c.getCurrencyId());
                else if (pd.getCurrencyId() != c.getCurrencyId())
                    throw new BadRequestException("Conflicting currency and currencyId");
            } else {
                if (pd.getCurrencyId() == 0)
                    throw new BadRequestException("Missing currency");
                c = jdbi.withExtension(CurrencyDAO.class, dao -> dao.findById(pd.getCurrencyId()));
                if (c == null)
                    throw new BadRequestException("Invalid currencyId: " + pd.getCurrencyId());
            }

            BigDecimal amount = pd.getAmount().movePointRight(c.getScale());
            if (amount.remainder(BigDecimal.ONE).compareTo(BigDecimal.ZERO) != 0)
                throw new BadRequestException("Invalid fractional amount for currency "
                        + c.getCurrencyCode() + ": " + pd.getAmount());
            pd.setAmount(amount);
        });

        validate(ph);

        jdbi.useTransaction(TransactionIsolationLevel.SERIALIZABLE, h -> {
            SysSequenceDAO seq = h.attach(SysSequenceDAO.class);
            PostingDAO dao = h.attach(PostingDAO.class);
            long phid = seq.getPostingId();
            ph.setPostingHeaderId(phid);
            dao.insertPostingHeader(ph);
            ph.getDetails().forEach(pd -> {
                long pdid = seq.getPostingId();
                pd.setPostingDetailId(pdid);
                pd.setPostingHeaderId(phid);
                dao.insertPostingDetail(pd);
            });
        });
        return ph;
    }

    private void validate(PostingDTO.Header ph) throws BadRequestException {
        if (ph.getDetails() == null || ph.getDetails().isEmpty()) {
            throw new BadRequestException("Missing posting details");
        }

        if (ph.getPostingDate().getYear() > LocalDate.now().getYear() + 100 ||
                ph.getPostingDate().getYear() < LocalDate.now().getYear() - 100) {
            throw new BadRequestException("Invalid posting date: " + ph.getPostingDate());
        }

        long countCurrencies = ph.getDetails().stream().map(pd -> pd.getCurrencyId()).distinct().count();
        if (countCurrencies > 2) {
            throw new BadRequestException("Invalid posting with " + countCurrencies + " currencies");
        }
        if (countCurrencies == 1) {
            BigDecimal total = ph.getDetails().stream()
                    .map(pd -> pd.getAmount())
                    .reduce((a, b) -> a.add(b))
                    .get();
            if (total.compareTo(BigDecimal.ZERO) != 0) {
                throw new BadRequestException("Unbalanced posting with non zero total: " + total);
            }
        }

        if (!ph.getDetails().stream()
                .map(pd -> pd.getAccountId())
                .allMatch(new HashSet<>()::add)) {
            throw new BadRequestException("Accounts must be unique within a single posting");
        }

        // check account balances are not closed (i.e., not reconciled)
        //TODO
    }

}
