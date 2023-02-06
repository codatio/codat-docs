---
title: "Company overview"
createdAt: "2020-10-07T09:10:02.590Z"
updatedAt: "2020-10-30T11:15:58.463Z"
---

The company overview shows a snapshot of the financial health of an individual company. This article provides:

- Descriptions of the data displayed.
- Descriptions of metrics available for selection.
- Default date settings.

:::info Formulas for calculating key metrics
Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.

If data in the company overview is unavailable, please read [Using the dashboards](/using-the-dashboards) for information on how to resolve this.

## Summary metrics

Compare the open accounts receivables yet to be collected with open accounts payable which will need to be paid.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"h-2": "Formula",
"0-0": "**Total Owed by Customers**",
"1-0": "**Total Owed to Suppliers**",
"0-1": "Total value of outstanding invoices. This is the total amount of cash the company is due to receive from its customers.",
"1-1": "Total value of outstanding bills. This is the total amount of cash that the company owes to its suppliers."
},
"cols": 2,
"rows": 2
}
[/block]

## Profit and loss

The company's profitability over the selected date range. This section summarises the revenue, costs, and expenses of a business.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"0-0": "**Net Profit** ",
"1-0": "**Operating Profit** ",
"0-1": "Total net profit across the selected date range in the company’s base currency. The profitability of the company.",
"2-0": "**Net Profit Margin** ",
"3-0": "**Income** ",
"4-0": "**Expenses** ",
"1-1": "Total operating profit across the selected date range in the company’s base currency. This is the amount left over to pay the company's investors and taxes.",
"2-1": "The percentage of profit generated from revenue after accounting for all expenses, costs, and cash flow items.",
"3-1": "Total income for the selected date range. This gives an indication of the size of the business.",
"4-1": "The company's costs for the selected date range, including the cost of sales and expenses."
},
"cols": 2,
"rows": 5
}
[/block.

## Default date settings

The default date range shows the latest 12 complete months of available data. You can select your own date range within the following limits:

- Start month - The earliest full month where data has synced successfully.
- End month - The most recent full month where data has synced successfully..

## Balance sheet

A statement of the company's financial position at the end of the selected month. This section summarises the assets, liabilities, and equity of the company at a specific moment in time.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"0-0": "**Net Assets** ",
"1-0": "**Equity** ",
"2-0": "**Debt to Assets** ",
"3-0": "**Assets** ",
"4-0": "**Liabilities** ",
"0-1": "The net assets line of the balance sheet, including fixed and current assets. This is what a company owns minus what it owes.",
"1-1": "The total equity line of the balance sheet, including the retained and current year earnings. This is the financial equity in the company minus what it owes.",
"2-1": "The debt to assets ratio. The percentage of assets that are being financed with debt.",
"3-1": "Total value of the company's assets.",
"4-1": "Total value of the company's liabilities."
},
"cols": 2,
"rows": 5
}
[/block.

## Default date settings

The default date shows the latest complete month of available data. You can select your own date range within the following limits:

- Earliest month - The earliest full month where data has synced successfully.
- Latest month - The most recent full month where data has synced successfully..

## Customers

Key metrics for the company's top five revenue generating customers, in descending order, for the selected date range. All remaining customers are grouped as **Other customers**.
[block:parameters]
{
"data": {
"h-0": "Metric",
"h-1": "Description",
"0-0": "**Avg. Payment Terms** (Default)",
"1-0": "**Avg. Payment Days** ",
"2-0": "**Concentration %** ",
"3-0": "**Avg. Invoice Amount** ",
"4-0": "**Paid vs Outstanding** ",
"0-1": "Weighted average payment terms for invoices. The average number of days the company gives their customer to pay an invoice, taking into account all invoices during the selected period.",
"1-1": "The average number of days that a customer took to pay an invoice, taking into account all paid invoices during the selected period. These are also known as debtor days.",
"2-1": "The proportion of the company's total revenue from a customer.",
"3-1": "The average revenue generated for a customer over the selected period.",
"4-1": "The proportion of invoices paid compared to those outstanding for a customer."
},
"cols": 2,
"rows": 5
}
[/block.

## Default date settings

The default date range shows the latest 12 complete months of available data. You can select your own date range within the following limits:

- Start month - The earliest full month where data has synced successfully.
- End month - The most recent full month where data has synced successfully..

## Suppliers

Key metrics for the top suppliers or creditors, in descending order, to which the company owes money for the selected date range. All remaining suppliers are grouped as **Other suppliers**.
[block:parameters]
{
"data": {
"h-0": "Metric",
"h-1": "Description",
"0-0": "**Avg. Payment Terms** (Default)",
"0-1": "Weighted average payment terms for bills. The average number of days the company takes to pay a bill, taking into account all bills during the selected period.",
"1-0": "**Avg. Payment Days**",
"2-0": "**Concentration %**",
"3-0": "**Avg. Bill Amount**",
"4-0": "**Paid vs Outstanding**",
"1-1": "The average number of days that the company took to pay a bill from their supplier, taking into account all paid bills during the selected period. These are also known as creditor days.",
"2-1": "The proportion of the company's total bills owed to each supplier.",
"3-1": "The average expenditure owed to a customer over the selected period.",
"4-1": "The proportion of bills paid compared to those outstanding for a supplier."
},
"cols": 2,
"rows": 5
}
[/block]
