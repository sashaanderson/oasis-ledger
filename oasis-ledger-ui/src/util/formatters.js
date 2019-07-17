const DEFAULT_DATE_FORMAT = "D MMM YYYY";

export function formatAmount(amount) {
  if (amount == 0) return "-";
  let s = amount.toLocaleString('en-US', { minimumFractionDigits: 2 });
  if (s.startsWith("-"))
    s = "(" + s.substring(1) + ")";
  return s;
}

export function formatDate(date, fmt = DEFAULT_DATE_FORMAT) {
  let m = moment(date);
  return m.format(fmt);
}
