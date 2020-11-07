CREATE TABLE institution (
  institution_id        INTEGER NOT NULL,
  institution_code      TEXT NOT NULL,
  institution_name      TEXT NOT NULL,

  CONSTRAINT institution_pk PRIMARY KEY (institution_id),
  CONSTRAINT institution_uq_ic UNIQUE (institution_code)
);
