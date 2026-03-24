---
title: "Ongoing Insights report reference"
sidebar_label: "Ongoing Insights"
description: "Understand the data and metrics used in the Spend Analysis report and how to interpret them"
displayed_sidebar: spendInsights
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

An automated quarterly report that compares the latest spend data to previous periods and highlights new suppliers, trends, and payment method changes. | Continuous monitoring of opportunitites, supplier onboarding prioritization

# Ongoing Insights report

Understand the tabs, columns, and calculated values in the Ongoing Insights report

The Ongoing Insights report is a scheduled quarterly report that compares your customer's latest spend data to the previous period. It is designed to surface timely, actionable insights — new suppliers, payment method shifts, and settlement trends — without requiring you to manually pull and compare reports.

The report is generated automatically each quarter and delivered to your inbox by email. Once generated, it is also available to download from the Portal. For instructions, see [Download reports](#).

:::note
The Ongoing Insights report is only generated once a full quarter of data has been collected. If you have not yet received the report, a complete quarter of data may not yet be available for your customer.
:::

## How the report works

Each quarter, Codat compares two consecutive three-month windows of your customer's spend data:

- **Prior period** — the three months before the latest quarter
- **Latest quarter** — the most recent three months of data

Suppliers who appear in the latest quarter but had no spend in the prior period are identified as **new suppliers** and are the focus of much of the report's analysis.

---

## Report structure

The report contains three tabs:

| Tab | Contents |
|---|---|
| **Summary** | High-level overview of new supplier activity and settlement trends |
| **Spend Analysis** | Quarter-on-quarter payment method mix comparison |
| **New Suppliers** | Detailed per-supplier breakdown for suppliers new to the latest quarter |

---

## Summary tab

The **Summary** tab provides a high-level snapshot of new supplier activity and how settlement behaviour has changed since the prior period.

| Column | Description | How it's calculated |
|---|---|---|
| **Date range** | The start and end dates of the latest quarter covered by the report. | Set to the latest three-month window. Months reviewed is always 3. |
| **New supplier count** | The number of suppliers that appear in the latest quarter but had no spend in the prior period. | Count of suppliers present in the latest quarter with no record in the preceding three-month window. |
| **Bills count (new suppliers)** | The total number of bills raised by new suppliers in the latest quarter. | Count of all bills from new suppliers within the latest quarter. |
| **Bills amount (new suppliers)** | The total value of bills raised by new suppliers. | Sum of bill amounts (base currency) for new suppliers in the latest quarter. |
| **Payments count (new suppliers)** | The total number of payments made to new suppliers. | Count of payment records linked to new suppliers' invoices in the latest quarter. |
| **Payments amount (new suppliers)** | The total value of payments made to new suppliers. | Sum of payment amounts (base currency) for new suppliers in the latest quarter. |
| **Direct costs count (new suppliers)** | The total number of direct cost transactions associated with new suppliers. | Count of direct cost records for new suppliers in the latest quarter. |
| **Direct costs amount (new suppliers)** | The total value of direct costs associated with new suppliers. | Sum of direct cost amounts (base currency) for new suppliers in the latest quarter. |
| **Average settlement days (new suppliers)** | The spend-weighted average number of days from bill issue to payment for new suppliers. | `SUM(settlement days × bill amount) / SUM(bill amount)` for new suppliers in the latest quarter, where settlement days = payment date − issue date. |
| **Change in average settlement days** | The difference in average settlement days between new suppliers and suppliers from the prior period. | Average settlement days (new suppliers) − average settlement days (prior period suppliers). A positive value means new suppliers are taking longer to settle; a negative value means they are settling faster. |

---

## Spend Analysis tab

The **Spend Analysis** tab compares the payment method mix between the prior period and the latest quarter, showing how your customer's spend distribution across payment methods has shifted.

Each row represents a payment method. See [How payment methods are determined](#) for details on how methods are inferred from accounting data.

| Column | Description | How it's calculated |
|---|---|---|
| **Payment method** | The payment method type (e.g. Credit Card, Bank Transfer, Check, Unknown). | Grouped by each supplier's most common inferred payment method. |
| **% of all bills (by amount) — prior period** | The share of total bill value attributed to this payment method in the prior period. | `(Bills amount for this method in prior period / Total bills amount in prior period) × 100` |
| **% of all bills (by amount) — latest quarter** | The share of total bill value attributed to this payment method in the latest quarter. | `(Bills amount for this method in latest quarter / Total bills amount in latest quarter) × 100` |
| **Change** | The percentage point difference between the two periods. | Latest quarter % − prior period %. A positive value means this payment method's share has grown; a negative value means it has declined. |

Use this tab to detect payment method shifts — for example, if the share of spend on Check or Bank Transfer has increased, this may indicate suppliers reverting away from card payments, which is a signal to re-engage with your card programme outreach.

---

## New Suppliers tab

The **New Suppliers** tab provides a full supplier-level breakdown for every supplier identified as new in the latest quarter. The columns in this tab match those in the [Spend Analysis report](#) Supplier Analysis tab, covering bills, payments, payment terms, settlement period, direct costs, payment method, and supplier details.

For column definitions, see the [Spend Analysis report reference](#).

---

## What you can learn from this report

- **New supplier discovery** — the New Suppliers tab identifies vendors your customer has started working with recently. These are prime candidates for commercial card onboarding, particularly those currently paying by check or bank transfer.
- **Payment method shift detection** — the Spend Analysis tab highlights whether suppliers are moving away from card payments towards check or ACH, or vice versa. An increasing share of non-card spend is a signal to prioritise re-engagement.
- **Settlement trend monitoring** — the change in average settlement days shows whether your customer's payment behaviour is improving or degrading over time, indicating shifts in cash management.
- **Proactive outreach** — because the report is delivered to your inbox on a quarterly schedule, it surfaces opportunities at the right time without requiring you to manually pull and compare data.