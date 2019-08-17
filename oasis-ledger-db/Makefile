SOURCES := $(shell find src/ -type f)

.PHONY: build
build: build/oasis-ledger-core.db \
	../oasis-ledger-server/oasis-ledger-core.db

build/oasis-ledger-core.db: create-db.py $(SOURCES)
	mkdir -p build
	./create-db.py -d build

../oasis-ledger-server/%.db: build/%.db
	cp -v $< $@

.PHONY: clean
clean:
	rm -rfv build
