---
title: "Set up the Dynamics 365 Business Central integration"
slug: "accounting-dynamics365businesscentral-setup"
description: "Explore our API integration with Dynamics 365 Business Central."
metadata:
  description: "Access data from customers using Dynamics 365 Business Central for their accounting."
createdAt: "2020-08-03T10:24:23.098Z"
updatedAt: "2023-01-10T17:32:19.524Z"
---

Before you can access data from customers who use Dynamics 365 Business Central, you need to set up the integration in the Codat Portal. You'll need to:

- Register and configure your Business Central application and then generate your client ID
- Generate your client secret
- Update access permissions
- Add your secure keys to the Codat Portal
- Enable the Dynamics 365 Business Central integration in the Codat Portal

We recommend you [test your integration](/test-your-dynamics-365-business-central-integration) using a trial Business Central account before production use.

:::caution The Dynamics 365 Business Central extension must be installed

During the SMB linking process, the Dynamics 365 Business Central extension package _must_ be successfully installed to the user's account in order for the integration to function. The extension is published by Codat.

For more information, see [Extension installation process](/integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral-setup#extension-installation-process) below.
:::

## Register your application

Register your Business Central application on the Microsoft Azure portal.

1. Sign in to the <a className="external" href="https://portal.azure.com" target="_blank">Microsoft Azure portal</a>.

   - If you already have a Dynamics 365 Business Central account, use those account details to sign in. If not, you can <a className="external" href="https://signup.microsoft.com/signup?sku=6a4a1628-9b9a-424d-bed5-4118f0ede3fd&ru=https%3A%2F%2Fbusinesscentral.dynamics.com" target="_blank">create an account</a>.

   - To gain access to any Azure configuration that your company has already set up—for example, for user authentication—enter your company email when you sign up.

   - If your organization is using Azure Active Directory (Azure AD) to control access to Dynamics 365 Business Central, ask your Azure AD administrator to add your account to the correct group.
     :::caution Unable to create account
     > Contact your Business Central administrator if you can't create a new Business Central account. They might have disabled this feature.

2. After you've signed in, select **Azure Active Directory** on the home page or left menu.

   Details of the <a className="external" href="https://docs.microsoft.com/en-us/office365/enterprise/subscriptions-licenses-accounts-and-tenants-for-microsoft-cloud-offerings#tenants" target="_blank">tenant</a> that your account is connected to are displayed.

3. You might have access to more than one tenant, so check the details carefully. If you don't see the expected information, select **Switch tenant**, then select the right tenant.

   ![Image](/img/old/da8746b-d365-Switch_tenants.png)

4. Select **App registrations** in the left menu, then click **New registration**.

   ![Image](/img/old/7484936-d365-App_registrations.png)

5. Enter the following details:

   - **Name**: Enter a short name for your application. Your customers will see this name when they authorize your connection to their accounting system.

   - **Supported account types**: Select **Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)**. This allows Codat to access data in Dynamics 365 Business Central.

   - **Redirect URI**: Select **Web**, then enter the following URL: `<https://dynamics365businesscentral.codat.io/oauth/callback`>

6. Select **Register**.

   Azure registers your application details and generates your client ID as shown the screenshot below. You'll need this later, so either copy the details now or keep the page open in a separate browser tab.

   > ❗ Copy your client ID
   >
   > Your client ID won't be shown again after you close the page.

   ![Image](/img/old/93e97bf-d365-Application_id.png)

## Generate and retrieve your client secret

In the Azure Portal:

1. Select **Certificates & secrets** in the left menu.

2. Under **Client secrets**, click **New client secret**.

3. In the **Add a client secret** dialog, update the following information:

   - **Description**: Enter a short description for your client secret to make it easier to find.
   - **Expires**: Select the most appropriate option that complies with your company's security policy.

4. Click **Add**.

   Your client secret is generated and displayed at the bottom of the page. **Important: The _Secret Value_ won't be displayed again in full, so you must copy the value now.**

   ![image](/img/old/a5f66c9-D365.png)

## Update access permissions

Now update the access permissions for your application. These control the data that your app can access in Business Central.

1. Select **API permissions** in the left menu.

2. Under **Configured permissions**, click **Add a permission**.

3. In the **Request API permissions** pane, scroll down and select **Dynamics 365 Business Central**.

4. Select **Delegated permissions** and also select the first two listed permissions:

   - **user_impersonation**
   - **Financials.ReadWrite.All**

   ![image](/img/old/7cdb0c4-d365-delegated_permissions.png)

5. Click **Add permissions**.

6. Above the listed permissions, select **Grant admin consent for Default Directory** and then select **Yes** to confirm your change. This option might not be available for all subscription types.

Your Dynamics 365 Business Central application setup is complete.

## Add your App's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **Dynamics 365 Business Central** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from the Azure Portal.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. The **Enable Dynamics 365 Business Central** dialog is displayed. Select whether to enable the integration now or later.

## Enable the Dynamics 365 Business Central integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Dynamics 365 Business Central** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

Your Dynamics 365 Business Central integration is now set up.

## Extension installation process

Before you link their accounts, we recommend you inform your customers about the installation and linking process for the _Dynamics 365 Business Central extension_.

During the linking process, Codat installs a Dynamics 365 Business Central extension into the customer's Business Central environment. This extension has the following attributes:

- **Description/Publisher**: Codat
- **Name**: App Link

The extension might take 10–20 minutes to install and the installation page might refresh repeatedly while the installation is in progress. A message displays when the extension has been successfully installed.

Be aware that fetch errors might occur during the installation.

If the latest version of the extension is uninstalled or unpublished, Codat is unable to retrieve all the required data from the accounting platform.
