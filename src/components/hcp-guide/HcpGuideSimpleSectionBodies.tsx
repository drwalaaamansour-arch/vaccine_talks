import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { HcpGuideReference } from '@/components/hcp-guide/types';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';

export type HcpGuideSimpleSection = {
  id: string;
  title: string;
  icon: string;
  paragraphs: string[];
};

export function HcpGuideEnglishSectionsBody({
  sections,
  references,
  referencesTitle = 'References',
}: {
  sections: HcpGuideSimpleSection[];
  references?: HcpGuideReference[];
  referencesTitle?: string;
}) {
  return (
    <>
      {sections.map((section) => (
        <HcpGuideSection key={section.id} id={section.id} title={section.title} icon={section.icon}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </HcpGuideSection>
      ))}
      {references && references.length > 0 ? (
        <HcpGuideReferences references={references} title={referencesTitle} />
      ) : null}
    </>
  );
}

export function HcpGuideArabicSectionsBody({
  sections,
  references,
  referencesTitle = 'المراجع',
}: {
  sections: HcpGuideSimpleSection[];
  references?: HcpGuideReference[];
  referencesTitle?: string;
}) {
  const sectionProps = { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const };

  return (
    <HcpGuideArabicPanel contentOnly>
      {sections.map((section) => (
        <HcpGuideSection key={section.id} id={section.id} title={section.title} icon={section.icon} {...sectionProps}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </HcpGuideSection>
      ))}
      {references && references.length > 0 ? (
        <HcpGuideReferences references={references} title={referencesTitle} {...sectionProps} />
      ) : null}
    </HcpGuideArabicPanel>
  );
}
