---
title: "Bank feeds transactions in QuickBooks Online"
description: "How to build QuickBooks Bank Feeds powered by Codat"
hidden: true
createdAt: "2022-11-11T15:43:45.150Z"
updatedAt: "2022-11-11T17:13:20.052Z"
---

Things to add:
Who you are
You customers
Problem to be solved

## Overview

### Codat Bank Feeds

Codat enables posting of post bank transaction data to accounting platforms.

### Scope

#### Support Platforms

Codat supports bank feeds to:

- QuickBooks Online (US & Canada)
- Xero

In this guide we'll show how to build a solution for QuickBooks Online

This specification covers QuickBooks Online, as discussed up to this point.

Any integrations to further platforms beyond QBO will require some work to enable the authentication user journey. The bank transaction data push will be largely re-usable.

An integration to Xero will require a further specification.

## Solution

### Authentication user journey

diagram

1. User is logged into your platform
2. User selects the option to connect bank transactions to QBO.
   - This will be a button that client implements into your bank experience.
3. User directed to credential generation screen.
   - When the user clicks the button in step 2, call the Codat API: - POST Company (or POST Connection if the company already exists in
     Codat)
   - The request body will specify QBO bank feeds as the connection to be created
   - The response body includes a linkUrl; direct the user to this linkUrl.
   - The linkUrl will take the user to the Set up QuickBooks bank feeds page, hosted by Codat.
   - The user follows the steps on the Set up QuickBooks bank feeds page to generate unique credentials. These credentials will be used in step 6.
4. User logs in to QBO and selects the Link Account option.
5. User searches the QBO account list for your bank (the name provided in the request
   to Intuit).

diagram

6. After selecting the your bank option in step 5, the user will be prompted to enter credentials. The user enters credentials that they were given in step 3.
7. User selects which Bank Account to link, and which account to map the Bank Account to. This page is hosted by QBO. The user can select from any account in the chart of accounts that is a bank account or credit card and does not have an existing bank feed linked.
8. Bank feed link is complete.
9. Codat connection status changes to Linked.
10. client can set up a webhook alert that will notify when the connection status changes to Linked, indicating a successful connection.

### Deauthorization user journey

Codat provides the ability to disconnect a bank feed to QuickBooks Online.

We recommend that the option to disconnect an existing bank feed is offered to the your bank customer.

The implementation section covers the API call to disconnect a connection.

Diagram

## Implementation

### Enabling QuickBooks Online bank feeds via Codat

QuickBooks Online bank feeds must be enabled by Intuit before the solution can go into production. The process is as below:

1. client requests Codat to enable bank feeds: provides name that will appear in
   the QBO connection journey
2. Codat makes request to Intuit on client’s behalf to enable bank feeds
3. Intuit approves client to appear in the QBO bank selection screen.

Note: _This step from Intuit is subject to approval; it is unlikely that Intuit will reject a client building via Codat._

### Authentication user journey

#### Initiation

The user journey is initiated by directing the user to a Codat-provided linkUrl that corresponds to a Codat QuickBooks Bank Feed connection.

There are two scenarios that must be addressed for this: creating a new company and corresponding QBO bank feed connection, and creating a QBO bank feed connection for an existing company.

#### Create new company

Creating a new company is appropriate when the user does not have any other existing use cases with Codat.

The name is to be specified by client, with the desired company name to be created.

The platformKey is `hcws`, representing QBO Bank Feeds.

Example request body:

```
{
"name": "company name specified here",
"platformType": "hcws"
}",
      "language": "text"
    }
  ]
}

The response body will include a linkUrl - included below.

### Create new connection on existing company

Creating a new connection for an existing company is appropriate when the user has another existing use case with Codat, and as a result has a corresponding companyId. This existing companyId should be provided in the request to create a new connection.

The platformKey is `hcws`, representing QBO Bank Feeds.

Example request body:

```

{
"platformKey": "hcws"
}",
"language": "text"
}
]
}

The response body will include a linkUrl.

From either the new company or existing company flows, the user should be directed to this linkUrl provided in the response body.

Once the user is directed to the linkUrl, this Codat-hosted page will generate credentials for the user to input in QBO.

Screenshot

The user will follow the steps on the Codat-hosted page in QBO, and the authorization
journey is complete.

### User interface

The language and authentication screen provided between Codat and QBO are fixed to a format (provided by Intuit).
Deauthorization Bank feeds can be deauthorized using the Delete connection endpoint. This will remove the connection to the bank feed, when provided with a companyId and a connectionId:

`DELETE /companies/{companyId}/connections/{connectionId}`

### Posting bank transactions

Once the authorization journey is completed, post bank transactions to QBO
via the Codat API.

POST Bank Transaction

Example request body:

```
{
"accountId": "string",
"transactions": [
  {
    "date": "2022-08-30T00:13:46.488Z",
    "description": "string",
    "reconciled": true,
    "amount": 0,
    "balance": 0,
    "transactionType": "Unknown",
  }
],
}",
      "language": "text"
    }
  ]
}


### Best practices

Codat recommends pushing transactions in batches of 1000 or less for performance reasons.

QuickBooks Online will be pulling once a day from the backlog of transactions, or when the client manually presses the “update” button within the QBO User Interface.
```
