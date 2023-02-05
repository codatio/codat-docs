---
title: "Expense transactions"
---

# expense-transactions

An expense reconciliation represents the context behind the purchase.
s
It can include details about the purchase, for example:

- Which account in the general ledger the transaction should be reconciled to

- The associated tax rates

- Any applicable tracking categories

When pushing expenses, use your transaction `id` so that it can serve as an idempotency key. Codat validates `id`'s to ensure that every `id` is unique to a company. This approach prevents duplicate transactions being created in your SMBs' bank feeds.

**Transaction Types**

The way Codat handles, maps and processes a transaction is based on the specified `type` and signage of the transaction.

| **Transaction Type** | **Description and Usage**                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Payment**          | Is used to represent any spend that takes place on the account and interest on credit purchases.                      |
| **Refund**           | Can be used to represent any refunds and returns on an original transaction.                                          |
| **Reward**           | Can be used to represent reward redemption such as points for cash.                                                   |
| **Chargeback**       | Is similar, to a refund in behaviour and represents a return of transaction/payment sum which may have been disputed. |
| **Adjustment**       | Can be used to represent write-off's & transaction adjustments such as foreign exchange adjustments                   |
| **Transfer**         | Can be used to represent bank withdrawals, a top up of debit card account, a pay down of a credit card account.       |

```json http
{
  "method": "post",
  "baseUrl": "https://expensesync.codat.io",
  "headers": {
    "authorization": ""
  },
  "url": "/companies/{companyId}/data/expense-transactions",
  "body": {
    "items": [
      {
        "id": "08ca1f02-0374-11ed-b939-0242ac120002",
        "type": "payment",
        "issueDate": "2021-05-21T00:00:00+00:00",
        "currency": "GBP",
        "currencyRate": 1.18,
        "merchantName": "Amazon UK",
        "lines": [
          {
            "netAmount": 110.42,
            "taxAmount": 14.43,
            "taxRateRef": {
              "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
            },
            "accountRef": {
              "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
            },
            "trackingRefs": [
              {
                "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
              }
            ]
          }
        ],
        "notes": "string"
      }
    ]
  }
}
```
