CREATE TABLE account_type (
  account_type_id       INTEGER NOT NULL,
  account_type_code     TEXT NOT NULL,
  account_type_name     TEXT NOT NULL,
  sign                  INTEGER NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),

  CONSTRAINT account_type_pk PRIMARY KEY (account_type_id)
  CONSTRAINT account_group_uq_atc UNIQUE (account_type_code),
  CONSTRAINT account_group_ck_s CHECK (sign IN (-1, 1)),
  CONSTRAINT account_group_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
