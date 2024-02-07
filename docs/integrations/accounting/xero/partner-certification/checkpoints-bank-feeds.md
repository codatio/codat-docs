---
title: "Xero's Bank Feeds Partner certification checkpoints"
description: "A guide to getting Xero's Bank Feeds Partner certification with Codat"
---

To receive Xero Bank Feeds Partner certification, you must comply with a list of technical checkpoints. Xero's technical requirements for Bank Feeds differ from Xero’s [standard checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) and are not available online. On request, your Codat account team can provide you with Xero's Bank Feeds 'App Review Form' which documents the requirements in full.

## Certification checkpoints

Codat handles many of the certification checkpoints for you. For those that require you to take action, we prepared this companion guide that helps you understand the steps you need to take. We also recommend that you work closely with your Codat account team during your implementation.

### 1. App name and portal settings

**Action required: minimal**

Xero calls any platforms connecting to the Xero API "apps". You may not think of your offering as an "app" but this is simply Xero's preferred terminology. Your app will need to comply with two requirements:

* Your app's name must reflect the go-to-market name of your app or product. It cannot include the word `Xero`. You can edit your app's name in the **My Apps** section of your Xero Developer Portal. This is important because your app name is visible to end users at multiple points in the customer journey.

* Your app's email address should be generic (for example, `developers@companyname.com`) and not be a specific employee's address. This will ensure you continue to have access to your Xero developer account even if a staff member leaves.

### 2. Branding

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure that, review Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

### 3. Connection

**Action required: none or significant**

If you use Codat's Bank Feeds UI your bank feed will satisfy these requirements. If you create your own bank feed UI, you must ensure you meet these requirements:

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | This can be retrieved from our [Get company info](/accounting-api#/operations/get-company-info) endpoint. |
| Display the current status of the connection. If disconnected, provide a button to reconnect to Xero | Use our [Get connection](/platform-api#/operations/get-company-connection) endpoint to check the `status` of the connection and use the `linkUrl` to reconnect.|
| Provide a button to terminate the connection | When a user clicks on the button, use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to disconnect from Xero. |
| Handle a disconnect from Xero's side | Use our [Data connection status changed](/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed) webhook to identify when a disconnect happens. When the alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button. Xero recommends setting a regular daily sync of light data types so you can check each connected company's connection status every day.|
| Support one-to-one or multi-organizational connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can enable them to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Provide a disconnection process for off-boarding | Use our [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to prevent further syncs or the [Delete connection](/platform-api#/operations/delete-company-connection) endpoint to prevent further syncs and querying of historically synced data.|
  
### 4. Error handling

**Action required: none or some**

If you use Codat's Bank Feeds UI your bank feed will satisfy this requirement. If you create your own bank feed UI, you must ensure you communicate appropriately to your customers if an error occurs.

### 5. Offline access

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.
  
### 6. Rate limit hit management

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full. 
  
### 7. Scopes

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full. 
  
### 8. Account mapping

**Action required: none**

If you use Codat's Bank Feeds UI your bank feed will satisfy this requirement. If you create your own bank feed UI, you must create an an appropriate account mapping functionality. Codat has created [this guide](https://docs.codat.io/using-the-api/best-practices/implementing-a-mapping-page) to help you build an Account Mapping UI using Codat. 
  
### 9. Bank name, logos, and account number

**Action required: some**

This checkpoint is relevant when you set up your branding within Codat and again when you share your branding details with Xero at the end of the certification process.

Your Codat team will work with you to ensure your Bank Feed implementation complies with the following Xero checks: 

* Your brand is correctly represented in Xero.
* You set appropriate names for the accounts you create. 
* Your logo and account number are displayed correctly. 

### 10. Scheduled refresh

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.

### 11. Missed and rejected statements

**Action required: moderate**

Codat will communicate to you if a bank statement is missed or rejected. Include appropriate logic in your app to handle this outcome as you see fit. 

Your Codat team will then work with you to ensure your Bank Feed implementation complies with the following Xero checks:

* Your app can handle rejected and missed statements. 
* How your app compensates for a missed statement (for example, adds it to the next queue or performs a dedicated call).
* Your user is notified in case of missed or rejected statements.
