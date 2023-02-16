---
title: "Enhanced Cash Flow Transactions"
description: "Reference document for the Enhanced Cash Flow Transactions endpoint"
createdAt: "2022-11-03T17:07:23.438Z"
updatedAt: "2022-12-19T09:48:25.358Z"
---

:::info
The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.
:::

The **Enhanced Cash Flow Transactions** endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

The endpoint is available in our <a href="/assess-api#/operations/get-companies-companyId-reports-enhancedCashFlow-transactions">API reference</a>.

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

## Parameters


{
"data": {
"h-0": "Parameters",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"0-0": "**page** ",
"0-1": "_integer_",
"0-2": "Default is 1.",
"0-3": "Optional",
"1-0": "**pageSize** ",
"1-1": "_integer_",
"1-2": "Maximum integer allowed is 5,000.

Default is 100.",
"1-3": "Optional",
"2-0": "**query** ",
"2-1": "_string_",
"2-2": "_Start_ and _end dates_ can be set based on `postedDate`.

The default for `postedDate` is the latest data against the available transactions.

Start and end dates can be passed through the query string.",
"2-3": "Optional"
},
"cols": 4,
"rows": 3
}


## Data model

The response structure is split into three areas: Report info, Data sources and Report items.

### Report info


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**reportName**",
"1-0": "**companyName**",
"0-1": "_string_",
"1-1": "_string_",
"0-2": ""Cash transactions report"",
"1-2": "The name of the company being queried.",
"2-0": "**generatedDate**",
"6-0": "**pageNumber**",
"7-0": "*pageSize**",
"8-0": "**totalResults\*\*",
"2-1": "*string\*
See [Date](/common-api#/schemas/DateTime)",
"2-2": "YYYY-MM-DDT00:00:00Z

The date the cash flow report was generated.",
"3-0": "**pageNumber**",
"4-0": "**pageSize**",
"5-0": "**totalResults**",
"3-1": "_number_",
"4-1": "_number_",
"5-1": "_number_",
"3-2": "The number of the page queried.",
"4-2": "The number of transactions returned per page.",
"5-2": "The total number of transactions available for a company for the period specified in the query string."
},
"cols": 3,
"rows": 6
}


### Data sources


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**accounts**",
"0-1": "_array_
See [Accounts](#accounts)",
"0-2": "An array containing bank account data for each connected banking data source that have the following data types enabled:

- `banking-accounts`
- `banking-transactions`",
  "1-0": "**sourceRef**",
  "1-1": "_enum_",
  "1-2": "Set to the integration type, i.e. currently "Banking".

Accounting and commerce commerce source types will be available in the future.",
"2-0": "**accounts**",
"2-1": "_array_",
"2-2": ""
},
"cols": 3,
"rows": 1
}


#### Accounts

**Accounts** data is returned for each connection that is of type "Banking".

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**sourceRef**",
"2-0": "**accountProvider**",
"3-0": "**accountName**",
"4-0": "**accountType**",
"5-0": "**currency**",
"6-0": "**currentBalance**",
"0-1": "_enum_",
"0-2": "A source reference containing the `sourceType` object "Banking".",
"2-1": "_string_",
"2-2": "The bank or other financial institution providing the account.",
"3-2": "The name of the account according to the provider.",
"3-1": "_string_",
"4-2": "The type of banking account, e.g. credit or debit.",
"4-1": "_string_",
"5-2": "The currency code for the bank account.",
"6-2": "The balance of the bank account.",
"6-1": "_decimal_",
"5-1": "_string_",
"1-0": "**platformName**",
"1-1": "_string_",
"1-2": "Name of the banking data source, e.g. "Plaid"."
},
"cols": 3,
"rows": 7
}


### Report Items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**transactions**",
"0-1": "_array_
See [Transactions](#transactions)",
"0-2": "An array of transaction data."
},
"cols": 3,
"rows": 1
}


#### Transactions


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**sourceRef**",
"0-1": "_enum_",
"0-2": "A source reference object containing `sourceType` object "Banking".",
"1-0": "**id**",
"2-0": "**date**",
"3-0": "**description**",
"4-0": "**amount**",
"5-0": "**currency**",
"6-0": "**transactionCategory**",
"1-1": "_string_",
"2-1": "_string_
See [Date](/common-api#/schemas/DateTime)",
"2-2": "YYYY-MM-DD

The date the bank transaction was posted.",
"3-1": "_string_",
"4-1": "_decimal_",
"5-2": "The currency code for the account.",
"5-1": "_string_",
"6-1": "_object_
See [Transaction category](#transaction-category)",
"1-2": "The unique identifier of the bank transaction.",
"3-2": "The description of the bank transaction.",
"4-2": "The bank transaction amount.",
"6-2": "Contains an array of category levels."
},
"cols": 3,
"rows": 7
}


#### Transaction category


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**levels**",
"0-1": "_array_",
"0-2": "An array of category levels against an individual transaction. For example:

- "Income"
- "Revenue"
- "Subscription"
- "SubscriptionUpgrade""
  },
  "cols": 3,
  "rows": 1
  }
  

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
