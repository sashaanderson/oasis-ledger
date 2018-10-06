.PHONY: build
build: build-ui build-server

.PHONY: build-ui
build-ui: oasis-ledger-ui/node_modules
	cd oasis-ledger-ui && npm run webpack

oasis-ledger-ui/node_modules: oasis-ledger-ui/package.json
	cd oasis-ledger-ui && npm install
	touch $@/

.PHONY: build-server
build-server:
	cd oasis-ledger-server && mvn package

.PHONY: dist
dist: build
	grep '<version>' oasis-ledger-server/pom.xml | head -1 \
	  | grep -v SNAPSHOT
	mkdir -pv dist
	cp -uv oasis-ledger-server/target/oasis-ledger-server-*.jar dist/
	cp -ruv oasis-ledger-server/target/lib/ dist/
	cp -uv oasis-ledger-server/config.yml.sample dist/
	mkdir -pv dist/log

.PHONY: clean
clean:
	cd oasis-ledger-ui && rm -rf node_modules/ 
	cd oasis-ledger-server && mvn clean
