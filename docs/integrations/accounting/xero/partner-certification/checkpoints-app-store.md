---
title: "Xero's App Store Partner certification checkpoints"
description: "A guide to getting Xero's App Store Partner certification with Codat"
---

To receive an App Store Partner certification, all apps connecting to Xero must comply with a list of certification checkpoints, which you can review in detail in Xero's [own documentation](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/). 

Codat handles many of the certification checkpoints for you. For those that require you to take action, we prepared this companion guide that helps you understand the steps you need to take. We also recommend that you work closely with your Codat account team during your implementation. 

## Always required

### 1. App name

**Action required: minimal**

Your app's name is visible to end users at multiple points in the customer journey and it must reflect the go-to-market name of your app or product. It cannot include the word `Xero`. You can edit your app's name in the **My Apps** section of your Xero Developer Portal.

### 2. Branding

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure that, review Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

Xero recommends you use [their own](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) _Connect_ and _Disconnect_ buttons, but you can use a standard set of buttons for consistency of style if your app has multiple integrations instead. 

### 3. Connection

**Action required: significant**

While Codat handles the initial connection to Xero via the Codat Link UI, Xero requires that you enable your user to manage this connection on an ongoing basis. For example, you can create a page in your app to satisfy these requirements: 

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | This can be retrieved from our [Get company info](/accounting-api#/operations/get-company-info) endpoint. |
| Display the current status of the connection. If disconnected, provide a button to reconnect to Xero | Use our [Get connection](/platform-api#/operations/get-company-connection) endpoint to check the `status` of the connection and use the `linkUrl` to reconnect|
| Provide a button to terminate the connection | When a user clicks on the button, use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to disconnect from Xero. |
| Handle a disconnect from Xero's side | Use our [Data connection status changed](/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed) webhook to identify when a disconnect happens. When the alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button. Xero recommends setting a regular daily sync of light data types so you check each connected company's connection status each day.|
| Support one-to-one or multi-organizational connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can enable them to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Provide a disconnection process for off-boarding | Use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to prevent further syncs or the [Delete connection](/platform-api#/operations/delete-company-connection) endpoint to prevent further syncs and querying of historically synced data.|

### 4. Error handling

**Action required: significant**

If an error occurs, your UI should communicate that fact to the user. It is best practice to provide detailed error messages or logs. Codat provides detailed error messaging for any issues with the integration, including status codes, listed in our [Status codes and errors](/using-the-api/errors).

### 5. Offline access

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.
  
### 6. Rate limit hit management

**Action required: minimal**

You do not need to take independent action for this checkpoint, because your Codat account team will work with you to manage your rate limits. 
  
### 7. Scopes

**Action required: minimal**

Xero requires that apps only have access to the data that they need, so you should only enable scopes required to access the data relevant to your use case. We provide [a guide](/integrations/accounting/xero/partner-certification/scopes) to explain which scopes typically correspond to which use cases, and will work with you to ensure your scopes are set appropriately. 

### 8. Sign up with Xero

**Action required: significant**

All apps seeking certification and listing in the Xero App Store need to build a Sign Up with Xero flow. We prepared a [full guide](/integrations/accounting/xero/partner-certification/sign-up-with-xero) to the Sign Up with Xero flow.

---

## If getting data...

### 9. Modified after

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.

### 10. Paging

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.

### 11. Webhooks

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full. However, ensure you use appropriate webhooks as you interact with the Codat API. You can learn more about the [webhooks we provide](/using-the-api/webhooks/core-rules-types) and [how to set them up](/using-the-api/webhooks/core-rules-create).
  
---

## If creating or updating data...

### 12. Account mapping

**Action required: significant**

If you plan to create, update or delete data in Xero, you need to create an account mapping interface for your users. In preparation, we recommend you review Xero's [best practice guide](https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices) and Codat's [implementation guide](/using-the-api/best-practices/implementing-a-mapping-page).

### 13. Currency

**Action required: none or minimal**

This checkpoint is only relevant if your app deals with multiple currencies. 

Before creating or updating transactional data, such as a payment in another currency, use our [Get push options](/platform-api#/operations/get-create-update-model-options-by-data-type) endpoint to see which currencies have been set up by your customer in Xero. Then, proceed with creating or updating that transactional data.

You can also read more about [creating, updating or deleting data](/using-the-api/push) with Codat.


### 14. Rounding 

**Action required: none**

Codat handles the rounding of totals and ensures they match the values in Xero.
  
### 15. Taxes

**Action required: none or minimal**

If your app handles tax, you need to ensure the correct tax rate is used on invoices, quotes, etc. 

Codat can pull tax rates as individual tax rates and on transactions, like invoices or payments. We also handle tax rate calculation when creating or updating transactions with tax rates where multiple tax components are applied to the effective tax rates (e.g. compound tax rates).

We do not currently support the creation of new tax rates, so you can only use existing rates in a SMB's Xero account. You may need to allow for mapping of tax rates in your [account mapping page](/integrations/accounting/xero/partner-certification/checkpoints-app-store#12-account-mapping).

---

## If posting payments...

### 16. Payment account mapping

**Action required: significant**

Use our [Get push options](/platform-api#/operations/get-create-update-model-options-by-data-type) endpoint to fetch and show options available for payment account mapping when building a mapping inteface for your users (as described in [Checkpoint 12](/integrations/accounting/xero/partner-certification/checkpoints-app-store#12-account-mapping)).

You can also read more about [creating, updating or deleting data](/using-the-api/push) with Codat.

---

## Preferred user experience

The remaining checkpoints are considered best practices. These are not mandatory for the Xero certification, but can enhance the user experience. 

If you would like guidance on how to comply with any of these checkpoints, please consult your Codat account team.
