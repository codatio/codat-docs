---
title: "Set up your Plaid integration"
description: "Learn how to set up our Plaid integration, customize the Link journey, and enable production access"
sidebar_label: Setup
---

Before you can access your SMB customers' banking data from Plaid in Codat, you need to set up your integration.

You'll need to:

- Create your Plaid account, and test with the sandbox environment.
- Request access to the Plaid production environment and get your secure credentials.
- Request access to the Codat Portal.
- Add your secure credentials to the Codat Portal.
- Enable your Plaid integration.

:::note Plaid account details

- If you already have a Plaid account, have your account details to hand.

- If you don't, <a href="https://dashboard.plaid.com/signup" target="_blank">create an account</a> before you start the setup process.

:::

## Configure your Plaid application

1. Go to [Plaid's Website](https://plaid.com), choose "Get API Keys", and log in if required.
2. On the welcome page, select **Team Settings > API** from the top menu bar
3. On the "Allowed redirect URIs", choose the configure option. You will need to enter `https://plaid.codat.io/oauth/callback`. You may be prompted for your password when you save.
4. On the left hand menu select the **Keys** page.
5. Make a note of your Sandbox and Development Keys, and your Client ID.

## Add your secure credentials to the Codat Portal

1. Sign in to the <a href="https://app.codat.io/signin" target="_blank">Codat Portal</a>.

2. On the navigation bar, select **Settings > Integrations > Banking**.

3. Click **Set up** on the **Plaid** tile.  
   The **Integration settings** page for Plaid is displayed.

4. Locate the secure keys that you retrieved earlier and enter the following values:

   - **client_id** value into **Client ID**.
   - **Sandbox** secret value into **Sandbox secret**.
   - **Development** secret value into **Development secret**.

5. From the **Environment** list, select **Sandbox**.

6. Enter country codes for the countries that you operate in, and want to allow your customers to link from. This filters the list of banks in the Link authorization flow to only banks in the selected countries, which might improve your conversion rate. Enter a comma-separated list of one or more of the following codes:

   ```
   US,CA,ES,FR,GB,IE,NL
   ```

   If no country codes are entered then all the above country codes are used by default. In the Plaid Sandbox and Development environments the default values are also `US,CA,ES,FR,GB,IE,NL`.

7. Select how you want to access company data, and whether you want to continuously sync data or only perform a one-off data sync when the company authorizes their connection.

8. Click **Save**.

9. Return to **Settings > Integrations > Banking**.

10. **Plaid** should now be enabled. You can click the toggle next to **Plaid** to toggle the integration between **Enabled** and **Disabled**.

## Customize the Plaid Link journey (optional)

Plaid allows you to customise the look, feel and content of the link site that customers see when they authorize your connection to their banking data. This is the customer journey you'll follow during testing.

1. Still on the Plaid website, from the top menu, select **Customize**.  
   A new page is displayed with the options for the link site that you can customise in the left pane. On the right, there's a preview pane where you can see the immediate effect of any changes you've made before you publish them. See [Plaid link customization](https://support.plaid.com/hc/en-us/articles/360008420353-Plaid-Link-customization) for descriptions of what each option does.
2. To update an option you're interested in, select it in the left pane.  
   The customisable elements are displayed so that you can update them. Any changes you make are immediately displayed in the preview pane.
3. When you're happy with your changes, select **Publish changes**, and then at the top of the left pane, select **GO BACK >** to return to the main options menu.
4. Continue until you're happy with your updates.

## Enable production access

When you are ready to connect to live data, you will need to request access from Plaid.

1. Go to <a href="https://dashboard.plaid.com" target="_blank">https://dashboard.plaid.com</a> and log in.
2. Select **Migrate to Production** and follow the process to request access to the Plaid production environment, and to get your secure credentials.
3. Once you have your Production Secret, enter it in the box for the Production Secret within the Plaid configuration page in the Codat Portal.
4. Please note that the Country Codes default value in Plaid's Production environment is the following: `US,CA`.
