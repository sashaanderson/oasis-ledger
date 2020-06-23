package oasisledger.server.resources;

import groovy.lang.Binding;
import groovy.util.GroovyScriptEngine;
import groovy.util.ResourceException;
import groovy.util.ScriptException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

@Path("/upload")
//@Produces(MediaType.APPLICATION_JSON)
@Produces(MediaType.TEXT_PLAIN)
public class UploadResource {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final GroovyScriptEngine gse;

    public UploadResource() throws MalformedURLException {
        URL url = new File("./scripts/").toURI().toURL();
        gse = new GroovyScriptEngine(new URL[] {url}, getClass().getClassLoader());
    }

    @GET
    public String test() throws ResourceException, ScriptException {
        //return "Hello1234";
        Binding binding = new Binding();
        binding.setVariable("input", "zzz123");
        gse.run("test.groovy", binding);
        return binding.getVariable("output").toString();
    }
}
