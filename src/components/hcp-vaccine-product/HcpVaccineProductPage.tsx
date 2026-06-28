import type { ReactNode } from 'react';
import HcpGuideArabicPanel from '@/components/hcp-guide/HcpGuideArabicPanel';
import HcpVaccineProductLayout from '@/components/hcp-vaccine-product/HcpVaccineProductLayout';
import {
  HcpVaccineProductPageContent,
  buildVaccineProductToc,
} from '@/components/hcp-vaccine-product/HcpVaccineProductPageContent';
import type {
  VaccinePagePdf,
  VaccinePageReference,
  VaccinePageSection,
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
  /** Full Arabic product copy — enables dedicated Arabic tab with translation disclaimer. */
  ar?: Omit<
    HcpVaccineProductPageProps,
    'metaKey' | 'ar' | 'emoji' | 'imageSrc' | 'imageAlt' | 'faqHref' | 'docHref'
  >;
};

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
  ar,
}: HcpVaccineProductPageProps) {
  const hasResources = Boolean(faqHref || docHref);
  const enToc = buildVaccineProductToc(sections, {
    arabic: false,
    hasResources,
    hasReferences: references.length > 0,
    hasPdfs: pdfs.length > 0,
    tocExtra,
  });

  const arToc = ar
    ? buildVaccineProductToc(ar.sections, {
        arabic: true,
        hasResources,
        hasReferences: (ar.references ?? references).length > 0,
        hasPdfs: (ar.pdfs ?? pdfs).length > 0,
        tocExtra: ar.tocExtra ?? tocExtra,
      })
    : undefined;

  const englishBody = (
    <HcpVaccineProductPageContent
      sections={sections}
      faqHref={faqHref}
      docHref={docHref}
      faqLabel={faqLabel}
      docLabel={docLabel}
      references={references}
      pdfs={pdfs}
      extra={extra}
    />
  );

  const arabicBody = ar ? (
    <HcpGuideArabicPanel contentOnly>
      <HcpVaccineProductPageContent
        sections={ar.sections}
        faqHref={faqHref}
        docHref={docHref}
        faqLabel={ar.faqLabel ?? faqLabel}
        docLabel={ar.docLabel ?? docLabel}
        references={ar.references ?? references}
        pdfs={ar.pdfs ?? pdfs}
        extra={ar.extra ?? extra}
        arabic
      />
    </HcpGuideArabicPanel>
  ) : undefined;

  return (
    <HcpVaccineProductLayout
      metaKey={metaKey}
      title={title}
      lead={lead}
      emoji={emoji}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      toc={enToc}
      arTitle={ar?.title}
      arLead={ar?.lead}
      arToc={arToc}
      arabicChildren={arabicBody}
    >
      {englishBody}
    </HcpVaccineProductLayout>
  );
}
