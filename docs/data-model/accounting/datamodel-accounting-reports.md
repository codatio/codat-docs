---
title: "Reports: Aged Debtors and Creditors"
description: "Generate Aged Debtors and Aged Creditors reports for a company"
createdAt: "2019-04-05T16:01:03.616Z"
updatedAt: "2022-09-16T09:58:55.548Z"
---

## Overview

You can generate Aged Debtors and Aged Creditors reports for a company based on recently synced data from your customers' accounting platforms. Both of these reports are available in the **Reports** tab in the Codat portal.

- The Aged Debtors report shows the total outstanding balance due from customers to the business over time.
- The Aged Creditors report shows the total balance owed by a business to its suppliers over time.

Total assets or liabilities are grouped into 30-day periods for each customer or supplier, up to the current date. You can adjust the report date, period length, and number of periods to show on each report. The data can be grouped by customer or currency.

:::caution Write-offs

It is not guaranteed that write-offs are included in the Aged Debtors and Aged Creditors reports.
:::

## Underlying data

The Aged Debtors and Aged Creditors reports are generated from a set of required data types, as described in the table below.

To generate these reports, the underlying data types must have been synced within 24 hours of each other. Otherwise the following error is displayed when you try to run the report:

<img
  src="https://files.readme.io/ac00374-aged-report-unavailable-error.png"
  alt="Error message: Aged credit report is unavailable due to datasets being out of date with each other. Please click here to run a new sync of the data required."
/>

Sync the required data types by clicking the link in the error, and then run the report again.

The following table lists the required data types for each report:
[block:parameters]
{
"data": {
"h-0": "Aged Debtors Report",
"h-1": "Aged Creditors Report",
"0-0": "[Customers](/datamodel-accounting-customers)",
"1-0": "[Invoices](/datamodel-accounting-invoices)",
"2-0": "[Credit notes](/datamodel-accounting-creditnotes)",
"3-0": "[Payments](/datamodel-accounting-payments)",
"0-1": "[Suppliers](/datamodel-accounting-suppliers)",
"1-1": "[Bills](/datamodel-accounting-bills)",
"2-1": "[Bill credit notes](/datamodel-accounting-billcreditnotes)",
"3-1": "[Bill payments](/datamodel-accounting-billpayments)"
},
"cols": 2,
"rows": 4
}
[/block]

:::info Reports run on issue date

The Aged Debtors and Aged Creditors reports run based on the issue dates of the underlying data types rather than the due date.
:::

## Generating the Aged Debtors and Aged Creditors reports

1. In the navigation bar, click **Companies**.
2. Click the name of the company you want to generate the report for.
   The company's data page is displayed.
3. Click the **Accounting** tab then click **Reports**.
4. Select either **Aged Debtors** or **Aged Creditors**.
5. (Optional) Edit the default reporting parameters.
   1. You can change the report date in the **Date** box. By default, the report includes transactions that occurred up to but not including today's date. To include transactions for today, enter tomorrow's date. For example, to include customer payments made today in the Aged Debtors report, enter tomorrow's date.
   2. In the **Period Length Days** box, select the default period length for each column (the default is 30 days).
   3. In the **Number of Periods** box, enter the number of periods to show as columns in the report (the default is 4 periods).
6. To run the report, click **Load aged debtors** or **Load aged creditors**.

<img src="https://files.readme.io/4b251dc-redesigned-aged-debtors-report.png" />

7. The report is generated and displayed at the bottom of the page.

## Accessing the Aged Debtors and Creditors Reports using the API

You can also return the Aged Debtors and Aged Creditors reports as JSON and query whether the reports are available.

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Reports" target="_blank">Reports</a> endpoints in Swagger.

The structure of the report will be as the example below:

## Data Model

[block:parameters]
{
"data": {
"0-0": "generated",
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-1": "Date",
"0-2": "Date that the report was generated or calculated from the underlying data",
"1-0": "reportDate",
"1-1": "_string_
See [date](/datamodel-shared-date)",
"1-2": "Date that the report was generated for. This can be specified when calling the API.",
"2-0": "**Aged Debtors**
data.CustomerId
data.CustomerName

or

**Aged Creditors**
data.SupplierId
data.SupplierName",
"2-1": "_string_",
"2-2": "Id and name of the customer or supplier that owes or is owed money.",
"3-0": "data.agedCurrencyOutstanding",
"3-1": "array",
"3-2": "An `agedCurrencyOutstanding` object will be returned for each currency that money is due or owed."
},
"cols": 3,
"rows": 4
}
[/block.

## Aged Currency Outstanding

[block:parameters]
{
"data": {
"0-0": "currency",
"3-0": "agedOutstandingAmounts.toDate",
"4-0": "agedOutstandingAmounts.amount",
"2-0": "agedOutstandingAmounts.fromDate",
"5-0": "agedOutstandingAmounts.details",
"1-0": "agedOutstandingAmounts",
"0-1": "_string_
See [currency](/datamodel-shared-currency)",
"0-2": "The currency of the amount due from the customer or owed to the supplier",
"1-1": "array",
"2-1": "_string_
See [date](/datamodel-shared-date)",
"3-1": "_string_
See [date](/datamodel-shared-date)",
"2-2": "The start date of the period",
"1-2": "Each `agedOutstandingAmount` object contains a 30 day period detailing the monies due or owed from that period.",
"3-2": "The end date of the period",
"4-1": "_decimal_",
"4-2": "The amount due or owed",
"5-1": "_array_",
"5-2": "A list of summaries showing from where the money is due or owed. For example, whether the amount due is from outstanding invoices or unspent credit notes.",
"6-0": "agedOutstandingAmounts.details.name",
"7-0": "agedOutstandingAmounts.details.amount",
"6-1": "_string_",
"7-1": "_decimal_",
"6-2": "The name of the type of record where the money is due or owed.

For example `Invoices`, `CreditNotes`, `Bills` or `BillCreditNotes`",
"7-2": "The amount due or owed"
},
"cols": 3,
"rows": 8
}
[/block]

## Example data

```
{
"generated": "2022-09-16T09:45:08.5703344Z",
"reportDate": "2022-09-16T09:45:08.3551499Z",
"data": [
  {
    "customerId": "305ca5cf-497d-4fee-a161-cdb30e6be989",
    "customerName": "Basket Case",
    "agedCurrencyOutstanding": [
      {
        "currency": "GBP",
        "agedOutstandingAmounts": [
          {
            "fromDate": "2022-08-16T00:00:00",
            "toDate": "2022-09-16T00:00:00",
            "amount": 794.55,
            "details": [
              {
                "name": "CreditNotes",
                "amount": -120
              },
              {
                "name": "Invoices",
                "amount": 914.55
              }
            ]
          }
        ]
      }
    ]
  }
]
}
```

The report will be grouped per customer or supplier and will be grouped depending on the periods requested. The details indicates whether the amounts owed come from outstanding invoices, bills, credit notes or bill credit notes.
