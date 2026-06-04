import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const SIX_MONTHS_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'sixMonths',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'ست شهور',
    titleEn: 'Six Months',
    leadAr: 'التطعيمات المطلوبة في عمر الست شهور — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due at six months of age — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/6%20month%20old%20baby%20with%20black%20eyes.jpeg',
    imageAlt: 'Six month old baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [
        VAX.tetanus,
        VAX.diphtheria,
        VAX.pertussis,
        VAX.hib,
        VAX.polioInjection,
        VAX.polioDrops,
        VAX.hepatitisB,
      ],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [VAX.pcv, VAX.rotavirus],
    },
  ],
};
