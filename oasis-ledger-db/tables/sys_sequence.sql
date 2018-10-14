CREATE TABLE sys_sequence (
  sequence_id   INTEGER NOT NULL,
  table_name    TEXT NOT NULL,
  column_name   TEXT NOT NULL,

  next_value    INTEGER NOT NULL DEFAULT 1,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT sys_sequence PRIMARY KEY (sequence_id),
  CONSTRAINT sys_sequence UNIQUE (table_name, column_name),
  CONSTRAINT sys_sequence_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
