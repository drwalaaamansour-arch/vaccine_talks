import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type { CochlearCopy, CochlearParagraph } from '@/data/cochlear-implants-copy';

const COCHLEAR_PDF = `/${encodeURIComponent('cochlear.pdf')}`;

function renderParagraph(paragraph: CochlearParagraph, key: string) {
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

function renderListItem(item: CochlearParagraph, key: string) {
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

export function CochlearImplantsBody({ copy, arabic }: { copy: CochlearCopy; arabic?: boolean }) {
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
          variant={section.variant === 'takeaway' ? 'takeaway' : 'default'}
          {...sectionProps}
        >
          {section.paragraphs?.map((paragraph, index) =>
            renderParagraph(paragraph, `${section.id}-p-${index}`),
          )}
          {section.listItems ? (
            <ul>
              {section.listItems.map((item, index) =>
                renderListItem(item, `${section.id}-li-${index}`),
              )}
            </ul>
          ) : null}
        </HcpGuideSection>
      ))}

      <HcpGuidePdfEmbed src={COCHLEAR_PDF} title={copy.pdfTitle} />

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
