# Vaccine Talks — Android app

## Identifier

- **Application ID:** `com.vaccinetalks.app`
- **Project path:** `android/`

## Open in Android Studio

1. Install [Android Studio](https://developer.android.com/studio) with Android SDK (API levels per `android/variables.gradle`).
2. **File → Open** → select the `android` folder in this repo.
3. Let Gradle sync finish.

## Sync web shell after Capacitor changes

From repo root:

```bash
npm run cap:sync:android
```

## Emulator

1. Android Studio → Device Manager → create a virtual device (Phone, recent API).
2. Run **app** configuration (green play).

The WebView loads `https://www.vaccinetalks.com` unless `CAPACITOR_SERVER_URL` was set when syncing.

## Physical device

1. Enable **Developer options** + **USB debugging**.
2. Connect USB; select device in Android Studio.
3. For local dev: `CAPACITOR_SERVER_URL=http://YOUR_PC_LAN_IP:3000 npm run cap:sync:android` and run `npm run dev:host` on the PC.

## Debug APK

```bash
cd android
./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

Install: `adb install -r app/build/outputs/apk/debug/app-debug.apk`

## Release AAB (future)

```bash
./gradlew bundleRelease
```

Requires a **upload keystore** and signing config in `android/app/build.gradle` (not committed).

## Signing keys & Play App Signing

- Create an **upload key** (keystore) — store password and `.jks` offline, not in git.
- Google Play **App Signing** — Google holds the app signing key; you upload AAB signed with upload key.
- Register **SHA-256** of signing cert in `public/.well-known/assetlinks.json` for App Links.

## App Links

- Hosted file: `https://www.vaccinetalks.com/.well-known/assetlinks.json`
- Template in repo: `public/.well-known/assetlinks.json` — replace fingerprint placeholders after you have release/debug certs.

## Permissions (this project)

- `INTERNET` — required for WebView.
- Calendar — only when user uses native calendar prompt plugin path (see iOS/Android privacy strings).

## Future release procedure

1. Bump `versionCode` / `versionName` in `android/app/build.gradle`.
2. `npm run cap:sync:android`
3. `./gradlew bundleRelease`
4. Upload AAB to Play Console → internal testing → production.
