# App store submission checklist

## Shared

- [ ] Privacy policy URL (same as website)
- [ ] Support contact email
- [ ] App name: **Vaccine Talks**
- [ ] ID: **com.vaccinetalks.app**

---

## Apple App Store

- [ ] Bundle ID `com.vaccinetalks.app` registered in App Store Connect
- [ ] App icons (Xcode Assets — generated from existing brand icon)
- [ ] Screenshots (6.7", 6.5", iPad if supporting tablet)
- [ ] App Privacy questionnaire (minimize data collection; declare analytics if kept)
- [ ] Description + keywords (English; Arabic metadata if offered)
- [ ] **Minimum functionality** — not a thin shell (see `docs/IOS-APP-REVIEW-RISK.md`)
- [ ] Review notes explaining medical/educational purpose and that content is updated from the website
- [ ] TestFlight internal → external testers
- [ ] Signing: Distribution certificate + provisioning profile
- [ ] Universal Links: `apple-app-site-association` live with correct Team ID

---

## Google Play

- [ ] Application ID `com.vaccinetalks.app`
- [ ] AAB upload (not APK for new apps)
- [ ] Play App Signing enrolled
- [ ] Data Safety form (no health data collected to developer servers for this branch’s features)
- [ ] Privacy policy link
- [ ] Store listing: short + full description, feature graphic, screenshots
- [ ] Content rating questionnaire
- [ ] Internal testing track → closed → production
- [ ] `assetlinks.json` with release SHA-256 fingerprint

---

## Before either store

- [ ] Confirm production WebView URL is `https://www.vaccinetalks.com`
- [ ] OAuth remains disabled or fully tested in WebView
- [ ] No ad / tracking SDKs added
