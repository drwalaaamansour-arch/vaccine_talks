'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideMedicalTable, { RiskTierBadge } from '@/components/hcp-guide/HcpGuideMedicalTable';
import {
  B_CELL_AND_SELECTIVE_BIOLOGICS,
  CYTOKINE_AND_JAK_INHIBITORS,
  TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS,
} from '@/data/hcp-immunosuppressive-drugs';
import { IMMUNOSUPPRESSIVE_VACCINE_TIMING } from '@/data/hcp-immunosuppressive-vaccine-timing';
import { filterTableRows } from '@/lib/hcp-guide-table-search';

const DRUG_COLUMNS = [
  { key: 'medication', label: 'Medication & examples', className: 'hcp-guide-table-med' },
  { key: 'targetMechanism', label: 'Target & mechanism', className: 'hcp-guide-table-mechanism' },
  { key: 'indications', label: 'Indications for use', className: 'hcp-guide-table-indications' },
  { key: 'monitoring', label: 'Monitoring & cautions', className: 'hcp-guide-table-monitoring' },
] as const;

const TIMING_COLUMNS = [
  { key: 'category', label: 'Therapeutic category / condition', className: 'hcp-guide-table-category' },
  { key: 'riskTier', label: 'Risk tier', className: 'hcp-guide-table-tier' },
  { key: 'mechanism', label: 'Target / mechanism', className: 'hcp-guide-table-mechanism' },
  { key: 'beforeTreatment', label: 'Before treatment', className: 'hcp-guide-table-timing' },
  { key: 'duringTreatment', label: 'During active therapy', className: 'hcp-guide-table-timing' },
  { key: 'afterTreatment', label: 'After treatment / recovery', className: 'hcp-guide-table-timing' },
] as const;

function toDrugRows(drugs: typeof TRADITIONAL_IMMUNOSUPPRESSIVE_DRUGS) {
  return drugs.map((drug) => ({ ...drug }));
}

type CorticosteroidsImmunosuppressiveContentProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export default function CorticosteroidsImmunosuppressiveContent({
  query,
  onQueryChange,
}: CorticosteroidsImmunosuppressiveContentProps) {

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

  return (
    <>
      <HcpGuideSection id="overview" title="Immunosuppressive medications & vaccination guidelines" icon="📋">
        <p>
          Managing vaccines during immunosuppressive therapy requires balancing infection prevention with
          medical safety. This guide is organized in two core parts:
        </p>
        <ul>
          <li>
            <strong>Part 1 — Immunosuppressive drug reference:</strong> mechanisms, indications, and monitoring
            warnings based on AAAAI data.
          </li>
          <li>
            <strong>Part 2 — Universal vaccine timing matrix:</strong> safe vaccination windows before, during,
            and after therapy based on CDC, IDSA, and Australian Immunisation Handbook consensus.
          </li>
        </ul>
        <p>
          Use these tables alongside individual patient factors — including diagnosis, dose, duration, concurrent
          therapies, and laboratory immune markers — when planning immunization.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="drug-reference" title="Part 1: Comprehensive immunosuppressive drug database" icon="💊">
        <p>
          Reference tables below outline targets, therapeutic uses, and key monitoring warnings for medications
          commonly prescribed across autoimmune, autoinflammatory, transplant, and oncologic conditions.
        </p>
      </HcpGuideSection>

      {(!isFiltering || traditionalRows.length > 0) && (
        <HcpGuideSection id="traditional-drugs" title="Traditional & oral immunosuppressives" icon="🧪">
          <HcpGuideMedicalTable
            caption="Table 1. Corticosteroids, antimetabolites, and conventional DMARDs"
            columns={[...DRUG_COLUMNS]}
            rows={traditionalRows}
            emptyMessage="No traditional or oral agents match your search."
          />
        </HcpGuideSection>
      )}

      {(!isFiltering || cytokineRows.length > 0) && (
        <HcpGuideSection
          id="cytokine-drugs"
          title="Innate Immunity Targets (Biologics & Small Molecules)"
          icon="🎯"
        >
          <HcpGuideMedicalTable
            caption="Table 2. Anti-cytokine biologics and oral JAK inhibitors"
            columns={[...DRUG_COLUMNS]}
            rows={cytokineRows}
            emptyMessage="No innate immunity targets match your search."
          />
        </HcpGuideSection>
      )}

      {(!isFiltering || bCellRows.length > 0) && (
        <HcpGuideSection
          id="b-cell-drugs"
          title="B-cell depletion & selective biologics"
          icon="🔬"
          titleAlign="center"
        >
          <HcpGuideMedicalTable
            caption="Table 3. B-cell depletion & selective biologics"
            columns={[...DRUG_COLUMNS]}
            rows={bCellRows}
            emptyMessage="No B-cell or selective biologics match your search."
          />
        </HcpGuideSection>
      )}

      <HcpGuideSection id="vaccine-concepts" title="Core concepts: live vs non-live vaccines" icon="🛡️" variant="takeaway">
        <p>Before using the timing matrix, distinguish the two vaccine categories:</p>
        <div className="hcp-cancer-vaccine-pair">
          <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--no">
            <p className="hcp-cancer-vaccine-card-label">Live-attenuated vaccines</p>
            <p>
              Examples: MMR, varicella, yellow fever, oral rotavirus. Contain weakened but replicating organisms.
              During significant immunosuppression the host may fail to control the vaccine strain, risking severe
              vaccine-derived infection. <strong>Generally contraindicated during active immunosuppression.</strong>
            </p>
          </div>
          <div className="hcp-cancer-vaccine-card hcp-cancer-vaccine-card--ok">
            <p className="hcp-cancer-vaccine-card-label">Non-live / inactivated vaccines</p>
            <p>
              Examples: inactivated influenza, COVID-19, Shingrix, pneumococcal, Tdap. Cannot replicate or cause
              infection — <strong>physically safe at any time</strong>. Immunosuppression may still blunt antibody
              responses, so timing optimization remains clinically important.
            </p>
          </div>
        </div>
      </HcpGuideSection>

      {(!isFiltering || timingRows.length > 0) && (
        <HcpGuideSection id="timing-matrix" title="Part 2: Unified vaccine timing matrix" icon="📊">
          <p>
            Master reference merging AAAAI drug-risk profiles with CDC and Australian Immunisation Handbook vaccine
            scheduling guidance. Columns define pre-treatment windows, status during active therapy, and post-therapy
            recovery intervals before live vaccines may resume.
          </p>
          <HcpGuideMedicalTable
            caption="Table 4. Immunosuppressive risk tiers and vaccine timing windows"
            columns={[...TIMING_COLUMNS]}
            rows={timingRows}
            emptyMessage="No timing guidance rows match your search."
          />
        </HcpGuideSection>
      )}

      {isFiltering && visibleRowCount === 0 ? (
        <div className="hcp-guide-table-search-empty" role="status">
          <p>No table rows match &ldquo;{query.trim()}&rdquo;.</p>
          <button type="button" className="hcp-guide-table-search-reset" onClick={() => onQueryChange('')}>
            Clear search
          </button>
        </div>
      ) : null}

      <HcpGuideSection id="pregnancy-alert" title="Clinical alert: in-utero biologic exposure" icon="⚠️">
        <div className="hcp-cancer-alert">
          <p>
            <strong>Pregnancy exposure:</strong> Highly immunosuppressive biologics — especially anti-TNF agents
            (e.g., adalimumab/Humira) and anti-CD20 agents (e.g., rituximab) — readily cross the placenta in the
            second and third trimesters.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <strong>Infant live-vaccine safety:</strong> Exposed infants must not receive live-attenuated vaccines
            (notably BCG and oral rotavirus) until at least <strong>6 months of age</strong>, allowing clearance of
            maternal drug. Standard non-live childhood vaccines should follow routine pediatric schedules.
          </p>
        </div>
      </HcpGuideSection>

      <HcpGuideSection id="cocooning" title="Protecting the household: cocooning strategy" icon="👥">
        <p>
          When live vaccines are unsafe for the immunocompromised patient, household members, partners, and close
          contacts should remain fully vaccinated against measles, varicella, influenza, and other preventable
          diseases.
        </p>
        <p>
          This <strong>cocooning</strong> approach creates a protective barrier around the patient and substantially
          reduces the probability of household introduction of vaccine-preventable viruses.
        </p>
      </HcpGuideSection>

      <section id="ms-vaccination" className="hcp-cancer-related hcp-cancer-related--before-pdfs">
        <Link
          href="/hcp-special-populations/vaccinations-with-multiple-sclerosis"
          className="hcp-guide-related-link"
        >
          To know more about vaccination for people with MS, press here
        </Link>
      </section>

      <HcpGuideSection id="references" title="References & clinical guidelines" icon="📚">
        <div className="hcp-guide-references-block">
          <p>
            To ensure maximum safety and data transparency for our users, all medical timelines, drug risk tiers, and
            vaccine windows on this page are compiled from global medical authorities:
          </p>
          <ol className="hcp-guide-ref-numbered">
            <li>
              <strong>Drug profiles &amp; biological mechanisms:</strong>{' '}
              <a
                href="https://www.aaaai.org/conditions-treatments/related-conditions/immunosuppressive"
                target="_blank"
                rel="noopener noreferrer"
                className="hcp-cancer-inline-link"
              >
                American Academy of Allergy, Asthma &amp; Immunology (AAAAI)
              </a>
              {' — '}
              <em>Immunosuppressive Medication for the Treatment of Autoimmune Disease Guide.</em>
            </li>
            <li>
              <strong>Universal vaccine scheduling guidelines:</strong>{' '}
              <a
                href="https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hcp-cancer-inline-link"
              >
                Centers for Disease Control and Prevention (CDC)
              </a>
              {' — '}
              <em>General Best Practice Guidelines for Immunization: Altered Immunocompetence.</em>
            </li>
            <li>
              <strong>Immunocompromise levels &amp; drug potentials:</strong>{' '}
              <a
                href="https://immunisationhandbook.health.gov.au/contents/vaccination-for-special-risk-groups/vaccination-for-people-who-are-immunocompromised"
                target="_blank"
                rel="noopener noreferrer"
                className="hcp-cancer-inline-link"
              >
                The Australian Immunisation Handbook
              </a>
              {' — '}
              <em>
                Guidance on Secondary Immunodeficiencies Due to Medical Conditions and Therapies (Tables for
                Corticosteroids, Conventional, Biological, and Small Molecule Therapies).
              </em>
            </li>
          </ol>
        </div>
      </HcpGuideSection>
    </>
  );
}
