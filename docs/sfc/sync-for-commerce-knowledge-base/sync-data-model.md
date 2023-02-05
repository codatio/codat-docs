---
title: "Sync for Commerce data model"
description: "Important configuration properties required to enable data synchronization."
createdAt: "2019-01-17T13:39:22.416Z"
updatedAt: "2022-10-06T12:22:19.225Z"
---

## Company configuration

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**companyId**",
"0-1": "_uuid_
_read-only_",
"1-0": "**accountingSoftwareCompanyName** ",
"1-1": "_string_,
_read-only_",
"2-0": "**enabled** ",
"2-1": "_boolean_",
"3-0": "**schedule** ",
"3-1": "[_Schedule_](#schedule)",
"4-0": "**configuration** ",
"4-1": "[_Synchronisation configuration_](#configuration)",
"h-2": "Description",
"0-2": "Codat identifier for the company to which this configuration belongs.",
"1-2": "Name of the company as recorded in the linked accounting software.",
"2-2": "Whether synchronisation is turned on or off.",
"3-2": "Sync frequency and timing.",
"4-2": "Configuration of sync accounts and grouping."
},
"cols": 3,
"rows": 5
}
[/block]

<a name="schedule"></a>

## Schedule

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**selectedFrequency** ",
"1-0": "**frequencyOptions** ",
"2-0": "**startDate** ",
"3-0": "**syncHourUtc** ",
"0-1": "_string_
(must appear in **frequencyOptions**)",
"1-1": "_Array of string_
_read-only_",
"2-1": "_DateTime_",
"3-1": "_integer_",
"h-2": "Description",
"0-2": "Interval, from **frequencyOptions**, at which the synchronisation should run.",
"1-2": "Valid options for **selectedFrequency**.",
"2-2": "Date on which the first synchronisation starts. If no time is specified, the sync time is 00:00. The first sync runs in the first **syncHourUtc** after the start date.

Attempting to queue a sync before the start date produces a 500 error. The synchronisation start date can't be backdated.",
"3-2": "Hour of the day in which the synchronisation runs. This is the earliest the synchronisation can begin, but due to processing time it may not run exactly on the hour."
},
"cols": 3,
"rows": 4
}
[/block]

<a name="configuration"></a>

## Synchronisation configuration

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**sales** ",
"0-1": "[_Sales_](#sales)",
"1-0": "**payments** ",
"1-1": "[_Payments_](#payments)",
"2-0": "**fees** ",
"2-1": "[_Fees_](#fees)",
"0-2": "Mapping configuration for sales data.",
"1-2": "Mapping configuration for payments data.",
"2-2": "Mapping configuration for fees data.",
"h-2": "Description"
},
"cols": 3,
"rows": 3
}
[/block]

<a name="sales"></a>

## Sales

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**syncSales** ",
"0-1": "_boolean_",
"1-0": "**accounts** ",
"2-0": "**invoiceStatus** ",
"3-0": "**salesCustomer** ",
"4-0": "**taxRates** ",
"1-1": "_Dictionary of [AccountType](#account-type) to [Account](#accounts)_",
"2-1": "[_InvoiceStatus_](#invoiceStatus)",
"3-1": "[_SalesCustomer_](#salesCustomer)",
"5-0": "**grouping** ",
"4-1": "_Dictionary of decimal to [TaxRates](#taxRates)_",
"5-1": "[_Grouping_](#grouping)",
"0-2": "Whether or not sales data is synchronised to accounting software. This must be turned on to enable payments data synchronisation.",
"1-2": "Nominal account to push to for each type of sales data.",
"2-2": "Status invoices are raised as.",
"3-2": "Customer invoices are raised against.",
"4-2": "Mapping of numeric tax rates to rates defined within the accounting software. The key represents the numeric rate. For example, 17.5% tax is expressed as a key of "17.5".",
"5-2": "Specification of how sales data is grouped when pushing to accounting software. For more information, see [Mapping and grouping](https://docs.codat.io/docs/mapping-and-grouping-1).",
"h-2": "Description"
},
"cols": 3,
"rows": 6
}
[/block]

<a name="invoiceStatus"></a>

## Invoice status

[block:parameters]
{
"data": {
"h-0": "Field",
"0-0": "**selectedInvoiceStatus** ",
"0-1": "_string_",
"1-0": "**invoiceStatusOptions** ",
"1-1": "_Array of string_
_read-only_",
"h-1": "Type",
"h-2": "Description",
"0-2": "Chosen initial status for invoices created in the accounting software to represent sales transactions.",
"1-2": "List of the possible initial statuses for invoices created in the accounting software."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="salesCustomer"></a>

## Sales customer

The sales customer is a single entity in the accounting package, and is shown as the recipient of the invoices. In the case of Xero, this is one of the available 'Contacts'.
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**selectedCustomerId** ",
"0-1": "_string_ (must be an **id** contained in `
**customerOptions**)",
"1-0": "**customerOptions** ",
"1-1": "_Array of [Option](#option)_
_read-only_",
"h-2": "Description",
"0-2": "ID of the chosen customer from the accounting software. The ID is linked to created invoices, which represent sales transactions.",
"1-2": "List of possible customers from the accounting software."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="taxRates"></a>

## Tax rates

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**selectedTaxRateId** ",
"1-0": "**taxRateOptions** ",
"1-1": "_Array of [Option](#option)_
_read-only_",
"0-1": "_string_
(Must be an **id** contained in **taxRateOptions**)",
"h-2": "Description",
"0-2": "ID of the tax rate selected from the **taxRateOptions**.",
"1-2": "List of names and corresponding IDs for tax rates in the destination accounting package."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="option"></a>

## Options

A generic model for representing options that are displayed to the user.
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_
_read-only_",
"0-2": "Display name of the option. In an HTML implementation, this must be contained in the body of an `<option>` tag.",
"1-0": "**id** ",
"1-1": "_string_
_read-only_",
"1-2": "Identifier for the option which is posted back to the configuration. In an HTML implementation, this must be contained in the `value` attribute of an `<option>` tag.",
"2-0": "**classification** ",
"2-1": "_string_
_read-only_

Only returned for Account options.",
"2-2": "Type of the account, either `nominal` or `bank`."
},
"cols": 3,
"rows": 3
}
[/block]

<a name="grouping"></a>

## Groupings

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**groupingPeriod** ",
"1-0": "**groupingLevels** ",
"0-1": "_[GroupingPeriod](#groupingPeriod)_",
"1-1": "_[GroupingLevel](#groupingLevel)_"
},
"cols": 3,
"rows": 2
}
[/block]

<a name="groupingPeriod"></a>

### Grouping periods

The grouping period specifies the time interval at which to create invoices, and assumes that if this value is set, it is more frequent than the specified sync frequency.
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "selectedGroupingPeriod",
"0-1": "_string_
(Must be contained in **groupingPeriodOptions**)",
"1-0": "groupingPeriodOptions",
"1-1": "_Array of string_",
"0-2": "A single text value selected from the **groupingPeriodOptions**, which represents the frequency at which to generate separate invoices.",
"1-2": "List of valid grouping period options. Currently the only option available is `daily`.",
"h-2": "Description"
},
"cols": 3,
"rows": 2
}
[/block]

<a name="groupingLevels"></a>

### Grouping levels

There are two levels at which grouping can be performed:

- Invoice level specifies the criteria for grouping purchases on a single invoice.
- Invoice line level specifies how each invoice is then be subdivided.

Only optional grouping levels are included as options. Required grouping levels, such as currency and tax rate are set by default and so are not listed as possible options.

The structure for both of these sections is the same:
[block:parameters]
{
"data": {
"0-0": "**selectedGroupByOptions** ",
"h-0": "Field",
"h-1": "Type",
"0-1": "_tbc_",
"1-0": "**groupByOptions** ",
"1-1": "_tbc_",
"h-2": "Description",
"0-2": "List of the chosen options which represents a subset of the available **groupByOptions**. An empty list represents that no additional parameters have been specified to group by.",
"1-2": "List of available options for each of the **selectedGroupByOptions**."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="payments"></a>

## Payments

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**syncPayments** ",
"1-0": "**accounts** ",
"1-1": "_Dictionary of [AccountType](#accountType) to [Account](#accounts)_",
"0-1": "_boolean_",
"h-2": "Description",
"0-2": "Whether or not payments data is synchronised to accounting software.",
"1-2": "Account to push to for each payment type."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="fees"></a>

## Fees

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**syncFees** ",
"1-0": "**accounts** ",
"1-1": "_Dictionary of [AccountType](#accountType) to [Account](#accounts)_",
"0-1": "_boolean_",
"0-2": "Whether or not to synchronise fees data to the accounting software.",
"1-2": "Account to push to for each fee type."
},
"cols": 3,
"rows": 2
}
[/block]

<a name="accountType"></a>

## Account types

This is an enum of different types of nominal or bank accounts that are created and synchronised within the accounting software. Depending on which sales or payment types your system is creating, you must configure accounts within the accounting software for each of these data types. Configure an existing account by selecting the account ID within the relevant section of the configuration. Create new accounts by calling the New Account Endpoint with **accountType** set to the relevant enum value.
[block:parameters]
{
"data": {
"h-0": "Name",
"h-1": "Section",
"0-0": "sales",
"0-1": "Sales",
"1-0": "gratuity",
"1-1": "Sales",
"2-0": "refund",
"2-1": "Sales",
"3-0": "cash",
"4-0": "card",
"5-0": "invoice",
"6-0": "onlineCard",
"7-0": "swish",
"8-0": "vipps",
"9-0": "mobile",
"10-0": "storeCredit",
"11-0": "paypal",
"12-0": "custom",
"3-1": "Payments",
"4-1": "Payments",
"5-1": "Payments",
"6-1": "Payments",
"7-1": "Payments",
"8-1": "Payments",
"9-1": "Payments",
"10-1": "Payments",
"11-1": "Payments",
"12-1": "Payments",
"13-0": "paymentFee",
"13-1": "Fees",
"14-0": "paymentFeeRefund",
"14-1": "Fees",
"15-0": "loan",
"15-1": "Payments",
"16-0": "loanFee",
"16-1": "Fees",
"17-0": "cashback",
"17-1": "Payments",
"18-0": "prePaid",
"18-1": "Payments"
},
"cols": 2,
"rows": 19
}
[/block]

<a name="accounts"></a>

## Accounts

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"0-0": "**labelText** ",
"3-0": "**accountOptions** ",
"3-1": "_Array of [Option](#option)_
_read-only_",
"0-1": "_string_
_read-only_",
"2-0": "**selectedAccountId** ",
"2-1": "_string_
(Must be an **id** contained in **accountOptions**)",
"2-2": "ID of the account in the accountancy package selected from the options that correspond to this account.",
"3-2": "The list of available accounts. See [AccountOptions](#AccountOptions)",
"h-2": "Description",
"0-2": "Display name for this account.",
"1-0": "**descriptionText** ",
"1-1": "_string_
_read-only_",
"1-2": "Friendly description of the data pushed to this account."
},
"cols": 3,
"rows": 4
}
[/block]
