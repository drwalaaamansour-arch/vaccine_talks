import { getTimingDisplayLines } from '@/lib/vaccine-checker/recommendation-timing';
import {
  getCardExplanation,
  getConditionalNextDoseTranslationKey,
  getConditionalNextDoseTranslationParams,
  getDisplayCardNoteKeys,
  getDisplayCardNoteParams,
  getProductDisplayLabel,
  getRecommendationCategoryLabel,
  shouldHideDoseLabelForTimingDisplay,
  shouldShowDoseLabelOnCard,
  type ResultsSectionKind,
} from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

export type ShareTranslateFn = (key: string, params?: Record<string, string>) => string;

export function formatShareDate(isoDate: string | undefined, language: 'en' | 'ar'): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-').map(Number);
  if (language === 'ar') {
    return `${day}/${month}/${year}`;
  }
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
}

function formatShareTimingLine(
  line: { key: string; params: Record<string, string> },
  language: 'en' | 'ar',
  t: ShareTranslateFn
): string {
  const params: Record<string, string> = {};

  for (const [key, value] of Object.entries(line.params)) {
    if (key === 'doseLabelKey') {
      params.doseLabel = t(value);
      continue;
    }

    if (key === 'date' || key.endsWith('Date')) {
      params[key] = formatShareDate(value, language);
      continue;
    }

    params[key] = value;
  }

  return t(line.key, params);
}

export function formatRecommendationShareLine(
  item: VaccineRecommendation,
  section: ResultsSectionKind,
  language: 'en' | 'ar',
  referenceDate: Date,
  checkerInput: CheckerInput,
  t: ShareTranslateFn
): string {
  const categoryLabel = getRecommendationCategoryLabel(item, language, t);
  const productLabel = getProductDisplayLabel(item.product);
  const doseLabel = t(item.doseLabelKey);
  const timingLines = item.conditionalNextDose ? [] : getTimingDisplayLines(item, referenceDate);
  const timingLineKeys = timingLines.map((line) => line.key);
  const showDoseLabel =
    shouldShowDoseLabelOnCard(section, item.doseLabelKey) &&
    !shouldHideDoseLabelForTimingDisplay(item, timingLineKeys);

  const labelParts = [categoryLabel];
  if (productLabel) {
    labelParts[0] = `${categoryLabel} (${productLabel})`;
  }

  const detailParts: string[] = [];
  if (showDoseLabel) {
    detailParts.push(doseLabel);
  }

  for (const line of timingLines) {
    detailParts.push(formatShareTimingLine(line, language, t));
  }

  if (item.conditionalNextDose) {
    const labelKey = getConditionalNextDoseTranslationKey(item);
    const params = getConditionalNextDoseTranslationParams(
      item,
      (isoDate) => formatShareDate(isoDate, language),
      (doseLabelKey) => t(doseLabelKey)
    );
    detailParts.push(t(labelKey, params));
  }

  if (section === 'needsReview') {
    const explanation = getCardExplanation(item, t, checkerInput);
    if (explanation) {
      detailParts.push(explanation);
    }
  }

  const cardNotes = getDisplayCardNoteKeys(item, checkerInput);
  if (section !== 'needsReview') {
    for (const noteKey of cardNotes) {
      detailParts.push(
        t(
          noteKey,
          getDisplayCardNoteParams(noteKey, item, checkerInput, (isoDate) =>
            formatShareDate(isoDate, language)
          )
        )
      );
    }
  }

  if (item.historicalRecommendedDate) {
    detailParts.push(
      t('note_hexRoutineBoosterHistoricalDate', {
        date: formatShareDate(item.historicalRecommendedDate, language),
      })
    );
  }

  if (section === 'ageLimitPassed' && item.reasonKey) {
    detailParts.push(t(item.reasonKey));
  }

  const details = detailParts.filter(Boolean).join(' — ');
  return details ? `${labelParts[0]}: ${details}` : labelParts[0];
}
