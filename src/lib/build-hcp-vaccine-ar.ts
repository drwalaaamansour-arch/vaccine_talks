import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import type { VaccinePageSection } from '@/components/hcp-vaccine-product/HcpVaccineContentBlocks';
import { arSectionId } from '@/lib/hcp-vaccine-bilingual';

export type VaccineArInput = {
  title: string;
  lead: string;
  sections: VaccinePageSection[];
  sectionsBeforeResources?: VaccinePageSection[];
  faqLabel?: string;
  docLabel?: string;
};

function withArSectionIds(sections: VaccinePageSection[]): VaccinePageSection[] {
  return sections.map((section) => ({
    ...section,
    id: arSectionId(section.id.replace(/-ar$/, '')),
  }));
}

/** Build an `ar` bundle with `-ar` section ids for bilingual product pages. */
export function buildVaccineArBundle(input: VaccineArInput): NonNullable<HcpVaccineProductPageProps['ar']> {
  return {
    title: input.title,
    lead: input.lead,
    sections: withArSectionIds(input.sections),
    sectionsBeforeResources: input.sectionsBeforeResources
      ? withArSectionIds(input.sectionsBeforeResources)
      : undefined,
    faqLabel: input.faqLabel,
    docLabel: input.docLabel,
  };
}
