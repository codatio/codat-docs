---
title: "Managing companies"
description: "Learn how to manage companies, their connections, and their data via Portal"
createdAt: "2019-04-07T19:24:16.018Z"
updatedAt: "2022-10-06T11:36:02.635Z"
---

In the Codat Portal, click **Companies** in the navigation bar to view a list of your created companies. If you have signed up using the free trial, you will see a company has already been created for you using sandbox data.

From here you can:

- Search for a previously created company by clicking on the search icon
- [Add a new company](/portal-managing-companies#add-a-new-company)
- Copy your [Link URL](/authorize-hosted-link#use-the-hosted-link-url) to allow your customers to share their data through Link
- [Retrieve Link URLs for existing companies](/authorize-hosted-link#use-the-hosted-link-url) to allow them to authorize additional data connections, or re-authorize unlinked connections where required
- View details and show the status of existing companies
- [Delete companies](/portal-managing-companies#delete-a-company.

## View existing companies

In the companies view, you can see the following information for every company:

- Company name
- Company ID
- Name of the Portal user that created the company
- Date and time of the company creation
- Date and time of the last pull of data
- Data connections and their [statuses](/portal-managing-companies#data-connection-statuses)

### Data connection statuses

- _Green_ indicates the connection is linked, and data can be refreshed from the connection
- _Red_ indicates the connection has an error, or has become de-authorized (your customer will need to re-authorize the connection)
- _Purple_ indicates the connection has been created but has not yet been authorized
- _Grey_ indicates the connection has been un-linked (your customer will need to re-authorize the connection)

Clicking on a data connection allows you to manage the connection and see any linking errors.

## Add a new company

To create a new company, use the **New Company** button in the top right corner of the **Companies** view. In the **Add new company** dialog box, enter your customer's company name, and select **Add**.

You can rename a company at any time. This doesn't affect the connection. Next to the company name, click on the "pencil" icon and update the name in the text field that appears. **Save** the changes.

## Link a company

To link a company via Portal, follow the instructions [here](/allowing-your-users-to-access-link#share-link-urls-via-portal).

You can also [learn more about Link](/auth-flow).

## Queue data refresh

You can trigger data refresh to request data outside of the pre-configured sync setup frequency.

1. Navigate to **Companies** and select the company you want to sync.
2. Click the **Refresh data** icon.
3. To see the synchronization progress and outcomes, click **Pull history**. The history is updated in real time.
4. Once the refresh has been completed, you can view the latest data.

The configured sync frequency re-commences from the time of the last successful sync.

The **<a class="external" href="https://app.codat.io/settings/data-types" target="_blank">Data type settings</a>** page in the Codat portal allows users to set a default synchronization frequency for each data type to ensure your customers' data is kept up-to-date. The available options are _hourly_, _daily_, _weekly_, and _monthly_.

If you require a more specific schedule, you [queue data sync using Codat's API](/queueing-data-syncs).

For more information on configuring your sync settings, please see [Data type settings](/data-sync-settings).

:::info Token expiry and connection de-authorization
For some accounting platforms, if you don’t synchronize the data of a company for a significant time period (between 60 and 100 days) authorization is revoked. In this case, [provide your customer with a new link URL](/authorize-hosted-link#use-the-hosted-link-url) so that they can renew your access to their data.

## View company data

Click on a company to access information pertaining to it:

- A brief **Summary** that includes the company's revenue, operating profit, and equity, as well as an activity log
- Codat **Products** available for this company. By default, [Accounting API](/datamodel-accounting), [Banking API](/data-model-banking) and [Commerce API](/datamodel-commerce) are enabled (read more about our integrations [here](/core-integrations))

  Note that [Assess](/assess-overview) is also visible by default, but you need to [enable it in order to get started](/assess-how-to-get-started).

- Company's **Data**, including the [history of dataset pulls and their statuses](/data-status), and uploaded files

## Delete a company

Next to the **Link URL** button, in the Portal, select the delete icon. Confirm the deletion on the pop-up screen.
