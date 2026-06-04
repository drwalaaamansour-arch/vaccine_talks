import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const SECOND_YEAR_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'secondYear',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'السنة الثانية من العمر',
    titleEn: 'Second Year of Life',
    leadAr: 'التطعيمات المطلوبة في السنة الثانية من العمر — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due in the second year of life — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/1year%20old%20baby%20with%20black%20eyes%20not%20eastern%20but%20from%20egypt-2.jpeg',
    imageAlt: 'Toddler in second year of life',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [VAX.tetanus, VAX.diphtheria, VAX.pertussis, VAX.mmr, VAX.polioDrops],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [
        VAX.chickenpox,
        VAX.meningitisQuad,
        VAX.pcv,
        VAX.hib,
        VAX.hepatitisA,
        VAX.meningitisB,
      ],
    },
  ],
};
