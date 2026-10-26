---
title: "A simpler Intelligent Upload journey in Link, with new ways to get help"
date: "2026-10-26"
tags: ["Product", "Update", "Link"]
hide_table_of_contents: true
authors: rodages
---

We've redesigned the Intelligent Upload journey in Link. Your customers now see exactly what each file needs to contain, upload everything on a single screen, and can replace a file before they submit. Two new Link settings let them reach you for help along the way.

<!--truncate-->

## What's new?

Intelligent Upload lets customers whose accounting software has no direct integration share their data for [Spend Insights](/spend-insights/overview) by uploading reports exported from that software.

Previously, the journey walked customers through one screen per report, with step-by-step export instructions for their platform. Customers couldn't skip or revisit a step, couldn't replace a file once it was uploaded, and weren't told how much history the reports needed to cover. In practice, many needed a call with their lender to get through it.

The new journey has two steps: upload, then confirmation.

- **One upload screen.** The four reports we need appear as expandable sections: _Vendors_, _Bills_ and _Payments_ are required, and _Expenses_ is optional. Each section lists the fields the file should contain and states that we need the last 12 months of data. Where we have export guidance for the customer's platform, a **How to export** link opens it in a new tab.
- **Upload in any order, and fix mistakes.** Customers choose or drop a CSV or XLSX file of up to 100 MB into each section. Link checks the file type and size immediately, and a file can be replaced or removed at any point before submitting. **Submit files** becomes available once the three required files are in place.
- **A clear confirmation.** After submitting, customers see a **Files received** screen that lists the reports they shared and explains what happens next.
- **Recovery when something goes wrong.** If the connection drops during submission, the files stay in place and **Try submitting again** resends only the files we haven't accepted yet. If we can't use a file, Link marks that section so the customer can re-upload just that one.

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

### New support settings

Two new fields in your Link settings let customers get help without leaving the journey. Neither is shown in Link until you set it.

- **File upload support email.** When a submission fails, the error message includes a **Contact bank** button that opens a new email to this address.
- **File upload scheduling link.** Every Intelligent Upload screen shows a **Need assistance? Contact us** link that opens this URL in a new tab, so customers can book a call for help exporting their files. Use any scheduling link, such as a Google Calendar or Calendly booking page.

![The Onboarding tab of the Link settings in the Codat Portal, showing the File upload support email and File upload scheduling link fields](/img/updates/261026-intelligent-upload-link-settings.png)

The new journey is available in English and [Canadian French](/updates/260522-french-canadian-localization).

## Who is this relevant for?

All [Spend Insights](/spend-insights/overview) clients whose customers share their data through [Intelligent Upload](/spend-insights/resources/link-file), whether through [Hosted Link](/auth-flow/authorize-hosted-link) or the [Link SDK](/auth-flow/authorize-embedded-link).

It's especially useful for onboarding and customer success teams who currently join calls to walk customers through the upload.

## How to get started?

No action is required. The new journey is live for every customer who starts an Intelligent Upload.

To add the support options in the [Codat Portal](https://app.codat.io):

1. Navigate to **[Settings > Auth flow > Link > Onboarding](https://app.codat.io/settings/link-settings/onboarding)**.
2. Enter your **File upload support email** and **File upload scheduling link**. Changes are saved automatically.

If you're using the Link SDK, you can override either value for a session with the `supportContactEmail` and `codatSupportBookingUrl` options:

```javascript
options: {
  supportContactEmail: "support@example.com",
  codatSupportBookingUrl: "https://calendar.app.google/abc123",
}
```

For more detail, see [Link settings in Portal](/auth-flow/customize/customize-link) and the [Link SDK options](/auth-flow/customize/sdk-customize-code) reference.
