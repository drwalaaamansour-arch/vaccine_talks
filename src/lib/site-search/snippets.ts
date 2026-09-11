import { stripHtml } from '@/lib/site-search/extract-text';
import { normalizeSearchText, tokenizeSearchQuery } from '@/lib/site-search/normalize';

const SNIPPET_MAX_LENGTH = 160;

function truncateAroundMatch(text: string, query: string): string {
  const cleaned = stripHtml(text).replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';

  const tokens = tokenizeSearchQuery(query);
  const normalized = normalizeSearchText(cleaned);
  let matchIndex = -1;

  for (const token of tokens) {
    const index = normalized.indexOf(token);
    if (index !== -1) {
      matchIndex = index;
      break;
    }
  }

  if (matchIndex === -1) {
    matchIndex = normalized.indexOf(normalizeSearchText(query));
  }

  if (matchIndex === -1) {
    return cleaned.length > SNIPPET_MAX_LENGTH
      ? `${cleaned.slice(0, SNIPPET_MAX_LENGTH).trim()}...`
      : cleaned;
  }

  const start = Math.max(0, matchIndex - 48);
  const end = Math.min(cleaned.length, start + SNIPPET_MAX_LENGTH);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < cleaned.length ? '...' : '';

  return `${prefix}${cleaned.slice(start, end).trim()}${suffix}`;
}

export function buildSearchSnippet(passages: string[], query: string, fallback = ''): string {
  const tokens = tokenizeSearchQuery(query);
  const normalizedQuery = normalizeSearchText(query);

  for (const passage of passages) {
    const normalizedPassage = normalizeSearchText(passage);
    const matchesAllTokens =
      tokens.length > 0 && tokens.every((token) => normalizedPassage.includes(token));
    const matchesPhrase =
      normalizedQuery.length > 0 && normalizedPassage.includes(normalizedQuery);

    if (matchesAllTokens || matchesPhrase) {
      return truncateAroundMatch(passage, query);
    }
  }

  if (passages[0]) {
    return truncateAroundMatch(passages[0], query);
  }

  return fallback;
}
