CREATE TABLE posting_header (
  posting_header_id   INTEGER NOT NULL,
  posting_date        DATE NOT NULL,
  description         TEXT NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts INTEGER NOT NULL DEFAULT (strftime('%s','now')),

  CONSTRAINT posting_header_pk PRIMARY KEY (posting_header_id),
  CONSTRAINT posting_header_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
