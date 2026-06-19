'use client';

type HcpGuideTableSearchProps = {
  query: string;
  onQueryChange: (query: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  clearAriaLabel?: string;
  showingLabel?: (count: number, total: number) => string;
  noMatchesLabel?: string;
  metaDir?: 'ltr' | 'rtl';
  resultCount?: number;
  totalCount?: number;
};

export default function HcpGuideTableSearch({
  query,
  onQueryChange,
  placeholder = 'Search drugs, biologics, or timing guidance…',
  ariaLabel = 'Search immunosuppressive drug and vaccine timing tables',
  clearAriaLabel = 'Clear search',
  showingLabel = (count, total) =>
    `Showing ${count} of ${total} table row${total === 1 ? '' : 's'}`,
  noMatchesLabel = 'No matches — try a drug name, brand, cytokine, or condition',
  metaDir = 'ltr',
  resultCount,
  totalCount,
}: HcpGuideTableSearchProps) {
  const hasQuery = query.trim().length > 0;

  return (
    <div className="hcp-guide-table-search">
      <div className="vax-hub-search-wrap hcp-guide-table-search-wrap" dir="ltr">
        <span className="vax-hub-search-icon" aria-hidden>
          🔍
        </span>
        <input
          type="text"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="vax-hub-search hcp-guide-table-search-input"
          placeholder={placeholder}
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label={ariaLabel}
          dir="ltr"
        />
        {hasQuery ? (
          <button
            type="button"
            className="vax-hub-search-clear"
            onClick={() => onQueryChange('')}
            aria-label={clearAriaLabel}
          >
            ✕
          </button>
        ) : null}
      </div>

      {hasQuery && resultCount !== undefined && totalCount !== undefined ? (
        <p
          className="vax-hub-search-meta hcp-guide-table-search-meta"
          role="status"
          aria-live="polite"
          dir={metaDir}
        >
          {resultCount > 0 ? showingLabel(resultCount, totalCount) : noMatchesLabel}
        </p>
      ) : null}
    </div>
  );
}
