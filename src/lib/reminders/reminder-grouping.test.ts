import { describe, expect, it } from 'vitest';
import { makeRecommendation } from '@/lib/vaccine-checker/types';
import { buildReminderGroupsForItems } from '@/lib/reminders/reminder-grouping';
import { getReminderGroupId } from '@/lib/reminders/reminder-identity';

const ref = new Date(2026, 8, 19);
const childA = '2024-01-01';
const childB = '2025-06-01';

function fixed(
  id: string,
  category: 'pneumococcal' | 'rotavirus',
  dose: string,
  date: string
) {
  return makeRecommendation({
    id,
    vaccineCategory: category,
    doseLabelKey: dose,
    status: 'upcoming',
    recommendedDate: date,
    timingKind: 'FIXED_DATE',
    noteKeys: [],
  });
}

describe('buildReminderGroupsForItems', () => {
  it('14. multiple vaccines same date → one notification group', () => {
    const items = [
      fixed('pcv', 'pneumococcal', 'doseLabel_dose2', '2026-10-01'),
      fixed('rota', 'rotavirus', 'doseLabel_dose2', '2026-10-01'),
    ];
    const groups = buildReminderGroupsForItems(items, childA, ref);
    expect(groups).toHaveLength(1);
    expect(groups[0]?.items).toHaveLength(2);
    expect(groups[0]?.groupId).toBe(getReminderGroupId(childA, '2026-10-01'));
  });

  it('15. multiple vaccines different dates → separate groups', () => {
    const items = [
      fixed('pcv', 'pneumococcal', 'doseLabel_dose2', '2026-10-01'),
      fixed('rota', 'rotavirus', 'doseLabel_dose2', '2026-11-01'),
    ];
    const groups = buildReminderGroupsForItems(items, childA, ref);
    expect(groups).toHaveLength(2);
  });

  it('16. different children do not mix', () => {
    const items = [fixed('pcv', 'pneumococcal', 'doseLabel_dose2', '2026-10-01')];
    const groupA = buildReminderGroupsForItems(items, childA, ref)[0]?.groupId;
    const groupB = buildReminderGroupsForItems(items, childB, ref)[0]?.groupId;
    expect(groupA).not.toBe(groupB);
  });
});
