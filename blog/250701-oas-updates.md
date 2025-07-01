---
title: "OpenAPI Specification Updates"
date: 2025-07-01
tags: ["Update", "Changelog"]
authors: "codat-bot"
---

This update summarizes recent changes made to our OpenAPI Specifications.

<!--truncate-->


## Codat-Accounting


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions`
- `/companies/{companyId}/reports/agedDebtor`
- `/companies/{companyId}/data/payments`
- `/companies/{companyId}/connections/{connectionId}/options/transfers`
- `/companies/{companyId}/data/creditNotes/{creditNoteId}`
- `/companies/{companyId}/data/taxRates`
- `/companies/{companyId}/data/suppliers/{supplierId}`
- `/companies/{companyId}/data/customers`
- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}`
- `/companies/{companyId}/data/bills`
- `/companies/{companyId}/data/journalEntries`
- `/companies/{companyId}/connections/{connectionId}/options/customers`
- `/companies/{companyId}/connections/{connectionId}/data/transfers/{transferId}`
- `/companies/{companyId}/connections/{connectionId}/options/billCreditNotes`
- `/companies/{companyId}/connections/{connectionId}/options/bankAccounts`
- `/companies/{companyId}/data/purchaseOrders`
- `/companies/{companyId}/data/purchaseOrders/{purchaseOrderId}`
- `/companies/{companyId}/data/creditNotes`
- `/companies/{companyId}/data/accounts/{accountId}`
- `/companies/{companyId}/data/suppliers`
- `/companies/{companyId}/data/items/{itemId}`
- `/companies/{companyId}/connections/{connectionId}/options/bills`
- `/companies/{companyId}/connections/{connectionId}/options/creditNotes`
- `/companies/{companyId}/data/financials/balanceSheet`
- `/companies/{companyId}/data/billPayments/{billPaymentId}`
- `/companies/{companyId}/reports/agedCreditor`
- `/companies/{companyId}/connections/{connectionId}/options/directCosts`
- `/companies/{companyId}/connections/{connectionId}/options/invoices`
- `/companies/{companyId}/connections/{connectionId}/options/purchaseOrders`
- `/companies/{companyId}/connections/{connectionId}/push/payments`
- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts`
- `/companies/{companyId}/data/bills/{billId}`
- `/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`
- `/companies/{companyId}/connections/{connectionId}/data/payments`
- `/companies/{companyId}/data/accounts`
- `/companies/{companyId}/data/financials/profitAndLoss`
- `/companies/{companyId}/data/customers/{customerId}`
- `/companies/{companyId}/connections/{connectionId}/options/billPayments`
- `/companies/{companyId}/data/trackingCategories`
- `/companies/{companyId}/data/taxRates/{taxRateId}`
- `/companies/{companyId}/connections/{connectionId}/options/directIncomes`
- `/companies/{companyId}/connections/{connectionId}/options/suppliers`
- `/companies/{companyId}/data/items`
- `/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}`
- `/companies/{companyId}/data/billCreditNotes`
- `/companies/{companyId}/data/invoices`
- `/companies/{companyId}/connections/{connectionId}/options/payments`
- `/companies/{companyId}/connections/{connectionId}/data/transfers`
- `/companies/{companyId}/data/trackingCategories/{trackingCategoryId}`
- `/companies/{companyId}/data/payments/{paymentId}`
- `/companies/{companyId}/connections/{connectionId}/options/journalEntries`
- `/companies/{companyId}/data/journalEntries/{journalEntryId}`
- `/companies/{companyId}/data/billPayments`
- `/companies/{companyId}/data/invoices/{invoiceId}`

## Codat-Bank-Feeds-v2


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts`
- `/companies/{companyId}/connections/{connectionId}/options/bankAccounts`

## Codat-Bank-Feeds

View the full API reference: [Codat-Bank-Feeds](https://docs.codat.io/bank-feeds-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/data/bankAccounts`](https://docs.codat.io/bank-feeds-api#/operations/list-bank-accounts)
- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/bank-feeds-api#/operations/get-create-bankAccounts-model)

## Codat-Lending

View the full API reference: [Codat-Lending](https://docs.codat.io/lending-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions`](https://docs.codat.io/lending-api#/operations/list-accounting-bank-account-transactions)
- [`/companies/{companyId}/reports/agedDebtor`](https://docs.codat.io/lending-api#/operations/get-accounting-aged-debtors-report)
- [`/companies/{companyId}/data/payments`](https://docs.codat.io/lending-api#/operations/list-accounting-payments)
- [`/companies/{companyId}/connections/{connectionId}/options/transfers`](https://docs.codat.io/lending-api#/operations/get-create-transfers-model)
- [`/companies/{companyId}/data/creditNotes/{creditNoteId}`](https://docs.codat.io/lending-api#/operations/get-accounting-credit-note)
- [`/companies/{companyId}/data/suppliers/{supplierId}`](https://docs.codat.io/lending-api#/operations/get-accounting-supplier)
- [`/companies/{companyId}/data/customers`](https://docs.codat.io/lending-api#/operations/list-accounting-customers)
- [`/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}`](https://docs.codat.io/lending-api#/operations/get-accounting-bank-account)
- [`/companies/{companyId}/data/bills`](https://docs.codat.io/lending-api#/operations/list-accounting-bills)
- [`/companies/{companyId}/data/journalEntries`](https://docs.codat.io/lending-api#/operations/list-accounting-journal-entries)
- [`/companies/{companyId}/connections/{connectionId}/data/transfers/{transferId}`](https://docs.codat.io/lending-api#/operations/get-accounting-transfer)
- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/lending-api#/operations/get-create-update-bankAccounts-model)
- [`/companies/{companyId}/data/creditNotes`](https://docs.codat.io/lending-api#/operations/list-accounting-credit-notes)
- [`/companies/{companyId}/data/accounts/{accountId}`](https://docs.codat.io/lending-api#/operations/get-accounting-account)
- [`/companies/{companyId}/data/suppliers`](https://docs.codat.io/lending-api#/operations/list-accounting-suppliers)
- [`/companies/{companyId}/data/financials/balanceSheet`](https://docs.codat.io/lending-api#/operations/get-accounting-balance-sheet)
- [`/companies/{companyId}/data/billPayments/{billPaymentId}`](https://docs.codat.io/lending-api#/operations/get-accounting-bill-payment)
- [`/companies/{companyId}/connections/{connectionId}/options/directCosts`](https://docs.codat.io/lending-api#/operations/get-create-directCosts-model)
- [`/companies/{companyId}/reports/agedCreditor`](https://docs.codat.io/lending-api#/operations/get-accounting-aged-creditors-report)
- [`/companies/{companyId}/connections/{connectionId}/push/payments`](https://docs.codat.io/lending-api#/operations/create-payment)
- [`/companies/{companyId}/connections/{connectionId}/data/bankAccounts`](https://docs.codat.io/lending-api#/operations/list-accounting-bank-accounts)
- [`/companies/{companyId}/data/bills/{billId}`](https://docs.codat.io/lending-api#/operations/get-accounting-bill)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/lending-api#/operations/get-create-chartOfAccounts-model)
- [`/companies/{companyId}/data/accounts`](https://docs.codat.io/lending-api#/operations/list-accounting-accounts)
- [`/companies/{companyId}/data/financials/profitAndLoss`](https://docs.codat.io/lending-api#/operations/get-accounting-profit-and-loss)
- [`/companies/{companyId}/data/customers/{customerId}`](https://docs.codat.io/lending-api#/operations/get-accounting-customer)
- [`/companies/{companyId}/connections/{connectionId}/options/suppliers`](https://docs.codat.io/lending-api#/operations/get-create-update-suppliers-model)
- [`/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}`](https://docs.codat.io/lending-api#/operations/get-accounting-bill-credit-note)
- [`/companies/{companyId}/data/billCreditNotes`](https://docs.codat.io/lending-api#/operations/list-accounting-bill-credit-notes)
- [`/companies/{companyId}/data/invoices`](https://docs.codat.io/lending-api#/operations/list-accounting-invoices)
- [`/companies/{companyId}/connections/{connectionId}/data/transfers`](https://docs.codat.io/lending-api#/operations/list-accounting-transfers)
- [`/companies/{companyId}/connections/{connectionId}/options/payments`](https://docs.codat.io/lending-api#/operations/get-create-payment-model)
- [`/companies/{companyId}/data/payments/{paymentId}`](https://docs.codat.io/lending-api#/operations/get-accounting-payment)
- [`/companies/{companyId}/data/journalEntries/{journalEntryId}`](https://docs.codat.io/lending-api#/operations/get-accounting-journal-entry)
- [`/companies/{companyId}/data/billPayments`](https://docs.codat.io/lending-api#/operations/list-accounting-bill-payments)
- [`/companies/{companyId}/data/invoices/{invoiceId}`](https://docs.codat.io/lending-api#/operations/get-accounting-invoice)

## Codat-Sync-Commerce-v1


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/push/payments`
- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts`
- `/companies/{companyId}/data/accounts`
- `/companies/{companyId}/data/accounts/{accountId}`
- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}`

## Codat-Sync-Expenses

View the full API reference: [Codat-Sync-Expenses](https://docs.codat.io/sync-for-expenses-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-bankAccounts-model)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-chartOfAccounts-model)
- [`/companies/{companyId}/sync/expenses/expense-transactions/{transactionId}`](https://docs.codat.io/sync-for-expenses-api#/operations/update-expense-transaction)
- [`/companies/{companyId}/sync/expenses/transfer-transactions/{transactionId}`](https://docs.codat.io/sync-for-expenses-api#/operations/create-transfer-transaction)
- [`/companies/{companyId}/data/customers/{customerId}`](https://docs.codat.io/sync-for-expenses-api#/operations/get-customer)
- [`/companies/{companyId}/data/suppliers`](https://docs.codat.io/sync-for-expenses-api#/operations/list-suppliers)
- [`/companies/{companyId}/data/suppliers/{supplierId}`](https://docs.codat.io/sync-for-expenses-api#/operations/get-supplier)
- [`/companies/{companyId}/data/customers`](https://docs.codat.io/sync-for-expenses-api#/operations/list-customers)

## Codat-Sync-Payables-v1

View the full API reference: [Codat-Sync-Payables-v1](https://docs.codat.io/sync-for-payables-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/options/billCreditNotes`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNote-model)
- [`/companies/{companyId}/data/bills/{billId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-bill)
- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-bankAccounts-model)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-account-model)
- [`/companies/{companyId}/connections/{connectionId}/options/suppliers`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-supplier-model)
- [`/companies/{companyId}/data/accounts`](https://docs.codat.io/sync-for-payables-api#/operations/list-accounts)
- [`/companies/{companyId}/data/accounts/{accountId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-account)
- [`/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-bill-credit-note)
- [`/companies/{companyId}/data/billCreditNotes`](https://docs.codat.io/sync-for-payables-api#/operations/list-bill-credit-notes)
- [`/companies/{companyId}/data/taxRates`](https://docs.codat.io/sync-for-payables-api#/operations/list-tax-rates)
- [`/companies/{companyId}/data/suppliers`](https://docs.codat.io/sync-for-payables-api#/operations/list-suppliers)
- [`/companies/{companyId}/data/suppliers/{supplierId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-supplier)
- [`/companies/{companyId}/connections/{connectionId}/options/billPayments`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-billPayment-model)
- [`/companies/{companyId}/connections/{connectionId}/options/bills`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-bill-model)
- [`/companies/{companyId}/data/trackingCategories/{trackingCategoryId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-tracking-category)
- [`/companies/{companyId}/data/trackingCategories`](https://docs.codat.io/sync-for-payables-api#/operations/list-tracking-categories)
- [`/companies/{companyId}/data/bills`](https://docs.codat.io/sync-for-payables-api#/operations/list-bills)
- [`/companies/{companyId}/connections/{connectionId}/options/journalEntries`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-journalEntry-model)
- [`/companies/{companyId}/data/billPayments`](https://docs.codat.io/sync-for-payables-api#/operations/list-bill-payments)
- [`/companies/{companyId}/data/billPayments/{billPaymentId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-bill-payments)
- [`/companies/{companyId}/data/taxRates/{taxRateId}`](https://docs.codat.io/sync-for-payables-api#/operations/get-tax-rate)

## Codat-Sync-Payroll


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`
- `/companies/{companyId}/data/accounts`
- `/companies/{companyId}/data/accounts/{accountId}`
- `/companies/{companyId}/data/trackingCategories/{trackingCategoryId}`
- `/companies/{companyId}/data/trackingCategories`
- `/companies/{companyId}/data/journalEntries`
- `/companies/{companyId}/connections/{connectionId}/options/journalEntries`
- `/companies/{companyId}/data/journalEntries/{journalEntryId}`

## Codat-Assess


### Modified Endpoints

- `/companies/{companyId}/reports/enhancedProfitAndLoss/accounts`
- `/companies/{companyId}/reports/enhancedBalanceSheet/accounts`
