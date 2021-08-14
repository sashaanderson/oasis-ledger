.PHONY: build
build: src/main/resources/assets/favicon.ico
	mvn package

.PHONY: favicon
favicon: src/main/resources/assets/favicon.ico

src/main/resources/assets/favicon.ico: src/main/resources/assets/favicon.svg
	convert -density 256x256 -background transparent $< \
		-define icon:auto-resize=64,48,32,16 -colors 256 $@

.PHONY: clean
clean:
	mvn clean
