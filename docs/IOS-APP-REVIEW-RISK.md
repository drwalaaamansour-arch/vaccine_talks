# iOS App Review — risk notes (not legal advice)

Apple may reject apps that look like a **minimal website wrapper** with no app-specific value.

## Current mitigations on `mobile-app-preparation`

- Native **Share** integration (Capacitor)
- **Add to calendar** from Checker due dates (device-local ICS / prompt)
- **Saved resources** (on-device bookmarks — no health data)
- Native **back** handling and **external links** in system browser
- Universal Links **prepared** (not live until Team ID + AASA deployed)

## Residual risks

| Risk | Why | Mitigation |
|------|-----|------------|
| Thin wrapper | Primary UI is remote website | Emphasize Checker + calendar + saved resources in review notes; consider bundling critical offline pages later |
| Login broken in WebView | Future OAuth | Test before enabling accounts; use review demo account |
| WebView-only checkout / payments | N/A today | — |
| Medical claims | Educational tool | Match website disclaimers; “not medical advice” visible on Checker results |
| Duplicate PWA | Same content as Add to Home Screen | Store app adds native integrations PWA may lack on iOS |

## Recommended improvements before submission

1. Prominent **Saved resources** entry in app UI (not only header star).
2. Short **onboarding** screen: “Content updates from vaccinetalks.com; bookmarks stay on your device.”
3. Ensure **Add to calendar** and **Share** work without login.
4. Optional: **Local notifications** for due dates (no server) — stronger “app-ness.”
5. Submit **review notes** listing native features and Egyptian HCP/public audience.

**No guarantee of approval.**
