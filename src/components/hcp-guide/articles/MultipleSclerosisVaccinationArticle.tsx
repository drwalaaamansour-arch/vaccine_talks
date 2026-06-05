import type { ReactNode } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const TOC = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'core-rules', label: 'Core safety rules' },
  { id: 'non-depleting', label: 'Non-depleting therapies' },
  { id: 'anti-cd20-infusion', label: 'Anti-CD20 / CD19 infusions' },
  { id: 'anti-cd20-sc', label: 'Anti-CD20 subcutaneous' },
  { id: 's1p-modulators', label: 'S1P modulators' },
  { id: 'cladribine', label: 'Cladribine' },
  { id: 'alemtuzumab', label: 'Alemtuzumab' },
  { id: 'steroids', label: 'After steroid treatment' },
  { id: 'priority-vaccines', label: 'High-priority vaccines' },
  { id: 'vzv-shingles', label: 'VZV & shingles protocol' },
  { id: 'references', label: 'References' },
] as const;

const REFERENCES = [
  {
    citation:
      'Freedman MS et al. Vaccination and multiple sclerosis: 2023 ECTRIMS/EAN consensus recommendations. Mult Scler. 2023.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/37668725/',
  },
  {
    citation: 'National Multiple Sclerosis Society. Vaccines and MS.',
    href: 'https://www.nationalmssociety.org/national-mssociety/media/ms-national-files/brochures/brochure-vaccines-and-ms.pdf',
  },
  {
    citation: 'U.S. Department of Veterans Affairs MS Centers of Excellence. Vaccination guidance.',
    href: 'https://www.va.gov/ms/',
  },
  {
    citation:
      'Centers for Disease Control and Prevention. Altered immunocompetence — general immunization practices.',
    href: 'https://www.cdc.gov/vaccines/hcp/imz-best-practices/altered-immunocompetence.html',
  },
] as const;

function Sub({ title }: { title: string }) {
  return <h3 className="hcp-cancer-sub">{title}</h3>;
}

function DrugBlock({
  title,
  includes,
  nonLive,
  live,
}: {
  title: string;
  includes: string;
  nonLive: ReactNode;
  live: ReactNode;
}) {
  return (
    <div className="hcp-guide-schedule-card" style={{ marginBottom: '1rem' }}>
      <Sub title={title} />
      <p>
        <strong>Includes:</strong> {includes}
      </p>
      <p>
        <strong>Non-live vaccines:</strong> {nonLive}
      </p>
      <p>
        <strong>Live vaccines:</strong> {live}
      </p>
    </div>
  );
}

export default function MultipleSclerosisVaccinationArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpMultipleSclerosis"
      title="Vaccinations with Multiple Sclerosis"
      emoji="🧠"
      lead="Evidence-based timing of non-live and live vaccines with MS disease-modifying therapies — synthesized from ECTRIMS/EAN 2023, NMSS, VA MS Centers of Excellence, and peer-reviewed clinical guidance."
      toc={[...TOC]}
    >
      <HcpGuideSection id="introduction" title="Introduction" icon="📋">
        <p>
          Managing multiple sclerosis (MS) means balancing neurological health with the body&apos;s ability to
          fight everyday infections. Patients on disease-modifying therapy (DMT) or immunosuppressants often
          ask: <em>Is vaccination safe? Will my medication make the vaccine fail? Do I need to delay treatment?</em>
        </p>
        <p>
          This guide synthesizes recommendations from the{' '}
          <strong>2023 ECTRIMS/EAN consensus guidelines</strong>, the{' '}
          <strong>National Multiple Sclerosis Society (NMSS)</strong>, the{' '}
          <strong>U.S. Department of Veterans Affairs (VA) MS Centers of Excellence</strong>, and peer-reviewed
          clinical data — organized for quick use in clinic.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="core-rules" title="The core safety rules of MS vaccinations" icon="🛡️" variant="takeaway">
        <p>Before individual drug timing, four universal rules apply to every patient with MS:</p>
        <ul className="hcp-cancer-takeaway-list">
          <li>
            <strong>Inactivated vaccines are entirely safe.</strong> Non-live vaccines (inactivated, recombinant,
            subunit, or mRNA) do not trigger MS onset and do not cause disease relapses.
          </li>
          <li>
            <strong>Blunted response ≠ zero response.</strong> High-potency treatments may reduce antibody levels,
            but a reduced response still offers meaningful protection. Authorities strongly recommend vaccination
            anyway.
          </li>
          <li>
            <strong>The relapse delay rule.</strong> Never vaccinate during an active MS relapse. If a flare occurs,
            delay all vaccines for <strong>4–6 weeks</strong> from relapse onset, or until symptoms have stabilized.
          </li>
          <li>
            <strong>The household FluMist warning.</strong> Household contacts should avoid live-attenuated nasal
            influenza vaccines (FluMist). Live virus can be shed for up to 1 week, posing accidental exposure risk
            if the patient is highly immunocompromised. Contacts should receive standard inactivated influenza
            vaccines instead.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="non-depleting" title="1. Non-depleting therapies" icon="💊">
        <DrugBlock
          title="Beta-interferons, teriflunomide, DMF, natalizumab"
          includes="Beta-interferons (Avonex, Rebif, Plegridy), teriflunomide (Aubagio), dimethyl fumarate (DMF / Tecfidera), and natalizumab (Tysabri)"
          nonLive={
            <>
              Safe at any time. No need to pause, skip, or alter dosing. Patients typically mount a robust, normal
              immune response.
            </>
          }
          live={
            <>
              Generally <strong>contraindicated</strong> while on treatment. If mandatory, administer at least{' '}
              <strong>4–6 weeks before</strong> the first dose when starting therapy.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="anti-cd20-infusion" title="2. Anti-CD20 & anti-CD19 infusions" icon="💉">
        <DrugBlock
          title="Ocrelizumab, ublituximab, rituximab"
          includes="Ocrelizumab (Ocrevus), ublituximab (Briumvi), and rituximab"
          nonLive={
            <>
              <strong>Strictly timed windows.</strong> If already on therapy: vaccinate{' '}
              <strong>3–6 months after</strong> the last infusion and at least <strong>4–6 weeks before</strong>{' '}
              the next infusion. New patients: complete all non-live vaccines{' '}
              <strong>2–4 weeks before</strong> starting the drug.
            </>
          }
          live={
            <>
              <strong>Strictly contraindicated</strong> while on therapy. New patients: complete live vaccines at
              least <strong>6 weeks before</strong> the first infusion. If already treated: wait{' '}
              <strong>&gt;18 months</strong> (or until B-cell repopulation is confirmed on blood tests) before
              live vaccination.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="anti-cd20-sc" title="3. Anti-CD20 subcutaneous injections" icon="💉">
        <DrugBlock
          title="Ofatumumab (Kesimpta)"
          includes="Ofatumumab (Kesimpta) — monthly self-injection with B-cell depletion"
          nonLive={
            <>
              Prefer completing all vaccinations before initiation. If already on therapy: vaccinate{' '}
              <strong>4 weeks before</strong> the next scheduled monthly dose. New patients: complete non-live
              vaccines <strong>2–4 weeks before</strong> starting.
            </>
          }
          live={
            <>
              <strong>Strictly contraindicated</strong> while on treatment. If required before therapy, complete
              live vaccination at least <strong>4 weeks</strong> before the first dose.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="s1p-modulators" title="4. S1P modulators" icon="💊">
        <DrugBlock
          title="Fingolimod, ponesimod, ozanimod"
          includes="Fingolimod (Gilenya), ponesimod (Ponvory), and ozanimod (Zeposia)"
          nonLive={
            <>
              Safe during treatment, but expect a <strong>blunted antibody response</strong>. VA guidelines and
              clinical data warn: <strong>do not stop or pause</strong> the S1P modulator to improve vaccine response
              — this can trigger severe MS rebound relapse. New patients: complete vaccines{' '}
              <strong>2–4 weeks before</strong> starting.
            </>
          }
          live={
            <>
              <strong>Strictly contraindicated</strong> while on the drug. New patients: complete live vaccines at
              least <strong>4 weeks before</strong> starting. After stopping, wait <strong>1 month</strong> for
              drug clearance before live vaccination.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="cladribine" title="5. Cladribine (Mavenclad)" icon="💊">
        <DrugBlock
          title="Short periodic oral courses"
          includes="Cladribine (Mavenclad) — oral treatment in short courses that temporarily reduces T and B lymphocytes"
          nonLive={
            <>
              May be given any time after <strong>4 weeks</strong> from completion of the last treatment course. If
              vaccination is needed immediately before a new course, delay starting the next Cladribine block by at
              least <strong>2 weeks</strong> after the shot. Treatment-naïve patients: finish non-live vaccines{' '}
              <strong>2–4 weeks before</strong> Day 1.
            </>
          }
          live={
            <>
              <strong>Strictly contraindicated</strong> while on therapy. New patients: complete live vaccines at
              least <strong>4 weeks before</strong> beginning Cladribine cycles.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="alemtuzumab" title="6. Alemtuzumab (Lemtrada)" icon="💉">
        <DrugBlock
          title="Intensive infusion therapy"
          includes="Alemtuzumab (Lemtrada) — two annual infusion courses that fundamentally reset the immune system"
          nonLive={
            <>
              <strong>Strictly timed windows.</strong> Between annual courses: schedule non-live vaccinations
              approximately <strong>3 months before</strong> the second scheduled course. New patients: complete
              non-live vaccines <strong>2–4 weeks before</strong> starting treatment.
            </>
          }
          live={
            <>
              <strong>Strictly contraindicated.</strong> New patients: live vaccines at least{' '}
              <strong>6 weeks before</strong> the first infusion. After completing treatment courses: wait{' '}
              <strong>&gt;3 months</strong> after stopping before live vaccination can be considered.
            </>
          }
        />
      </HcpGuideSection>

      <HcpGuideSection id="steroids" title="Timing vaccines after steroid treatments" icon="⏱️">
        <p>
          Systemic high-dose corticosteroids (e.g. IV methylprednisolone / Solu-Medrol, or high-dose oral
          prednisone) are standard for acute MS relapses. Because steroids temporarily suppress immune response,
          adjust vaccine timing as follows:
        </p>
        <ul>
          <li>
            <strong>Following a relapse pulse or high-dose course:</strong> If short-term pulse high-dose steroids
            were used for a relapse, <em>or</em> prednisone ≥20 mg/day for &gt;14 days, delay all vaccines for{' '}
            <strong>1 month</strong> after stopping steroids.
          </li>
          <li>
            <strong>Short-term, low-dose courses:</strong> If steroids were &lt;20 mg/day and lasted &lt;14 days,
            vaccinate immediately after finishing the course.
          </li>
          <li>
            <strong>Low-dose maintenance:</strong> If maintenance prednisone stays &lt;20 mg/day, live vaccines
            can be given without pausing therapy.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="priority-vaccines" title="High-priority vaccines for people with MS" icon="⭐">
        <p>
          Per NMSS, ECTRIMS, and VA guidance, prioritize these <strong>non-live</strong> immunizations to prevent
          severe viral complications:
        </p>
        <ul>
          <li>
            <strong>Annual influenza &amp; COVID-19 boosters:</strong> Strongly recommended for all patients. May be
            co-administered at the same visit.
          </li>
          <li>
            <strong>Pneumococcal (pneumonia):</strong> Recommended for all patients starting or on immunosuppressive
            DMTs. NMSS highlights this especially for compromised respiratory function — including full-time
            wheelchair users or bed-bound patients.
          </li>
          <li>
            <strong>RSV:</strong> Recommended for adults ≥75 years, and adults 60–74 who are immunocompromised due
            to MS therapies.
          </li>
          <li>
            <strong>HPV (Gardasil-9):</strong> Recommended up to age 45. Ideally complete before starting a DMT,
            as immunosuppression can impair clearance of chronic HPV infection.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="vzv-shingles" title="The strict VZV &amp; shingles safety protocol" icon="⚡">
        <p>
          Before starting <strong>S1P modulators</strong> or <strong>Cladribine</strong>, run a{' '}
          <strong>VZV IgG antibody test</strong> before prescribing:
        </p>

        <Sub title="Scenario A — VZV seronegative (−)" />
        <ul>
          <li>No natural chickenpox immunity — high risk of dangerous viral replication on immunosuppressants.</li>
          <li>
            Administer the <strong>Varicella (chickenpox) live vaccine</strong>: 2 doses, 4 weeks apart.
          </li>
          <li>Delay starting MS medication for <strong>4 weeks</strong> after the final Varicella dose.</li>
          <li>
            Wait at least <strong>8 weeks</strong> after Varicella vaccination before giving Shingrix.
          </li>
        </ul>

        <Sub title="Scenario B — VZV seropositive (+)" />
        <ul>
          <li>Existing immunity — cleared to start MS medication.</li>
          <li>
            If age ≥19 and on immunosuppressive DMT: strongly encourage{' '}
            <strong>Shingrix</strong> (non-live recombinant shingles vaccine; 2 doses 2–6 months apart).
          </li>
        </ul>

        <p>
          <strong>Critical note:</strong> Shingrix is non-live and highly effective against shingles, but it{' '}
          <strong>cannot substitute</strong> for primary Varicella vaccination when serology is negative.
        </p>
      </HcpGuideSection>

      <HcpGuideReferences references={[...REFERENCES]} />
    </HcpGuidePageLayout>
  );
}
