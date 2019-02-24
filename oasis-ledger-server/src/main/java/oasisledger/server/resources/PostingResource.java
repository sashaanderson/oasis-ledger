package oasisledger.server.resources;

import oasisledger.server.data.dto.PostingDTO;
import oasisledger.server.data.repo.PostingRepo;
import org.jdbi.v3.core.Jdbi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.List;

@Path("/posting")
@Produces(MediaType.APPLICATION_JSON)
public class PostingResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Jdbi jdbi;
    private final PostingRepo postingRepo;

    @Inject
    public PostingResource(Jdbi jdbi, PostingRepo postingRepo) {
        this.jdbi = jdbi;
        this.postingRepo = postingRepo;
    }

    @POST
    public PostingDTO.Header post(@NotNull @Valid PostingDTO.Header ph) throws IOException {
        postingRepo.persist(ph);
        return ph;
    }

    @GET
    public List<PostingDTO.Header> fetch() {
        // order
        // limit
        // offset
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ex) {}
        return postingRepo.findAll();
    }

    @GET
    @Path("recent")
    public List<PostingDTO.Header> fetchRecent() {
        return postingRepo.findRecent();
    }

}
