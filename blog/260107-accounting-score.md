---
title: "Introducing Accounting Score Metrics via API"
date: "2026-01-07"
tags: ["Product", "Update", "Lending"]
authors: ivasiutkova
---

You can now assess the quality and reliability of a company’s financial data using the **Accounting Score**, available via API.

<!--truncate-->

:::note Available as beta release
This endpoint is part of a beta release. Please contact your account manager if you want to enable it.
:::

## What's new?

The **Accounting Score** is now available via API as part of Codat’s [Lending](/lending/overview) solution.  
The score provides a high-level assessment of the quality of a company’s accounting data across five key dimensions:
- **Data completeness** – whether all required financial statements and documentation are available
- **Data accuracy** – identification of errors or anomalies
- **Data consistency** – consistent application of accounting principles over time
- **Data presentation** – clarity and understandability of financial data
- **Accounting practices** – alignment with GAAP standards

In addition to the overall score, the API surfaces the **top three accounting issues** identified for a company, allowing lenders to quickly focus on the most impactful risks.

This helps lenders:
- Understand the reliability of borrower data earlier in underwriting  
- Reduce manual review by highlighting key accounting concerns upfront  
- Make more confident, efficient credit risk decisions

The Accounting Score is available across all supported accounting integrations.

## Who is this relevant for?

This update is relevant for clients who need deeper insight into the quality of their customers’ accounting data to support financial analysis and credit decisioning.

## How to get started?

Contact your **Account Manager** or our **Support Team** to enable this feature.  
Once enabled, follow our [API documentation](/lending-api#/operations/get-financial-summary) to implement the Accounting score into your application.
