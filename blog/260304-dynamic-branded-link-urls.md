---
title: "Dynamic client-branded Hosted Link URLs"
date: "2026-03-04"
tags: ["Product", "Update", "Link"]
authors: pmckinney
---

Every client using our Hosted Link auth flow now automatically gets a personalized branded Link URL.

<!--truncate-->

## What's new?

When you create a company and share a [Hosted Link](/auth-flow/authorize-hosted-link) URL from the [Codat Portal](https://app.codat.io), the URL now automatically includes a URL-safe version of your Codat client name. For example, if your client name is "Platypus Payments", your Link URLs will look like this:

```
link.codat.io/platypus-payments/company/{companyId}
```

Previously, [Hosted Link](/auth-flow/authorize-hosted-link) clients who wanted a custom Link URL, had to ask us for a manual code change. Our new approach generates branded URLs dynamically based on your client name, so every client benefits from a professional, branded experience from day one.

:::tip Existing URLs are unaffected
All existing Hosted Link URLs will continue to work exactly as before. Any current workflows or methods of generating Link URLs are unaffected by this change.
:::

### Why does this matter?

- **Instant branding:** Your branded Link URL is ready from the instant you start using Codat.
- **Increased trust:** Your customers recognize your company name in the URL when connecting their financial data.
- **Professional experience:** Every Link URL you share is consistent and on-brand, delivering a polished onboarding experience.

This update builds on our recently added [enhanced company branding in Link](/updates/260218-link-branding-updates), which introduced logos, brand colors, and hero images to the Link flow. Together, these updates mean your brand is present from the first thing your customers see all the way through the connection experience.

## Who is this relevant for?

This update applies to all clients using [Hosted Link](/auth-flow/authorize-hosted-link).

## How to get started?

No action is required. From **March 13, 2026**, your newly generated Link URLs will automatically use your client name. All existing URLs will continue to function as expected.

To further customize the Link experience with your logo, brand colors, and hero image, see our documentation on [Branding settings](/auth-flow/customize/branding) and [Link settings](/auth-flow/customize/customize-link).
