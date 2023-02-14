---
title: "Test your Stripe integration"
description: "Test our Stripe integration by pulling sample data to a test Company"
createdAt: "2021-02-04T12:16:20.828Z"
updatedAt: "2022-10-20T09:25:35.756Z"
---

You can use the Stripe Test integration to pull test data from Stripe to Codat.

:::info Testing in Stripe
Stripe lets you test accounts using [test API keys and test data](https://stripe.com/docs/connect/testing), such as bank account numbers, card numbers, and so on.
:::

## Prerequisites

Set up the Stripe Test integration by following the tasks in [Set up your Stripe integration](/integrations/commerce/stripe/commerce-stripe-setup).

## Add a test company

In the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. Select **Companies > New company**.
2. In the **Add new company** dialog, enter a name for your test company, like `stripe-test`, then click **Add**. The **Link URL** is displayed in the dialog.

## Create a Stripe testing account, add test data, and access credentials

1. Sign in to the <a className="external" href="https://dashboard.stripe.com/" target="_blank">Stripe Developers Dashboard</a>.
2. Within your Stripe profile, create a new account for testing. The account will be created in test mode and can't be switched to live mode without activation.

   1. Select the account menu at the top left.
   2. Select **New account**.
   3. Enter a name for your testing account, then click **Create account**.

3. Add some compatible test data to your account; for example Customers, Products, Disputes, and Payments.
4. Complete steps 1-6 in [Register as a Stripe Connect platform](/integrations/commerce/stripe/commerce-stripe-setup#register-as-a-stripe-connect-platform) to gain access to your test credentials for the new account.

## Connect your test company to your Stripe testing account

Test the authorization process that your customers will see when they connect their Stripe account in Link.

In the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. Select **Companies**.
1. Hover over your test company, then click **Request data**. The **Onboarding** dialog is displayed.
1. Copy the **Link URL** then paste it to a new browser tab to load the Link site.
1. Complete the steps in Link; the exact steps shown depend on your Link settings. You'll need to:
   1. Select **Stripe Test** as the commerce software to connect to.
   2. Sign in to your Stripe account if prompted.
   3. On the **Select the account you'd like to connect to** page, select your testing Stripe account. You can't use your main Stripe account for testing purposes.
   4. Click **Skip this form**. The **Connection Successful** page in Link is displayed.
   5. Complete the Link flow.

A new Standard connected account is created and is visible on the **Connect** page in Stripe.

## Retrieve test commerce data

Test the integration by pulling some test commerce data from Stripe to Codat.

In the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. Select **Companies**, then select your test company.
1. Click **Refresh data**.
1. Select **Commerce API**.
1. Use the **Data type** dropdown to view test data from your Stripe testing account. For example, select **Products** or **Transactions**.

:::info
Data is only available for supported commerce data types for which test data exists.
