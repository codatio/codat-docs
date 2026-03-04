---
title: "Dynamic client-branded Link URLs"
date: "2026-03-04"
tags: ["Product", "Update", "Link"]
authors: pmckinney
---

Every client now gets a personalized, branded Link URL automatically — no code changes or manual configuration required.

<!--truncate-->

## What's new?

When you create a company and share a [Link](/auth-flow/overview) URL from the [Codat Portal](https://app.codat.io), the URL now automatically includes a URL-safe version of your client name. For example, if your client name is "Platypus Payments", your Link URLs will look like:

```
link.codat.io/platypus-payments/company/:companyId
```

Previously, providing a custom-branded Link URL required a manual code change for each client. This new approach generates branded URLs dynamically based on your client name, so every client benefits from a professional, branded experience from day one.

:::tip Existing URLs are unaffected
All existing Link URLs will continue to work exactly as before. Any current workflows or methods of generating Link URLs are fully unaffected by this change.
:::

### Why does this matter?

- **Instant branding:** Your branded Link URL is ready from the moment you start using Codat — no setup or configuration needed.
- **Increased trust:** Your customers see your company name in the URL when connecting their financial data, reinforcing that they are interacting with a service they recognize.
- **Professional experience:** Every Link URL you share is consistent and on-brand, helping you deliver a polished onboarding experience to your customers.

This builds on our recent [enhanced company branding in Link](/updates/260218-link-branding-updates), which introduced logos, brand colors, and hero images to the Link flow. Together, these updates mean your brand is present from the very first thing your customers see — the URL — all the way through the connection experience.

## Who is this relevant for?

This update applies to all clients using [hosted Link](/auth-flow/overview).

## How to get started?

No action is required. From **March 13, 2026**, your Link URLs will automatically use your client name. All existing URLs will continue to function as expected.

To further customize the Link experience with your logo, brand colors, and hero image, see our documentation on [Branding settings](/auth-flow/customize/branding) and [Link settings](/auth-flow/customize/customize-link).
