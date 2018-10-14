CREATE TABLE sys_user (
  user_id       INTEGER NOT NULL,
  user_name     TEXT NOT NULL,
  full_name     TEXT NOT NULL,

  pw            CHAR(60), -- bcrypt hash

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT sys_user_pk PRIMARY KEY (user_id),
  CONSTRAINT sys_user_uq_un UNIQUE (user_name),
  CONSTRAINT sys_user_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
