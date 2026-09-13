import {
  isAfter,
  isBefore,
  isOnOrAfter,
  startOfDay,
} from '@/lib/vaccine-checker/date-utils';
import {
  iso,
  makeRecommendation,
  type RecommendationStatus,
  type TimingKind,
  type VaccineRecommendation,
} from '@/lib/vaccine-checker/types';

export type { TimingKind };

export type TimingDisplayLine = {
  key: string;
  params: Record<string, string>;
};

function isBoosterLabel(doseLabelKey: string): boolean {
  return doseLabelKey === 'doseLabel_booster';
}

export function inferTimingKind(item: VaccineRecommendation): TimingKind {
  if (item.timingKind) {
    return item.timingKind;
  }

  if (item.windowStart && item.windowEnd) {
    return 'RECOMMENDED_WINDOW';
  }

  if (
    item.vaccineCategory === 'rotavirus' &&
    item.earliestDate &&
    item.latestDate &&
    item.doseLabelKey === 'doseLabel_dose1' &&
    (item.status === 'not-yet-eligible' || item.status === 'eligible-now')
  ) {
    return 'AGE_LIMIT_RANGE';
  }

  if (item.status === 'age-limit-passed' && item.latestDate) {
    return 'AGE_LIMIT_RANGE';
  }

  if (item.minimumValidDate) {
    return 'MINIMUM_START_ONLY';
  }

  if (
    item.status === 'due-now' &&
    !item.recommendedDate &&
    !item.conditionalNextDose &&
    item.doseLabelKey !== 'doseLabel_seriesComplete' &&
    (item.doseLabelKey === 'doseLabel_dose1' ||
      item.doseLabelKey === 'doseLabel_singleDose' ||
      item.doseLabelKey === 'doseLabel_completionDose')
  ) {
    return 'MINIMUM_START_ONLY';
  }

  return 'FIXED_DATE';
}

export function resolveWindowStatus(today: Date, windowStart: Date, windowEnd: Date): RecommendationStatus {
  const day = startOfDay(today);
  const start = startOfDay(windowStart);
  const end = startOfDay(windowEnd);

  if (isBefore(day, start)) {
    return 'upcoming';
  }

  return 'due-now';
}

export function isPastPreferredWindow(today: Date, windowEnd: Date): boolean {
  return isAfter(startOfDay(today), startOfDay(windowEnd));
}

export function withRecommendedWindow(
  partial: Omit<VaccineRecommendation, 'urgency' | 'status'> & { urgency?: number },
  windowStart: Date,
  windowEnd: Date,
  today: Date
): VaccineRecommendation {
  const status = resolveWindowStatus(today, windowStart, windowEnd);

  return makeRecommendation({
    ...partial,
    status,
    timingKind: 'RECOMMENDED_WINDOW',
    windowStart: iso(windowStart),
    windowEnd: iso(windowEnd),
    recommendedDate: undefined,
    latestDate: undefined,
    pastPreferredWindow: isPastPreferredWindow(today, windowEnd),
  });
}

export function withMinimumStartOnly(
  partial: Omit<VaccineRecommendation, 'urgency' | 'status'> & { urgency?: number },
  minimumStart: Date,
  today: Date
): VaccineRecommendation {
  const status = isOnOrAfter(today, minimumStart) ? 'due-now' : 'upcoming';

  return makeRecommendation({
    ...partial,
    status,
    timingKind: 'MINIMUM_START_ONLY',
    minimumValidDate: iso(minimumStart),
    recommendedDate: undefined,
  });
}

export function withAgeLimitRange(
  partial: Omit<VaccineRecommendation, 'urgency'> & { urgency?: number },
  earliest: Date,
  latest: Date
): VaccineRecommendation {
  return makeRecommendation({
    ...partial,
    timingKind: 'AGE_LIMIT_RANGE',
    earliestDate: iso(earliest),
    latestDate: iso(latest),
  });
}

export function getEffectiveSortDate(item: VaccineRecommendation): string {
  return (
    item.windowStart ??
    item.minimumValidDate ??
    item.recommendedDate ??
    item.earliestDate ??
    ''
  );
}

export function normalizeRecommendationTiming(
  item: VaccineRecommendation,
  referenceDate: Date
): VaccineRecommendation {
  const today = startOfDay(referenceDate);
  let normalized = { ...item };

  if (
    !normalized.windowStart &&
    !normalized.windowEnd &&
    normalized.recommendedDate &&
    normalized.latestDate &&
    isBoosterLabel(normalized.doseLabelKey)
  ) {
    normalized = {
      ...normalized,
      windowStart: normalized.recommendedDate,
      windowEnd: normalized.latestDate,
      recommendedDate: undefined,
      latestDate: undefined,
      timingKind: 'RECOMMENDED_WINDOW',
      pastPreferredWindow: isPastPreferredWindow(
        today,
        new Date(normalized.windowEnd + 'T00:00:00')
      ),
    };
  }

  const kind = inferTimingKind(normalized);

  if (kind === 'RECOMMENDED_WINDOW' && normalized.windowStart && normalized.windowEnd) {
    const start = new Date(normalized.windowStart + 'T00:00:00');
    const end = new Date(normalized.windowEnd + 'T00:00:00');
    normalized = {
      ...normalized,
      timingKind: 'RECOMMENDED_WINDOW',
      status: resolveWindowStatus(today, start, end),
      pastPreferredWindow: isPastPreferredWindow(today, end),
    };
  }

  if (kind === 'MINIMUM_START_ONLY' && normalized.minimumValidDate) {
    const minimum = new Date(normalized.minimumValidDate + 'T00:00:00');
    if (normalized.status === 'upcoming' || normalized.status === 'due-now') {
      normalized = {
        ...normalized,
        timingKind: 'MINIMUM_START_ONLY',
        status: isOnOrAfter(today, minimum) ? 'due-now' : 'upcoming',
      };
    }
  }

  if (!normalized.timingKind) {
    normalized.timingKind = kind;
  }

  return normalized;
}

export function getTimingDisplayLines(
  item: VaccineRecommendation,
  referenceDate: Date
): TimingDisplayLine[] {
  const normalized = normalizeRecommendationTiming(item, referenceDate);
  const kind = inferTimingKind(normalized);
  const booster = isBoosterLabel(normalized.doseLabelKey);
  const lines: TimingDisplayLine[] = [];

  if (normalized.conditionalNextDose) {
    return lines;
  }

  switch (kind) {
    case 'RECOMMENDED_WINDOW': {
      if (!normalized.windowStart || !normalized.windowEnd) {
        break;
      }
      const key = normalized.pastPreferredWindow
        ? booster
          ? 'resultPastPreferredBoosterWindow'
          : 'resultPastPreferredWindow'
        : booster
          ? 'resultPreferredBoosterWindow'
          : 'resultPreferredWindow';
      lines.push({
        key,
        params: {
          startDate: normalized.windowStart,
          endDate: normalized.windowEnd,
        },
      });
      break;
    }
    case 'MINIMUM_START_ONLY': {
      const start = normalized.minimumValidDate;
      if (!start) {
        break;
      }
      lines.push({
        key: booster ? 'resultMinimumStartBooster' : 'resultMinimumStart',
        params: { startDate: start },
      });
      break;
    }
    case 'AGE_LIMIT_RANGE': {
      if (normalized.earliestDate && normalized.latestDate) {
        lines.push({
          key: 'resultAgeLimitRange',
          params: {
            earliestDate: normalized.earliestDate,
            latestDate: normalized.latestDate,
          },
        });
      } else if (normalized.latestDate && normalized.status === 'age-limit-passed') {
        lines.push({
          key: 'resultLatestAllowedDate',
          params: { latestDate: normalized.latestDate },
        });
      }
      break;
    }
    case 'FIXED_DATE':
    default: {
      if (!normalized.recommendedDate) {
        if (
          normalized.status === 'due-now' &&
          normalized.doseLabelKey !== 'doseLabel_dose1' &&
          normalized.doseLabelKey !== 'doseLabel_singleDose' &&
          normalized.doseLabelKey !== 'doseLabel_completionDose'
        ) {
          lines.push({
            key: 'resultDoseDueNow',
            params: { doseLabelKey: normalized.doseLabelKey },
          });
        }
        break;
      }

      const isRoutineMmrDose2 =
        normalized.vaccineCategory === 'routine' &&
        normalized.routineVaccineKey === 'mmrDose2';

      if (
        !normalized.conditionalNextDose &&
        normalized.doseLabelKey !== 'doseLabel_dose1' &&
        normalized.doseLabelKey !== 'doseLabel_completionDose' &&
        !isRoutineMmrDose2
      ) {
        lines.push({
          key: 'resultScheduledDoseDate',
          params: {
            date: normalized.recommendedDate,
            doseLabelKey: normalized.doseLabelKey,
          },
        });
        break;
      }

      const overdue =
        normalized.status === 'due-now' &&
        isBefore(new Date(normalized.recommendedDate + 'T00:00:00'), startOfDay(referenceDate));
      lines.push({
        key: overdue ? 'resultOriginalRecommendedDate' : 'resultRecommendedDate',
        params: { date: normalized.recommendedDate },
      });
      if (normalized.minimumValidDate && normalized.minimumValidDate !== normalized.recommendedDate) {
        lines.push({
          key: 'resultMinimumValidDate',
          params: { minimumValidDate: normalized.minimumValidDate },
        });
      }
      break;
    }
  }

  return lines;
}
