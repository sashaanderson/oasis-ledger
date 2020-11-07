CREATE TABLE institution_link (
  account_id            INTEGER NOT NULL,
  institution_id        INTEGER NOT NULL,
  reference             TEXT,

  CONSTRAINT institution_link_pk PRIMARY KEY (account_id),
  CONSTRAINT institution_link_fk_a FOREIGN KEY (account_id)
    REFERENCES account(account_id),
  CONSTRAINT institution_link_fk_i FOREIGN KEY (institution_id)
    REFERENCES institution(institution_id),
  CONSTRAINT institution_link_uq_ir UNIQUE (institution_id, reference)
);
