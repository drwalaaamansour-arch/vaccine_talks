import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const FOUR_MONTHS_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'fourMonths',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'أربع شهور',
    titleEn: 'Four Months',
    leadAr: 'التطعيمات المطلوبة في عمر الأربع شهور — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due at four months of age — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/4%20month%20old%20baby.jpeg',
    imageAlt: 'Four month old baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [
        VAX.pertussis,
        VAX.polioDrops,
        VAX.tetanus,
        VAX.polioInjection,
        VAX.hepatitisB,
        VAX.diphtheria,
        VAX.hib,
      ],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [VAX.rotavirus, VAX.pcv, VAX.meningitisB, VAX.meningitisQuad],
    },
  ],
};
