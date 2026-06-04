import type { ArticleMetaKey } from '@/lib/article-meta';

export type ChildAgeVaccineItem = {
  id: string;
  href: string;
  emoji: string;
  ar: string;
  en: string;
  keywords: string;
};

export type ChildAgeVaccineGroup = {
  id: 'mandatory' | 'additional';
  titleAr: string;
  titleEn: string;
  items: ChildAgeVaccineItem[];
};

export type ChildAgeVaccinesPageConfig = {
  metaKey: ArticleMetaKey;
  hero: {
    tag: string;
    titleAr: string;
    titleEn: string;
    leadAr: string;
    leadEn: string;
    imageSrc: string;
    imageAlt: string;
  };
  groups: ChildAgeVaccineGroup[];
};
