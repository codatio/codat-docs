---
title: "Profit and loss (Visualize)"
createdAt: "2020-10-07T09:26:45.611Z"
updatedAt: "2022-11-17T10:30:01.472Z"
---

The profit and loss dashboard allows you to compare trends in a company's revenue, costs, and expenses across different time periods. It also provides a detailed breakdown of the same metrics for each of the selected time periods. This article provides:

- Descriptions of the default dashboard settings and available options.
- Descriptions of the key metrics available for selection.
- Descriptions of the data displayed.

:::note Formulas for calculating key metrics

Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.
:::

If data in the profit and loss dashboard is unavailable, please read [Using the dashboards](https://docs.codat.io/docs/using-the-dashboards) for information on how to resolve this.

## Dashboard settings

Compare trends in key metrics from the profit and loss report across different time periods along with a detailed breakdown for each period.

| Option                 | Description                                                                                                                                                                                 |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Latest Month**       | Most recent month's data that will appear on the graph or in the detailed breakdown. Any selected time periods will look backwards from this month so that you can compare historical data. |
| **Period Length**      | Number of months of data that you want to compare: **1 month**, **2 months**, **3 months**, **6 months**, **12 months**.                                                                    |
| **Periods to Compare** | How many periods of the selected length that you want to compare.                                                                                                                           |

## Key metrics

Any metrics that contain datasets with null field values will not be available for selection.

| Metric                   | Description                                                                                                                                                  |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Income**               | Compares the company's total income across the selected periods, and gives an indication of variations in the size of the business.                          |
| **Cost of Sales**        | Compares the business' expenses directly tied to the production and sale of the company's goods and services across the selected periods.                    |
| **Gross Profit**         | Compares the profit the business makes, after deducting the cost of sales, across the selected periods.                                                      |
| **Expenses**             | Compares the company's total operating expenses across the selected periods.                                                                                 |
| **Net Operating Profit** | Compares the profit the business makes, after deducting the cost of sales and other operating expenses, across the selected periods.                         |
| **Other Expenses**       | Compares the company's other expenses, excluding operating costs, across the selected periods. For example, the interest paid on loans.                      |
| **Other Income**         | Compares the income that is earned from sources other than the company's main business across the selected periods. For example, rent or the sale of assets. |
| **Net Other Income**     | Compares the company's income earned from sources other than their main business, after deducting other expenses, across the selected periods.               |
| **Net Profit**           | Compares the percentage of profit generated from revenue, after accounting for all expenses, costs, and cash flow items, across the selected periods.        |

## Default settings

The default settings for the profit and loss dashboard compare the company's total income for two consecutive twelve month periods leading up to the most recent full month of synced data.

Example default settings:

- **Latest Month** is set to the most recent full month of synced data. In this case, **February 2021**.
- **Period Length** is set to **12 months**.
- **Periods to Compare** is set to **2**.
- The metric **Income** is selected.

The graph shows a straight line plotted between the total assets value for the earliest (start) and latest (end) month of the selected twelve month period. Beneath the graph is a full balance sheet from the start and end of the selected period so that you can compare individual report lines.

The graph will a show a straight line plotted between the total income for February 2019 and February 2021.Beneath the graph is a full profit and loss report for each twelve month period so that you can compare individual report lines.

To see a trend line for a metric across a year, update:

- **Period Length** to **1 month**.
- **Periods to Compare** to **12**.
