---
title: "Set up the QuickBooks Online integration"
description: "Explore our API integration with QuickBooks Online."
sidebar_label: Setup
---

Video walkthrough:

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/szC072mS1ks"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>

<hr/>

Before you can access data from customers who use QuickBooks Online for their accounting, you need to set up the QuickBooks Online integration.

You'll need to:

1. Create an app in the [Intuit Developer Portal](https://developer.intuit.com/).
2. Before production use, you need to enter some details about your app and complete the _App Assessment Questionnaire_ provided by Intuit. For help, see our [guide to the QBO assessment questionnaire](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire).
3. Intuit reviews your questionnaire to ensure your app meets their platform requirements.
4. If your app is approved, you can access its production keys for use with the production integration.
5. Add your app's secure keys to the Codat Portal.

:::caution App keys

Your app development keys and production keys are not interchangeable. Development keys do _not_ work with live QuickBooks Online accounts.
:::

Before you begin, make sure you understand the different [QuickBooks Online environments](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#quickbooks-online-environments).

## QuickBooks Online environments

QuickBooks Online provides two separate environments:

- A **sandbox company** containing sample data for development and testing purposes. You automatically get one when you create a QBO developer account. See <a className="external" href="https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes" target="_blank">Create and test with a sandbox company</a> in the Intuit developer documentation, or navigate to your profile, then **Sandbox**, in the [Intuit Developer Portal](https://developer.intuit.com/).
- A **live QuickBooks account** (including free trials).

Sandbox companies can only connect to a QuickBooks Online app using the app's development keys. Live accounts can only connect to a QuickBooks Online app using the app's production keys.

To support these environments, you'll find two separate integrations in the Codat Portal:

- **QuickBooks Online Sandbox**: for development and testing.
- **QuickBooks Online**: for production use.

This page explains how to configure both integrations.

## Create a QuickBooks Online app configured for sandbox

In the Intuit Developer Portal, create and register a QuickBooks Online app and then configure it for use with the QuickBooks Online Sandbox integration.

1. Sign in to the <a href="https://developer.intuit.com/" target="_blank">Intuit Developer Portal</a>.

   You can use your existing QuickBooks Online credentials to create a new Intuit Developer account.

2. Select **Dashboard** from the top menu to view the **My Apps Dashboard** page.

3. Click **Create an app**.

4. Select the **QuickBooks Online and Payments** option.

5. Provide the following information on the **Give your app a name** page:

   1. Enter a name for your app.
   2. Select the **com.intuit.quickbooks.accounting** scope.
   3. Click **Create app**.

   Your app is created and the **Develop your app** page is displayed.

6. In the left menu, select **Keys & credentials** under **Development Settings** to view the **Keys & OAuth** page.

7. Under **Redirect URIs**, click **Add URI** to add a new row to the table. Then, enter the redirect URI for the QuickBooks Online Sandbox integration:

   ```http
   https://quickbooksonlinesandbox.codat.io/oauth2/callback
   ```

   ![Enter the Redirect URI for the Codat QuickBooks Online Sandbox integration.](/img/old/2fbd2a6-intuit-developer_enter-sandbox-redirect-uri.png)

8. Click **Save**.

You can find your app's development keys — the **Client ID** and **Client Secret** — in the **Keys** section at the top of the **Keys & OAuth** page.

### Next steps

Next, add your app's development keys to the **QuickBooks Online Sandbox** integration, as described in [Add your app's secure keys to the Codat Portal](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#add-your-apps-secure-keys-to-the-codat-portal).

Alternatively, you can get your app's production keys as explained in the next procedure.

## Get production keys and configure app for production

Before you can access your app's production keys, you must complete the requirements described in this procedure. You can reuse the app you created earlier.

When the production keys are available, configure the app for use with the production integration.

Make sure you've [created a QuickBooks Online app configured for sandbox](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox) first.

In the <a className="external" href="https://developer.intuit.com/" target="_blank">Intuit Developer Portal</a>:

1. In the left menu, select **Keys & credentials** under **Production Settings**.

   The **Get your app's production keys** page is displayed.

2. Next, you need to provide all the information requested in the **Add details about your app** checklist:

<img src="/img/old/904ecc7-qbo-production-keys-app-assessment-questionnaire-link.png" />

:::note Help with the app details checklist

You'll need to provide the following information:

- **Host domain:** URL of the domain host of your website or app.
- **Launch URL:** Initial URL for your app's authorization flow. If using no-code Link, provide the generic Link URL, which you can access in the Codat Portal.
- **Disconnect URL:** Link to the process for deauthorizing your app's access to QuickBooks Online. You can provide the URL of the [Disconnect a data source from a company](/platform-api#/operations/unlink-connection) endpoint. If you don't have a disconnect URL, provide a link to your website or app instead.

For app hosting details, see <a className="external" href="https://codat.zendesk.com/hc/en-gb/articles/4463989520669-QBO-app-hosting" target="_blank">QBO app hosting</a> in the Codat Support Portal.
:::

3. Click **Go to the app assessment questionnaire** to open the questionnaire. See [Complete the App Assessment Questionnaire](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#completing-the-app-assessment-questionnaire) below for guidance on answering the questionnaire.

4. When you've completed all the requirements and your questionnaire responses have been approved by Intuit, the page updates to display the production keys for your app (the Client ID and Client Secret) on the **Keys & OAuth** page.

5. Provide the following information on the **Keys & OAuth** page (accessed by selecting **Production Settings > Keys & credentials**):

   1. Under **Redirect URIs**, click **Add URI** to add a new row to the table.
   2. In the new row, enter the redirect URI for the QuickBooks Online (production) integration:

   ```http
   https://quickbooksonline.codat.io/oauth2/callback
   ```

6. Click **Save**.

When you've provided all the requested information, your app's production keys—the Client ID and Client Secret—are made available on the **Keys & OAuth** page. To find the keys, select **Keys & credentials** under **Production Settings**:

![](/img/old/853c0d4-intuit-developer-portal_select-production-keys-left-nav.png)

### Next steps

Next, add your production keys to the **QuickBooks Online integration**, as described in [Add your secure keys to Codat](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#add-your-secure-keys-to-codat), below.

## Completing the App Assessment Questionnaire

Before you can access your app's production keys, you must complete an _App Assessment Questionnaire_. Intuit will review your answers to make sure your app meets their <a className="external" href="https://developer.intuit.com/app/developer/qbo/docs/go-live/publish-app/platform-requirements" target="_blank">publishing requirements and guidelines</a>.

As a Codat client, you will be linked to a shortened version of the App Assessment Questionnaire. This happens automatically provided you have set the sandbox environment redirect URI to `https://quickbooksonlinesandbox.codat.io/oauth2/callback` according to [our instructions](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox). 

Existing users should have received an email from Intuit with a link to the questionnaire. For recommended answers to the questions pertaining to Codat, see <a className="external" href="https://codat.zendesk.com/hc/en-gb/articles/4450200789661" target="_blank">QBO App Assessment Questionnaire</a> in the Codat Support Portal.

To access the questionnaire from the Intuit Developer Portal:

1. Select **Dashboard** from the top navigation bar.
2. Select **Production Settings**.
3. Click **Go to the app assessment questionnaire** at the bottom of the page.
4. Enter your answers then submit the questionnaire to Intuit.

## Add your app's secure keys to the Codat Portal

After you've created and configured a QuickBooks Online app, add the app's development or production keys to the corresponding integration (either sandbox or production) in the Codat Portal. When you're ready, enable the integration.

1.  In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.
2.  Locate **QuickBooks Online Sandbox** or **QuickBooks Online**, then click **Set up**.
3.  Under **Integration settings**, enter the **Client ID** and **Client secret** from your QuickBooks Online app.
    - If you configured your app for the sandbox integration, enter your app's development keys.
    - If you configured your app for the production integration, enter your app's production keys.
4.  Click **Save**. A confirmation message appears if the settings were saved successfully.
5.  The **Enable QuickBooks Online Sandbox** or **Enable QuickBooks Online** dialog is displayed. Select whether to enable the integration now or later.

:::note
Make sure that your secure keys don't contain any spaces.
:::

## Enable the QuickBooks Online integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **QuickBooks Online** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.
