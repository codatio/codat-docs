---
title: "Set up the Oracle NetSuite bank feeds integration"
description: "Set up our integration with Oracle NetSuite bank feeds"
---

Before you can establish a bank feed to Oracle NetSuite, you need to set up the [Oracle NetSuite accounting integration](/integrations/accounting/netsuite/accounting-netsuite) in the [Codat Portal](https://app.codat.io/settings/integrations/bankfeeds).

In this article, we explain how to:

- Create a company and a data connection to Oracle NetSuite.
- Provide Codat with source bank accounts your SMB users can connect to.
- Redirect the user to the Codat-provided account [mapping user interface](/bank-feeds/mapping/codat-ui) to connect their source bank accounts to target bank accounts in NetSuite.

### Prerequisites

Bank feeds functionality is part of our existing Oracle NetSuite accounting integration and uses the same bundle. To enable bank feeds, you must first [enable the NetSuite integration](/integrations/accounting/netsuite/accounting-netsuite-setup#configure-the-oracle-netsuite-integration).   

To learn more about installing the NetSuite bundle, see our overview of the NetSuite [company linking journey](/integrations/accounting/netsuite/company-linking-journey).

### Create a company​

Use our [Create company](/bank-feeds-api#/operations/create-company) endpoint to create a [company](../../terms/company) that represents your SMB user in Codat. The endpoint returns a JSON response containing the company ID `id` and the redirect URL `redirect`.

```http title="Create a company"
  POST https://api.codat.io/companies
```

```json title="Request body"
 {
   "name": "{CompanyName}"
 }
```   

### Create a connection

Use our [Create connection](/bank-feeds-api#/operations/create-connection) endpoint to establish a data connection to NetSuite for the company you added. Specify the company ID in the URL path and the NetSuite platform key in the body:

```http title="Create connection"
  POST https://api.codat.io/companies/{companyId}/connections
```
   
```json title="Request body - NetSuite"
  {
    "platformKey": "akxx"
  } 
```
   
The endpoint returns a `dataConnection` object in `PendingAuth` status, containing a connection `id` and a `linkUrl`. Later, you'll use the `linkUrl` to redirect the SMB user to the account mapping UI.

```json title="Response example - Create connection (200)"
  {
    "id": "b52ae406-bdef-40df-a586-ed96bef3590f",
    "integrationId": "4fb72939-e59d-4e8b-90f2-59b85b7fc75d",
    "integrationKey": "akxx",
    "sourceId": "76b3c892-c852-4aec-a835-e453497a99d5",
    "platformName": "Oracle NetSuite",
    "linkUrl": "https://link-api.codat.io/companies/...",
    "status": "PendingAuth",
    "lastSync": "2023-11-10T15:07:46.2597036Z",
    "created": "2023-11-10T11:23:48.0000000Z",
    "sourceType": "Accounting"
  }
```

### Add bank accounts

Use the [Create source account](/bank-feeds-api#/operations/create-source-account) endpoint to add a new source bank account:
   
```http title="Create bank feed bank accounts"
  POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```
   
For the `{connectionId}` parameter, use the connection `id` you received in the response from the `Create connection` request. In the request body, specify a source bank account you want to make available to the SMB user. The endpoint returns a `200` code and the details of the created bank account.

For example, to add a credit card account, send the following request:

```json title="Request body (all fields are required)"
  {
    "id": "acc-002", // set to desired unique ID
    "accountName": "Credit Card",
    "accountType": "Credit",
    "accountNumber": "12345670",
    "currency": "GBP",
    "balance": 99.99 // can be 0
  }
```

### Read next

- Continue through the remaining steps of [establishing a bank feed](/bank-feeds/mapping/overview).
- Learn more about using [Codat's mapping UI](/bank-feeds/mapping/codat-ui) and [mapping via our API](/bank-feeds/mapping/api-mapping) if you prefer to host your own UI.