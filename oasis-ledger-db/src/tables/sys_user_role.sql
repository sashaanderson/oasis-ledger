CREATE TABLE sys_user_role (
  user_id       INTEGER NOT NULL,
  role_id       INTEGER NOT NULL,

  audit_user_id INTEGER NOT NULL DEFAULT 1,
  audit_ts      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT sys_user_role_uq_uiri UNIQUE (user_id, role_id),
  CONSTRAINT sys_user_role_fk_ui FOREIGN KEY (user_id)
    REFERENCES sys_user(user_id),
  CONSTRAINT sys_user_role_fk_ri FOREIGN KEY (role_id)
    REFERENCES sys_role(role_id),
  CONSTRAINT sys_user_role_fk_auid FOREIGN KEY (audit_user_id)
    REFERENCES sys_user(user_id)
);
