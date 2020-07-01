#!/usr/bin/bash -e

if [ $# -eq 0 ]; then
    args="server config.yml"
else
    args="$@"
fi

if [ -n "$JAVA_HOME" ]; then
    JAVACMD="$JAVA_HOME/bin/java"
else
    JAVACMD=java
fi

if [ -e target/classes/ ]; then
    exec "$JAVACMD" -cp "target/classes;target/lib/*" oasisledger.server.App $args
else
    exec "$JAVACMD" -jar oasis-ledger-server-*.jar $args
fi
