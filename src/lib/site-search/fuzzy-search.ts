import Fuse, { type IFuseOptions } from 'fuse.js';
import { buildSearchSnippet } from '@/lib/site-search/snippets';
import {
  isSearchQueryLongEnough,
  normalizeSearchText,
  tokenizeSearchQuery,
} from '@/lib/site-search/normalize';
import { type SiteSearchDocument, type SiteSearchResult } from '@/lib/site-search/types';

const FUSE_OPTIONS: IFuseOptions<SiteSearchDocument> = {
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
  threshold: 0.34,
  minMatchCharLength: 2,
  keys: [
    { name: 'titleText', weight: 0.35 },
    { name: 'headingsText', weight: 0.2 },
    { name: 'keywordsText', weight: 0.15 },
    { name: 'faqQuestionsText', weight: 0.15 },
    { name: 'faqAnswersText', weight: 0.08 },
    { name: 'bodyText', weight: 0.07 },
  ],
};

function rankDocument(document: SiteSearchDocument, query: string, fuseScore: number): number {
  const normalizedQuery = normalizeSearchText(query);
  const tokens = tokenizeSearchQuery(query);

  if (document.titleText === normalizedQuery) return fuseScore - 1.5;
  if (document.titleText.startsWith(normalizedQuery)) return fuseScore - 1.2;
  if (document.titleText.includes(normalizedQuery)) return fuseScore - 0.9;
  if (document.headingsText.includes(normalizedQuery)) return fuseScore - 0.6;
  if (document.faqQuestionsText.includes(normalizedQuery)) return fuseScore - 0.45;
  if (document.faqAnswersText.includes(normalizedQuery)) return fuseScore - 0.4;
  if (document.keywordsText.includes(normalizedQuery)) return fuseScore - 0.35;
  if (document.bodyText.includes(normalizedQuery)) return fuseScore - 0.28;

  const allTokensInTitle = tokens.every((token) => document.titleText.includes(token));
  const allTokensInHeadings = tokens.every((token) => document.headingsText.includes(token));
  const allTokensInBody = tokens.every(
    (token) =>
      document.bodyText.includes(token) ||
      document.faqAnswersText.includes(token) ||
      document.faqQuestionsText.includes(token)
  );

  if (allTokensInTitle) return fuseScore - 0.8;
  if (allTokensInHeadings) return fuseScore - 0.55;
  if (allTokensInBody) return fuseScore - 0.25;

  return fuseScore;
}

function createFuseIndex(documents: SiteSearchDocument[]) {
  return new Fuse(documents, FUSE_OPTIONS);
}

export function searchSiteDocuments(
  query: string,
  documents: SiteSearchDocument[],
  limit = 10
): SiteSearchResult[] {
  if (!isSearchQueryLongEnough(query)) {
    return [];
  }

  const fuse = createFuseIndex(documents);
  const fuseResults = fuse.search(query);
  const seen = new Set<string>();
  const ranked: Array<{ document: SiteSearchDocument; score: number }> = [];

  for (const result of fuseResults) {
    const document = result.item;
    if (seen.has(document.href)) continue;

    const fuseScore = result.score ?? 1;
    ranked.push({
      document,
      score: rankDocument(document, query, fuseScore),
    });
  }

  for (const document of documents) {
    if (seen.has(document.href)) continue;

    const tokens = tokenizeSearchQuery(query);
    const normalizedQuery = normalizeSearchText(query);
    const combined = [
      document.titleText,
      document.headingsText,
      document.keywordsText,
      document.faqQuestionsText,
      document.faqAnswersText,
      document.bodyText,
    ].join(' ');

    const tokenMatch = tokens.length > 0 && tokens.every((token) => combined.includes(token));
    const phraseMatch = normalizedQuery.length > 0 && combined.includes(normalizedQuery);

    if (tokenMatch || phraseMatch) {
      ranked.push({
        document,
        score: rankDocument(document, query, 0.42),
      });
    }
  }

  ranked.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return a.document.title.localeCompare(b.document.title);
  });

  const results: SiteSearchResult[] = [];

  for (const entry of ranked) {
    if (seen.has(entry.document.href)) continue;
    seen.add(entry.document.href);

    results.push({
      href: entry.document.href,
      title: entry.document.title,
      category: entry.document.category,
      snippet: buildSearchSnippet(entry.document.passages, query, entry.document.title),
    });

    if (results.length >= limit) break;
  }

  return results;
}
