import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import HcpGuideRelatedLinks from '@/components/hcp-guide/HcpGuideRelatedLinks';
import type {
  InternationalTravellersCopy,
  InternationalTravellersSection,
} from '@/data/international-travellers-copy';

function Sub({ title, dir, lang }: { title: string; dir?: 'rtl' | 'ltr'; lang?: string }) {
  return (
    <h3 className="hcp-cancer-sub" dir={dir} lang={lang}>
      {title}
    </h3>
  );
}

function SectionContent({
  section,
  sectionProps,
}: {
  section: InternationalTravellersSection;
  sectionProps: Record<string, unknown>;
}) {
  const dir = sectionProps.dir as 'rtl' | 'ltr' | undefined;
  const lang = sectionProps.lang as string | undefined;

  return (
    <>
      {section.paragraphs?.map((text, index) => (
        <p key={`${section.id}-p-${index}`}>{text}</p>
      ))}

      {section.doDont ? (
        <>
          <Sub title={section.doDont.doTitle} dir={dir} lang={lang} />
          <ul>
            {section.doDont.doItems.map((item, index) => (
              <li key={`${section.id}-do-${index}`}>{item}</li>
            ))}
          </ul>
          <Sub title={section.doDont.dontTitle} dir={dir} lang={lang} />
          <ul>
            {section.doDont.dontItems.map((item, index) => (
              <li key={`${section.id}-dont-${index}`}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {section.externalLink ? (
        <HcpGuideRelatedLinks
          links={[
            {
              href: section.externalLink.href,
              label: section.externalLink.text,
              external: true,
            },
          ]}
        />
      ) : null}
    </>
  );
}

export function InternationalTravellersBody({
  copy,
  arabic,
}: {
  copy: InternationalTravellersCopy;
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const body = (
    <>
      {copy.sections.map((section) => (
        <HcpGuideSection
          key={section.id}
          id={section.id}
          title={section.title}
          icon={section.icon}
          {...sectionProps}
        >
          <SectionContent section={section} sectionProps={sectionProps} />
        </HcpGuideSection>
      ))}
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
