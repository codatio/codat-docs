---
title: "Customize the consent screen section headers in Link"
date: "2026-08-14"
tags: ["Product", "Update", "Link"]
authors: pmckinney
---

You can now change the wording of every section header on the Link consent screen, so the language your customers see matches the terminology they already use in your product.

<!--truncate-->

## What's new?

The consent screen is the final step before a user connects their platform. It groups what they're agreeing to into five expandable sections: _Purpose_, _Access_, _Account information_, _Platform data_, and _Retention_.

Previously, the body content of each section was customizable, but the headers were fixed. Clients told us the default wording didn't always match what their users expect, which risked confusion at the most sensitive point in the flow.

You can now customize all five headers, for each of the accounting, banking, and commerce integration categories independently.

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
      src="/img/updates/260814-consent-section-headers.png"
      alt="The Link consent screen showing the Purpose, Access, Account information, Platform data, and Retention sections"
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
      The five customizable sections on the consent screen
    </figcaption>
  </figure>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/260814-consent-header-settings.png"
      alt="The consent section of the Link editor in the Codat Portal, showing a header field alongside the body content field for each consent section"
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
      Header fields in the Codat Portal, alongside the existing content fields
    </figcaption>
  </figure>
</div>

Each header accepts up to 50 characters of plain text. Leave a field empty and Link falls back to the default wording, so nothing changes visually until you set a header yourself.

## Who is this relevant for?

This update is relevant for all clients using [Link](/auth-flow/overview) to connect their customers' financial data, whether through [Hosted Link](/auth-flow/authorize-hosted-link) or the [Link SDK](/auth-flow/authorize-embedded-link).

It's especially useful if your product or your regulatory environment uses specific terminology for data sharing, and you want the consent screen to speak the same language as the rest of your onboarding.

## How to get started?

No action is required. Your consent screen keeps its current wording unless you choose to change it.

To customize a header in the [Codat Portal](https://app.codat.io):

1. Navigate to **[Settings > Auth flow > Link > Onboarding](https://app.codat.io/settings/link-settings/onboarding)**.
2. Find the **Data access consent** section for the relevant integration category.
3. Enter your wording in the header field that sits alongside each section's content field, then save.

If you're using the Link SDK, you can also set the headers in code using the `text` option:

```javascript
text: {
  "accounting.consents.headers.purpose": "Why we need your data",
  "accounting.consents.headers.retention": "How long we keep it",
}
```

For more detail, see [Link settings in Portal](/auth-flow/customize/customize-link#data-access-consent) and the [custom text options](/auth-flow/customize/sdk-customize-code#custom-text) reference.
