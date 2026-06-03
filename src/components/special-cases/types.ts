export type SpecialCaseLocale = 'ar' | 'en';

export type SpecialCaseCardVariant =
  | 'teal'
  | 'rose'
  | 'slate'
  | 'gold'
  | 'mint'
  | 'amber'
  | 'yes'
  | 'sky'
  | 'tips';

export type VaccineLink = {
  href: string;
  ar: string;
  en: string;
};

export type ArticleMetaFields = {
  added: string;
  lastUpdated: string;
};
