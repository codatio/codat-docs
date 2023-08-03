---
title: "Enhanced Liabilities"
description: "Introduction to Enhanced Liabilities"
---

This feature solves a key problem associated with underwriting invoices - verifying payments against historical invoices. It does this by matching invoice payments to immutable banking transactions, showing you the original transaction details found on the bank statement.

Invoices also include details of:
- The timeline of the invoice—when it was raised, marked as paid, last edited, and so on.
- How much the invoice is for and the currency.
- Who the invoice has been raised to; the customer.
- Any payments assigned to the invoice

## Prerequisites

The company must have at least one Accounting and one Banking data connection. If the company does not have a Banking connection, invoices will still be returned without matching bank transactions.

Ensure you have the following datatypes enabled:
- Banking Accounts
- Banking Transactions
- Invoices
- Customers
- Payments
- Credit Notes
- Account Transactions

## Enhanced Invoices Report

Gets a list of invoices linked to the corresponding banking transaction

Explore the _Enhanced Invoices Report_ endpoint in our [Lending API reference](/lending-api#/operations/get-enhanced-invoices-report).
