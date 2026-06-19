import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideSubNav from '@/components/hcp-guide/HcpGuideSubNav';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import {
  ASPLENIA_AR_TOC,
  ASPLENIA_COPY,
  ASPLENIA_EN_TOC,
  ASPLENIA_SECTION_IDS,
  type AspleniaCopy,
} from '@/data/anatomic-or-functional-asplenia-copy';

const PDF_SRC = '/spleen.pdf';

function AspleniaBody({ copy, arabic }: { copy: AspleniaCopy; arabic?: boolean }) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};
  const overview = copy.sections.find((section) =>
    arabic ? section.id === ASPLENIA_SECTION_IDS.ar.overview : section.id === ASPLENIA_SECTION_IDS.en.overview,
  )!;
  const recommended = copy.sections.find((section) =>
    arabic
      ? section.id === ASPLENIA_SECTION_IDS.ar.recommendedVaccines
      : section.id === ASPLENIA_SECTION_IDS.en.recommendedVaccines,
  )!;
  const influenza = copy.sections.find((section) =>
    arabic ? section.id === ASPLENIA_SECTION_IDS.ar.influenzaNote : section.id === ASPLENIA_SECTION_IDS.en.influenzaNote,
  )!;
  const pdfId = arabic ? ASPLENIA_SECTION_IDS.ar.pdf : ASPLENIA_SECTION_IDS.en.pdf;
  const referencesId = arabic ? ASPLENIA_SECTION_IDS.ar.references : ASPLENIA_SECTION_IDS.en.references;

  const content = (
    <>
      <HcpGuideSection id={overview.id} title={overview.title} icon={overview.icon} {...sectionProps}>
        {overview.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </HcpGuideSection>

      <HcpGuideSection id={recommended.id} title={recommended.title} icon={recommended.icon} {...sectionProps}>
        <HcpGuideSubNav
          title={copy.subnavTitle}
          links={copy.subnavLinks}
          dir={arabic ? 'rtl' : undefined}
          lang={arabic ? 'ar' : undefined}
        />
      </HcpGuideSection>

      <HcpGuideSection
        id={influenza.id}
        title={influenza.title}
        icon={influenza.icon}
        variant={influenza.variant}
        {...sectionProps}
      >
        {influenza.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            {arabic ? paragraph : <em>{paragraph}</em>}
          </p>
        ))}
      </HcpGuideSection>

      <div id={pdfId}>
        <HcpGuidePdfEmbed src={PDF_SRC} title={copy.pdfTitle} />
      </div>

      <HcpGuideReferences
        id={referencesId}
        references={copy.references}
        title={copy.referencesTitle}
        {...sectionProps}
      />
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{content}</HcpGuideArabicPanel>;
  }

  return content;
}

export default function AnatomicOrFunctionalAspleniaArticle() {
  const copy = ASPLENIA_COPY;

  return (
    <HcpGuidePageLayout
      metaKey="hcpAsplenia"
      title="Anatomic or functional asplenia"
      emoji="🛡️"
      lead="Vaccination for persons with anatomical or functional asplenia — encapsulated bacteria, timing before splenectomy, and lifelong infection risk."
      backHref="/hcp-special-populations"
      backLabel="← Special Populations"
      toc={[...ASPLENIA_EN_TOC]}
      bilingual={{
        arTitle: copy.ar.arHeroTitle,
        arLead: copy.ar.arHeroLead,
        arToc: [...ASPLENIA_AR_TOC],
        arabicChildren: <AspleniaBody copy={copy.ar} arabic />,
      }}
    >
      <AspleniaBody copy={copy.en} />
    </HcpGuidePageLayout>
  );
}
