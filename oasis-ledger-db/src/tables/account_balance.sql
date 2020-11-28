CREATE TABLE account_balance (
  account_id            INTEGER NOT NULL,
  posting_date          DATE NOT NULL,

  posting_count         INTEGER NOT NULL,
  amount                INTEGER NOT NULL, -- sum(debit)+sum(credits)
  reconciled            CHAR(1) NOT NULL DEFAULT 'N',

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),

  CONSTRAINT account_balance_pk
    PRIMARY KEY (account_id, posting_date),
  CONSTRAINT account_balance_fk_a FOREIGN KEY (account_id)
    REFERENCES account(account_id),
  CONSTRAINT account_balance_ck_r CHECK (reconciled IN ('N', 'Y')),
  CONSTRAINT account_balance_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
