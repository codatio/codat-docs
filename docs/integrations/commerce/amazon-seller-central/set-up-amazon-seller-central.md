---
title: "Set up the Amazon Seller Central Integration"
description: "Explore our API integration with Amazon Seller Central"
createdAt: "2021-09-07T22:30:33.558Z"
updatedAt: "2023-01-06T16:30:35.075Z"
---

Before you can pull commerce data from merchants using Amazon Seller Central, you need to set up the integration in Codat's environments.

Before you begin, you will need to have completed all of the prerequisite setup instructions [here](https://docs.codat.io/docs/amazon-registration-steps) to have setup your Amazon AWS and Seller Central credentials.

## Retrieving your secure credentials

1. Sign in to the [Codat Portal](https://app.codat.io).
2. On the navigation bar, select **Settings > Integrations > Commerce**.
3. Find 'Amazon Seller Central', then select **Set up** to view the **Integration settings** page.
4. From the [App Page on Amazon Seller Central](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole), copy the Client Identifier and Client Secret values obtained from Amazon Seller Central LWA and paste into the **Client ID** and **Client Secret** fields in the Codat Portal.
   - These are the credentials obtained by clicking the **View** button shown on the below screenshot\*
5. Copy the Application Id and IAM ARN from Amazon Seller Central App's page and paste into **App Id** and **IAM ARN** fields respectively in the Codat Portal.

- These are the credentials visible on the page on the below screenshot\*

![](https://files.readme.io/43ea65f-ASC.png "ASC.png")

6. Copy the AWS Access Key and Secret Access Key from the relevant IAM User Profile and paste into AWS access key and AWS secret access key fields in the Codat Portal.
   - This includes the key you downloaded when [creating your IAM User](https://docs.codat.io/docs/amazon-registration-steps)
7. In the Codat Portal, click **Save**.

## Enable the Amazon Seller Central integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Amazon Seller Central** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check your Sync Settings in the Codat Portal

If this is your first commerce integration, update your [data type settings](https://docs.codat.io/docs/commerce-sync-settings) to enable commerce data types.
