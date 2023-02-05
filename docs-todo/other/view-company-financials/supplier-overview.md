---
title: "Supplier overview"
createdAt: "2020-10-07T09:43:00.710Z"
updatedAt: "2020-10-30T11:15:18.153Z"
---

The supplier overview allows you to view summary metrics, trends, and a detailed breakdown of money the company owes to their suppliers or creditors. This article provides:

- Descriptions of the data displayed.
- Descriptions of metrics available for selection.
- Default date settings.

:::info Formulas for calculating key metrics
Select **Help?** from the top navigation of the Codat portal to view the formulas used to calculate key metrics.

If data in the supplier overview is unavailable, please read [Using the dashboards](https://docs.codat.io/docs/using-the-dashboards) for information on how to resolve this.

## Summary metrics

View key metrics for the company's outstanding debt for the selected period.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"h-2": "Formula",
"0-0": "**No. Bills Outstanding**",
"1-0": "**Total Owed**",
"0-1": "Total number of bills that remain unpaid or partially paid.",
"1-1": "Total value of outstanding bills. This is the total amount of cash that the company owes to their suppliers.",
"2-0": "**Days Payable Outstanding**",
"2-1": "The average number of days that the company took to pay a bill, taking into account all paid bills for the latest 365 days of available data. These are also known as creditor days."
},
"cols": 2,
"rows": 3
}
[/block.

## Default date settings

The default date range shows the latest 12 complete months of available data. You can select your own date range within the following limits:

- Start month - The earliest full month where data has synced successfully.
- End month - The most recent full month where data has synced successfully..

## Top five suppliers

Key metrics for the top suppliers or creditors to which the company owes money, in descending order, for the selected date range. See [Company overview](https://docs.codat.io/docs/company-overview#section-suppliers) for a full description of the key metrics..

## All suppliers

A detailed breakdown of expenditure, credit, and debt management by supplier. Suppliers are listed in descending order by the proportion of the company's expenditure that they are owed.
[block:parameters]
{
"data": {
"h-0": "Data",
"h-1": "Description",
"0-0": "**Supplier Name**",
"1-0": "**Concentration %** ",
"2-0": "**Total Owed** ",
"3-0": "**Days Payable Outstanding**",
"4-0": "**No. Bills Outstanding**",
"0-1": "Name of the supplier as recorded in the accounting system, typically the company name.",
"1-1": "Proportion of the company's total bills owed to the supplier.",
"2-1": "Total value of the company's unpaid bills, not including bill credit notes.",
"3-1": "Average number of days it takes a company to pay their outstanding bills over the last 365 days.",
"4-1": "Total number of bills that remain unpaid or partially paid."
},
"cols": 2,
"rows": 5
}
[/block]
Selecting a report line provides a detailed breakdown of the same metrics for an individual supplier along with a list of all bills issued by the supplier.
