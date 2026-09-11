import generatedIndex from '@/lib/site-search/search-index.generated.json';
import { buildFullSearchIndex } from '@/lib/site-search/build-index';
import { searchSiteDocuments } from '@/lib/site-search/fuzzy-search';
import { containsArabicCharacters, normalizeSearchText } from '@/lib/site-search/normalize';
import {
  type SiteSearchDocument,
  type SiteSearchResult,
} from '@/lib/site-search/types';

export type {
  SiteSearchDocument,
  SiteSearchNavEntry,
  SiteSearchResult,
} from '@/lib/site-search/types';

const BLOCKED_PATH_PREFIXES = ['/api/', '/auth/', '/serwist/'];

let cachedDocuments: SiteSearchDocument[] | null = null;

function isBlockedHref(href: string): boolean {
  return BLOCKED_PATH_PREFIXES.some((prefix) => href.startsWith(prefix));
}

export function isPublicSearchHref(href: string): boolean {
  if (!href.startsWith('/') || href.includes('://') || href.includes('localhost')) {
    return false;
  }

  return !isBlockedHref(href);
}

export function getSiteSearchDocuments(): SiteSearchDocument[] {
  if (cachedDocuments) {
    return cachedDocuments;
  }

  if (Array.isArray(generatedIndex) && generatedIndex.length > 0) {
    cachedDocuments = generatedIndex as SiteSearchDocument[];
    return cachedDocuments;
  }

  cachedDocuments = buildFullSearchIndex();
  return cachedDocuments;
}

export function filterSiteSearchResults(query: string, limit = 10): SiteSearchResult[] {
  return searchSiteDocuments(query, getSiteSearchDocuments(), limit);
}

export function getSearchResultTitleDirection(title: string): 'rtl' | 'ltr' {
  return containsArabicCharacters(title) ? 'rtl' : 'ltr';
}

export function navigateToSearchResult(
  href: string,
  navigate: (href: string) => void,
  close: () => void
): void {
  if (!isPublicSearchHref(href)) {
    return;
  }

  navigate(href);
  close();
}

export { buildFullSearchIndex, getSearchIndexStats } from '@/lib/site-search/build-index';
export { normalizeSearchText } from '@/lib/site-search/normalize';
