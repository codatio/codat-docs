---
title: "Amazon Seller Central"
description: "Learn about our Amazon Seller Central integration"
createdAt: "2021-08-27T22:41:15.062Z"
updatedAt: "2022-10-20T13:32:18.005Z"
---

<a class="external" href="https://sellercentral.amazon.com/" target="_blank">
  Amazon Seller Central
</a> is a platform that independent merchants use to sell their products on Amazon.

Our Commerce API supports Amazon Seller Central and allows your linked customers to share their Amazon Seller Central data through Codat. You can then retrieve this data in the same standardized format as our other commerce integrations.

## Data type coverage

View the coverage of our Amazon Seller Central integration in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=qkdj" target="_blank">Data coverage explorer</a>.

## Set up the integration

See [Set up the Amazon Seller Central Integration](/set-up-amazon-seller-central) to learn how to set up and enable the integration.

:::caution Underlying provider requirements
Before setting up your Amazon Seller Central integration, you must complete all the requirements described in [Amazon Web Services, IAM & Developer Registration](/amazon-registration-steps).

Note that your application must be reviewed before you can start using the integration.
:::

## Important definitions

**Amazon Seller Central** is the platform that Amazon sellers use to run their Amazon business.

The **Amazon Selling Partner API** is the API on which Amazon Seller Central is built. This API is an upgrade to the legacy Amazon Marketplace Web Service (MWS) APIs, which are due to be deprecated at an unspecified date in the future.

Both in general and in this documentation, Codat refers to our Amazon integration as an integration with **Amazon Seller Central**. However it is important to note that the required developer registration with Amazon is for developer rights to the **Amazon Selling Partner API**.

For the sake of clarity when discussing developer registration in particular, this guide will use the exact name of the API.

:::caution Rate Limits and Sync Frequency
The Selling Partner API enforces rate limiting on incoming requests. Effectively, these limits work out to allowing [1 request per minute](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference#get-ordersv0orders). Syncing commerce data at a high frequency &ndash; for example, once every 15 minutes &ndash; will likely exceed the rate limit and cause poor performance due to throttled requests. For optimal performance, we recommend setting the sync frequency of the Amazon Seller Central integration to a long interval, such as daily or weekly.
:::

:::caution Multiple Marketplaces
Amazon Seller Central is a global platform with separate marketplaces in separate territories around the world. While merchants can sell in multiple marketplaces, each data connection is limited to a single marketplace being served by the Amazon merchant.

Your customers who sell in multiple territories can connect all their Amazon Seller Central marketplaces to Codat, but will need to go through the Link flow separately for each regional marketplace.
:::
