---
title: "Set up the Netsuite Bank Feeds integration"
sidebar_label: Set up
description: "Set up our integration with Netsuite Bank Feeds"
---

Before you can push bank feeds to Netsuite, you need to set up the [Netsuite accounting integration](/integrations/accounting/netsuite/accounting-netsuite) in the Codat Portal.

This article explains how to:

- Create a company and a data connection to Netsuite.
- Provide Codat with source bank accounts you want to make available for your SMB users to connect to.
- Redirect the user to the Codat-provided account mapping UI, where they can connect their source bank accounts to target bank accounts in Netsuite.

## Prerequisites

Bank feeds functionality is part of our existing Netsuite accounting integration and uses the same bundle. To enable bank feeds you must first [enable the Netsuite integration](/integrations/accounting/netsuite/accounting-netsuite-setup#configure-the-oracle-netsuite-integration).   

To learn more about how the user installs the Netsuite bundle, see the [overview of the Netsuite company linking journey](/integrations/accounting/netsuite/company-linking-journey).

## Create a company and data connection, then add bank accounts​

1. Using the [POST /companies](/platform-api#/operations/create-company) endpoint, create a company to represent your SMB user:

   ```http title="Create a company"
   POST https://api.codat.io/companies
   ```

   ```json title="Request body"
   {
     "name": "<COMPANY_NAME>"
   }
   ```
   
   The endpoint returns a JSON response containing the company ID (`id`) and the redirect URL (`redirect`).

2. Using the [POST /companies/<COMPANY_ID>/connections](/platform-api#/operations/create-connection) endpoint, create a data connection to Netsuite for the company you added. Specify the company ID in the URL path and the Netsuite platform key in the body:

   ```http title="Create connection"
   POST https://api.codat.io/companies/<COMPANY_ID>/connections
   ```
   
   ```json title="Request body - Netsuite"
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

3. Using the [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed) endpoint, add a source bank account:
   
   ```http title="Create bank feed bank accounts"
   POST /companies/<COMPANY_ID>/connections/<CONNECTION_ID>/connectionInfo/bankFeedAccounts
   ```
   
   For the `<CONNECTION_ID>`, use the connection `id` you received in the response from `POST /connection` request.
   
   In the request body, specify a source bank account to make available to the SMB user. For example, to add a credit card account send the following request:

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

4. The endpoint returns a `200` code and the created bank account.

## Read next

To enable your customer to setup their Netsuite bank feed, follow the [standard steps to establish a bank feed](/bank-feeds/mapping/overview). Our Netsuite bank feeds integration supports both [mapping using the Codat-provided UI](/bank-feeds/mapping/codat-ui) or, if you would prefer to host your own UI, [mapping via our API](/bank-feeds/mapping/api-mapping).
