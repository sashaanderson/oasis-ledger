package oasisledger.server.resources;

import io.dropwizard.jersey.params.IntParam;
import oasisledger.server.data.dto.PostingDTO;
import oasisledger.server.data.repo.PostingRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.List;

@Path("/posting")
@Produces(MediaType.APPLICATION_JSON)
public class PostingResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final PostingRepo postingRepo;

    @Inject
    public PostingResource(PostingRepo postingRepo) {
        this.postingRepo = postingRepo;
    }

    @POST
    public PostingDTO.Header post(@NotNull @Valid PostingDTO.Header ph) throws IOException {
        postingRepo.persist(ph);
        return ph;
    }

    @GET
    @Path("top")
    public List<PostingDTO.Header> fetchTop(
            @QueryParam("days") @DefaultValue("14") IntParam days) {
        return postingRepo.findTop(days.get());
    }

    @GET
    @Path("month")
    public List<PostingDTO.Header> fetchMonth(
            @QueryParam("month") IntParam month,
            @QueryParam("year") IntParam year) {
        return postingRepo.findMonth(month.get(), year.get());
    }
}