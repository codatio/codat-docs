---
title: "Set up the BigCommerce integration"
description: "Explore our API integration with BigCommerce"
createdAt: "2022-07-18T14:10:03.840Z"
updatedAt: "2023-01-06T16:31:30.675Z"
---

Set up the [BigCommerce](/commerce-bigcommerce) integration to retrieve commerce data from your SMB customers who sell their products on the BigCommerce platform.

With this integration, your SMB customers (merchants who sell on the BigCommerce platform) must retrieve secure credentials from their BigCommerce store and then enter them in Link as part of the authorization flow.

:::Caution Test the integration first

Before sending Link URLs to your SMB customers, we recommend that you [test the integration](/commerce-bigcommerce-test) using sample data from a sandbox store.
:::

Here are the tasks involved in setting up the integration:

**You perform these tasks:**

1. [Enable the BigCommerce integration](/commerce-bigcommerce-setup#enable-the-bigcommerce-integration) in the Codat Portal.
2. [Create a company in Codat and share the Link URL with your SMB customers](/commerce-bigcommerce-setup#create-a-company-and-share-the-link-url).

**Your SMB customers perform this task:**

1. Use Link to [authorize Codat to access their commerce data](/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-their-commerce-data).

## Required OAuth scopes

To use our BigCommerce integration, the following OAuth scopes must be set with the `read-only` permission:

| UI name                | Scope parameter                 |
| ---------------------- | ------------------------------- |
| Orders                 | store_v2_orders_read_only       |
| Order Transactions     | store_v2_transactions_read_only |
| Products               | store_v2_products_read_only     |
| Information & Settings | store_v2_information_read_only  |
| Customers              | store_v2_customers_read_only    |

If a merchant doesn't have these scopes set, they'll need to create a new store API account and enter their new store credentials in Link (see [SMB customer: Authenticate and connect your commerce data](/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data)).

Note that Codat can't determine which scopes are set or unset for a particular merchant.

## Enable the BigCommerce integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **BigCommerce** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Create a company and share the Link URL

Create a company to represent your SMB customer. Provide the Link URL to the customer to allow them to connect their BigCommerce store to Codat using Link.

:::Note Options for authorization

Using Link to authorize the data connection is optional. You can also build your own authorization flow using the Codat API.
:::

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
2. In the **Add new company** dialog, enter a name for the company, then click **Add**. The Link URL is displayed in the dialog.
3. Provide the Link URL to your SMB customer.

## SMB customer: Authenticate and connect your commerce data

In Link, your SMB customer connects their BigCommerce store to Codat. To authorize a data connection Codat, they create a _store API account_, obtain the store credentials, and then enter them in Link.

For more details about steps 4–7 of this procedure, see <a className="external" href="https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US#creating" target="_blank">Creating an API Account</a> in the BigCommerce Help Center.

Your SMB customer does the following:

1. Open the Link URL in your browser.

2. On the Commerce step in the Link site, select the **BigCommerce** tile, then click **Next**.

   ![BigCommerce Link flow](/img/old/55ada94-link-select-bigcommerce-tile.png "On the Commerce step in Link, select the BigCommerce tile.")

3. Review the requested permissions on the **Connect to BigCommerce** step, then click **Next**.  
    The **Your BigCommerce Credentials** page is displayed. Leave this page open in your browser.

   ![Your BigCommerce credentials](/img/old/fecc242-your-big-commerce-credentials-border.png "Your BigCommerce credentials dialog with fields to enter your store credentials.")

4. In a new browser tab, go to <a className="external" href="https://www.bigcommerce.com/" target="_blank">www.bigcommerce.com</a> and sign in to your dashboard.

5. In the side panel, click **Settings**.

6. Click **API accounts > Create API account**.

7. On the **Create account** page, enter the following details:

   - Leave the **Token type** as **V2/V3 API token**.
   - Enter the name of your organization in the **Name** box.
   - Set the [required OAuth scopes](/commerce-bigcommerce-setup#required-oauth-scopes).
   - Click **Save**.  
     The **BigCommerce API credentials** dialog is displayed and a text file containing your store API account credentials is downloaded to your computer.

   ![BigCommerce API credentials](/img/old/0c78323-bigcommerce-api-credentials-dialog-masked-border.png "The BigCommerce API credentials dialog showing the Client ID, Client secret, and Access token fields.")

8. Open the downloaded text file to view the store API account credentials.

9. Copy and paste the values from the text file into the corresponding boxes on the **Your BigCommerce Credentials** page (see step three). The following values are required:

   - **Client ID**
   - **Client Secret**
   - **Access Token**
   - **API Path**

10. Click **Continue**.

11. If the data connection was successful, click **Finish** to close Link. You have now connected your BigCommerce store to Codat.

:::Caution Keep your store API account credentials safe

You can't access your store API account credentials (Client ID, Client Secret, Access Token, and API Path) again after you close the **BigCommerce API credentials** dialog. Make sure you store the downloaded text file containing these credentials in a secure location.

If you lose your store API account credentials, you'll need to create a new store API account and re-link your store.
:::
