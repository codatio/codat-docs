---
title: "Spend Summary report reference"
sidebar_label: "Spend Summary"
description: "Understand the data and metrics used in the Spend Analysis report and how to interpret them"
displayed_sidebar: spendInsights
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

Codat's **Spend Summary** is a one-page snapshot report that turns your customer's spend data into actionable card adoption insights. It's designed to help bank card teams quickly demonstrate the value of switching to card-based payments when speaking with customers.

It is generated automatically after your customer's first data sync when they connect their ERP or accounting software, or share their spend file. You can then download the branded PowerPoint file from the Codat Portal, enabling meeting preparation in minutes without manual data compilation.

If your customer shares data via [Data streaming](/spend-insights/resources/link-software), you can refresh the report at any time. For instructions on downloading the report, see [Download reports](/spend-insights/guides/get-report#download-report).

## Insights

Use the Spend Summary to support the following conversations and decisions with your customers:

- **Card conversion opportunity size**: the annual card benefits figure gives a dollar value for the business case of switching payments to card.
- **Which suppliers to target first**: the top supplier opportunities table provides a prioritized list for your supplier enablement campaign.
- **Operational efficiency gains**: the payment processing savings show how card automation reduces manual processing time and cost.

## Metrics

Each metric on the Spend Summary is calculated automatically from your customer's spend data, quantifying the opportunity to migrate spend to commercial card.

### Annual card benefits

This is the headline metric of the report. It expresses the total estimated annual value your customer could unlock by switching eligible payments to card. It's calculated as the total of the [cashback value](/spend-insights/reports/spend-summary#cashback-value) and [payment processing savings](/spend-insights/reports/spend-summary#time-saved), the other two metrics of the report.

### Cashback value

This is the estimated annual cashback your customer could earn by moving eligible supplier payments to a virtual card programme. To calculate it, we apply a tiered rate to the total cardable spend. 

**Cardable spend** is the total amount of bills and expenses for suppliers who are currently paying by a non-card method and are eligible for card conversion.

:::note Tiered cashback rate
Cashback rates can be configured based on your organization's requirements. Codat applies the following cashback rates by default:

- 2% on the first $1,000,000 of cardable spend
- 1% on any cardable spend above $1,000,000

:::

### Time saved

Time saved, also known as payment processing savings, is the estimated annual saving in full-time employee (FTE) time from moving supplier payments to card, expressed as a dollar value.

To calculate the metric, we multiply the number of cardable payments by 3 minutes per payment. We then convert this to hours and monetize at $40 per hour. **Cardable payments** is the total count of bill payments and expense transactions for suppliers eligible for card conversion.

## Top supplier opportunities

This prioritized table includes your customer's top 3 suppliers ranked by annual spend, identifying the best candidates for card conversion. The table excludes suppliers whose dominant payment method is credit card.

| Column | Description |
|---|---|
| **Supplier name** | The supplier's name as recorded in your customer's accounting system. |
| **Annual spend** | Total bills amount and expense amount for this supplier over the reporting period. |
| **Settlement terms (days)** | The agreed payment terms for this supplier. |
| **Current payment method** | The method most commonly used to pay this supplier. |

<ReadNext
  links={[
    [
      "Spend Analysis report reference",
      "/spend-insights/reports/spend-analysis",
    ],
    [
      "Ongoing Insights report reference",
      "/spend-insights/reports/ongoing-insights",
    ],
    [
      "Vendor match report reference",
      "/spend-insights/reports/vendor-match",
    ],
  ]}
/>