INSERT INTO account_group
  (group_id, parent_group_id, code_name, long_name, sign)
VALUES
  (1, null, 'A', 'Asset', 1),
  (2, null, 'L', 'Liability', -1),
  (3, null, 'E', 'Equity', -1),
  (4, null, 'I', 'Income', -1),
  (5, null, 'X', 'Expense', 1);
