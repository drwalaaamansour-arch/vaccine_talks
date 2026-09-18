# PWA (Serwist) + Capacitor compatibility

## Architecture choice: hosted WebView

Next.js 16 on Vercel uses **server rendering**, **API routes** (`/api/auth`, `/api/chat`), and **Serwist**. The app is **not** a static export. Capacitor therefore loads:

- **Production:** `https://www.vaccinetalks.com` (see `capacitor.config.ts`)
- **Local dev:** set `CAPACITOR_SERVER_URL` to your machine’s LAN URL (e.g. `http://192.168.x.x:3000`)

`webDir` (`capacitor-web/`) holds a minimal offline placeholder; it is **not** the full site bundle.

## Serwist vs native WebView

| Context | Service worker |
|--------|----------------|
| Browser / installed PWA | **Enabled** — `SerwistOrNativeGate` wraps `SerwistProvider` |
| Capacitor Android/iOS | **Disabled** — no `SerwistProvider`; `NativeAppBridge` unregisters any SW on startup |

This avoids **double caching** (Serwist + WebView HTTP cache) and stale offline shells inside store apps.

## Updates

- **PWA:** Serwist precache/runtime caches update when users visit after deploy (`skipWaiting: true` in `sw.ts`).
- **Native apps:** Content updates when the WebView loads the live site. Native binary updates only when Capacitor config/plugins change.

## Offline expectations

- **No full offline clone** of the Next.js site in native builds.
- Without network, the WebView shows a connection error; `capacitor-web/offline.html` documents fallback messaging for shell-only scenarios.
- **Saved resources** (Preferences/localStorage) can list bookmark **metadata** offline; opening pages still needs network unless Serwist cached them in **PWA** mode only.

## Sync workflow

```bash
npm run cap:sync          # copy capacitor-web + config into android/ and ios/
npm run cap:sync:android  # android only
npm run cap:sync:ios      # ios only
```

Website build (`npm run build`) is **unchanged** for Vercel. Capacitor does not run as part of Vercel deploy unless you add a CI job later.
