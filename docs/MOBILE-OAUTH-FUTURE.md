# Auth.js (Google / Apple) in native apps — future notes

**Not enabled on this branch.** Accounts remain env-gated and hidden in the header.

## Current web behavior

- OAuth redirect URIs: `https://www.vaccinetalks.com/api/auth/callback/{provider}`
- Local: `http://localhost:3000/api/auth/callback/{provider}`

## Native WebView considerations

1. **Redirect URI:** Register additional authorized redirect URLs if Auth.js callbacks must hit a custom app scheme (e.g. `com.vaccinetalks.app://callback`). Many teams keep **https callbacks** and rely on the WebView completing the redirect on the same origin.

2. **Custom URL scheme / Universal Links:** After sign-in, ensure `redirect` callback returns paths on `www.vaccinetalks.com`, not `capacitor://localhost`.

3. **Apple Sign In:** Apple requires HTTPS; test on device with production or tunneled HTTPS — same as `.env.example` notes.

4. **Session cookies:** JWT/session cookies must be **Secure** and **SameSite**-compatible with WebView. Test `auth()` on `/account/*` routes inside Capacitor before launch.

5. **External browser option:** For fewer review issues, some apps open OAuth in `@capacitor/browser` and return via App Link — document before enabling accounts.

6. **No secrets in APK/IPA:** Only public OAuth client IDs belong in native projects; client secrets stay on Vercel env only.

## Deep links + OAuth

Universal Links / App Links for `https://www.vaccinetalks.com/...` must **not** steal OAuth callback paths unless intentionally configured. Prefer keeping `/api/auth/*` handled in WebView on the same host.
