import { GROUP_TITLES, VAX } from '@/data/child-age-vaccines/items';
import type { ChildAgeVaccinesPageConfig } from '@/data/child-age-vaccines/types';

export const NINE_YEARS_VACCINES: ChildAgeVaccinesPageConfig = {
  metaKey: 'nineYears',
  hero: {
    tag: 'تطعيمات الأطفال · Children’s schedule',
    titleAr: 'تسع سنوات',
    titleEn: 'Nine Years',
    leadAr: 'التطعيمات الموصى بها من سن تسع سنوات — أهمها لقاح فيروس الورم الحليمي البشري (HPV).',
    leadEn: 'Recommended vaccines from age nine — including HPV on Egypt’s schedule.',
    imageSrc: '/boy%20with%20girl%209%20years%20old%20and%20happy%20from%20egypt.jpeg',
    imageAlt: 'Children nine years old',
  },
  groups: [
    {
      id: 'mandatory',
      ...GROUP_TITLES.mandatory,
      items: [VAX.hpv],
    },
    {
      id: 'additional',
      ...GROUP_TITLES.additional,
      items: [],
    },
  ],
};
