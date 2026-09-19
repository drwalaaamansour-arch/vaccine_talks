# PCV wizard state audit — `numberOfDoses` vs `doseDates`

**Branch:** `checker-regression-lab` · **Medical scheduling rules:** not changed in this investigation · **Fixes:** not implemented (report only).

## Problem statement

The PCV engine routes on **`history.doseDates`**, while the wizard also stores **`numberOfDoses`**. When **`numberOfDoses ≥ 1`** and **`doseDates.length === 0`**, `calculatePcv()` can behave as if **no doses were recorded** (e.g. dose 1 due again). This document traces **where that state comes from** and whether a **real user** can reach it.

Automated coverage: `src/lib/vaccine-checker/pcv-dose-date-state-flow.test.ts`.

---

## 1. Where PCV wizard state is written

| Field | Written by | Notes |
|--------|------------|--------|
| **`product`** | `ProductSelectionStep` → `normalizeProductId` on record | Not cleared when dose count changes |
| **`numberOfDoses`** | `DoseCountStep` (`patchAdditionalVaccineAtIndex`) | `-1` = unspecified sentinel (`UNSPECIFIED_DOSE_COUNT`) |
| **`numberOfDoses` (teen default)** | `applyPreviouslyReceivedYesDefaults` in `wizard-history.ts` | Healthy **>5y**: selecting PCV in list sets **`numberOfDoses: 1`** without dates |
| **`numberOfDoses: 0`** | `buildZeroDoseAdditionalRecord` | Eligible PCV **not** selected in additional-vaccines list |
| **`doseDates` / `dose1Date`…** | `LastDoseDateStep` → `applyDoseDatesToRecord` | Required for infant/child paths via `hasAllRequiredDoseDates` |
| **Previous vaccination “yes/no”** | `AdditionalVaccinesStep` | **No** clears `additionalVaccines: []` |
| **Full reset** | `WizardShell.restart`, **DOB change** (`applyDobStepSubmission` + `emptyAgeDependentWizardFields`) | Clears additional history |

**Engine mapping:** `wizardStateToCheckerInput` → `recordToHistory` → `getAllDoseDatesFromRecord` (loops `1..numberOfDoses`, resolves each slot via `dose1Date`… / `lastDoseDate` fallback).

Relevant files:

- `src/components/wizard/DoseCountStep.tsx`
- `src/components/wizard/LastDoseDateStep.tsx`
- `src/components/wizard/ProductSelectionStep.tsx`
- `src/components/wizard/AdditionalVaccinesStep.tsx`
- `src/components/wizard/ReviewStep.tsx`
- `src/lib/vaccine-checker/wizard-history.ts`
- `src/lib/vaccine-checker/dose-date-storage.ts`
- `src/lib/vaccine-checker/input-adapter.ts` (`isVaccineRecordComplete`, `recordToHistory`)

---

## 2. Flow scenarios tested

| Scenario | Infant Synflorix (<5y) | Result |
|----------|------------------------|--------|
| **Normal forward** (dose count → product → dates → review) | Count ≥1 **requires** all dose dates | **Cannot** reach review with `doseDates.length === 0` |
| **Wizard Back** (`getPreviousWizardStep` + `goToStep`) | State preserved; no automatic clear of dates/count | Does not alone create empty dates if dates were saved |
| **Browser Back** | Same as in-app back (React state) | Same |
| **Yes → No → Yes** | **No** wipes `additionalVaccines` | Fresh records; not count-without-dates unless new path creates it |
| **Change dose count** | Patch **does not clear** date fields | See **§4** (lastDoseDate fallback) |
| **Change PCV product** | Product patch only | Dates remain on record |
| **Change DOB** | New DOB → **clears** all additional history | Prevents stale cross-age state |
| **Edit from Review** | `goToStep('dob')` | **Same DOB** + downstream data → **`currentStep: 'review'`** without re-validating PCV completeness (**§5**) |
| **Restart Checker** | `INITIAL_STATE` | Clean |
| **Partial date entry** | Continue disabled until valid (`LastDoseDateStep` `isValid`) | Cannot commit partial dates |
| **Teen >5y “complete without details”** | `pcvTeenHistoryCompleteWithoutDetails` | **Valid:** count **1**, dates **0** (**classification B**) |
| **Regression / audit inputs** | Direct `CheckerInput` / `history({ count, doseDates: [] })` | **Synthetic** (**classification A**) |

---

## 3. Classifications

| Class | Meaning | PCV example |
|-------|---------|-------------|
| **A** | Synthetic / engine-only / regression | `scripts/pcv-synflorix-audit.ts` variant **`count-without-dates`**; scenario `manual-pcv-synflorix-8m-dose1-mar19-2026` |
| **B** | Valid intentional | Healthy **>5 years**: `numberOfDoses: 1`, no dates, series marked complete for wizard |
| **C** | UI-flow bug | Raise dose count: **`lastDoseDate` reused as dose N** → wizard “complete” with **duplicate dates**, not empty (see tests) |
| **D** | Stale-state / shortcut | **`applyDobStepSubmission`** (same DOB) → **review** while infant PCV still incomplete; **Results** does not re-check completeness |
| **E** | Data-model inconsistency | Engine uses **`doseDates.length`**; wizard persists **`numberOfDoses`** separately — no single source of truth at engine boundary |

---

## 4. Why the 765 audit rows are not normal website flows

`scripts/pcv-synflorix-audit.ts` deliberately constructs:

```typescript
{ label: 'count-without-dates', dates: [], count: numberOfDoses }
```

for every age step and dose count **1–3**, then calls **`calculateVaccineRecommendations` directly** — **not** `wizardStateToCheckerInput`.

Findings from that scan (documented in `CHECKER-PCV-SYNFLORIX-REVIEW.md`):

- **All 765** dose-1-due/eligible hits used **`count-without-dates`**.
- Variants with **matching dose dates** did **not** produce dose-1-due in the scan.

So the audit measures **engine sensitivity** to inconsistent **CheckerInput**, not proven user journeys.

---

## 5. Can a real user create `numberOfDoses ≥ 1` and `doseDates.length === 0`?

### Infant / child (<5y) with Synflorix or other dated PCV path

**Normal forward UI:** **No.**  
`isVaccineRecordComplete` requires `hasAllRequiredDoseDates` when `numberOfDoses > 0` (and teen skip does not apply). Forward navigation to **review** goes through `getNextStepAfterAdditionalVaccineHistory`, which only finishes when every record is complete.

**Abnormal but possible in the app:**

1. **Classification D:** User reaches **review** via **Edit DOB** without changing DOB (`applyDobStepSubmission` → `currentStep: 'review'`) while PCV is **incomplete** (e.g. chose dose count, never finished dates). **Review** hides incomplete PCV (`isVaccineRecordCompleteForState` filter), but **`ResultsStep`** still maps **all** `additionalVaccines` → engine can see **count ≥ 1, dates []** if they press **Next** to results.

2. **Classification B (not infant):** User **>5y** — selecting PCV can yield **1 dose, no dates** by design; engine treats series complete — **not** the infant “dose 1 due again” bug.

### Related real bug (not empty dates)

**Classification C:** User increases **numberOfDoses** without entering a new date. `getDoseDateFromRecord` fills the **last dose** from **`lastDoseDate`**, so the wizard may mark the record **complete** with **two identical dates**. Engine then sees **`doseDates.length === 2`**, not zero — different failure mode (wrong interval / wrong branch), but still user-reachable.

---

## 6. Recommended smallest safe fixes (not implemented)

Do **not** switch the engine to trust **`numberOfDoses`** alone for intervals.

| Priority | Issue | Smallest safe direction |
|----------|--------|-------------------------|
| 1 | **Results without complete PCV** | Before `wizardStateToCheckerInput` on results (or on Review **Next**), **block** or **redirect** to `lastDoseDate` if any selected PCV has `numberOfDoses > 0` and `!hasAllRequiredDoseDates` (except **B** teen skip). |
| 2 | **Same-DOB edit → review** | When jumping to review, **re-run** `getNextStepAfterAdditionalVaccineHistory` instead of forcing `review` if any additional record is incomplete. |
| 3 | **Dose count change** | On `DoseCountStep`, when count **changes**, **clear** dose date fields / `lastDoseDate` beyond new count (or always clear and force date step). |
| 4 | **lastDoseDate fallback** | For PCV, **do not** map `lastDoseDate` to dose *N* when *N > 1* unless that field was explicitly entered for dose N (HPV already special-cased). |
| 5 | **Engine guard (presentation)** | If inconsistent state reaches engine, **needs-review** row (“dates required to calculate schedule”) rather than silently treating as zero doses — **software only**, no rule change. |

**Safest UX pattern for missing required dates:** **Cannot proceed to results** until dates satisfied **or** user enters **0** prior doses; message: **“Date required to calculate the remaining PCV schedule.”**

---

## 7. Regression tests added (investigation)

`pcv-dose-date-state-flow.test.ts` documents:

- Forward flow blocked without dates (infant)
- Teen **B** path: count 1, dates 0, complete
- Injected incomplete state reaches engine (**E**)
- Same-DOB shortcut to review with incomplete PCV (**D**)
- Dose-count raise + **lastDoseDate** duplicate (**C**)

No fix commits in this task.

---

## Plain-language summary

**Can a real user create the bad state (dose count says ≥1 but the engine gets no dates)?**

- **For a baby/child under five on Synflorix with the normal screens:** **Not through the intended forward path.** The wizard asks for dates and won’t mark PCV finished until they’re filled in.
- **Possible exceptions:** (1) **Older children (>5)** where the app **deliberately** allows “had one PCV” **without dates** — that’s **by design**, not the infant bug. (2) A **shortcut bug**: edit date of birth **without changing it** can jump to **review**, and **results** may run the calculator even if PCV dates were never completed — **review doesn’t show** incomplete PCV, but the engine might still see dose count only. (3) **Regression tests and the 765-row audit** **manually** pass “dose count but no dates” into the engine — that’s **not** proof users do that in production.

**Why 765 audit cases?**  
The audit script **intentionally** fed the engine **“1–3 doses claimed, zero dates”** at hundreds of ages to see when scheduling goes wrong. Every hit was that **synthetic** variant, not a recorded user session.

**Is there a real bug to fix?**  
**Yes, on the software side:** (1) **results should not run** on incomplete infant PCV history; (2) **raising dose count** can **copy the last date** onto the next dose and look “complete” when it shouldn’t; (3) the engine **ignores dose count** when dates are missing, which is unsafe if inconsistent state ever slips through. Fixes should **require dates or block progress**, not **pretend count alone is enough** for scheduling.

---

**Stop point:** investigation and documentation complete — **no fix implemented** per instruction.
