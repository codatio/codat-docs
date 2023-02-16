---
title: "Upcoming 2023-01-31: Deprecation of UAT environment"
date: "2023-01-15"
tags: ["Deprecation", "UAT"]
draft: false
authors: jasond-s
description: On January 31, 2023, Codat will deprecate its UAT environment and move to a single Production Codat environment, with the option of separate Live and Test accounts. Any accounts that you hold in the UAT environment will be replaced with Test accounts in the single Production environment.
---

:::caution Update: February 1, 2023

All existing UAT users and accounts have now been migrated to the Production environment.

To reduce unnecessary downtime, we've delayed the final step of switching the existing public DNS for UAT over to Production. We expect to complete this step in the near future.

When convenient, please update any apps configured with fixed redirects to point to `api.codat.io` as described in **Additional information**, below.
:::

<!--truncate-->

On January 31, 2023, Codat will deprecate its UAT environment and move to a single Production Codat environment, with the option of separate Live and Test accounts. Any accounts that you hold in the UAT environment will be replaced with Test accounts in the single Production environment.

:::note Affected environments
This change will only affect users who access Codat through the `app-uat.codat.io`, `portal-uat.codat.io`, or `api-uat.codat.io` hostnames. If you do not use these environments, you will not be affected by this change.
:::

This will not affect any accounts that you already have in the Production environment; if your Codat user becomes associated with multiple (Live and Test) accounts as a result of this change, each time you log in to Codat you will be prompted to choose which account you would like to access.

To make this change as seamless as possible, we will be migrating all of the accounts and associated users, along with global configuration. All accounts migrated from the UAT environment will be labelled as _Test accounts_, and will not impact your existing Live accounts in any way.

Example of user logging into the Production environment with both Live and Test accounts:

<img
  src="/img/old/66d6e34-4df0df69-b94c-4a46-b229-73430182704c.png"
  alt="Example of a production environment with a production account and a test account."
/>

## Action required

We will only be migrating users and global configuration, including: API keys, integration credentials, sync settings, branding, and rules that are assigned to _All companies_. This configuration will allow you to link new test companies without requiring any further setup.

We will not be migrating any pre-existing test companies, connections, or associated data from the UAT environment to the Production environment. This means you will need to recreate any test data you rely on by creating new companies and linking them to the source of that data.

## Expected impact if no action is taken

If you do not recreate any test companies, connections, or test data, there will be no test data available to test with in your Test account.

## Additional information

We will be migrating all existing UAT users and accounts to Production (Test accounts) over the course of January 2023. You will receive an invite email to new Test account(s) when this process has been completed. We expect this process to be complete by January 31, 2023.

Once all of the existing users and accounts have been migrated, we will switch the existing public DNS for UAT to point to the Production environment. This will mean that, from January 31, any integrations that require an app to be configured with fixed redirects for their OAuth authentication flow will redirect and point to your new environment. For example, a Xero app that is configured for UAT with a redirect URL including `xero-uat.codat.io` will redirect to `xero.codat.io` for any new connections created.

---

#### Edit history

- This page was edited on 27 January, 2023 to add `app-uat.codat.io` to the list of affected hostnames.
