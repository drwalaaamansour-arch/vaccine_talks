import type { ReactNode } from 'react';
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
import { HCP_VACCINE_UI } from '@/data/hcp-vaccine-ui-copy';
import { arSectionId } from '@/lib/hcp-vaccine-bilingual';
import type { HcpGuideTocItem } from '@/components/hcp-guide/types';

export type HcpVaccineProductContentProps = {
  sections: VaccinePageSection[];
  faqHref?: string;
  docHref?: string;
  faqLabel?: string;
  docLabel?: string;
  references?: VaccinePageReference[];
  pdfs?: VaccinePagePdf[];
  extra?: ReactNode;
  arabic?: boolean;
};

function buildToc(
  sections: VaccinePageSection[],
  opts: {
    arabic?: boolean;
    hasResources: boolean;
    hasReferences: boolean;
    hasPdfs: boolean;
    tocExtra?: HcpGuideTocItem[];
  },
): HcpGuideTocItem[] {
  const ui = opts.arabic ? HCP_VACCINE_UI.ar : HCP_VACCINE_UI.en;
  const toc: HcpGuideTocItem[] = sections.map((s) => ({
    id: opts.arabic ? arSectionId(s.id) : s.id,
    label: s.title,
  }));
  if (opts.tocExtra) {
    toc.push(
      ...opts.tocExtra.map((item) => ({
        id: opts.arabic ? arSectionId(item.id) : item.id,
        label: item.label,
      })),
    );
  }
  if (opts.hasResources) {
    toc.push({ id: opts.arabic ? arSectionId('resources') : 'resources', label: ui.resourcesTitle });
  }
  if (opts.hasReferences) {
    toc.push({ id: opts.arabic ? arSectionId('references') : 'references', label: ui.referencesTitle });
  }
  if (opts.hasPdfs) {
    toc.push({ id: opts.arabic ? arSectionId('inserts') : 'inserts', label: ui.insertsTitle });
  }
  return toc;
}

export function HcpVaccineProductPageContent({
  sections,
  faqHref,
  docHref,
  faqLabel,
  docLabel,
  references = [],
  pdfs = [],
  extra,
  arabic,
}: HcpVaccineProductContentProps) {
  const ui = arabic ? HCP_VACCINE_UI.ar : HCP_VACCINE_UI.en;
  const hasResources = Boolean(faqHref || docHref);

  return (
    <>
      <HcpVaccineContentBlocks sections={sections} arabic={arabic} />
      <HcpVaccineExtraContent>{extra}</HcpVaccineExtraContent>
      <HcpVaccineResourcesSection
        id={arabic ? arSectionId('resources') : 'resources'}
        faqHref={faqHref}
        docHref={docHref}
        faqLabel={faqLabel ?? ui.faqLabel}
        docLabel={docLabel ?? ui.docLabel}
        title={ui.resourcesTitle}
        arabic={arabic}
      />
      <HcpVaccineReferencesSection
        id={arabic ? arSectionId('references') : 'references'}
        references={references}
        title={ui.referencesTitle}
        arabic={arabic}
      />
      <HcpVaccineInsertsSection
        id={arabic ? arSectionId('inserts') : 'inserts'}
        pdfs={pdfs}
        title={ui.insertsTitle}
        arabic={arabic}
      />
    </>
  );
}

export { buildToc as buildVaccineProductToc };
