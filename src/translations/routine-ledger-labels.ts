import {
  isSingleDoseSeries,
  type RoutineSeriesLedgerEntry,
  type RoutineVaccineLedger,
} from '@/lib/vaccine-checker/routine-ledger';
import { ROUTINE_ANTIGEN_SERIES_ORDER } from '@/lib/vaccine-checker/routine-schedule';
import { type Language, type TranslateFn } from '@/types/wizard-types';

export function formatRoutineLedgerSeriesLine(
  entry: RoutineSeriesLedgerEntry,
  language: Language,
  t: TranslateFn
): string {
  const seriesLabel = t(`routineSeries_${entry.series}`);

  if (isSingleDoseSeries(entry.series)) {
    const status = entry.received ? t('routineLedgerReceived') : t('routineLedgerNotReceived');
    return `${seriesLabel}: ${status}`;
  }

  if (entry.documentedDoseKeys.length === 0) {
    return `${seriesLabel}: ${t('routineLedgerDocumentedDoses')} ${t('routineLedgerNone')}`;
  }

  const doseLabels = entry.documentedDoseKeys
    .map((doseKey) => t(`routineVaccine_${doseKey}`))
    .join(language === 'ar' ? '، ' : ', ');

  return `${seriesLabel}: ${t('routineLedgerDocumentedDoses')} ${doseLabels}`;
}

export function formatRoutineLedgerLines(
  ledger: RoutineVaccineLedger,
  language: Language,
  t: TranslateFn
): string[] {
  return ROUTINE_ANTIGEN_SERIES_ORDER.map((series) =>
    formatRoutineLedgerSeriesLine(ledger.bySeries[series], language, t)
  );
}
