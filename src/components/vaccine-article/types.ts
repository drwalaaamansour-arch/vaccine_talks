import type { ReactNode } from 'react';
import type { ArticleMetaKey } from '@/lib/article-meta';

export type VaccineTextBlock = string | string[];

export type VaccineFeature = {
  emoji?: string;
  titleAr?: string;
  titleEn?: string;
  tone?: 'violet' | 'teal' | 'rose' | 'default';
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
  heroAccent?: 'polio' | 'rota' | 'pcv' | 'hpv' | 'default';
  /** When true, the infographic appears above the feature cards. */
  infographicFirst?: boolean;
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
  infographic?: {
    src: string;
    /** Optional English-language image; falls back to `src` when omitted. */
    srcEn?: string;
    altAr: string;
    altEn: string;
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
