---
title: "Sync for Commerce data model"
description: "Important configuration properties required to enable data synchronization"
createdAt: "2019-01-17T13:39:22.416Z"
updatedAt: "2022-10-06T12:22:19.225Z"
---

## Company configuration

| Field | Type | Description |
|---|---|---|
| companyId | uuid read-only | Codat identifier for the company to which this configuration belongs. |
| accountingSoftwareCompanyName | string, read-only | Name of the company as recorded in the linked accounting software. |
| enabled | boolean | Whether synchronization is turned on or off. |
| schedule | [Schedule](/sfc/sync-for-commerce-knowledge-base/sync-data-model#schedule) | Sync frequency and timing. |
| configuration | [Synchronization configuration](/sfc/sync-for-commerce-knowledge-base/sync-data-model#synchronization-configuration) | Configuration of sync accounts and grouping. |

## Schedule

| Field | Type | Description |
|---|---|---|
| selectedFrequency | string (must appear in frequencyOptions) | Interval, from frequencyOptions, at which the synchronization should run. |
| frequencyOptions | Array of string read-only | Valid options for selectedFrequency. |
| startDate | DateTime | Date on which the first synchronization starts. If no time is specified, the sync time is 00:00. The first sync runs in the first syncHourUtc after the start date. Attempting to queue a sync before the start date produces a 500 error. The synchronization start date can't be backdated. |
| syncHourUtc | integer | Hour of the day in which the synchronization runs. This is the earliest the synchronization can begin, but due to processing time it may not run exactly on the hour. |

## Synchronization configuration

| Field | Type | Description |
|---|---|---|
| sales | Sales | Mapping configuration for sales data. |
| payments | Payments | Mapping configuration for payments data. |
| fees | Fees | Mapping configuration for fees data. |

## Sales

| Field | Type | Description |
|---|---|---|
| syncSales | boolean | Whether or not sales data is synchronised to accounting software. This must be turned on to enable payments data synchronization. |
| accounts | Dictionary of AccountType to Account | Nominal account to push to for each type of sales data. |
| invoiceStatus | InvoiceStatus | Status invoices are raised as. |
| salesCustomer | SalesCustomer | Customer invoices are raised against. |
| taxRates | Dictionary of decimal to TaxRates | Mapping of numeric tax rates to rates defined within the accounting software. The key represents the numeric rate. For example, 17.5% tax is expressed as a key of "17.5". |
| grouping | Grouping | Specification of how sales data is grouped when pushing to accounting software. For more information, see Mapping and grouping. |

## Invoice status

| Field | Type | Description |
|---|---|---|
| selectedInvoiceStatus | string | Chosen initial status for invoices created in the accounting software to represent sales transactions. |
| invoiceStatusOptions | Array of string read-only | List of the possible initial statuses for invoices created in the accounting software. |

## Sales customer

| Field | Type | Description |
|---|---|---|
| selectedCustomerId | string (must be an id contained in ` customerOptions) | ID of the chosen customer from the accounting software. The ID is linked to created invoices, which represent sales transactions. |
| customerOptions | Array of Option read-only | List of possible customers from the accounting software. |

## Tax rates

| Field | Type | Description |
|---|---|---|
| selectedTaxRateId | string (Must be an id contained in taxRateOptions) | ID of the tax rate selected from the taxRateOptions. |
| taxRateOptions | Array of Option read-only | List of names and corresponding IDs for tax rates in the destination accounting package. |

## Options

| Field | Type | Description |
|---|---|---|
| name | string read-only | Display name of the option. In an HTML implementation, this must be contained in the body of an <option\> tag. |
| id | string read-only | Identifier for the option which is posted back to the configuration. In an HTML implementation, this must be contained in the value attribute of an <\option> tag. |
| classification | string read-only Only returned for Account options. | Type of the account, either nominal or bank. |

## Groupings

| Field | Type | Description |
|---|---|---|
| groupingPeriod | GroupingPeriod |  |
| groupingLevels | GroupingLevel | Type of the account, either nominal or bank. |

### Grouping periods

The grouping period specifies the time interval at which to create invoices, and assumes that if this value is set, it is more frequent than the specified sync frequency.

| Field | Type | Description |
|---|---|---|
| selectedGroupingPeriod | string (Must be contained in groupingPeriodOptions) | A single text value selected from the groupingPeriodOptions, which represents the frequency at which to generate separate invoices. |
| groupingPeriodOptions | Array of string | List of valid grouping period options. Currently the only option available is daily. |

### Grouping levels

There are two levels at which grouping can be performed:

- Invoice level specifies the criteria for grouping purchases on a single invoice.
- Invoice line level specifies how each invoice is then be subdivided.

Only optional grouping levels are included as options. Required grouping levels, such as currency and tax rate are set by default and so are not listed as possible options.

The structure for both of these sections is the same:

| Field | Type | Description |
|---|---|---|
| selectedGroupByOptions | tbc | List of the chosen options which represents a subset of the available groupByOptions. An empty list represents that no additional parameters have been specified to group by. |
| groupByOptions | tbc | List of available options for each of the selectedGroupByOptions. |

## Payments

| Field | Type | Description |
|---|---|---|
| syncPayments | boolean | Whether or not payments data is synchronised to accounting software. |
| accounts | Dictionary of AccountType to Account | Account to push to for each payment type. |

## Fees

| Field | Type | Description |
|---|---|---|
| syncFees | boolean | Whether or not to synchronise fees data to the accounting software. |
| accounts | Dictionary of AccountType to Account | Account to push to for each fee type. |

## Account types

This is an enum of different types of nominal or bank accounts that are created and synchronised within the accounting software. Depending on which sales or payment types your system is creating, you must configure accounts within the accounting software for each of these data types. Configure an existing account by selecting the account ID within the relevant section of the configuration. Create new accounts by calling the New Account Endpoint with **accountType** set to the relevant enum value.

| Name | Section |
|---|---|
| sales | Sales |
| gratuity | Sales |
| refund | Sales |
| cash | Payments |
| card | Payments |
| invoice | Payments |
| onlineCard | Payments |
| swish | Payments |
| vipps | Payments |
| mobile | Payments |
| storeCredit | Payments |
| paypal | Payments |
| custom | Payments |
| paymentFee | Fees |
| paymentFeeRefund | Fees |
| loan | Payments |
| loanFee | Fees |
| cashback | Payments |
| prePaid | Payments |

## Accounts

| Field | Type | Description |
|---|---|---|
| labelText | string read-only | Display name for this account. |
| descriptionText | string read-only | Friendly description of the data pushed to this account. |
| selectedAccountId | string (Must be an id contained in accountOptions) | ID of the account in the accountancy package selected from the options that correspond to this account. |
| accountOptions | Array of Option read-only | The list of available accounts. See AccountOptions |
