---
title: "How the demo app works"
sidebar_label: "How it works"
description: "This deep dive explains the functionality of the Bill Pay demo app."
---

### API: Pull accounts payable

When launched, the demo app [retrives a list of all bills](/accounting-api#/operations/list-bills) from your sandbox QuickBooks Online company, in descending order of issue date.

```http title="List bills request"
GET https://<YOUR_DOMAIN>/companies/<COMPANY_ID>/data/bills?page=1&pageSize=100&orderBy=-issueDate
```

```json title="List bills response example"
{
  "results": [
    {
      "id": "181",
      "supplierRef": {
        "id": "41",
        "supplierName": "Mark Howard"
      },
      "purchaseOrderRefs": [],
      "issueDate": "2023-04-01T00:00:00",
      "dueDate": "2023-04-01T00:00:00",
      "currency": "GBP",
      "currencyRate": 1,
      "lineItems": [
        {
          "description": "monthly office rent",
          "unitAmount": 1250,
          "quantity": 1,
          "discountAmount": 0,
          "subTotal": 1250,
          "taxAmount": 250,
          "totalAmount": 1500,
          "accountRef": {
            "id": "41",
            "name": "Rent Expense"
          },
          "taxRateRef": {
            "id": "3_Bills",
            "name": "20.0% S Bills",
            "effectiveTaxRate": 20
          },
          "trackingCategoryRefs": [],
          "tracking": {
            "categoryRefs": [],
            "isBilledTo": "Unknown",
            "isRebilledTo": "NotApplicable"
          },
          "isDirectCost": false
        }
      ],
      "withholdingTax": [],
      "status": "Open",
      "subTotal": 1250,
      "taxAmount": 250,
      "totalAmount": 1500,
      "amountDue": 1500,
      "modifiedDate": "2023-05-02T10:35:04Z",
      "sourceModifiedDate": "2023-03-27T23:30:01Z",
      "paymentAllocations": [],
      "metadata": {
        "isDeleted": false
      }
    },
    # ...
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 8,
  "_links": {
    "current": {
      "href": "/companies/0f655a48-f6c2-43b4-857b-f2d6793f90b8/data/bills?page=1&pageSize=100&orderBy=-issueDate"
    },
    "self": {
      "href": "/companies/0f655a48-f6c2-43b4-857b-f2d6793f90b8/data/bills"
    }
  }
}
```

:::info View unpaid bills query

When the **View unpaid bills only toggle** is selected in the UI, the `&query=status=Open` query is appended to the request URL as a [Codat query string](/using-the-api/querying). This returns only unpaid bills.

:::

### API: Pull bank accounts

At step 2 in "Make a mock payment", the demo app [retrieves the company's latest accounts](/accounting-api#/operations/list-accounts) and queries the results by account type and currency.

```http
ADD REQUEST HERE
```

### API: Post a Bill payment to the accounting platform

When you make a mock payment, the demo app pushes a Bill payment to QuickBooks for the total amount of the bill. This reconciles the payment against the outstanding bill.

```http
ADD REQUEST HERE
```
