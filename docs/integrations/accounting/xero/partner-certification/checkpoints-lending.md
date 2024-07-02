---
title: "Xero's Lending Partnership certification checkpoints"
description: "A guide to getting Xero's Lending Partnership certification with Codat"
---

For lenders that want to become Xero Partners, Xero stipulates two technical requirements to comply with: 

- [Lending writeback](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/), which is a lender-specific requirement.
- Xero's [certification checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/), not all of which apply to lenders.

## Lending writeback

The purpose of the lending writeback is to accurately maintain the financial position of a customer in Xero at any point of the lending cycle. This is typically done by recording the loan liability, any interest, fees, and repayments, and facilitating the reconciliation of the bank account. 

Codat offers [this guide on implementing lending write-back](https://docs.codat.io/lending/guides/loan-writeback/introduction).

## Certification checkpoints

### 1. Sign up with Xero

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.

### 2. Xero App Store

**Action required: none**

This checkpoint is not relevant to Lending Partnerships.

### 3. Connection

**Action required: moderate**

Xero requires that users can manage the connection between Codat and Xero on an ongoing basis. 

The easiest way to do this is by implementing Codat's [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) into your front end. This follows best practice and complies with all of Xero's connection requirements.

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
