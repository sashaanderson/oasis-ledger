import { mdash } from 'util/unicode';

export function formatAmount(amount) {
  if (amount == 0) return "-";
  let s = amount.toLocaleString('en-US', { minimumFractionDigits: 2 });
  if (s.startsWith("-"))
    s = "(" + s.substring(1) + ")";
  return s;
}

export function formatDateLong(date) {
  const m = moment(date);
  const s = m.format('ddd, MMM Do, YYYY');
  const dd = moment().diff(m, 'days');
  return (
    dd == 0 ? s + " " + mdash + " Today" :
    dd == 1 ? s + " " + mdash + " Yesterday" :
    dd > 1 ? s + " " + mdash + " " + dd + " days ago" : s
  );
}

export function formatDateShort(date) {
  const m = moment(date);
  return m.format("D MMM YYYY");
}
