---
title: "Set up the Mollie integration"
description: "How to set up Mollie and Mollie integrations."
createdAt: "2022-02-15T14:09:36.746Z"
updatedAt: "2023-01-06T16:39:29.498Z"
---

Set up the Mollie integration to access commerce data from customers who use Mollie to accept payments.

See [Test your Mollie integration](/integrations/commerce/mollie/commerce-mollie-test) for how to use the Test integration to pull sample data into Codat.

## Supported environments

We provide two Mollie integrations:

- **Mollie Test** - pull test commerce data from your Mollie account.
- **Mollie** - pull live commerce data from your Mollie account.

Start with the Test integration, so you can retrieve and check sample data. You can also make sure you're happy with the authorization flow journey before onboarding your customers.

Mollie does not provide any readily available test/sandbox data, so you [need to add sample data to Mollie first](/integrations/commerce/mollie/commerce-mollie-test#create-some-data-in-mollie).

## Set up the integrations

### Create a Mollie app and get your credentials

1. Visit <a className="external" href="https://www.mollie.com/en" target="_blank">Mollie</a> and sign in to your Mollie merchant account.
2. In your Mollie Dashboard, navigate to **Developers > Your apps** to view applications.
3. Click **Create application**.
4. Enter an app name and description.
5. Enter `https://mollie.codat.io/oauth/callback` in the **Redirect URL** box
6. Click **Save**.
7. Return to the **Your apps** page and find the app you just created.
8. Copy the **Client ID** and **Client Secret** for your records.

<img src="/img/old/051e9fd-36001_Mollie_-_client_id.PNG" />

### Enable the integrations

Now you've create a Mollie app, you can add the secure credentials to the corresponding Mollie integration in the Codat Portal.

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. In the navigation bar, select **Settings > Integrations > Commerce**.
2. Select the correct integration depending on whether you're testing the integration or building for production.

   - If you want to test the integration and pull sample data, click **Set up** next to the **Mollie Test** integration.
   - If you want to build for production and pull live data, click **Set up** next to the **Mollie** integration.

   The **Integration settings** page is displayed.

3. Under **Access to company data**, configure the permitted sync frequency for the integration. Select **Allow one-off data sync…** or **Allow continuous data sync**.
4. Enter the **Client Id** for your Mollie app in the **Client Id** box.
5. Enter the **Client Secret** for your Mollie app in the **Client Secret** box.
6. Click **Save**.

The integration should now be configured and enabled.

### Set up your commerce data type settings

All commerce data types must be enabled before you can pull commerce transactions from Mollie into Codat.

Follow the steps in [Update commerce sync settings in the Codat Portal](/integrations/commerce/commerce-sync-settings#update-commerce-sync-settings-in-the-codat-portal). You only need to do this once.

---

## Read next

[Test your Mollie integration](/integrations/commerce/mollie/commerce-mollie-test)

