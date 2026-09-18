# Phase 20 — Mobile preparation final report

Branch: **`mobile-app-preparation`** (not merged to `main`; not deployed).

## A. Branch created

Yes — `mobile-app-preparation` from current `main`.

## B. Capacitor version

- **@capacitor/core / cli / android / ios:** `8.5.2`
- Plugins: `@capacitor/app`, `browser`, `share`, `preferences`, `filesystem`, `splash-screen`, `status-bar` @ `8.x`; `@ebarooni/capacitor-calendar` @ `8.6.0`

## C. Android project status

- **`android/`** generated via `cap add android`
- **applicationId / namespace:** `com.vaccinetalks.app`
- **Icons & splash:** generated from existing `public/icons/icon-512.png` via `@capacitor/assets`
- **App Links:** intent-filter added; **assetlinks.json** template in `public/.well-known/` (fingerprints are placeholders)
- **Gradle debug build:** **not run** — **Java Runtime not installed** on this machine (`./gradlew assembleDebug` failed)

## D. iOS project status

- **`ios/`** generated via `cap add ios`
- **Display name:** Vaccine Talks
- **Bundle ID:** `com.vaccinetalks.app` (set in Xcode when signing)
- **AppIcon / Splash:** generated in `Assets.xcassets`
- **Universal Links:** `App.entitlements` + AASA template (`TEAMID` placeholder)
- **Simulator build:** **not completed** — Xcode plugin load error (`xcodebuild -runFirstLaunch` / reinstall suggested)

## E. Proposed / final Android application ID

**`com.vaccinetalks.app`** — suitable for Play Console; confirm ownership before first upload.

## F. Proposed / final iOS bundle ID

**`com.vaccinetalks.app`** — register in Apple Developer when enrolling.

## G. Native features added (in web code + plugins)

| Feature | Implementation |
|--------|----------------|
| Native share | `@capacitor/share` + `sharePageNativeAware` / `shareTextNativeAware` |
| Add to calendar | ICS on device; optional `createEventWithPrompt` via calendar plugin |
| Saved resources | `@capacitor/preferences` / `localStorage`; `/saved-resources` page |
| External links | `@capacitor/browser` |
| Android back | `@capacitor/app` backButton listener |
| PWA coexistence | `SerwistOrNativeGate` disables Serwist in native WebView |

## H. Permissions added and why

| Platform | Permission | Why |
|----------|------------|-----|
| Android | `INTERNET` | Load vaccinetalks.com |
| iOS | Calendars usage strings | Only if user uses native calendar prompt path |
| Neither | Location, camera, mic, contacts, photos | Not requested |

## I. Files changed (summary)

- **New:** `capacitor.config.ts`, `capacitor-web/`, `android/`, `ios/`, `assets/`, `src/lib/native/*`, `src/components/native/*`, `src/components/wizard/ResultsCalendarActions.tsx`, `src/app/saved-resources/page.tsx`, `public/.well-known/*`, `docs/MOBILE-*.md`, `docs/ANDROID-APP.md`, `docs/IOS-APP.md`, `docs/APP-STORE-CHECKLIST.md`
- **Updated:** `package.json`, `.env.example`, `src/app/layout.tsx`, `Header.tsx`, `SharePageButton.tsx`, `ResultsStep.tsx`, translations, `result-share-actions.ts`

## J. Packages installed

See `package.json` dependencies + devDependency `@capacitor/assets`.

## K. Android debug build status

**Blocked** — install **JDK 17+** and Android SDK, then:

```bash
cd android && ./gradlew assembleDebug
```

## L. iOS simulator / build status

**Blocked** — repair Xcode (`sudo xcodebuild -runFirstLaunch`) or reinstall Xcode; then open `ios/App` in Xcode and Run.

## M. Remaining manual steps

1. Confirm **`com.vaccinetalks.app`** in Apple + Google consoles.
2. Replace **SHA-256** in `assetlinks.json` and **TEAMID** in `apple-app-site-association`; deploy to production `.well-known`.
3. Link **App.entitlements** in Xcode (Associated Domains).
4. Test on real devices with `CAPACITOR_SERVER_URL` for dev branch **before** production deploy of native-aware web code.
5. Deploy web changes to Vercel when ready (native apps load production URL).
6. Install JDK + Android Studio; fix Xcode; run `docs/MOBILE-TEST-MATRIX.md`.

## N. Requires Google Play account

- Create app, Data Safety, signing, internal testing, production AAB upload.

## O. Requires Apple Developer account

- Device testing, TestFlight, App Store — **$99/year** program.

## P. Effect on existing PWA

- **Browser/PWA:** Serwist unchanged when not in Capacitor.
- **Risk:** Until native detection is deployed to production, store apps hitting old production JS may still register SW — deploy web branch before marketing store apps.
- No change to Vercel build command from Capacitor sync (sync is local/CI optional).

## Q. Git commits on this branch

See: `git log main..mobile-app-preparation --oneline` after commit.

---

**Architecture (short):** Capacitor **hosted WebView** → `https://www.vaccinetalks.com` (not a full offline bundle). See `docs/MOBILE-APP-ARCHITECTURE.md`.
