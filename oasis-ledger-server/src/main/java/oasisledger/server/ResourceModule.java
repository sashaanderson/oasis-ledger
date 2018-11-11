package oasisledger.server;

import com.google.common.reflect.ClassPath;
import com.google.inject.AbstractModule;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ResourceModule extends AbstractModule {

    private final List<Class<?>> resourceClasses;

    public ResourceModule() throws IOException {
        ClassPath cp = ClassPath.from(ClassLoader.getSystemClassLoader());
        String packageName = getClass().getPackage().getName() + ".resources";

        ArrayList<Class<?>> resources = new ArrayList<>();
        cp.getTopLevelClassesRecursive(packageName).forEach(ci -> {
            resources.add(ci.load());
        });
        this.resourceClasses = Collections.unmodifiableList(resources);
    }

    public List<Class<?>> getResourceClasses() {
        return resourceClasses;
    }

    @Override
    protected void configure() {
        bind(ResourceModule.class).toInstance(this);
        resourceClasses.forEach(c -> bind(c));
    }
}
