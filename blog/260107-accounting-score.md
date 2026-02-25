---
title: "Lending: Accounting Score metrics via API"
date: "2026-01-07"
tags: ["Product", "Update", "Lending"]
authors: ivasiutkova
---

You can now assess the quality and reliability of a company’s financial data using Lending's new **Accounting Score** metrics, available via the Lending API.

<!--truncate-->

:::note Available as beta release
This endpoint is part of a beta release. Please contact your Account Manager if you want to enable it.
:::

## What's new?

The **Accounting Score** metrics are now available via API as part of Codat’s [Lending](/lending/overview) solution. The score provides a high-level quality assessment of a company’s accounting data across five dimensions:

- **Data completeness** checks whether all required financial statements and documentation are available.
- **Data accuracy** identifies errors and anomalies.
- **Data consistency** ensures consistent application of accounting principles over time.
- **Data presentation** ensures the clarity and readability of financial data.
- **Accounting practices** verify alignment with GAAP standards.

In addition to the overall score, the API identifies the **top three accounting issues** for a company, allowing lenders to quickly focus on the most impactful risks. This helps lenders:

- Understand the reliability of borrower data earlier in the underwriting process.
- Reduce manual review by highlighting the key accounting concerns upfront.
- Make more confident, efficient credit risk decisions.

The Accounting Score is available across all accounting integrations supported by the [Lending](/lending/overview) solution.

## Who is this relevant for?

This update is relevant for Lending clients who need deeper insights into their customers’ data that support financial analysis and credit decisioning.

## How to get started?

Contact your **Account Manager** or our **Support Team** to enable this feature. You must be using our Lending solution to leverage the **Accounting Score** metrics.

Once enabled, refer to [Get financial summary](/lending-api#/operations/get-financial-summary) documentation to use the metrics in your application.
