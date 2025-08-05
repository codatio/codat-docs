---
title: "OpenAPI Specification Updates"
date: 2025-08-01
tags: ["Update", "Changelog"]
authors: "codat-bot"
---

This update summarizes recent changes made to our OpenAPI Specifications.

<!--truncate-->


## Codat-Lending

View the full API reference: [Codat-Lending](https://docs.codat.io/lending-api#/)


### New Endpoints

- [`/companies/{companyId}/reports/creditModel/{reportId}/financialSummary`](https://docs.codat.io/lending-api#/operations/get-closed-books-indicator)
- [`/companies/{companyId}/reports/creditModel/{reportId}/excel`](https://docs.codat.io/lending-api#/operations/download-credit-model-excel)

### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/lending-api#/operations/get-create-update-bankAccounts-model)
- [`/companies/{companyId}/reports/categorizedBankStatement/{reportId}/excel`](https://docs.codat.io/lending-api#/operations/download-categorized-bank-statement-excel)
- [`/companies/{companyId}/reports/{reportType}`](https://docs.codat.io/lending-api#/operations/generate-report)
- [`/companies/{companyId}/reports`](https://docs.codat.io/lending-api#/operations/list-reports)
- [`/companies/{companyId}/reports/categorizedBankStatement/{reportId}/transactions`](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement-transactions)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/lending-api#/operations/get-create-chartOfAccounts-model)
- [`/companies/{companyId}/reports/{reportType}/{reportId}/status`](https://docs.codat.io/lending-api#/operations/get-report-status)
- [`/companies/{companyId}/connections/{connectionId}/options/payments`](https://docs.codat.io/lending-api#/operations/get-create-payment-model)
- [`/companies/{companyId}/connections/{connectionId}/options/directCosts`](https://docs.codat.io/lending-api#/operations/get-create-directCosts-model)
- [`/companies/{companyId}/reports/categorizedBankStatement/{reportId}/accounts`](https://docs.codat.io/lending-api#/operations/list-categorized-bank-statement-accounts)

### New Models

- `ClosedBooksIndicator`

## Codat-Spend-Insights


### Modified Endpoints

- `/companies/{companyId}/reports/{reportType}/{reportId}/status`
- `/companies/{companyId}/reports`
- `/companies/{companyId}/reports/{reportType}`

## Codat-Accounting


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/options/customers`
- `/companies/{companyId}/connections/{connectionId}/options/invoices`
- `/companies/{companyId}/connections/{connectionId}/options/bankAccounts`
- `/companies/{companyId}/connections/{connectionId}/options/bills`
- `/companies/{companyId}/connections/{connectionId}/options/creditNotes`
- `/companies/{companyId}/connections/{connectionId}/options/billPayments`
- `/companies/{companyId}/connections/{connectionId}/options/billCreditNotes`
- `/companies/{companyId}/connections/{connectionId}/options/purchaseOrders`
- `/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`
- `/companies/{companyId}/connections/{connectionId}/options/payments`
- `/companies/{companyId}/connections/{connectionId}/options/directIncomes`
- `/companies/{companyId}/connections/{connectionId}/options/directCosts`
- `/companies/{companyId}/connections/{connectionId}/options/journalEntries`

## Codat-Bank-Feeds

View the full API reference: [Codat-Bank-Feeds](https://docs.codat.io/bank-feeds-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/bank-feeds-api#/operations/get-create-bankAccounts-model)

## Codat-Sync-Expenses

View the full API reference: [Codat-Sync-Expenses](https://docs.codat.io/sync-for-expenses-api#/)


### Modified Endpoints

- [`/companies/{companyId}/sync/expenses/transfer-transactions/{transactionId}`](https://docs.codat.io/sync-for-expenses-api#/operations/create-transfer-transaction)
- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-bankAccounts-model)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-chartOfAccounts-model)
- [`/companies/{companyId}/sync/expenses/expense-transactions/{transactionId}`](https://docs.codat.io/sync-for-expenses-api#/operations/update-expense-transaction)

## Codat-Sync-Payables-v1

View the full API reference: [Codat-Sync-Payables-v1](https://docs.codat.io/sync-for-payables-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/options/bankAccounts`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-bankAccounts-model)
- [`/companies/{companyId}/connections/{connectionId}/options/bills`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-bill-model)
- [`/companies/{companyId}/connections/{connectionId}/options/journalEntries`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-journalEntry-model)
- [`/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-account-model)
- [`/companies/{companyId}/connections/{connectionId}/options/billPayments`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-billPayment-model)
- [`/companies/{companyId}/connections/{connectionId}/options/billCreditNotes`](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNote-model)

## Codat-Sync-Payroll


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/options/journalEntries`
- `/companies/{companyId}/connections/{connectionId}/options/chartOfAccounts`

## Codat-Bank-Feeds-v2


### Modified Endpoints

- `/companies/{companyId}/connections/{connectionId}/options/bankAccounts`
- `/companies/{companyId}/connections/{connectionId}/data/bankAccounts`
