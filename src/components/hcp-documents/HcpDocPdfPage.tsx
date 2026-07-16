import type { ReactNode } from 'react';
import HcpGuidePageLayout from '@/components/hcp-guide/HcpGuidePageLayout';
import HcpGuidePdfEmbed from '@/components/hcp-guide/HcpGuidePdfEmbed';
import type { HcpGuideMetaKey } from '@/components/hcp-guide/types';

export type HcpDocPdfItem = {
  id: string;
  label: string;
  title: string;
  src: string;
};

type HcpDocPdfPageProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead: string;
  emoji?: string;
  pdfs: HcpDocPdfItem[];
  intro?: ReactNode;
};

export default function HcpDocPdfPage({
  metaKey,
  title,
  lead,
  emoji = '📄',
  pdfs,
  intro,
}: HcpDocPdfPageProps) {
  return (
    <HcpGuidePageLayout
      metaKey={metaKey}
      title={title}
      emoji={emoji}
      tag="HCP · Documents"
      lead={lead}
      backHref="/hcp-documents"
      backLabel="← Documents"
      toc={pdfs.length > 1 ? pdfs.map(({ id, label }) => ({ id, label })) : undefined}
    >
      {intro}
      {pdfs.map((pdf) => (
        <section key={pdf.id} id={pdf.id} className="hcp-doc-pdf-section">
          <HcpGuidePdfEmbed src={pdf.src} title={pdf.title} />
        </section>
      ))}
    </HcpGuidePageLayout>
  );
}
