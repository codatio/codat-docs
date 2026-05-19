---
title: "Codat now speaks French 🇨🇦"
date: "2026-05-22"
tags: ["Product", "Update", "Link", "Portal"]
authors: avanjani
---

We're rolling out Quebec French (fr-CA) localization across the client-facing surfaces that financial institutions and their SMB clients use every day.

<!--truncate-->

## What's new?

On **May 22, 2026**, we are shipping a first-class fr-CA experience across Link, the Codat Portal, customer-facing reports, and payment method inference. This enables our clients operating in Canada to serve French-speaking Quebec SMBs in line with the Charter of the French Language (Bill 96), and lays the groundwork for any future language we ship.

All fr-CA copy has been reviewed by French-speaking reviewers, so the language reflects real Quebec banking terminology rather than generic machine translation.

## What's included

This release covers four client-facing surfaces. fr-CA is gated by a language toggle and the client's Link configuration — existing English-only deployments see no change.

### Link journey

Full fr-CA translation of the SMB-facing connect flow, including:

- Platform selection
- OAuth handoff copy
- Error states
- In-modal language toggle (top-right, globe icon and locale code)

![Link platform selection in fr-CA, with the locale toggle visible](/img/updates/260522-fr-ca-link-select.png)

![Link OAuth consent screen in fr-CA](/img/updates/260522-fr-ca-link-consent.png)

Supported integrations in this release:

- QuickBooks Online
- QuickBooks Desktop
- NetSuite
- Sage Intacct
- Dynamics 365 Business Central
- Dynamics 365 Finance & Operations
- Workday
- FreshBooks
- Xero
- All intelligent upload flows

### Portal UI

The Spend Insights, Companies, and Create Company surfaces are translated end-to-end, with locale-aware date and number formatting. The most-used advisor pages are now available in French.

![Spend Insights in the Codat Portal rendered in fr-CA](/img/updates/260522-fr-ca-portal.png)

### Spend Reports

Customer-facing Spend Reports are localized — field names, labels, section headers, and static copy all render in fr-CA when the report is generated for a French locale client. The underlying data remains language-independent, and CSV exports stay locale-neutral for downstream pipelines.

### Payment method inference

Payment method mapping inference now handles fr-CA source data, so ERP exports with French account names, categories, and descriptions map correctly into Codat's canonical schema without manual cleanup.

## Why it matters

- **Compliance, not just translation.** Bill 96 requires that French experiences be available with comparable quality to English across customer-facing digital products. This release meets the customer-facing bar.
- **Ready for Canadian FIs.** Any client with Quebec operations now has a fr-CA-ready stack to launch against — no per-client translation effort.
- **Foundation for multilingual.** The localization infrastructure built here — string catalogs, locale toggle, and the client review workflow — is the platform for any future language we ship.

## Who is this relevant for?

This update is relevant for any client operating in Canada, and especially for financial institutions onboarding SMBs in Quebec who need to meet Bill 96 requirements.

## How to get started?

fr-CA is opt-in per client at the configuration level. To enable it for your deployment, [contact Codat support](mailto:support@codat.io). We'll work with you to align on the pages and integrations in scope before enabling.
