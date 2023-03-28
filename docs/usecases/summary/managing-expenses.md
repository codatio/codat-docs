---
title: "Managing expenses with Codat"
sidebar_label: "Managing expenses"
description: "An overview of the expense management use case supported by Codat"
---

Make expense management easier for your small business customers with Codat. We integrate data from corporate cards and expenses management platforms into accounting platforms your customers use.

### How Codat can help

We can support corporate card providers, neobanks, and expense management platforms in their expense management activity by leveraging our [Accounting API](/accounting-api/overview) and [Sync for Expenses](/sync-for-expenses/overview) products. It will provide your customer with greater visibility of spend tracking against expense categories, and automatically reconcile expense payments against bank statement lines.

![](/img/use-cases/summary-pages/795ecc39-managing-expenses.png)

#### Accounting API

We have done the heavy lifting for you by building integrations with a standardized data model to the accounting platforms your customers already use. This gives you access to real-time data that you can pull, create, or update to support your use case.

For example, you can pull the following data from our endpoints:
- `bankAccounts` to retrieve a list of bank accounts which can be mapped, enabling the user to dictate which bank account their expenses should be recorded against.
- `accounts` to retrieve a list of accounts which can be mapped, enabling the user to dictate which GL account different categories of expenses should be recorded against.
- `trackingCategories` to retrieve a list of tracking categories which can be mapped, enabling the user to track expenses against identifiers which sit outside of their chart of accounts, including departments and locations.
- `taxRates` to retrieve a list of tax rates which can be pushed against the direct cost depending on the category of spend.

Then, use the same API to create a direct cost within the customer's accounting application, thus recording an expense. Once the direct cost has been created, a bank transaction line can then be pushed to the customers accounting platform and reconciled against the direct cost. You can also record refunds and top-ups using Codat. 

#### Sync for Expenses

Codat’s Sync for Expenses product lets you take expense management one step further, as it is a standardized API with a set of supporting tools. This simplifies the provision of high-quality integrations with multiple accounting platforms and lets you leverage the following benefits:

- Connect to your SMB's accounting platform faster, as Codat handles authorization and linking, and takes into account intricate details such as rate limits.
- Automatically categorize and tag expenses according to your SMB's bookkeeping. We attribute the spend to the correct chart of accounts and enable further categorization via tracking categories.
- Easily push any purchases to the SMB's accounting platform, where they are represented with an expense. Your customers can also push attachments for complete auditability.
- Synchronize and map expenses with control. Our API is built to standardize data based on feedback from customers and industry expertise, so you can sync transactions based on what they represent and let Codat handle the processesing and formatting them in a way required by the accounting platform.

### Use case demos

Codat provides you with demo guides, where you can see our products in action. Check back soon to view our demo built specifically for the expense management use case.

---

### Read next

Review the full range of [use cases](/usecases/overview) Codat can support you with and find one that suits you best.