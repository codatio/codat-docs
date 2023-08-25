---
title: Enhanced loan liabilities
description: "Learn how to identify a company's loans to better understand its financial health"
sidebar_label: "Overview"
---

Enhanced loan liabilities removes the arduous task of manually identifying loan liabilities by automatically analyzing data from accounting, banking and commerce data sources.
It collates loan obligations together from multiple applications to offer both a high-level overview as well as transaction level information on potential loan liabilities. 

The enhanced loan liabilities detection engine is capable of identifying 

- The loan drawdowns a company has
- The loan repayments made by a company
- The interest rate for a loan drawdown (where possible)

## Benefits

The endpoint will give analysts a better idea of the loan obligations a company may have by identifying their loan transactions and loan repayments.
This will be done by showing the amount of a loan a company has paid off and the number of loans a company has.

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