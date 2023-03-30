---
title: "Details"
description: "Reference document for the Data Integrity details endpoint"
sidebar_label: "Details"
---

## Details

This endpoint exposes match results record by record for a given data type, filtered based on a query string in the same way as summary results. The results are [paginated](/using-the-api/paging) and support [ordering](/using-the-api/ordering-results), following the same conventions as our other data endpoints.

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-assess-dataTypes-dataType-dataIntegrity-details">API reference</a>.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details`

### Parameters
| **Parameter** | Type | Description |
|---|---|---|
| **companyId** | _string_ | The ID of the company you want match results for. <br/> Submit as route parameter. |
| **dataType** | _string_ | The data type you want match results for. <br/> **Accounting source:** <br/> **[bankAccounts](/accounting-api#/schemas/BankAccount), <br/> [accountTransactions](/accounting-api#/schemas/AccountTransaction)**. <br/> **Banking source:** <br/> **[banking-accounts](/banking-api#/schemas/Account), <br/> [banking-transactions](/banking-api#/schemas/Transaction)**. <br/> Submit as route parameter. |
| **Query** | _string_ | Can query any property in response. This follows the standard [Codat query language](/using-the-api/querying). |
| **page** | _number_ | Submit as query parameter. Defaults to 1. |
| **pageSize** | _number_ | Submit as query parameter. Defaults to 100. |
| **orderBy** | _string_ | State the property name by which you would like to order the response by. <br/> Submit as query parameter. |


### Data model

#### Response for transactions
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type of the record.  |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id** | _string_ | ID GUID of the transaction. This is unique to data integrity.|
| **date** | _date_, See [Date](/codat-api#/schemas/DateTime) | The date of the transaction.  |
| **description** | _string_ | The transaction description.  |
| **amount** | _number_ | The transaction value.  |
| **currency** | _string_ | The currency of the transaction.  |
| **matches** | _array_, See [Transactions matches array](/assess/data-integrity/api-data-integrity#transactions-matches) | Refer to the matches array table below. |

#### Transactions matches
This outlines the transaction(s) in which the original transaction has matched with its corresponding transaction in the other platform.

| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. <br/> For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform. |
| **id** | _string_ | ID GUID of the transaction. This is unique to data integrity.|
| **date** | _date_, See [Date](/codat-api#/schemas/DateTime) | The date of the transaction.  |
| **description** | _string_ | The transaction description.  |
| **amount** | _number_ | The transaction value.  |
| **currency** | _string_ | The currency of the transaction.  |


#### Response for accounts
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type of the record.  |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id ** | _string_ | The account’s id. |
| **accountName ** | _string_ | The name of the account.  |
| **institution ** | _string_ | The name of the financial institution. |
| **matches** | _array_, See [Accounts matches array](/assess/data-integrity/api-data-integrity#transactions-matches) | Refer to the matches array table below. |

#### Accounts matches
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. <br/> For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id ** | _string_ | The account’s id.  |
| **accountName ** | _string_ | The name of the account.  |
| **institution ** | _string_ | The name of the financial institution.  |

### Sample Response

````
//Call with datatype = accountTransactions
{
  "results": [
    {
      "type":"accountTransactions",
      "connectionId": "guid",
      //Id field here and on matches will be accountId_transactionId.
      //This is because we ideally would like a single consistent model for
      //'transaction-related' datatypes, and e.g. invoices don't have an account ID.
      //We will make this clear in documentation.
      "id": "string",
      "date": "2021-09-15T09:00:10.898Z",
      "description": "Buying toast",
      "amount": 236.94,
      "matches":[
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Purchasing toast",
          "amount": 236.94,
        },
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Investing in grilled bread",
          "amount": 288.81,
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 50,
  "totalResults": 237
}
//(Calling with datatype = banking-transactions will produce results in an identical format,
//except that the list of matches will all have a 'type' field of accountTransaction)

//Call with datatype = bankAccounts
{
  "results": [
    {
      "type": "bankAccounts",
      "connectionId": "guid",
      "id": "string",
      "accountName": "string",
      "institution": "string",
      "matches": [
        {
          "type": "banking-accounts",
          "connectionId": "guid",
          "id": "string",
          "accountName": "string",
          "institution": "string"
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 20,
  "totalResults": 23
}
//(Calling with datatype = banking-accounts will produce results in an identical format,
//except that the list of matches will all have a 'type' field of bankAccounts)```
````