'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import HcpGuideMedicalTable, { RiskTierBadge } from '@/components/hcp-guide/HcpGuideMedicalTable';
import {
  B_CELL_AND_SELECTIVE_BIOLOGICS,
  CYTOKINE_AND_JAK_INHIBITORS,
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
} from '@/data/hcp-immunosuppressive-drugs';
import { IMMUNOSUPPRESSIVE_VACCINE_TIMING } from '@/data/hcp-immunosuppressive-vaccine-timing';
import type {
  CorticosteroidsCopy,
  CorticosteroidsParagraph,
} from '@/data/corticosteroids-immunosuppressive-copy';
import { CORTICOSTEROIDS_SECTION_IDS } from '@/data/corticosteroids-immunosuppressive-copy';
import { filterTableRows } from '@/lib/hcp-guide-table-search';

function toDrugRows(drugs: typeof TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS) {
  return drugs.map((drug) => ({ ...drug }));
}

function renderParagraph(paragraph: CorticosteroidsParagraph, key: string) {
  if (typeof paragraph === 'string') {
    return <p key={key}>{paragraph}</p>;
  }

  return (
    <p key={key}>
      {paragraph.parts.map((part, index) => {
        if (part.bold) return <strong key={`${key}-${index}`}>{part.text}</strong>;
        if (part.em) return <em key={`${key}-${index}`}>{part.text}</em>;
        return part.text;
      })}
    </p>
  );
}

function renderListItem(item: CorticosteroidsParagraph, key: string) {
  if (typeof item === 'string') {
    return <li key={key}>{item}</li>;
  }

  return (
    <li key={key}>
      {item.parts.map((part, index) =>
        part.bold ? <strong key={`${key}-${index}`}>{part.text}</strong> : part.text,
      )}
    </li>
  );
}

function renderVaccineText(text: CorticosteroidsParagraph) {
  if (typeof text === 'string') return text;

  return text.parts.map((part, index) =>
    part.bold ? <strong key={index}>{part.text}</strong> : part.text,
  );
}

type CorticosteroidsImmunosuppressiveContentProps = {
  copy: CorticosteroidsCopy;
  arabic?: boolean;
  query: string;
  onQueryChange: (query: string) => void;
};

export default function CorticosteroidsImmunosuppressiveContent({
  copy,
  arabic,
  query,
  onQueryChange,
}: CorticosteroidsImmunosuppressiveContentProps) {
  const sectionIds = arabic ? CORTICOSTEROIDS_SECTION_IDS.ar : CORTICOSTEROIDS_SECTION_IDS.en;
  const [
    overviewSection,
    drugReferenceSection,
    traditionalDrugsSection,
    cytokineDrugsSection,
    bCellDrugsSection,
    vaccineConceptsSection,
    timingMatrixSection,
    pregnancyAlertSection,
    cocooningSection,
    referencesSection,
  ] = copy.sections;

  const drugColumns = useMemo(
    () =>
      [
        { key: 'medication', label: copy.tables.drugColumnLabels.medication, className: 'hcp-guide-table-med' },
        {
          key: 'targetMechanism',
          label: copy.tables.drugColumnLabels.targetMechanism,
          className: 'hcp-guide-table-mechanism',
        },
        {
          key: 'indications',
          label: copy.tables.drugColumnLabels.indications,
          className: 'hcp-guide-table-indications',
        },
        {
          key: 'monitoring',
          label: copy.tables.drugColumnLabels.monitoring,
          className: 'hcp-guide-table-monitoring',
        },
      ] as const,
    [copy.tables.drugColumnLabels],
  );

  const timingColumns = useMemo(
    () =>
      [
        {
          key: 'category',
          label: copy.tables.timingColumnLabels.category,
          className: 'hcp-guide-table-category',
        },
        { key: 'riskTier', label: copy.tables.timingColumnLabels.riskTier, className: 'hcp-guide-table-tier' },
        {
          key: 'mechanism',
          label: copy.tables.timingColumnLabels.mechanism,
          className: 'hcp-guide-table-mechanism',
        },
        {
          key: 'beforeTreatment',
          label: copy.tables.timingColumnLabels.beforeTreatment,
          className: 'hcp-guide-table-timing',
        },
        {
          key: 'duringTreatment',
          label: copy.tables.timingColumnLabels.duringTreatment,
          className: 'hcp-guide-table-timing',
        },
        {
          key: 'afterTreatment',
          label: copy.tables.timingColumnLabels.afterTreatment,
          className: 'hcp-guide-table-timing',
        },
      ] as const,
    [copy.tables.timingColumnLabels],
  );

  const traditionalRows = useMemo(
    () => toDrugRows(filterTableRows(TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS, query)),
    [query],
  );
  const cytokineRows = useMemo(
    () => toDrugRows(filterTableRows(CYTOKINE_AND_JAK_INHIBITORS, query)),
    [query],
  );
  const bCellRows = useMemo(
    () => toDrugRows(filterTableRows(B_CELL_AND_SELECTIVE_BIOLOGICS, query)),
    [query],
  );
  const timingRows = useMemo(
    () =>
      filterTableRows(IMMUNOSUPPRESSIVE_VACCINE_TIMING, query).map((row) => ({
        ...row,
        riskTier: <RiskTierBadge tier={row.riskTier} />,
      })),
    [query],
  );

  const visibleRowCount =
    traditionalRows.length + cytokineRows.length + bCellRows.length + timingRows.length;
  const isFiltering = query.trim().length > 0;

  useEffect(() => {
    if (!isFiltering) return;

    const firstVisibleSectionId = traditionalRows.length
      ? sectionIds.traditionalDrugs
      : cytokineRows.length
        ? sectionIds.cytokineDrugs
        : bCellRows.length
          ? sectionIds.bCellDrugs
          : timingRows.length
            ? sectionIds.timingMatrix
            : null;

    if (!firstVisibleSectionId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(firstVisibleSectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, [
    isFiltering,
    query,
    traditionalRows.length,
    cytokineRows.length,
    bCellRows.length,
    timingRows.length,
    sectionIds,
  ]);

  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const body = (
    <>
      <HcpGuideSection
        id={overviewSection.id}
        title={overviewSection.title}
        icon={overviewSection.icon}
        {...sectionProps}
      >
        {overviewSection.paragraphs?.[0]
          ? renderParagraph(overviewSection.paragraphs[0], `${overviewSection.id}-p-0`)
          : null}
        {overviewSection.listItems ? (
          <ul>
            {overviewSection.listItems.map((item, index) =>
              renderListItem(item, `${overviewSection.id}-li-${index}`),
            )}
          </ul>
        ) : null}
        {overviewSection.paragraphs?.[1]
          ? renderParagraph(overviewSection.paragraphs[1], `${overviewSection.id}-p-1`)
          : null}
      </HcpGuideSection>

      <HcpGuideSection
        id={drugReferenceSection.id}
        title={drugReferenceSection.title}
        icon={drugReferenceSection.icon}
        {...sectionProps}
      >
        {drugReferenceSection.paragraphs?.map((paragraph, index) =>
          renderParagraph(paragraph, `${drugReferenceSection.id}-p-${index}`),
        )}
      </HcpGuideSection>

      {(!isFiltering || traditionalRows.length > 0) && (
        <HcpGuideSection
          id={traditionalDrugsSection.id}
          title={traditionalDrugsSection.title}
          icon={traditionalDrugsSection.icon}
          {...sectionProps}
        >
          <HcpGuideMedicalTable
            caption={copy.tables.captions.traditional}
            columns={[...drugColumns]}
            rows={traditionalRows}
            emptyMessage={copy.tables.emptyMessages.traditional}
            scrollHint={copy.tables.scrollHint}
          />
        </HcpGuideSection>
      )}

      {(!isFiltering || cytokineRows.length > 0) && (
        <HcpGuideSection
          id={cytokineDrugsSection.id}
          title={cytokineDrugsSection.title}
          icon={cytokineDrugsSection.icon}
          {...sectionProps}
        >
          <HcpGuideMedicalTable
            caption={copy.tables.captions.cytokine}
            columns={[...drugColumns]}
            rows={cytokineRows}
            emptyMessage={copy.tables.emptyMessages.cytokine}
            scrollHint={copy.tables.scrollHint}
          />
        </HcpGuideSection>
      )}

      {(!isFiltering || bCellRows.length > 0) && (
        <HcpGuideSection
          id={bCellDrugsSection.id}
          title={bCellDrugsSection.title}
          icon={bCellDrugsSection.icon}
          {...sectionProps}
          titleAlign={bCellDrugsSection.titleAlign === 'center' ? 'center' : sectionProps.titleAlign}
        >
          <HcpGuideMedicalTable
            caption={copy.tables.captions.bCell}
            columns={[...drugColumns]}
            rows={bCellRows}
            emptyMessage={copy.tables.emptyMessages.bCell}
            scrollHint={copy.tables.scrollHint}
          />
        </HcpGuideSection>
      )}

      <HcpGuideSection
        id={vaccineConceptsSection.id}
        title={vaccineConceptsSection.title}
        icon={vaccineConceptsSection.icon}
        variant="takeaway"
        {...sectionProps}
      >
        {vaccineConceptsSection.paragraphs?.map((paragraph, index) =>
          renderParagraph(paragraph, `${vaccineConceptsSection.id}-p-${index}`),
        )}
        <div className="hcp-cancer-vaccine-pair">
          <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--no">
            <p className="hcp-cancer-vaccine-card-label">{copy.vaccineCards.liveLabel}</p>
            <p>{renderVaccineText(copy.vaccineCards.liveText)}</p>
          </div>
          <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--ok">
            <p className="hcp-cancer-vaccine-card-label">{copy.vaccineCards.nonLiveLabel}</p>
            <p>{renderVaccineText(copy.vaccineCards.nonLiveText)}</p>
          </div>
        </div>
      </HcpGuideSection>

      {(!isFiltering || timingRows.length > 0) && (
        <HcpGuideSection
          id={timingMatrixSection.id}
          title={timingMatrixSection.title}
          icon={timingMatrixSection.icon}
          {...sectionProps}
        >
          {timingMatrixSection.paragraphs?.map((paragraph, index) =>
            renderParagraph(paragraph, `${timingMatrixSection.id}-p-${index}`),
          )}
          <HcpGuideMedicalTable
            caption={copy.tables.captions.timing}
            columns={[...timingColumns]}
            rows={timingRows}
            emptyMessage={copy.tables.emptyMessages.timing}
            scrollHint={copy.tables.scrollHint}
          />
        </HcpGuideSection>
      )}

      {isFiltering && visibleRowCount === 0 ? (
        <div className="hcp-guide-table-search-empty" role="status" dir={arabic ? 'rtl' : 'ltr'}>
          <p>{copy.searchEmpty.noRowsMessage.replace('{query}', query.trim())}</p>
          <button type="button" className="hcp-guide-table-search-reset" onClick={() => onQueryChange('')}>
            {copy.searchEmpty.clearSearch}
          </button>
        </div>
      ) : null}

      <HcpGuideSection
        id={pregnancyAlertSection.id}
        title={pregnancyAlertSection.title}
        icon={pregnancyAlertSection.icon}
        {...sectionProps}
      >
        <div className="hcp-cancer-alert">
          {copy.pregnancyAlert.map((paragraph, index) => (
            <p key={`${pregnancyAlertSection.id}-alert-${index}`} style={index > 0 ? { marginTop: '0.75rem' } : undefined}>
              {typeof paragraph === 'string'
                ? paragraph
                : paragraph.parts.map((part, partIndex) =>
                    part.bold ? (
                      <strong key={partIndex}>{part.text}</strong>
                    ) : (
                      part.text
                    ),
                  )}
            </p>
          ))}
        </div>
      </HcpGuideSection>

      <HcpGuideSection
        id={cocooningSection.id}
        title={cocooningSection.title}
        icon={cocooningSection.icon}
        {...sectionProps}
      >
        {copy.cocooning.map((paragraph, index) =>
          renderParagraph(paragraph, `${cocooningSection.id}-p-${index}`),
        )}
      </HcpGuideSection>

      <section
        id={sectionIds.msVaccination}
        className="hcp-cancer-related hcp-cancer-related--before-pdfs"
        dir={arabic ? 'rtl' : 'ltr'}
      >
        <Link href={copy.msLinkHref} className="hcp-guide-related-link">
          {copy.msLinkLabel}
        </Link>
      </section>

      <HcpGuideSection
        id={referencesSection.id}
        title={referencesSection.title}
        icon={referencesSection.icon}
        {...sectionProps}
      >
        <div className="hcp-guide-references-block">
          <p>{copy.referencesIntro}</p>
          <ol className="hcp-guide-ref-numbered">
            {copy.references.map((ref, index) => (
              <li key={`${referencesSection.id}-ref-${index}`}>
                <strong>{ref.boldLead}</strong>{' '}
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hcp-cancer-inline-link"
                >
                  {ref.linkText}
                </a>
                {' — '}
                <em>{ref.trailingEm}</em>
              </li>
            ))}
          </ol>
        </div>
      </HcpGuideSection>
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
