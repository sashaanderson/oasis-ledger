create temp table a1 as
select d1.account_id, h1.posting_date, d1.currency_id,
  (select sum(d2.amount)
    from posting_header h2
    join posting_detail d2
      on d2.posting_header_id = h2.posting_header_id
    where d2.account_id = d1.account_id
    and d2.currency_id = d1.currency_id
    and h2.posting_date <= h1.posting_date) as amount_per_posting,
  (select count(*)
    from posting_header h2
    join posting_detail d2
      on d2.posting_header_id = h2.posting_header_id
    where d2.account_id = d1.account_id
    and d2.currency_id = d1.currency_id
    and h2.posting_date = h1.posting_date) as count_per_posting
from posting_header h1
join posting_detail d1
  on d1.posting_header_id = h1.posting_header_id
group by d1.account_id, h1.posting_date, d1.currency_id;

select * from (
  select a1.account_id, a1.posting_date, a1.currency_id,
    a1.amount_per_posting,
    a2.amount as amount_per_balance,
    a2.reconciled,
    a1.count_per_posting,
    a2.posting_count as count_per_balance
  from temp.a1 natural left join account_balance a2
  union
  select a2.account_id, a2.posting_date, a2.currency_id,
    coalesce(a1.amount_per_posting,
      (select amount_per_posting
        from temp.a1
        where a1.account_id = a2.account_id
        and a1.currency_id = a2.currency_id
        and a1.posting_date =
         (select max(posting_date)
          from temp.a1
          where posting_date <= a2.posting_date))) as amount_per_posting,
    a2.amount as amount_per_balance,
    a2.reconciled,
    coalesce(a1.count_per_posting, 0) as count_per_posting,
    a2.posting_count as count_per_balance
  from account_balance a2 natural left join temp.a1
)
where (
  amount_per_balance is null
  or amount_per_posting is null
  or amount_per_posting <> amount_per_balance
  or count_per_balance is null
  or count_per_posting is null
  or count_per_posting <> count_per_balance
)
order by 1,2,3;
