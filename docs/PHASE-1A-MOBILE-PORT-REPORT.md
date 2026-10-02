# Phase 1A — Mobile foundation port report

**Target branch:** `vaccine-reminders` (based on `main` @ `1fdd613` + audit `5ff939a`)  
**Source branch (read-only reference):** `mobile-app-preparation` @ `6c9a7b3` — *Add Capacitor 8 mobile shell for Android and iOS on preparation branch.*  
**Not modified:** `main`, `checker-regression-lab`, `mobile-app-preparation`

---

## Comparison summary

`mobile-app-preparation` is **one commit** ahead of `main` with **130 files** changed. Most of the Capacitor shell, calendar, and native bridge live in that commit. Additional features on the same commit (saved resources, RSV copy, PWA manifest/deep-link assets, share/saved-resources helpers) are **out of scope** for Phase 1A.

---

## Files selected (ported to `vaccine-reminders`)

### Capacitor configuration & web shell

| Path | Why required |
|------|----------------|
| `capacitor.config.ts` | App id, WebView server URL, SplashScreen/StatusBar plugin config |
| `capacitor-web/index.html`, `capacitor-web/offline.html` | Native `webDir` fallback pages |
| `assets/icon-only.png`, `assets/splash.png` | Capacitor asset generation / store icons (referenced by tooling) |

### Android & iOS projects

| Path | Why required |
|------|----------------|
| `android/**` | Full Capacitor Android project (`MainActivity`, Gradle, manifests, icons) |
| `ios/**` | Full Capacitor iOS project (Xcode, SPM CapApp, entitlements, storyboards) |

### npm / scripts

| Path | Why required |
|------|----------------|
| `package.json` | Capacitor 8 deps, `@ebarooni/capacitor-calendar`, `cap:*` scripts |
| `package-lock.json` | Lock versions matching mobile-app-preparation |

### Native utilities (calendar + platform)

| Path | Why required |
|------|----------------|
| `src/lib/native/platform.ts` | `isNativeApp()` / `getNativePlatform()` |
| `src/lib/native/trusted-origins.ts` | In-app navigation allowlist for `NativeAppBridge` |
| `src/lib/native/calendar-ics.ts` | ICS generation (device-local) |
| `src/lib/native/calendar-ics.test.ts` | Unit test for ICS (no PII) |
| `src/lib/native/calendar-native.ts` | Add-to-calendar: ICS download / Capacitor share / optional native calendar prompt |
| `src/lib/native/checker-calendar-events.ts` | Maps Checker `recommendedDate` only — no schedule recalculation |

### UI integration (calendar only)

| Path | Why required |
|------|----------------|
| `src/components/native/NativeAppBridge.tsx` | Back button, external links, SW unregister in WebView, status bar |
| `src/components/native/SerwistOrNativeGate.tsx` | PWA Serwist on web; skip SW in native WebView (avoids double cache) |
| `src/components/wizard/ResultsCalendarActions.tsx` | Per-event “Add to calendar” buttons |
| `src/components/wizard/ResultsStep.tsx` | Wire calendar events from displayed recommendations |
| `src/app/layout.tsx` | Mount bridge + Serwist gate (web behavior preserved) |
| `src/translations/en.ts`, `src/translations/ar.ts` | `addToCalendar`, `calendarEventAdded` keys only (partial merge) |

### Environment

| Path | Why required |
|------|----------------|
| `.env.example` | Documents `CAPACITOR_SERVER_URL` for LAN dev |

### Phase 1A addition (local notifications — integration only)

| Path | Why required |
|------|----------------|
| `@capacitor/local-notifications` (npm) | Phase 1 local reminders on iOS/Android |
| `src/lib/native/local-notifications-plugin.ts` | Thin re-export / availability probe (no scheduling UI yet) |
| `src/lib/native/local-notifications-plugin.test.ts` | Asserts plugin module resolves; Android/iOS Gradle/SPM updated via `cap sync` |

### Documentation (this repo)

| Path | Why required |
|------|----------------|
| `docs/PHASE-1A-MOBILE-PORT-REPORT.md` | This plan and outcome record |

**Port method:** `git checkout mobile-app-preparation -- <paths>` onto `vaccine-reminders` (does not alter source branch).

---

## Files deliberately NOT copied

| Path / area | Reason |
|-------------|--------|
| `src/app/saved-resources/page.tsx` | Saved-resources feature — not required for calendar/reminders |
| `src/lib/native/saved-resources.ts`, `share.ts` | Saved resources / generic share — unrelated |
| `src/components/native/SaveResourceButton.tsx`, `NativeAppChrome.tsx` | UI for saved resources |
| `src/components/Header.tsx`, `SharePageButton.tsx` | Minor mobile-nav/share tweaks — unrelated |
| `src/app/globals.css` | Mobile chrome styling — not required for foundation |
| `public/manifest.webmanifest`, `public/.well-known/*` | PWA / App Links — Phase 1A defers deep linking |
| `src/data/hcp-vaccine-pages/rsv.ts`, `non-hcp-rsv-questions.ts`, etc. | Content changes — not mobile foundation |
| `src/lib/vaccine-checker/result-share-actions.ts` | Share behavior change — not required for calendar |
| `src/components/non-hcp-common-questions/*` | Unrelated layout tweak |
| `docs/MOBILE-*.md`, `docs/ANDROID-APP.md`, etc. | Reference docs on prep branch; audit already covers architecture |
| Any Reminder UI / scheduling | Explicitly deferred past Phase 1A |

---

## Conflicts

- **None expected** — `vaccine-reminders` matches `main` plus audit doc; mobile files are new paths on `main`.
- **Translations:** Only two keys merged per locale; no conflict with checker strings on `main`.

---

## Risks

| Risk | Mitigation |
|------|------------|
| Layout swaps Serwist wrapper | `SerwistOrNativeGate` keeps Serwist on normal browsers |
| Native WebView loads production URL | Document `CAPACITOR_SERVER_URL` for dev; store builds use production origin |
| Large android/ios tree | Required for Capacitor; no manual edits except via `cap sync` after local-notifications |
| Checker medical rules | Only `ResultsStep` presentation footer changed; no `rules/*` changes |

---

## Source commit reference

- **Capacitor shell + calendar:** `6c9a7b38f4c86e7217f13834f012416984684758` (`mobile-app-preparation`)
- **Local notifications:** added on `vaccine-reminders` after port (not present on prep branch)

---

## Verification plan (Phase 1A)

1. `npx tsc --noEmit`
2. `npm test` — include `calendar-ics.test.ts`, `local-notifications-plugin.test.ts`
3. `npm run build`
4. `npx cap sync` — confirm `@capacitor/local-notifications` in Android/iOS native deps
5. Confirm `main`, `mobile-app-preparation`, `checker-regression-lab` branch tips unchanged

---

## Phase 1A outcome (completed on `vaccine-reminders`)

| Item | Value |
|------|--------|
| `@capacitor/core` | ^8.5.2 (installed 8.5.2 via lockfile) |
| `@capacitor/local-notifications` | ^8.3.1 |
| `cap sync` | 9 Android + 9 iOS plugins including local-notifications |
| Tests | `calendar-ics.test.ts`, `local-notifications-plugin.test.ts` — pass |
| `tsc --noEmit` | Pass (after clean `.next`; stale `.next` from other branch can reference missing routes) |
| `npm run build` | Pass |
| Other branches | `main` @ `1fdd613`, `mobile-app-preparation` @ `6c9a7b3`, `checker-regression-lab` @ `cb0d3c4` — unchanged |
