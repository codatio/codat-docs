---
title: "Test your TrueLayer integration"
description: "Test our TrueLayer integration by pulling test data from the Demo Bank account or an alternative banking source"
sidebar_label: Testing
---

You can test your TrueLayer banking integration by retrieving test data from the Demo Bank account, or another banking source. We recommend you do this before sending Link URLs to your SMB customers.

You'll need to:

- Set up a test company and generate a Link URL
- Connect to a bank account
- Check your banking data

Then, you can retrieve and check data from the connected bank account.

## Prerequisites

- [Register for TrueLayer](/integrations/banking/truelayer/register-for-truelayer)
- [Set up your TrueLayer integration](/integrations/banking/truelayer/set-up-truelayer-2)

## Set up a test company and generate a Link URL

Before you start, decide which type of banking source you want to test. This procedure uses the `Demo Bank` source, which is enabled in the TrueLayer settings in the Codat Portal by default. You'll need to adapt these steps if you choose to use an alternative banking source.

Retrieve the platform `key` of the `Demo Bank` data source, or an alternative banking source, and then generate a Link URL.

1. Log in to the [Codat Portal](https://app.codat.io).
2. Open the [GET integrations](/platform-api#/operations/list-integrations) endpoint in Swagger.
3. Send a GET request to return a list of all integrations.
4. Search for `Demo Bank`, or the alternative banking source you want to use. All banking integrations have a **sourceType** of `Banking`. For example:

```
{
  "key": "demobank_truelayer",
  "logoUrl": "https://static.codat.io/public/platforms/demobank_truelayer.png",
  "name": "Demo Bank",
  "enabled": true,
  "sourceId": "22222222-7778-46cc-8544-952fe34a5e3a",
  "integrationId": "22222222-b2bf-4213-b594-1fb9474cbaf0",
  "sourceType": "Banking"
}
```

Use these details to create a company; this returns the Link URL you need for testing. 

5. Open the <a href="/platform-api#/operations/create-company" target="blank">POST companies</a> endpoint. 
6. Enter a name for your test company and add the platform `key` for your chosen banking source:

```
{
"name": "companyname",
"platformType": "demobank_truelayer"
}
```

7. Send your request to create the test company and its corresponding Link URL.
   The response looks something like this:

```
{
"id": "22222222-9b99-475f-b7e8-4f9a09b9289d",
"name": "companyname",
"platform": "TrueLayer Open Banking",
"redirect": "https://link.codat.io/link/start/22222222-9b99-475f-b7e8-4f9a09b9289d/00dbe10e-8f4a-43c2-935f-45d474576fb7",
"status": "PendingAuth",
"dataConnections": [
  {
    "id": "22222222-8f4a-43c2-935f-45d474576fb7",
    "integrationId": "22222222-b2bf-4213-b594-1fb9474cbaf0",
    "sourceId": "22222222-7778-46cc-8544-952fe34a5e3a",
    "platformName": "TrueLayer Open Banking",
    "linkUrl": "https://link.codat.io/link/start/22222222-9b99-475f-b7e8-4f9a09b9289d/00dbe10e-8f4a-43c2-935f-45d474576fb7",
    "status": "PendingAuth",
    "created": "2020-06-24T11:13:27.6232806Z"
  }
],
"created": "2020-06-24T11:13:25.8263019Z"
}
```

Copy the JSON response to use in the next procedure.

## Connect to a bank account

:::info Bank account login details

If you've chosen to connect to a bank data source other than the Demo Bank, you'll need login details for an account at that institution.
:::

**For testing purposes only**, follow the process that your customers normally use to authorize a connection to their bank accounts.

1. In your browser, enter the `linkUrl` value from the JSON you saved in steps 6 and 7 of the preceding task.
   The link takes you to a TrueLayer landing page.
2. Select **ALLOW** to link the Demo Bank account.
   A login page is displayed.
3. For the Demo Bank, enter the test credentials shown on the login page.
   The account is linked automatically and you return to Link.

You're now ready to start testing.

## Check your banking data

You can check data from Demo Bank account in two ways: in the Codat Portal and through the Codat API.

To perform a quick check in the Codat Portal:

1. On the navigation bar, select **Companies**, and search for the test company that you created.
1. Click on the company name.
1. Select **Data > Banking** in the side navigation menu.
1. In the **Data type** dropdown, select **New** to show the new banking data types.
1. Click **Banking - Accounts** to view accounts and related transaction data.

To retrieve the same data from the Codat API, you'll need the JSON from step 6 of "Set up a test company and generate a Link URL".

To retrieve account details using the Codat API:

1.  Open the <a href="/banking-api#/operations/list-banking-transactions" target="blank">GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts</a> endpoint.
    - Replace `{companyId}` with the `id` of your test company.
    - Replace `{connectionId}` with the `id` from `dataConnections`.
2.  Send your request to return a list of account details:

```
{
"results": [
  {
    "id": "2cbf9b6063102763ccbe3ea62f1b3e72",
    "name": "Business Current Account",
    "informalName": "Codat",
    "holder": "Codat Ltd",
    "type": "Debit",
    "balance": {
      "available": 459987.97,
      "current": 459987.97,
      "limit": -10000
    },
    "identifiers": {
      "type": "Debit",
      "subtype": "Business",
      "number": "46762629",
      "bankCode": "009911",
      "iban": "GB29 LOYD 4773 2346 7626 29",
      "bic": "LOYDGB21006",
      "maskedAccountNumber": "1111111"
    },
    "currency": "GBP",
    "institution": {
      "id": "lloyds-bank",
      "name": "Lloyds Bank"
    },
    "modifiedDate": "2022-06-21T16:14:11.194Z",
    "sourceModifiedDate": "2022-06-21T16:14:11.194Z"
  }
```

3. Optional: Use the <a href="https://api.codat.io/swagger/index.html#/BankingTransactions/get_companies__companyId__connections__connectionId__data_banking_transactions" target="blank">GET
   /companies/{companyId}/connections/{connectionId}/data/banking-transactions</a> endpoint in the same way to retrieve the transactions for each account.

You're now ready to set up and connect your SMB customers. Follow the methods described in [Set up a test company and generate a Link URL](/integrations/banking/truelayer/test-truelayer#section-set-up-a-test-company-and-generate-a-link-url).
