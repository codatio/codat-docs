---
title: "Refresh your customers' data"
sidebar_label: Keep data fresh
description: "Learn how to refresh your customers' financial data on demand"
---

## Overview

Our [Relationship Manager Portal](https://banking-ui.codat.io/) is your one-stop shop to view the clients and relationships you are responsible for. Here, your organization's clients are represented as [companies](../../terms/company). 

In this guide, we will explain the different states a company's data can be in and cover the ways you can update your customers' data on demand.

## Data status

In the Relationship Manager, each company has a status associated with it that reflects the state of the financial information for that company. The status can be:

- _Requested_, meaning that the information request email has been sent to the customer and is pending action on their side.
- _Available_, meaning the information has been successfully updated, and the reports for the company are ready to be viewed.
- _Error_, indicating that an issue has occurred during the data refresh (for example, your customer has exited the authorization process without granting your organization access to their data).

![An image of the Relationship Manager Portal user interface with the Status column highlighted](/img/supplier-enablement/0069-se-rm-portal-status.png)

You can also see the date and time of the most recent information update in the same column next to the status. If you click the download icon, you can also see update timestamps for each individual report. For details on these reports and how to download them, see our [Check financials](/supplier-enablement/guides/analyze-financials#download-reports) guide.

## Refresh data

When your customer receives the [information request email](/supplier-enablement/guides/analyze-financials#request-financial-data-during-company-creation) and grants your organization access to their financial and spend data, this data is fetched automatically. 

Any time you want to see the most up-to-date information (for example, during periodic checks of your customers' financial position), you can initiate a refresh manually in the Relationship Manager. 

To do that, locate your customer's company in the list, click the triple-dot menu and select **Refresh data**. You will see a message confirming the refresh has been initiated. 

![An image of the Relationship Manager Portal user interface with the Refresh data option highlighted](/img/supplier-enablement/0070-se-rm-portal-refresh-data.png)

This will update the types of information you previously requested (financials, spend detail or both) in the background. Once the update is complete, the **Status** column will display the status of _Available_ with the date and time of the refresh. 

---

## Read next

- [Supplier Enablement overview](/supplier-enablement/overview)