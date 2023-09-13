---
title: "Invoices"
description: "Introduction to Enhanced Invoices"
sidebar_label: "Invoices"
image: "/img/banners/social/lending.png"
---

This feature solves a key problem associated with underwriting invoices - verifying payments against historical invoices. The feature performs the verification by matching invoice payments to immutable banking transactions, showing you the original transaction details found on the bank statement.

Invoices also include the following details:
- The timeline of the invoice — when it was raised, marked as paid, last edited, and so on
- The amount and currency of the invoice
- The customer the invoice has been raised to
- Any payments assigned to the invoice

Get a list of invoices linked to the corresponding banking transaction using the _Enhanced Invoices Report_ endpoint in our [Lending API reference](/lending-api#/operations/get-enhanced-invoices-report).

## Troubleshooting

#### Check the SMB's connections

As a minimum, the company must have an Accounting and at least one Banking linked and active data connection. If the company does not have a Banking connection, invoices will still be returned without the matching bank transactions.

#### Check the enabled data types

If you suspect some data is missing, first check that the following data types are enabled:

- Banking Accounts
- Banking Transactions
- Invoices
- Customers
- Payments
- Credit Notes
- Account Transactions
