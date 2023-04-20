---
title: "Automating receivables with Codat"
sidebar_label: "Automating receivables"
description: "An overview of the receivables automation use case supported by Codat"
---

Engage Codat and automate your customers' accounts receivable processes by reflecting outstanding and received invoices from their buyers in their accounting platforms.

### How Codat can help

We can support B2B payment and invoicing software companies, payment providers, and vertical SaaS companies in their activity by leveraging our [Accounting API](/accounting-api/overview) product. 

For example, the Accounting API eliminate the need to manually reconcile invoices raised in third party applications, keeping invoicing applications in sync with the accounting platform. It also automatically records payments made against an invoice or customer account and provides visibility of income received from the sale of goods or provision of services.

![](/img/use-cases/summary-pages/fad7ec95-4automating-receivables.png)

#### Accounting API

We have done the heavy lifting for you by building integrations with a standardized data model to the accounting platforms your customers already use. This gives you access to real-time data that you can pull, create, or update to support your use case.

For example, you can pull the following data from our endpoints:

- `bankAccounts` to retrieve a list of bank accounts which can be mapped, enabling the user to dictate which bank account payments are received into.
- `accounts` to retrieve a list of accounts which can be mapped, enabling the user to dictate which GL account  income and any platform fees should be recorded against.
- `trackingCategories` to retrieve a list of tracking categories which can be mapped, enabling the user to track income against identifiers which sit outside of their chart of accounts, including departments and locations.
- `taxRates` to retrieve a list of tax rates which can be pushed against invoices.

Then, use the same API to create invoices and credit notes within the accounting application. Once an invoice has been created, a payment can then be pushed to the customer's accounting platform with a payment link, allocating and reconciling a payment against an invoice, credit note, or payment on account. 

### Use case demos

Codat provides you with demo guides, where you can see our products in action. Check back soon to view our demo built specifically for the receivables automation use case.

---

### Read next

Review the full range of [use cases](/usecases/overview) Codat can support you with and find one that suits you best.