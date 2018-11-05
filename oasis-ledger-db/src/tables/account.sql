CREATE TABLE account (
  account_id    INTEGER NOT NULL,
  group_id      INTEGER NOT NULL,

  code_name     TEXT NOT NULL,
  long_name     TEXT NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT account_pk PRIMARY KEY (account_id),
  CONSTRAINT account_fk_ag FOREIGN KEY (group_id)
    REFERENCES account_group(group_id),
  CONSTRAINT account_uq_c UNIQUE (code_name),
  CONSTRAINT account_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
