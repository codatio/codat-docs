---
title: "Account transactions"
description: "Transactions that go through a bank account in the accounting data source"
createdAt: "2021-12-14T16:53:29.541Z"
updatedAt: "2022-11-16T09:29:13.737Z"
---

:::info Language tip

In Codat, account transactions represent all transactions posted to a bank account within an accounting platform. For bank transactions posted within a banking platform, refer to [Banking transactions](https://docs.codat.io/docs/datamodel-banking-banking-transactions).
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/AccountTransactions" target="_blank">Account transactions</a> endpoints in Swagger.

View the coverage for account transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=accountTransactions" target="_blank">Data coverage explorer</a>.

## Overview

In Codat’s data model, account transactions represent bank activity within an accounting platform. All transactions that go through a bank account are recorded as account transactions.

Account transactions are created as a result of different business activities, for example:

- Payments: for example, receiving money for payment against an invoice.
- Bill payments: for example, spending money for a payment against a bill.
- Direct costs: for example, withdrawing money from a bank account, either for cash purposes or to make a payment.
- Direct incomes: for example, selling an item directly to a contact and receiving payment at point of sale.
- Transfers: for example, transferring money between two bank accounts.

Account transactions is the parent data type of [payments](https://docs.codat.io/docs/datamodel-accounting-payments), [bill payments](https://docs.codat.io/docs/datamodel-accounting-billpayments), [direct costs](https://docs.codat.io/docs/datamodel-accounting-directcosts), [direct incomes](https://docs.codat.io/docs/datamodel-accounting-directincomes), and [transfers](https://docs.codat.io/docs/datamodel-accounting-transfers).

Perform the following tasks using the <a className="external" href="https://api.codat.io/swagger/index.html#/AccountTransactions" target="_blank">Account transactions</a> endpoints:

- <a
    className="external"
    href="https://api.codat.io/swagger/index.html#/AccountTransactions/get_companies__companyId__connections__connectionId__data_accountTransactions"
    target="_blank"
  >
    Get a list of account transactions
  </a>
- <a
    className="external"
    href="https://api.codat.io/swagger/index.html#/AccountTransactions/get_companies__companyId__connections__connectionId__data_accountTransactions__accountTransactionId_"
    target="_blank"
  >
    Get a single account transaction
  </a>

## Data model

| Field                  | Type                                                                                                 | Description                                                                                                                                   |
| :--------------------- | :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **Id**                 | _string_                                                                                             | Identifier of the direct cost (unique to the company).                                                                                        |
| **transactionId**      | _string_                                                                                             | Identifier of the transaction (unique to the company).                                                                                        |
| **note**               | _string_                                                                                             | Additional information about the account transaction, if available.                                                                           |
| **bankAccountRef**     | See [Reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes#bankaccountref) | Reference to the [bank account](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) the account transaction is recorded against. |
| **currency**           | _string_ <br /> See [Currency](https://docs.codat.io/docs/datamodel-shared-currency)                 | Currency of the account transaction.                                                                                                          |
| **currencyRate**       | _decimal_ <br /> See [Currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)       | Conversion rate between the account transaction currency and the base currency used by the company.                                           |
| **lines**              | _array_ <br /> [Account transaction lines](#account-transaction-lines) (see below)                   | Array of account transaction lines.                                                                                                           |
| **totalAmount**        | _decimal_                                                                                            | Total amount of the account transactions, inclusive of tax.                                                                                   |
| **modifiedDate**       | _string_ <br /> See [Date](https://docs.codat.io/docs/datamodel-shared-date)                         | Date the record was last updated in Codat.                                                                                                    |
| **sourceModifiedDate** | _string_ <br /> See [Date](https://docs.codat.io/docs/datamodel-shared-date)                         | Date the record was last changed in the accounting platform.                                                                                  |
| **date**               | _string_ <br /> See [Date](https://docs.codat.io/docs/datamodel-shared-date)                         | The date the account transaction was recorded in the platform.                                                                                |
| **status**             | _string_                                                                                             | The status of the account transaction:                                                                                                        |

- Unknown
- Unreconciled
- Reconciled
- Void |

### Account transaction lines

|      Field      |                                              Type                                               |                                 Description                                 |
| :-------------: | :---------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
| **description** |                                            _string_                                             |                   Description of the account transaction.                   |
|  **recordRef**  | See [Reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes#recordref) | Links an account transaction line to the underlying record that created it. |
|   **amount**    |                                            _decimal_                                            |                    Amount in the bill payment currency.                     |

#### Example data

```
{
    "id": "d1c5aed6-8f0b-4f9f-b381-b4ce551b9b82",
    "transactionId": "dc5b6989-ad59-43fa-ba0b-7b825020bdbc",
    "note": "Direct income b1dadf18-a666-44de-bd1a-4c3d85a8c270",
    "bankAccountRef": {
      "id": "dbcaf288-2b39-4b95-8ab3-42202ab15918",
      "name": "Current Account"
    },
    "date": "2020-12-02T00:00:00",
    "status": "Reconciled",
    "currency": "GBP",
    "currencyRate": 1,
    "lines": [
      {
        "description": "Payment for direct income $b1dadf18-a666-44de-bd1a-4c3d85a8c270",
        "recordRef": {
          "id": "b1dadf18-a666-44de-bd1a-4c3d85a8c270",
          "dataType": "directIncomes"
        },
        "amount": 37349.14
      }
    ],
    "totalAmount": 37349.14,
    "modifiedDate": "2022-05-16T13:55:30",
    "sourceModifiedDate": "2021-10-16T03:44:08"
  }",
      "language": "json",
      "name": "Invoice example | Account transactions"
    }
  ]
}
[/block]
```
