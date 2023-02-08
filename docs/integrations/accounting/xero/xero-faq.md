---
title: "Xero FAQs"
description: "Frequently asked questions about our Xero integration."
createdAt: "2019-07-17T14:20:47.797Z"
updatedAt: "2023-01-16T18:05:01.158Z"
---

## What is the Xero App Partnerniship Program? How can I join it?

If you want to have more than 25 Xero connections, you'll need to join the Xero App Partner Program.

Follow our guide [here](/xero-app-partner-program).

## How can I set up a Bank Feed to a Xero account?

:::danger Prerequisites

1. When pushing transaction to an existing bank account, that bank account must have been previously pulled (synced) via the Codat API.
2. Xero requires a real Xero account (either a full account or a free trial) to be used for pushing bank transactions. Linking with the Xero Demo Company will not allow Bank Feeds, resulting in an appropriate 403 error.
3. :::

4. You must first have Bank Feeds [configured and allowed](/accounting-xero-setup#configuration-of-bank-feeds).
5. Then, to create a direct Bank Feed using Xero's Bank Feeds API, you must POST [Bank Transactions](/data-model/accounting/-banktransactions).
6. When successfully pushed to Xero, the bank transactions will appear in the 'Bank Statements' section for the bank account in the Xero UI, with the source 'Bank Feed' as below:

<img src="/img/old/2530dce-bankFeedsDocs.PNG" />

:::info Bank Feeds vs Account Transactions
Note that the Codat API does not support pushing Xero 'Account Transactions'. Account transaction are reconciled with statement lines from direct Bank Feeds and can be created / matched in the Xero UI.
:::

## How are Xero contacts represented in the Codat API?

In Xero, contacts only become a customer or a supplier once an AP or AR transaction is applied to them e.g. an invoice or a bill. Up until this point, they remain as just a contact and not a customer or a supplier within Xero.

To cater for this behaviour in the Codat standard, contacts appear as both Customers and Suppliers if they are a contact in Xero. This allows you to always find the ID for a contact to create either a bill, or an invoice say (as any contact may be used in both AP or AR context).

## How might Xero rate limits affect my integration?

Requests to the Xero API are subject to the API rate limits described in the <a href="https://developer.xero.com/documentation/guides/oauth2/limits">OAuth 2.0 API limits</a> page in the Xero Developer documentation.

If a rate limit is exceeded, your integration is blocked from making any more requests to the API until the conditions of the rate limit are met. A `Pending` status is shown in the push endpoint response when a rate limit is enforced.

If the **Daily Limit** is exceeded, you can't sync any data with Xero for up 24 hours depending on when the limit was exceeded.

To see which rate limit is exceeded, please contact Codat Support.

## Why do all of my items from Xero have their status as _Unknown_?

All [Items](/data-model/accounting/-items) from Xero will have their `itemStatus` mapped as `Unknown` in Codat because an item status is not exposed via Xero's API. If this is a feature you'd like to see made available, please consider voting for <a href="https://developer.xero.com/documentation/api/items/" target="_blank">this feature request on Xero's UserVoice</a>.

## Can I push discounts to Xero at the invoice level?

Yes. You can enter negative line item amounts in the `lineItems.unitAmount` field when pushing invoices to Xero. This is an alternative to using the `discountAmount` and `discountPercentage` fields.

## Why do I get an error when pushing tracking categories to Xero?

Our accounting data model allows the pulling and pushing of Xero _tracking options_ rather than parent _tracking categories_. You can have up to two active tracking categories and up to 100 tracking options for each tracking category. For more information about these objects, see [Set up tracking categories](https://central.xero.com/s/article/Set-up-tracking-categories-UK) in the Xero documentation.

You can only push a tracking category to Xero if it has a non-null value for `parentId`.

You are unable to push tracking categories that, when they were pulled, have the property `"hasChildren": true`. A validation error is returned.

## Why do I see only 5 years' of bank transactions for my Xero connections?

For performance reasons, the default date range for pulling bank transactions from Xero is the past five years.

If you need to increase or decrease this date range, edit the value of the `syncFromUTC` property for the `bankTransactions` data type in your additional sync settings (via a request to `POST /companies/{companyId}/syncSettings`).

You can set `syncFromUTC` for all companies or for individual companies. For more information, see <a  class="external" href="https://codat.zendesk.com/hc/en-gb/articles/360018829477-Additional-sync-settings" target="_blank">Additional sync settings</a> in the Codat Knowledgebase or contact support@codat.io for further assistance.

## Why do I see a different reference value when I pull bank transactions to Xero that I'd previously pushed?

There is a limitation in the data sets returned from Xero when pulling Bank transactions to Codat. The **Particulars**, **Reference**, and **Code** values, which are visible in columns in the Xero UI, are returned together in the `description` field, concatenated and separated with spaces.

The **Payee** in Xero is pulled to Codat as the `counterparty` of the Bank transaction.

For example, the **Statement line** below will result in a bank statement line with a `counterparty` of `Payee 3` and a `description` with the value: `Description 3 Reference 3 3`.

<img src="/img/old/d1325a1-xero-bank-statement-46713.png" />

## Can I push batch payments to Xero?

Yes. To push a batch payment to Xero, you push a [Bill payment](/data-model/accounting/-billpayments) with multiple line items. Pushing a batch payment to Xero will create the following business objects:

- A separate bill payment for each line.
- An account transaction that links the bill payments together.

In the returned push operation:

- The `changes` property lists the objects that were created in Xero to represent the batch payment.
- The `data` property is not populated because there isn't one single object that can be used to represent the batch payment in Xero.

For example:

```json
{
  "changes": [
    {
      "type": "Created",
      "recordRef": {
        "id": "1f0dc0ac-f512-45b5-90d3-ba3956b6a5b4",
        "dataType": "billPayments"
      }
    },
    {
      "type": "Created",
      "recordRef": {
        "id": "1fd01ad4-ef3b-43fd-adf9-084f31c324cf",
        "dataType": "billPayments"
      }
    },
    {
      "type": "Created",
      "recordRef": {
        "id": "b4be5708-aeb0-453a-90c2-4151f0e59778",
        "dataType": "accountTransactions"
      }
    }
  ],
  "dataType": "billPayments",
  "companyId": "12e34cc7-cae8-452e-ba9f-04650f756b3e",
  "pushOperationKey": "b728ea77-1a67-422f-b65f-98155b5cbb33",
  "dataConnectionKey": "4b301fcd-c79e-4591-926d-ef69ea3ead7d",
  "requestedOnUtc": "2022-09-16T16:12:15.2748051Z",
  "completedOnUtc": "2022-09-16T16:12:19.0866399Z",
  "status": "Success",
  "statusCode": 200
}
```
