---
title: "2026-07-02: Deprecation of the Shopify public apps connection method"
date: "2026-07-02"
tags: ["Deprecation", "Shopify"]
authors: codatchris
---

Codat is deprecating the **public apps** connection method for the Shopify integration in favour of the simpler [custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps) approach.

<!--truncate-->

## What's changing

The Shopify integration historically supported two ways for a merchant to connect their store:

- **Custom apps** — the merchant creates a custom app in their Shopify admin and provides the store name, client ID, and client secret during the Codat Link flow. This is the standard method.
- **Public apps** — the client builds a public Shopify app, submits it to Shopify for approval, hosts an authorization endpoint, and configures the app's credentials in Codat.

The **public apps** method is being deprecated and removed. It places a significant setup burden on clients, who must create and submit a public Shopify app for Shopify's review and approval, and develop and host an endpoint to authorize each merchant. Custom apps remove these requirements, so we are standardizing on the simpler custom apps approach for all Shopify connections.

## Alternatives

Use the [custom apps connection method](/integrations/commerce/shopify/commerce-shopify-custom-apps) for all Shopify connections. Compared with public apps, custom apps:

- Don't require you to build and submit your own public Shopify app.
- Don't require you to build and host a merchant authorization endpoint.
- Guide the merchant through creating the app and entering their credentials with an in-flow, step-by-step **Find your Shopify credentials** section.

## Action required

For the vast majority of clients, **no action is required** — Shopify connections already use custom apps.

If you currently rely on the public apps connection method, switch to [custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps) before connecting any new merchants.

If you have questions or need assistance, reach out to your dedicated Codat representative or contact our [support team](mailto:support@codat.io).

## Expected impact if no action is taken

The public apps connection method will stop working, and merchants will no longer be able to start new connections through it. Existing, already-linked Shopify connections are unaffected and continue to sync. Any client still onboarding merchants through public apps must move to custom apps to continue connecting new stores.
