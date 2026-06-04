import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const TWO_MONTHS_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'twoMonths',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'شهرين',
    titleEn: 'Two Months',
    leadAr: 'التطعيمات المطلوبة في عمر الشهرين — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due at two months of age — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/2%20month%20old%20baby.jpeg',
    imageAlt: 'Two month old baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [
        VAX.tetanus,
        VAX.pertussis,
        VAX.diphtheria,
        VAX.polioInjection,
        VAX.hib,
        VAX.polioDrops,
        VAX.hepatitisB,
      ],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [VAX.rotavirus, VAX.pcv, VAX.meningitisQuad, VAX.meningitisB],
    },
  ],
};
