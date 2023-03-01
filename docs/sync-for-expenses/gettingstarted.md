---
title: "Getting started"
description: Learn how to start syncing expenses
tags: [syncforexpense, gettingstarted, prerequisites, platformsupport]
---

### DataTypes

Before you start using sync for expenses, you will need to ensure that the following datatypes are enabled in your Codat instance.


<details>
  <summary>Recommended Data Type Settings</summary>


| DataType Name       | dataType           | Use Case                                                                                                                                                                                               | Fetch On First Link | Sync Frequency |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | -------------- |
| Bank Accounts       | bankAccounts       | A bank account is the primary account from where expenses will be paid from.                                                                                                                           | ✅                  | daily          |
| Company             | company            | The company info contains helpful information such as the name of the linked company & base currency and registered addresses.                                                                         | ✅                  | daily          |
| Chart Of Accounts   | chartOfAccounts    | Accounts used within the general ledger to record and categorize expenses.                                                                                                                             | ✅                  | daily          |
| Tracking Categories | trackingCategories | Tracking categories provide an additional means of categorising and tagging an expense, for example locations and departments would be tracking categories.                                            | ✅                  | daily          |
| Tax Rates           | taxRates           | Tax rates enable companies to track expenses against the relevent tax code, this enables them to either make the expense billable or track taxes that can be reclaimed.                                | ✅                  | daily          |
| Suppliers           | suppliers          | All expenses go against a single supplier representing the expense provider, this prevents companies accounting software becoming overrun with multiple merchants.                                     | ✅                  | daily          |
| Direct Costs        | directCosts        | Sync for expenses uses direct cost to represent the expense transaction within the accounting platform.                                                                                                | ❌                  | none           |
| Journal Entries     | journalEntries     | Journal entries are used where an accounting platform does not support a representation of direct costs. They are also used to represent transfers such as topping up or paying down the expense card. | ❌                  | none           |
| Transfers           | transfers          | A record of the expense transaction between two bank accounts such as topping up or paying down the expense card.                                                                                      | ❌                  | none           |
| Customers           | customers          | Customers can be used to record and associate income transactions such as reclaiming a cashback reward.                                                                                                | ✅                  | daily          |
| Direct Incomes      | directIncomes      | Typically direct incomes are used to represent any income generating transaction type such as cashback rewards.                                                                                        | ❌                  | none           |

</details>

## Connect to an SMB’s accounting platform

In Codat, a company represents a business sharing access to their data. Each company can have multiple data connections to different data sources. For example, a business can have one connection to Xero for accounting data and a connection to Plaid for Open banking data.
![An image from the static](/img/sync-for-expenses/sfe-connections.png)

With Sync for Expenses each company will have two data connections:

- One will be to their accounting platform
- The other will be to the partner expense integration

## Enable your SMB to authorize access to their data

Before you can push expenses to your customer’s accounting platform, you need to get access to it. There are three ways you can enable your customers to grant access to their financial accounts:

1.  **Embedded Link:** Codat's Embedded Link is a React component that neatly sits in your front-end code, and can be deployed in a matter of minutes (see [embedded link](/auth-flow/authorize-embedded-link)).

2.  **Hosted Link**: a beautifully simple, pre-built, conversion-optimized, and customizable authentication flow (See [Authorize with Hosted Link](/auth-flow/authorize-hosted-link)).

3.  **Build your own SMB authentication flow** for a fully customized bespoke user journey (See [Build your own auth flow](/auth-flow/build/build-your-own-authorization-journey)).

### Create a data connection

Once your customer has authorized access to their accounting platform, you will need to create a connection against the company for the partner expense integration.

``` http
  POST https://expensesync.codat.io/companies/{companyId}/connections/partnerexpense
```

