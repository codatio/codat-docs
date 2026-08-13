---
title: "Manage connections and reconnect companies seamlessly with embedded Link"
date: "2026-08-12"
tags: ["Product", "Update", "Link"]
hide_table_of_contents: true
authors: avanjani
---

You can now offer your customers a first-class connection management experience in Link, making it easy for business users to view, disconnect, and reconnect their linked companies - and ensuring they reconnect the right one.

<!--truncate-->

## What's new?

Previously, when a company's connection was lost - through token expiry, a disconnect, or user action - there was no dedicated way to reconnect it. Users had to go through the standard Link flow again, with no guarantee they'd reconnect the same accounting file or legal entity they originally linked. Connecting a different entity by mistake meant broken data continuity and confused downstream reporting.

With the new manage connections experience, business users can:

- See what they previously connected and relink it directly in Link.
- Disconnect an existing connection when they need to revoke access.
- Reconnect with confidence - when a user authenticates with their accounting software, Link validates that the company they're reconnecting matches the one originally connected.
- Catch mistakes before they happen - if the identities don't match, the user sees a clear warning that they're about to connect a different company, with the option to confirm or go back and select the correct one.

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
      src="/img/updates/Relink-1.png"
      alt="A disconnected Oracle NetSuite connection in Link showing connection details and a Reconnect button"
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
      Reconnect a disconnected platform
    </figcaption>
  </figure>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/Relink-2.png"
      alt="A warning in Link showing that the selected company does not match the previously connected company, with options to reselect or cancel"
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
      Mismatch warning when reconnecting
    </figcaption>
  </figure>
  <figure style={{ margin: 0, textAlign: "center" }}>
    <img
      src="/img/updates/Disconnect.png"
      alt="A connected Xero connection in Link showing connection details and a Disconnect button"
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
      Option to disconnect a connected platform
    </figcaption>
  </figure>
</div>

The reconnection flow is available for all platforms. Validation against the previously connected company is currently available for QuickBooks Online, Oracle NetSuite, and Sage Intacct.

Relinking is available in embedded Link, and in [Hosted Link](/auth-flow/authorize-hosted-link) for clients using [secure linking](/updates/250110-secure-linking) with one-time passwords (OTPs) enabled.

## Who is it relevant for?

Any client whose customers connect accounting platforms through Link - particularly banks and lenders that rely on continuous, uninterrupted data from the same company for insights, monitoring, and credit decisioning.

## How to get started?

The manage connections experience is available in the Link SDK. To set it up:

1. **Enable the Manage connections setting** in the [Codat Portal](https://app.codat.io) under [Settings > Auth flow > Link](https://app.codat.io/settings/link-settings/onboarding) to let authenticated users view and manage their existing connections. You can also customize the title and subtitle shown on the manage connections screen.

   ![The Manage connections setting in the Codat Portal's Link settings, with a toggle and customizable title and subtitle](/img/updates/manageconnection.png "Manage connections setting in the Codat Portal")

2. **Register your domain** using the [Set CORS settings](/platform-api#/operations/set-cors-settings) endpoint so the component can make authenticated requests from your site.
3. **Get a company access token.** Authenticated features require an access token, retrieved server-side from the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint (`GET /companies/{companyId}/accessToken`). Tokens are valid for 24 hours and scoped to a single company.
4. **Pass the token to the Link SDK** via the `accessToken` prop when initializing the component.

Using Hosted Link? Relinking is available there too when one-time passwords (OTPs) are enabled. We highly recommend setting this up - follow the instructions in our [secure linking](/updates/250110-secure-linking) update.

Reach out to your account manager or our support team if you'd like help getting set up.
