---
title: "Set up the Exact Online integration"
description: "Explore our API integration with Exact Online (NL and UK)."
createdAt: "2019-10-22T16:31:29.733Z"
updatedAt: "2023-01-10T17:38:51.316Z"
---

## Credentials for Exact Online NL and Exact Online UK

Exact Netherlands and Exact UK require different credentials. This article is intended for both versions and states where instructions are version specific or can be used for both.

:::caution API rate limits

The Exact Online API has rate limits to restrict the number of requests an app is permitted to send to the API during a time window, as well as other rate limits. Each rate limit has a specific behavior when exceeded – for more details, see [API limits](https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-Simulation-gen-apilimits) in the Exact knowledge base.

Here's a summary of the time-based rate limits:

- Minutely limit: an app can make 60 API calls, per company, per minute.
- Daily limit: an app can make 5,000 API calls, per company, per day.

:::

:::caution Request permission for your customers to link

To allow your customers to connect to your production app, you _must_ first [request permission from Exact](/accounting-exact-setup#section-request-permission-to-allow-your-customers-to-connect-to-your-app), or users will get an error during the authorization flow.
:::

Before you can access data from customers using Exact for their accounting, you need to set up an Exact integration in the Codat Portal. You'll need to:

- Register a new application on Exact’s developer site.
- Add your secure keys to the Codat Portal.
- Request permissions for other users to access your app.

## Registering a new application on Exact's developer site

1. Ensure you have an Exact App Center account by becoming an App Center partner. If you haven't already done this, visit one of the following sites:
   - <a
       href="https://start.exactonline.co.uk/docs/HRMSubTrialNew.aspx?bcaction=0&type=10&language=EN&UseSimpleWizard=1&PackageSetCode=APPCENTER"
       target="_blank"
     >
       Exact Online App Center subscription
     </a>
     for the Exact UK integration, or
   - <a href="https://www.exact.com/nl/developers" target="_blank">
       https://www.exact.com/nl/developers
     </a> for the Exact NL integration, and select the 'Exact Online partners' link
     towards the bottom of the page
2. Sign in to the Exact developer site at:
   - <a href="https://apps.exactonline.com/gb/" target="_blank">
       https://apps.exactonline.com/gb/
     </a> for the Exact UK integration
   - <a href="https://apps.exactonline.com/nl/" target="_blank">
       https://apps.exactonline.com/nl/
     </a> for the Exact NL integration
3. Select **Manage my apps** from the top navigation bar.
4. Depending on the purpose of your app, select either **Register a product app** or **Register a testing app** under the corresponding section.
5. Add the details in the **Register a testing app** dialog.
   - The **App name** will be displayed to users while they link their accounts; make sure it clearly identifies your organization.
   - The **Redirect URL** must be as follows, for both production and testing apps: `https://exact.codat.io/oauth/callback`
6. Accept the terms and conditions then click **Register**.

<img src="https://files.readme.io/0e788f0-exact-app-details-dialog.png" />

The **Manage my apps** page is displayed. In the **Develop your app** tab, you'll see the **Client ID** and **Client secret** for your app. To find this page again, go to **Manage my apps** then select the app you created.

![](https://files.readme.io/bb55b4c-ExactRegisterAPIKey.png "ExactRegisterAPIKey.png")

## Add your app's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **Exact (Netherlands)** or **Exact (UK)** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from the Exact App centre.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. In the **Enable Exact** dialog, select whether to enable the integration now or later.

:::note

Make sure that your secure keys don't contain any spaces.
:::

## Enable the Exact Online integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Exact (UK)** or **Exact (Netherlands)** and click the toggle to enable the relevant integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Request permission to allow your customers to connect to your app

For your production app, you must request permission from Exact to allow your users to connect to your app. For more information, see <a href="https://support.exactonline.com/community/s/knowledge-base#All-All-DNO-ReleaseNote-1811-rn-appcenter-reqperm" target="_blank">App publication procedure</a> in the Exact knowledge base.

Follow these steps:

1. In the Exact App Center, select **Manage my apps** then click the **Submit for review** tab.
2. In the **Data & Security Review** section, click **Edit**.
3. In the **Purpose of your app** box, briefly describe what your app is for.
4. In the **Scopes** section, select the scopes shown in the table in [Recommended list of scopes](/accounting-exact-setup#recommended-list-of-scopes). Then, go to step 5.
5. Enter the rest of the information from the perspective of your company, not Codat, but with a few exceptions for the following questions:

- **Q:** **Is the data that you receive, process, or store in your app or linked systems protected against unauthorized access or disclosure, such as through encryption?** A: In the answer you may want to include that for the 3rd party integration (Codat) data is encrypted in transit using SSL and at rest using AES-256 managed by Microsoft Azure.
- **Q:** **Do you have a change management process in place which ensures that all changes to the app or service are authorized and tested before being released?** A: In the answer you may want to include that the 3rd party integration (Codat) also has it's own change management process including automated integration tests, developer testing, a QA function as part of it's continuous delivery practice utilising Microsoft Dev Ops - also enabling immediate rollback of any broken functionality.
- **Q:** **Do you have a version control system in place to manage the change history, branching, merging, and traceability of changes to the app or service?** A: In the answer you may want to include that the 3rd party integration (Codat) manages it's version control via Azure DevOps and various source control platforms.

6. Once saved, select **Submit** at the top of the page.
7. Once your **Data & Security Review** has been successful, in the **Submit for Review** page, select **Request** in the **Request permission** section and wait for permissions to be granted by Exact. During this stage your app will have an **In Review** tag.

![](https://files.readme.io/9fa3fdd-AppInReview.PNG "AppInReview.PNG")

## Recommended list of scopes

On the **Data & Security Review** page in the Exact App Center, you need to select the _scopes_ for your app. Scopes define the access level – either **None**, **Read**, or **Manage** – that your app requires to each Exact resource.

To support a wide range of use cases, we recommend that you select the scopes shown in the following table.

:::note

If you experience issues with your app after enabling the recommended scopes, please contact Codat Support.
:::

| Resource         | Access level |
| :--------------- | :----------- |
| **Crm**          |              |
| accounts         | Manage       |
| **Sales**        |              |
| orders           | Manage       |
| invoices         | Manage       |
| **Purchase**     |              |
| orders           | Manage       |
| invoices         | Manage       |
| **Logistics**    |              |
| items            | Manage       |
| **Financial**    |              |
| generalledgers   | Read         |
| accounting       | Read         |
| receivables      | Read         |
| payables         | Read         |
| **Organization** |              |
| administration   | Read         |
| documents        | Manage       |

Leave resources that are not in the preceding table set to **None**.
