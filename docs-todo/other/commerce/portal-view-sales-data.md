---
title: "View sales data"
createdAt: "2022-01-24T16:21:59.963Z"
updatedAt: "2022-11-23T15:35:34.096Z"
---

:::caution View sales data - Beta testing

Note that sales data visuals are still in beta testing across all integrations and hasn't been fully released yet.

If you're interested in participating in the beta testing of this feature, contact your sales representative.
:::

The Codat Portal allows you to view sales data from a commerce platform and assess merchant health. It exposes some of the key insights lenders need to assess the credit risk of a company using commerce data. It provides graphical displays of commerce data and pre-calculated metrics used to help assess the performance of a company. At a glance you will see what works and what doesn't, providing the opportunity to advise your customers / prospects on what they can do to improve their performance.

This feature is only available on the Client Portal. Make sure you have the following datatypes enabled to sync:

- Commerce - Company Info
- Commerce - Transactions
- Commerce - Orders
- Commerce - Disputes
- Commerce - Products
- Commerce - Payments
- Commerce - Customers

:::note Formulas for calculating sales metrics

Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.
:::

## What metrics are available?

The page is divided into two sections:

- **Sales**: shows a breakdown of the overall sales activity of the merchant.
- **Business insights**: provides an overview of the key aspects of merchant health such as discount/chargeback rates.

It also provides values for the _Balance \_and \_Settlement period_.

\_Balance \_is the company’s account’s current balance that is available to be transferred or paid out by the payments system, and it does not include pending or reserved funds.

_Settlement period_ is the average number of days between payouts.

:::note Note

_Balance_ and _Settlement period_ are at a company level and are not affected by the date range you select.
:::

## Sales

On entering the page, the _Gross sales_ and _Net sales_ graphs are displayed. The _Sales \_section gives you an overview for a company linked on Codat’s commerce integrations. It shows the total sales volume for the store. The \_Gross sales_ and _Net sales_ are provided where _Net sales_ accounts for discounts and refunds.

All metrics and graphs are produced for the date range you selected.

The Sales section provides the following metrics:

- Discounts
- Refunds
- No. orders
- Avg. net sales

The following table lists which metrics are provided, their formulas, and where applicable provide examples, for the Sales section:

[block:parameters]
{
"data": {
"h-0": "Metric",
"h-1": "Formula",
"0-0": "**Balance** ",
"0-1": "Balance data supported by Codat’s commerce-info data type are: \n \n`available` - The account's current balance. Funds available to be transferred or paid out. Amount of total available holdings. \n`pending` - Funds that are not yet available in the balance. \n`reserved` - Funds reserved as holdings by the payment processor and gateway.",
"1-0": "**Settlement Period** ",
"1-1": "Average value of time between payouts: \n \na/(b -1) \n \na. sum of the days from earliest payout to latest payout \n \nb. count of the number of transactions",
"2-0": "**Gross sales** ",
"2-1": "Gross sales of an order: \n \n(Order.orderLineItems.quantity \\_ Order.orderLineItems.unitPrice) \n \nGross sales of all orders: \n \nSUM(Gross sales of an order) for all orders",
"3-0": "**Net sales** ",
"3-1": "Net sale of an order: \n \n(Order.orderLineItems.quantity \\_ Order.orderLineItems.unitPrice) - (Order.totalDiscounts + Order.totalRefunds) \n \nNet sale of all orders: \n \nSUM(Net sale of an order) for all orders",
"4-0": "**Discounts** \nTotal discounts over the period selected.",
"4-1": "SUM(Order.totalDiscount) for all orders",
"5-0": "**Refunds** \nTotal refunds over the period selected.",
"5-1": "SUM(Order.totalRefund) for all orders",
"6-0": "**No. Orders** \nTotal number of orders over the period selected.",
"6-1": "COUNT(Order.id) for all orders",
"7-0": "**Avg. net sale** \nAverage net sale over the period selected.",
"7-1": "Net sales of all orders / COUNT(Order.id) for all orders"
},
"cols": 2,
"rows": 8,
"align": [
"left",
"left"
]
}
[/block]

## Business insights

The Business insights section provides the following metrics:

- Discount rate
- Dispute rate
- Refund rate
- Chargeback rate

All metrics and graphs are produced for the date range you selected.

On entering the page, the New vs existing customers graph is displayed.

You can also select Top products by revenue and Top payment methods by revenue to gain further insights into the buying habits of the company’s customers.

![Dropdown display options](https://files.readme.io/b8851cf-VfC_Img2.png)

The following table lists which metrics are provided, their formulas, and where applicable provides examples, for the Business insights section:

[block:parameters]
{
"data": {
"h-0": "Metric",
"h-1": "Formula",
"0-0": "**Discount rate** \nThe percentage of orders which are discounted (COUNT based).",
"0-1": "(b / a )\\_ 100 = X in percentage \n \na. count of all orders \n \nb. count the number of orders with discounts, i.e. any order where totalDiscount is non-zero or has a non-null value",
"1-0": "**Dispute Rate ** \nThe percentage of transactions which are disputed.",
"1-1": "“What percentage of X is Y?” where X is Transaction and Y is Disputes. \n \n((Count of Dispute) / (Count of all Transactions on Account)) \\_ 100",
"2-0": "**Refund rate** \nThe percentage of orders refunded.",
"2-1": "(b / a) \\_ 100 = X in percentage \n \na. count of all orders \n \nb. count the number of orders with refunds i.e. any order where totalRefund is non-zero or has a non-null value",
"3-0": "**Chargeback Rate** \nThe percentage of transactions which are disputed as chargebacks.",
"3-1": "((Count of Dispute where status is lost) / (Count of all Transactions on Account)) \\_ 100",
"4-0": "**New vs existing customers** The order revenue generated in a given month, split by customers who have had an order made in any previous month, and those who have not. ",
"4-1": "All order revenue where the createdDate falls within the given month, split by: \n \n`Existing`. all order revenue for the month, in which the associated customer has one or more orders’ createdDate in any previous month \n \n`New`. all order revenue for the month, in which the associated customer has no orders’ createdDate in any previous months",
"5-0": "**Top products by revenue** \nThose products producing the most revenue for the selected date range.",
"5-1": "1. For all Order’s line items, COUNT(productRef) \n2. For those productRef sum-up the totalAmount to get revenue \n3. Sort and present the top 5 in order of revenue",
"6-0": "**Top payment methods by revenue** \nThe payment methods which have been recorded with the most cumulative value.",
"6-1": "1. How many payments for a given type (i.e. count the number of Payments for each respective type: Cash, Card, Invoice, Unknown, etc) \n2. Sum up payments.amount for each type. \n3. Sort and present by: \n* Highest sum value \n* Number of Payments"
},
"cols": 2,
"rows": 7,
"align": [
"left",
"left"
]
}
[/block]
