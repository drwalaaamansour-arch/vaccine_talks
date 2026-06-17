import type { ReactNode } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideMedicalTable from '@/components/hcp-guide/HcpGuideMedicalTable';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

const IMMUNISATION_GUIDE_PDF = '/sot/immunisation-adults-pre-post-solid-organ-transplant-v8-may-2026.pdf';
const AUSTRALIAN_HANDBOOK_TABLE_PDF = '/sot/australian-handbook-sot-vaccination-recommendations.pdf';

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'core-principles', label: 'Core principles' },
  { id: 'universal-schedule', label: 'Universal schedule' },
  { id: 'organ-specific', label: 'Organ-specific considerations' },
  { id: 'cocooning', label: 'Cocooning strategy' },
  { id: 'resources', label: 'PDF resources' },
  { id: 'references', label: 'References' },
] as const;

const REFERENCES = [
  {
    citation:
      'Vaccination Recommendations in Solid Organ Transplant Adult Candidates and Recipients. Vaccines (Basel). PMC10611006.',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10611006/#sec6-vaccines-11-01611',
  },
  {
    citation:
      'Australian Immunisation Handbook. Table: Recommendations for vaccination before and after solid organ transplant.',
    href: AUSTRALIAN_HANDBOOK_TABLE_PDF,
  },
  {
    citation:
      'Immunisation for adults pre and post solid organ transplant (not kidney transplant), v8 May 2026 (PDF).',
    href: IMMUNISATION_GUIDE_PDF,
  },
] as const;

const SCHEDULE_COLUMNS = [
  { key: 'vaccine', label: 'Pathogen / vaccine', className: 'hcp-guide-table-med' },
  { key: 'preTransplant', label: 'Pre-transplant (candidates)', className: 'hcp-guide-table-timing' },
  { key: 'postTransplant', label: 'Post-transplant (recipients)', className: 'hcp-guide-table-timing' },
  { key: 'considerations', label: 'Clinical considerations', className: 'hcp-guide-table-indications' },
] as const;

const SCHEDULE_ROWS = [
  {
    vaccine: 'Influenza (Flu)',
    preTransplant: 'Annual dose',
    postTransplant: 'Annual dose (inactivated only)',
    considerations:
      'Administer annually. Post-transplant, resume at 3–6 months (or as early as 1 month during an active outbreak). Live nasal sprays are strictly contraindicated.',
  },
  {
    vaccine: 'Pneumococcal disease',
    preTransplant: 'PCV13 or PCV20 followed by PPSV23',
    postTransplant: 'Booster doses as indicated by local guidelines',
    considerations:
      'Complete the series early in chronic organ disease. Post-transplant doses should wait at least 3–6 months. Protects against severe pneumonia and invasive disease.',
  },
  {
    vaccine: 'Hepatitis B (HBV)',
    preTransplant: 'Accelerated or double-dose series (e.g., 4-dose schedule at 0, 1, 2, and 6 months)',
    postTransplant: 'Boosters if anti-HBs titers drop below 10 mIU/mL',
    considerations:
      'Immune response is lower in end-stage organ failure. Monitor serum anti-HBs titers annually post-transplant; give boosters if they drop below the protective threshold.',
  },
  {
    vaccine: 'SARS-CoV-2 (COVID-19)',
    preTransplant: 'Primary series + boosters',
    postTransplant: 'Primary series + boosters',
    considerations:
      'Highly recommended. Post-transplant patients exhibit reduced antibody responses due to immunosuppressants; booster schedules should align with immunocompromised protocols.',
  },
  {
    vaccine: 'Herpes zoster (Shingles)',
    preTransplant: 'Recombinant zoster vaccine (RZV)',
    postTransplant: 'Recombinant zoster vaccine (RZV)',
    considerations:
      'Do not use live zoster vaccine. The non-live, recombinant vaccine (Shingrix) is safe and highly recommended both pre- and post-transplant (2-dose series).',
  },
  {
    vaccine: 'Human papillomavirus (HPV)',
    preTransplant: '3-dose series (0, 1–2, 6 months)',
    postTransplant: '3-dose series if not previously completed',
    considerations:
      'Recommended up to age 26 (and up to age 45 based on clinical discussion) due to the increased risk of HPV-related malignancies under immunosuppressive therapy.',
  },
];

function OrganSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="hcp-guide-schedule-card" style={{ marginBottom: '1rem' }}>
      <h3 className="hcp-cancer-sub">{title}</h3>
      {children}
    </div>
  );
}

export default function SolidOrganTransplantVaccinationArticle() {
  return (
    <HcpGuidePageLayout
      metaKey="hcpSolidOrganTransplant"
      title="Solid organ transplant vaccination"
      emoji="🫀"
      lead="Evidence-based vaccination before and after solid organ transplantation — timing, inactivated versus live vaccines, universal schedules, and organ-specific priorities."
      toc={[...TOC]}
    >
      <HcpGuideSection id="overview" title="Overview" icon="📋">
        <p>
          An optimal immunization strategy is critical for patients undergoing solid organ transplantation
          (SOT). Chronic organ failure alters innate and adaptive immunity, while post-transplant
          immunosuppressive (IS) therapy further elevates infection risk. Preventing infections not only
          safeguards the patient but also prevents acute decompensation, graft dysfunction, and organ
          rejection.
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="core-principles" title="Core principles: timing and safety" icon="⏱️">
        <p>
          Vaccines demonstrate superior immunogenicity when given earlier in the course of organ failure
          before the immune system is further compromised by advanced disease or dialysis.
        </p>
        <ul>
          <li>
            <strong>Pre-transplant window:</strong> All required vaccinations should ideally be completed at
            least 2 weeks (for inactivated vaccines) or 4 weeks (for live vaccines) prior to transplantation.
          </li>
          <li>
            <strong>Post-transplant pause:</strong> Routine inactivated vaccinations should be deferred for 3 to
            6 months post-transplant — the period of maximal induction immunosuppression — except during
            specific community outbreaks (e.g., influenza or COVID-19 epidemics).
          </li>
          <li>
            <strong>The rule on live attenuated vaccines (LAVs):</strong> LAVs (e.g., MMR, varicella, oral
            typhoid, yellow fever) are generally contraindicated after transplantation due to the risk of
            unchecked viral replication. Inactivated vaccines are completely safe post-transplant and do not
            increase the risk of graft rejection.
          </li>
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="universal-schedule" title="Universal immunization schedule for SOT patients" icon="💉">
        <p>
          While organ-specific nuances apply, the following schedule outlines core pre- and post-transplant
          recommendations for all solid organ transplant candidates and recipients.
        </p>
        <HcpGuideMedicalTable
          caption="Universal immunization schedule for solid organ transplant patients"
          columns={[...SCHEDULE_COLUMNS]}
          rows={SCHEDULE_ROWS}
        />
      </HcpGuideSection>

      <HcpGuideSection
        id="organ-specific"
        title="Specific organ system considerations"
        icon="🏥"
      >
        <p>
          While the universal schedule applies to all, each specific organ transplant comes with unique
          timelines, risks, and clinical priorities.
        </p>

        <OrganSubsection title="🩸 Kidney transplantation (KT)">
          <p>
            <strong>Uremic immune failure:</strong> KT candidates often have a poor immune response to
            standard HBV vaccination due to uremia. Preventing HBV is vital because post-transplant
            immunosuppressants can cause viral reactivation or rapid progression of liver disease.
          </p>
          <p>
            <strong>VZV screening:</strong> All candidates should be screened for VZV IgG antibodies. If
            negative, they must receive the live varicella vaccine at least 4 weeks before transplantation.
          </p>
        </OrganSubsection>

        <OrganSubsection title="🧪 Liver transplantation (LT)">
          <p>
            <strong>Accelerated protection:</strong> Liver transplant candidates often present with advanced
            cirrhosis or acute liver failure, requiring rapid protection. Accelerated or double-dose HBV and
            HAV regimens (e.g., days 0, 7, 21, and a booster at 6 months) are highly utilized.
          </p>
          <p>
            <strong>Supervised post-transplant LAVs:</strong> Uniquely, liver transplant recipients generally
            require lower maintenance immunosuppression over time. If a liver recipient is completely stable,
            on minimal immunosuppression, and has no history of rejection at 1–2 years post-transplant, certain
            necessary live vaccines (like MMR) may be cautiously considered under strict transplant team
            surveillance.
          </p>
        </OrganSubsection>

        <OrganSubsection title="🫁 Thoracic transplantation (heart and lung)">
          <p>
            <strong>High respiratory risk:</strong> Respiratory viruses can trigger acute cellular rejection,
            graft dysfunction, or a fatal condition in lung recipients known as chronic lung allograft
            dysfunction (CLAD).
          </p>
          <p>
            <strong>Mandatory coverage:</strong> Annual flu shots, updated COVID-19 boosters, and the
            pneumococcal series are top-tier mandates for thoracic candidates, recipients, and all household
            members. Invasive pneumococcal disease carries an exceptionally high mortality rate in lung
            transplant recipients.
          </p>
        </OrganSubsection>

        <OrganSubsection title="🩺 Pancreas and intestinal transplantation">
          <p>
            <strong>Profound immunosuppression:</strong> These recipients undergo some of the most aggressive
            immunosuppressive regimens in the SOT world, frequently requiring T-cell depleting induction
            therapies.
          </p>
          <p>
            <strong>Permanent live vaccine ban:</strong> Due to the high levels of baseline maintenance
            immunosuppression required to prevent pancreas/intestinal rejection, live attenuated vaccines are
            strictly, indefinitely contraindicated post-transplant. Protection against encapsulated bacteria
            (<em>Streptococcus pneumoniae</em>, <em>Neisseria meningitidis</em>, and Hib) must be fully
            optimized during the candidate phase.
          </p>
        </OrganSubsection>
      </HcpGuideSection>

      <HcpGuideSection
        id="cocooning"
        title='The "cocooning" strategy: guarding the recipient'
        icon="🤝"
        variant="takeaway"
      >
        <p>
          Because transplant recipients are on immunosuppressive therapies, they may not mount a 100%
          effective immune response to vaccines, even when fully compliant.
        </p>
        <p>
          <strong>The patient&apos;s family is their shield.</strong> The &quot;Cocooning Strategy&quot;
          dictates that all household contacts, close family members, and healthcare workers must be fully
          vaccinated (including annual flu shots, pertussis boosters, and updated COVID-19 vaccines). Creating
          a protective barrier of immunity around the patient is one of the most effective ways to preserve
          long-term health and protect the newly transplanted organ.
        </p>
        <p>
          <strong>Patient &amp; provider reminder:</strong> Always review immunization history as early as
          possible during the transplant evaluation phase. Protecting your health protects your graft!
        </p>
      </HcpGuideSection>

      <HcpGuideSection id="resources" title="PDF resources" icon="📄">
        <HcpGuidePdfEmbed
          src={IMMUNISATION_GUIDE_PDF}
          title="Immunisation for adults pre and post solid organ transplant (not kidney transplant), v8 May 2026"
        />
        <HcpGuidePdfEmbed
          src={AUSTRALIAN_HANDBOOK_TABLE_PDF}
          title="Australian Immunisation Handbook — recommendations for vaccination before and after solid organ transplant"
        />
      </HcpGuideSection>

      <HcpGuideReferences references={[...REFERENCES]} />
    </HcpGuidePageLayout>
  );
}
