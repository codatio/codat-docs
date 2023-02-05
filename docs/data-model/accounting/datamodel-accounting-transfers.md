---
title: "Transfers"
description: "Records the movement of money between two bank accounts or between a bank account and a nominal account"
createdAt: "2021-05-28T01:56:43.219Z"
updatedAt: "2022-11-22T11:15:00.389Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Transfers" target="_blank">Transfers</a> endpoints in Swagger.

View the coverage for transfers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers" target="_blank">Data coverage explorer</a>.

From the **Transfers** endpoints, you can:

- [Retrieve a list of all transfers for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers)
- [Retrieve a single transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/get_companies__companyId__connections__connectionId__data_transfers__transferId_)
- [Add a new transfer for a specified company](https://api.codat.io/swagger/index.html#/Transfers/post_companies__companyId__connections__connectionId__push_transfers)

**Transfers** is a child data type of [account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Unique identifier for the transfer.",
"1-0": "**description**",
"1-1": "_string_",
"1-2": "Description of the transfer.",
"2-0": "**contactRef** ",
"2-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-contactref)",
"2-2": "The customer or supplier for the transfer, if available.",
"3-0": "**date** ",
"3-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"3-2": "The day on which the transfer was made.",
"4-0": "**from**/**to**",
"4-1": "",
"4-2": "The details of the [accounts](https://docs.codat.io/docs/datamodel-accounting-transfers#section-transfer-account-details) the transfer is moving from or to.",
"5-0": "**trackingCategoryRefs**",
"5-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-trackingcategoryref)",
"5-2": "Reference to the tracking categories this transfer is being tracked against.",
"6-0": "**modifiedDate**",
"6-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"6-2": "Date the record was last updated in the Codat system.",
"7-0": "**sourceModifiedDate**",
"7-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"7-2": "Date the record was last changed in the accounting system."
},
"cols": 3,
"rows": 8,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Transfer from/to account details

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "accountRef",
"0-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)",
"0-2": "The account that the transfer is moving from or to.",
"1-0": "currency",
"1-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"1-2": "ISO currency code recorded for the transfer in the accounting platform.",
"2-0": "amount",
"2-1": "_decimal_",
"2-2": "The amount transferred between accounts."
},
"cols": 3,
"rows": 3,
"align": [
"left",
"left",
"left"
]
}
[/block]

<br />

```json Transfer
[
  {
    "id": "f155f8fa-2b19-4105-842b-d21880321ecb",
    "description": "Bank transfer from business account",
    "contactRef": {
      "id": "ddcf351f-c931-46fb-b6d9-e53cbf238847",
      "dataType": "customers"
    },
    "date": "2021-06-02T00:00:00",
    "from": {
      "accountRef": {
        "id": "1d1dfe84-0199-45cc-8f36-d5f4ddf586d6",
        "dataType": "bankAccounts"
      },
      "currency": "GBP",
      "amount": 50.0
    },
    "to": {
      "accountRef": {
        "id": "9ea60f8f-bd49-44ca-ac8a-e1da21ee0570",
        "dataType": "bankAccounts"
      },
      "currency": "GBP",
      "amount": 50.0
    },
    "trackingCategoryRefs": [
      {
        "id": "0a549dde-8326-4978-94dd-feb4620beb3f",
        "name": "region"
      },
      {
        "id": "2d55b500-fbc4-4109-9e5f-d86e302b4046",
        "name": "expenses"
      }
    ],
    "modifiedDate": "2021-06-02T10:45:42"
  },
  {
    "id": "db3586e1-3549-4d09-93ac-707548da7514",
    "description": "Bank transfer from european bank account",
    "contactRef": {
      "id": "eabc09f1-508d-4831-9e5d-e77623a7955d",
      "dataType": "suppliers"
    },
    "date": "2021-06-02T00:00:00",
    "from": {
      "accountRef": {
        "id": "1a6d0b6c-c6de-49e2-957a-ae6721009a64",
        "dataType": "bankAccounts"
      },
      "currency": "EUR",
      "amount": 25.0
    },
    "to": {
      "accountRef": {
        "id": "09a85c62-e889-4141-91e9-c7b9d97a5e2e",
        "dataType": "bankAccounts"
      },
      "currency": "GBP",
      "amount": 20.0
    },
    "trackingCategoryRefs": [
      {
        "id": "2d55b500-fbc4-4109-9e5f-d86e302b4046",
        "name": "expenses"
      }
    ],
    "modifiedDate": "2021-06-02T10:45:42"
  }
]
```
