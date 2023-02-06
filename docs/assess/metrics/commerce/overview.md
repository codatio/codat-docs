---
title: "Commerce Metrics"
description: "Describes the metrics and formulas used by the commerce metrics endpoints"
createdAt: "2022-04-04T07:04:34.727Z"
updatedAt: "2022-11-30T14:38:23.838Z"
---

:::caution Supported platforms

We will only produce metrics for the platforms that support the following data types:

- Commerce - Company Info
- Commerce - Customers
- Commerce - Orders
  :::

This feature provides a set of pre-calculated ratios and metrics focussed on commerce/sales data to assess merchant health. It exposes some of the key insights lenders need to assess the credit risk of a company using commerce data. _Commerce Metrics_ provides the data that lets you see what works and what doesn't, providing the opportunity to advise your customers / prospects on what they can do to improve their performance.

## What metrics are available?

The following table lists which metrics are calculated and their formulas:

[block:parameters]
{
"data": {
"h-0": "Metric",
"h-1": "Description",
"h-2": "How that's translated to Codat data",
"0-0": "**Revenue**",
"0-1": "",
"0-2": "",
"1-0": "Revenue",
"1-1": "The gross revenue for a selected period.",
"1-2": "`Revenue = SUM(orderlines.quantity * orderlines.unitPrice)`  
for the specified period",
"2-0": "Revenue growth",
"2-1": "The percentage change in revenue between the present period’s value and previous period's value.",
"2-2": "`Revenue growth % change = ((b-a)/|a|) * 100`  
compared to the previous period

a. previous month's revenue  
b. current month's revenue",
"3-0": "**Orders** ",
"3-1": "",
"3-2": "",
"4-0": "Number of orders",
"4-1": "The number of orders for a specific period.",
"4-2": "`Number of orders = COUNT(orders)`  
for that period",
"5-0": "Order value",
"5-1": "The sum of the values of all orders over a specific period.",
"5-2": "`Value of orders = SUM(orders.totalAmount)`  
for that period",
"6-0": "Average order value",
"6-1": "The average order value for over specified period.",
"6-2": "`Average order value = a / b`  
for that period

a. order value  
b. COUNT(orders)",
"7-0": "**Refunds** ",
"7-1": "",
"7-2": "",
"8-0": "Number of refunds",
"8-1": "The number of orders where the field `totalRefund` is NOT NULL.",
"8-2": "`Number of refunds = COUNT(orders)` for the selected period where,

`totalRefund` > 0 for the selected period",
"9-0": "Value of refunds",
"9-1": "The sum of all refunds over a specified period.",
"9-2": "`Value of refunds = SUM(orders.totalRefund)`  
for the selected period, always expressed as a negative value",
"10-0": "Refund rate",
"10-1": "The number of refunds compared with the number of orders over a specific period.",
"10-2": "`Refund rate = a / b` for that period

a. number of refunds  
b. number of orders",
"11-0": "**Customer retention** ",
"11-1": "",
"11-2": "",
"12-0": "Existing customers",
"12-1": "COUNT of unique customers where they have placed orders in the specified period AND any previous period",
"12-2": "`Existing customers = COUNT(customers)` who placed orders in the specified period and any previous period",
"13-0": "New customers",
"13-1": "COUNT of unique customers where they have placed orders in the specified period AND NONE in any previous period.",
"13-2": "`New customers = COUNT(customers)` who placed orders in the specified period only",
"14-0": "Total customers",
"14-1": "SUM of Existing and New customers.",
"14-2": "`Total customers = a + b`

a. new customers  
b. existing customers",
"15-0": "Retention rate",
"15-1": "The percentage of existing customers within the period compared to the total customers at the end of the previous period.",
"15-2": "`Retention rate = (a/(b + c)) * 100`

a. COUNT(customers): current period's existing customers, i.e. customers who have placed their very first order _before the current period_

b. COUNT(customers): previous period's existing customers, i.e. customers who have placed their very first order _before the previous period_

c. COUNT(customers): previous period's new customers, i.e. customers who have placed their very first order _in the previous period_",
"16-0": "Repeat rate",
"16-1": "The percentage of existing customers to total customers over the specified period.",
"16-2": "`Repeat rate = (a / a + b) * 100`

a. COUNT(customers): current period's existing customers, i.e. customers who have placed their very first order _before the current period_

b. COUNT(customers): current period's new customers, i.e. customers who have placed their very first order _in the current period_",
"17-0": "**Lifetime value** ",
"17-1": "",
"17-2": "",
"18-0": "Lifetime value",
"18-1": "The revenue a business can expect from a paying customer during their time as a paying customer.",
"18-2": "`Lifetime value = a _ b _ c`

a. `Average order value` for that period

b. `COUNT(orders) / COUNT(customers)`: average number of orders per customer, for that period

c. `Average customer lifespan`: average difference in days between the last and first orders in a specified period, for all customers. "
},
"cols": 3,
"rows": 19,
"align": [
"left",
"left",
"left"
]
}
[/block]
