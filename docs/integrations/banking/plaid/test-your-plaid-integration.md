---
title: "Test your Plaid integration"
description: "Test our Plaid integration by pulling data from Plaid's sandbox to a test company"
sidebar_label: Testing
---

When you've [set up and enabled Plaid](/integrations/banking/plaid/banking-plaid-setup), you can test your integration with Plaid's sandbox. You'll need to:

- Set up a test company.
- Generate a Link URL to connect your test company to Plaid's sandbox.
- Connect a test account.

## Set up a test company

1. Go to the <a href="https://app.codat.io/login" target="_blank">Codat Portal</a> and sign in.
2. Go to **Companies**.
3. On the right side of the page, select **Add new company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Generate a Link URL

To connect your test company to Plaid's sandbox, you can either generate a Link URL from the Codat Portal or via the API.

## Generate a Link URL from the Codat Portal

1. On the **Companies** page, scroll down until you find the test company that you created earlier.
2. Next to the company name, select **Request data**.  
   The **Links URL...** dialog box is displayed.
3. At the bottom of the dialog box, select **Create**.
4. Copy the generated URL and go straight to [Connect to Plaid's sandbox](/integrations/banking/plaid/test-your-plaid-integration#section-connect-to-plaids-sandbox).

## Generate a Link URL via the API

1. Open the <a href="/codat-api#/operations/list-connections" target="_blank">POST /companies/{companyId}/connections</a> endpoint.
2. Replace `{companyId}` with the ID of the test company you've just set up.
3. Also, in the body of the request, enter the platform key:

```json
"plaid"
```

4. Send your request.  
   Codat generates a unique link to Plaid's sandbox. For example:

```json
{
  "id": "33f13646-e3f0-458a-b6ee-f5c1f38c1fdb",
  "integrationId": "580146ed-7556-4f92-8bf9-7344667763ec",
  "sourceId": "46ee0089-dc88-405a-9667-9fb3d9976f19",
  "platformName": "Plaid",
  "linkUrl": "https://link.codat.io/link/start/b8673b25-4444-0000-9906-0fecbfe4d2e3/33f13646-e3f0-458a-b6ee-f5c1f38c1fdb",
  "status": "PendingAuth"
}
```

:::note Linking customers in Plaid

When you move to a production environment, you'll supply a link URL to each customer. The link URL is the start of the authorization process that allows you to retrieve data from your customer's bank account.
:::

## Connect to Plaid's sandbox

**For testing only**, you'll follow the process that your customers normally use to authorize a connection to their bank account.

1. Copy the **linkUrl** value into your browser, which takes you to Plaid's sandbox.

<img src="/img/old/e6adfea-Plaid_landing_page.png" />

A message at the bottom of the screen confirms that you're in sandbox mode.

2. Select **Continue**.  
   A dialog box shows a list of available bank accounts that have sample data for testing. This is Plaid's secure link site.
3. Select the bank account type you're interested in, or if it's not listed, search for it first.
4. Select **Continue to** _Bank Name_.  
   You will either be directed to log in with [sample test credentials](https://plaid.com/docs/sandbox/test-credentials/#sandbox-simple-test-credentials) or to authenticate for the sandbox.
5. Enter the test credentials or select **Grant Access**.
6. Wait until a confirmation page is displayed.

You're now ready to start testing.

## Check your banking data

You can check the data from the account you've linked to Plaid's sandbox in two ways: in the Codat Portal and through the Codat API.

To perform a quick check from the Codat Portal:

1. On the navigation bar, select **Companies**, and search for the test company that you created.
2. Click the company name.
3. Select **Banking API** in the side navigation menu.
4. In the **Data type** dropdown, select **New** to show the new banking data types.
5. Click **Banking - Accounts** to view accounts and related transaction data.

To retrieve account details from the API, use either of the following endpoints:

[`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts`](/banking-api#/operations/list-banking-accounts)

[`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactions`](/banking-api#/operations/list-banking-transactions)
