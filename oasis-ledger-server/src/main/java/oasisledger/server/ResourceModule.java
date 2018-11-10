package oasisledger.server;

import com.google.common.reflect.ClassPath;
import com.google.inject.AbstractModule;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ResourceModule extends AbstractModule {

    private final List<Class<?>> resources;

    public ResourceModule() throws IOException {
        ClassPath cp = ClassPath.from(ClassLoader.getSystemClassLoader());
        String packageName = getClass().getPackage().getName() + ".resources";

        ArrayList<Class<?>> resources = new ArrayList<>();
        cp.getTopLevelClassesRecursive(packageName).forEach(ci -> {
            resources.add(ci.load());
        });
        this.resources = Collections.unmodifiableList(resources);
    }

    public List<Class<?>> getResources() {
        return resources;
    }

    @Override
    protected void configure() {
        bind(ResourceModule.class).toInstance(this);
        resources.forEach(c -> bind(c));
    }

}
