---
title: "Xero's Payments Partner certification checkpoints"
description: "A guide to getting Xero's AP Payments certification with Codat"
---

To receive Xero Partner certification, you must comply with Xero's certification checkpoints. You can review these in detail in Xero's [own documentation](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/).

This is Codat's companion guide on how to comply with these requirements. We strongly advise that you discuss Xero compliance with your Codat implementation specialist before starting to work on any of the points below.

## Certification checkpoints

### 1. Sign up with Xero

**Action required: none**

This checkpoint is not relevant to Payments Partners because they operate under a different commercial model to standard App Store Partners.

### 2. Xero App Store

**Action required: none**

This checkpoint is not relevant to Payments Partners because they operate under a different commercial model to standard App Store Partners.

### 3. Connection

**Action required: significant**

While Codat handles the initial connection to Xero via the Codat Link UI, Xero requires that you enable your user to manage this connection on an ongoing basis. Best practice is to create an "Integration settings" page to satisfy these requirements.

| Requirement                                                                                          | Recommendations                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display the name of the tenant that has been connected                                               | This can be retrieved from our [Get company info](/accounting-api#/operations/get-company-info) endpoint.                                                                                                                                                                                                                                                                                                  |
| Display the current status of the connection. If disconnected, provide a button to reconnect to Xero | Use our [Get connection](/platform-api#/operations/get-company-connection) endpoint to check the `status` of the connection and use the `linkUrl` to reconnect.                                                                                                                                                                                                                                            |
| Provide a button to terminate the connection                                                         | When a user clicks on the button, use our [Delete connection](/platform-api#/operations/delete-connection) endpoint to disconnect from Xero.                                                                                                                                                                                                                                                               |
| Handle a disconnect from Xero's side                                                                 | Use a webhook to listen to our [connection.disconnected](/using-the-api/webhooks/event-types) event that identifies when a disconnect happens. When the alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button. Xero recommends setting a regular daily sync of light data types so you can check each connected company's connection status every day. |
| Support one-to-one or multi-organizational connection                                                | Codat allows your customers to select their Xero organization using the native Xero UI. You can enable them to connect to multiple organizations within Xero by creating a separate Codat company per organization.                                                                                                                                                                                        |
| Provide a disconnection process for off-boarding                                                     | Use our [Delete connection](/platform-api#/operations/delete-connection) endpoint to prevent further syncs and querying of historically synced data.                                                                                                                                                                                                                                                       |

### 4. Branding and naming

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure compliance, review Xero's [Brand guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and their [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

Xero [recommends you use their own](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) _Connect_ and _Disconnect_ buttons, but you can use a standard set of buttons for style consistency if your app has multiple integrations.

### 5. Scopes

**Action required: minimal**

Xero requires that apps have access strictly to the data they need, so you should only enable the scopes that are required to access data relevant to your use case. We provide [a scopes guide](/integrations/accounting/xero/partner-certification/scopes) to explain which scopes typically correspond to which use cases. Speak with your Codat implementation specialist and they will adjust your scopes appropriately once you have agreed on what is needed.

### 6. Error handling

**Action required: moderate**

If an error occurs, your app's UI should communicate that fact to the user. It is best practice to provide them with detailed error messages or logs. Codat provides detailed error messaging for any issues with the integration, including status codes, as listed in our [Status codes and errors](/using-the-api/errors).

### 7. Data integrity

**Action required: none or minimal**

Most Codat implementations are fully compliant with this checkpoint without any additional work required. However, if your app handles multiple currencies, you should verify that you are handling multicurrency scenarios appropriately.

Before creating or updating transactional data, such as a payment in another currency, use our [Get push options](https://docs.codat.io/platform-api#/operations/get-create-update-model-options-by-data-type) endpoint to see which currencies have been set up by your customer in Xero. Then proceed with creating or updating that transactional data.

You can also read more about [creating, updating or deleting data](https://docs.codat.io/using-the-api/push) with Codat.

### 8. Account and payment mapping

**Action required: significant**

This checkpoint is relevant to apps that create, update or delete data in Xero.

Relevant apps must create an account mapping interface for their users. In preparation, we recommend you review Xero's [best practice guide](https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices) and Codat's [implementation guide](/using-the-api/best-practices/implementing-a-mapping-page) on account mapping interfaces.

### 9. Taxes

**Action required: none or minimal**

If your app handles tax, you need to ensure the correct tax rate is used on invoices, quotes, etc.

Codat can read tax rates as individual tax rates and on transactions, like invoices or payments. We also handle tax rate calculation when creating or updating transactions with tax rates where multiple tax components are applied to the effective tax rates (e.g. compound tax rates).

We do not currently support the creation of new tax rates, so you can only use existing rates in a SMB's Xero account. You may need to allow for mapping of tax rates in your [account mapping page](/integrations/accounting/xero/partner-certification/checkpoints-app-store#12-account-mapping).
