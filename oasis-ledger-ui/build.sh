#!/usr/bin/bash -e

sync() {
  d1=../oasis-ledger-server/src/main/resources/assets
  d2=../oasis-ledger-server/target/classes/assets
  while true; do
    for f1 in $d1/*.*; do
        f2=$d2/${f1##*/}
        if [[ -f $f1 && -f $f2 && $f1 -nt $f2 ]]; then
          cp -vf $f1 $f2
        fi
    done
    sleep 2
  done
}

sync &
sync=$!

set -x
node node_modules/webpack/bin/webpack.js -w --progress --mode=development
set +x

kill $sync >/dev/null 2>&1
cmd /c pause
