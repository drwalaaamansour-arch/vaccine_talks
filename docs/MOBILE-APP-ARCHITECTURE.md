# Vaccine Talks — mobile app architecture (plain language)

## What you get

Vaccine Talks stays **one website** on [vaccinetalks.com](https://www.vaccinetalks.com). The **Android** and **iPhone** apps are thin native shells that open the same site inside a secure full-screen browser (WebView), plus a small amount of **on-device** code for sharing, bookmarks, and calendar files.

You do **not** maintain three separate copies of the medical content.

## Proposed store identifier (confirm before publishing)

- **Android application ID:** `com.vaccinetalks.app`
- **iOS bundle ID:** `com.vaccinetalks.app`

Use the same ID on both stores unless Apple/Google require a change during registration.

## How the three surfaces relate

| Surface | What it runs | Updates |
|--------|----------------|---------|
| Website / PWA | Next.js on Vercel, Serwist for installable web | Deploy to Vercel — users refresh or get SW update |
| Android app | Native shell + WebView → production URL (or dev URL when configured) | App store release only when native config/plugins/icons change; **most content updates without a store release** |
| iPhone app | Same as Android | Same |

## What is shared

- All pages, Vaccine Checker logic, PDFs, Arabic/English UI, and HCP content come from the **hosted site**.
- Native projects under `/android` and `/ios` are **wrappers**, not a second copy of the site.

## What is native (on the phone)

- App icon, splash screen, store listing
- **Share sheet** (Capacitor Share)
- **Saved resources** (bookmarks: title + URL only, on device)
- **Add to calendar** (`.ics` file generated on device; optional native calendar prompt via plugin)
- **Back button** (Android) and **external links** opened in the system browser
- **Deep links** (prepared; needs store signing + hosted verification files)

## What is *not* on our servers

- Saved bookmarks
- Calendar events you add
- Vaccine Checker wizard answers (unless you later add accounts — out of scope for this branch)

## When you need a new app store release

- New Capacitor plugin or permission
- Icon/splash/branding change
- Deep link / signing configuration change
- Deliberate change to which URL the app loads

## When you do *not* need a store release

- New HCP article, PDF, Checker presentation fix, translation, or homepage news — deploy **Vercel only**.

## PWA stays independent

Installing the site from Chrome/Safari (“Add to Home Screen”) still uses **Serwist**. Inside the **store apps**, service workers are **disabled** so caching does not fight the WebView.

See `docs/MOBILE-PWA-CAPACITOR-STRATEGY.md` for technical detail.
