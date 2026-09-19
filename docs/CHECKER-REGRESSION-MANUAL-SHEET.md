# Vaccine Checker — manual regression sheet (pharmacist / clinical QA)

Use the **Vaccine Checker wizard** at `/vaccine-checker` with these fixed inputs. Compare what you see to the “Expected” column. This sheet covers **historical** scenarios; automated runs also include 250+ age-matrix smoke checks.

| ID | Child DOB | As-of / “today” | Routine vaccines | Previous additional vaccines | What to verify |
|----|-----------|-----------------|------------------|------------------------------|----------------|
| seven-week-eligible-start | 04/07/2026 | 22/08/2026 | Complete | None | Rota, PCV, MenACWY under **eligible now** (not due now), start date 04/09/2026; MenB dose 1 **upcoming** same date; no MenB conditional dose 2 yet |
| four-month-catch-up-conditionals | 22/04/2026 | 22/08/2026 | Complete | None | PCV / MenB / MenACWY dose 1 **due now**; Rotarix-only rota note; conditional dose 2 dates **22/10/2026** (from today, not June age-date) |
| dose-two-due-today-boundary | 23/04/2026 | 23/08/2026 | Complete | Rota, PCV, MenB, MenACWY dose 1 on 23/06/2026 | MenB and MenACWY dose 2 **due now** on 23/08/2026 (not only in upcoming) |
| eight-month-rota-age-limit | 23/12/2025 | 23/08/2026 | Complete | None | Rotavirus **age limit** note — not dose 1 due now |
| varicella-after-recent-mmr | 23/08/2025 | 23/08/2026 | Complete | MMR dose 1 on **16/08/2026** | Varicella dose 1 **upcoming 13/09/2026**, not due now |
| influenza-priming-conditional | 23/02/2026 | 23/08/2026 | Complete | No flu history | Flu dose 1 due now; conditional dose 2 **20/09/2026** |

## Interval spot checks (same child as dose-two row)

| As-of | MenB / MenACWY dose 2 |
|-------|------------------------|
| 22/08/2026 | Should **not** be due now |
| 23/08/2026 | **Due now** |
| 24/08/2026 | **Due now** |

## Automated companion

```bash
npm run test:checker-regression
npm run regression:report
```

Open `/checker-regression-lab` in a dev build to re-run the catalog in the browser.
