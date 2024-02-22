---
title: "Xero's Lending Partnership certification checkpoints"
description: "A guide to getting Xero's Lending Partnership certification with Codat"
---

For lenders that want to become Xero Partners, Xero stipulates two technical requirements to comply with: 

- Xero's [certification checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) that apply to all apps connecting to Xero.
- [Lending writeback](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/), which is a lender-specific requirement.

## Lending writeback

The purpose of the lending writeback is to accurately maintain the financial position of a customer in Xero at any point of the lending cycle. This is typically done by recording the loan liability, any interest, fees, and repayments, and facilitating the reconciliation of the bank account. Codat offers the following guides on implementing lending write-back: 

  * [General lending writeback](https://docs.codat.io/lending/guides/general-loan-writeback)
  * [Invoice finance writeback](https://docs.codat.io/lending/guides/invoice-finance/introduction)

## Certification checkpoints

### 1. Sign up with Xero

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.

### 2. Xero App Store

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.

### 3. Connection

**Action required: significant**

While Codat handles the initial connection to Xero via the Codat Link UI, Xero requires that you enable your user to manage this connection on an ongoing basis. Best practice is to create an "Integration settings" page to satisfy these requirements.

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | This can be retrieved from our [Get company info](/accounting-api#/operations/get-company-info) endpoint. |
| Display the current status of the connection. If disconnected, provide a button to reconnect to Xero | Use our [Get connection](/platform-api#/operations/get-company-connection) endpoint to check the `status` of the connection and use the `linkUrl` to reconnect|
| Provide a button to terminate the connection | When a user clicks on the button, use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to disconnect from Xero. |
| Handle a disconnect from Xero's side | Use a webhook to listen to our [DataConnectionStatusChanged](/using-the-api/webhooks/event-types) event that identifies when a disconnect happens. When the alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button. Xero recommends setting a regular daily sync of light data types so you can check each connected company's connection status every day.|
| Support one-to-one or multi-organizational connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can enable them to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Provide a disconnection process for off-boarding | Use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to prevent further syncs or the [Delete connection](/platform-api#/operations/delete-company-connection) endpoint to prevent further syncs and querying of historically synced data.|

### 4. Branding and naming

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure compliance, review Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and their [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

Xero [recommends you use their own](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) _Connect_ and _Disconnect_ buttons, but you can use a standard set of buttons for consistency of style if your app has multiple integrations. 

### 5. Scopes

**Action required: minimal**

Xero requires that apps have access strictly to the data they need, so you should only enable the scopes that are required to access data relevant to your use case. We provide [a scopes guide](/integrations/accounting/xero/partner-certification/scopes) to explain which scopes typically correspond to which use cases. Speak with your Codat implementation specialist and they will adjust your scopes appropriately once you have agreed on what is needed.

### 6. Error handling

**Action required: moderate**

If an error occurs, your app's UI should communicate that fact to the user. It is best practice to provide them with detailed error messages or logs. Codat provides detailed error messaging for any issues with the integration, including status codes, as listed in our [Status codes and errors](/using-the-api/errors).

### 7. Data integrity

**Action required: none**

Codat handles this checkpoint for you.

### 8. Account and Payment mapping

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.
  
### 9. Taxes

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.
