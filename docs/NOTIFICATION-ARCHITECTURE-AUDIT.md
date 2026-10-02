# Vaccine Talks — notification architecture audit (Step 1)

**Inspection date:** October 2026  
**Inspector workspace:** `checker-regression-lab` (local) — **production baseline:** `main` @ `1fdd613`  
**Scope:** Read-only inspection. No Phase 1/2 implementation in this step.

---

## 1. Git state at inspection

| Item | Value |
|------|--------|
| Current branch | `checker-regression-lab` (clean vs `origin/checker-regression-lab` at inspection time) |
| Production / `main` HEAD | `1fdd61394ad2e8c6b6dbfdfab6820ca6fed57be6` — *Update RSV public and HCP content and fix NCQ English layout.* |
| Related branches | `mobile-app-preparation` (Capacitor + calendar, not on `main`), `checker-regression-lab` (Checker presentation/regression only) |

**Implication for Phase 1:** Branch `vaccine-reminders` should be created from **`main` (`1fdd613`)**, then **selectively port** mobile-native pieces from `mobile-app-preparation` (Capacitor, calendar, `src/lib/native/*`) without merging Checker medical/regression work from `checker-regression-lab` unless explicitly chosen later.

---

## 2. Vaccine Checker result model (existing)

**Orchestrator:** `src/lib/vaccine-checker/calculations.ts` → `calculateVaccineRecommendations(CheckerInput)`.

**Output:** `CheckerResults` (`src/lib/vaccine-checker/types.ts`):

- Buckets: `dueNow`, `eligibleNow`, `upcoming`, `ageLimitPassed`, `completed`, `needsReview`
- Plus: `routineMissing`, `routineCatchUpAssessment`, `importantNotes`

**Single recommendation:** `VaccineRecommendation`:

| Field | Role |
|-------|------|
| `id`, `vaccineCategory`, `product`, `doseLabelKey` | Identity / display |
| `status` | `due-now`, `eligible-now`, `upcoming`, `completed`, `not-yet-eligible`, `age-limit-passed`, `needs-review` |
| `timingKind` | `FIXED_DATE`, `RECOMMENDED_WINDOW`, `MINIMUM_START_ONLY`, `AGE_LIMIT_RANGE` |
| `recommendedDate` | ISO `YYYY-MM-DD` when a single planned date exists |
| `windowStart` / `windowEnd` | Preferred interval (boosters, etc.) |
| `minimumValidDate` | Earliest allowed date (no fixed “due” day) |
| `earliestDate` / `latestDate` | Age-limit style ranges |
| `conditionalNextDose` | `true` = future step whose date depends on unrecorded doses |
| `conditionalProjectedFromDate` | Used for some conditional copy (e.g. varicella planned D1) |
| `noteKeys`, `reasonKey`, `urgency` | Notes and sorting |

**Pipeline (do not bypass for reminders):**

1. Rule modules (`src/lib/vaccine-checker/rules/*`, `routine-catch-up`, etc.)
2. `coordinateMmrVaricellaPlannedDates`
3. `buildConditionalUpcomingRecommendations` (`conditional-upcoming.ts`)
4. PCV remaining schedule rows (`pcv-remaining-schedule.ts` on lab branch; not on `main` at `1fdd613`)
5. `enrichRecommendationsForPresentation` + `normalizeRecommendationTiming`

**UI:** `src/components/wizard/ResultsStep.tsx` renders bucketed cards using `result-presentation.ts` (timing lines, conditional copy, labels). Share/print: `ResultsActions.tsx` — **no reminders on `main`.**

---

## 3. How dates are represented (reminder-relevant)

| Pattern | Typical fields | Exact single day? | Reminder note |
|---------|----------------|-------------------|---------------|
| Fixed next dose | `recommendedDate` | Often yes | Primary Phase 1 source |
| Preferred window | `windowStart`–`windowEnd`, no `recommendedDate` | No | Do not invent; no auto local notification on window alone |
| Minimum start | `minimumValidDate` | Earliest day only | User-facing “from {date}”; treat as **not** a full exact due date unless product decision says “remind on minimum” |
| Due now, no date | `status: due-now`, no `recommendedDate` | No | Show “Set Reminder” disabled / unavailable copy |
| Conditional future dose | `conditionalNextDose: true` | No | **No reminder** — date unknown |
| Overdue fixed date | `recommendedDate` + presentation helpers (`isOverdueRecommendedDate`) | Date exists but in past | **Do not auto-schedule**; explicit user action if rescheduling |

**Sort / display helper:** `getEffectiveSortDate()` uses `windowStart ?? minimumValidDate ?? recommendedDate ?? earliestDate`.

**Presentation normalization:** `normalizeRecommendationTiming` / `getTimingDisplayLines` — conditional rows intentionally have **empty** timing lines.

---

## 4. Conditional / future recommendations

- Built in `conditional-upcoming.ts` when `numberOfDoses === 0` and dose 1 is due/eligible (plus MenACWY/MenB/PCV 7–11 zero-history booster helpers).
- PCV “remaining schedule” conditional rows (lab branch): no `recommendedDate`, no `conditionalProjectedFromDate` (asserted in tests).
- Results: separate copy via `getConditionalNextDoseTranslationKey` / params in `result-presentation.ts`.
- Cards: `conditionalNextDose` → no timing lines; conditional note string under card.

**Phase 1 rule:** Reminder layer must treat `conditionalNextDose === true` as **ineligible** and show “Reminder will be available once the vaccination date is known” (EN/AR).

---

## 5. Add to Calendar (existing — not on `main`)

On branch **`mobile-app-preparation`** (not merged to `main`):

| Piece | Path | Behavior |
|-------|------|----------|
| Event derivation | `src/lib/native/checker-calendar-events.ts` | Maps `VaccineRecommendation[]` → events **only** when `recommendedDate` matches `^\d{4}-\d{2}-\d{2}$` |
| ICS | `src/lib/native/calendar-ics.ts` | All-day VEVENT, device-local |
| Native / share | `src/lib/native/calendar-native.ts` | Web: download ICS; native: optional `@ebarooni/capacitor-calendar` or Share ICS via `@capacitor/filesystem` + `@capacitor/share` |
| UI | `ResultsCalendarActions.tsx` + wiring in `ResultsStep.tsx` | Per-event buttons; user-initiated |
| Tests | `calendar-ics.test.ts` | ICS shape, no child PII in fixture |

**On `main` / current checker-regression-lab:** **No** Add to Calendar UI or `src/lib/native/*`.

**Phase 1:** **Preserve** calendar as sibling feature; reminders are separate actions on the same eligible rows.

---

## 6. Capacitor Android / iOS (existing — not on `main`)

**Branch:** `mobile-app-preparation`

- **Dependencies:** `@capacitor/core` 8.x, `@capacitor/android`, `@capacitor/ios`, `@capacitor/app`, `browser`, `filesystem`, `preferences`, `share`, `splash-screen`, `status-bar`, `@ebarooni/capacitor-calendar`
- **Config:** `capacitor.config.ts` — WebView loads `https://www.vaccinetalks.com` (or `CAPACITOR_SERVER_URL` for dev)
- **Shell:** `android/`, `ios/`, `capacitor-web/`
- **Scripts:** `cap:sync`, `cap:android`, `cap:ios`, etc.
- **Platform helper:** `src/lib/native/platform.ts` — `isNativeApp()`, `getNativePlatform()`

**Not present:** `@capacitor/local-notifications`, push (FCM/APNs), notification permission flow.

**Docs on mobile branch:** `docs/MOBILE-NOTIFICATIONS-FUTURE.md`, `docs/MOBILE-APP-ARCHITECTURE.md`, `docs/MOBILE-PWA-CAPACITOR-STRATEGY.md`.

---

## 7. Native bridge / utilities (reusable)

| Utility | Branch | Reuse for Phase 1 |
|---------|--------|-------------------|
| `platform.ts` | mobile-app-preparation | Yes — gate native vs web |
| `calendar-ics.ts` / `calendar-native.ts` | mobile-app-preparation | Yes — keep unchanged |
| `checker-calendar-events.ts` | mobile-app-preparation | **Pattern** for reminder eligibility (same date rules, separate module) |
| `@capacitor/preferences` | mobile-app-preparation dep | Optional — store reminder IDs / metadata locally (no server) |

---

## 8. Authentication (Auth.js)

- **Package:** `next-auth` v5 beta (`src/auth.ts`, `src/app/api/auth/[...nextauth]/route.ts`)
- **Providers:** Google, Apple — **only if** env configured (`auth-env.ts`)
- **No database adapter** — JWT/session cookies only; no user table in repo
- **Pages:** `/auth/signin`, `/auth/signup`, `/auth/error`
- **Phase 1:** Reminders **do not require login**. Auth is irrelevant unless Phase 2 ties preferences to account.

---

## 9. Database

**None** in this repository for app data:

- No Prisma/Drizzle/Postgres/Mongo
- Content is static TS/MDX/pages; search index generated at build
- Auth is stateless OAuth session

**Phase 2** may need a **minimal** store for push subscriptions / content prefs if web push or cross-device sync is required — document before adding.

---

## 10. Parent / HCP audience (existing)

- **Routing / IA:** `/non-hcp/*` (Parent), `/hcp-*`, `/faq`, `/doc/*`, `/hcp-resources`, etc.
- **Header / hubs:** bilingual labels; no unified “audience” flag on user profile
- **Checker:** Parent-facing healthy-child wizard (`/vaccine-checker`); not HCP workflow
- **Content metadata:** `src/lib/article-meta.ts` (added/updated dates per page key) — useful for Phase 2 “what’s new” detection, not a CMS publish event bus
- **Whats-new:** `/whats-new` page — manual/marketing style, not push-triggered

**Phase 2:** Explicit opt-in channels (Parent / HCP / Vaccine Updates / Courses) — **do not infer** from navigation alone.

---

## 11. Notification-related code today

| Location | What exists |
|----------|-------------|
| `main` | **None** for vaccine reminders or content push |
| `mobile-app-preparation` | Calendar + `docs/MOBILE-NOTIFICATIONS-FUTURE.md` (design notes: local vs push) |
| PWA | Serwist service worker (`src/app/sw.ts`, `SerwistProvider`) — **offline/cache only**, no Web Push handlers |
| Chat | Disclaimer copy only (`ChatButton`, `site-ui-messages.ts`) |

---

## 12. Mobile / PWA detection

| Mechanism | Purpose |
|-----------|---------|
| Responsive CSS + `MobileNav.tsx` | Layout only — **not** native detection |
| Serwist PWA | Installable web app, precache — **no** push subscription |
| `isNativeApp()` | **Only on mobile-app-preparation** — Capacitor WebView |

**Phase 1:** Use Capacitor local notifications on iOS/Android; web/PWA can offer ICS/calendar fallback or optional Web Notifications later (Phase 2 scope).

---

## 13. Privacy / disclaimer (relevant to notifications)

- **Checker disclaimer:** `translations/en.ts` / `ar.ts` (`disclaimer` key); results disclaimer box in wizard
- **Site disclaimer:** `/disclaimer` — not medical advice, agreement by use
- **Calendar copy (mobile branch):** Explicit “device-only — nothing sent to Vaccine Talks servers”
- **Chat:** Bilingual AI disclaimer (`site-ui-messages.ts`)
- **No** health-data analytics patterns found in checker share (`result-share.ts`) — share is user-initiated text

**Phase 1 requirements align:** local-only scheduling, minimal notification body, no DOB/history logging, permission on “Set Reminder” only.

**Phase 2:** Separate consent from newsletter; minimal push payload; no mixing with checker history.

---

## What can be reused

- Entire **Checker pipeline** and `VaccineRecommendation` / `CheckerResults` as the **only** schedule source
- **Label helpers:** `getRecommendationCategoryLabel`, `getProductDisplayLabel`, dose label keys, EN/AR `translations`
- **Mobile branch:** Capacitor shell, `platform.ts`, calendar stack, `checker-calendar-events` eligibility pattern
- **Vitest** harness for pure reminder logic (no native plugin in unit tests — mock Capacitor)
- **ResultsStep** card structure — add per-card or grouped actions without changing rule modules

---

## What must be added (Phase 1)

1. **Branch** `vaccine-reminders` from `main` + port Capacitor/calendar from `mobile-app-preparation` (cherry-pick or copy, not merge to `main`).
2. **`@capacitor/local-notifications`** (+ permission API) — schedule/cancel/reschedule.
3. **Reminder domain module** (new, e.g. `src/lib/reminders/`):
   - `getReminderEligibility(recommendation)` → `exact-date` | `conditional` | `window-only` | `no-date` | `overdue`
   - `resolveReminderScheduleDate(recommendation)` → ISO or null (**never** recalculate medicine)
   - Stable IDs: hash of `(childScopeId, recommendation.id, doseLabelKey, date)` — `childScopeId` from wizard session (single DOB per run today)
   - Grouping: same ISO date + same child → one notification, combined title/body
4. **UI:** `Set Reminder` / cancel / reschedule; conditional unavailable message; permission flow on button tap
5. **Storage:** Local only (`Preferences` or in-memory + plugin pending list) — map id → { date, labels, createdAt }
6. **Overdue UX:** No silent past schedule; prompt for “remind tomorrow” / pick date / open checker again
7. **Tests:** Pure functions + UI copy keys EN/AR; mock notification plugin
8. **Preserve** Add to Calendar alongside reminders

---

## What should NOT be changed

- `src/lib/vaccine-checker/rules/*` medical logic
- PCV/booster/catch-up calculations
- Regression lab scenarios on other branches (unless explicitly merged into `vaccine-reminders`)
- **`main`** branch (no commits, no deploy)
- Auth.js shape (no DB for Phase 1)
- Replacing calendar with reminders

---

## Proposed architecture — Phase 1 (Vaccine Reminders)

```text
┌─────────────────────────────────────────────────────────────┐
│ Vaccine Checker (unchanged medical engine)                   │
│  calculateVaccineRecommendations → CheckerResults          │
└───────────────────────────┬─────────────────────────────────┘
                            │ VaccineRecommendation[]
                            ▼
┌─────────────────────────────────────────────────────────────┐
│ Presentation (existing ResultsStep + result-presentation)    │
└───────────────────────────┬─────────────────────────────────┘
                            │
          ┌─────────────────┴─────────────────┐
          ▼                                   ▼
┌──────────────────────┐            ┌──────────────────────┐
│ Calendar adapter      │            │ Reminder adapter      │
│ (existing on mobile)  │            │ (NEW — read-only)     │
│ recommendedDate only  │            │ eligibility + IDs     │
└──────────┬───────────┘            └──────────┬───────────┘
           │                                  │
           ▼                                  ▼
   ICS / native calendar              LocalNotifications
   (user tap)                         (user tap → permission)
```

**Child scope:** Wizard holds **one** `dob` per session (`wizard-types.ts`); no multi-child profiles. IDs should include a session-scoped or DOB-derived scope so a future multi-child wizard cannot collide.

**Grouping algorithm (same child, same date):** After user sets reminders, coalesce pending notifications sharing `fireDate` into one OS notification with concatenated vaccine labels (max length guards for iOS/Android).

---

## Proposed architecture — Phase 2 (New Content Notifications)

Modular **separate package boundary** (e.g. `src/lib/content-notifications/`) so Phase 1 does not import it.

```text
┌──────────────────┐     publish hook      ┌─────────────────────────┐
│ Content source    │ ──────────────────► │ Notification dispatcher │
│ (git/build/CMS    │   (published only)  │ (audience + dedupe)     │
│  future)          │                     └───────────┬─────────────┘
└──────────────────┘                                 │
                                                     ▼
                              ┌──────────────────────────────────────┐
                              │ Channels: FCM/APNs/Web Push (TBD)     │
                              │ Preferences: Parent/HCP/Updates/Course │
                              │ Optional account link (Auth.js)        │
                              └──────────────────────────────────────┘
```

**Smallest maintainable push options (audit recommendation):**

| Option | Pros | Cons |
|--------|------|------|
| **Web Push (VAPID) + self-hosted subscriptions** | No SaaS fee; fits Next.js API routes | Needs DB or KV for subscriptions; iOS Web Push limitations |
| **FCM + APNs direct** | Standard for Capacitor | Server to store tokens; Apple/Google setup |
| **OneSignal / similar** | Faster setup | Paid tiers; third-party processor |

**Publish detection today:** Static site — “publish” = deploy. Phase 2 trigger could be: build manifest diff (`article-meta` / search index / `whats-new` feed JSON) emitted at deploy time, not draft files.

**Login:** Optional — device token stored locally + optional link to OAuth `sub` when signed in.

---

## Technical risks

| Risk | Mitigation |
|------|------------|
| **`main` lacks Capacitor** | Branch from `main`, port mobile-app-preparation native layer explicitly |
| **Window/minimum timing ≠ exact reminder** | Strict eligibility; no reminder for `RECOMMENDED_WINDOW` unless user picks a day (Phase 1 spec: exact only) |
| **Conditional doses** | Hard block on `conditionalNextDose` |
| **Overdue auto-fire** | Never schedule `fireDate < today` without user confirmation |
| **Duplicate reminders** | Deterministic IDs; cancel-before-reschedule |
| **Grouped notifications** | OS limits on body length; test EN/AR |
| **Web vs native split** | Feature-detect; degrade gracefully on web (calendar only or “not available”) |
| **Checker regression drift** | Run `npm test` + `test:checker-regression` on `vaccine-reminders`; do not change rules |
| **Phase 2 scope creep** | No shared DB with Phase 1 reminders; separate consent UI |

---

## Phase 1 branch plan (next step — not executed in Step 1)

```bash
git fetch origin
git checkout main
git pull origin main   # expect 1fdd613
git checkout -b vaccine-reminders
# Cherry-pick or copy from mobile-app-preparation:
#   capacitor.config.ts, android/, ios/, capacitor-web/
#   src/lib/native/*, ResultsCalendarActions, package.json deps
# Then add local-notifications + reminder module + UI + tests
```

**Do not** base `vaccine-reminders` on `checker-regression-lab` unless product explicitly wants PCV remaining-schedule presentation in the same release.

---

## Phase 1 / Phase 2 verification checklist (when implementing)

- [ ] `npm test`
- [ ] New reminder test suite
- [ ] `npm run test:checker-regression` (if checker files untouched, should still pass on branch base)
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] Confirm `main` unchanged; no deploy

---

## Inspection summary

| # | Question | Answer |
|---|----------|--------|
| 1 | Current branch | `checker-regression-lab` |
| 2 | `main` commit | `1fdd613` |
| 3 | Result model | `CheckerResults` + `VaccineRecommendation` buckets |
| 4 | Exact dates | `recommendedDate` (ISO); windows/minimum separate |
| 5 | Conditional | `conditionalNextDose`, optional `conditionalProjectedFromDate` |
| 6 | Add to Calendar | On `mobile-app-preparation` only; ICS + Capacitor share |
| 7 | Capacitor | On `mobile-app-preparation` only; no local notifications yet |
| 8 | Native utils | `src/lib/native/*`, `platform.ts` on mobile branch |
| 9 | Auth | Auth.js v5, Google/Apple, no DB |
| 10 | Database | None |
| 11 | Parent/HCP | Route/hub structure; no user audience profile |
| 12 | Notifications | Design doc only on mobile branch |
| 13 | Mobile/PWA | Serwist PWA + responsive UI; native via Capacitor branch |
| 14 | Privacy | Disclaimer pages + checker disclaimer; calendar device-only copy |

**Step 1 complete.** Phase 1 implementation should start on new branch `vaccine-reminders` from `main` after approval of this audit.
