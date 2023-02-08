---
title: "Set up your Basiq integration"
description: "Explore our API integration with Basiq"
createdAt: "2022-10-06T08:47:25.661Z"
updatedAt: "2022-12-16T17:20:39.560Z"
---

Before you can access your SMB customers' banking data from Basiq in Codat, you need to set up your integration.

You'll need to:

- Create your Basiq account
- Create your Basiq API key and enable your integration in Codat
- Check banking data type settings

## Register with Basiq and set up your account

1. On the <a href="https://basiq.io" class="external" target="_blank">Basiq website</a> click on "Get Started" in the top right, and complete the registration form.
2. Once you have verified your email address, and are able to login you will need to create a Permission Set.  
   Go to "Dashboard" -> "Settings" -> "Permission Sets" and click to create a New Permission Set
3. Give your permission set a name, and select to enable all the options under "Enrich", "Institutions", "Jobs", "Accounts", "Connections", "Transactions", "Users", "Config" & "Policies". Make sure to scroll to the bottom and save your changes.
4. Next, you can customize the UI that Basiq will show to your users when they connect. From the left hand menu go to the "Customize UI" section. On the right hand screen, you _must_ enter the redirect URL of `http://basiq.codat.io/oauth/callback` as shown below. You can customize the rest of the options in any way you choose.

![](/img/old/5196747-Basiq_oauth_screenshot.png "Basiq oauth screenshot.png")

## Create your API key and enable your integration in Codat

1. Next, you will need to create an API key. On the Basiq dashboard, from the left hand menu bar, choose the "API Keys" tab and click to create a new API Key. You will need to name your key, and choose the permissions set that you created in step (3) above.

:::note Keep your API Key Safe

Once your Basiq API key is generated, it is only displayed once! Keep the key safe, and make sure you have it available to copy into the Codat portal later!
:::

2. Next, in the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, go to **Settings > Integrations > Banking** and then select **Basiq**.
3. Paste in your API key that you generated above, and make sure to toggle the integration to enabled.
4. Click **Save**.

## Check banking data type settings

To view test data from linked bank accounts, configure your data type settings in the Codat Portal.

1. On the navigation bar, select **Settings > Integrations > Data types**.
2. Tick **Fetch on first link** for the following banking data types:
   - Banking - Account Balances
   - Banking - Accounts
   - Banking - Transaction Categories
   - Banking - Transactions
3. Select **Save Changes** to update your data type settings.
