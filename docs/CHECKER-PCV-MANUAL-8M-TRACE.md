# PCV manual case trace — 8-month Synflorix (19 Sep 2026 as-of)

**Branch:** `checker-regression-lab` only · **Medical rules:** unchanged · **Regression scenario:** `manual-pcv-synflorix-8m-dose1-mar19-2026`

## Inputs (manual test)

| Field | Value |
|--------|--------|
| As-of | 19 Sep 2026 |
| DOB | 19 Jan 2026 |
| Age at as-of | 8 months |
| Vaccine | Pneumococcal |
| Product | Synflorix (PCV10) |
| Previous doses (reported) | 1 |
| Dose 1 date (entered) | 19 Mar 2026 |

**Observed UI:** one PCV dose **due now** (labelled as dose 1), **no** later PCV row (no dose 2, no booster, no conditional future dose).

---

## 1. PCV pathway / branch selected

`calculatePcv()` reads **`doseDates` only** (`const doses = history?.doseDates ?? []`). It does **not** hydrate `doses` from `numberOfDoses` or `firstDoseDate`.

When the engine sees **`numberOfDoses: 1` and `doseDates: []`** (the state that reproduces the manual result):

1. Product is Synflorix → not Vaxneuvance branch.
2. **`firstDoseDate` is null inside `doses`**, so `ageAtStartMonths` falls back to **age at as-of** → **8 months** (not ~2 months from Mar 19).
3. Because `8 >= 7` and child `< 24` months → **`started7To11Months(ctx, 'synflorix', doses)`** with **`doses.length === 0`**.

If **`doseDates: [2026-03-19]`** were present (wizard `recordToHistory` normally builds this from the entered date):

1. `ageAtStartMonths` ≈ **2** (dose given at ~2 months).
2. Branch → **`standardPrimaryPlusBooster(ctx, 'synflorix', doses, 3)`** (infant 3 primary + 12–15 month booster schedule).
3. With one recorded date → **`pcv-dose2`**, status **due-now** (recommended 19 May 2026, before as-of).

The manual UI outcome matches the **empty-`doseDates`** path, not the **date-populated** path.

---

## 2. What the engine thinks the required schedule is

### Empty `doseDates` (matches manual output)

- **Catch-up schedule for age 7–11 months with no doses in the array:** treat as **not started** in that branch → **dose 1 due now** (`started7To11Months`, first block).
- Implicit series in that branch when doses *are* present: **2 doses + booster after 12 months** — but with `doses.length === 0` none of that applies.

### With `doseDates: [2026-03-19]` (entered date reaches the rule)

- **Infant Synflorix:** **3 primary doses** (2 months apart) + **booster** in the **11–15 month** window from DOB (`standardPrimaryPlusBooster`, `primaryCount = 3`).
- After one primary: next step is **dose 2** only; booster appears only after **3** primaries are in `doseDates`.

---

## 3. Why it emits one dose due now

In **`started7To11Months`**, when **`doses.length === 0`**:

```322:332:src/lib/vaccine-checker/rules/pcv.ts
  if (doses.length === 0) {
    return [
      makeRecommendation({
        id: 'pcv-dose1-due',
        vaccineCategory: 'pneumococcal',
        product,
        doseLabelKey: 'doseLabel_dose1',
        status: 'due-now',
        noteKeys: [],
      }),
    ];
  }
```

`numberOfDoses: 1` on the history record is **not** consulted here. The branch behaves as if **zero doses** were documented in the date array.

Routing landed in this branch because **`ageAtStartMonths`** used **today (8 months)** when **`doses[0]`** was missing:

```542:567:src/lib/vaccine-checker/rules/pcv.ts
  const firstDoseDate = doses[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? ageAtDate(ctx.dob, firstDoseDate).years * 12 + ageAtDate(ctx.dob, firstDoseDate).months
    : ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  // ...
  if (ageAtStartMonths >= 7) {
    return started7To11Months(ctx, product, doses);
  }
```

---

## 4. Why no later / booster dose is shown

1. **Only one recommendation per call** in this situation: the `doses.length === 0` arm returns a **single** due-now row (dose 1). No dose 2 or booster is appended.
2. **Conditional 7–11 month booster** (`appendPcvSevenToElevenBoosterConditional` in `conditional-upcoming.ts`) runs only for **zero-history catch-up** (`isPcvSevenToElevenMonthZeroHistoryCatchUp`), which requires **`numberOfDoses === 0` and empty `doseDates`**. Here **`numberOfDoses === 1`**, so `hasPcvDoseHistory()` is true → **conditional booster is suppressed**.
3. Even in **`started7To11Months` with `doses.length === 1`**, the next row would be **dose 2**, not a far-future booster — but that arm is never reached while the engine treats **`doses` as empty**.

---

## 5. Classification (software vs intended rule)

| Hypothesis | Verdict |
|------------|---------|
| Explicitly intended clinical outcome for “1 dose at 2 months, check at 8 months” | **No** — with dates in `doseDates`, code intentionally returns **dose 2 due now**. |
| Missing result row (booster/dose 2 forgotten in rule) | **Not** for the mis-routed path — the 7–11 “empty doses” arm is **designed** to return only dose 1; the issue is **wrong branch + empty dose array**. |
| Age-transition branch | **Yes, contributed:** missing first dose in `doseDates` makes **`ageAtStartMonths` use as-of age (8m)** → **7–11 month starter** instead of **infant 3+booster**. |
| Software / state issue | **Yes:** scheduling keys off **`doseDates.length`**, while the wizard can report **`numberOfDoses ≥ 1`**. **`priorDoseCount`** is computed in `calculatePcv` but only used for the **>5 years** shortcut, not for Synflorix infant logic. |

**Not changing medical rules in this task** — documented only.

---

## 6. Exact relevant code (entry + branch)

**Entry and routing:**

```515:570:src/lib/vaccine-checker/rules/pcv.ts
export function calculatePcv(ctx: RuleContext): VaccineRecommendation[] {
  const history = ctx.getHistory('pneumococcal');
  const product = history?.product;
  const doses = history?.doseDates ?? [];
  const priorDoseCount = Math.max(doses.length, history?.numberOfDoses ?? 0);
  // ... priorDoseCount only used for >5y path ...
  const firstDoseDate = doses[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? ageAtDate(ctx.dob, firstDoseDate).years * 12 + ageAtDate(ctx.dob, firstDoseDate).months
    : ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  // ...
  if (ageAtStartMonths >= 7) {
    return started7To11Months(ctx, product, doses);
  }
  return standardPrimaryPlusBooster(ctx, product, doses, 3);
}
```

**7–11 month branch (empty vs one dose):** see §3 and `started7To11Months` in `pcv.ts` lines 319–364.

**Conditional booster guard (why no future row when count ≥ 1):**

```19:26:src/lib/vaccine-checker/pcv-zero-history-schedules.ts
export function isPcvSevenToElevenMonthZeroHistoryCatchUp(ctx: RuleContext): boolean {
  if (hasPcvDoseHistory(ctx)) {
    return false;
  }
  const ageMonths = zeroHistoryAgeMonthsAtReference(ctx);
  return ageMonths >= 7 && ageMonths <= 11;
}
```

(`hasPcvDoseHistory` is true when `numberOfDoses > 0` **or** `doseDates.length > 0`.)

---

## 7. Plain-language summary

You told the checker the child is **8 months old**, had **one Synflorix shot on 19 March 2026**, and asked what is due **today (19 September 2026)**.

What you saw — **“first pneumococcal dose due now”** and **nothing else** — is what the program does when it **ignores the March date for scheduling** and only sees **“one dose claimed” without dates in the list the PCV rule uses**. It then treats the child like an **8-month-old who has not started the 7–11 month catch-up schedule**, so it asks for **dose 1 again** and stops there. It also **does not** show the extra “if you get dose 1 today, here is a future booster” hint, because that hint is only for children with **zero** recorded doses.

If the **March date** is wired into that list (as the wizard adapter normally does when you complete the date step), the **same rule code** switches to the **baby schedule** started at 2 months and correctly says **dose 2 is due now**, still with **no booster yet** (booster comes after the third primary dose).

---

## Regression lab

- Scenario ID: **`manual-pcv-synflorix-8m-dose1-mar19-2026`**
- Encodes **`doseDates: []`** with **`numberOfDoses: 1`** to lock the **observed** engine output pending clinical/software review.
- Re-run: `npm run test:checker-regression`
