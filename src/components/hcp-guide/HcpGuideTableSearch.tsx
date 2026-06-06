'use client';

type HcpGuideTableSearchProps = {
  query: string;
  onQueryChange: (query: string) => void;
  placeholder?: string;
  resultCount?: number;
  totalCount?: number;
};

export default function HcpGuideTableSearch({
  query,
  onQueryChange,
  placeholder = 'Search drugs, biologics, or timing guidance…',
  resultCount,
  totalCount,
}: HcpGuideTableSearchProps) {
  const hasQuery = query.trim().length > 0;

  return (
    <div className="hcp-guide-table-search">
      <div className="vax-hub-search-wrap" dir="ltr">
        <span className="vax-hub-search-icon" aria-hidden>
          🔍
        </span>
        <input
          type="search"
          className="vax-hub-search hcp-guide-table-search-input"
          placeholder={placeholder}
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Search immunosuppressive drug and vaccine timing tables"
          dir="ltr"
        />
        {hasQuery ? (
          <button
            type="button"
            className="vax-hub-search-clear"
            onClick={() => onQueryChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : null}
      </div>

      {hasQuery && resultCount !== undefined && totalCount !== undefined ? (
        <p className="vax-hub-search-meta hcp-guide-table-search-meta">
          {resultCount > 0
            ? `Showing ${resultCount} of ${totalCount} table row${totalCount === 1 ? '' : 's'}`
            : 'No matches — try a drug name, brand, cytokine, or condition'}
        </p>
      ) : null}
    </div>
  );
}
