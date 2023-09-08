---
title: "Get started with Lending API"
sidebar_label: Get started
description: "Instructions for getting started with Lending and tables of supported features for accounting, banking and commerce data sources"
---

This document helps you get started with Lending, and covers both the API and the no-code option available in the Portal.

## Enable Lending

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Company**.
3. In the left hand navigation, click _Lending_.

![Lending Profit and Loss page](/img/old/cdf1e35-Banner_1.png)

4. If you have Lending enabled, you will be taken to the **Lending Profit and Loss** page. For more information, visit the [Lending in the Portal](/lending/portal/overview) documentation.
5. If you don't have Lending access, you can enable it by following the onscreen prompt.

## Prerequisites

Configure your data type settings. Click on the **Settings** tab in the top menu and then _Data types_. Ensure you have the following data types enabled:

- Company
- Chart of Accounts
- Balance Sheet
- Profit and Loss
- Bank Accounts
- Bank Transactions
- Banking - Accounts
- Banking - Transactions
- Banking - Transaction Categories
- Banking - Account Balances
- Commerce - Company Info
- Commerce - Customers
- Commerce - Orders

If you don't have all of these enabled, some features of Lending will not work.

Configure your _Link settings_. Click on the **Settings** tab in the top menu and then navigate to _Auth flow > Link_. Scroll down to _Integration categories_ and ensure _Accounting_, _Commerce_ and _Banking_ data types are enabled.

## Features

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=303232670&amp;single=false&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

**Categories**

The chart of accounts defines the financial structure of a company by providing a list of all accounts used in the company's general ledger. The Categories feature lets you and your customers categorize transactions into one of the account types, such as Assets, Liabilities, Income, Expenses. There are 162 account categories defined that businesses can use.

Other features of Lending leverages the Categories feature and are reliant on complete and accurate categorizations to produce meaningful results. See our categories documentation:

- Portal: Categorization of accounts
- API: Categorization of accounts

**Enhanced Financials**

These are fully categorized profit and loss, and balance sheet statements broken down by three levels of categories and the company's Chart of Accounts.

**Accounting Financial Metrics**

This feature provides a set of pre-calculated accounting ratios and metrics used to assess company financial performance.

**Data integrity**

The Data Integrity feature matches bank accounts and transactions reported in an accounting package against bank accounts and transactions reported in banking sources.

**Commerce Metrics**

This feature provides a set of pre-calculated commerce ratios and metrics used to assess company financial performance.

We only produce commerce metrics for platforms that support the following data types:

- Commerce - Company Info
- Commerce - Customers
- Commerce - Orders

## How can you use it

Lending is available as a no-code product in the Portal or as APIs to incorporate in your own solutions.

### Portal

Visit our [Lending in the Portal](/lending/portal/overview) documentation.

### API

Explore the features that make up Lending:

- [Categories](/lending/categories)
- [Enhanced Financials](/lending/enhanced-financials/overview)
- [Accounting Metrics](/lending/metrics/accounting/api-financial-metrics)
- [Commerce Metrics](/lending/metrics/commerce/overview)
- [Data Integrity](/lending/data-integrity/overview)
