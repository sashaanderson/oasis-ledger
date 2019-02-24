package oasisledger.server;

import com.google.common.reflect.ClassPath;
import com.google.inject.AbstractModule;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ResourceModule extends AbstractModule {

    private final List<Class<?>> resourceClasses;

    public ResourceModule() throws IOException {
        String packageName = getClass().getPackage().getName() + ".resources";
        this.resourceClasses = ClassPath.from(ClassLoader.getSystemClassLoader())
                .getTopLevelClassesRecursive(packageName)
                .stream()
                .map(ci -> ci.load())
                .collect(Collectors.collectingAndThen(
                        Collectors.toList(),
                        Collections::unmodifiableList));
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
