# Vaccine Checker — documented ambiguities (no rule changes)

Items below are **not** treated as software bugs in the regression lab unless product/clinical owners answer the question and schedules are updated in a separate change.

## 1. Age-matrix scenarios vs clinical gold standard

**Current behavior:** For ~250 healthy, routine-complete, zero–additional-history ages (6 weeks–5 years), the engine returns some combination of due / eligible / upcoming rows; tests only check **IDs, ISO dates, and internal consistency**.

**Ambiguity:** There is no single published “expected row list” for every age in the matrix.

**Question for you:** Do you want a **clinical sign-off spreadsheet** (age → expected vaccines) that we should turn into strict `includes` expectations, or keep matrix tests as **engine smoke/invariant** only?

## 2. PCV dose-state grid (1 prior Synflorix dose)

**Current behavior:** Regression expects dose 1 **not** in `dueNow` when one dose is recorded, for ages 2–24 months (even months).

**Ambiguity:** Catch-up paths at certain ages might legitimately surface review cards or different products.

**Question for you:** If manual QA finds a age where dose 1 still shows **due now** with one recorded Synflorix dose, is that **wrong UI/state** or an approved catch-up exception?

## 3. Past recommended date wording

**Current behavior:** Due-now with a past recommended date uses `resultOriginalRecommendedDate` in presentation enrichment.

**Ambiguity:** Whether every vaccine category should always expose the historical date on the card.

**Question for you:** Are there categories where showing “original recommended date” is **undesirable** for parents?

## 4. `conditionalProjectedFromDate` on conditional cards

**Current behavior:** Some conditional upcoming rows have a `recommendedDate` but leave `conditionalProjectedFromDate` unset; others (e.g. Varicella after MMR) set it.

**Ambiguity:** Whether every conditional row should always carry `conditionalProjectedFromDate` for UI/audit.

**Question for you:** Should we standardize this field on **all** conditional projections in a future presentation-only change?

---

When you answer any item, update `canonical-scenarios.ts` or this file — do not silently change `rules/*.ts` without an explicit medical approval task.
