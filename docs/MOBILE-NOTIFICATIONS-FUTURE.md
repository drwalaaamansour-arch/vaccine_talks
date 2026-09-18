# Notifications and reminders — future options (no backend on this branch)

## Three mechanisms

| Mechanism | Where data lives | Server needed? | Fits “no health data on servers” |
|-----------|------------------|----------------|----------------------------------|
| **Calendar events** | User’s phone calendar | No | Yes — user taps “Add to calendar”; ICS or native prompt |
| **Local notifications** | OS scheduler; trigger derived on device from Checker output | No | Yes — if schedules are computed/stored only on device |
| **Push notifications (FCM/APNs)** | Usually requires device tokens on a server | Yes | Harder without storing reminders server-side |

## Recommendation

1. **Ship calendar + ICS share first** (this branch) — explicit user action, no upload.
2. **Local notifications** — optional later via `@capacitor/local-notifications`, scheduling from Checker results **in memory or encrypted local storage**, not synced to Vaccine Talks.
3. **Push** — only if you add accounts + explicit opt-in and minimize payload (e.g. “You have a reminder tomorrow” with no vaccine details in push body).

## Newsletter

Separate from clinical reminders — `newsletterOptIn` (future DB) or email provider; not part of native push unless user opts in.
