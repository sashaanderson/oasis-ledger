CREATE TABLE account_group (
  group_id      INTEGER NOT NULL,
  parent_group_id INTEGER,

  code_name     TEXT NOT NULL,
  long_name     TEXT NOT NULL,
  sign          INTEGER NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT account_group_pk PRIMARY KEY (group_id)
  CONSTRAINT account_group_fk_pgid FOREIGN KEY (parent_group_id)
    REFERENCES account_group(group_id),
  CONSTRAINT account_group_uq_cn UNIQUE (code_name),
  CONSTRAINT account_group_ck_s CHECK (sign IN (-1, 1)),
  CONSTRAINT account_group_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
