---
title: "FreshBooks"
description: "Learn about our FreshBooks integration."
sidebar_label: Overview
---

You can synchronize accounting data with <a className="external" href="https://www.freshbooks.com/" target="_blank">FreshBooks</a> using our FreshBooks integration.

## Data type coverage

View the coverage of our FreshBooks integration in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-integration&integrationKey=vxvy" target="_blank">Data coverage explorer</a>.

## Supported versions

FreshBooks Classic organizations are not supported. FreshBooks Classic is a legacy version of FreshBooks and uses a different API.

## Set up the integration

Before you can access data from your customers who use FreshBooks for their accounting, you need to set up the FreshBooks integration.

You'll need to:

- Create a FreshBooks application.
- Add the application's secure keys to the Codat Portal.

### Create a FreshBooks application

Create and configure an application in the FreshBooks Developer Portal.

1. Log in to <a className="external" href="https://www.freshbooks.com" target="_blank">freshbooks.com</a>.

   If you don't already have an account, you can create one by clicking **Try it Free**.

2. On the Dashboard, click the cog icon and then select **Developer Portal**.

   The <a className="external" href="https://my.freshbooks.com/#/developer" target="_blank">Apps</a> page in the Developer Portal is displayed.

3. Click **Create New App**.

4. Enter the following information into the boxes on the **Create Application** page:

   - **Application Name**: Enter a name for your application. This is displayed to your users when they authorize your access to their accounting data, so choose a name that clearly identifies your organization.

   - **Application Type**: Select **Private App**.

   - **Scopes**: Add the scopes listed in [FreshBooks application scopes](/integrations/accounting/freshbooks/accounting-freshbooks-setup#freshbooks-application-scopes) on this page.

   - **Redirect URIs**: Enter `https://freshbooks.codat.io/oauth/callback` then click the check mark icon to save the URI.

5. Click **Save** to create your app.

6. Select your new app from the **All Apps** list. Locate the app's **Client ID** and **Client Secret** at the bottom of the page.

<img src="/img/old/a044a46-Freshbooks-keys.png" />

### FreshBooks application scopes

The following table lists the recommended scopes to set for your FreshBooks application.

These are the minimum scopes needed to allow _read_ (pull) access to the FreshBooks objects that are supported by Codat. If you want to _push_ data to FreshBooks, also select the corresponding _write_ scopes for the objects you need to push. If the scopes you require change in future, all connected companies will need to reauthenticate with your app.

||||
|----|----|----|
|user:profile:read, user:bills:read, user:bill_payments:read, user:business:read, user:bill_vendors:read, user:clients:read  user:credit_notes:read|user:estimates:read, user:expenses:read, user:journal_entries:read, user:online_payments:read, user:payments:read, user:projects:read, user:retainers:read|user:taxes:read, user:billable_items:read, user:invoices:read, user:other_income:read, user:reports:read, user:teams:read|

### Add your app's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **FreshBooks** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from your app in the FreshBooks Developer Portal.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. The **Enable FreshBooks** dialog is displayed. Select whether to enable the integration now or later.

:::note

Make sure that your secure keys don't contain any spaces.
:::

### Enable the FreshBooks integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **FreshBooks** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.
