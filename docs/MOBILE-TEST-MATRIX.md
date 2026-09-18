# Mobile test matrix — Vaccine Talks

Use branch `mobile-app-preparation`. Do **not** change Vaccine Checker medical rules during testing — only UX/native behavior.

## Android (Chrome WebView)

| # | Area | Steps | Expected |
|---|------|-------|----------|
| A1 | Launch | Cold start app | Splash → site loads |
| A2 | Home | Open `/` | Renders EN/AR |
| A3 | Parent | `/non-hcp` | In-app navigation |
| A4 | HCP | `/hcp-special-populations` | In-app |
| A5 | Checker | Complete wizard to results | Same results as web |
| A6 | Checker calendar | Tap add-to-calendar on a dated dose | Share sheet / ICS; no server upload |
| A7 | Share | Header share + result share | Native share sheet |
| A8 | Saved | Star + `/saved-resources` | Local list only |
| A9 | PDF | Open HCP PDF embed | Renders or opens; back returns |
| A10 | External link | Tap Facebook / external CDC | Opens system browser |
| A11 | Back | Hardware back | History back; exit from root |
| A12 | Arabic RTL | HCP page AR panel | Layout OK |
| A13 | Offline | Airplane mode launch | Clear error, no blank WebView hang |
| A14 | Deep link | `https://www.vaccinetalks.com/vaccine-checker` | Opens in app after assetlinks verified |

## iOS (WKWebView)

| # | Area | Steps | Expected |
|---|------|-------|----------|
| I1 | Launch | Cold start | Splash → site |
| I2 | Safe area | iPhone with notch | Header not clipped |
| I3 | Share | Share button | UIActivityViewController |
| I4 | Calendar | Add due date | ICS or calendar UI |
| I5 | Checker | Full flow | Parity with Safari |
| I6 | PDF | In-page PDF | Scroll/zoom; back works |
| I7 | External | External https link | SFSafariView / browser |
| I8 | RTL | Arabic content | Readable |
| I9 | Keyboard | Checker date inputs | Visible fields |
| I10 | Orientation | Rotate (if allowed) | Usable layout |
| I11 | Offline | No network | Graceful failure |
| I12 | Universal Link | Tap link in Notes app | Opens app when AASA live |

## Vaccine Checker scenarios (both platforms)

- Infant routine path — results + share text only
- Teen additional vaccines — due/upcoming dates show calendar actions when `recommendedDate` present
- Verify **no** new doses/dates vs production web for same inputs

## Regression — PWA (browser, not store app)

- Install PWA from Chrome/Safari — Serwist still registers
- Offline on PWA — prior Serwist behavior unchanged
