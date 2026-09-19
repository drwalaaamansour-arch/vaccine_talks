# Vaccine Checker regression lab

Branch: **`checker-regression-lab`** (web checker only; not the Capacitor app).

## Purpose

- Guard **historical boundary bugs** with named scenarios
- Run **200+ patient contexts** (age matrix + dose state + intervals)
- Enforce **software invariants** (unique IDs, ISO dates, conditional metadata)
- Confirm **Arabic/English parity** at the key/translation layer
- Produce a **regression report** and **manual QA sheet** for pharmacists

## Commands

```bash
npm run test:checker-regression
npm run regression:report    # writes docs/CHECKER-REGRESSION-REPORT.md
npm test                     # full suite
npx tsc --noEmit
npm run build
```

## Layout

| Path | Purpose |
|------|---------|
| `src/lib/vaccine-checker/regression-lab/` | Runner, invariants, matchers |
| `src/lib/vaccine-checker/regression-lab/scenarios/` | Scenario catalog |
| `src/app/checker-regression-lab/` | Dev QA page |
| `docs/CHECKER-REGRESSION-*.md` | Rule map, manual sheet, ambiguities, report |
| `docs/CHECKER-PCV-SYNFLORIX-REVIEW.md` | Synflorix dose-1 vs recorded history (read-only audit) |
| `docs/CHECKER-CONDITIONAL-DATE-REVIEW.md` | `conditionalProjectedFromDate` audit |

## Local Git exclude

`android/` and `ios/` are listed in **`.git/info/exclude`** on this machine so mobile trees do not clutter status. They are **not** part of this branch and must not be committed here.

## Medical rules

The lab **does not** change `rules/*.ts` based on assumptions. See `docs/CHECKER-REGRESSION-AMBIGUITIES.md`.
