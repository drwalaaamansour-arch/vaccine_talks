'use client';

import { useMemo, useState } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideTableSearch from '@/components/hcp-guide/HcpGuideTableSearch';
import CorticosteroidsImmunosuppressiveContent from '@/components/hcp-guide/articles/CorticosteroidsImmunosuppressiveContent';
import {
  CORTICOSTEROIDS_AR_TOC,
  CORTICOSTEROIDS_COPY,
  CORTICOSTEROIDS_EN_TOC,
} from '@/data/corticosteroids-immunosuppressive-copy';
import {
  B_CELL_AND_SELECTIVE_BIOLOGICS,
  CYTOKINE_AND_JAK_INHIBITORS,
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
} from '@/data/hcp-immunosuppressive-drugs';
import { IMMUNOSUPPRESSIVE_VACCINE_TIMING } from '@/data/hcp-immunosuppressive-vaccine-timing';
import { filterTableRows } from '@/lib/hcp-guide-table-search';

const TOTAL_TABLE_ROWS =
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS.length +
  CYTOKINE_AND_JAK_INHIBITORS.length +
  B_CELL_AND_SELECTIVE_BIOLOGICS.length +
  IMMUNOSUPPRESSIVE_VACCINE_TIMING.length;

function TableSearch({
  copy,
  query,
  onQueryChange,
  visibleRowCount,
  metaDir,
}: {
  copy: (typeof CORTICOSTEROIDS_COPY)['en'];
  query: string;
  onQueryChange: (query: string) => void;
  visibleRowCount: number;
  metaDir?: 'ltr' | 'rtl';
}) {
  return (
    <HcpGuideTableSearch
      query={query}
      onQueryChange={onQueryChange}
      placeholder={copy.search.placeholder}
      ariaLabel={copy.search.ariaLabel}
      clearAriaLabel={copy.search.clearAriaLabel}
      showingLabel={copy.searchMeta.showing}
      noMatchesLabel={copy.searchMeta.noMatches}
      metaDir={metaDir}
      resultCount={visibleRowCount}
      totalCount={TOTAL_TABLE_ROWS}
    />
  );
}

export default function CorticosteroidsImmunosuppressiveArticle() {
  const [query, setQuery] = useState('');
  const copy = CORTICOSTEROIDS_COPY;

  const visibleRowCount = useMemo(() => {
    if (!query.trim()) return TOTAL_TABLE_ROWS;

    return (
      filterTableRows(TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS, query).length +
      filterTableRows(CYTOKINE_AND_JAK_INHIBITORS, query).length +
      filterTableRows(B_CELL_AND_SELECTIVE_BIOLOGICS, query).length +
      filterTableRows(IMMUNOSUPPRESSIVE_VACCINE_TIMING, query).length
    );
  }, [query]);

  return (
    <HcpGuidePageLayout
      metaKey="hcpCorticosteroids"
      title={copy.en.heroTitle}
      emoji="💊"
      lead={copy.en.heroLead}
      backHref="/hcp-special-populations"
      backLabel={copy.en.backLabel}
      toc={[...CORTICOSTEROIDS_EN_TOC]}
      heroBelowTitle={
        <TableSearch
          copy={copy.en}
          query={query}
          onQueryChange={setQuery}
          visibleRowCount={visibleRowCount}
        />
      }
      arHeroBelowTitle={
        <TableSearch
          copy={copy.ar}
          query={query}
          onQueryChange={setQuery}
          visibleRowCount={visibleRowCount}
          metaDir="rtl"
        />
      }
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...CORTICOSTEROIDS_AR_TOC],
        arabicChildren: (
          <CorticosteroidsImmunosuppressiveContent
            copy={copy.ar}
            arabic
            query={query}
            onQueryChange={setQuery}
          />
        ),
      }}
    >
      <CorticosteroidsImmunosuppressiveContent copy={copy.en} query={query} onQueryChange={setQuery} />
    </HcpGuidePageLayout>
  );
}
