import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  VaccinationOfContactsCopy,
  VaccinationOfContactsParagraph,
} from '@/data/vaccination-of-contacts-copy';
import { VACCINATION_OF_CONTACTS_SECTION_IDS } from '@/data/vaccination-of-contacts-copy';

function renderParagraph(paragraph: VaccinationOfContactsParagraph, key: string) {
  if (typeof paragraph === 'string') {
    return <p key={key}>{paragraph}</p>;
  }

  return (
    <p key={key}>
      {paragraph.parts.map((part, index) =>
        part.bold ? <strong key={`${key}-${index}`}>{part.text}</strong> : part.text,
      )}
    </p>
  );
}

export function VaccinationOfContactsBody({
  copy,
  arabic,
}: {
  copy: VaccinationOfContactsCopy;
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const referencesId = arabic
    ? VACCINATION_OF_CONTACTS_SECTION_IDS.ar.references
    : VACCINATION_OF_CONTACTS_SECTION_IDS.en.references;

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
          {section.paragraphs.map((paragraph, index) =>
            renderParagraph(paragraph, `${section.id}-${index}`),
          )}
        </HcpGuideSection>
      ))}

      <HcpGuideReferences
        id={referencesId}
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
