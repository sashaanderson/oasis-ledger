#!/usr/bin/bash -e

if [ $# -eq 0 ]; then
    args="server config.yml"
else
    args="$@"
fi

if [ -e target/classes/ ]; then
    java -cp "target/classes;target/lib/*" oasisledger.server.App $args
else
    java -jar oasis-ledger-server-*.jar $args
fi
