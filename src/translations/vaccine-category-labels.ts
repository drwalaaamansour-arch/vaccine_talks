import { type AdditionalVaccineCategory, type Language } from '@/types/wizard-types';
import { AR_TRANSLATIONS, TRANSLATIONS } from '@/translations';

export type VaccineCategoryLabelKey = AdditionalVaccineCategory | 'routine';

const EN_CATEGORY_LABELS: Record<VaccineCategoryLabelKey, string> = {
  rotavirus: 'Rotavirus',
  pneumococcal: 'Pneumococcal (PCV)',
  meningococcalACWY: 'Meningococcal ACWY',
  meningococcalB: 'Meningococcal B',
  varicella: 'Varicella',
  hepatitisA: 'Hepatitis A',
  influenza: 'Influenza',
  hpv: 'HPV',
  routine: 'Routine vaccines',
};

const AR_CATEGORY_LABELS: Record<VaccineCategoryLabelKey, string> = {
  rotavirus: 'روتا',
  pneumococcal: 'المكورات الرئوية (PCV)',
  meningococcalACWY: 'السحائي ACWY',
  meningococcalB: 'السحائي B',
  varicella: 'الجديري المائي',
  hepatitisA: 'التهاب الكبد A',
  influenza: 'الإنفلونزا',
  hpv: 'فيروس الورم الحليمي البشري (HPV)',
  routine: 'تطعيمات الصحة',
};

export function getVaccineCategoryLabel(
  category: string,
  language: Language
): string {
  const translationKey = `category_${category}`;
  const dict = language === 'ar' ? AR_TRANSLATIONS : TRANSLATIONS;
  const fromTranslationFile = (dict as unknown as Record<string, unknown>)[translationKey];

  if (typeof fromTranslationFile === 'string') {
    return fromTranslationFile;
  }

  const fallback =
    language === 'ar'
      ? AR_CATEGORY_LABELS[category as VaccineCategoryLabelKey]
      : EN_CATEGORY_LABELS[category as VaccineCategoryLabelKey];

  if (fallback) {
    return fallback;
  }

  return category;
}
