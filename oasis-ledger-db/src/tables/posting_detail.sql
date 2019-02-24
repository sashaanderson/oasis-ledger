CREATE TABLE posting_detail (
  posting_detail_id   INTEGER NOT NULL,
  posting_header_id   INTEGER NOT NULL,
  account_id          INTEGER NOT NULL,
  currency_id         INTEGER NOT NULL,
  amount              INTEGER NOT NULL, -- debit positive, credit negative
  statement_id        INTEGER,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts INTEGER NOT NULL DEFAULT (strftime('%s','now')),

  CONSTRAINT posting_detail_pk PRIMARY KEY (posting_detail_id),
  CONSTRAINT posting_detail_fk_ph FOREIGN KEY (posting_header_id)
    REFERENCES posting_header(posting_header_id),
  CONSTRAINT posting_detail_fk_a FOREIGN KEY (account_id)
    REFERENCES account(account_id),
  CONSTRAINT posting_detail_fk_c FOREIGN KEY (currency_id)
    REFERENCES currency(currency_id),
  CONSTRAINT posting_detail_fk_s FOREIGN KEY (statement_id)
    REFERENCES statement(statement_id),
  CONSTRAINT posting_detail_ck_a CHECK (amount <> 0),
  CONSTRAINT posting_detail_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
