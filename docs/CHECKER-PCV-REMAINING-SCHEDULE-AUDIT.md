# PCV remaining schedule — presentation audit

**Branch:** `checker-regression-lab` only  
**Scope:** Results presentation (what rows appear). **Clinical timing in `rules/pcv.ts` is unchanged.**

Products in wizard: **Synflorix (PCV10)**, **Prevenar 13 (PCV13)**, **Vaxneuvance (PCV15)**, **Prevenar 20 (PCV20)**.

Rule source for all branches: `src/lib/vaccine-checker/rules/pcv.ts` → `calculatePcv()` / `calculatePcvCatchUp()`.

Presentation layers:

| Layer | Path | Role |
|-------|------|------|
| Engine next step | `rules/pcv.ts` | One recommendation per call (immediate next dose or booster) |
| Zero-dose “if dose 1 today…” | `conditional-upcoming.ts` | Projects dose 2 from reference date when `numberOfDoses === 0` |
| 7–11 mo zero-history booster | `conditional-upcoming.ts` → `appendPcvSevenToElevenBoosterConditional` | Conditional booster when age 7–11 and no doses yet |
| Remaining schedule rows | `pcv-remaining-schedule.ts` (was Synflorix-only infant helper) | Conditional later primaries / boosters **without** dates that depend on unrecorded doses |

---

## Branch matrix (by age at series start)

Age at start = age at **first recorded dose**, or age at reference date if none (`calculatePcv()`).

| Age at start | Products | Total doses (clinical) | Engine function |
|--------------|----------|------------------------|-----------------|
| &lt; 7 mo | Prevenar13, Prevenar20, Synflorix | 3 primary + 1 booster | `standardPrimaryPlusBooster(..., 3)` |
| &lt; 7 mo | Vaxneuvance | 2 primary (+ dose 3 if short interval) + booster | `vaxneuvanceRules()` |
| 7–11 mo | All (incl. Vaxneuvance if start ≥7) | 2 primary + 1 booster | `started7To11Months()` |
| 12–23 mo | All | 2 doses (series complete) | `started12To23Months()` |
| ≥ 24 mo / ≥ 2 y | Product-specific | Synflorix: up to 2; others &lt;5y: 1; ≥5y: single | `started2YearsPlus()` |

Special: **two infant doses before 12 mo + child ≥12 mo** → 12‑month catch-up **booster** instead of dose 3 (`twelveMonthCatchUpAfterTwoInfantDoses`).

---

## Per-product behavior **before** PCV-wide remaining fix

Legend: **A** = full remaining schedule, **B** = immediate next dose only, **C** = booster hidden until primaries complete (no conditional row).

### Synflorix (PCV10) — start &lt; 7 months

| Received | Immediate (engine) | Later primary | Booster | Results |
|----------|-------------------|---------------|---------|---------|
| 0 | Dose 1 | B → **A** (conditional 2, 3) | C → **A** (conditional) | Fixed earlier on lab branch |
| 1 | Dose 2 (dated) | B → **A** (conditional 3) | C → **A** | Fixed |
| 2 | Dose 3 (dated) or catch-up booster | — | C → **A** if still on primaries | Fixed |
| 3 primaries | Booster (dated/window) | — | Shown | OK |
| 4+ | Complete | — | — | OK |

Rule path: `standardPrimaryPlusBooster` + `synflorixBeforeSevenMonthBooster` when primaries complete.

### Prevenar 13 / Prevenar 20 — start &lt; 7 months

| Received | Immediate | Later primary | Booster | Results |
|----------|-----------|---------------|---------|---------|
| 0–2 | Next primary only | **B** | **C** | **Gap** |
| 3 primaries | Booster window 11–15 mo | — | Shown | OK |
| 4+ | Complete | — | — | OK |

Rule path: `standardPrimaryPlusBooster` (booster = 11–15 mo window, no Synflorix 6‑month rule).

### Vaxneuvance (PCV15) — start &lt; 7 months

| Received | Immediate | Later primary / dose 3 | Booster | Results |
|----------|-----------|------------------------|---------|---------|
| 0 | Dose 1 | B (dose 2 via conditional-upcoming only) | **C** | **Gap** |
| 1 | Dose 2 | — | **C** | **Gap** (2+1 series) |
| 2 (short &lt;8 wk interval) | Dose 3 | — | **C** | **Gap** |
| 2 (≥8 wk) / 3 | Booster | — | Shown | OK |

Rule path: `vaxneuvanceRules()`.

### All products — start 7–11 months

| Received | Immediate | Later | Booster | Results |
|----------|-----------|-------|---------|---------|
| 0 | Dose 1 | Dose 2 conditional (if dose 1 “today”) | Conditional booster (zero-history helper only) | Partial |
| 1 | Dose 2 (dated) | — | **C** | **Gap** |
| 2 | Booster (minimum start) | — | Shown | OK |

Rule path: `started7To11Months()`.

### All products — start 12–23 months

| Received | Immediate | Later | Booster | Results |
|----------|-----------|-------|---------|---------|
| 0–1 | Next of 2 doses | B only (one step) | N/A | OK (no booster in rules) |
| 2 | Complete | — | — | OK |

### Age ≥2 years / catch-up

Single-dose or 2-dose Synflorix paths — only one next step; **no booster** in rules. Presentation **B** is correct.

---

## Proposed presentation (implemented on lab branch)

**Do not change `rules/pcv.ts` scheduling.**

1. **`three-primary-plus-booster`** (Prevenar13, Prevenar20, Synflorix, start &lt; 7 mo):  
   Same row pattern as Synflorix lab fix — conditional dose 2/3 and conditional booster while primaries incomplete; no projected dates on those rows; suppress generic “dose 2 if dose 1 today” when showing full remaining infant schedule at 0 doses.

2. **`vaxneuvance-infant`**:  
   Conditional booster while primary series incomplete (after 1 or 2 doses, including short-interval dose‑3 path). Primary count = 2 unless dose 3 is the engine’s immediate next step (then only conditional booster).

3. **`seven-to-eleven`**:  
   After **1 recorded dose**, add **conditional booster** (no date until dose 2 is recorded; copy of clinical `laterOf(12 mo, dose2+2 mo)` logic is **not** projected from hypothetical dose 2).

4. **12–23 mo, ≥2 y, completed, catch-up booster-only, needs-review**:  
   No extra rows.

5. **Translations**:  
   Synflorix booster conditional keeps 6‑month + 11–15 precedence text; other 3+1 products use standard “booster after primary series (preferred 11–15 mo)” text; 7–11 conditional booster uses dose‑2‑dependent wording without fabricated dates.

---

## Regression coverage (lab)

Scenarios and unit tests per product where the schedule applies:

- 0 / 1 / 2 / 3 primaries + pending booster + complete  
- Prevenar13, Prevenar20, Synflorix (shared 3+1 infant path)  
- Vaxneuvance infant 0 / 1 / 2 (short interval) / complete  
- Prevenar13 7–11 mo with 1 dose (conditional booster)

---

## Fix status summary

| Product | Immediate dose | Later primary | Booster when still on primaries | Fixed on lab |
|---------|----------------|---------------|----------------------------------|--------------|
| Synflorix &lt;7 mo | Yes | Yes (conditional) | Yes (conditional) | Already yes → retained |
| Prevenar 13 &lt;7 mo | Yes | Was missing | Was missing | Yes |
| Prevenar 20 &lt;7 mo | Yes | Was missing | Was missing | Yes |
| Vaxneuvance &lt;7 mo | Yes | Partial (engine + conditional dose 2 at 0) | Was missing | Yes |
| All 7–11 mo (1 dose) | Yes | N/A | Was missing | Yes |
| 12–23 mo / ≥2 y | Yes | N/A if single next | N/A | N/A (no change) |
