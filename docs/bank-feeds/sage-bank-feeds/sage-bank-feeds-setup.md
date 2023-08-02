---
title: "Set up the Sage Bank Feeds integration"
description: "Set up our integration with Sage Bank Feeds and get your SMB users connected"
sidebar_label: Set up
---

Before you can push customer bank transactions to target bank accounts in Sage, you need to set up the integration for testing or production use.

This page explains how to:

- Enable the Sage Bank Feeds integration.
- Optional: Personalize the default Codat authentication site by adding a call-to-action link and uploading a logo.
- Create a company and data connection, then add bank accounts.
- Surface the data connection ID to the user.

When you've completed those tasks, your SMB customers can connect their accounts to Sage using their data connection ID.

You can then update bank account details as needed.

## Prerequisites

Complete the following prerequisites before setting up the Sage Bank Feeds integration.

- You have access to a Testing Client for your Codat instance. Testing Clients are only available on Start-up and Enterprise plans.
- The Bank accounts and Bank transactions data types are enabled in your [Data type settings](/core-concepts/data-type-settings).

For help with these prerequisites, contact your Solutions Engineer or Codat Support.

## Enable the Sage Bank Feeds integration

1. Go to the <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> page in the Codat Portal.
2. Click **Set up** next to **Sage Bank Feeds**.
3. Use the toggle to set the integration to **Enabled**.

## Optional: Add a call-to-action link

You can add a call-to-action link to a web page containing more information. This might explain where your SMB users can obtain their data connection ID from within your application.

The call-to-action link will appear below the **Connection ID** box in the default Codat authentication site, for example:

![Screenshot](/img/old/55b90cb-sage-bank-feeds-call-to-action-link.png "Example of a call-to-action link under the Connection ID entry box. The link text reads: Click here to obtain your Connection ID.")

To add a call-to-action-link:

1. Go to the <a className="external" href="https://app.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> page in the Codat Portal.
2. Click **Manage** next to **Sage Bank Feeds**.
3. Enter the link text in the **Call-to-action text** box.
4. Enter the link URL in the **Call-to-action URL** box.
5. Click **Save**.

## Optional: Add your organization's logo

You can customize the appearance of the default Codat authentication site by adding your organization's logo. It will appear to the left of the Sage logo.

To upload a logo, go to the <a className="external" href="https://app.codat.io/settings/branding" target="_blank">Branding</a> page in the Codat Portal.

## Create a company and data connection, then add bank accounts

1. Using [POST /companies](/codat-api#/operations/create-company), create a Company to represent your SMB user:

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

2. Using [POST /companies/{companyId}/connections](/codat-api#/operations/create-data-connection), create a data connection to Sage Bank Feeds for the Company you added. Specify the `companyId` in the URL path:

   ```http
   POST https://api.codat.io/companies/{companyId}/connections
   ```

   In the request body specify the following `platformKey`:

   ```json
   {
     "platformKey": "olpr"
   }
   ```

   The endpoint returns a `200` code and a `dataConnection` object in `PendingAuth` status.

   ```json
   {
     "id": "4ab3eb02-d787-4ecd-o6e2-62d7fb7c4d32",
     "integrationId": "2ce41026-589a-4330-8bfc-a30672253cd9",
     "integrationKey": "olpr",
     "sourceId": "98432954-a4fa-4640-a685-3af56909002a",
     "platformName": "SageBankFeed",
     "linkUrl": "https://link-api.codat.io/...", // do not use
     "status": "PendingAuth",
     "created": "2023-01-09T09:58:09.6678831Z",
     "sourceType": "BankFeed"
   }
   ```

   :::caution Do not send the Link URL

   Do _not_ send the `linkUrl` property to the SMB user. Unlike other Codat integrations, company authentication is initiated within Sage as described in "SMB user flow: Connect a source bank account to Sage", below.
   :::

3. Using [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed), add one or more source bank accounts to make available to the SMB user.

   ```http
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   In the request body, specify a list of bank accounts. For example, to add two credit card accounts, send the following request (all fields shown are required):

   ```json
      {
       "id": "acc-002", // set to desired unique ID
       "accountName": "account-081",
       "sortCode": "123456",
       "accountType": "Credit",
       "accountNumber": "12345670",
       "currency": "GBP",
       "balance": 99.99 // can be 0
     }
   ```

4. The endpoint returns a `200` code and the list of created bank accounts.

## Surface the data connection ID to the user

Next, make the data connection ID from step two (above) available to the SMB user by, for example, surfacing the ID in your application. They'll need to enter this ID when connecting a bank account to Sage, as described in the next procedure.

## SMB user flow: Connect a source bank account to Sage

To connect a source bank account to a target bank account in Sage, your SMB user uses the **Connect Bank** functionality in a supported Sage product. The exact steps depend on which Sage product they're using.

:::note

Alternatively, you can [authenticate users through your own web app](/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app).
:::

1. On the **Banking** tab, they locate the bank account to which they want to import bank transactions.

2. They click **Connect Bank** on the account and then select your institution from the list of banks and other financial institutions.

3. The default Codat authentication site is loaded in a new browser tab:

 ![Default Codat authentication UI - Connect your bank account to Sage](/img/old/bc09b4a-sage-bank-feeds_default-auth-UI-revised-wording.png)

4. They enter their data connection ID in the **Connection ID** box, then click **Submit**.

5. If the SMB user was authenticated with Codat successfully, a dialog listing the available source bank accounts (created using the `POST / bankFeedAccounts` endpoint) is displayed. For example:

![Sage account selection](/img/old/7ef73f0-sbs-select-source-bank-account-multiple.png "Redirect to account selection page. Select the bank account that you want to use")

6. The SMB user selects the bank account they want to connect, then clicks **OK**.

7. The SMB user is redirected to the Sage product from which they started the connection flow.

You can now use the [GET /bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) endpoint to retrieve the source bank accounts. The `status` property of a source bank account must have changed to `connected` before you can begin to push bank transactions from the account.

The SMB user flow is now complete.

## Update bank account details

To update the details of one or more source bank accounts in Sage, use the [PATCH /bankFeedAccounts](/bank-feeds-api#/operations/update-bank-feed) endpoint.

```http
PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}
```

Where `{bankAccountId}` is the `id` of the source bank account you want to update.

Provide the details to update as request parameters. You only need to provide the details you want to update. For example, to update the account name, send the following request body:

```json
{
  "accountName": "new account name"
}
```

The endpoint returns a `200` code and the updated bank account details. For example:

```json
{
  "id": "acc-003",
  "accountName": "new account name", // updated account name
  "accountType": "Credit",
  "accountNumber": "12345671",
  "sortCode": "123456",
  "currency": "GBP",
  "balance": 100.09,
  "modifiedDate": "2023-01-09T14:14:14.1057478Z",
  "status": "pending"
}
```

## Next steps

Next you can [push bank transactions from a source bank account](/bank-feeds/sage-bank-feeds/sage-bank-feeds-use).
