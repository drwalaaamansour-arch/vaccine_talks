import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  filterSiteSearchResults,
  getSearchResultTitleDirection,
  isPublicSearchHref,
  navigateToSearchResult,
} from '@/lib/site-search';
import { getSearchUiMessages } from '@/lib/site-ui-messages';

describe('public search routes', () => {
  it('9. does not include localhost or internal routes in generated index', () => {
    const generated = readFileSync(
      resolve(process.cwd(), 'src/lib/site-search/search-index.generated.json'),
      'utf8'
    );
    const documents = JSON.parse(generated) as Array<{ href: string }>;

    for (const entry of documents) {
      expect(isPublicSearchHref(entry.href)).toBe(true);
      expect(entry.href).not.toContain('localhost');
      expect(entry.href).not.toMatch(/^https?:/);
    }
  });
});

describe('filterSiteSearchResults', () => {
  it('2. accepts Arabic queries with full-text results', () => {
    const results = filterSiteSearchResults('المكورات الرئوية');
    expect(results.length).toBeGreaterThan(0);
  });

  it('3. accepts English queries with full-text results', () => {
    const results = filterSiteSearchResults('hepatitis');
    expect(results.some((entry) => entry.href.includes('hepatitis'))).toBe(true);
  });

  it('4. returns matching results with snippets', () => {
    const results = filterSiteSearchResults('vaccine checker');
    expect(results[0]?.href).toBe('/vaccine-checker');
    expect(results[0]?.snippet).toBeTruthy();
  });

  it('8. exposes localized empty state copy', () => {
    expect(getSearchUiMessages('ar').empty).toBe('مفيش نتائج مطابقة.');
    expect(getSearchUiMessages('en').empty).toBe('No matching results.');
    expect(filterSiteSearchResults('zzzz-no-match-zzzz')).toEqual([]);
  });

  it('renders Arabic titles RTL and English titles LTR', () => {
    expect(getSearchResultTitleDirection('التطعيمات')).toBe('rtl');
    expect(getSearchResultTitleDirection('Hepatitis A')).toBe('ltr');
  });
});

describe('navigateToSearchResult', () => {
  it('6. navigates to the selected page and closes search', () => {
    const navigate = vi.fn();
    const close = vi.fn();

    navigateToSearchResult('/faq/mmr', navigate, close);

    expect(navigate).toHaveBeenCalledWith('/faq/mmr');
    expect(close).toHaveBeenCalledTimes(1);
  });

  it('7. rejects non-public routes', () => {
    const navigate = vi.fn();
    const close = vi.fn();

    navigateToSearchResult('/api/chat', navigate, close);

    expect(navigate).not.toHaveBeenCalled();
    expect(close).not.toHaveBeenCalled();
  });
});

describe('Search UI wiring', () => {
  it('1. opens from the shared Header on the Home page', () => {
    const header = readFileSync(resolve(process.cwd(), 'src/components/Header.tsx'), 'utf8');
    const home = readFileSync(resolve(process.cwd(), 'src/app/page.tsx'), 'utf8');
    const searchModal = readFileSync(resolve(process.cwd(), 'src/components/SearchModal.tsx'), 'utf8');

    expect(home).toContain('<Header />');
    expect(header).toContain('SearchModal');
    expect(header).toContain('setIsSearchOpen(true)');
    expect(searchModal).toContain('createPortal');
    expect(searchModal).toContain('search-modal-result-snippet');
  });
});
