---
title: "Set up the QuickBooks Online Bank Feeds integration"
description: "Set up our integration with QuickBooks Online Bank Feeds."
createdAt: "2022-09-05T13:13:20.253Z"
updatedAt: "2023-01-11T15:07:17.188Z"
---

Set up the QuickBooks Online Bank Feeds integration to let your SMB users connect bank accounts from your application to QuickBooks Online (QBO).

## Prerequisites

Before setting up the integration, make sure that:

- Your Solutions Engineer has provided access to the QuickBooks Online Bank Feeds integration.
- Your SMB users who will connect to QBO Bank Feeds are located in the US and Canada only.
- You've enabled Bank accounts and Bank transactions in your [Data type settings](/data-sync-settings).
- You've customized Link for your institution.

## Enable the QBO Bank Feeds integration

1. Go to the <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> page in the Codat Portal.
2. Click **Set up** next to **QuickBooks Online Bank Feeds**.
3. Use the toggle to set the integration to **Enabled**.

## Add a custom callout to the Link Site

You can add a custom text callout to the QBO Bank Feeds Link site to provide additional guidance to users who are connecting their bank accounts to QBO.

1. Go to the <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> page in the Codat Portal.
2. Click **Manage** next to **QuickBooks Online Bank Feeds**.
3. Enter text in the **Callout title** and **Callout body** boxes (maximum of 50 and 150 characters respectively). Only plain text is supported.
4. Click **Save**.

The callout will be displayed at the bottom of the QBO Bank Feeds Link site. For example:

![QBO Bank Feeds Link site showing custom callout text above the "Get credentials" button.](/img/old/b822e27-qbo-bank-feeds_link-site-callout-text.png)

## Add a "Connect bank feeds" button to your application

Add functionality—for example, a button or link—to your application that lets your users connect their bank accounts to QBO for the purposes of viewing bank feeds. Use an appropriate UI label, such as _Connect account to QuickBooks_.

See the next procedure for details on the functionality to provide.

## Create a Company and data connection, then add bank accounts

1. When an SMB user clicks the button or link you added, create a Company for them using the <a href="/codat-api#/operations/create-company">Create a company</a> endpoint:

   ```http
   POST https://api.codat.io/companies
   ```

   Request body:

   ```json
   {
     "name": "COMPANY_NAME"
   }
   ```

   The endpoint returns a JSON response containing the company `id` and the `redirect` URL.

2. Using the <a href="/codat-api#/operations/create-data-connection">POST /connections</a> endpoint, create a data connection to QBO Bank Feeds for the company.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections
   ```

   In the request body specify `hcws` as the `platformKey`:

   ```json
   {
     "platformKey": "hcws"
   }
   ```

   The endpoint returns a `200` response and a `dataConnection` object, in `PendingAuth` status, containing a `linkUrl`.

   ```json
   {
     "id": "7baba7cc-4ae0-48fd-a617-98d55a6fc008",
     "integrationId": "6b113e06-e818-45d7-977b-8e6bb3d01269",
     "sourceId": "56e6575a-3f1f-4918-b009-f7535555f0d6",
     "platformName": "QuickBooks Online Bank Feeds",
     "linkUrl": "https://link-api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/start?otp=742271",
     "status": "PendingAuth",
     "created": "2022-09-01T10:21:57.0807447Z",
     "sourceType": "BankFeed"
   }
   ```

3. Using the <a href="https://api.codat.io/swagger/index.html#/Connection/put_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">PUT /bankFeedAccounts</a> endpoint, add one or more source bank accounts.
   
   ```http
   PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   In the request body, specify a list of bank accounts (all fields shown are required):

   ```json
   [
     {
       "id": "ac-001",
       "accountName": "account-001",
       "accountType": "checking",
       "accountNumber": "12345670",
       "sortCode": "12-34-56",
       "currency": "USD",
       "balance": 4002 // can be 0
     },
     {
       "id": "ac-002",
       "accountName": "account-002",
       "accountType": "checking",
       "accountNumber": "89101112",
       "sortCode": "12-34-56",
       "currency": "USD",
       "balance": 7300 // can be 0
     }
   ]
   ```

   The endpoint returns a `200` response and the list of created bank accounts.

4. Redirect the SMB user to the `linkUrl` returned in the response from the `POST /connections` endpoint (see step 2).

5. The SMB user opens the `linkUrl` in their browser.

6. Using Link and QBO, the SMB user can now [connect their chosen bank accounts to QuickBooks Online](/accounting-qbo-bank-feeds-smb-customer-steps).

:::caution Do not hardcode the Link URL

Do _not_ hardcode the `linkUrl` into your application code. It is unique to the originating customer and must not be shared with other users.
:::

## Retrieve bank account status and information

You can use the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="blank">GET /connectionInfo/bankFeedAccounts</a> endpoint to view the following information for a data connection:

- Available source bank accounts—the accounts that the SMB user can connect to QBO.
- The connection status of the available source bank accounts (either `connected` or `pending`).
- The number of connected bank accounts for a particular data connection.

```http
GET /connections/{connectionId}/connectionInfo/bankFeedAccounts
```

## Update an existing bank account for a Company

Use the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/patch_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts__bankAccountId_" target="_blank">PATCH /connectionInfo/bankFeedAccounts/{bankAccountId}</a> endpoint to update an existing bank account for a Company and data connection.

Provide the bank account details you want to update as request parameters. For example, to update the account name, send the following request:

```http
PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}
```

```json
{
  "accountName": "updated account name"
}
```

## Add new source bank accounts for a Company

You can add new source bank accounts to an existing Company and data connection. This makes those bank accounts available to the SMB user to connect to.

Send a request to the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/put_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">PUT /connectionInfo/bankFeedAccounts</a> endpoint and specify the bank accounts you want to add in the request body.

```http
PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

To connect the bank accounts you added, the SMB user needs to revisit the `linkUrl` of the data connection. You can use the <a href="/codat-api#/operations/list-company-connections">List connections</a> or <a href="/codat-api#/operations/get-company-connection">Get connection</a> endpoint to get the `linkUrl`.
