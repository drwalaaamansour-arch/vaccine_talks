# Phase 1B — Vaccine reminder implementation note

## Results UI inspection (pre-implementation)

| Area | Location | Behavior |
|------|----------|----------|
| Results layout | `src/components/wizard/ResultsStep.tsx` | Buckets: due now, eligible, upcoming, completed, age limit, needs review |
| Card component | `RecommendationCard` in same file | Category (`getRecommendationCategoryLabel`), product (`BrandName`), dose label, status, timing lines |
| Exact date display | `getResultsCardTimingLines` → `formatTimingDisplayLine` | Hidden when `conditionalNextDose`; uses translation keys with ISO dates |
| Conditional doses | `item.conditionalNextDose` | Extra paragraph via `formatConditionalNextDoseNote` / `getConditionalNextDoseTranslationKey` |
| Overdue | `isOverdueRecommendedDate` in `result-presentation.ts` | Compares `recommendedDate` to reference date |
| Calendar (footer) | `ResultsCalendarActions` + `calendarEventsFromRecommendations` | Footer-level; only items with strict `recommendedDate` ISO |
| Medical engine | `calculateVaccineRecommendations` | **Not modified in Phase 1B** |

## Phase 1B additions

| Module | Role |
|--------|------|
| `src/lib/reminders/reminder-eligibility.ts` | Single source for reminder eligibility (read-only Checker fields) |
| `src/lib/reminders/reminder-identity.ts` | Child scope + stable group/member keys |
| `src/lib/reminders/reminder-grouping.ts` | Same child + same display date → one notification |
| `src/lib/reminders/reminder-labels.ts` | Minimal notification title/body copy |
| `src/lib/reminders/reminder-storage.ts` | Device-local Preferences metadata (no DOB, no full history) |
| `src/lib/reminders/local-notifications-reminder-service.ts` | Capacitor permission + schedule/cancel/reschedule |
| `src/components/wizard/RecommendationReminderActions.tsx` | Per-card Set / Cancel / Change UI |

## Overdue notification behavior (documented)

If `recommendedDate` is before the calculation reference date, the Checker still shows the recommendation as overdue (unchanged). When the user taps **Set Reminder** for an overdue item:

- The app **does not** schedule a notification in the past.
- It schedules a **single** local notification at **09:00 on the day after the reference date** (local timezone).
- A bilingual note explains that the original due date was overdue and the reminder was set for the next safe day.

Medical `recommendedDate` on the card is never modified.

## Permission

Requested only when the user taps **Set Reminder** (never on load / Results open).

## Grouping

`childScopeId` = ISO date of child DOB from `CheckerInput` (extensible; one child per wizard session today). All eligible recommendations sharing the same `recommendedDate` and `childScopeId` share one OS notification and one stable numeric notification id.
