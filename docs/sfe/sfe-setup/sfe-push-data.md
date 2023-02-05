---
title: "Step 4: Push SMB’s expenses to Codat"
hidden: true
createdAt: "2022-09-30T18:52:18.496Z"
updatedAt: "2022-09-30T18:57:26.950Z"
---

## Expense Transactions

An expense transaction represents an immutable debit or credit against a bank or credit card account, Where available, Codat will map these to Bank Feeds in the accounting platform.

:::info
Initially Codat will sync these immediately to the accounting platform, but in the near future you will be able to ‘queue’ expense transactions before initiating a sync.
:::

The `syncNow` property determines whether the payload should be synced immediately. Initially this should always be set to true , but in the future Codat will separate out the sync and validation processes and provide the ability to queue datasets.

When pushing expenses, use your transaction id so that it can serve as an idempotency key. Codat validates ids to ensure that every id is unique to a company. This approach prevents duplicate transactions being created in your SMBs' bank feeds.

`/companies/{companyId}/connections/{connectionId}/datatypes/expense-transaction/sync/push`

```
{
"syncNow": true,
"expenseTransactions": [
  {
    "id": "33cd8e61-334c-4517-b5d2-c976c5ad8bd3",
    "authorizedDate": "2021-05-21T00:00:00",
    "postedDate": "2021-05-21T00:00:00",
    "description": "COUNTDOWN ONEHUNGA - AUCKLAND - Card Ending: 2995",
    "amount": 121.19,
    "merchantName": "Amazon UK",
    "merchantCategoryCode": "9999",
    "PaymentPurposeCode": "GDDS"
  }
]
}
```

```
{
"expenseTransactions": {
  "id": "c40b7d6e-1345-11ed-861d-0242ac134562",
  "type": "Sync"
}
}
```

```
{
"expenseTransactions": {
  "id": "c40b7d6e-1345-11ed-861d-0242ac134562",
  "type": "Dataset"
}
}
```

## Expense reconciliations

An expense reconciliation represents the context behind the purchase.

It can include details about the purchase, for example:

- Which account in the general ledger the transaction should be reconciled to
- The associated tax rates
- Any applicable tracking categories

Expense reconciliations are completely independent of the expense transactions, but, if you are creating both a bank transaction and an expense, then you can link the two models together using the transactionRef.

syncNow determines whether the payload should be synced immediately, Initially this should always be set to true , in the future Codat will separate out the sync and validation processes and provide the ability to queue datasets.

When pushing expenses, use your transaction id so that it can serve as an idempotency key. Codat validates ids to ensure that every id is unique to a company. This approach prevents duplicate transactions being created in your SMBs' bank feeds.

## Transaction Types

The way Codat handles, maps and processes a transaction is based on the specified type and signage of the transaction.
[block:parameters]
{
"data": {
"0-0": "Payment",
"h-0": "Transaction Type",
"1-0": "Refund",
"2-0": "Reward",
"3-0": "Chargeback",
"4-0": "Adjustment",
"5-0": "Transfer",
"0-1": "Is used to represent any spend that takes place on the account and interest on credit purchases.",
"1-1": "Can be used to represent any refunds and returns on an original transaction.",
"2-1": "Can be used to represent reward redemption such as points for cash.",
"3-1": "Is similar, to a refund in behaviour and represents a return of transaction/payment sum which may have been disputed.",
"4-1": "Can be used to represent:

- write-offs
- transaction adjustments such as FX",
  "5-1": "Can be used to represent -
- bank withdrawals
- a top up of debit card account
- a pay down of a credit card account"
  },
  "cols": 2,
  "rows": 6
  }
  [/block]
  `/companies/{companyId}/connections/{connectionId}/datatypes/expense-reconciliation/sync/push`

```
{
"syncNow": true,
"expenseReconciliations": [
  {
    "id": "33cd8e61-334c-4517-b5d2-c976c5ad8bd3",
    "type": "payment",
    "transactionRef": {
      "id": "08ca1c6e-0374-11ed-b939-0242ac120002",
      "dataType": "ExpenseTransaction"
    },
    "issueDate": "2021-05-21T00:00:00+00:00",
    "isApproved": true,
    "dateApproved": "2021-05-21T00:00:00+00:00",
    "currency": "GBP",
    "currencyRate": 1.18,
    "lines": [
      {
        "netAmount": 110.42,
        "taxAmount": 14.43,
        "taxRateRef": {
          "id": "08ca1c6e-0374-11ed-b939-0242ac120002",
          "dataType": "AccountingTaxRate"
        },
        "accountRef": {
          "id": "08ca1c6e-0374-11ed-b939-0242ac120002",
          "dataType": "AccountingAccount"
        },
        "trackingRefs": [
          {
            "id": "08ca1c6e-0374-11ed-b939-0242ac120002",
            "dataType": "AccountingTrackingCategory"
          }
        ]
      }
    ],
    "notes": "COUNTDOWN ONEHUNGA - AUCKLAND - Card Ending: 2995"
  }
]
}
```

```
{
"expenseReconciliations": {
  "id": "b286d609-a393-4965-9b25-ab1cfd6d78a9",
  "type": "Sync"
}
}
```

```
{
"expenseReconciliations": {
  "id": "2a609f57-e6d8-4914-9af8-566ca7f01e4b",
  "type": "Dataset"
}
}
```
