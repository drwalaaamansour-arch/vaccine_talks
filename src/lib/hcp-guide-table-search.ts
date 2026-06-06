export function normalizeTableSearchQuery(query: string) {
  return query
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();
}

function rowHaystack<T extends Record<string, unknown>>(row: T, keys?: (keyof T)[]) {
  const values = keys ?? (Object.keys(row) as (keyof T)[]);

  return values
    .map((key) => {
      const value = row[key];
      return typeof value === 'string' ? value : '';
    })
    .join(' ')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u2013\u2014]/g, '-');
}

export function filterTableRows<T extends Record<string, unknown>>(
  rows: T[],
  query: string,
  keys?: (keyof T)[],
) {
  const normalized = normalizeTableSearchQuery(query);
  if (!normalized) return rows;

  const tokens = normalized.split(' ').filter(Boolean);

  return rows.filter((row) => {
    const haystack = rowHaystack(row, keys);
    return tokens.every((token) => haystack.includes(token));
  });
}
