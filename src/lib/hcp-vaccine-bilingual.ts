import type { VaccinePageSection } from '@/components/hcp-vaccine-product/HcpVaccineContentBlocks';
import type { HcpGuideTocItem } from '@/components/hcp-guide/types';

export function arSectionId(id: string): string {
  return id.endsWith('-ar') ? id : `${id}-ar`;
}

export function localizeSectionsForAr(sections: VaccinePageSection[]): VaccinePageSection[] {
  return sections.map((section) => ({
    ...section,
    id: arSectionId(section.id),
  }));
}

export function localizeTocForAr(toc: HcpGuideTocItem[]): HcpGuideTocItem[] {
  return toc.map((item) => ({
    ...item,
    id: arSectionId(item.id),
  }));
}

export function localizeStandardSectionIds(hasResources: boolean, hasReferences: boolean, hasPdfs: boolean) {
  return {
    resources: arSectionId('resources'),
    references: arSectionId('references'),
    inserts: arSectionId('inserts'),
  };
}
