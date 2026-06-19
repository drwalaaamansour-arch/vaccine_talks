import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import HcpGuideReferences from '@/components/hcp-guide/HcpGuideReferences';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import type {
  IgBloodContentItem,
  IgBloodCopy,
  IgBloodParagraph,
} from '@/data/immunoglobulin-blood-products-copy';

const PDF_INTERVALS = `/${encodeURIComponent('vaccine and blood')}/${encodeURIComponent(
  'Table. Recommended intervals between immunoglobulins or blood products, and measles-mumps-rubella, m.pdf',
)}`;
const PDF_TIMING = `/${encodeURIComponent('vaccine and blood')}/${encodeURIComponent('timing19-24,26-31.pdf')}`;

const PDF_SRC: Record<'intervals' | 'timing', string> = {
  intervals: PDF_INTERVALS,
  timing: PDF_TIMING,
};

function renderParagraph(paragraph: IgBloodParagraph, key: string) {
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

function renderContentItem(item: IgBloodContentItem, sectionProps: Record<string, unknown>) {
  if (item.type === 'pdf') {
    return (
      <div key={item.id} id={item.id}>
        <HcpGuidePdfEmbed src={PDF_SRC[item.srcKey]} title={item.title} />
      </div>
    );
  }

  return (
    <HcpGuideSection
      key={item.id}
      id={item.id}
      title={item.title}
      icon={item.icon}
      {...sectionProps}
    >
      {item.paragraphs.map((paragraph, index) =>
        renderParagraph(paragraph, `${item.id}-${index}`),
      )}
    </HcpGuideSection>
  );
}

export function ImmunoglobulinBloodProductsBody({
  copy,
  arabic,
}: {
  copy: IgBloodCopy;
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const body = (
    <>
      {copy.content.map((item) => renderContentItem(item, sectionProps))}
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
