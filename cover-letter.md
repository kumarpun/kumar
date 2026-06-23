Hello,
I'm a Software QA Engineer from Nepal with 5+ years of dedicated testing experience and would like to apply for this part-time QA role. A reliable Software QA Engineer always motivated to deliver complete test automation solutions using the latest technology.

## QA Testing Experience

- 5+ years of professional software testing across web, mobile, and API layers.
- Full SDLC involvement: requirement analysis, test case design, test execution, defect reporting, regression, and release sign-off.
- Hands-on with manual testing, automation, API testing, GraphQL testing, performance/load testing (JMeter).
- Experience on Cypress, Playwright, Appium, CI/CD.

## Platforms / Apps I Have Tested

A few production platforms I have personally tested and continue to maintain test suites for:

- EnthuZiastic — community learning platform; web + mobile, GraphQL API, Cypress + Appium automation.
- Australian Tenders — tender marketplace; Cypress automation, Bitbucket Pipelines CI.
- DiGii Social  — school-based social platform with real-time WebSocket features; included socket testing.
- Plant with Willow  —  mobile e-commerce; Flutter mobile app testing.
- BD Water — water license trading platform.

## Sample Bug Report — Login Module

Below is a sample bug report in the format I use day-to-day. This one is from the Login module.

---

Bug ID: BUG-LOGIN-0427
Title: Login allows submission with whitespace-only password; backend returns 500 instead of validation error
Module / Feature: Authentication → Login
Reported By: Kumar (QA)
Date Reported: 2026-05-15
Environment:
- App: Web (staging)
- Browser: Chrome 124 (macOS 14.4)
- Build: `web@1.42.0-rc.3`
- API commit: `a3f9c12`

Severity: High
Priority: P1
Status: Open
Reproducibility: 5 / 5 (always)

Pre-conditions:
- Valid registered user exists in staging.
- User is logged out; cookies cleared.

Steps to Reproduce:
1. Navigate to the staging Login page.
2. Enter a valid registered email in the Email field.
3. Enter five spaces (`"     "`) in the Password field.
4. Click Sign In.

Expected Result:
- Client-side validation blocks submission and shows inline error: "Password is required."
- If request is sent, API returns `400 Bad Request` with `{ "error": "INVALID_CREDENTIALS" }`.
- User remains on the login page.

Actual Result:
- Form submits without client-side validation.
- API responds with `500 Internal Server Error`.
- UI shows generic toast "Something went wrong. Please try again later."
- Sentry event `LOGIN-500-9F2A` raised on backend.

Evidence:
- Screenshot: `bugs/BUG-LOGIN-0427/01-form-submit.png`
- Screen recording: `bugs/BUG-LOGIN-0427/repro.mp4` (00:00–00:18)

Regression Areas to Re-test After Fix:
- Valid login (happy path).
- Empty password submit.
- Whitespace-only password submit.
- Password with leading/trailing whitespace around a real password.

---

The requirement list maps almost one-to-one with my day job: I'm responsive across overlapping hours, comfortable working async, and used to writing clear bug reports with repro steps, logs, and screen recordings.

Thanks for the consideration — looking forward to hearing from you.

Best regards,
Kumar
