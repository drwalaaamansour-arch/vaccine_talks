import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const NINE_MONTHS_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'nineMonths',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'تسع شهور',
    titleEn: 'Nine Months',
    leadAr: 'التطعيمات المطلوبة في عمر التسع شهور — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due at nine months of age — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/9%20month%20old%20baby%20with%20black%20eyes%20not%20western%20but%20from%20egypt.jpeg',
    imageAlt: 'Nine month old baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [VAX.polioDrops],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [VAX.meningitisQuad],
    },
  ],
};
