import { type VaccineRecommendation } from '@/lib/vaccine-checker/types';

export const IMPORTANT_ONLY_NOTE_KEYS = new Set([
  'note_rotavirusFinalDoseLimit',
  'note_varicellaMmrInterval',
  'note_varicellaMmrSameDay',
]);

const VACCINE_SPECIFIC_REVIEW_REASON_KEYS = new Set([
  'reason_rotavirusProductUnknown',
  'reason_pcvProductUnknown',
  'reason_menacwyProductUnknown',
  'reason_varicellaProductUnknown',
  'reason_varicellaMmrDateNeeded',
  'reason_hpvProductUnknown',
  'reason_bcgTuberculinRequired',
]);

export const EQUIVALENT_NOTE_KEY_GROUPS: readonly (readonly string[])[] = [
  ['note_varicellaMmrScheduling', 'note_varicellaMmrSameDay', 'note_varicellaMmrInterval'],
];

export function expandEquivalentNoteKeys(keys: Iterable<string>): Set<string> {
  const expanded = new Set(keys);

  for (const group of EQUIVALENT_NOTE_KEY_GROUPS) {
    if (group.some((key) => expanded.has(key))) {
      for (const key of group) {
        expanded.add(key);
      }
    }
  }

  return expanded;
}

export function getCardNoteKeys(noteKeys: string[]): string[] {
  return noteKeys.filter(
    (key) => !IMPORTANT_ONLY_NOTE_KEYS.has(key) && key !== 'note_conditionalNextDose'
  );
}

export function collectImportantNotes(recommendations: VaccineRecommendation[]): string[] {
  const notes = new Set<string>();

  for (const item of recommendations) {
    for (const note of item.noteKeys) {
      if (IMPORTANT_ONLY_NOTE_KEYS.has(note)) {
        notes.add(note);
      }
    }
  }

  const hasActiveRotavirus = recommendations.some(
    (item) =>
      item.vaccineCategory === 'rotavirus' &&
      ['due-now', 'eligible-now', 'upcoming'].includes(item.status)
  );
  if (hasActiveRotavirus) {
    notes.add('note_rotavirusFinalDoseLimit');
  }

  const needsReviewItems = recommendations.filter((item) => item.status === 'needs-review');
  const onlyVaccineSpecificReview =
    needsReviewItems.length > 0 &&
    needsReviewItems.every(
      (item) => item.reasonKey && VACCINE_SPECIFIC_REVIEW_REASON_KEYS.has(item.reasonKey)
    );

  if (needsReviewItems.length > 0 && !onlyVaccineSpecificReview) {
    notes.add('note_clinicianReviewRecommended');
  }

  return Array.from(notes);
}
