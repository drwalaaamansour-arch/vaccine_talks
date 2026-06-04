import type { ReactNode } from 'react';
import HcpVaccineProductLayout from '@/components/hcp-vaccine-product/HcpVaccineProductLayout';
import {
  HcpVaccineContentBlocks,
  HcpVaccineExtraContent,
  HcpVaccineInsertsSection,
  HcpVaccineReferencesSection,
  HcpVaccineResourcesSection,
  type VaccinePagePdf,
  type VaccinePageReference,
  type VaccinePageSection,
} from '@/components/hcp-vaccine-product/HcpVaccineContentBlocks';
import type { HcpGuideMetaKey, HcpGuideTocItem } from '@/components/hcp-guide/types';

export type HcpVaccineProductPageProps = {
  metaKey: HcpGuideMetaKey;
  title: string;
  lead: string;
  emoji?: string;
  imageSrc?: string;
  imageAlt?: string;
  sections: VaccinePageSection[];
  faqHref?: string;
  docHref?: string;
  faqLabel?: string;
  docLabel?: string;
  references?: VaccinePageReference[];
  pdfs?: VaccinePagePdf[];
  extra?: ReactNode;
  tocExtra?: HcpGuideTocItem[];
};

function buildToc(
  sections: VaccinePageSection[],
  opts: {
    hasResources: boolean;
    hasReferences: boolean;
    hasPdfs: boolean;
    tocExtra?: HcpGuideTocItem[];
  },
): HcpGuideTocItem[] {
  const toc: HcpGuideTocItem[] = sections.map((s) => ({ id: s.id, label: s.title }));
  if (opts.tocExtra) toc.push(...opts.tocExtra);
  if (opts.hasResources) toc.push({ id: 'resources', label: 'FAQ & documents' });
  if (opts.hasReferences) toc.push({ id: 'references', label: 'References' });
  if (opts.hasPdfs) toc.push({ id: 'inserts', label: 'Product inserts (PDF)' });
  return toc;
}

export default function HcpVaccineProductPage({
  metaKey,
  title,
  lead,
  emoji,
  imageSrc,
  imageAlt,
  sections,
  faqHref,
  docHref,
  faqLabel,
  docLabel,
  references = [],
  pdfs = [],
  extra,
  tocExtra,
}: HcpVaccineProductPageProps) {
  const hasResources = Boolean(faqHref || docHref);
  const toc = buildToc(sections, {
    hasResources,
    hasReferences: references.length > 0,
    hasPdfs: pdfs.length > 0,
    tocExtra,
  });

  return (
    <HcpVaccineProductLayout
      metaKey={metaKey}
      title={title}
      lead={lead}
      emoji={emoji}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      toc={toc}
    >
      <HcpVaccineContentBlocks sections={sections} />
      <HcpVaccineExtraContent>{extra}</HcpVaccineExtraContent>
      <HcpVaccineResourcesSection
        faqHref={faqHref}
        docHref={docHref}
        faqLabel={faqLabel}
        docLabel={docLabel}
      />
      <HcpVaccineReferencesSection references={references} />
      <HcpVaccineInsertsSection pdfs={pdfs} />
    </HcpVaccineProductLayout>
  );
}
