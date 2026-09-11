const ARABIC_DIACRITICS = /[\u064B-\u065F\u0670\u0640]/g;
const ENGLISH_PUNCTUATION = /[^\p{L}\p{N}\s-]/gu;

export function normalizeSearchText(value: string): string {
  return normalizeEnglishSearchText(normalizeArabicSearchText(value));
}

export function normalizeArabicSearchText(value: string): string {
  return value
    .normalize('NFKC')
    .replace(ARABIC_DIACRITICS, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه');
}

export function normalizeEnglishSearchText(value: string): string {
  return value
    .toLowerCase()
    .replace(ENGLISH_PUNCTUATION, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function containsArabicCharacters(value: string): boolean {
  return /[\u0600-\u06FF]/.test(value);
}

export function tokenizeSearchQuery(query: string): string[] {
  return normalizeSearchText(query)
    .split(' ')
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

export function isSearchQueryLongEnough(query: string): boolean {
  const normalized = normalizeSearchText(query);
  if (!normalized) return false;

  if (containsArabicCharacters(normalized)) {
    return normalized.replace(/\s+/g, '').length >= 2;
  }

  return normalized.length >= 2;
}
