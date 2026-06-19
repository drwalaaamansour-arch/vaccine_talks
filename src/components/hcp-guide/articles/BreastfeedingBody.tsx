import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { BreastfeedingCopy } from '@/data/breastfeeding-copy';

export function BreastfeedingBody({ copy, arabic }: { copy: BreastfeedingCopy; arabic?: boolean }) {
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
          {section.paragraphs.map((text, index) => (
            <p key={`${section.id}-${index}`}>{text}</p>
          ))}
        </HcpGuideSection>
      ))}

      <HcpGuideReferences
        references={copy.references}
        title={copy.referencesTitle}
        {...sectionProps}
      />
    </>
  );

  if (arabic) {
    return <HcpGuideArabicPanel contentOnly>{body}</HcpGuideArabicPanel>;
  }

  return body;
}
