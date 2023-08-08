---
title: "Xero's certification checkpoints"
description: "A guide to getting Xero's Lending Partnership certification with Codat"
---

For lenders that want to become Xero Partners, Xero stipulates two technical requirements to comply with: 

- Xero's [certification checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) that apply to all apps connecting to Xero.
- [Lending write-back](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/), which is a lender-specific requirement.

We provided you with a detailed breakdown of actions you need to take for each certification checkpoint, and recommend that you work closely with your Codat account team during your implementation. 

### Lending write-back

The purpose of the lending write-back is to accurately maintain the financial position of a customer in Xero at any point of the lending cycle. This is typically done by recording the loan liability, any interest, fees, and repayments, and facilitating the reconciliation of the bank account. Codat offers the following guides on implementing lending write-back: 

  * [General lending write-back](https://codat.zendesk.com/hc/en-gb/articles/4402368734225-Xero-General-Lending)
  * [Invoice finance write-back](https://codat.zendesk.com/hc/en-gb/articles/360019976977-Xero-Invoice-Finance)

## Certification checkpoints

Codat handles many of Xero's certification checkpoints for you. However, some checkpoints, especially ones related to your app's UI, require you to take action.

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

This checkpoint assumes that your borrowers are able to manage their data connection via a digital portal you provide. This may not be relevant if:
  * You pull data once during customer onboarding and then disconnect.
  * You do not have a digital lending journey for borrowers and rely on a different approach instead (for example, emails).

  If either of these are true, communicate this clearly to Xero during your partner application. Otherwise, your digital portal UI should satisfy the following requirements:

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | This can be retrieved from our [Get company info](/accounting-api#/operations/get-company-info) endpoint. |
| Display the current status of the connection(s). If disconnected, provide a button to reconnect to Xero | Status - `Connection.status` endpoint.  <br/>Link to power your button to connect - `Connection.linkURL` |
| Provide a button to terminate the connection | When a user clicks on the button, use our [Unlink connection](/codat-api#/operations/unlink-connection) endpoint to disconnect from Xero. |
| Handle a disconnect from Xero's side | Use our [Data connection status changed](/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed) webhook to identify when a disconnect happens. When the alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button.|
| Support one-to-one or multi-organizational connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can enable them to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Provide a disconnection process for off-boarding | Use our [Unlink connection](/codat-api#/operations/unlink-connection) endpoint to prevent further syncs or the [Delete connection](/codat-api#/operations/delete-company-connection) endpoint to prevent further syncs and querying of historically synced data. |

### 4. Error handling

**Action required: significant**

If an error occurs, your UI should communicate that fact to the user. It is best practice to provide detailed error messages or logs. Codat provides detailed error messaging for any issues with the integration, including status codes, listed in our [Status codes and errors](/using-the-api/errors).

### 5. Offline access

**Action required: none**

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.
  
### 6. Rate limit hit management

**Action required: minimal**

You do not need to take independent action for this checkpoint, because your Codat account team will work with you to manage your rate limits. 
  
### 7. Scopes

**Action required: minimal**

Xero requires that apps only have access to the data that they need, so you should only enable scopes required to access the data relevant to your use case. We provide [a guide](/integrations/accounting/xero/partner-certification/scopes) to explain which scopes typically correspond to which use cases, and will work with you to ensure your scopes are set appropriately.  

### 8. Sign Up with Xero

**Action required: none or significant**

Implementing a Sign Up with Xero flow is not a requirement for Lending Partners as they are not required to have a listing in the Xero App Store. 
  
If you would like to be listed in the Xero App Store for go-to-market reasons, you must provide Sign Up with Xero, which requires additional development work that typically takes several days to complete. We prepared a [full guide](/integrations/accounting/xero/partner-certification/sign-up-with-xero) to the Sign Up with Xero flow.

---

## If getting data...

### 9. Modified after

**Action required: none**

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.

### 10. Paging

**Action required: none**

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.

### 11. Webhooks

**Action required: none**

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API. However, ensure you use appropriate webhooks as you interact with the Codat API. You can learn more about the [webhooks we provide](/using-the-api/webhooks/core-rules-types) and [how to set them up](/using-the-api/webhooks/core-rules-create).
  
---

## If posting or putting data...

### 12. Account mapping

**Action required: none**

Not relevant to Lending Partnerships.

### 13. Currency

**Action required: none**

Not relevant to Lending Partnerships.

### 14. Rounding 

**Action required: none**

Not relevant to Lending Partnerships.
  
### 15. Taxes

**Action required: none**

Not relevant to Lending Partnerships.

---

## If posting payments...

### 16. Payment account mapping

**Action required: none**

Not relevant to Lending Partnerships.

---

## Preferred user experience

The following checkpoints are considered best practices. These are not mandatory for the Xero certification, but can enhance the user experience. 

### 17. Sign in with Xero

If you would like to implement Sign in with Xero using Codat, please contact your Codat account team for detailed guidance.

### 18. Deep linking

Deep linking enables your application to create a link that directs the user to a specific resource within a specific Xero organization. This provides a quick and easy way for the user to jump into Xero from the resource referenced in your product.

You can view the direct links in the `sourceUrls` property of our [Get company info](/accounting-api#/operations/get-company-info) endpoint. 

We also use Xero record ids, which means you can implement deep links for Xero contacts by using a hyperlink with the following structure:

`https://go.xero.com/Contacts/View/{Codat's customerId}`

You can find further information about deep linking in Xero's [own documentation](https://developer.xero.com/documentation/guides/how-to-guides/deep-link-xero/).

### 19. Invoice status

Available when pushing via the Invoice endpoint

### 20. Invoice URL and bank transactions URL

This is not currently supported via Codat. Please contact your Codat account team with a feature request if this functionality is required for your use case. 

### 21. Logs

You can [retrieve a log](/using-the-api/pull-history) of all data types and past syncronizations performed by Codat, and display it back to the user, using our [List pull operations](/codat-api#/operations/list-pull-operations) endpoint. This may be useful if, for example, they want to know when invoices were last fetched from their Xero instance.

You can also [retrieve and display the history](/configure/portal/pull-and-push-history) of created, updated or deleted data using our [List push operations](/codat-api#/operations/get-company-push-history) endpoint. 