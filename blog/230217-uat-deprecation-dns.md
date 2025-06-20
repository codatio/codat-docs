---
title: "Completed 2023-01-31: Deprecation of UAT environment: Date of DNS switchover"
date: "2023-02-17"
tags: ["Deprecation", "Completed", "UAT"]
draft: false
authors: pzaichkina
description: On Friday 17 February, 2023, we will switch the existing public DNS for the UAT environment, which is now deprecated, to point to the Production environment.
---

:::caution Update: Sep 26, 2024

Some UAT domains have remained aliased to our production instance. These aliases will be disabled on the 1st November 2024.

If you are still pointing to, for example, `https://api-uat.codat.io`, you should instead point to `https://api.codat.io`.

:::

:::caution Update: February 17, 2023

**Additional action required to link new companies in migrated Test accounts following the DNS switchover from UAT to Production**

We've now switched over the existing public DNS for the UAT environment to point to Production.

In some scenarios, you now need to make minor configuration changes to the Redirect URIs used in your third-party developer apps. **This is required in order to start linking new companies in your Codat Test account.**

For details of the affected integrations and the Redirect URIs you need to add, see the [Knowledgebase article](https://codat.zendesk.com/hc/en-gb/articles/9389011101341--UAT-Deprecation-Changes-to-the-app-setup-used-for-your-new-Test-account-).

:::

<!--truncate-->

## Summary of changes

On Friday 17 February, 2023, we will switch the existing public DNS for the UAT environment, which is now deprecated, to point to the Production environment. This change was previously communicated in the entry <a href="https://docs.codat.io/updates/230131-uat-deprecation">\[Upcoming 2023-01-31] Deprecation of UAT environment</a>.

We apologise for delaying the DNS switchover from the initially proposed date; this will ensure that the change is as seamless as possible.

## Reminder of action required

After the DNS switchover, any integrations that require an app to be configured with fixed redirects for their OAuth authentication flow will redirect and point to your Production environment. For example, a Xero app that is configured for UAT with a redirect URL including `xero-uat.codat.io` will redirect to `xero.codat.io` for any new connections created.
