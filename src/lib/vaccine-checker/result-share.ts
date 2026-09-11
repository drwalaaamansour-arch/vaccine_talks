import {
  formatRecommendationShareLine,
  type ShareTranslateFn,
} from '@/lib/vaccine-checker/result-share-format';
import { type ResultsSectionKind } from '@/lib/vaccine-checker/result-presentation';
import { type CheckerInput, type VaccineRecommendation } from '@/lib/vaccine-checker/types';

export const VACCINE_CHECKER_SHARE_URL = 'https://www.vaccinetalks.com/vaccine-checker';

export type ResultsShareSection = {
  titleKey: string;
  section: ResultsSectionKind;
  items: VaccineRecommendation[];
};

export type ResultsShareSnapshot = {
  language: 'en' | 'ar';
  referenceDate: Date;
  childDobFormatted: string;
  childAgeFormatted: string;
  calculationDateFormatted: string;
  sections: ResultsShareSection[];
  importantNoteKeys: string[];
  extraNotes?: string[];
};

export function buildResultsShareText(
  snapshot: ResultsShareSnapshot,
  checkerInput: CheckerInput,
  t: ShareTranslateFn
): string {
  const lines: string[] = [t('shareResultTitle'), ''];

  if (snapshot.childDobFormatted) {
    lines.push(`${t('childDOB')}: ${snapshot.childDobFormatted}`);
  }
  if (snapshot.childAgeFormatted) {
    lines.push(`${t('calculatedAge')}: ${snapshot.childAgeFormatted}`);
  }
  if (snapshot.calculationDateFormatted) {
    lines.push(`${t('calculationDateLabel')}: ${snapshot.calculationDateFormatted}`);
  }

  if (lines.length > 2) {
    lines.push('');
  }

  for (const section of snapshot.sections) {
    if (section.items.length === 0) {
      continue;
    }

    lines.push(`${t(section.titleKey)}:`);
    for (const item of section.items) {
      lines.push(
        `• ${formatRecommendationShareLine(
          item,
          section.section,
          snapshot.language,
          snapshot.referenceDate,
          checkerInput,
          t
        )}`
      );
    }
    lines.push('');
  }

  if (snapshot.extraNotes && snapshot.extraNotes.length > 0) {
    for (const note of snapshot.extraNotes) {
      lines.push(`• ${note}`);
    }
    lines.push('');
  }

  if (snapshot.importantNoteKeys.length > 0) {
    lines.push(`${t('shareResultNotesHeading')}:`);
    for (const noteKey of snapshot.importantNoteKeys) {
      const note = t(noteKey);
      if (note.length > 0) {
        lines.push(`• ${note}`);
      }
    }
    lines.push('');
  }

  lines.push('Vaccine Talks');
  lines.push(VACCINE_CHECKER_SHARE_URL);

  return lines.join('\n').trim();
}

export function shouldShowResultsActionButtons(currentStep: string): boolean {
  return currentStep === 'results';
}
