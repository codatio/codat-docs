---
title: "Stripe"
sidebar_label: Overview
description: "Learn about our Stripe integration"
---

<p>
  <a className="external" href="https://stripe.com/" target="_blank">
    Stripe
  </a> 
  is an international online payment processing platform that handles credit card payments and charges on behalf of small businesses.
</p>

Use Codat's Commerce API with Stripe to securely connect to, retrieve, and view your customers' commerce transactions.

:::caution Action required by existing users

The integration now uses <a className="external" href="https://stripe.com/docs/connect" target="_blank">_Stripe Connect_</a> to establish authenticated connections between companies and Stripe data sources, rather than _Stripe extensions_.

If you're an existing user, you must configure your Stripe integration to use Stripe Connect before you can link any more customers (merchants). Existing data connections are unaffected until 2024, the planned deprecation date for Stripe extensions.

See [Set up the Stripe integration](/integrations/commerce/stripe/commerce-stripe-setup) for the steps you need to take to update your integration.
:::

## Data type coverage

View the coverage of our Stripe integration in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=exgd" target="_blank">Data coverage explorer</a>.

## Available integrations

Codat provides two Stripe integrations: **Stripe Test** and **Stripe**. The following table explains what each integration is used for.

|Integration|Connects to...|Retrieves...|
|----|----|----|
|**Stripe Test**|Stripe _test mode_ using the _test client ID_ and _test Secret key_.|Test data from Stripe, available for Company info, Customers, Disputes, Payments, Products, and Transactions.|
|**Stripe**|Stripe _live mode_ using the _live client ID_ and _live Secret key_. To enable live mode, you must first activate your Stripe account by providing additional information about your business.|Live data from production Stripe accounts.|

## Switch between test and live modes

You can switch between _test mode_ and _live mode_ in Stripe using the toggle at the top right of the Stripe dashboard.

![Test mode switch](/img/old/80db658-stripe-test-mode-switch.png "The Test mode toggle at the top-right of the Stripe developer dashboard.")

## Set up the integration

See [Set up your Stripe integration](/integrations/commerce/stripe/commerce-stripe-setup) to learn how to set up and enable the integration.
