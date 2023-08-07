---
title: "Xero's certification checkpoints"
description: "A guide to Lending Partnership certification with Codat"
---

There are two important sets of technical requirements that lenders need to comply with to become Xero Partners:

* [Write Back](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/) - a requirement specific to lenders.
* Xero's [Certification Checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) - requirements that apply to all apps connecting into Xero.

We recommend working closely with your Codat account team on both sets of requirements to ensure a smooth implementation.
  
# Write Back
The goal of the write back is to maintain the financial position in Xero for the customer at any point of the lending cycle. This will be achieved by recording the loan liability, the interest and/or fees, repayments, and facilitating the reconciliation of bank accounts.

We have two guides on how to implement Write Back using Codat:
  * [General Lending Write Back](https://codat.zendesk.com/hc/en-gb/articles/4402368734225-Xero-General-Lending)
  * [Invoice Finance Write Back](https://codat.zendesk.com/hc/en-gb/articles/360019976977-Xero-Invoice-Finance)

# Certification Checkpoints

Codat complies with many of these checkpoints for you. However, there are some checkpoints that require you to take action. 
  
Below is a full breakdown of what you need to do for each Certification Checkpoint. 

## Always required

### 1. App name

#Action Required: Minimal
Your app name must reflect your go-to-market name as a lender and cannot include the word Xero. This is important because your App Name will be visible to borrowers at multiple points in the customer jouney. You can edit your app name in the My Apps section of your Xero Developer Portal.

### 2. Branding

#Action Required: Minimal
Read Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).
You must ensure you are compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. 

Xero would like you to use [Xero-branded “connect” and “disconnect” buttons](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) in your user interface (see checkpoint 3 for more context). This is not a hard requirement. If your app has multiple integrations, you can use a standard set of buttons for consistency of style. 

### 3. Connection

#Action Required: Significant

These certification checkpoints assume that borrowers are able to manage their data connection with you via a digital portal. This may not be relevant to you if:
  * You only pull data once during customer onboarding and then disconnect
  * You do not have a digital lending journey/portal for borrowers (eg if you rely on email exchanges with your staff)

If either of these are true, please ensure this is clearly communicated to Xero during your partner application so Xero is aware.

If you are a digital lender, Xero requires that you create a page in your UI where the user can manage their connection on an ongoing basis. You should use this page to satisfy the following requirements:

| Requirement | Recommendations |
| :-- | :-- |
| Display the name of the tenant that has been connected | This can be retrieved from Company Info endpoint. |
| Display the current status of the connection(s). If disconnected, provide a button to connect to Xero | Status - `Connection.status` endpoint.  <br/>Link to power your button to connect - `Connection.linkURL` |
| Include a button to disconnect | When a user clicks on your button, use Coadt's PATCH connections endpoint to disconnect. |
| Handle a disconnect from Xero's side | Codat handles the disconnection from Xero’s end. You need to identify when a disconnect has occured by using the alert of type “Data Connection Status Changed”. When this alert is triggered, change the connection status in your UI and display a "Reconnect" or "Connect" button. |
| 1:1 or multi-org connection | Codat allows your customers to select their Xero organization using the native Xero UI. You can allow your customer to connect to multiple organizations within Xero by creating a separate Codat company per organization. |
| Disconnection process for off-boarding | Connections can be disconnected through the PATCH connections endpoint to prevent further syncs or the DELETE connections endpoint to prevent both further syncs and querying of historically synced data within Codat. |

### 4. Error handling

#Action Required: Significant

Codat provides detailed error messaging including status codes and the details of the error.

If an error occurs, your UI should communicate the fact that an error has occured to the user. If you are a digital lender, you should have alerts in your UI. Detailed error messages or logs are a best practice but not a hard requirement. Details on the types of error messages provided by Codat is available [here](https://docs.codat.io/using-the-api/errors).

### 5. Offline_access

#Action Required: None

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.
  
### 6. Rate limit hit management

#Action Required: Minimal

Your Codat account team will work with you to ensure your rate limit hit management is handled appropriately. You do not need to take independent action on this. 
  
### 7. Scopes

#Action Required: Minimal

Xero requires that apps only have access to the data that they need. You need to ensure that you only have the Scopes enabled for the data access that you require for your use case. 
We have created [this guide](https://docs.codat.io/integrations/accounting/xero/scopes) to explain which Scopes typically correspond to different Codat use cases. Your Codat account team will work with you to ensure your Scopes are set appropriately for your use case. 

### 8: Sign Up with Xero

#Action Required: None or Significant

Sign Up with Xero is only a requirement for App Store Partners. It is not a requirement for Lending Partners as Lending Partners are not required to have a listing in the Xero App Store. 
  
If you would like to be listed in the Xero App Store for GTM reasons, you must complete Sign Up With Xero. This does require some additional development work that typically takes several days to complete. Our full guide to Sign Up with Xero can be found [here](/integrations/accounting/xero/xero-sign-up-with-xero).

---

## If getting data...

### 9. Modified after

#Action Required: None

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.

### 10. Paging

#Action Required: None

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API.

### 11. Webhooks

#Action Required: None

This checkpoint is fully handled by Codat as we handle the connectivity with Xero's API. However, you should ensure you use the appropriate webhooks as you interact with the Codat API. 
  
---

## If posting or putting data...

### 12. Account mapping

#Action Required: None

Not relevant to Lending Partnership.

### 13. Currency

#Action Required: None

Not relevant to Lending Partnership.

### 14. Rounding 

#Action Required: None

Not relevant to Lending Partnership.
  
### 15. Taxes

#Action Required: None

Not relevant to Lending Partnership.

---

## If posting payments...

#Action Required: None

Not relevant to Lending Partnership.

---

## Preferred user experience

Checkpoints 17-21 are best practices not requirements. You do not need to comply with these for Xero certification, although they can enhance the user experience. 

### 17. Sign in with Xero

If you would like to implement Sign in with Xero using Codat, please contact your Codat account team for detailed guidance.

### 18. Deep linking

Deep-linking enables your application to create a link that directs the user to a specific resource within a specific Xero Organization. This provides a quick and easy way for the user to jump into Xero to see or take action against the resource referenced in your product.

You can view the direct links via the Company Info endpoint specifically sourceURLs.

Codat also uses the Xero record ids, which enables you to implement deep links for Xero contacts by using a hyperlink with the following structure:

`https://go.xero.com/Contacts/View/{customerId from Codat}`

You can find further information about [deep linking in Xero's docs](https://developer.xero.com/documentation/guides/how-to-guides/deep-link-xero/).

### 19. Invoice status

Available when pushing via the Invoice endpoint

### 20. Invoice URL and bank transactions URL

This is not currently supported via Codat. Please contact your Codat account team with a feature request, if you are interested. 

### 21. Logs

A log of all retrieved data and syncronizations can be retrieved from the data history endpoint, this can then be displayed back to the user so, for example, they can see when invoices were last fetched from their Xero instance.

The same is true for displaying a list of the records that have been created and updated, all of these operations and records can be retrieved from the push endpoint.
