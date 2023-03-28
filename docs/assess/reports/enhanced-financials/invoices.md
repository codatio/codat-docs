---
title: "Enhanced Invoices"
description: "Endpoint reference to produce a fully categorized profit and loss statement"
createdAt: "2023-01-25T13:57:24.867Z"
updatedAt: "2023-01-28T15:26:01.665Z"
---

The Enhanced Invoices Report endpoint returns a list of invoices from the linked accountancy platform and verifies those marked as paid have actually been paid by matching with the bank statement.

Explore the _Enhanced Invoices Report_ endpoint in in our [Assess API reference](/assess-api#/operations/get-enhanced-invoices-report).

`GET /companies/{companyId}/reports/enhancedInvoices`

## Parameters

|Parameters|Type|Description|Required|
|----|----|----|----|
|**page**|_integer_|Default is 1.|Optional|
|**pageSize**|_integer_|Maximum integer allowed is 5,000. Default is 100.|Optional|
|**query**|_string_|Custom query string.|Optional|

## Data model

The response structure is split into two areas: Report info and Report items.

### Report info


|Field|Type|Description|
|----|----|----|
|**reportName**|_string_|"Invoices report"|
|**companyName**|_string_|The name of the company being queried.|
|**generatedDate**|_string_, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DDT00:00:00Z. The date the invoices report was generated.|
|**pageNumber**|_number_|The number of the page queried.|
|**pageSize**|_number_|The number of transactions returned per page.|
|**totalResults**|_number_|The total number of transactions available for a company for the period specified in the query string.|

### Report Items

|Field|Type|Description|
|----|----|----|
|**invoices**|_array_, See [Invoices](#invoices)|An array containing invoice data joined with payments data.|

#### Invoices

|Field|Type|Description|
|----|----|----|
|**id**|_string_|ID of the invoice, which may be a GUID but it may be something else depending on the accounting platform.|
|**invoiceNumber**|_string_|Number of the invoice.|
|**customerRef**|_object_|Customer reference.|
|**issueDate**|__string_, See [Date](/codat-api#/schemas/DateTime)_|The date the invoices was issued.|
|**dueDate**|_string_, See [Date](/codat-api#/schemas/DateTime)|The date the invoice was due.|
|**status**|_string_|The current state of the invoice.  For details please refer to the [Assess API reference](/assess-api#/operations/get-enhanced-invoices-report).|
|**currency**|_string_|ISO 4217 currency code.|
|**totalAmount**|_number_|Total amount of the invoice in the specified currency.|
|**amountDue**|_number_|The amount due on the invoice.|
|**paidOnDate**|_string_|The date on which the invoice was paid.|
|**payments**|_payment_, See [Payments](#payments)|An array of payments made on the invoice.|

#### Payments

| Field             | Type                                               | Description                                                  |
| ----------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| **id**            | _string_                                           | ID of the payment.                                           |
| **invoiceNumber** | _string_                                           | Number of the invoice.                                       |
| **customerRef**   | _object_                                           | Customer reference.                                          |
| **issueDate**     | _string_, See [Date](/codat-api#/schemas/DateTime) | The date the invoices was issued.                            |
| **dueDate**       | _string_, See [Date](/codat-api#/schemas/DateTime) | The date the invoice was due.                                |
| **status**        | _string_                                           | The current state of the invoice.  For details please refer to the [Assess API reference](/assess-api#/operations/get-enhanced-invoices-report). |
| **currency**      | _string_                                           | ISO 4217 currency code.                                      |
| **totalAmount**   | _number_                                           | Total amount of the invoice in the specified currency.       |
| **amountDue**     | _number_                                           | The amount due on the invoice.                               |
| **paidOnDate**    | _string_                                           | The date on which the invoice was paid.                      |
| **payments**      | _object_                                           | An array of payments made on the invoice.                    |

### Example data

```
{
  "reportInfo": {
    "pageNumber": 1,
    "pageSize": 10,
    "totalResults": 101,
    "reportName": "Invoices report",
    "companyName": "Small Sandbox",
    "generatedDate": "2023-03-24T12:04:49.3860959Z"
  },
  "reportItems": [
    {
      "id": "15221fa4-e91a-4f64-a2bb-caeab4db85a4",
      "invoiceNumber": "UDs5KlfE",
      "customerRef": {
        "id": "ee4d0eee-063d-4c9f-8226-2c9a6a816249",
        "companyName": "Serena Keeling"
      },
      "issueDate": "2021-04-06T09:44:00",
      "dueDate": "2021-04-06T09:44:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 7044.83,
      "amountDue": 0.0,
      "paidOnDate": "2021-04-06T09:44:00",
      "payments": []
    },
    {
      "id": "58aea1cb-5b31-4eed-ba16-489dfa67a831",
      "invoiceNumber": "1IU1PMoT",
      "customerRef": {
        "id": "81e9c0df-3e5e-4180-b20c-c8e58100cdf3",
        "companyName": "Quinton Kovacek"
      },
      "issueDate": "2021-04-06T09:44:00",
      "dueDate": "2021-04-06T09:44:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 3567.59,
      "amountDue": 0.0,
      "paidOnDate": "2021-04-06T09:44:00",
      "payments": []
    },
    {
      "id": "9ecd07bc-9cab-4516-bad0-a0cd565cdbaf",
      "invoiceNumber": "eEIWyPN4",
      "customerRef": {
        "id": "c7326084-cd56-48e6-bcfa-be8919e024e1",
        "companyName": "Antwon Dach"
      },
      "issueDate": "2021-04-08T01:27:00",
      "dueDate": "2021-04-18T01:27:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 153233.36,
      "amountDue": 0.0,
      "paidOnDate": "2021-04-10T12:31:00",
      "payments": [
        {
          "id": "271f2bd4-fab2-468c-9ea5-636b02c865b2",
          "date": "2021-04-10T12:31:00",
          "paymentType": "payments",
          "amount": 153233.36,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "7cea078a-5c9a-4788-ae72-9bb60c5cc184",
      "invoiceNumber": "BXb8mYQW",
      "customerRef": {
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0",
        "companyName": "Dolores Rath"
      },
      "issueDate": "2021-04-16T17:30:00",
      "dueDate": "2021-04-23T17:30:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 12657.69,
      "amountDue": 0.0,
      "paidOnDate": "2021-04-23T17:30:00",
      "payments": [
        {
          "id": "701608b9-2c52-443a-a272-7acc820e7065",
          "date": "2021-04-23T17:30:00",
          "paymentType": "payments",
          "amount": 12657.69,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "aa4503d7-fe01-49fe-ba42-259b421ac640",
      "invoiceNumber": "wdjwiL5B",
      "customerRef": {
        "id": "5cbaf1af-4f02-4206-85ab-c525bd9b4f99",
        "companyName": "Bryana Douglas"
      },
      "issueDate": "2021-04-20T06:46:00",
      "dueDate": "2021-04-27T06:46:00",
      "status": "PartiallyPaid",
      "currency": "GBP",
      "totalAmount": 12935.39,
      "amountDue": 381.09,
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "id": "8c353289-0828-4991-983c-0285c7fc4fb3",
          "date": "2021-04-23T14:59:00",
          "paymentType": "payments",
          "amount": 12554.30,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "d8a0e26e-4ec8-4fb5-887d-8b7531e3bedf",
      "invoiceNumber": "cTjJcu8x",
      "customerRef": {
        "id": "6f5290e5-70aa-4d0c-816e-9d2312cf217f",
        "companyName": "Brady Wilderman"
      },
      "issueDate": "2021-04-23T09:32:00",
      "dueDate": "2021-05-03T09:32:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 21526.72,
      "amountDue": 0.0,
      "paidOnDate": "2021-05-03T09:32:00",
      "payments": [
        {
          "id": "a91beee3-3b73-4194-8ded-837955d62900",
          "date": "2021-05-03T09:32:00",
          "paymentType": "payments",
          "amount": 21506.72,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "06890e67-35fb-4276-9857-95db40cfd15d",
      "invoiceNumber": "htXJuUDb",
      "customerRef": {
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0",
        "companyName": "Dolores Rath"
      },
      "issueDate": "2021-05-01T23:23:00",
      "dueDate": "2021-05-11T23:23:00",
      "status": "PartiallyPaid",
      "currency": "GBP",
      "totalAmount": 7151.41,
      "amountDue": 1225.06,
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "id": "36c9294d-ed7b-4903-813d-e44f259cc4d6",
          "date": "2021-05-04T17:57:00",
          "paymentType": "payments",
          "amount": 5926.35,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "160e8b51-1fa0-46b9-98fe-1ff5399ce99b",
      "invoiceNumber": "9wegEXpG",
      "customerRef": {
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0",
        "companyName": "Dolores Rath"
      },
      "issueDate": "2021-05-18T08:53:00",
      "dueDate": "2021-05-25T08:53:00",
      "status": "PartiallyPaid",
      "currency": "GBP",
      "totalAmount": 22522.34,
      "amountDue": 14408.54,
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "id": "c913cd2e-9dac-4403-91cd-487892a7add0",
          "date": "2021-05-23T04:04:00",
          "paymentType": "payments",
          "amount": 8113.80,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "5a934955-561d-436a-a564-fd624a79f54c",
      "invoiceNumber": "l7YwGxG7",
      "customerRef": {
        "id": "cc96af36-e2f5-49f7-bf40-271503f45071",
        "companyName": "Ignacio Moore"
      },
      "issueDate": "2021-05-25T19:51:00",
      "dueDate": "2021-06-04T19:51:00",
      "status": "Paid",
      "currency": "GBP",
      "totalAmount": 11047.08,
      "amountDue": 0.0,
      "paidOnDate": "2021-05-28T07:31:00",
      "payments": [
        {
          "id": "d7b2371d-94bd-4c58-a585-a893567d4ccd",
          "date": "2021-05-28T07:31:00",
          "paymentType": "payments",
          "amount": 11047.08,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    },
    {
      "id": "17690788-2936-46b5-ba46-ba6a36a87483",
      "invoiceNumber": "ntH1cRYz",
      "customerRef": {
        "id": "e1ecc8f2-8a63-4fe9-97c9-c87fd90ca0a6",
        "companyName": "Freida Ebert"
      },
      "issueDate": "2021-05-27T19:07:00",
      "dueDate": "2021-06-03T19:07:00",
      "status": "PartiallyPaid",
      "currency": "GBP",
      "totalAmount": 7191.32,
      "amountDue": 5036.83,
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "id": "b152a8b3-0320-42a7-817e-9781ac6ca951",
          "date": "2021-06-03T19:07:00",
          "paymentType": "payments",
          "amount": 2154.49,
          "currency": "GBP",
          "currencyRate": 1.000000000
        }
      ]
    }
  ]
}
```
