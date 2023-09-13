---
title: Loan Liabilities
description: "Learn how to identify a company's loans to better understand its financial health"
sidebar_label: "Liabilities"
image: "/img/banners/social/lending.png"
---

Our Loan Liabilities feature removes the arduous task of manually identifying loan liabilities. Instead, it automatically analyzes data from accounting, banking, and commerce data sources for you.

It collates loan obligations together from multiple applications to offer a high-level overview and transaction-level information on potential loan liabilities. 

This gives the analysts a better idea of the loan obligations a company may have by showing the amount of a loan a company has paid off and the number of loans a company has.

The loan liabilities detection engine is capable of identifying:

- The loan drawdowns a company has.
- The loan repayments made by a company.
- The interest rate for a loan drawdown (where possible).

## Summary report

The [List loan summary](/lending-api#/operations/get-loan-summary) endpoint returns a list of a company's loan liabilities across all its valid data connections.
This will include drawdowns, repayments, and remaining balance.

## Transactions report

The [List loan transactions](/lending-api#/operations/list-loan-transactions) endpoint returns a paged list of a company's loan transactions for the specified connection type.
This may include drawdowns, accrued interest, capital, and interest repayments.

## Troubleshooting 

The company must have at least one accounting, banking, or commerce connection linked and fully synced with the mandatory data types listed below.

Accounting connection:

- Journal Entries
- Chart of Accounts

Banking connection:

- Banking Accounts
- Banking Transactions

Commerce connection:

- Commerce Transactions

If the company does not have any of these connections, the endpoints will respond with an error.
