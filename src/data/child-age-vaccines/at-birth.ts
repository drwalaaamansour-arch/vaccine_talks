import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const AT_BIRTH_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'atBirth',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'عند الميلاد',
    titleEn: 'At Birth',
    leadAr: 'التطعيمات الأساسية التي تُعطى للطفل فور ولادته لحمايته من الأمراض الخطيرة.',
    leadEn: 'Essential vaccines given right after birth to protect against serious diseases.',
    imageSrc: '/birth.jpg',
    imageAlt: 'Newborn baby',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [VAX.polioDrops, VAX.tuberculosis, VAX.zeroDose],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [],
    },
  ],
};
