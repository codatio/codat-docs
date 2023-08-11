---
title: "Xero | Expenses"
---

Introduction

In order to meet the requirements of Xero App Partner Program for financial services and provide a complete reconciliation process, the approach for integration has two sides - Xero transactions and Bank reconciliation.

Xero transactions

To complete reconciliation the bank transactions must be reconciled against Xero transactions.

Xero transactions include:

Invoices and payments - sales paid at a later date

Bills and bill payments - purchase due at a later date

Spend money transactions - everyday purchases

Receive money transaction - everyday sales or refunds

Bank reconciliation

As described by Xero, bank reconciliation is the process to confirm that all the transactions in your bank accounts are recorded in your business accounting records.

This is achieved by matching bank statement lines from a bank or bank like source (left), against Xero transactions (right).

![](/img/integrations/accounting/xero/xero-expenses-1.png)

Bank statement lines are the bank transactions imported from your bank account via a bank feed or they’re manually imported. When they’re in your online banking, they’re referred to as bank transactions, then when they’re imported into Xero we call them bank statement lines.

Transactions are created in Xero. These could be invoices, bills, expense claims or cash transactions.

0. Prerequisites
0.1 Bank accounts
Create a holding account

Create a new holding bank account to represent the funds processed through the expense provider.

Account type:

Bank (via banking integration)

Credit card (requires credit card number)

Other (requires account number)

Codat

Data Mode: Bank account

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process).

0.2 Expense account

In order to push expenses and fees an expense account is required. The user should be able to select an existing account from their accounting platform OR create a new one.

Note: for detailed expense management a user can map accounts per expense category e.g. travel, entertainment

Map existing expense account

Get list of Expense accounts (type: expense)

Display to user

User selects bank account

Store accountId to be used in future transactions

Codat

Data model: accounts

GET/companies/{companyId}/data/accounts (link)
0.3 Suppliers
Push a supplier

Create a supplier to represent the expense provider.

Codat

Data model: Supplier

POST /companies/{companyId}/connections/{connectionId}/push/suppliers (link)
0.4 Tax rate
Map existing tax rates

Get list of tax rates

Display to user

User selects tax rate

Store TaxRateRef to be used in future transactions

Codat 

Data model: Tax rates

GET/companies/{companyId}/data/taxRates (link)

Note: Most platforms also support NON or null tax rates to represent exempt transactions.

1. Expenses
1.1 Spend money

![](/img/integrations/accounting/xero/xero-expenses-2.png)

Post a ‘spend money’ transaction representing the expenses made on a particular day. Line items can be aggregated as required.

Post a Direct cost

Supplier: Expense provider

Payment Account: Holding bank account

Line items:

Account Ref: Expense account

TaxRef: Selected tax rate

Tracking categories: Xero supports customers (coming soon)

Codat

Data model: direct costs (documentation coming soon)

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(Link)
1.2 Bank transactions

Post a corresponding bank statement line for each expense.

Post a bank transaction

To: holding bank account

Payee: Expense provider

Amount: amount of expense

Codat

Data Model: Bank transactions

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process)

2. Fees

Recording fees in Xero by posting a ‘spend money’ transaction to the payment bank account with line items recorded against expense account.

1.1 Spend money

Post a ‘spend money’ transaction representing the expenses made on a particular day. Line items can be aggregated as required.

Post a Direct cost

Supplier: Expense provider

Payment Account: Holding bank account

Line items:

Account Ref: Expense account

TaxRef: Selected tax rate

Codat

Data model: direct costs (documentation coming soon)

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(Link)
2.2 Bank transactions

Post a corresponding bank statement line for each fee incurred.

Post a bank transaction

To: Holding bank account

Payee: Expense provider

Amount: amount of expense

Codat

Data Model: Bank transactions

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process)

3. Payouts & Top-Ups

Post a transfer for every payout or top-up made from the expense provider to the companies business bank account. These transfers should align with the frequency of payouts or top-ups.

3.1 Transfer
Post a transfer

|         |         Payout          |          Top-up         |
|:-------:|:-----------------------:|:-----------------------:|
|  From   | Holding bank account    | Nominated bank account  |
|   To    | Nominated bank account  | Holding bank account    |
| Amount  | Amount of payout        | Amount of top-up        |

Codat

Data model: transfers

POST /companies/{companyId}/connections/{connectionId}/push/transfers (link)
3.2 Bank transactions

Post a corresponding bank statement line for each transfer.

Note: For the business bank account bank statements are handled directly in Xero so no action required.

Post a bank transaction

To: Holding bank account

Payee: Expense provider

Amount: Amount of payout or top-up

Codat

Data Model: Bank transactions

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process)

4. Refunds
2.2 Receive money

![](/img/integrations/accounting/xero/xero-expenses-3.png)

Post a direct income

From: Expense supplier

Payment account: Holding bank account

Line Items:

Account Ref: original expense account

Tax rate: Selected tax rate

Codat (Coming soon)
4.2 Bank transactions

Post a corresponding bank statement line for each refund.

Post a bank transaction

To: Holding bank account

Payee: Payment provider

Amount: amount of refund

Codat

Data Model: Bank transactions

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process)