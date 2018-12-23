CREATE TABLE account (
  account_id            INTEGER NOT NULL,
  account_type_id       INTEGER NOT NULL,
  parent_account_id     INTEGER NULL,
  account_code          TEXT NOT NULL,
  account_name          TEXT NOT NULL,

  active_flag           CHAR(1) NOT NULL DEFAULT 'Y',

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT account_pk PRIMARY KEY (account_id),
  CONSTRAINT account_fk_atid FOREIGN KEY (account_type_id)
    REFERENCES account_type(account_type_id),
  CONSTRAINT account_fk_paid FOREIGN KEY (parent_account_id)
    REFERENCES account(account_id),
  CONSTRAINT account_uq_c UNIQUE (account_code),
  CONSTRAINT account_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
