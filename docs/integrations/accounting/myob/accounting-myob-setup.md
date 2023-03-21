---
title: "Set up the MYOB integration"
description: "Explore our API integration with MYOB AccountRight and Essentials."
createdAt: "2019-06-24T13:14:45.915Z"
updatedAt: "2023-01-13T14:17:05.765Z"
---

:::note AccountRight or Essentials?

MYOB have migrated their Essentials API to a new version. The new version will be using the AccountRight API. You can read more about the update on <a href="https://developer.myob.com/api/accountright/v2//" target="_blank">MYOB website</a>.

The new Essentials will use the same API as their AccountRight Live platform. Therefore, you only need to carry out the setup described below once to gain access to both accounting packages.

Some users may still be on the old, non-migrated version of MYOB Essentials that uses a legacy API, which is not supported by Codat. If your customer is unable to connect their non-migrated MYOB Essentials account, please advise them to reach out to MYOB support for guidance on migrating to the new version.
:::

Before you can access accounting data from customers using MYOB AccountRight and Essentials, you need to set up the integration in the Codat Portal.

You will need to:

- Register for a developer account with MYOB.
- Register a new application with MYOB.
- Add your app's secure keys to the Codat Portal.

## Join the MYOB developer program

You should allow a minimum of 72 hours for MYOB to set up your developer account. If you already have a MYOB developer account, you can skip this section.

1. Go to <a className="external" href="https://developer.myob.com/become-a-myob-developer-partner/" target="_blank">MYOB's page for developers</a>.
2. Scroll to the bottom of the page and select **Join the MYOB Developer Program Today**.
3. Complete the **Developer Registration** form. You can use the 'Open Access' (free) tier to create the required app credentials, but if you require a private MYOB sandbox for testing, you may wish to explore one of the paid tiers. Contact MYOB directly for more information on this.
4. To complete your registration, select **Submit**.  
   A confirmation message is displayed.
5. Wait for the MYOB team to create your developer account and send through an email notification.
6. When you receive the email notification from MYOB, open the email and select **Set your password**.
7. Follow the onscreen instructions and then select **Create Password**.

## Register your application

1. Log in to your <a className="external" href="https://my.myob.com.au/pages/login.aspx" target="_blank">MYOB developer account</a>.
2. From the top menu, select **Developer**, and then select **Register App**.  
   The **Application Details** page is displayed.
3. In the **App Name** box, enter a short name for your application. Your customers will see this name during the linking process.
4. In the **Redirect URi** box enter `https://myobaccountright.codat.io/oauth/callback`
5. In the **Website** box, you should put a link to your company's website in the following format: `https://www.[example].com`.
6. In the **Description** box, you should put a short description of what your app will allow your customers to do.
7. Select **Register App**.
8. On the** Developer Dashboard** you will now find your application key and secret. You'll need these for the next stage of the process.

:::caution MYOB Limitation

MYOB will only automatically activate the first two API keys you create. All further API keys will need to be manually activated by the MYOB Support Team prior to use, even if the original keys have been deleted. For more information about it, have a look at the <a href="https://apisupport.myob.com/hc/en-us/articles/360000490416" target="_blank">article </a> in MYOB knowledge base.
:::

## Add your app's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **MYOB AccountRight and Essentials** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from your app in your MYOB developer account.

   - Enter your application key in the **Client Key** box.
   - Enter your application secret in the **Client secret** box.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. The **Enable MYOB AccountRight and Essentials** dialog is displayed. Select whether to enable the integration now or later.

:::note

Make sure that your secure keys don't contain any spaces.
:::

## Enable the MYOB integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **MYOB AccountRight and Essentials** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Linking to MYOB AccountRight Live

When linking, the user will first be asked to select from their available MYOB data files. If an AccountRight data file is chosen, the company will then be asked to enter the username and password of the company data file the company wishes to link. Codat will store these securely and use to sync their data. This username and password is separate to the credentials they use to login to their MYOB account - it is the credentials securing the file itself, similar to Sage 50.

![](/img/old/761a123-myob_link.png "myob link.png")
