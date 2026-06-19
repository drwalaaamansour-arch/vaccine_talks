'use client';

import { useCallback, useState, type ReactNode } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideMedicalTable from '@/components/hcp-guide/HcpGuideMedicalTable';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideLanguageTabs, { type HcpGuideLocale } from '@/components/hcp-guide/HcpGuideLanguageTabs';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import {
  SOLID_ORGAN_TRANSPLANT_COPY,
  SOLID_ORGAN_TRANSPLANT_SECTION_IDS,
  SOLID_ORGAN_TRANSPLANT_AR_TOC_FULL,
  SOLID_ORGAN_TRANSPLANT_EN_TOC,
} from '@/data/solid-organ-transplant-vaccination-copy';

const IMMUNISATION_GUIDE_PDF = '/sot/immunisation-adults-pre-post-solid-organ-transplant-v8-may-2026.pdf';
const AUSTRALIAN_HANDBOOK_TABLE_PDF = '/sot/australian-handbook-sot-vaccination-recommendations.pdf';

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

function OrganSubsection({
  title,
  children,
  arabic,
}: {
  title: string;
  children: ReactNode;
  arabic?: boolean;
}) {
  return (
    <div
      className={arabic ? 'hcp-guide-ar-organ-card' : 'hcp-guide-schedule-card'}
      style={arabic ? undefined : { marginBottom: '1rem' }}
    >
      <h3
        className={arabic ? 'hcp-guide-ar-organ-title' : 'hcp-cancer-sub'}
        dir={arabic ? 'rtl' : undefined}
        lang={arabic ? 'ar' : undefined}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function SharedResources({ arabic }: { arabic?: boolean }) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  return (
    <>
      <HcpGuideSection id="resources" title={arabic ? 'موارد PDF' : 'PDF resources'} icon="📄" {...sectionProps}>
        <HcpGuidePdfEmbed
          src={IMMUNISATION_GUIDE_PDF}
          title="Immunisation for adults pre and post solid organ transplant (not kidney transplant), v8 May 2026"
        />
        <HcpGuidePdfEmbed
          src={AUSTRALIAN_HANDBOOK_TABLE_PDF}
          title="Australian Immunisation Handbook — recommendations for vaccination before and after solid organ transplant"
        />
      </HcpGuideSection>
      <HcpGuideReferences
        references={[...REFERENCES]}
        title={arabic ? 'المراجع' : 'References'}
        {...sectionProps}
      />
    </>
  );
}

function SolidOrganTransplantEnglishBody() {
  const copy = SOLID_ORGAN_TRANSPLANT_COPY.en;

  return (
    <div id="hcp-guide-lang-panel-en" role="tabpanel" aria-labelledby="hcp-guide-lang-tab-en">
      <HcpGuideSection id="overview" title={copy.overview.title} icon="📋">
        {copy.overview.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </HcpGuideSection>

      <HcpGuideSection id="core-principles" title={copy.corePrinciples.title} icon="⏱️">
        <p>{copy.corePrinciples.intro}</p>
        <ul>
          {copy.corePrinciples.bullets.map((bullet) => (
            <li key={bullet.label}>
              <strong>{bullet.label}</strong> {bullet.text}
            </li>
          ))}
        </ul>
      </HcpGuideSection>

      <HcpGuideSection id="universal-schedule" title={copy.universalSchedule.title} icon="💉">
        <p>{copy.universalSchedule.intro}</p>
        <HcpGuideMedicalTable
          caption={copy.universalSchedule.caption}
          columns={copy.universalSchedule.columns}
          rows={copy.universalSchedule.rows}
        />
      </HcpGuideSection>

      <HcpGuideSection id="organ-specific" title={copy.organSpecific.title} icon="🏥">
        <p>{copy.organSpecific.intro}</p>
        {copy.organSpecific.subsections.map((subsection) => (
          <OrganSubsection key={subsection.title} title={subsection.title}>
            {subsection.paragraphs.map((paragraph) => (
              <p key={paragraph.label}>
                <strong>{paragraph.label}</strong> {paragraph.text}
              </p>
            ))}
          </OrganSubsection>
        ))}
      </HcpGuideSection>

      <HcpGuideSection id="cocooning" title={copy.cocooning.title} icon="🤝" variant="takeaway">
        {copy.cocooning.paragraphs.map((paragraph) => (
          <p key={paragraph.text.slice(0, 48)}>
            {paragraph.strong ? <strong>{paragraph.strong}</strong> : null}
            {paragraph.strong ? ' ' : null}
            {paragraph.text}
          </p>
        ))}
      </HcpGuideSection>

      <SharedResources />
    </div>
  );
}

function SolidOrganTransplantArabicBody() {
  const copy = SOLID_ORGAN_TRANSPLANT_COPY.ar;
  const ids = SOLID_ORGAN_TRANSPLANT_SECTION_IDS.ar;

  return (
    <div id="hcp-guide-lang-panel-ar" role="tabpanel" aria-labelledby="hcp-guide-lang-tab-ar">
      <HcpGuideArabicPanel contentOnly>
        <HcpGuideSection
          id={ids.overview}
          title={copy.overview.title}
          icon="📋"
          dir="rtl"
          lang="ar"
          titleAlign="right"
        >
          {copy.overview.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </HcpGuideSection>

        <HcpGuideSection
          id={ids.corePrinciples}
          title={copy.corePrinciples.title}
          icon="⏱️"
          dir="rtl"
          lang="ar"
          titleAlign="right"
        >
          <p>{copy.corePrinciples.intro}</p>
          <ul>
            {copy.corePrinciples.bullets.map((bullet) => (
              <li key={bullet.label}>
                <strong>{bullet.label}</strong> {bullet.text}
              </li>
            ))}
          </ul>
        </HcpGuideSection>

        <HcpGuideSection
          id={ids.universalSchedule}
          title={copy.universalSchedule.title}
          icon="💉"
          dir="rtl"
          lang="ar"
          titleAlign="right"
        >
          <p>{copy.universalSchedule.intro}</p>
          <HcpGuideMedicalTable
            caption={copy.universalSchedule.caption}
            columns={copy.universalSchedule.columns}
            rows={copy.universalSchedule.rows}
          />
        </HcpGuideSection>

        <HcpGuideSection
          id={ids.organSpecific}
          title={copy.organSpecific.title}
          icon="🏥"
          dir="rtl"
          lang="ar"
          titleAlign="right"
        >
          <p>{copy.organSpecific.intro}</p>
          {copy.organSpecific.subsections.map((subsection) => (
            <OrganSubsection key={subsection.title} title={subsection.title} arabic>
              {subsection.paragraphs.map((paragraph) => (
                <p key={paragraph.label}>
                  <strong>{paragraph.label}</strong> {paragraph.text}
                </p>
              ))}
            </OrganSubsection>
          ))}
        </HcpGuideSection>

        <HcpGuideSection
          id={ids.cocooning}
          title={copy.cocooning.title}
          icon="🤝"
          variant="takeaway"
          dir="rtl"
          lang="ar"
          titleAlign="right"
        >
          {copy.cocooning.paragraphs.map((paragraph) => (
            <p key={paragraph.text.slice(0, 48)}>
              {paragraph.strong ? <strong>{paragraph.strong}</strong> : null}
              {paragraph.strong ? ' ' : null}
              {paragraph.text}
            </p>
          ))}
        </HcpGuideSection>
      </HcpGuideArabicPanel>

      <SharedResources arabic />
    </div>
  );
}

export default function SolidOrganTransplantVaccinationArticle() {
  const [locale, setLocale] = useState<HcpGuideLocale>('en');
  const copy = SOLID_ORGAN_TRANSPLANT_COPY;

  const handleLocaleChange = useCallback((next: HcpGuideLocale) => {
    setLocale(next);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <HcpGuidePageLayout
      metaKey="hcpSolidOrganTransplant"
      title={
        locale === 'en' ? 'Solid organ transplant vaccination' : copy.ar.arHeroTitle
      }
      emoji="🫀"
      lead={
        locale === 'en'
          ? 'Evidence-based vaccination before and after solid organ transplantation — timing, inactivated versus live vaccines, universal schedules, and organ-specific priorities.'
          : copy.ar.arHeroLead
      }
      articleLocale={locale}
      languageTabs={<HcpGuideLanguageTabs locale={locale} onChange={handleLocaleChange} />}
      toc={
        locale === 'en'
          ? [...SOLID_ORGAN_TRANSPLANT_EN_TOC]
          : [...SOLID_ORGAN_TRANSPLANT_AR_TOC_FULL]
      }
    >
      {locale === 'en' ? <SolidOrganTransplantEnglishBody /> : <SolidOrganTransplantArabicBody />}
    </HcpGuidePageLayout>
  );
}
