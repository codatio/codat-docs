---
title: "A simpler Intelligent Upload journey in Link, with new ways to get help"
date: "2026-10-26"
tags: ["Product", "Update", "Link"]
hide_table_of_contents: true
authors: rodages
---

Your customers can now share their accounting reports through Intelligent Upload on a single, guided screen. They see what each file needs to contain, can swap out a wrong file before submitting, and can reach you for help along the way.

<!--truncate-->

## What's new?

Intelligent Upload is how customers whose accounting software has no direct integration share their data for [Spend Insights](/spend-insights/overview). The previous journey took them through a separate screen for each report, with export instructions that were often out of date, and gave them no way to replace a file once uploaded.

The new journey is one screen:

- Each report (**Vendors**, **Bills**, **Payments**, and optionally **Expenses**) lists the fields its file should contain and says it needs to cover the last 12 months.
- Customers upload a CSV or XLSX file for each report, in any order, and can replace a file at any time before submitting.
- If the connection drops midway, nothing is lost: one tap resends the files we haven't received. If we can't use a file, we say which one, so they re-upload only that.
- A **Files received** screen confirms what they shared and what happens next.

<div
  style={{
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    margin: "1.5rem 0",
  }}
>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/261026-intelligent-upload-upload.png"
      alt="The Intelligent Upload screen in Link, with the Vendors section expanded to show the required fields, a link to export instructions, and a drop zone for a CSV or XLSX file"
      style={{
        height: "440px",
        width: "auto",
        maxWidth: "100%",
        border: "1px solid var(--ifm-color-emphasis-200)",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
    />
    <figcaption
      style={{
        width: 0,
        minWidth: "100%",
        marginTop: "0.75rem",
        fontSize: "0.85rem",
        color: "var(--ifm-color-emphasis-600)",
      }}
    >
      Required fields and a drop zone for each report
    </figcaption>
  </figure>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/261026-intelligent-upload-submission-failed.png"
      alt="A sheet in Link saying the files couldn't be submitted, with the uploaded files kept, a Try submitting again button, and a Contact bank button"
      style={{
        height: "440px",
        width: "auto",
        maxWidth: "100%",
        border: "1px solid var(--ifm-color-emphasis-200)",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
    />
    <figcaption
      style={{
        width: 0,
        minWidth: "100%",
        marginTop: "0.75rem",
        fontSize: "0.85rem",
        color: "var(--ifm-color-emphasis-600)",
      }}
    >
      Files are kept if submission fails
    </figcaption>
  </figure>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/261026-intelligent-upload-files-received.png"
      alt="The Files received screen in Link listing the Vendors, Bills, and Payments files, a What happens next banner, a Complete button, and a Need assistance? Contact us link"
      style={{
        height: "440px",
        width: "auto",
        maxWidth: "100%",
        border: "1px solid var(--ifm-color-emphasis-200)",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
    />
    <figcaption
      style={{
        width: 0,
        minWidth: "100%",
        marginTop: "0.75rem",
        fontSize: "0.85rem",
        color: "var(--ifm-color-emphasis-600)",
      }}
    >
      Confirmation of the files received
    </figcaption>
  </figure>
</div>

### Two ways for customers to reach you

Set either of these in your Link settings and it appears in the journey. Leave it empty and nothing changes.

- **File upload support email**: if submitting fails, a **Contact bank** button opens an email to this address.
- **File upload scheduling link**: a **Need assistance? Contact us** link on every screen opens your booking page, so customers can book a call for help exporting their files. Use Google Calendar, Calendly, or any other scheduling link.

![The Onboarding tab of the Link settings in the Codat Portal, showing the File upload support email and File upload scheduling link fields](/img/updates/261026-intelligent-upload-link-settings.png)

The journey is available in English and [Canadian French](/updates/260522-french-canadian-localization).

## Who is this relevant for?

[Spend Insights](/spend-insights/overview) clients whose customers share their data through [Intelligent Upload](/spend-insights/resources/link-file), in [Hosted Link](/auth-flow/authorize-hosted-link) or the [Link SDK](/auth-flow/authorize-embedded-link).

## How to get started?

No action is required. Every customer who starts an Intelligent Upload gets the new journey.

To add your contact details in the [Codat Portal](https://app.codat.io):

1. Go to **[Settings > Auth flow > Link > Onboarding](https://app.codat.io/settings/link-settings/onboarding)**.
2. Fill in **File upload support email** and **File upload scheduling link**. Changes are saved automatically.

If you use the Link SDK, you can override both for a session:

```javascript
options: {
  supportContactEmail: "support@example.com",
  codatSupportBookingUrl: "https://calendar.app.google/abc123",
}
```

For more detail, see [Link settings in Portal](/auth-flow/customize/customize-link) and the [Link SDK options](/auth-flow/customize/sdk-customize-code) reference.
