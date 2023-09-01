---
title: "App approval checklist"
---

In order to access Shopify data you must meet the [requirements in the Shopify App Store](https://shopify.dev/apps/store/review).

As part of this guide we have defined the key checkpoints that require your attention. Note, this list is not exhaustive and purely based on ours and our clients experience when working through the approval process. Please refer to [Shopify's requirements](https://shopify.dev/apps/store/requirements) for the latest information.

Additional Codat guidance available to [setup your Shopify integration](https://docs.codat.io/integrations/commerce/shopify/commerce-shopify).

Requirements
1. Prohibited and restricted app configurations
Web application only
Must make proper use of Shopify APIs to full effect
No processing payments outside of Shopify
No hosting marketplaces
No offering loans
No requiring browser extensions
No processing Shopify refunds
No connecting to other payments gateways
2. Installation
Installation must originate from the Shopify App Store
Your app must direct to [OAuth straight away](/integrations/commerce/shopify/commerce-shopify)
Only requests scopes required - if your scope requirements are less than the default please contact your Solutions Engineer or Implementation Specialist to limit.
Contains setup instructions if required
Avoid pop ups
3. Functionality and quality
A user interface is required, inluding buttons, controls and any setup instructions
If any charges then it uses the Shopify Billing API
Testing credentials included
Able to be tested and working
Latest API version used
4. Performance

Must not reduce [Lighthouse](https://developers.google.com/web/tools/lighthouse) performance scores by more than 10%.

5. App Listing
The app name can't include the word "Shopify."
The app name must be 30 characters or fewer.
The app name can't be a generic description of your app's functionality, such as "Banner Slider."
Your app name should be short and distinct.
The app name can't end with the name of your Shopify Partner account. For example, your app name can't be "App name by Shopify Partner account name".
Icon should be JPG or PNG and 1200px by 1200px
No text in icon
Don't reference other apps in content
Don't list competitors
Follow [guidelines for listing content](https://shopify.dev/apps/store/requirements#1-app-introduction)
Include screenshots
Ensure screenshots don't include sensitive info
Include video walkthrough
App store submission name matches name in Partners
Emergency Dev Contact details filled out

GDPR endpoints filled out

Own Privacy Policy listed

App should point to production