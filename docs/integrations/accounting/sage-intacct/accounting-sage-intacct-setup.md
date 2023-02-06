---
title: "Set up the Sage Intacct integration"
description: "Explore our API integration with Sage Intacct."
createdAt: "2021-09-09T10:27:14.969Z"
updatedAt: "2023-01-10T15:54:47.833Z"
---

To integrate with Sage Intacct, you must be a _Sage Intacct Developer Partner_, or work with an authorized partner.

Codat's enterprise clients can use our partner credentials to enable the integration if desired. Alternatively, you can register with the Sage Intacct Developer Programme and obtain your own partner credentials.

If you would like to enable our integration with Sage Intacct, please contact your Solutions Engineer to gain access to partner credentials for your instance and to discuss the process of [becoming a Sage Intacct partner](https://marketplace.intacct.com/BecomeAPartner).

:::note Entity Level access required

_Entity Level access_ must be enabled in Sage Intacct before a company can connect to the integration.
:::

## Enter partner credentials

1. Sign in to the [Codat Portal](https://app.codat.io)
2. On the navigation bar, select **Settings > Integrations > Accounting**.
3. Find the Sage Intacct integration, then click **Set up** to view the **Integration settings** page.
4. Enter your credentials in the **Sender ID** and **Sender Password** boxes:
   1. If you're a Sage Intacct Developer Partner, enter your Developer Sender ID and Sender Password.
   2. To use Codat's partner credentials, please contact your Solutions Engineer who will pre-fill these for you.
5. Optionally, select if you would like links with Sage Intacct to be continuous, or one-time syncs only.
6. Click **Save**.

## Enable the Sage Intacct integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Sage Intacct** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Test your integration

We recommend that you test your integration before sending Link URLs to customers. You'll need your own Sage Intacct account to do this.

:::caution Sage Intacct trial companies

You will not be able to link a Sage Intacct trial company. Sage Intacct trial companies do not support the Webservices API, which is needed to link and sync data via Codat.
:::

:::note Full admin privileges

**Prerequisites:** You must have Full admin privileges in Sage Intacct, and user role permissions.
:::

1. Set up some test data in your Sage Intacct account.
2. [Create a test company](/portal-managing-companies#add-a-new-company) in the Codat Portal.
3. Click **Request Data** next to the company name, and copy the Link URL.
4. Enter the Link URL in a new browser tab.
5. On the **Select your accounting software** step, select the **Sage Intacct** tile.
6. Follow the on-screen instructions in Link:
   1. Get your company ID from Sage Intacct.
   2. Turn on Web Services in Sage Intacct.
   3. Configure Web Services in Sage Intacct.
   4. Create a Web Services user in Sage Intacct.
   5. Enter your Sage Intacct Company ID, username and password.
   6. Select your Sage Intacct entity from the dropdown.
   7. A probe runs in the background and identifies any permissions that you're missing in Sage Intacct. Follow the on-screen steps to enable the missing permissions.
7. In the Codat Portal, make sure that test data from your Sage Intacct account is displayed for your test company.
