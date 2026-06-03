import type { ReactNode } from 'react';
import type { ArticleMetaKey } from '@/lib/article-meta';

export type VaccineTextBlock = string | string[];

export type VaccineFeature = {
  emoji?: string;
  ar: string;
  en: string;
};

export type VaccineScheduleChip = {
  ar: string;
  en: string;
};

export type VaccineSchedule = {
  variant: 'drops' | 'inject';
  icon: string;
  titleAr: string;
  titleEn: string;
  noteAr: string;
  noteEn: string;
  chips: VaccineScheduleChip[];
};

export type VaccineFaqLink = {
  href: string;
  labelAr?: string;
  labelEn?: string;
};

export type VaccineCdcPdf = {
  fileName: string;
  titleAr: string;
  titleEn: string;
  introAr?: string;
};

export type VaccineArticle = {
  metaKey: ArticleMetaKey;
  emoji: string;
  heroAccent?: 'polio' | 'default';
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  heroLeadAr: VaccineTextBlock;
  heroLeadEn: VaccineTextBlock;
  image?: {
    src: string;
    alt: string;
  };
  introAr?: string;
  introEn?: string;
  features: VaccineFeature[];
  schedules?: VaccineSchedule[];
  summary?: {
    titleAr: string;
    titleEn: string;
    ar: string;
    en: string;
  };
  faqLinks?: VaccineFaqLink[];
  cdcPdfs?: VaccineCdcPdf[];
  afterContent?: ReactNode;
};
