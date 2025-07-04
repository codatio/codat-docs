---
title: "2026-07-10: Enhanced Cashflow Report: Deprecation of legacy endpoints"
date: "2025-07-03"
tags: ["Deprecation", "Assess", "Enhanced Cashflow"]
authors: ivasiutkova
---

On **July 10, 2026**, the Enhanced Cashflow report type will be deprecated from the Assess endpoints. This follows the launch of its replacement, the **Categorized Bank Statement** report, available  through our report management workflow. The new workflow offers enhanced functionality and a more streamlined user experience.

<!--truncate-->

The new report management workflow includes built-in orchestration for fetching required data from third-party integrations and provides webhook notifications to inform you when the report is ready.

This deprecation affects the following endpoints:

- `POST /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`
- `GET  /data/companies/{companyId}/assess/excel?reportType=enhancedCashFlow`
- `GET  /data/companies/{companyId}/assess/excel/download?reportType=enhancedCashFlow`
- `GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

:::note Note
Only requests for the `enhancedCashFlow` report type will be affected. Other report types using Assess generation endpoints are unaffected.
:::


## Action required

To avoid disruption, update your integration to use the new [**Manage Reports**](/lending-api#/operations/generate-report) endpoints before July 10, 2026. For detailed, step-by-step instructions, refer to our [Migration guide](https://docs.codat.io/lending/features/enhanced-cash-flow-migration).

## Expected impact if no action is taken

If your integration is not updated by **July 10, 2026**, all API calls to the deprecated `enhancedCashFlow` report type will fail. This will prevent the generation of these reports and may disrupt your application's functionality.


:::note Get ahead of the change

You can get ahead of this change by enabling the new Categorized Bank Statement report in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers), or read our [change policy](https://docs.codat.io/using-the-api/change-policy).

:::
