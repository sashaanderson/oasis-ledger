package oasisledger.server.resources;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectMapper;
import groovy.lang.Binding;
import groovy.util.GroovyScriptEngine;
import groovy.util.ResourceException;
import groovy.util.ScriptException;
import oasisledger.server.data.dao.AccountDAO;
import oasisledger.server.data.dao.InstitutionDAO;
import oasisledger.server.data.dao.InstitutionLinkDAO;
import oasisledger.server.data.dto.AccountDTO;
import oasisledger.server.data.dto.InstitutionDTO;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.jdbi.v3.core.Jdbi;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Path("/upload")
@Produces(MediaType.APPLICATION_JSON)
public class UploadResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final Jdbi jdbi;
    private final GroovyScriptEngine gse;

    @Inject
    public UploadResource(Jdbi jdbi) throws MalformedURLException {
        this.jdbi = jdbi;

        URL url = new File("./scripts/").toURI().toURL();
        gse = new GroovyScriptEngine(new URL[] {url}, getClass().getClassLoader());
    }

    @GET
    public Map<String, String> test() throws ResourceException, ScriptException {
        //return "Hello1234";
        Binding binding = new Binding();
        binding.setVariable("input", "zzz123");
        gse.run("test.groovy", binding);
        String output = binding.getVariable("output").toString();
        return Map.of("output", output);
    }

    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public List<Map<String, Object>> upload(
            @FormDataParam("file") InputStream fileStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail,
            @FormDataParam("institution") int institutionId,
            @FormDataParam("account") int accountId)
            throws IOException, ResourceException, ScriptException {
        //String[] lines = new String(fileStream.readAllBytes(), StandardCharsets.UTF_8).split("[\\r\\n]+");

        logger.debug("Upload, filename=" + fileDetail.getFileName()
                + ", size=" + fileDetail.getSize()
                + ", institution=" + institutionId
                + ", accountId=" + accountId);

        String scriptName = getScriptName(institutionId);
        String[] args = getArgs(institutionId, accountId);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        Binding binding = new Binding();
        binding.setVariable("args", args);
        binding.setVariable("stdin", fileStream);
        binding.setVariable("stdout", new PrintStream(baos));

        gse.run(scriptName, binding);
        //TODO - try-catch around .run, simple error message on exception but log full exception

        List<Map<String, Object>> result = new ArrayList<>();
        for (MappingIterator<Map> it = new ObjectMapper().readValues(
                new JsonFactory().createParser(baos.toByteArray()), Map.class); it.hasNext(); ) {
            result.add(it.next());
        }

        return result;
    }

    private String getScriptName(int institutionId) {
        InstitutionDTO institution = jdbi.withExtension(InstitutionDAO.class, dao ->
                dao.findById(institutionId)
        );
        if (institution == null)
            throw new IllegalArgumentException("Invalid institution id " + institutionId);

        String institutionCode = institution.getInstitutionCode();
        if (!institutionCode.matches("^[a-z0-9]+$"))
            throw new IllegalStateException("Invalid institution code, expected lowercase alphanumeric, got: " + institutionCode);

        return institutionCode + ".groovy";
    }

    private String[] getArgs(int institutionId, int accountId) {
        String[] args;
        if (accountId != 0) {
            AccountDTO account = jdbi.withExtension(AccountDAO.class, dao ->
                    dao.findById(accountId)
            );
            if (account == null)
                throw new IllegalArgumentException("Invalid account id " + accountId);
            args = new String[] { Integer.toString(accountId) };
        } else { // accountId == 0
            List<Map<String, Object>> links = jdbi.withExtension(InstitutionLinkDAO.class, dao ->
                    dao.findByInstitutionId(institutionId)
            );
            if (links.isEmpty())
                throw new IllegalArgumentException("Can't find any institution links for institution id " + institutionId);
            args = new String[links.size()];
            for (int i = 0; i < args.length; i++) {
                args[i] = links.get(i).get("account_id").toString();
                String reference = links.get(i).get("reference").toString();
                if (reference != null && !reference.isBlank())
                    args[i] += (":" + reference);
            }
        }
        return args;
    }

}
