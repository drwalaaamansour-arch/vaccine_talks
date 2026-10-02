# Phase 1 — Vaccine Reminder web manual QA checklist

**Scope:** Vaccine Reminder UX and eligibility on the **Results** step only (Phase 1B).  
**Branch under test:** `vaccine-reminders`  
**Environment:** Local web — `npm run dev` → `http://localhost:3000/vaccine-checker` (or deployed preview of this branch, **not** `main`).

**Important limitations**

| Context | What manual QA can prove |
|--------|---------------------------|
| **Browser (Safari, Chrome, mobile viewport)** | UI visibility, copy (EN/AR), eligibility gating, graceful failure when native APIs are absent, Calendar still works, Checker dates unchanged on screen |
| **Future native Android/iOS app (Capacitor)** | Permission prompts, local notification schedule/cancel/reschedule, OS notification delivery, duplicate prevention at OS level, grouped notification body |

**Browser testing does not prove that a notification will fire on the device.** It only proves that the web UI and client-side logic behave as designed when Capacitor is not available or when scheduling is not attempted successfully.

Do **not** treat a passed browser checklist as sign-off for App Store / Play Store reminder functionality.

---

## Before you start

1. Checkout **`vaccine-reminders`** and run `npm install` if needed.
2. Start the dev server: `npm run dev`.
3. Open **Vaccine Checker** and complete the wizard through to **Results**.
4. Use **routine vaccines complete** (or minimal history) unless the case requires specific vaccines.
5. Note the **calculation / reference date** shown on Results (wizard uses “today” unless your build supports another reference date).
6. For **English** tests, use the checker language toggle for EN. For **Arabic**, toggle AR before reviewing Results.
7. Keep **DevTools → Network** off for routine UI tests; no server calls are expected for reminders.

**Suggested data patterns (adjust dates relative to your reference “today”)**

| Goal | How to get it on Results |
|------|---------------------------|
| **Exact-date row** | e.g. one **PCV** dose recorded; **Dose 2** in Due now / Upcoming with a **single due date** (not a “window” line only) |
| **Conditional row** | Row with **conditional** follow-up copy (“still required…”) and **`conditionalNextDose`** behavior — e.g. projected next dose after dose 1 in some catch-up paths |
| **Window-only row** | e.g. **booster** with preferred **from–to** window and **no** separate single due date line — reminder block should **not** appear |
| **Overdue exact date** | History where **recommended due date** is **before** reference date; card still shows overdue-style timing from existing Checker UI |
| **Same date, multiple vaccines** | Two+ eligible recommendations sharing the **same ISO due date** (e.g. two vaccines both due same day) |
| **Different dates** | Two eligible recommendations with **different** due dates |

---

## Legend

- **Browser now** — Can execute fully in desktop or mobile **browser**.
- **Native app (future)** — Requires **Vaccine Talks Capacitor** build on Android/iOS; cannot be fully verified in browser alone.
- **Browser (partial)** — UI or messaging only; success path needs native app.

---

## Checklist

### 1. Exact-date recommendation → Set Reminder button is shown

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | 1. Reach Results with at least one recommendation that has a **fixed due date** (see table above). 2. Locate the reminder block **inside that result card** (below dose/timing lines). |
| **Expected** | Long-form **display date** (e.g. “30 September 2026” / Arabic equivalent) and a **Set Reminder** button (`reminderSetAction`). No reminder block on window-only or conditional-only cards. |
| **Native app (future)** | Same UI; after Set Reminder, OS permission and schedule (see tests 4–6). |

---

### 2. Conditional recommendation → no Set Reminder button

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | 1. Find a card with **conditional** next-dose wording (not a fixed due date for that row). |
| **Expected** | Text only: **EN** — “Reminder will be available once the vaccination date is known.” **AR** — “هنقدر نحدد الـ Reminder لما تاريخ التطعيم يبقى معروف.” **No** Set Reminder button. |
| **Native app (future)** | Same; must still **not** offer Set Reminder until date is known. |

---

### 3. Permission / unavailable state handled gracefully

| | |
|--|--|
| **Verification** | **Browser (partial)** — unavailable path; **Native app (future)** — permission granted/denied |
| **Steps (browser)** | 1. On an exact-date card, tap **Set Reminder**. 2. Observe feedback message. |
| **Expected (browser)** | No crash; Checker remains usable. Message similar to **EN** “Reminders are available in the Vaccine Talks mobile app on this device.” / **AR** `reminderUnavailableNative`. **No** system notification permission dialog in pure browser. |
| **Steps (native, future)** | 1. Tap **Set Reminder** once. 2. Accept or deny OS notification permission. |
| **Expected (native, future)** | Permission requested **only** on button tap (not on load / Results open). If **denied**: bilingual `reminderPermissionDenied`; no crash; no automatic re-prompt loop. |

---

### 4. Reminder Set state

| | |
|--|--|
| **Verification** | **Native app (future)** |
| **Steps** | 1. On device app, tap **Set Reminder** and grant permission. 2. Return to same Results card (or re-run checker with same child/dates). |
| **Expected** | **Set Reminder** replaced by **Reminder set** label and **Cancel Reminder** / **Change Reminder** actions. Success copy (`reminderSetSuccess` or overdue note if applicable). |
| **Browser now** | Typically **cannot** reach persistent “Reminder set” — scheduling does not complete without native Capacitor. Document as **N/A in browser** unless testing with a native shell pointed at dev URL. |

---

### 5. Cancel Reminder UI

| | |
|--|--|
| **Verification** | **Native app (future)**; **Browser (partial)** — button labels only if state were set |
| **Steps (native, future)** | 1. With reminder set, tap **Cancel Reminder**. 2. Confirm card returns to **Set Reminder**. |
| **Expected** | `reminderCanceled` feedback; other cards in the same **date group** refresh to unset (see test 9). Notification canceled on OS (verify in system notification settings / pending list). |
| **Browser now** | Cancel control **not visible** until native schedule succeeds (test 4). |

---

### 6. Change Reminder UI

| | |
|--|--|
| **Verification** | **Native app (future)** |
| **Steps** | 1. With reminder set, tap **Change Reminder**. 2. Pick a **future** date in the date control; confirm. |
| **Expected** | Change prompt (`reminderChangePrompt`), confirm/cancel actions; on save, `reminderRescheduled`. Past date shows `reminderChangeDateMustBeFuture`. |
| **Browser now** | Change flow **not reachable** without native “Reminder set” state. |

---

### 7. Reminder date change does not change Vaccine Checker recommendation

| | |
|--|--|
| **Verification** | **Native app (future)** (primary); **Browser now** — confirm Checker text unchanged after failed/unavailable Set Reminder |
| **Steps** | 1. Record **dose label**, **timing lines**, and **recommended due date** on card. 2. Complete **Change Reminder** to a different **notification** date (native). 3. Re-read same card and re-run calculation if needed. |
| **Expected** | Checker **medical** date and dose labels **unchanged**; only reminder notification timing changes. |
| **Browser now** | After tap Set Reminder (unavailable), verify card **timing lines unchanged**. |

---

### 8. Duplicate prevention behavior

| | |
|--|--|
| **Verification** | **Native app (future)** |
| **Steps** | 1. Set reminder for an exact-date card. 2. Tap **Set Reminder** again on the **same** card or another card in the **same date group**. 3. Leave Results and return (same session data). |
| **Expected** | **One** pending OS notification per **child scope + display date**; no duplicate notifications for the same logical group. UI shows **Reminder set**, not multiple schedules. |
| **Browser now** | **Cannot verify** OS duplicate prevention; repeated tap shows unavailable or (on native WebView only) would re-schedule with cancel-before-schedule — **verify on device**. |

---

### 9. Multiple vaccines with the same date

| | |
|--|--|
| **Verification** | **Browser (partial)** — both cards show Set Reminder; **Native app (future)** — single grouped notification |
| **Steps** | 1. Build Results with **two+ eligible** recommendations with the **same** `recommendedDate`. 2. On **either** card, tap **Set Reminder** (native). |
| **Expected (UI)** | Both cards in group should move to **Reminder set** after refresh when native schedule succeeds. |
| **Expected (native OS)** | **One** notification whose body lists combined doses (e.g. “PCV Dose 2, …”). |
| **Browser now** | Confirm **both** cards show reminder block with **same** display date; Set Reminder on each does not crash (unavailable message in browser). |

---

### 10. Multiple vaccines with different dates

| | |
|--|--|
| **Verification** | **Browser (partial)**; **Native app (future)** — separate notifications |
| **Steps** | 1. Results with two eligible vaccines on **different** due dates. 2. Set reminder on each (native). |
| **Expected** | **Separate** reminder groups; **two** OS notifications on native. Each card manages its own date group. |
| **Browser now** | Two cards each with distinct long dates and **Set Reminder**; taps handled gracefully. |

---

### 11. Overdue recommendation behavior

| | |
|--|--|
| **Verification** | **Browser (partial)**; **Native app (future)** — safe fire time |
| **Steps** | 1. Use case where due date is **before** reference date but row is still **eligible** (fixed `recommendedDate`). 2. Confirm existing Checker overdue presentation still shows. 3. Tap **Set Reminder** (native). |
| **Expected (UI)** | Reminder block still shows **original** display date; Set Reminder available. |
| **Expected (native)** | **No** notification scheduled in the past; user sees `reminderOverdueScheduledNote` (safe next-day scheduling). |
| **Browser now** | Overdue **display** + Set Reminder visible; tap → unavailable or (native shell) overdue note — **no past OS fire time**. |

---

### 12. Calendar remains separate from Reminder

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | 1. On Results footer, use **Add to calendar** for an eligible **recommendedDate** row. 2. Without using Set Reminder, confirm no notification permission prompt (browser: N/A). 3. Use Set Reminder without using Calendar. |
| **Expected** | Footer **Add to calendar** still present and works (e.g. `.ics` download in browser). Calendar does **not** require notification permission. Reminder does **not** remove or replace Calendar. |
| **Native app (future)** | Calendar share/native prompt still independent of notification permission. |

---

### 13. English UI

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | Set checker language to **English**; open Results covering exact-date, conditional, and footer Calendar. |
| **Expected** | Set Reminder, conditional unavailable text, calendar labels (`addToCalendar`), and error/success strings match **English** keys in `src/translations/en.ts` (natural reading on screen). RTL not applied to EN content. |

---

### 14. Arabic UI

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | Set checker language to **Arabic**; repeat cases as in test 13. |
| **Expected** | Conditional message uses approved AR string; reminder actions and feedback use AR translations; date long-form uses **ar-EG** locale where shown; layout readable on Results cards. |

---

### 15. Mobile-responsive Results UI

| | |
|--|--|
| **Verification** | **Browser now** |
| **Steps** | 1. Open Results on a **narrow viewport** (Safari/Chrome device mode or phone browser). 2. Scroll Due now / Upcoming sections. 3. Interact with reminder buttons and footer Calendar. |
| **Expected** | Reminder block (`vaccine-checker-reminder-actions`) does not break card layout; buttons wrap/readable; footer actions usable; no horizontal overflow blocking Set Reminder or Calendar. |
| **Native app (future)** | Repeat in **WebView** on small phones after Capacitor app exists. |

---

## Sign-off template (web-only)

| # | Test | Browser now | Pass / Fail | Notes |
|---|------|-------------|-------------|-------|
| 1 | Exact date → Set Reminder | ✓ | | |
| 2 | Conditional → no button | ✓ | | |
| 3 | Unavailable / permission graceful | partial | | |
| 4 | Reminder set state | native only | N/A browser | |
| 5 | Cancel | native only | N/A browser | |
| 6 | Change | native only | N/A browser | |
| 7 | Checker date unchanged | partial / native | | |
| 8 | Duplicate prevention | native only | N/A browser | |
| 9 | Same date grouping | partial / native | | |
| 10 | Different dates | partial / native | | |
| 11 | Overdue | partial / native | | |
| 12 | Calendar separate | ✓ | | |
| 13 | English | ✓ | | |
| 14 | Arabic | ✓ | | |
| 15 | Mobile-responsive | ✓ | | |

**Tester:** _______________  
**Date:** _______________  
**Commit tested (optional):** _______________  
**Native device QA (future):** Not performed — Android/iOS apps not ready.

---

## Related docs

- [`docs/NOTIFICATION-ARCHITECTURE-AUDIT.md`](NOTIFICATION-ARCHITECTURE-AUDIT.md)
- [`docs/PHASE-1B-REMINDER-IMPLEMENTATION.md`](PHASE-1B-REMINDER-IMPLEMENTATION.md)
- [`docs/PHASE-1A-MOBILE-PORT-REPORT.md`](PHASE-1A-MOBILE-PORT-REPORT.md)
