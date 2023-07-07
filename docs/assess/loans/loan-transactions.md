---
title: Loan transactions
description: "Learn how to identify a company's loans to better understand its financial health"
sidebar_label: "Loan transactions endpoint"
---

Loan data is often not uniform, spread across a variety of software applications and the data can be difficult to interpret. 
These loans are often hard to identify, analyze, and group.
Manually going through data and identifying loans is time-consuming and repetitive, and introduces room for human error.

Our Loan Transactions endpoint can identify loans from a company's accounting, banking, and commerce integrations. 
It can work across a variety of integrations for all three integration types.

The endpoint will give analysts a better idea of the loan obligations a company may have by identifying their loan transactions and loan repayments.
This will be done by showing the amount of a loan a company has paid off and the number of loans a company has.

The endpoint can show:
- The loan drawdowns a company has
- The loan repayments made by a company
- The interest rate for a loan drawdown (where possible)

Make sure you have synced a company recently before calling the endpoint.

## Prerequisites
The company must have at least one accounting, banking, or commerce connection linked and fully synced with the mandatory data types listed below.

Accounting connection:
- Journal Entries
- Chart of Accounts

Banking connection:
- Banking Accounts
- Banking Transactions

Commerce connection:
- Commerce Transactions

If the company does not have any of these connections, the endpoint will respond with an error.

## Invoices Report
The Loan transactions endpoint returns a list of a company's loan transactions across all its valid data connections.
This may include drawdowns, repayments, and interest.
