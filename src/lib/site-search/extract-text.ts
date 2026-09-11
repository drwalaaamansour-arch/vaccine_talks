export function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

export function uniqueNonEmpty(values: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    if (typeof value !== 'string') continue;
    const cleaned = value.replace(/\s+/g, ' ').trim();
    if (!cleaned || seen.has(cleaned)) continue;
    seen.add(cleaned);
    result.push(cleaned);
  }

  return result;
}

export function collectPlainText(value: unknown, maxDepth = 10): string[] {
  if (maxDepth <= 0) return [];

  if (typeof value === 'string') {
    const cleaned = stripHtml(value);
    return cleaned ? [cleaned] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectPlainText(item, maxDepth - 1));
  }

  if (value && typeof value === 'object') {
    return Object.values(value).flatMap((item) => collectPlainText(item, maxDepth - 1));
  }

  return [];
}

export function joinSearchParts(parts: Array<string | null | undefined>): string {
  return uniqueNonEmpty(parts).join('\n');
}

export function splitPassages(text: string): string[] {
  return uniqueNonEmpty(
    text
      .split(/\n+/)
      .flatMap((chunk) => chunk.split(/(?<=[.!?])\s+/))
      .map((chunk) => chunk.trim())
      .filter((chunk) => chunk.length >= 20)
  );
}
