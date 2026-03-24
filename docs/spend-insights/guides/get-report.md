---
title: "Download company's spend reports"
sidebar_label: Get reports
description: "Learn how to generate and download up-to-date spend reports for your customer"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

## Prerequisites

Before you can review spend data and associated insights, you need to request access to it. We cover this in detail in our [Onboard customer](/spend-insights/guides/onboard-customer) guide.

In this guide, we will cover how you can generate and download spend reports generated from your customer's business data using the [Codat Portal](https://app.codat.io/).

## Check report status

Once you onboard the customer, their initial Spend Insights reports generate immediately. In the Codat Portal, navigate to the **Spend Insights** tab, locate the customer's company, and check that the reports are ready. 

You may see one of the following statuses next to the company name:

| **Report status**              | **Action**                                                                                   |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Available**           | Codat successfully generated the spend report for this customer, and it's ready to download. |
| **Generating**          | Codat is currently generating the spend report for this customer. Check back later.          |
| **Unavailable**         | Codat hasn't yet received data from this customer. Onboard the customer first.              |
| **Failed**         | Codat couldn't generate the report. Contact support to resolve the error.              |

![An image of the Portal user interface on the Spend Insights tab with four companies listed and their statuses highlighted.](/img/spend-insights/si-spend-report-statuses.png)

## Update report

If your customer shared their data with you via [Data streaming](/spend-insights/resources/link-software), you can refresh the data in the Spend Insights report as often as you need. This ensures you are always working with the most up-to-date financial information of your customers. 

On-demand report update isn't possible if your customer used [Intelligent Upload](/spend-insights/resources/link-file) to share their financial data.

To generate an updated report, follow these steps:

1. Navigate to the **Spend Insights** tab in the [Codat Portal](https://app.codat.io).

2. Search or scroll to locate the company you require reports for.

3. Click the **Download** icon on the company line to view the dropdown menu.

4. Click **Update reports** in the dropdown menu.

5. Track the progress by checking the _Report Status_ column. 

Once updated, the status will change from _Generating_ to _Available_, and you can go ahead and download the resulting report.

![An image of the Portal user interface on the Spend Insights tab with the Update Reports button visible and highlighted.](/img/spend-insights/si-update-reports.png)

## Download report

When you are ready to download a company's Spend Insights reports, you can do so from the Spend Insights tab. 

1. Search or scroll to locate the company you require reports for.

2. Click the **Download** icon on the company line to view the dropdown menu.

3. Click the report line item that you want to download.

This initiates the download and saves the Excel report to your default download folder.

![An image of the Portal user interface with the download dropdown displayed and download button highlighted for an example company](/img/spend-insights/si-reports-download.png)

## Report types

Codat offers three report types with a different level of detail that serve a different stage of your engagement with a customer. For a full breakdown of each report's columns and how to interpret the data, review the reports' reference pages.

| Report | Format | Description | Target use |
|---|---|---|---|
| **[Spend Summary](/spend-insights/reports/spend-summary)** | PowerPoint | A one-page customer-ready snapshot of top supplier opportunities and key metrics, such as cashback potential and time saved. | Sales enablement, quick value demonstration, client-facing conversations |
| **[Spend Analysis](/spend-insights/reports/spend-analysis)** | Excel | A detailed breakdown of your customer's accounts payable data, payment methods, supplier spend, and settlement terms. | Deep spend analysis, identification of cardable suppliers, input for supplier onboarding campaigns |
| **[Ongoing Insights](/spend-insights/reports/ongoing-insights)** | Excel | An automated quarterly report that compares the latest spend data to previous periods and highlights new suppliers, trends, and payment method changes. | Continuous monitoring of opportunitites, supplier onboarding prioritization |

:::tip Missing reports?

If you don't see all three reports in the download list, this may be because:

- The report hasn't been generated yet. Select **Update reports** from the download dropdown to trigger a refresh.
- The report type is disabled for your account. Reach out to your account manager to enable it.
- The **Ongoing Insights** report is generated quarterly. If a quarter hasn't passed yet, the report won't appear in the list.

:::

<ReadNext
  links={[
    [
      "Spend Summary report reference",
      "/spend-insights/reports/spend-summary",
    ],
    [
      "Spend Analysis report reference",
      "/spend-insights/reports/spend-analysis",
    ],
    [
      "Ongoing Insights report reference",
      "/spend-insights/reports/ongoing-insights",
    ],
  ]}
/>