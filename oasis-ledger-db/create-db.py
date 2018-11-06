#!/usr/bin/env python3

import collections
import getopt
import os
import re
import sqlite3
import sys


def usage(err = None):
    if err:
        print(err, file=sys.stderr)
    print("""Usage: create-db.py [OPTIONS]

Options:
  -d PATH, --directory=PATH
    Directory where to create the db file. Default is current directory.

  -h, --help
    Print this help message and exit.
""", file=sys.stderr)
    sys.exit(2)


def main():
    try:
        opts, args = getopt.getopt(
            sys.argv[1:],
            "d:h",
            ["directory=", "help"]
        )
    except getopt.GetoptError as err:
        usage(err)
    basedir = "."
    for o, a in opts:
        if o in ("-h", "--help"):
            usage()
        if o in ("-d", "--directory"):
            basedir = a
    filepath = os.path.join(basedir, "oasys-ledger-core.db")
    if os.path.exists(filepath):
        raise FileExistsError(filepath + " already exists")
    build(filepath)


def build(filepath):
    print("Creating", filepath)
    schema = slurp("src/tables")
    con = sqlite3.connect(filepath)
    cur = con.cursor()
    cur.execute("pragma foreign_keys = on")
    for name, ddl in schema.items():
        print("Table:", name, "...", end=" ")
        cur.executescript(ddl)
        datafile = "src/data/" + name + ".sql"
        if os.path.exists(datafile):
            with open(datafile) as f:
                sql = f.read()
            cur.executescript(sql)
        cur.execute("select count(*) from " + name)
        print(cur.fetchone()[0])
    con.close()


def slurp(dirname):
    schema = {}
    for filename in os.listdir(dirname):
        (basename, ext) = os.path.splitext(filename)
        if ext == ".sql":
            with open(os.path.join(dirname, filename), 'rt') as f:
                schema[basename] = f.read()
    if not dirname.endswith("tables"):
        return schema
    # for tables, re-order in order of referencial dependencies:
    pattern = re.compile(r"\breferences (\w+)", re.I)
    references = {}
    for name, ddl in schema.items():
        references[name] = set()
        for name2 in re.findall(pattern, ddl):
            if name2 != name:
                if name2 in references and name in references[name2]:
                    raise ValueError("Circular reference exists between "
                                     + name + " and " + name2)
                references[name].add(name2)
    schema2 = collections.OrderedDict()
    while len(schema2) < len(schema):
        for name in references.keys():
            take = True
            for name2 in references[name]:
                if name2 not in schema2:
                    take = False
                    break
            if take:
                schema2[name] = schema[name]
    return schema2


if __name__ == "__main__":
    main()
