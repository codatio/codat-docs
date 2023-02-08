---
title: "Authenticate users through your own web app"
description: "You can use your own web app for the SMB user connection journey for Sage Bank Feeds"
createdAt: "2023-01-17T15:05:04.877Z"
updatedAt: "2023-01-17T17:00:51.812Z"
---

Our [Sage Bank Feeds](/bank-feed-sage-bank-feeds) integration uses an authorization UI to authenticate an SMB user based on their submitted data connection ID. Your SMB users are represented in Codat as Companies. To learn how this method works, see [SMB user flow: Connect a source bank account to Sage](/bank-feed-sage-bank-feeds-setup#smb-user-flow-connect-a-source-bank-account-to-sage).

Instead of this UI, your own web app can authenticate SMB users based on the Company and data connection they're linked to. With this method, when a user selects your organization as a bank feeds provider in a Sage product, they're redirected to your web app instead of the Codat authorization UI.

### Prerequisites

You must have completed the following setup tasks:

- Enable the Sage Bank Feeds integration
- Create a Company to represent the SMB user
- Create a data connection for the Company to the Sage Bank Feeds integration
- Add one or more source bank accounts to make available to the SMB user

For help with completing these tasks, see [Enable the Sage Bank Feeds integration](/bank-feed-sage-bank-feeds-setup#enable-the-sage-bank-feeds-integration) and [Create a Company and data connection, then add bank accounts](/bank-feed-sage-bank-feeds-setup#create-a-company-and-data-connection-then-add-bank-accounts).

## Configure your custom web app as a redirect URL

First, configure the Sage Bank Feeds integration to use your web app's URL as the authorization redirect URL.

1. In the Codat Portal, go to the <a className="external" href="https://app-integration.codat.io/settings/integrations/bankfeeds" target="_blank">**Bank feed integrations**</a> page.

2. Click **Manage** next to **Sage Bank Feeds**.

3. Enter the URL of your custom web app as the **Authorization redirect URL**. For example:

   ![Auth URL](/img/old/ef4ab16-sage-bank-feeds_integration-settings-page-auth-url.png "Custom authorization redirect URL entered on the Integration settings page for Sage Bank Feeds.")

4. Click **Save**.

## Understand authentication flows

There are two authentication flows between Sage, Codat's Sage Bank Feeds integration, and your web app.

### Sage redirects the user to your web app

1. In Sage, the SMB user selects the **Banking** tab.

2. They click the **Connect Bank** button.

3. They search for and select your organization from among the list of bank feed providers.

4. They select a target bank account—the account that will receive bank feeds from your application.

5. The user is redirected from Sage to a URL which is constructed as follows:

   ```http
   https://{authorizationRedirectUrl}?authorizationId={authId}&redirectUri={redirectUri}
   ```

   1. The `authorizationRedirectUrl` is the web app URL that you configured in the Codat Portal.
   2. The `authId` is the unique authorization identifier for the Company.
   3. The `redirectUri` is the URI the SMB user will be redirected to after authentication through your web app (see step two in the next procedure).

6. As configured in your web app, the user is redirected to a login or user authorization page.

7. The SMB user logs in to your web app.

8. Your web app authenticates the user against the Codat Company and data connection to which they are linked.

### Your web app redirects the user to the bank account selection screen

1. After a prompt, your web app sends a request to the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/put_companies__companyId__connections__connectionId__authorization"
   target="blank">PUT /authorization</a> endpoint. The `authId` (from the URL in step five of the previous procedure) must be supplied in the request body as an additional property:

   ```http
   PUT company/{companyId}/connections/{connectionId}/authorization
   ```

   Request body:

   ```json
   {
      "authorizationId": {authId}
   }
   ```

2. If the `PUT /authorization` request returns a 200 response, your web app should redirect the SMB user to the `redirectUri` for the Company, with the `authId` appended as a query parameter:

   ```http
   {redirectUri}?state={authId}

   // example:

   redirect_uri=https://snd01eu.sagebankdrive.com/api/v1/indirectredirect/11111-22222-33333-88888-9999?state=1122-3344-5566-7788
   ```

3. If the SMB user was successfully authenticated with Codat, Sage displays a dialog listing the available source bank accounts&mdash;the bank account in your application that will send bank feeds. For example:

   ![Sage account selection screen](/img/old/f73be1e-redirect_screen.PNG "Sage dialog listing the available source bank accounts")

4. The SMB user selects the bank account they want to use, then clicks **OK**.

5. Sage redirects the SMB user to the Sage product from which they began the authentication flow.

You can now use the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">GET /bankFeedAccounts</a> endpoint to retrieve the source bank accounts and push bank transactions. For details, see [Use your Sage Bank Feeds integration](/bank-feed-sage-bank-feeds-use).
