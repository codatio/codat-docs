---
title: "Test your Mollie integration"
description: "Test our Mollie integration by pulling sandbox data from a test company"
sidebar_label: Testing
unlisted: true
---

You can use the Mollie Test integration to pull test data from Mollie into Codat.

### Prerequisites

- [ ] [Enable the Mollie Test integration](/integrations/commerce/mollie/commerce-mollie-setup).
- [ ] Enable the commerce data types

## Create some data in Mollie

Mollie does not provide any sample data - you need to create test data using the Mollie API so that you can retrieve and view commerce data from your test company. You are able to create sample data for Customers, Orders, Payments and Transactions.

In the Test integration, Codat considers Mollie data as sample when its `testmode` parameter is passed as True.

For help with adding test transactions, see <a className="external" href="https://docs.mollie.com/overview/testing" target="_blank">Testing the Mollie API</a> in the Mollie documentation.

:::caution Mollie payment data limitations

You can't create Disputes and Settlements test data due to local legal limitations for storing sample data. Additionally, Products and Locations data types are not supported by Mollie.
:::

## Create a company

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.
2. Click **Create Company**.
3. In the **Add new company** dialog, enter a name for your test company, such as `mollie-test`, then click **Add**. The Link URL for your test company is displayed.

## Connect your test company to your Mollie merchant account

Test the authentication process that your customers will use when they connect their Mollie merchant account in Link.

1. Ensure you are signed in to your <a className="external" href="https://www.mollie.com/en" target="_blank">Mollie</a> merchant account.
2. In the Codat Portal, click **Companies** in the navigation bar.
3. Hover over your test company, then click **Link URL**. The Onboarding dialog is displayed.
4. Copy the **Link URL** and paste it into a new browser tab. This loads [Link](/auth-flow/overview).
5. Complete the steps in Link; the exact steps depend on your Link settings.

   You’ll need to:

6. Select **Mollie Test** as the commerce software to connect.
   <img src="/img/old/19b0bff-36001_Mollie_-_selection.PNG" />
7. Sign in to your Mollie merchant account if prompted.
8. Authorize access to the requested Mollie data types.
9. The **Connection Successful** page in Link is displayed with the message: "You have connected Mollie Test."
10. Complete the Link flow, then click **Finish**.

## Retrieve commerce data

Make sure that test commerce data from Mollie is pulled successfully into Codat. You can check what test data you have created by enabling the Test Mode toggle in the Mollie Dashboard.

<img src="/img/old/762109c-36001_Mollie_-_test_toggle.PNG" />

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.
2. Click the name of a company to view the company’s data.
4. Click **Data > Commerce**.
5. Use the data ype dropdown to view test data that was pulled from Mollie. For example, click **Customers** or **Transactions**.

:::caution Data not appearing?

Click **Data history > Pull history** to check the progress of the initial sync (if configured in your sync settings). If no data has been pulled, click **Refresh data**.

Data is only available where:
- The data type [is supported](https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=dxfw)
- You've [created test data](#create-some-data-in-mollie)
:::

Now that you have tested the integration and reviewed sample data, you can [create your first live company](/configure/portal/companies#add-a-new-company).

---

## Read next

[Mollie integration reference](/integrations/commerce/mollie/mollie-integration-reference)
