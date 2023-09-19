---
title: "Xero's certification checkpoints"
description: "A guide to getting Xero's Bank Feeds Partner certification with Codat"
---

Before you can go live with Xero Bank Feeds you must go through Xero’s partner certification process. To achieve Xero certification, you must comply with a set of technical requirements called certification checkpoints. Xero's Bank Feeds checkpoints are different from the standard checkpoints documented on [Xero’s website](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/). Xero's Bank Feeds checkpoints are not available online but your Codat account team can provide you with a template version of Xero's Bank Feeds App Review form that documents them in full. 

Codat's Bank Feeds product handles most of Xero's requirements for you but there are a few areas where you need verify you are compliant. This guide exists to explain which of Xero's requirements you need to take action to address before you can attain certification. 

## Xero Bank Feeds certification checkpoints

### 1. App Name/Portal Settings

**Action required: minimal**

You may not think of your bank feed as an ‘app’. This is simply Xero’s terminology for any connection to the Xero API. 
-	Your ‘app’ name is visible to end users at multiple points in the customer journey and it must reflect the go-to-market name of your company or product. It cannot include the word Xero. You can edit your app's name in the My Apps section of your Xero Developer Portal.
-	Your App email address should be a generic email address (eg: developers@companyname.com) so you will continue to receive important notifications from us, even if a staff member leaves.

### 2. Branding

**Action required: minimal**

You must be compliant with Xero's guidance wherever you mention your Xero Partnership or use their brand assets. To ensure that, review Xero's [Brand Guidelines](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) and [Branding how-to-guide](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

### 3. Connection

**Action required: none**

This is fully handled by Codat. 
  
### 4. Error handling

**Action required: none**

This is fully handled by Codat. 
  
### 5. Offline access

**Action required: none**

This is fully handled by Codat. 
  
### 6. Rate limit hit management

**Action required: none**

This is fully handled by Codat. 
  
### 7. Scopes

**Action required: none**

This is fully handled by Codat. 
  
### 8. Account mapping

**Action required: none**

This is fully handled by Codat. 
  
### 9. Bank name/logos/account number

**Action required: some**

This is a shared responsibility between you and Codat. We will work with you to ensure your Bank Feed implementation is compliant. 

Xero checks:
-	Is your brand correctly represented in Xero?
-	Are you setting an appropriate name for the accounts you create and is your logo showing correctly?
-	Are you setting the account number so that it displays correctly in Xero?

This is relevant when you set up your branding within Codat and when you share your branding details with Xero at the end of the certification process. 

### 10. Scheduled refresh

**Action required: none**

This is fully handled by Codat.

### 11. Missed / Rejected statements

**Action required: moderate**

This is a shared responsibility between you and Codat. We will work with you to ensure your Bank Feed implementation is compliant. 

Xero checks:
-	What happens when a statement gets rejected / missed
-	What do you do to make up a missed statement? (Re-added to the next queue / Dedicated call)
-	Will the user be notified if a statement gets rejected / missed?

Codat will communicate to you if a statement is missed/rejected. You need to ensure you have logic on your side to handle this as you see fit.
