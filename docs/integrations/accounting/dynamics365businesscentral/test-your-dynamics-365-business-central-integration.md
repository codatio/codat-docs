---
title: "Test your Dynamics 365 Business Central integration"
slug: "test-your-dynamics-365-business-central-integration"
description: "Test your integration by pulling data from a test company."
createdAt: "2022-11-30T11:53:45.188Z"
updatedAt: "2022-11-30T14:53:46.759Z"
---

Before sending Link URLs to your SMB customers, we recommend you test your integration using a trial Dynamics 365 Business Central account.

## Create test data and link a test company to Business Central

1. Sign in to the Business Central account you added earlier or create a new one.

2. <a
     className="external"
     href="https://dynamics.microsoft.com/en-gb/business-central/overview/"
     target="_blank"
   >
     Create test data within the application
   </a>
   ; for example, invoices.

3. [Create a test company](/other/portal/companies#add-a-new-company) in the Codat Portal.

4. Locate your test company, then click **Request data**.

5. Open the **Link URL** and follow the steps in Link to connect to your Microsoft Dynamics 365 account.

   - Select **Microsoft Dynamics 365 Business Central** and then select **Continue to Dynamics 365 Business Central**.
   - Log in to your Dynamics 365 account.
   - Authorize access to your account details.
   - Select the test company you created.

   :::caution Admin approval - Active Directory

   Depending on the SMB user's Active Directory (AD) settings for Dynamics 365, an AD admin might need to approve the connection to your app. If this applies, the user is advised to request access, which notifies the AD admins. If the user is an AD admin themselves they won't need to request access.

   When an AD admin approves access, the user can complete the Link steps again to establish the connection to your app.
   :::

   :::caution Multiple environment selection - Sandbox and Production

   During the linking process, the environment is displayed when you select a company that is available in a sandbox or production environment.

   This allows you to organize your Business Central data into multiple production environments. Also, you and your customers can ensure that the correct environment is used when linking companies.

   According to your access level, a company named _Cronus_ might be available to select. This is a Microsoft test company that is populated with sample data.
   :::

6. Make sure that data for your test company is displayed in Codat Portal.

To learn more about how Dynamics 365 Business Central handles certain data types, and how this affects the data available in Codat, see [Dynamics 365 Business Central integration reference](/integrations/accounting/dynamics365businesscentral/accounting-dynamics-365-business-central-reference).
