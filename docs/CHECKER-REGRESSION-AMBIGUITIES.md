# Vaccine Checker — documented ambiguities (no rule changes)

Items below are **not** treated as software bugs in the regression lab unless product/clinical owners answer the question and schedules are updated in a separate change.

## 1. Age-matrix scenarios vs clinical gold standard

**Decision (owner):** Keep age-matrix **invariant-only**. Do not invent strict clinical expected outcomes per age until an explicitly approved gold-standard matrix exists.

## 2. PCV / Synflorix dose 1 with recorded history

**Decision (owner):** Do **not** classify “dose 1 due/eligible with recorded count” as a bug yet. See **`docs/CHECKER-PCV-SYNFLORIX-REVIEW.md`** for exhaustive engine output when `numberOfDoses ≥ 1` but dates are missing or routing uses `doseDates.length` only.

## 3. Past recommended date wording

**Current behavior:** Due-now with a past recommended date uses `resultOriginalRecommendedDate` in presentation enrichment.

**Ambiguity:** Whether every vaccine category should always expose the historical date on the card.

**Question for you:** Are there categories where showing “original recommended date” is **undesirable** for parents?

## 4. `conditionalProjectedFromDate` on conditional cards

**Decision (owner):** Require the field **only** when a real projected date comes from **known user-entered or planned** data (e.g. future Varicella dose 1 after MMR). Do **not** require it for “if given today at as-of” projections. See **`docs/CHECKER-CONDITIONAL-DATE-REVIEW.md`**.

---

When you answer any item, update `canonical-scenarios.ts` or this file — do not silently change `rules/*.ts` without an explicit medical approval task.
