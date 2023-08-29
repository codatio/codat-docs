---
title: "Enhanced Invoices"
description: "Introduction to Enhanced Invoices"
sidebar_label: "Enhanced Invoices"
---

This feature solves a key problem associated with underwriting invoices - verifying payments against historical invoices. It does this by matching invoice payments to immutable banking transactions, showing you the original transaction details found on the bank statement.

Invoices also include details of:
- The timeline of the invoice—when it was raised, marked as paid, last edited, and so on
- How much the invoice is for and the currency
- Who the invoice has been raised to; the customer
- Any payments assigned to the invoice

Get a list of invoices linked to the corresponding banking transaction using the _Enhanced Invoices Report_ endpoint in our [Lending API reference](/lending-api#/operations/get-enhanced-invoices-report).

## Troubleshooting

#### Ensure the SMB has connected both an accounting platform and at least one banking connection
The company must have at least one Accounting and one Banking data connection. If the company does not have a Banking connection, invoices will still be returned without matching bank transactions.

#### It looks like data is missing
If it looks like data is missing, first check that the following data types are enabled:
- Banking Accounts
- Banking Transactions
- Invoices
- Customers
- Payments
- Credit Notes
- Account Transactions
