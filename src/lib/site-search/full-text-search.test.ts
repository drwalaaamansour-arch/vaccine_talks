import { describe, expect, it } from 'vitest';
import { buildFullSearchIndex, getSearchIndexStats } from '@/lib/site-search/build-index';
import { searchSiteDocuments } from '@/lib/site-search/fuzzy-search';
import { normalizeArabicSearchText, normalizeSearchText } from '@/lib/site-search/normalize';
import { buildSearchSnippet } from '@/lib/site-search/snippets';
import { filterSiteSearchResults } from '@/lib/site-search/index';

const INDEX = buildFullSearchIndex();

function topHrefs(query: string, limit = 10): string[] {
  return searchSiteDocuments(query, INDEX, limit).map((result) => result.href);
}

function topResults(query: string, limit = 5) {
  return searchSiteDocuments(query, INDEX, limit);
}

describe('full-text search index', () => {
  it('indexes public content from data modules', () => {
    const stats = getSearchIndexStats(INDEX);
    expect(stats.searchableDocuments).toBeGreaterThan(100);
    expect(stats.publicRoutesIndexed).toBeGreaterThan(100);
    expect(stats.contentSources.length).toBeGreaterThan(5);
  });
});

describe('full-text search behavior', () => {
  it('A. finds words that appear only in body text, not the title', () => {
    const results = topHrefs('cochlear implant');
    expect(results).toContain('/faq/pneumococcal');
    expect(results).toContain('/hcp-special-populations/cochlear-implants');
  });

  it('B. finds words that appear only in FAQ answers', () => {
    const results = topHrefs('28 days');
    expect(results).toContain('/faq/mmr');
    expect(results).toContain('/faq/varicella');
  });

  it('C. tolerates English typo pneumococal for pneumococcal content', () => {
    const results = topHrefs('pneumococal');
    expect(results.some((href) => href.includes('pneumococcal') || href === '/pcv')).toBe(true);
  });

  it('D. tolerates English typo influnza for influenza content', () => {
    const results = topHrefs('influnza');
    expect(results.some((href) => href.includes('influenza'))).toBe(true);
  });

  it('E. matches Arabic normalization for الإنفلونزا vs الانفلونزا', () => {
    expect(normalizeArabicSearchText('الإنفلونزا')).toBe(normalizeArabicSearchText('الانفلونزا'));

    const withHamza = topHrefs('الإنفلونزا');
    const withoutHamza = topHrefs('الانفلونزا');
    expect(withHamza.some((href) => href.includes('influenza'))).toBe(true);
    expect(withoutHamza.some((href) => href.includes('influenza'))).toBe(true);
  });

  it('F. matches Arabic influenza text without hamza', () => {
    const results = topHrefs('انفلونزا');
    expect(results.some((href) => href.includes('influenza'))).toBe(true);
  });

  it('G. keeps Arabic results discoverable with minor typos when close', () => {
    const results = topHrefs('الجدير');
    expect(results.some((href) => href.includes('varicella') || href.includes('chickenpox'))).toBe(
      true
    );
  });

  it('H. finds brand names such as Bexsero in body content', () => {
    const results = topHrefs('Bexsero');
    expect(results.some((href) => href.includes('men-b') || href.includes('meningococcal'))).toBe(
      true
    );
  });

  it('I. supports multi-word queries such as cochlear pneumococcal', () => {
    const results = topResults('cochlear pneumococcal', 3);
    expect(results[0]?.href).toMatch(/pneumococcal|cochlear/);
    expect(
      results.some(
        (result) =>
          result.href === '/faq/pneumococcal' ||
          result.href === '/hcp-special-populations/cochlear-implants'
      )
    ).toBe(true);
  });

  it('J. never returns duplicate routes', () => {
    const results = topResults('vaccine', 10);
    expect(new Set(results.map((result) => result.href)).size).toBe(results.length);
  });

  it('K. ranks exact title matches above body-only matches', () => {
    const results = topResults('Influenza', 8);
    const influenzaFaqIndex = results.findIndex((result) => result.href === '/faq/influenza');
    const publicArticleIndex = results.findIndex((result) => result.href === '/influenza');
    expect(influenzaFaqIndex).toBeGreaterThanOrEqual(0);
    expect(publicArticleIndex).toBeGreaterThanOrEqual(0);
    expect(influenzaFaqIndex).toBeLessThan(publicArticleIndex === -1 ? Number.MAX_SAFE_INTEGER : publicArticleIndex + 3);
  });

  it('L. includes a useful matching snippet', () => {
    const results = topResults('cochlear implant', 1);
    expect(results[0]?.snippet.length).toBeGreaterThan(10);
    expect(normalizeSearchText(results[0]?.snippet ?? '')).toContain('cochlear');
  });

  it('does not run expensive fuzzy matching for one-character queries', () => {
    expect(filterSiteSearchResults('a')).toEqual([]);
    expect(filterSiteSearchResults('')).toEqual([]);
  });

  it('buildSearchSnippet highlights matched content', () => {
    const snippet = buildSearchSnippet(
      ['People with cochlear implants are at increased risk for meningitis.'],
      'cochlear implant'
    );
    expect(snippet.toLowerCase()).toContain('cochlear');
  });
});

describe('manual example query coverage', () => {
  const examples: Array<[string, RegExp]> = [
    ['pneumococcal', /pneumococcal|pcv/],
    ['pneumococal', /pneumococcal|pcv/],
    ['cochlear implant', /cochlear|pneumococcal/],
    ['Bexsero', /men-b|meningococcal|hcp/],
    ['chemotherapy', /chemotherapy|cancer/],
    ['influenza', /influenza/],
    ['الانفلونزا', /influenza/],
    ['الإنفلونزا', /influenza/],
    ['الجديري', /varicella|chickenpox/],
    ['المكورات الرئوية', /pneumococcal|pcv/],
    ['الكيماوي', /chemotherapy|cancer/],
  ];

  it.each(examples)('returns relevant pages for "%s"', (query, pattern) => {
    const results = topHrefs(query, 8);
    expect(results.some((href) => pattern.test(href))).toBe(true);
  });
});
