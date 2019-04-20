CREATE TABLE currency (
  currency_id       INTEGER NOT NULL,
  currency_code     CHAR(3) NOT NULL,
  currency_name     TEXT NOT NULL,
  scale             INTEGER NOT NULL DEFAULT 2,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),

  CONSTRAINT currency_pk PRIMARY KEY (currency_id),
  CONSTRAINT currency_uq_cn UNIQUE (currency_code),
  CONSTRAINT statement_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
