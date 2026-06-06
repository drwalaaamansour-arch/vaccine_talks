'use client';

import { useMemo, useState } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideTableSearch from '@/components/hcp-guide/HcpGuideTableSearch';
import CorticosteroidsImmunosuppressiveContent from '@/components/hcp-guide/articles/CorticosteroidsImmunosuppressiveContent';
import {
  B_CELL_AND_SELECTIVE_BIOLOGICS,
  CYTOKINE_AND_JAK_INHIBITORS,
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
} from '@/data/hcp-immunosuppressive-drugs';
import { IMMUNOSUPPRESSIVE_VACCINE_TIMING } from '@/data/hcp-immunosuppressive-vaccine-timing';
import { filterTableRows } from '@/lib/hcp-guide-table-search';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'drug-reference', label: 'Drug reference guide' },
  { id: 'traditional-drugs', label: 'Traditional & oral agents' },
  { id: 'cytokine-drugs', label: 'Innate immunity targets' },
  { id: 'b-cell-drugs', label: 'B-cell & selective biologics' },
  { id: 'vaccine-concepts', label: 'Live vs non-live vaccines' },
  { id: 'timing-matrix', label: 'Vaccine timing matrix' },
  { id: 'pregnancy-alert', label: 'Pregnancy exposure alert' },
  { id: 'cocooning', label: 'Household cocooning' },
  { id: 'ms-vaccination', label: 'MS vaccination guide' },
  { id: 'references', label: 'References & guidelines' },
] as const;

const TOTAL_TABLE_ROWS =
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS.length +
  CYTOKINE_AND_JAK_INHIBITORS.length +
  B_CELL_AND_SELECTIVE_BIOLOGICS.length +
  IMMUNOSUPPRESSIVE_VACCINE_TIMING.length;

export default function CorticosteroidsImmunosuppressiveArticle() {
  const [query, setQuery] = useState('');

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
      title="Corticosteroids and immunosuppressive drugs"
      emoji="💊"
      lead="Immunosuppressive medication profiles (AAAAI) and universal vaccine timing windows (CDC, IDSA, Australian Immunisation Handbook) — organized for clinical reference."
      backHref="/hcp-special-populations/altered-immunocompetence"
      backLabel="← Altered immunocompetence"
      toc={[...TOC]}
      heroBelowTitle={
        <HcpGuideTableSearch
          query={query}
          onQueryChange={setQuery}
          placeholder="Search e.g. rituximab, TNF, methotrexate, live vaccine, prednisone…"
          resultCount={visibleRowCount}
          totalCount={TOTAL_TABLE_ROWS}
        />
      }
    >
      <CorticosteroidsImmunosuppressiveContent query={query} onQueryChange={setQuery} />
    </HcpGuidePageLayout>
  );
}
