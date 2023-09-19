---
title: "Xero | Invoice Finance"
draft: true
---
Introduction
Selective Invoice Financing

As part of their App Partner process Xero requires invoice financers to handle the write back process to maintain the financial position for customer during the lending cycle.

This functionality needs to be built by the client into their application, giving their customers the option to enable the continuous publishing of relevant transactions to Xero.

Key considerations:

The data flow is optional, so should come with the ability to switch on/off

The customer should be able to configure their account mapping and have the ability to update at any time.

0. Prerequisite

The user will need to configure their mapping prior to any successful push. We recommend a configuration page that they can access at any time. Example: 

![](/img/integrations/accounting/xero/xero-invoice-finance-1.PNG)

Create a new bank account in Xero to act as the container of the Lender transactions.

0.1 Bank account
Create a bank account

Create a new bank account to represent the Lender’s transactions

Account type:

Bank (via banking integration)

Credit card (requires credit card number)

Other (requires account number)

Codat

Data Mode: Bank account

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process).

Map nominated bank account

The customer will select their business bank account where their payments will be transferred to.

Get list of bank accounts

Display to user

User selects bank account

Store accountId to be used in future transactions

Codat

Data Mode: Bank account

GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts (link)
0.2 Expense account

In order to push fees an expense account is required. The user should be able to select an existing account from their accounting platform OR create a new one.

Map existing expense account

Get list of accounts

Display to user

User selects bank account

Store accountId to be used in future transactions

Codat

Data model: accounts

GET /companies/{companyId}/data/accounts (link)
OR, Create new expense account

Type: expense

Codat

Data model: accounts

POST /companies/{companyId}/connections/{connectionId}/push/accounts (link)
0.3 Supplier

In order to push a spend money transaction a supplier contact is required. You will need to select an existing supplier account if this is already in the customer's Xero account or you will need to create yourself as a supplier.

Search for an existing supplier account
Get a list of suppliers
Fuzzy match search for the exact name

Data model: suppliers

GET /companies/{companyId}/data/suppliers (link)
OR, Create new supplier
POST ​/companies​/{companyId}​/connections​/{connectionId}​/push​/suppliers

Data model: suppliers




1. Drawdown

For each invoice drawdown post a bank transfer between Lender bank account in Xero and the nominated ‘real’ bank account in Xero.

1.1 Bank transfer
Post a bank transfer

From: Lender account

To: nominated bank account

Amount: amount of drawdown

![](/img/integrations/accounting/xero/xero-invoice-finance-2.png)

Codat

Data model: transfers

POST /companies/{companyId}/connections/{connectionId}/push/transfers(link)
2. Final Payment

For each final payment post a bank transfer between the nominated ‘real’ bank account in Xero and the Lender bank account

2.1 Bank transfer
Post a bank transfer

From: nominated bank account

To: Lender bank account

Amount: amount of final payment

![](/img/integrations/accounting/xero/xero-invoice-finance-3.png)

Codat

Data model: transfers

POST /companies/{companyId}/connections/{connectionId}/push/transfers(link)
3. Fees

Recording fees in Xero by posting a ‘spend money’ transaction to the Lender bank account with line items recorded against expense account. The customer must be able to choose which Expense account, or get the option to setup a new Expense Account.

3.1 Spend money
Post a Spend money transaction

From: Lender (Supplier)

Line item: TBD

Account: nominated expense account

![](/img/integrations/accounting/xero/xero-invoice-finance-4.png)

Codat

Data model: direct costs 

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(link)
4. Reconciliation

There are three things that need to be reconciliated:

The invoice against which the advance was secured,

the Lender bank account, and

the main bank account.

4.1 Mark invoice as paid
Push a payment

accountRef: Lender account

Amount: amount of payment

links: id of original invoice

Original invoice

![](/img/integrations/accounting/xero/xero-invoice-finance-5.png)

Payment

![](/img/integrations/accounting/xero/xero-invoice-finance-6.png)

Codat

Data model: Payments

POST /companies/{companyId}/connections/{connectionId}/push/payments (link)
4.2 Bank transactions
Push a bank statement line

To: Lender account

Amount: amount of payment

![](/img/integrations/accounting/xero/xero-invoice-finance-7.png)

Data Model: Bank transactions

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (link)

Requires Bank feeds to be enabled on Xero credentials (approved via App partner process).
