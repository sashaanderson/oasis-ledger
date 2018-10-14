CREATE TABLE sys_role (
  role_id       INTEGER NOT NULL,
  role_name     TEXT NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT sys_role_ok PRIMARY KEY (role_id),
  CONSTRAINT sys_role_uq_rn UNIQUE (role_name),
  CONSTRAINT sys_role_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
