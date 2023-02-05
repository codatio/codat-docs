---
title: "Customer overview"
createdAt: "2020-10-07T09:36:54.154Z"
updatedAt: "2020-10-30T11:16:40.910Z"
---

The customer overview allows you to view summary metrics, trends, and a detailed breakdown of money owed by the company's customers or debtors. This article provides:

- Descriptions of the data displayed.
- Descriptions of metrics available for selection.
- Default date settings.

:::info Formulas for calculating key metrics
Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.

If data in the customer overview is unavailable, please read [Using the dashboards](https://docs.codat.io/docs/using-the-dashboards) for information on how to resolve this.

## Summary metrics

View key metrics for outstanding customer debt for the selected period.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"h-2": "Formula",
"0-0": "**No. Invoices Outstanding**",
"1-0": "**Total Owed**",
"0-1": "Total number of invoices that remain unpaid or partially paid.",
"1-1": "Total value of outstanding invoices. This is the total amount of cash that customers owe to the company.",
"2-0": "**Days Sales Outstanding**",
"2-1": "The average number of days that a customer took to pay an invoice, taking into account all paid invoices for the latest 365 days of available data. These are also known as debtor days."
},
"cols": 2,
"rows": 3
}
[/block.

## Default date settings

The default date range shows the latest 12 complete months of available data. You can select your own date range within the following limits:

- Start month - The earliest full month where data has synced successfully.
- End month - The most recent full month where data has synced successfully..

## Top five customers

Key metrics for the company's top five revenue generating customers, in descending order, for the selected date range. See [Company overview](https://docs.codat.io/docs/company-overview#section-customers) for a full description of the key metrics..

## All customers

A detailed breakdown of revenue generated, money owed, and debt management by customer. Customers are listed in descending order by the proportion of the company's revenue they contribute.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"0-0": "**Customer Name** ",
"1-0": "**Reference** ",
"2-0": "**Concentration %** ",
"3-0": "**Total Owed** ",
"4-0": "**Days Sales Outstanding** ",
"5-0": "**No. Invoices Outstanding** ",
"0-1": "Name of the customer as recorded in the accounting system, typically the company name.",
"1-1": "Reference on invoices issued to the customer.",
"2-1": "Proportion of the company's total revenue from the customer.",
"3-1": "Total value of the customer's unpaid invoices, not including credit notes.",
"4-1": "Average number of days it takes a customers to pay their outstanding invoices over the last 365 days.",
"5-1": "Total number of invoices that remain unpaid or partially paid."
},
"cols": 2,
"rows": 6
}
[/block]
Selecting a report line provides a detailed breakdown of the same metrics for an individual customer along with a list of all invoices issued to that customer.
