---
title: "Bank transactions"
description: "A record of money that moved in and out of your bank account"
createdAt: "2019-03-15T13:26:35.227Z"
updatedAt: "2022-11-16T09:31:06.238Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BankAccounts/get_companies__companyId__connections__connectionId__data_bankAccounts__accountId__bankTransactions" target="_blank">Bank Transactions</a> endpoints in Swagger.

View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.

:::caution Accessing Bank Accounts through Banking API

This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators.

To view bank account data through the Banking API, please refer to the new datatype [here](/data-model-banking-banking-transactions)
:::

## Overview

Transactional banking data for a specific company and account.

Bank transactions include the:

- Amount of the transaction.
- Current account balance.
- Transaction type, for example, credit, debit, or transfer.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"3-0": "**description** ",
"6-0": "**reconciled** ",
"7-0": "**amount** ",
"8-0": "**balance** ",
"9-0": "**transactionType** ",
"10-0": "**modifiedDate** ",
"10-2": "Date the record was last updated in the Codat system.",
"10-1": "_string_
See [date](/datamodel-shared-date)",
"9-2": "Type of transaction for the bank statement line, either:

- `Unknown`
- `Credit`
- `Debit`
- `Int`
- `Div`
- `Fee`
- `SerChg`
- `Dep`
- `Atm`
- `Pos`
- `Xfer`
- `Check`
- `Payment`
- `Cash`
- `DirectDep`
- `DirectDebit`
- `RepeatPmt`
- `Other`",
  "0-1": "_string_",
  "3-1": "_string_",
  "6-1": "_boolean_ ",
  "7-1": "_decimal_",
  "8-1": "_decimal_",
  "7-2": "Total amount of the transaction line item.",
  "8-2": "Current balance of the bank account, with the line item accounted for.",
  "3-2": "Description of the bank transaction.",
  "6-2": "If `true`, then the bank transaction is reconciled with the bank statement, and the accounting platform matches the bank statement.",
  "0-2": "Identifier of the bank transaction that is unique to the [company](/datamodel-accounting-company).",
  "1-0": "**accountId** ",
  "1-1": "_string_",
  "1-2": "Identifier of the bank account that is unique to the [company](/datamodel-accounting-company).",
  "2-0": "**clearedOnDate** ",
  "2-1": "_string_
  See [date](/datamodel-shared-date)",
  "2-2": "Date the transaction was cleared by the originating bank.",
  "11-0": "**sourceModifiedDate**",
  "11-1": "_string_
  See [date](/datamodel-shared-date)",
  "11-2": "Date the record was last changed in the accounting system.",
  "4-0": "**counterparty**",
  "4-1": "_string_
  nullable",
  "5-0": "**reference**",
  "5-1": "_string_
  nullable",
  "4-2": "Name or description of the payee/payer",
  "5-2": "Additional information associated with the bank transaction."
  },
  "cols": 3,
  "rows": 12
  }
  [/block]

## Example data

````
[
{
  "id": "9d419ff3-c0fb-43b7-a1d6-25d1406211b1",
  "clearedOnDate": "2017-05-02T10:11:16.927Z",
  "description": "Opening Balance",
  "reconciled": true,
  "amount": 0,
  "balance": 33444.13,
  "transactionType": "Unknown",
  "sourceModifiedDate": "2017-05-02T10:11:16.927Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "99523acd-587c-47af-9e70-3163076acf30",
  "clearedOnDate": "2017-10-21T12:12:26.729Z",
  "description": "Payment from Fogforn Leghorn",
  "counterparty" : "Mike's Musicians",
  "reference" : "MM00001",
  "reconciled": true,
  "amount": 457.6,
  "balance": 33901.73,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-21T12:12:26.729Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "ddf904e7-f477-437d-8bcf-d8c785d3f1b9",
  "clearedOnDate": "2017-10-21T23:40:12.728Z",
  "description": "Payment from Speedy Gonzales",
  "reconciled": true,
  "amount": 545.6,
  "balance": 34447.33,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-21T23:40:12.728Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "cf41ffe2-f7d1-4472-9143-9812eb7c9e13",
  "clearedOnDate": "2017-10-22T06:29:34.199Z",
  "description": "Payment from Sylvester",
  "reconciled": true,
  "amount": 521.95,
  "balance": 34969.28,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-22T06:29:34.199Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "340f0a23-b3b0-4476-9387-c08ad4cb0ec3",
  "clearedOnDate": "2017-10-27T13:01:52.185Z",
  "description": "Payment from Sylvester",
  "reconciled": true,
  "amount": 778.8,
  "balance": 35748.08,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-27T13:01:52.185Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "80ee9d07-62ac-4b7f-a5e1-9f43f1d5ce3f",
  "clearedOnDate": "2017-10-30T04:07:41.503Z",
  "description": "Payment from Speedy Gonzales",
  "reconciled": true,
  "amount": 2038.3,
  "balance": 37786.38,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-30T04:07:41.503Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "5af449d0-0736-4642-b6c3-23853875cb08",
  "clearedOnDate": "2017-10-30T13:34:42.043Z",
  "description": "Payment from Tweety",
  "reconciled": true,
  "amount": 411.4,
  "balance": 38197.78,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-30T13:34:42.043Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "60c39d4e-1d54-4ed3-9632-d5d3b9f310a6",
  "clearedOnDate": "2017-10-31T08:02:01.429Z",
  "description": "Payment from Fogforn Leghorn",
  "reconciled": true,
  "amount": 319,
  "balance": 38516.78,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-10-31T08:02:01.429Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "2b1d2fdb-4445-4c39-9d88-93b092492078",
  "clearedOnDate": "2017-11-06T07:14:30.200Z",
  "description": "Payment to ABC Dynamics",
  "reconciled": true,
  "amount": -228.8,
  "balance": 38287.98,
  "transactionType": "Debit",
  "sourceModifiedDate": "2017-11-06T07:14:30.200Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
},
{
  "id": "84acf7b4-2461-4944-a9f7-7456a0b9af64",
  "clearedOnDate": "2017-11-06T09:42:17.739Z",
  "description": "Payment from Porky Pig",
  "reconciled": true,
  "amount": 385,
  "balance": 38672.98,
  "transactionType": "Credit",
  "sourceModifiedDate": "2017-11-06T09:42:17.739Z",
  "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918"
}
]```

````
