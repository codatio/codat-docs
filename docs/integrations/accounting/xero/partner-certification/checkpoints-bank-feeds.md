---
title: "Xero's Bank Feeds Partner certification checkpoints"
description: "A guide to getting Xero's Bank Feeds Partner certification with Codat"
---

To receive an Bank Feeds Partner certification, all apps connecting to Xero must comply with a list of technical certification checkpoints. Bank Feeds Partner checkpoints differ from Xero’s [standard checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) and are not available online. Codat can provide you with Xero's Bank Feeds App Review form that documents them in full.

## Certification checkpoints

Codat handles many of the certification checkpoints for you. For those that require you to take action, we prepared this companion guide that helps you understand the steps you need to take. We also recommend that you work closely with your Codat account team during your implementation.

### 1. App name and portal settings

**Action required: minimal**

Xero calls any connections to the Xero API "apps", even if you may not think of your bank feed as an application. Your app will need to comply with two requirements:

* Your app's name is visible to end users at multiple points in the customer journey and it must reflect the go-to-market name of your app or product. It cannot include the word `Xero`. You can edit your app's name in the **My Apps** section of your Xero Developer Portal.

* Your app's email address should be generic (for example, `developers@companyname.com`) and not be a specific employee's address. This will ensure you continue to receive important notifications even if a staff member leaves.

### 2. Branding

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure that, review Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

### 3. Connection

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.
  
### 4. Error handling

**Action required: none**

Our Xero integration covers the requirements of this checkpoint in full.
  
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

Our Xero integration covers the requirements of this checkpoint in full. 
  
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
