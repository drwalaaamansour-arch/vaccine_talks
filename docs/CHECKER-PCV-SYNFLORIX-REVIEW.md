# PCV / Synflorix (PCV10) — review notes

**Branch:** `checker-regression-lab` · **Medical rules:** unchanged in this document.

---

## Manual case (full dates) — 8 months, dose 2 due, no future PCV row

**Regression scenario:** `manual-pcv-synflorix-8m-dose2-due-20260919`

### Inputs (reproduced in UI)

| Field | Value |
|--------|--------|
| As-of | 19 Sep 2026 |
| DOB | 19 Jan 2026 |
| Age at as-of | 8 months 0 days |
| Product | Synflorix (PCV10) |
| Previous doses | 1 |
| Dose 1 date | 19 Mar 2026 |
| Review screen | Synflorix, 1 dose, date 19 Mar 2026 ✓ |
| Result screen | Synflorix, **dose 2 due now**, **no** dose 3 / booster / conditional future PCV |

Related **empty-`doseDates`** behaviour (dose 1 due instead): scenario `manual-pcv-synflorix-8m-dose1-mar19-2026`, [`CHECKER-PCV-MANUAL-8M-TRACE.md`](./CHECKER-PCV-MANUAL-8M-TRACE.md).

---

### 1. PCV schedule branch selected

`calculatePcv()` reads `doses = history.doseDates` → `[2026-03-19]`.

| Step | Value |
|------|--------|
| Product | `synflorix` → not Vaxneuvance |
| `ageAtStartMonths` | From **first dose date** → **2 months** (not 8 months) |
| `ageAtStartMonths >= 24` or age ≥ 2y at as-of | No |
| `ageAtStartMonths >= 12` | No |
| `ageAtStartMonths >= 7` | No |
| **Selected path** | **`standardPrimaryPlusBooster(ctx, 'synflorix', doses, primaryCount = 3)`** |

This is the **infant Synflorix / Prevenar-style** path: **3 primary doses** + **booster** in the 11–15 month window from DOB — not the separate **7–11 month catch-up** branch (`started7To11Months`), which only applies when the **first dose in `doseDates`** was given at age **7–11 months**.

---

### 2. Total doses the engine expects on this path

On **`standardPrimaryPlusBooster`** with **`primaryCount = 3`**:

- **3 primary doses** (interval: 2 calendar months after the previous primary date, or after DOB+2m for dose 1).
- **1 booster** after primaries are complete (`doses.length >= 3`), timed with **`withRecommendedWindow`** between **DOB+11m** and **DOB+15m** (preferred window).

So the **full series model** is **3 + 1 booster (4 injections)** for this branch.  
At **one recorded primary**, the engine is only **one step** into that series.

---

### 3. Why dose 2 is due now

Inside **`standardPrimaryPlusBooster`** with **`doses.length === 1`**:

- `nextDose = 2`
- `recommended = addMonths(doses[0], 2)` → **19 May 2026**
- `status = isOnOrAfter(today, recommended) ? 'due-now' : 'upcoming'`
- As-of **19 Sep 2026** ≥ **19 May 2026** → **`due-now`**
- Emits single row: **`id: pcv-dose2`**, **`doseLabel_dose2`**, product **synflorix**

Presentation layer: for overdue due-now rows, **`enrichRecommendationsForPresentation`** may **clear `recommendedDate`** on the card (so the UI shows “due now” without displaying **19 May 2026**). The rule still computed that date before enrichment.

---

### 4. Why no later dose or booster is generated

1. **Primary series not complete:** Booster is returned only when **`doses.length >= primaryCount` (3)** and not beyond — see booster block at lines 165–192 in `pcv.ts`. With **one** primary recorded, the function returns **only the next primary** (dose 2), not dose 3 or booster.
2. **No multi-row schedule preview:** This function **always returns a one-element array** for the “next primary” case (lines 208–219). It does **not** emit upcoming dose 3 or booster rows while the child is still on primaries.
3. **Conditional PCV rows disabled here:** `appendPcvSevenToElevenBoosterConditional` runs only when **`isPcvSevenToElevenMonthZeroHistoryCatchUp`** is true (**zero** dose history at 7–11 months). This child has **documented dose history**, so **no** conditional booster row is added in `conditional-upcoming.ts`.
4. **Not the 7–11 “2+booster” path:** That shorter schedule lives in **`started7To11Months`** and is **not** selected because the **first dose was at 2 months**, not 7–11 months.

---

### 5. Classification: absence of later doses

| Hypothesis | Verdict |
|------------|---------|
| **Explicitly intended by current code** | **Yes.** Next-step-only output for incomplete primaries + booster only after 3 primaries is **by design** in `standardPrimaryPlusBooster`. |
| **Missing result row (bug)** | **Only if** product/clinical spec requires **showing** dose 3 and/or booster as **upcoming/conditional** on the results screen while still on dose 2. The engine **does not** implement a full visible timeline for Synflorix primaries today. |
| **Age-transition issue** | **No** for this case — routing uses **2-month start age**, stable across the boundary table below. |
| **Catch-up branch issue** | **No** — catch-up branch not selected when first dose is at 2 months. |
| **Other software issue** | **Separate issue** if dates fail to reach `doseDates` (dose 1 due instead) — not this reproduction. |

---

### 6. Exact code / conditions

**Routing into infant 3+booster path:**

```542:570:src/lib/vaccine-checker/rules/pcv.ts
  const firstDoseDate = doses[0] ?? null;
  const ageAtStartMonths = firstDoseDate
    ? ageAtDate(ctx.dob, firstDoseDate).years * 12 + ageAtDate(ctx.dob, firstDoseDate).months
    : ageAtDate(ctx.dob, ctx.today).years * 12 + ageAtDate(ctx.dob, ctx.today).months;
  // ...
  if (ageAtStartMonths >= 24 || ageAtDate(ctx.dob, ctx.today).years >= 2) {
    return started2YearsPlus(ctx, product, doses);
  }
  if (ageAtStartMonths >= 12) {
    return started12To23Months(ctx, product, doses);
  }
  if (ageAtStartMonths >= 7) {
    return started7To11Months(ctx, product, doses);
  }

  return standardPrimaryPlusBooster(ctx, product, doses, 3);
```

**Dose 2 due now (one row only):**

```199:219:src/lib/vaccine-checker/rules/pcv.ts
  const nextDose = doses.length + 1;
  const recommended =
    doses.length === 0 ? addMonths(dob, 2) : addMonths(doses[doses.length - 1], 2);
  const status = doses.length === 0 ? 'due-now' : isOnOrAfter(today, recommended) ? 'due-now' : 'upcoming';
  // ...
  return [
    makeRecommendation({
      id: `pcv-dose${nextDose}`,
      vaccineCategory: 'pneumococcal',
      product,
      doseLabelKey: `doseLabel_dose${nextDose}`,
      status,
      recommendedDate: iso(recommended),
      // ...
    }),
  ];
```

**Booster only after third primary:**

```165:192:src/lib/vaccine-checker/rules/pcv.ts
  if (doses.length >= primaryCount) {
    // ...
    return [
      withRecommendedWindow(
        { id: 'pcv-booster', doseLabelKey: 'doseLabel_booster', /* ... */ },
        preferredWindowStart,
        preferredWindowEnd,
        today
      ),
    ];
  }
```

**Hide overdue recommended date on cards:**

```307:317:src/lib/vaccine-checker/result-presentation.ts
    if (!shouldHideOverdueUnadministeredRecommendedDate(item, referenceDate)) {
      return item;
    }

    return {
      ...item,
      status: 'due-now',
      recommendedDate: undefined,
      // ...
    };
```

**Conditional 7–11 booster (not used when history exists):**

```19:26:src/lib/vaccine-checker/pcv-zero-history-schedules.ts
export function isPcvSevenToElevenMonthZeroHistoryCatchUp(ctx: RuleContext): boolean {
  if (hasPcvDoseHistory(ctx)) {
    return false;
  }
  // age 7–11 months, zero history only
}
```

---

### 7. Nearby age boundaries (same DOB, dose 1 on 19 Mar 2026, full dates)

Uses project `ageAtDate()` for age labels.

| As-of | Age at as-of | PCV rows (all buckets) | Branch |
|-------|----------------|-------------------------|--------|
| 17 Sep 2026 | 7m 29d | **Dose 2 — due now** only | `standardPrimaryPlusBooster` |
| 19 Sep 2026 | 8m 0d | **Dose 2 — due now** only | same |
| 20 Sep 2026 | 8m 1d | **Dose 2 — due now** only | same |
| 19 Oct 2026 | 9m 0d | **Dose 2 — due now** only | same |

No change at these boundaries: **first dose age stays 2 months**, so routing does not switch to **`started7To11Months`**. Dose 2 became due on **19 May 2026**, so it remains **due now** for all listed as-of dates.

---

### Branch rule (clinical confirmation recorded)

Synflorix schedule branch follows **age at first PCV dose** (same whole-month rule as `calculatePcv()`):

- **First dose before 7 months** → 3 primaries in the first year + 1 booster (target **11–15 months**, and **≥ 6 months after last primary**).
- **First dose at 7 months or later** → separate catch-up branches (`started7To11Months`, etc.); **no** before-7 “remaining schedule” presentation rows.

Presentation adds conditional rows for remaining primaries/booster **without** projecting Dose 3 from an ungiven Dose 2, or a booster date before the last primary date is known. If **11–15 months** and **last primary + 6 months** cannot both be met, the checker adds `note_pcvSynflorixBoosterTimingNeedsReview` (no new medical assumption).

### Plain-language summary (manual case)

**What the checker is doing:**  
It treats your child as having started Synflorix **on time as a young infant** (first shot at about **2 months**). It says the **second shot is overdue now** because the rules expect the second shot about **two months after the first** (around **19 May 2026**), and you are checking in **September**. It shows **only that one next step** — not a list of every future pneumococcal shot.

**Why it is doing it:**  
The program uses a **“what is the very next injection?”** model for this schedule. The booster and third primary are **coded to appear later**, only when enough prior doses are recorded. It is **not** using the older-infant “start at 7–11 months” shortcut, because the March date proves the series started in early infancy.

**Software vs intentional rule:**  
Showing **dose 2 due now** with your review data is **consistent with the current rule code** — this looks **intentional**, not a wrong branch. **Not showing** dose 3 or booster yet is also **what the code is written to do** (single next row). That may still be a **product/clinical communication** question if you want parents to **see** upcoming primaries/booster on the same screen.

**Medical decisions to confirm before any fix:**

1. For Synflorix started at **2 months**, is **3 primary doses + one booster (11–15 months)** the approved schedule (vs 2+1 catch-up if started at 7–11 months)?
2. After **dose 1 only**, should the results page show **only dose 2**, or also **upcoming dose 3** and/or **booster window** (even as “later” / conditional rows)?
3. When dose 2 is **overdue**, should the UI show the **original due date** (May 2026) or only **“due now”** (current presentation hides the date)?
4. If you ever see **dose 1 due again** with the same history, that is the separate **`doseDates` empty** state — confirm dates are saved on the review step before treating it as a schedule bug.

---

## Automated audit — dose 1 still “due” / “eligible” with recorded history

Generated by `scripts/pcv-synflorix-audit.ts`. **No medical rules were changed.**

### Scope

- Product: **Synflorix** (`synflorix`) only
- History: `numberOfDoses` ≥ 1
- Flag: `doseLabel_dose1` with status **`due-now`** or **`eligible-now`**
- Child: healthy, routine complete; DOB fixed **15/01/2022**; as-of scanned every **7 days** from **6 weeks** to **5 years**
- Variants per age: dates match count; **count without dates**; count exceeds stored dates

### Summary

- Raw hits (all ages/variants): **765**
- Unique patterns (deduped): **15**

### Why the engine does this (no rule changes applied)

Routing in `calculatePcv()` uses **`history.doseDates.length`**, not `numberOfDoses`, to pick infant/catch-up branches (`started7To11Months`, `started12To23Months`, `started2YearsPlus`, `standardPrimaryPlusBooster`).

When **`numberOfDoses ≥ 1` but `doseDates` is empty**, `doses.length === 0`, so the engine follows the **zero-date** branch and can emit **dose 1 due now** even though the wizard recorded a dose count.

When **`numberOfDoses` exceeds `doseDates.length`**, only the entered dates drive the next dose; the extra count is not used in `pcv.ts` routing.

When **full date series** is present, dose 1 due/eligible at infant ages typically reflects **`standardPrimaryPlusBooster` → `eligibleOrDueNow`** with **`doses.length === 0`** only if dates were not passed into the branch — re-check rows below.

### Every unique pattern

| # | Age at as-of | Doses recorded (count) | Dose date(s) ISO | Code path (inferred) | Engine row | Example as-of |
|---|--------------|------------------------|------------------|----------------------|------------|---------------|
| 1 | 0y 2m 4d | 1 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 19/03/2022 |
| 2 | 0y 2m 4d | 2 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 19/03/2022 |
| 3 | 0y 2m 4d | 3 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 19/03/2022 |
| 4 | 2y 0m 5d | 1 | (none) | calculatePcv → started2YearsPlus (doses[] empty, uses ageAtStart from today) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/01/2024 |
| 5 | 2y 0m 5d | 2 | (none) | calculatePcv → started2YearsPlus (doses[] empty, uses ageAtStart from today) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/01/2024 |
| 6 | 2y 0m 5d | 3 | (none) | calculatePcv → started2YearsPlus (doses[] empty, uses ageAtStart from today) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/01/2024 |
| 7 | 0y 7m 5d | 1 | (none) | calculatePcv → started7To11Months (doses[] empty → dose 1 due) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/08/2022 |
| 8 | 0y 7m 5d | 2 | (none) | calculatePcv → started7To11Months (doses[] empty → dose 1 due) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/08/2022 |
| 9 | 0y 7m 5d | 3 | (none) | calculatePcv → started7To11Months (doses[] empty → dose 1 due) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 20/08/2022 |
| 10 | 1y 0m 6d | 1 | (none) | calculatePcv → started12To23Months (doses[] empty → treats as zero recorded dates) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 21/01/2023 |
| 11 | 1y 0m 6d | 2 | (none) | calculatePcv → started12To23Months (doses[] empty → treats as zero recorded dates) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 21/01/2023 |
| 12 | 1y 0m 6d | 3 | (none) | calculatePcv → started12To23Months (doses[] empty → treats as zero recorded dates) | pcv-dose1-due \| due-now \| doseLabel_dose1 \| synflorix \|  | 21/01/2023 |
| 13 | 0y 1m 11d | 1 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-eligible-now \| eligible-now \| doseLabel_dose1 \| synflorix \| 2022-03-15 | 26/02/2022 |
| 14 | 0y 1m 11d | 2 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-eligible-now \| eligible-now \| doseLabel_dose1 \| synflorix \| 2022-03-15 | 26/02/2022 |
| 15 | 0y 1m 11d | 3 | (none) | calculatePcv → standardPrimaryPlusBooster / infant path (doses[] empty) | pcv-eligible-now \| eligible-now \| doseLabel_dose1 \| synflorix \| 2022-03-15 | 26/02/2022 |

### Representative age spread (first hit per calendar year band)

- **0y 6m**: as-of 19/03/2022, count 1, dates none → pcv-dose1-due | due-now | doseLabel_dose1 | synflorix |
- **1y**: as-of 21/01/2023, count 1, dates none → pcv-dose1-due | due-now | doseLabel_dose1 | synflorix |
- **2y**: as-of 20/01/2024, count 1, dates none → pcv-dose1-due | due-now | doseLabel_dose1 | synflorix |

### Files to read in code

- `src/lib/vaccine-checker/rules/pcv.ts` — `calculatePcv`, `started7To11Months`, `started12To23Months`, `started2YearsPlus`, `standardPrimaryPlusBooster`
- `src/lib/vaccine-checker/input-adapter.ts` — how wizard fills `numberOfDoses` vs `doseDates`

### Your decision (recorded)

Do **not** classify dose-1-due with count-only history as bugs until clinical review. Optional future work: align `numberOfDoses` with routing or require dates when count &gt; 0.

### Complete enumeration (765 engine hits)

Every hit uses variant **`count-without-dates`** (`numberOfDoses` ≥ 1, **`doseDates` empty**).
Variants with **matching dose dates** never produced dose 1 due/eligible in this scan.

Full line-by-line listing: [`CHECKER-PCV-SYNFLORIX-REVIEW-DETAIL.csv`](./CHECKER-PCV-SYNFLORIX-REVIEW-DETAIL.csv)
