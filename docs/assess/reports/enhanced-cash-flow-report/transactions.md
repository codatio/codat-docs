---
title: "Enhanced Cash Flow Transactions"
description: "Reference document for the Enhanced Cash Flow Transactions endpoint"
createdAt: "2022-11-03T17:07:23.438Z"
updatedAt: "2022-12-19T09:48:25.358Z"
---

:::info Categorization engine
The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.
:::

The **Enhanced Cash Flow Transactions** endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

The endpoint is available in our <a href="/assess-api#/operations/get-companies-companyId-reports-enhancedCashFlow-transactions">API reference</a>.

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

## Parameters

|Parameters|Type|Description|Required|
|----|----|----|----|
|**page**|_integer_|Default is 1.|Optional|
|**pageSize**|_integer_|Maximum integer allowed is 5,000. Default is 100.|Optional|
|**query**|_string_|_Start_ and _end dates_ can be set based on `postedDate`. <br/> The default for `postedDate` is the latest data against the available transactions. <br/> Start and end dates can be passed through the query string.|Optional|

## Data model

The response structure is split into three areas: Report info, Data sources and Report items.

### Report info


|Field|Type|Description|
|----|----|----|
|**reportName**|_string_|"Cash transactions report"|
|**companyName**|_string_|The name of the company being queried.|
|**generatedDate**|_string_, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DDT00:00:00Z. The date the cash flow report was generated.|
|**pageNumber**|_number_|The number of the page queried.|
|**pageSize**|_number_|The number of transactions returned per page.|
|**totalResults**|_number_|The total number of transactions available for a company for the period specified in the query string.|

### Data sources

|Field|Type|Description|
|----|----|----|
|**accounts**|_array_, See [Accounts](#accounts)|An array containing bank account data for each connected banking data source that have the following data types enabled: `banking-accounts`, `banking-transactions`.|

#### Accounts

**Accounts** data is returned for each connection that is of type "Banking".

|Field|Type|Description|
|----|----|----|
|**sourceRef**|_enum_|A source reference containing the `sourceType` object "Banking".|
|**platformName**|_string_|Name of the banking data source, e.g. "Plaid".|
|**accountProvider**|_string_|The bank or other financial institution providing the account.|
|**accountName**|_string_|The name of the account according to the provider.|
|**accountType**|_string_|The type of banking account, e.g. credit or debit.|
|**currency**|_string_|The currency code for the bank account.|
|**currentBalance**|_decimal_|The balance of the bank account.|

### Report Items

|Field|Type|Description|
|----|----|----|
|**transactions**|_array_, See [Transactions](#transactions)|An array of transaction data.|

#### Transactions

|Field|Type|Description|
|----|----|----|
|**sourceRef**|_enum_|A source reference object containing `sourceType` object "Banking".|
|**id**|_string_|The unique identifier of the bank transaction.|
|**date**|_string_, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD, The date the bank transaction was posted.|
|**description**|_string_|The description of the bank transaction.|
|**amount**|_decimal_|The bank transaction amount.|
|**currency**|_string_|The currency code for the account.|
|**transactionCategory**|_object_, See [Transaction category](#transaction-category)|Contains an array of category levels.|

#### Transaction category

|Field|Type|Description|
|----|----|----|
|**levels**|_array_|An array of category levels against an individual transaction. For example: `Income`, `Revenue`, `Subscription`, `SubscriptionUpgrade`.|  

### Example data

```
{
  "reportInfo": {
      "reportName": "Cash flow transactions report",
      "companyName": "IndigoCoast Pro",
      "generatedDate": "2022-11-10T13:42:46.1855906Z",
      "pageNumber": 1,
      "pageSize": 2,
      "totalResults": 2114
  },
  "dataSources": [
      {
          "accounts": [
              {
                  "sourceRef": {
                      "sourceType": "Banking"
                  },
                  "platformName": "TrueLayer",
                  "accountProvider": "Lloyds Bank",
                  "accountName": "Banking - Business Credit Card",
                  "accountType": "Credit",
                  "currency": "GBP",
                  "currentBalance": 0
              },
              {
                  "sourceRef": {
                      "sourceType": "Banking"
                  },
                  "platformName": "TrueLayer",
                  "accountProvider": "Lloyds Bank",
                  "accountName": "Business Current Account",
                  "accountType": "Debit",
                  "currency": "GBP",
                  "currentBalance": 0
              }
          ]
      }
  ],
  "reportItems": [
      {
          "transactions": [
              {
                  "sourceRef": {
                      "sourceType": "Banking"
                  },
                  "id": "05c1d8bc-3a70-42f5-afb4-94d64526c127",
                  "date": "2022-09-21",
                  "description": "transfer - Payment - customer c27fef58-ca7e-4b20-b324-7279442ba8ae",
                  "amount": 4802.27,
                  "currency": "GBP",
                  "transactionCategory": {
                      "levels": [
                          "Expense",
                          "CostOfSales",
                          "Materials",
                          "Inventory"
                      ]
                  }
              },
              {
                  "sourceRef": {
                      "sourceType": "Banking"
                  },
                  "id": "0868ff46-037d-4787-a55b-d12636eacf72",
                  "date": "2022-09-21",
                  "description": "Payment 2a20cb5d-c9b8-407a-ad8e-82f082cf029f",
                  "amount": -24119.58,
                  "currency": "GBP",
                  "transactionCategory": {
                      "levels": [
                          "Expense",
                          "CostOfSales",
                          "Materials",
                          "Inventory"
                      ]
                  }
              }
          ]
      }
  ]
}
```
