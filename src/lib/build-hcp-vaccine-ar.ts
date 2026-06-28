import type { HcpVaccineProductPageProps } from '@/components/hcp-vaccine-product/HcpVaccineProductPage';
import type { VaccinePageSection } from '@/components/hcp-vaccine-product/HcpVaccineContentBlocks';
import { arSectionId } from '@/lib/hcp-vaccine-bilingual';

export type VaccineArInput = {
  title: string;
  lead: string;
  sections: VaccinePageSection[];
  faqLabel?: string;
  docLabel?: string;
};

/** Build an `ar` bundle with `-ar` section ids for bilingual product pages. */
export function buildVaccineArBundle(input: VaccineArInput): NonNullable<HcpVaccineProductPageProps['ar']> {
  return {
    title: input.title,
    lead: input.lead,
    sections: input.sections.map((section) => ({
      ...section,
      id: arSectionId(section.id.replace(/-ar$/, '')),
    })),
    faqLabel: input.faqLabel,
    docLabel: input.docLabel,
  };
}
