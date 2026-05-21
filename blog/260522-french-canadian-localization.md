---
title: "Codat now speaks French"
date: "2026-05-22"
tags: ["Product", "Update", "Link", "Portal"]
authors: avanjani
---

We're rolling out Canadian French (fr-CA) localization across the client-facing surfaces that financial institutions and their commercial business clients use every day.

<!--truncate-->

## What's new?

On **May 22, 2026**, we are shipping a first-class Canadian French experience across Link, the Codat Portal, Spend Reports, and payment method inference. This enables our clients operating in Canada to serve French-speaking Quebec commercial businesses in line with the Charter of the French Language (Bill 96), and lays the groundwork for any future language we ship.

## What's included

This release covers surfaces across Link, Portal, Spend Reports and Help Docs. Canadian French is gated by a language toggle and the client's Link configuration — existing English-only deployments see no change.

### Link journey

Full Canadian French translation of the commercial business-facing connect flow, including:

- Platform selection
- OAuth handoff copy
- Error states
- In-modal language toggle (top-right, globe icon and locale code)

<div
  style={{
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  }}
>
  <div
    style={{
      flex: "1",
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/img/updates/260522-fr-ca-link-select.png"
      alt="Link platform selection in Canadian French, with the locale toggle visible"
      style={{
        maxHeight: "520px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
      }}
    />
  </div>
  <div
    style={{
      flex: "1",
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/img/updates/260522-fr-ca-link-consent.png"
      alt="Link OAuth consent screen in Canadian French"
      style={{
        maxHeight: "520px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
      }}
    />
  </div>
</div>

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

The Spend Insights, Companies, and Create Company surfaces are translated end-to-end, with locale-aware date and number formatting.

![Spend Insights in the Codat Portal rendered in Canadian French](/img/updates/260522-fr-ca-portal.png)

### Spend Reports

Spend Reports are localized — field names, labels, section headers, and static copy all render in Canadian French when the report is generated for a French locale client. The underlying data remains language-independent, and CSV exports stay locale-neutral for downstream pipelines.

### Payment method inference

Payment method mapping inference now handles Canadian French source data, so ERP exports with French account names, categories, and descriptions map correctly into Codat's canonical schema without manual cleanup.

## Why it matters

- **Compliance, not just translation.** Bill 96 requires that French experiences be available with comparable quality to English across customer-facing digital products. This release meets the customer-facing bar.
- **Ready for Canadian FIs.** Any client with Quebec operations now has a Canadian French-ready stack to launch against — no per-client translation effort.

## Who is this relevant for?

This update is relevant for any client operating in Canada, and especially for financial institutions onboarding commercial businesses in Quebec who need to meet Bill 96 requirements.

## How to get started?

Canadian French is opt-in per client at the configuration level. To enable it for your deployment, [contact Codat support](mailto:support@codat.io). We'll work with you to align on the pages and integrations in scope before enabling.
