delete from account_balance;

select changes() || ' row(s) deleted';

insert into account_balance
  (account_id, posting_date, currency_id, amount, reconciled, posting_count)
select d1.account_id, h1.posting_date, d1.currency_id,
  (select sum(d2.amount)
    from posting_header h2
    join posting_detail d2
      on d2.posting_header_id = h2.posting_header_id
    where d2.account_id = d1.account_id
    and d2.currency_id = d1.currency_id
    and h2.posting_date <= h1.posting_date) as amount,
  'N' as reconciled,
  (select count(*)
    from posting_header h2
    join posting_detail d2
      on d2.posting_header_id = h2.posting_header_id
    where d2.account_id = d1.account_id
    and d2.currency_id = d1.currency_id
    and h2.posting_date = h1.posting_date) as posting_count
from posting_header h1
join posting_detail d1
  on d1.posting_header_id = h1.posting_header_id
group by d1.account_id, h1.posting_date, d1.currency_id;

select changes() || ' row(s) inserted';
