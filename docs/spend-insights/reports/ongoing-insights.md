---
title: "Ongoing Insights report reference"
sidebar_label: "Ongoing Insights"
description: "Understand the data and metrics used in the Ongoing Insights report and how to interpret them"
displayed_sidebar: spendInsights
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

The **Ongoing Insights** report is a scheduled quarterly report that compares your customer's latest spend data to the previous period. It is designed to surface timely, actionable insights without requiring you to manually pull and compare reports.

The report is generated automatically each quarter and delivered to your inbox by email. We use the emails added to the Subscriptions list during company creation (see [Create customer](/spend-insights/guides/onboard-customer#create-customer)).

Once generated, it is also available to download from the Portal. For instructions on downloading the report, see [Download reports](/spend-insights/guides/get-report#download-report). It's not possible to manually trigger the update of this report.

:::tip Quarterly report
The Ongoing Insights report is only generated once a full quarter of data is available. If you haven't yet received the report, it may be because we don't have a complete quarter of data for your customer.
:::

## Insights

Because the Ongoing Insights report arrives on a regular schedule, we recommend you use it proactively for the following use cases:

- **New supplier discovery**

    The _New Suppliers_ tab identifies vendors your customer has started working with recently. These are prime candidates for card onboarding, especially those currently paying by check or bank transfer.

- **Payment method shift detection**

    The _Spend Analysis_ tab highlights whether suppliers are moving away from card payments or towards them. An increasing share of non-card spend may be a signal to prioritize reengagement.

- **Settlement trend monitoring**

    The change in average settlement days shows whether your customer's payment behaviour is improving or degrading over time, indicating shifts in cash management.

- **Proactive outreach**

    Because the report is delivered to your inbox on a quarterly schedule, it surfaces opportunities at the right time without requiring you to manually pull and compare data.

## Report generation

Each quarter, Codat compares two consecutive three-month windows of your customer's spend data:

- **Prior period** — the three months before the latest quarter
- **Latest quarter** — the most recent three months of data

Suppliers who appear in the latest quarter but had no spend in the prior period are identified as **new suppliers** and are the focus of the report.

## Report structure

The report contains three tabs:

| Tab | Contents |
|---|---|
| **Summary** | High-level overview of new supplier activity and settlement trends |
| **Spend Analysis** | Quarter-on-quarter payment method comparison |
| **New Suppliers** | Detailed breakdown for suppliers new to the most recent quarter |

### Summary tab

The **Summary** tab provides a high-level snapshot of new supplier activity and how settlement behavior has changed since the prior period.

| Column                                      | Description                                                                                                                                                                                                                                   | What it tells you                                                                                                                                                                       |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Start Date**, **End Date**, **Months Reviewed**                          | The date range of the latest quarter covered by the report. Months reviewed is always 3.                                                                                                                                             | All figures in this report are calculated for this period. Check this first before interpreting any metric.                                                                                 |
| **New supplier count**                      | The number of suppliers that appear in the latest quarter but hadn't appeared in the prior period.                                                                                                                                               | The headline indicator of supplier base growth. A high count signals significant new relationships worth exploring.                                              |
| **# of Bills (new suppliers only)**             | Total number of bills raised by new suppliers in the latest quarter.                                                                                                                                                                          | Use to understand how active the new suppliers are. A high bill count from new suppliers indicates they are already transacting at scale.                                                        |
| **Bills amount (new suppliers only)**            | Total value of bills raised by new suppliers in the latest quarter.                                                                                                                                                                           | Quantifies the financial importance of new supplier relationships. High amounts make these suppliers priority candidates for card enablement.                                              |
| **# of Payments (new suppliers only)**          | Total number of payments made to new suppliers in the latest quarter.                                                                                                                                                                         | Compare with bills count to understand payment patterns.            |
| **Payments amount (new suppliers only)**         | Total value of payments made to new suppliers in the latest quarter.                                                                                                                                                                          | Cross-reference with bills amount to check for patterns. A significant gap may indicate outstanding balances with new suppliers.                                                           |
| **# of Direct costs (new suppliers only)**      | Total number of expense transactions associated with new suppliers in the latest quarter.                                                                                                                                                 | A high count relative to bill count suggests new suppliers are being paid outside of the formal supplier process.                                                                      |
| **Direct costs amount (new suppliers only)**     | Total value of expenses associated with new suppliers in the latest quarter.                                                                                                                                                              | Add to bills amount for a complete picture of total spend with new suppliers.                                                                                         |
| **Average settlement days** | The average number of days between bill issue date and payment date for new suppliers, calculated across all bills and weighted so that higher-value bills have more influence on the result.   | Use as a baseline for how quickly new suppliers are being paid. Compare with the prior period average to spot trends.                                                       |
| **Change in average settlement days**       | The difference in average settlement days between new suppliers in the latest quarter and suppliers from the prior period.<br/><br/> A positive value means new suppliers are taking longer to settle, and a negative value means they are settling faster. | A significant positive change may indicate new suppliers have longer payment cycles or that payment processes are slowing. |

## Spend Analysis tab

The **Spend Analysis** tab compares the payment method mix between the prior period and the latest quarter. Use this tab to detect payment method shifts. For example, if the share of spend on Check or Bank Transfer has increased, this may indicate suppliers moving away from card payments.

Each row represents an inferred payment method. See [Payment method determination](/spend-insights/reports/spend-analysis#payment-method-determination) for details on how methods are inferred from accounting data.

| Column                                     | Description                                                                                                                                                                            | What it tells you                                                                                                                                                                                                    |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Payment method**                              | The payment method grouped by each supplier's most common inferred payment method.                                             | Use to identify which payment methods dominate your customer's supplier spend and where shifts are occurring.                                                                                                              |
| **% of all bills (by amount) — last quarter**   | Share of total bill value attributed to this payment method in the three-month period before the latest quarter.                                                                       | Use as the baseline when assessing how your customer's payment method mix has changed.                                                                                                                               |
| **% of all bills (by amount) — this quarter** | Share of total bill value attributed to this payment method in the most recent three-month period.                                                                                     | Compare with the prior period column to see whether spend on this payment method has grown or declined.                                                                                                              |
| **Change**                                      | The percentage point difference between the latest quarter and the prior period. <br/><br/> A positive value means this payment method's share has grown, and a negative value means it has declined. | A growing share of check or bank transfer spend signals suppliers moving away from card. A growing card share confirms that enablement efforts are working. |

## New Suppliers tab

The **New Suppliers** tab provides a full supplier-level breakdown for every supplier identified as new in the latest quarter. The columns in this tab match those in the _Supplier Analysis_ tab of the **Spend Analysis** report, covering bills, payments, payment terms, settlement period, expenses, payment method, and supplier details.

For column definitions, see the [Spend Analysis report reference](/spend-insights/reports/spend-analysis#supplier-analysis-tab).

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
  ]}
/>