---
title: "How the demo app works"
sidebar_label: "How it works"
description: "A closer look at the functionality of the bill pay demo app"
---

Now you're ready to explore the functionality of the bill pay demo app in more depth. The user flow diagrams describe the demo app's functionality at a high level, while the example API calls show the exchange of data with the Codat API.

## Understand the authorization flow

The company creation feature and [authorization flow](/accounting-api/guides/bill-pay/use-bill-pay-demo-app#connect-the-demo-app-to-quickbooks-online) were built using the Common API and Hosted Link. For a seamless user experience, we customized the Hosted Link flow with the same branding and colors as the demo app UI - see [Customize Link](/auth-flow/customize/customize-link) for more details.

The main features are:

- Creating a company to represent the user using the [Create company](/codat-api#/operations/create-company) endpoint. This returns a unique company ID and Link URL.
- Redirecting the user to their chosen accounting platform (in this case, QuickBooks Online) via the Link URL. This opens the OAuth login window for the accounting platform, where the user can authenticate and authorize access to their accounting data. 
- Creating a data connection to the accounting platform using the [Create connection](/codat-api#/operations/create-data-connection) endpoint.
- When the company is successfully connected, redirecting the user to the demo app's redirect URL, as defined in the [Link settings](/auth-flow/customize/customize-link).

## View bills

The following diagram illustrates the user flow for viewing bills in the demo app UI.

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

When launched, the demo app [retrieves a list of all bills](/accounting-api#/operations/list-bills) from your sandbox QuickBooks Online company, in descending order of issue date.

Here is an example request:

```http title="List bills"
GET https://api.codat.io/companies/<COMPANY_ID>/data/bills?page=1&pageSize=100&orderBy=-issueDate
```

```json title="Example response for List bills (200)"
{
    "results": [
      {
        "id": "181",
        "supplierRef": {
          "id": "41",
          "supplierName": "Mac's Supply Store"
        },
        "purchaseOrderRefs": [],
        "issueDate": "2023-04-01T00:00:00",
        "dueDate": "2023-04-01T00:00:00",
        "currency": "GBP",
        "currencyRate": 1,
        "lineItems": [
          {
            #...
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

When launched, the demo app [fetches the company's latest accounts](/accounting-api#/operations/list-accounts). The account name is displayed against its respective bill in the **Reference** column of the bills table.

Here is an example request:

```http title="Pull accounts"
GET https://codat.io/companies/<COMPANY_ID>/data/accounts
```

```json title="Example response for Pull accounts (200)"
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

## Pay a bill

The following diagram illustrates the user flow for selecting and paying a bill in the demo app UI.

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

The bill remains in a `pending` status during the polling process.

When selecting an account in the **Bill Payment** dialog, the **Account name** dropdown only displays banking accounts in the same currency as the bill. The account type is determined using a query parameter for `isBankAccount=true`. 

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

Find out more about the [Accounting API](/accounting-api/overview) or explore our other [use cases](/usecases/overview).