---
title: "2023-10-10: Change in pricing for some accounting integrations"
date: "2023-07-06"
tags: ["Deprecation", "Update", "Integrations", "Accounting API"]
authors: mcclowes
---

On the **10th October, 2023**, we will be changing the way you access some accounting integrations.

<!--truncate-->

**The following integrations will only be available to customers on an Enterprise plan (including our *Standard plan*):**

Microsoft Dynamics 365 Business Central, NetSuite, QuickBooks Desktop, Sage 50, Sage Intacct.

These platforms are complex integrations and typically require help from the Codat team to use effectively. For customers without access to our support and solutions teams, this can lead to a disappointing developer experience and potential issues for end customers.

#### Impacted customers

Any customers on the following plans will no longer have access to these integrations:

- Free plan
- Start-up plan

#### Impacted integrations

- [Microsoft Dynamics 365 Business Central](/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral)
- [NetSuite](/integrations/accounting/netsuite/accounting-netsuite)
- [QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop)
- [Sage 50](/integrations/accounting/sage50/accounting-sage50)
- [Sage Intacct](/integrations/accounting/sage-intacct/accounting-sage-intacct)

## Action required

If you are currently using these integrations and want to continue doing so, you'll need to talk to us about upgrading.

**Our enterprise plan includes access to all of our integrations, plus access to unit pricing that works at scale, premium technical support, enterprise grade SSO, and more.**

You can either [get in touch here](https://www.codat.io/plans/#get-in-touch) or speak to your account manager (if applicable).

## Expected impact if no action is taken

From the 10th October, 2023, start-up & free plan clients will no longer be able to use these integrations.

- **New connections** - Your customers won't be able to authorize access to these platforms. Additionally, they will no longer appear in Link.
- **New data synchronisations** - Existing connections to these platforms won't work, and new data won't be able to be pulled from or pushed to these source.
- **Configuration** - You'll no longer be able to enable or amend the integration. You'll see the below message:

![Premium flag on integrations in the Portal](/img/updates/erp-deprecation.png)

**Any existing pulled data will not be impacted.** You'll still have access to any company data you've already pulled, you just won't be able to refresh that data.