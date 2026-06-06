export function normalizeTableSearchQuery(query: string) {
  return query.trim().toLowerCase();
}

export function filterTableRows<T extends Record<string, unknown>>(
  rows: T[],
  query: string,
  keys?: (keyof T)[],
) {
  const normalized = normalizeTableSearchQuery(query);
  if (!normalized) return rows;

  return rows.filter((row) => {
    const values = keys ?? (Object.keys(row) as (keyof T)[]);
    const haystack = values
      .map((key) => {
        const value = row[key];
        return typeof value === 'string' ? value : '';
      })
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalized);
  });
}
