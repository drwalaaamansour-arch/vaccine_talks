# Native wrapper security audit (preparation)

## WebView navigation

- In-app: `www.vaccinetalks.com`, `vaccinetalks.com`, localhost/LAN dev IPs (`trusted-origins.ts`).
- External http(s): intercepted in `NativeAppBridge` → `@capacitor/browser` (system browser).
- Non-http(s) schemes: default WebView handling; avoid custom schemes until OAuth design is final.

## Service workers in native apps

Unregistered on startup to reduce cache confusion and stale shell risk.

## Secrets

- No `GROQ_API_KEY`, `AUTH_SECRET`, or OAuth secrets in `android/` or `ios/`.
- Capacitor config uses public production URL only.

## Deep links

- Placeholder AASA / assetlinks — validate paths to prevent open-redirect abuse once live.
- Do not accept arbitrary `intent://` without verification.

## File access

- ICS files written to app cache directory for share only; not uploaded.

## Mixed content

- `allowMixedContent: false` in Capacitor Android config; production URL is HTTPS.

## OAuth (future)

See `docs/MOBILE-OAUTH-FUTURE.md` — test redirect URI and cookie attributes before enabling.

## PDFs

- Loaded from same origin or trusted CDN as website; large PDFs are not bundled in APK/IPA.
