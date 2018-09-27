#!/usr/bin/bash -e

sync() {
  f1=../oasys-ledger-server/src/main/resources/assets/bundle.js
  f2=../oasys-ledger-server/target/classes/assets/bundle.js
  while true; do
    if [[ -e $f1 && -e $f2 && $f1 -nt $f2 ]]; then
      cp -vf $f1 $f2
    fi
    sleep 2
  done
}

sync &
sync=$!

node node_modules/webpack/bin/webpack.js -w --progress

kill $sync >/dev/null 2>&1
cmd /c pause
