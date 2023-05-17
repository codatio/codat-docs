---
title: "PayPal"
sidebar_label: Overview
description: "Learn about our PayPal integration"
createdAt: "2021-03-25T13:08:19.226Z"
updatedAt: "2022-11-15T13:20:16.445Z"
---

[PayPal](https://www.paypal.com/) is an international online payment processing platform that handles credit card
payments and charges on behalf of small businesses.

Use Codat's Commerce API with PayPal to securely connect to, retrieve, and view your customers' commerce transactions.

## Data type coverage

View the coverage of our PayPal integration in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=gvom" target="_blank">Data coverage explorer</a>.

## Set up the integration

See [Set up the PayPal Integration](/integrations/commerce/paypal/set-up-paypal-in-production) to learn how to set up and enable the integration.

:::caution Underlying provider requirements

Codat's PayPal integration is built using PayPal's XS2A API and is available only to organizations holding an AISP and/or PISP authorization.

PayPal requires you to provide them with either an eIDAS QWAC or OBWAC, i.e. an Open Banking certification. For guidance on how to register for one of these certifications, see [Payment Services Directive 2 (PSD2) Compliance](https://developer.paypal.com/reference/guidelines/psd2-compliance/) in the PayPal developer documentation.

:::

## Supported versions and geographies

Codat's PayPal integration supports global PayPal business accounts only. **Personal & Premier accounts are not included or supported.**

Our PayPal integration is supported for **Europe only**. To use it, your organization must be based in Europe; only have access to data from European bank accounts; and be authorized as an AISP and/or PISP as described in the _Provider requirements_ box.

## Time limitations on data syncs

Access granted by a merchant to access their PayPal data through PayPal’s X2SA API is valid for only 90 days.

Attempting to sync data after the 90 day period has lapsed will result in an Authentication Error (and the data connection becoming deauthorized).

To maintain a connection beyond 90 days, you will need to request that the merchant reauthorize the connection (this can be done at any time before or after the end of the 90 day period).

PayPal’s X2SA API only allows data to be pulled for the last 90 days and Codat will only be able to sync/store/return data for 90 days from the latest sync you perform.
