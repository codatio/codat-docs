---
title: "Set up the FreeAgent integration"
description: "Explore our API integration with FreeAgent."
createdAt: "2019-04-01T10:30:01.800Z"
updatedAt: "2023-01-10T17:38:35.904Z"
---

:::caution FreeAgent Sandbox not supported

Codat's integration does not support linking to the FreeAgent sandbox.
:::

Before you can access data from customers using FreeAgent for their accounting, you need to set up the FreeAgent integration in the Codat Portal. You'll need to:

- Register a new application on FreeAgent’s developer site.
- Retrieve your application's secure keys.
- Add your secure keys in the Codat Portal.

## Create a FreeAgent application and get your credentials

Create an application in FreeAgent and then retrieve the secure application credentials to use in Codat.

1. Visit the <a className="external" href="https://dev.freeagent.com" target="_blank">FreeAgent developer site</a> and sign in to your FreeAgent developer account.

2. In the navigation bar, click **My Apps**, then click **Create New App**.

3. Enter an app name and description.

4. Enter the following URL in the **OAuth Redirect URIs** box: `https://freeagent.codat.io/oauth/callback`

   You don't need to select the **Enable Accountancy Practice API** box.

<img src="https://files.readme.io/948044e-FreeAgent_-_app_creation.PNG" />

5. Select **Create App**.

   The **OAuth identifier** and **OAuth secret** for this app are displayed. Copy these credentials to use in the next procedure.

<img src="https://files.readme.io/d71284b-FreeAgent_-_app_credentials.PNG" />

## Add your app's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **FreeAgent** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from the FreeAgent developer site.

   - In the **Client ID** box, enter the **OAuth identifier** for your FreeAgent app.
   - In the **Client Secret** box, enter the **OAuth secret** for your FreeAgent app.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. In the **Enable FreeAgent** dialog, select whether to enable the integration now or later.

:::note

Make sure that your secure keys don't contain any spaces.
:::

## Enable the FreeAgent integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **FreeAgent** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Linking to FreeAgent

When linking your FreeAgent application to Codat, you will be asked to approve the app's request to access your FreeAgent account data. Ensure to approve this request to link the application successfully.

For help with FreeAgent applications, refer to <a className="external" href="https://dev.freeagent.com/docs/quick_start" target="_blank">FreeAgent Quick Start</a> in the FreeAgent documentation.
