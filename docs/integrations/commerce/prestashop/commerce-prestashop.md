---
title: "PrestaShop"
sidebar_label: Overview
description: "Learn about our PrestaShop integration"
createdAt: "2021-09-16T23:31:01.039Z"
updatedAt: "2022-11-17T10:56:52.590Z"
---

<p>
  <a className="external" href="https://www.prestashop.com/en" target="_blank">
    PrestaShop
  </a> 
  is an open source ecommerce platform written in PHP. PrestaShop enables merchants to create, configure and host an online ecommerce store.
</p>

Use Codat's Commerce API with PrestaShop to securely connect to, retrieve, and view your customers’ commerce transactions.

## Data type coverage

View the coverage of our PrestaShop integration in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=zgbz" target="_blank">Data coverage explorer</a>.

## Set up the integration

See [Set up the PrestaShop integration](/integrations/commerce/prestashop/set-up-prestashop-in-production) to learn how to set up and enable the integration.

## Configuration requirements

PrestaShop is not a SaaS solution. It is a software package hosted by the merchant (or a hosting provider on their behalf), along with an HTTP server to handle web traffic to the store front-end and the API.

To share their data, a merchant is required to:

1. Share their **Webservice key** (i.e. **API key**) and **Store URL**.
   If the merchant enters a redirect, they must confirm they want to use the redirect destination URL as the Store URL.

2. Ensure the HTTP server is correctly configured to allow the API to be accessed.

:::danger Possible Errors in Merchant Connection

Guidance for merchants on how to configure the PrestaShop Webservice is included within Link, as well as accessible from PrestaShop directly. However due to the wide range of possible PrestaShop installations and hosting combinations, merchants may encounter unforeseen issues depending on how they have chosen to host and configure PrestaShop. For example, some HTTP servers and PrestaShop installations default to stripping out authorization headers when accessing the API.

:::

Codat Link will test whether a connection has been successful by making a test call to the API. If this fails, the following message is displayed:

"Unable to verify Store URL and Webservice Key. Please ensure you have entered the correct details and that the store's Webservice is enabled."

:::info Pulling data

Resources available to the PrestaShop software instance from which data is being pulled may vary wildly between small merchants (potentially running the software on their laptop) and large enterprises (likely hosted on much more scalable infrastructure). At the time of pulling data, it is not possible for Codat to know what resources are available; As a result, Codat restricts the amount of data it fetches at any one time to minimize impact on instances with the least resources. The trade-off is longer pull times for all PrestaShop instances, even where resources might be available to pull data at a higher velocity.

:::

:::caution Add-ons and plugins

PrestaShop is an open-source platform built for configurability. A large part of its success is its wide-ranging add-on library featuring contributions from third party developers. Codat strives to add support for major add-ons where possible, but clients should be aware that in some cases it will not be possible to successfully retrieve data from customers with unsupported add-ons.

:::
