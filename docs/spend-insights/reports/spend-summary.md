---
title: "Spend Summary report reference"
sidebar_label: "Spend Summary"
description: "Understand the data and metrics used in the Spend Analysis report and how to interpret them"
displayed_sidebar: spendInsights
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

branded, downloadable PowerPoint (with PDF planned for Phase 2) that can be generated directly from the Codat Insights Portal after a client's first data sync — enabling meeting prep in under 15 minutes.


A one-page customer-ready snapshot of top supplier opportunities and key metrics, such as cashback potential and unlocked working capital. | Sales enablement, quick value demonstration, client-facing conversations |

t's designed to help bank card teams (relationship managers, account managers, etc.) quickly demonstrate the value of switching to card-based payments when speaking with their end clients — eliminating the need for manual data analysis or slide deck creation.

# Spend Summary report

Understand the metrics in the Spend Summary report and how to interpret them

The Spend Summary is a one-page, client-ready report that distils your customer's spend data into actionable insights for card adoption conversations. It is generated automatically from your customer's [Spend Analysis](#) data after their first data sync, and is downloadable as a PowerPoint from the Codat Portal — enabling meeting preparation in minutes without manual data compilation.

:::tip Who is this report for?
The Spend Summary is designed for **relationship managers** and **account managers** to share directly with end clients. It is particularly useful for managing high-volume, lower-spend accounts where scalable, consistent collateral is essential.
:::

## Metrics

### Annual card benefits

The headline metric of the report. Expresses the total estimated annual value your customer could unlock by switching eligible AP payments to card.

**How it's calculated:** Cashback value + payment processing savings

---

### Cashback value

The estimated annual cashback your customer could earn by moving eligible supplier payments to a virtual card programme.

**How it's calculated:** A tiered rate is applied to the total cardable spend:

- 2% on the first $1,000,000 of cardable spend
- 1% on any cardable spend above $1,000,000

**Cardable spend** is the total bills amount and direct costs amount for suppliers who are currently paying by a non-card method and are eligible for card conversion.

:::note
The cashback rate is configurable per bank. The rates above reflect the current defaults.
:::

---

### Payment processing savings

The estimated annual saving in staff time from automating AP payments via card, expressed as a dollar value.

**How it's calculated:** The number of cardable payments is multiplied by 3 minutes per payment, converted to hours, and monetised at $40 per hour.

**Cardable payments** is the total count of bill payments and direct cost transactions for suppliers eligible for card conversion.

---

### Working capital unlocked

:::note Coming soon
This metric is planned for a future release and does not appear in the current version of the report.
:::

The estimated value of extending payment terms by moving to a virtual card programme, expressed as an annual dollar figure.

**How it's calculated:** Based on the projected virtual card spend, the difference between card payment terms and your customer's average settlement days, and a configurable cost of capital rate.

---

## Top supplier opportunities

A prioritised table of your customer's suppliers ranked by annual spend, identifying the best candidates for card conversion.

| Column | Description |
|---|---|
| **Supplier name** | The supplier's name as recorded in your customer's accounting system. |
| **Annual spend** | Total bills amount and direct costs amount for this supplier over the reporting period. |
| **Bills outstanding** | The number of bills raised by this supplier that have not yet been paid. |
| **Settlement terms** | The agreed payment terms for this supplier (e.g. Net 30). |
| **Current payment method** | The method most commonly used to pay this supplier. |
| **Average payment amount** | The average value of individual payments made to this supplier. |

The table shows up to 10 suppliers by default. Suppliers already paying by card and those flagged as ineligible are excluded.

---

## Summary data

The report also includes an overall summary of your customer's accounts payable activity for the reporting period, covering total bills, direct costs, payments, supplier count, and the date range reviewed.

---

## What you can learn from this report

- **Card conversion opportunity size** — the annual card benefits figure gives a dollar value for the business case of switching AP payments to card.
- **Which suppliers to target first** — the top supplier opportunities table provides a prioritised, actionable list for your supplier enablement campaign.
- **Operational efficiency gains** — the payment processing savings show how card automation reduces manual processing time and cost.
- **Working capital upside** *(coming soon)* — extending payment terms via card demonstrates cash flow benefits to your customer.