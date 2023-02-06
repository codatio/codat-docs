---
title: "Test your BigCommerce integration"
description: "Test our BigCommerce integration by pulling sandbox data to a test Company"
createdAt: "2022-07-18T14:14:57.301Z"
updatedAt: "2022-10-19T16:18:50.870Z"
---

You can test your BigCommerce integration by retrieving sample data from a sandbox store to a test company in Codat. This lets you test the Link site that your SMB customers will use when they connect their BigCommerce stores to Codat through the integration.

You can view the sample commerce data in the Codat Portal.

## Prerequisites

- Update your [data type settings](/commerce-sync-settings) to enable commerce data types.

## Add a test company

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
1. In the **Add new company** dialog, enter a name for your test company, like `bigcommerce-test`, then click **Add**. The Link URL is displayed in the dialog.

## Create a sandbox store and add sample data

You must be a BigCommerce Technology Partner to create a sandbox store.

1. Follow the steps in <a className="external" href="https://developer.bigcommerce.com/docs/ZG9jOjM4MzMyNTE-create-a-sandbox-store" target="_blank">Create a Sandbox Store</a> in the BigCommerce Dev Center.
1. Sign in to your BigCommerce dashboard.
1. From your dashboard, add some sample orders and customers to your store (sample products are created for you).

## Connect your test company to your sandbox store

Test the authentication flow that your customers will use when they connect their BigCommerce store using Link.

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies** then locate the test company you created.
2. Click the **Link** icon next to the test company.
3. Enter the Link URL in a new browser tab.
4. Follow the steps in [SMB customer: Authenticate and connect your commerce data](/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data).

## Retrieve sample commerce data

View sample commerce data from your BigCommerce sandbox store in your test company.

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies** then select the test company you created.
2. Select **Commerce API** in the list of products.
3. View the sample commerce data from your sandbox store.

   If no data is displayed, click **Refresh data**.
