---
title: "Enhanced liabilities - loans"
description: "Learn how to identify a company's loans to better understand its financial health"
sidebar_label: "Loans overview"
---

Loan data is often not uniform, spread across a variety of software applications and the data can be difficult to interpret. 
These loans are often hard to identify, analyze, and group.
Manually going through data and identifying loans is time-consuming and repetitive, and introduces the chance for human error.

Our Loan Transactions endpoint can identify loans from a company's accounting, banking, and commerce integrations. 
It can work across a variety of integrations for all three integration types.

These endpoints will give analysts a better idea of the loan obligations a company may have by identifying their loan transactions and loan repayments.
This will be done by showing the amount of a loan a company has paid off and the number of loans a company has.

These endpoints can show:
- The loan drawdowns a company has
- The loan repayments made by a company
- The remaining loan balance (where possible)

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

## Summary Report
The Loan summary endpoint returns a list of a company's loan liabilities across all its valid data connections.
This will include drawdowns, repayments, and remaining balance.

## Transactions Report
The Loan transactions endpoint returns a paged list of a company's loan transactions for the specified connection type.
This may include drawdowns, accured interest, capital and interest repayments.
