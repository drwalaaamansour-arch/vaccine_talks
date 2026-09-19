# Vaccine Checker — rule mapping (regression lab)

This maps **where scheduling logic lives**. The regression lab calls `calculateVaccineRecommendations()` only; it does not duplicate rules.

## Orchestrator

| Module | Role |
|--------|------|
| `src/lib/vaccine-checker/calculations.ts` | Builds rule context, runs category calculators, buckets results, conditional upcoming, MMR/Varicella coordination, presentation enrichment |
| `src/lib/vaccine-checker/conditional-upcoming.ts` | “If given today…” next-dose projections from **as-of date** |
| `src/lib/vaccine-checker/mmr-varicella-coordination.ts` | 28-day / same-day rules between MMR and Varicella |
| `src/lib/vaccine-checker/recommendation-timing.ts` | Status vs dates, sort dates |
| `src/lib/vaccine-checker/result-presentation.ts` | Wording keys (e.g. original recommended date), display metadata — **not** schedule math |
| `src/lib/vaccine-checker/routine.ts` / `routine-catch-up/` | Ministry routine visits and catch-up |

## Additional vaccine rule modules

| File | Vaccines |
|------|----------|
| `rules/rotavirus.ts` | Rotarix / RotaTeq, age windows, catch-up |
| `rules/pcv.ts` | PCV products, primary/booster series |
| `rules/menb.ts` | Bexsero |
| `rules/menacwy.ts` | Nimenrix / Menactra |
| `rules/varicella.ts` | Varivax, MMR interaction |
| `rules/hepatitis-a.ts` | Hep A |
| `rules/hpv.ts` | HPV products and age at first dose |
| `rules/influenza.ts` | Seasonal flu, priming series |

## Inputs (wizard → engine)

| Module | Role |
|--------|------|
| `src/lib/vaccine-checker/input-adapter.ts` | Wizard state → `CheckerInput` |
| `src/types/wizard-types.ts` | Wizard enums and history shape |

## Language

The engine is **language-neutral** (no `lang` on `CheckerInput`). Arabic and English differ only in `src/translations/en.ts` and `ar.ts`. Regression lab `language-parity.test.ts` checks that result **keys** exist in both locales.
