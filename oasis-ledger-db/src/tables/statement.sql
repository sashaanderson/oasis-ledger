CREATE TABLE statement (
  statement_id      INTEGER NOT NULL,
  statement_date    DATE NOT NULL,
  account_id        INTEGER NOT NULL,
  amount            INTEGER NOT NULL, -- debit positive, credit negative
  description       TEXT NOT NULL,
  posted            CHAR(1) NOT NULL DEFAULT 'N',

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),

  CONSTRAINT statement_pk PRIMARY KEY (statement_id),
  CONSTRAINT statement_fk_a FOREIGN KEY (account_id)
    REFERENCES account(account_id),
  CONSTRAINT statement_ck_a CHECK (amount <> 0),
  CONSTRAINT statement_ck_p CHECK (posted IN ('N', 'Y')),
  CONSTRAINT statement_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
