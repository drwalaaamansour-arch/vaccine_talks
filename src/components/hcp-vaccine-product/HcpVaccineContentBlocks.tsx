import type { ReactNode } from 'react';
import HcpGuideRelatedLinks from '@/components/hcp-guide/HcpGuideRelatedLinks';
import HcpGuideSection from '@/components/hcp-guide/HcpGuideSection';
import HcpProductPdfEmbed from '@/components/hcp-vaccine-product/HcpProductPdfEmbed';

export type VaccineContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'html'; html: string };

export type VaccinePageSection = {
  id: string;
  title: string;
  icon: string;
  blocks: VaccineContentBlock[];
};

export type VaccinePagePdf = {
  productName: string;
  src: string;
};

export type VaccinePageReference = {
  label: string;
  href: string;
};

function renderBlock(block: VaccineContentBlock, key: number) {
  switch (block.type) {
    case 'p':
      return <p key={key}>{block.text}</p>;
    case 'h3':
      return (
        <h3 key={key} className="hcp-vax-product-subhead">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={key}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'html':
      return <div key={key} dangerouslySetInnerHTML={{ __html: block.html }} />;
    default:
      return null;
  }
}

export function HcpVaccineContentBlocks({
  sections,
  arabic,
}: {
  sections: VaccinePageSection[];
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  return (
    <>
      {sections.map((section) => (
        <HcpGuideSection
          key={section.id}
          id={section.id}
          title={section.title}
          icon={section.icon}
          {...sectionProps}
        >
          {section.blocks.map((block, index) => renderBlock(block, index))}
        </HcpGuideSection>
      ))}
    </>
  );
}

export function HcpVaccineResourcesSection({
  id = 'resources',
  faqHref,
  docHref,
  faqLabel,
  docLabel,
  title = 'FAQ & Documents',
  arabic,
}: {
  id?: string;
  faqHref?: string;
  docHref?: string;
  faqLabel?: string;
  docLabel?: string;
  title?: string;
  arabic?: boolean;
}) {
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  const links = [];
  if (faqHref) {
    links.push({ href: faqHref, label: faqLabel ?? 'Frequently Asked Questions' });
  }
  if (docHref) {
    links.push({ href: docHref, label: docLabel ?? 'Clinical documents' });
  }
  if (links.length === 0) return null;
  return (
    <HcpGuideSection id={id} title={title} icon="📚" {...sectionProps}>
      <HcpGuideRelatedLinks links={links} />
    </HcpGuideSection>
  );
}

export function HcpVaccineReferencesSection({
  id = 'references',
  references,
  title = 'References',
  arabic,
}: {
  id?: string;
  references: VaccinePageReference[];
  title?: string;
  arabic?: boolean;
}) {
  if (references.length === 0) return null;
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  return (
    <HcpGuideSection id={id} title={title} icon="🔗" {...sectionProps}>
      <ul className="hcp-vax-product-refs">
        {references.map((ref) => (
          <li key={ref.href}>
            <a href={ref.href} target="_blank" rel="noopener noreferrer">
              {ref.label}
            </a>
          </li>
        ))}
      </ul>
    </HcpGuideSection>
  );
}

export function HcpVaccineInsertsSection({
  id = 'inserts',
  pdfs,
  title = 'Product Inserts (PDF)',
  arabic,
}: {
  id?: string;
  pdfs: VaccinePagePdf[];
  title?: string;
  arabic?: boolean;
}) {
  if (pdfs.length === 0) return null;
  const sectionProps = arabic
    ? { dir: 'rtl' as const, lang: 'ar', titleAlign: 'right' as const }
    : {};

  return (
    <HcpGuideSection id={id} title={title} icon="📄" {...sectionProps}>
      {pdfs.map((pdf) => (
        <HcpProductPdfEmbed key={pdf.src} productName={pdf.productName} src={pdf.src} />
      ))}
    </HcpGuideSection>
  );
}

export function HcpVaccineExtraContent({ children }: { children: ReactNode }) {
  if (!children) return null;
  return <div className="hcp-vax-product-extra">{children}</div>;
}
