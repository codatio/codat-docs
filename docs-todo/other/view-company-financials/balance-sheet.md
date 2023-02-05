---
title: "Balance sheet (Visualize)"
createdAt: "2020-10-07T09:32:28.188Z"
updatedAt: "2022-11-17T10:30:21.745Z"
---

The balance sheet dashboard allows you to compare trends in the company's overall financial position, including assets, liabilities, and equity across different time periods. It also provides a detailed breakdown of the same metrics for each of the selected time periods. This article provides:

- Descriptions of the default dashboard settings and available options.
- Descriptions of the key metrics available for selection.
- Descriptions of the data displayed.

:::note Formulas for calculating key metrics

Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.
:::

If data in the balance sheet is unavailable, please read [Using the dashboards](https://docs.codat.io/docs/using-the-dashboards) for information on how to resolve this.

## Dashboard settings

Compare trends in key metrics from the balance sheet across different time periods along with a detailed breakdown for each period.

| Option                 | Description                                                                                                                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Latest Month**       | Most recent month's data that will appear on the graph or in the detailed breakdown. Any selected time periods will look backwards from this month so that you can compare historical data. |
| **Period Length**      | Number of months of data that you want to compare: **1 month**, **2 months**, **3 months**, **6 months**, **12 months**.                                                                    |
| **Periods to Compare** | How many periods of the selected length that you want to compare.                                                                                                                           |

## Key metrics

Any metrics that contain datasets with null field values will not be available for selection.

| Metric          | Description                                                                                                                                |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **Assets**      | Compares the total value of the assets owned or controlled by the company across the selected periods.                                     |
| **Liabilities** | Compares the total value of debts owed by the company across the selected periods.                                                         |
| **Net Assets**  | Compares the total value of the company, calculated by deducting the business' liabilities from their assets, across the selected periods. |
| **Equity**      | Compares the total value of the company, calculated by deducting the business' liabilities from their assets, across the selected periods. |

## Default settings

The default settings for the balance sheet compare the company's total asset value at the start and end of the twelve month period that finishes at the end of the selected month.

Example default settings:

- **Latest Month** is set to the most recent full month of synced data.
- **Period Length** is set to **12 months**.
- **Periods to Compare** is set to **2**.
- The metric **Assets** is selected.

The graph shows a straight line plotted between the total assets value for the earliest (start) and latest (end) month of the selected twelve month period. Beneath the graph is a full balance sheet from the start and end of the selected period so that you can compare individual report lines.

To see a trend line for a metric across a year, update:

- **Period Length** to **1 month**.
- **Periods to Compare** to **12**.
