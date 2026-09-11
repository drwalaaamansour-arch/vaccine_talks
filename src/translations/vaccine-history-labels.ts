import {
  type AdditionalVaccineCategory,
  type Language,
  type TranslateFn,
} from '@/types/wizard-types';
import { getVaccineCategoryLabel } from '@/translations/vaccine-category-labels';

export type VaccineHistoryStepKind =
  | 'product'
  | 'doseCount'
  | 'doseDates'
  | 'context';

const STEP_KEY_PREFIX: Record<Exclude<VaccineHistoryStepKind, 'doseDates'>, string> = {
  product: 'productTitle',
  doseCount: 'dosesTitle',
  context: 'historyContext',
};

const GENERIC_FALLBACK_KEY: Partial<Record<Exclude<VaccineHistoryStepKind, 'doseDates'>, string>> = {
  product: 'productTitle',
  doseCount: 'dosesTitle',
};

export function getVaccineHistoryStepLabel(
  kind: Exclude<VaccineHistoryStepKind, 'doseDates'>,
  category: AdditionalVaccineCategory,
  t: TranslateFn
): string {
  const key = `${STEP_KEY_PREFIX[kind]}_${category}`;
  const translated = t(key);

  if (translated !== key) {
    return translated;
  }

  const fallbackKey = GENERIC_FALLBACK_KEY[kind];
  return fallbackKey ? t(fallbackKey) : translated;
}

export function getDoseDatesHeading(
  category: AdditionalVaccineCategory,
  numberOfDoses: number,
  language: Language,
  t: TranslateFn
): string {
  const categoryKey = `doseDatesHeading_${numberOfDoses === 1 ? 'single' : 'multiple'}_${category}`;
  const categorySpecific = t(categoryKey);
  if (categorySpecific !== categoryKey) {
    return categorySpecific;
  }

  const vaccine = getVaccineCategoryLabel(category, language);
  if (numberOfDoses === 1) {
    return t('doseDatesHeadingSingle', { vaccine });
  }

  return t('doseDatesHeadingMultiple', { vaccine });
}

export function getDoseDateFieldLabel(doseNumber: number, t: TranslateFn): string {
  const key = `doseDateField_dose${doseNumber}`;
  const translated = t(key);
  return translated !== key ? translated : t('doseDateField_dose1');
}
