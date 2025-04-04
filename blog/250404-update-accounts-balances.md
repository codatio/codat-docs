---
title: "Account current balance alignment"
date: "2025-04-07"
tags: ["Product", "Update","Xero","NetSuite","Dynamics 365 BC","Sage Intacct", "Sage 50", "Sage 200", "Zoho Books"]
authors: ivasiutkova
---

We have updated the way we display account current balances in our Xero, NetSuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, and Zoho Books integrations.

<!--truncate-->

## What's new?

We have standardized the way we convert the signage (signum) of account balances of our [Account](/lending-api#/schemas/AccountingAccount) data type across our Xero, NetSuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, and Zoho Books integrations. The _Asset_ and _Expense_ accounts now show positive balances when in debit, and _Income_, _Liability_, and _Equity_ accounts now show positive balances when in credit.

As a result, you will notice the following changes: 

- **Xero**: _Income_ and _Expense_ accounts now return a `currentBalance` value instead of `null`.
- **Dynamics 365 BC**: accounts with `isBankAccount: true` now return a `currentBalance` value instead of `null`.
- **Sage50**: accounts with `isBankAccount: true` now return balances in bank account’s currency.

These changes ensure consistent interpretation of balances across integrations, improving accuracy in reporting and analysis.

## Who is this relevant for?

This improvement is relevant for all clients that use our [Account](/lending-api#/schemas/AccountingAccount) (also known as Chart of Accounts) data type balances as part of their integration or financial reporting setup.

## How to get started?

You don't need to take any action to enable the update. To reflect the changes in the data, schedule a Chart of Accounts data sync. 
