---
title: "Set up the Sage 200cloud integration"
slug: "accounting-sage200-setup"
description: "Explore our API integration with Sage 200cloud."
sidebar_label: Setup
---

## About Sage 200cloud

Sage 200cloud is an accounting solution for small to medium-sized businesses. This cloud-based application provides a flexible tool for organizations to manage their stock, financials, sales, purchases, and sales orders.

:::note Supported versions

Codat currently supports Sage 200cloud Standard **only**.
:::

## Set up Sage 200cloud

:::caution Changes in authenticating integrations

Sage has recently modified the way applications and integrations are authenticated in Sage 200 API. You can find out more about the changes in <a href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=201204115644533" target="_blank">Sage 200 API - Guide to Sage ID Changes</a>.

If you're a Codat **customer who already has an account** with Sage, please refer to section [Request new credentials](/integrations/accounting/sage200/accounting-sage200-setup#section-request-new-credentials) below. **Customers who need to set up their Sage accounts** are requested to follow the process described below.
:::

Before you can access data from customers using Sage 200cloud for their accounting, you need to set up a Sage 200cloud integration in the Codat Portal. You'll need to:

- Request an account from Sage and obtain API credentials.
- Wait for Sage to send through your secure keys.
- Retrieve a subscription and signing key from the Sage API site.
- Add your secure keys to the Codat Portal.

## Request an account and obtain API credentials

1. Request an account from Sage by filling out the <a href="https://sage.az1.qualtrics.com/jfe/form/SV_2fRebFy4s4PWLmC" target="_blank">Sage Developer Services API - Request an Account</a> form. Provide the required details and choose _Sage 200 Standard API_ as the application you are developing for.
2. Once your account has been created you will receive an email from Sage with a link to a my.sage.co.uk page, where you can sign in to get your account number under My account > My accounts.
3. Request your API credentials by filling out the <a href="https://sage.az1.qualtrics.com/jfe/form/SV_bQ14AM1zXki0msm" target="_blank">Sage 200 API Credential Request Form</a>.  
   When your API credentials have been generated, Sage will email your Client ID and Secret to you.

_Note_: When submitting the Sage 200 API Credential Request Form:

- Request the maximum expiry time for the refresh token, namely 90 days.
- Request via the form for each environment for which you require credentials.
- For the question 'Desktop or Web Application' select '_Web_'.
- For the question 'Redirect URL(s)' enter: `https://sage200cloud.codat.io/oauth/callback` for Production.

## Retrieve the API subscription and signing keys

Subscribe to the Sage API for Sage 200 Unlimited.

1. Go to the <a className="external" href="https://developer.columbus.sage.com/products/" target="_blank">Sage API page</a>.
2. In the top-right corner, select **Sign in**, and follow the instructions to register your details.  
   When your registration is complete, you're automatically taken to your account profile.
3. Return to the <a href="https://developer.columbus.sage.com/products/" target="_blank">Sage API page</a>.
4. Under Products, choose **Sage 200 Unlimited**. The **Sage 200 Unlimited** page is displayed listing the APIs available for this product and it covers both Sage200 Standard and Sage200 Extra/Professional.
5. Select **Subscribe**.
6. Select the **By subscribing to Sage 200 Unlimited...** checkbox and select **Confirm**.

![](/img/old/dbbec39-sage_subscribe.png "sage subscribe.png")

## Retrieve your signing keys

1. From your profile, in the **Your Signing Keys** section, select **Get Keys**.
2. Select **Show** and then copy the **Primary key** value to a Word document or similar. This is the _signing key_ that you need to set up your integration in the Codat Portal.
3. Close the dialog box to return to your profile details.
4. In the **Your subscriptions** section, again select **Show** and copy the **Primary key** value. This is the _subscription key_ that you also need to set up your Codat integration.

<img src="/img/old/4815330-sage_keyss2.png" />

## Add your secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **Sage200cloud** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** that you received from Sage.

4. Enter your **Subscription key**. This is the value of the **Primary key** from your Sage API subscription.

5. Click **Save**. A confirmation message appears if the settings were saved successfully.

6. The **Enable Sage200cloud** dialog is displayed. Select whether to enable the integration now or later.

:::note
Make sure that your secure keys don't contain any spaces.
:::

## Enable the Sage 200 integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Sage 200cloud** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

Your Sage200 cloud integration is now set up.

## Test your integration

We recommend that you test your integration before sending Link URLs to customers. You'll need your own Sage200cloud account to do this.

:::note Sage200cloud trial accounts

Unfortunately, you can't use a trial account to test your integration. Sage doesn't allow the creation or update of records from their trial accounts.
:::

1. Set up some test data in your Sage200cloud account. For example, some new or amended invoices.
2. Next, go to the Codat Portal where you've enabled your integration and [create a test company](/configure/portal/companies#add-a-new-company).
3. Find the Link URL for your test company. Select **Request data** next to the company name.
4. Use the Link URL to connect your Sage 200cloud account.
   - When Link opens, select **Sage200cloud**, and then select **Continue to Sage 200cloud**.
   - Log in to your Sage 200cloud account.
   - Authorize access to your account details.
5. Make sure that test data from your account is displayed for your test company in the Codat Portal.

## Request new credentials

If you already have a Sage Developer account, you won't need to register an account and can just request credentials. To request credentials:

1. Sign in to your account on <a href="https://sage.co.uk/" target="_blank">My Sage</a> page and go to ‘My Accounts’ where you can find your account number.
2. Fill out the <a href="https://sage.az1.qualtrics.com/jfe/form/SV_bQ14AM1zXki0msm" target="_blank">Sage 200 API Credential Request Form</a> to request new API credentials.
3. Retrieve subscription key by subscribing to the Sage 200 API on the <a href="https://developer.columbus.sage.com/products/" target="_blank">Sage 200 API</a> page for developers.
4. When your API credentials have been generated, Sage will provide Client ID and secret via email.

_Note_: When submitting the Sage 200 API Credential Request Form:

- Request the maximum expiry time for the refresh token, namely 90 days.
- Request via the form for each environment for which you require credentials.
- For the question 'Desktop or Web Application' select '_Web_'.
- For the question 'Redirect URL(s)' enter: `https://sage200cloud.codat.io/oauth/callback`

:::caution Balance sheets in Sage 200's sandbox data

If you link a Codat test company to one of the [Sage sandbox accounts](https://developer.sage.com/api/payments/test-in-sandbox.html#testing), the balance sheet dataset will fail to sync, and shows the status `ValidationError`. This is because the dataset fails Codat's checks, which make sure that a balance sheet balances, that is, net assets are equal to equity.
:::

:::note Tax rates on line items
Due to a Sage 200cloud limitation, tax rates on line items for invoices, credit notes, bills, and bill credit notes appear differently to other integrations. For more information, see [Sage 200cloud limitations](/integrations/accounting/sage200/sage200-limitations).
:::
