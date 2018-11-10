.PHONY: build-continuous
build-continuous:
	cygstart bash ./build.sh

.PHONY: build
build: node_modules
	npm run webpack

node_modules: package.json
	npm install
	touch $@/

.PHONY: clean
clean:

.PHONY: distclean
distclean:
	rm -rf node_modules/
