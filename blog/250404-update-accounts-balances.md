---
title: "2025-04-14: Account: standardized current balance"
date: "2025-04-07"
tags:
  [
    "Product",
    "Update",
    "Xero",
    "NetSuite",
    "Dynamics 365 BC",
    "Sage Intacct",
    "Sage 50",
    "Sage 200",
    "Zoho Books",
  ]
authors: ivasiutkova
---

On **April 14, 2025**, we will update the way we display account current balance in our Xero, NetSuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, and Zoho Books integrations.

<!--truncate-->

:::note Updated April 11, 2025

This page has been updated to reflect that you can choose whether to enable the change to the `currentBalance` value returned by Xero's _Income_ and _Expense_ accounts.

:::

## What's new?

We have standardized the way we convert the `currentBalance` signage (signum) of our [Account](/lending-api#/schemas/AccountingAccount) data type across our **Xero**, **NetSuite**, **Dynamics 365 BC**, **Sage Intacct**, **Sage 50**, **Sage 200**, and **Zoho Books** integrations:

- _Asset_ and _Expense_ accounts now show positive `currentBalance` when in debit.
- _Income_, _Liability_, and _Equity_ accounts now show positive `currentBalance` when in credit.

On **April 14, 2025**, we will enable this change for our clients. It applies to our **entire solution suite** and ensures consistent interpretation of balances across integrations, improving accuracy in reporting and analysis.

As a result, you will also see some changes to how we present data for the following integrations:

- **Dynamics 365 BC**: accounts with `isBankAccount: true` now return a `currentBalance` value instead of `null`.
- **Sage 50**: accounts with `isBankAccount: true` now return a `currentBalance` in bank account’s currency.

You can also choose to opt in to the following change in presenting data:

- **Xero**: _Income_ and _Expense_ accounts to return a `currentBalance` value instead of `null`.

Let your Account Manager know if you want to enable this change.

## Who is this relevant for?

This improvement is relevant to clients who:

- Use our Xero, NetSuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, or Zoho Books integrations, **and**
- Use the `currentBalance` field of our [Account](/lending-api#/schemas/AccountingAccount) (also known as Chart of Accounts) data type as part of their setup.

## How to get started?

The update will be enabled for all clients on **April 14, 2025**. To reflect the changes in the data, schedule a Chart of Accounts data sync after that date.

If you want to enable the change to Xero's _Income_ and _Expense_ account `currentBalance`, let your Account Manager know.
