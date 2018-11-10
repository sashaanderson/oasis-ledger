.PHONY: build
build:
	cd oasis-ledger-db && $(MAKE) build
	cd oasis-ledger-ui && $(MAKE) build
	cd oasis-ledger-server && $(MAKE) build

.PHONY: clean
clean:
	cd oasis-ledger-db && $(MAKE) clean
	cd oasis-ledger-ui && $(MAKE) clean
	cd oasis-ledger-server && $(MAKE) clean

.PHONY: dist
dist: build
	mkdir -pv dist
	cp -uv oasis-ledger-server/target/oasis-ledger-server-*.jar dist/
	cp -ruv oasis-ledger-server/target/lib/ dist/
	cp -uv oasis-ledger-server/config.yml.sample dist/
	mkdir -pv dist/log

.PHONY: distclean
distclean:
	rm -rfv dist/
