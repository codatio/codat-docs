---
title: "Aligning Account Current Balances across integrations"
date: "2025-04-04"
tags: ["Product", "Update","Xero","NetSuite","Dynamics 365 BC","Sage Intacct", "Sage 50", "Sage 200", "Zoho Books"]
authors: ivasiutkova
---
We have updated the way we display Current Balances for Chart of Accounts for integrations: Xero, Netsuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, Zoho Books.

<!--truncate-->

## What's new?

We have **standardised the sign conversion** (signum) of accounts balances. Asset/Expense accounts now show positive balances when in debit; Income/Liability/Equity accounts now show positive balances when in credit.

**Xero**: Income and Expense accounts are now returning current balance.

**Dynamics 365 BC** Accounts with `isBankAccount: true` are now returning their current balance.

**Sage50** Accounts with `isBankAccount: true` now support balances in bank account’s currency.

These changes ensure consistent interpretation of balances across systems, improving accuracy in reporting and analysis.

## Who is this relevant for?

Anyone relying on Chart of Accounts balances as part of their integration or financial reporting setup.

## How to get started?

This update would be available from July 10, 2025. You would need to schedule a Chart of Accounts data sync to reflect the changes.