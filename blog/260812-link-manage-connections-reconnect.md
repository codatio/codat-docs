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

<!-- TODO: add screenshot - manage connections view -->

<!-- TODO: add screenshot - company mismatch warning -->

The reconnection experience is available for QuickBooks Online, Oracle NetSuite, and Sage Intacct connections via embedded Link.

## Who is it relevant for?

Any client whose customers connect accounting platforms through embedded Link - particularly banks and lenders that rely on continuous, uninterrupted data from the same company for insights, monitoring, and credit decisioning.

## How to get started?

The manage connections experience is available in the Link SDK. To set it up:

1. **Enable the manage connections setting** in your Link configuration to let authenticated users view and manage their existing connections.
2. **Get a company access token.** Authenticated features require an access token, retrieved server-side from the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint (`GET /companies/{companyId}/accessToken`). Tokens are valid for 24 hours and scoped to a single company.
3. **Pass the token to the Link SDK** via the `accessToken` prop when initializing the component.
4. **Register your domain** using the [Set CORS settings](/platform-api#/operations/set-cors-settings) endpoint so the component can make authenticated requests from your site.

Reach out to your account manager or our support team if you'd like help getting set up.
