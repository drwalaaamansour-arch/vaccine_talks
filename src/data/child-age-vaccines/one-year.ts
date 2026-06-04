import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const ONE_YEAR_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'oneYear',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'سنة',
    titleEn: 'One Year',
    leadAr: 'التطعيمات المطلوبة في عمر السنة — إجبارية وإضافية حسب الجدول المصري.',
    leadEn: 'Vaccines due at one year of age — mandatory and additional on Egypt’s schedule.',
    imageSrc: '/1year%20old%20baby%20with%20black%20eyes%20not%20eastern%20but%20from%20egypt.jpeg',
    imageAlt: 'One year old baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [VAX.polioDrops, VAX.mmr],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [VAX.hepatitisA, VAX.chickenpox],
    },
  ],
};
