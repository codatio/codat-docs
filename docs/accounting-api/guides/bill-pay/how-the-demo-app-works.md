---
title: "How the demo app works"
sidebar_label: "How it works"
description: "Get a deep dive into the functionality of the Bill Pay demo app"
---

Now you're ready to explore the functionality of the bill pay demo app in more depth. The user flow diagrams describes the app's functionality at a high level, while the API requests document the flow of data between the app and Codat's Accounting API.

## Connect the demo app to QuickBooks Online

### Understand the authorization process

Using the demo app and Hosted Link, create a company and then authorize access to your sandbox data in QuickBooks Online. For a seamless user experience, we've customized the Hosted Link flow to use the same branding and colors as the demo app UI.

1. From the **Bill Pay** start screen, click **Get Started**.
2. Follow the instructions to:
   1. Create a company in Codat.
   2. Connect to **Intuit QuickBooks Sandbox** in the Hosted Link flow. This creates a data connection to QuickBooks Online.
   3. Authorize the demo app to access data from your sandbox QuickBooks Online company.
   4. When you've completed the Hosted Link flow, click **Launch Bills Portal** to open the demo app. Behind the scenes, the demo app redirects you to the redirect URL.

## View bills

Intro

:::note User flow for viewing bills

```mermaid
sequenceDiagram
    participant user as User
    participant backend as Demo App 
    participant codat as Codat API
    
    user ->> backend: Views bills
    Note over user,backend: Launch Bills Portal
    backend ->> codat: Fetches Bills
    codat -->> backend: Bills
    backend ->> codat: Fetches Accounts
    codat -->> backend: Accounts (banking only)
    backend ->> user: Views paid/unpaid bills
    
```
:::

### API call: Fetch Bills

When launched, the demo app [retrives a list of all bills](/accounting-api#/operations/list-bills) from your sandbox QuickBooks Online company, in descending order of issue date.

Here is an example request:

```http title="List bills"
GET https://api.codat.io/companies/<COMPANY_ID>/data/bills?page=1&pageSize=100&orderBy=-issueDate
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

### API call: Fetch accounts

The demo app [fetches the company's latest accounts](/accounting-api#/operations/list-accounts) (banking accounts only). Here is an example request:

```http title="Pull accounts"
GET https://codat.io/companies/<COMPANY_ID>/data/accounts
```

```json title="Example response (200)"
{
    "results": [
      {
        "id": "84",
        "name": "Accounts Receivable (A/R)",
        "fullyQualifiedCategory": "Asset.Accounts Receivable.AccountsReceivable",
        "fullyQualifiedName": "Asset.Accounts Receivable.AccountsReceivable.Accounts Receivable (A/R)",
        "currency": "USD",
        "currentBalance": 5281.52,
        "type": "Asset",
        "status": "Active",
        "isBankAccount": false,
        "modifiedDate": "2023-05-11T09:46:07Z",
        "sourceModifiedDate": "2023-03-12T20:16:17Z",
        "validDatatypeLinks": [],
        "metadata": {
          "isDeleted": false
        }
      },
      #...
     ],
        "metadata": {
          "isDeleted": false
        }
      }
    ],
    "pageNumber": 1,
    "pageSize": 100,
    "totalResults": 90,
    "_links": {
      "current": {
        "href": "/companies/3e67a1ea-a124-4a54-a241-698169eb19fb/data/accounts?page=1"
      },
      "self": {
        "href": "/companies/3e67a1ea-a124-4a54-a241-698169eb19fb/data/accounts"
      }
    }
  }
```

These accounts are displayed in the **Reference** column of the bills table.

## Pay a bill

:::note User flow for paying a bill

```mermaid
sequenceDiagram
    participant user as User
    participant backend as Demo App 
    participant codat as Codat API    
              
    user ->> backend: Selects a bill to pay
    backend ->> user: Bill payment dialog
    user ->> backend: Selects account to assign bill payment to
    user ->> backend: Pays bill & submits bill payment

    backend ->> codat: Creates Bill payment
    codat -->> backend: Push operation
    Note over codat,backend: Polls the push operation endpoint
    loop status != success
        backend ->> codat: Get push operation
        codat ->> backend: Push operation status
    end
    backend ->> backend: Update bill status
    backend ->> user: Bill shown as paid
    
```

:::

The bill remains in a `pending` status during the loop process.

When selecting an account in the **Bill Payment** dialog, the **Account name** dropdown only displays bank accounts in the same currency as the bill. The account type is determined using a query parameter for `isBankAccount=true`. 

The Bill payment will be assigned to the selected account in your sandbox QuickBooks Online company.

### API call: Post a Bill payment to the accounting platform

When you pay a bill, the demo app [creates a Bill payment](/accounting-api#/operations/create-bill-payment) in QuickBooks Online for the total amount due. This process reconciles the payment against the outstanding bill.

Here is an example request:

```http title="Create Bill payment"
POST https://api.codat.io/companies/<COMPANY_ID>/connections/<CONNECTION_ID>/push/billPayments
```

```json title="Example request body"
{
    "supplierRef": {
        "id": "<SUPPLIER_ID>" // ID of the supplier to reconcile payment against
    },
    "accountRef": {
        "id" : "<ACCOUNT_ID>" // ID of the bank account for the payment
    },
    "totalAmount": 2400.00,
    "date": "<ISO_TIMESTAMP>", // date and time of payment
    "currency": "USD",
    "lines": [
      {
        "amount": 2400.00, // total amount of bill
        "links": [
          {
            "type": "Bill",
            "id": "<BILL_ID>", // separate link for each bill the bill payment should be reconciled against
            "amount": -2400.00
          }
        ]
      }
    ]
  }
```

## 💪 Ready for more?

Try these suggestions to make the most of your experience with the demo app:

- **Access sandbox data for a different region**  
  You can set up a sandbox QuickBooks Online company that contains data for a different region, then run through the demo app guide again. For more information, see [Create and test with a sandbox company](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes) in the Intuit developer documentation.

- **Expand the app's functionality**  
  Go one step further and develop other features that make the Accounts Payable process simpler for your customers. For example, you could provide the ability to pay a bill using a credit note, or create a new bill from within your application.

- **Further reading**  
  Explore accounting automation topics in the [Codat Blog](https://www.codat.io/blog/category/accounting-automation/). 

You can also find out more about the [Accounting API](/accounting-api/overview), or explore other [use cases](/usecases/overview).