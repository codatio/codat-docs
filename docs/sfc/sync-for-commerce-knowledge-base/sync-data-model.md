---
title: "Sync for Commerce data model"
description: "Important configuration properties required to enable data synchronization"
createdAt: "2019-01-17T13:39:22.416Z"
updatedAt: "2022-10-06T12:22:19.225Z"
---

## Company configuration

| Field | Type | Description |
|---|---|---|
| companyId | _uuid_, read-only | Codat identifier for the company to which this configuration belongs. |
| accountingSoftwareCompanyName | _string_, read-only | Name of the company as recorded in the linked accounting software. |
| enabled | _boolean_ | Whether synchronization is turned on or off. |
| schedule | See [_Schedule_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#schedule) | Sync frequency and timing. |
| configuration | See [_Synchronization configuration_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#synchronization-configuration) | Configuration of sync accounts and grouping. |

## Schedule

| Field | Type | Description |
|---|---|---|
| selectedFrequency | _string_ (must appear in **frequencyOptions**) | Interval, from **frequencyOptions**, at which the synchronization should run. |
| frequencyOptions | _Array of string_, read-only | Valid options for **selectedFrequency**. |
| startDate | _DateTime_ | Date on which the first synchronization starts. If no time is specified, the sync time is 00:00. The first sync runs in the first **syncHourUtc** after the start date. <br/> Attempting to queue a sync before the start date produces a 500 error. The synchronization start date can't be backdated. |
| syncHourUtc | integer | Hour of the day in which the synchronization runs. This is the earliest the synchronization can begin, but due to processing time it may not run exactly on the hour. |

## Synchronization configuration

| Field | Type | Description |
|---|---|---|
| sales | [_Sales_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#sales) | Mapping configuration for sales data. |
| payments | [_Payments_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#payments) | Mapping configuration for payments data. |
| fees | [_Fees_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#fees) | Mapping configuration for fees data. |

## Sales

| Field | Type | Description |
|---|---|---|
| syncSales | _boolean_ | Whether or not sales data is synchronized to accounting software. This must be turned on to enable payments data synchronization. |
| accounts | _Dictionary of [AccountType](/sfc/sync-for-commerce-knowledge-base/sync-data-model#account-types) to [Account](/sfc/sync-for-commerce-knowledge-base/sync-data-model#accounts)_ | Nominal account to push to for each type of sales data. |
| invoiceStatus | [_InvoiceStatus_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#invoice-status) | Status invoices are raised as. |
| salesCustomer | [_SalesCustomer_](/sfc/sync-for-commerce-knowledge-base/sync-data-model#sales-customer) | Customer invoices are raised against. |
| taxRates | _Dictionary of decimal to [TaxRates](/sfc/sync-for-commerce-knowledge-base/sync-data-model#tax-rates)_ | Mapping of numeric tax rates to rates defined within the accounting software. The key represents the numeric rate. For example, 17.5% tax is expressed as a key of "17.5". |
| grouping | _Grouping_ | Specification of how sales data is grouped when pushing to accounting software. |

## Invoice status

| Field | Type | Description |
|---|---|---|
| selectedInvoiceStatus | _string_ | Chosen initial status for invoices created in the accounting software to represent sales transactions. |
| invoiceStatusOptions | _Array of string_, read-only | List of the possible initial statuses for invoices created in the accounting software. |

## Sales customer

| Field | Type | Description |
|---|---|---|
| selectedCustomerId | _string_ (must be an **id** contained in `customerOptions`) | ID of the chosen customer from the accounting software. The ID is linked to created invoices, which represent sales transactions. |
| customerOptions | _[Array of Options](/sfc/sync-for-commerce-knowledge-base/sync-data-model#options)_, read-only | List of possible customers from the accounting software. |

## Tax rates

| Field | Type | Description |
|---|---|---|
| selectedTaxRateId | _string_ (Must be an id contained in `taxRateOptions`) | ID of the tax rate selected from the taxRateOptions. |
| taxRateOptions | _[Array of Options](/sfc/sync-for-commerce-knowledge-base/sync-data-model#options)_, read-only | List of names and corresponding IDs for tax rates in the destination accounting package. |

## Options

| Field | Type | Description |
|---|---|---|
| name | _string_, read-only | Display name of the option. In an HTML implementation, this must be contained in the body of an `<option\>` tag. |
| id | _string_, read-only | Identifier for the option which is posted back to the configuration. In an HTML implementation, this must be contained in the `value` attribute of an `<\option>` tag. |
| classification | _string_, read-only <br/> Only returned for Account options. | Type of the account, either `nominal` or `bank`. |

## Groupings

| Field | Type | Description |
|---|---|---|
| groupingPeriod | _[GroupingPeriod](/sfc/sync-for-commerce-knowledge-base/sync-data-model#grouping-periods)_ |  |
| groupingLevels | _[GroupingLevel](/sfc/sync-for-commerce-knowledge-base/sync-data-model#grouping-levels)_ | Type of the account, either nominal or bank. |

### Grouping periods

The grouping period specifies the time interval at which to create invoices, and assumes that if this value is set, it is more frequent than the specified sync frequency.

| Field | Type | Description |
|---|---|---|
| selectedGroupingPeriod | _string_ (Must be contained in **groupingPeriodOptions**) | A single text value selected from the **groupingPeriodOptions**, which represents the frequency at which to generate separate invoices. |
| groupingPeriodOptions | _Array of string_ | List of valid grouping period options. Currently the only option available is daily. |

### Grouping levels

There are two levels at which grouping can be performed:

- Invoice level specifies the criteria for grouping purchases on a single invoice.
- Invoice line level specifies how each invoice is then be subdivided.

Only optional grouping levels are included as options. Required grouping levels, such as currency and tax rate are set by default and so are not listed as possible options.

The structure for both of these sections is the same:

| Field | Type | Description |
|---|---|---|
| selectedGroupByOptions |  | List of the chosen options which represents a subset of the available **groupByOptions**. An empty list represents that no additional parameters have been specified to group by. |
| groupByOptions |  | List of available options for each of the **selectedGroupByOptions**. |

## Payments

| Field | Type | Description |
|---|---|---|
| syncPayments | _boolean_ | Whether or not payments data is synchronized to accounting software. |
| accounts | _Dictionary of [AccountType](/sfc/sync-for-commerce-knowledge-base/sync-data-model#account-types) to [Account](/sfc/sync-for-commerce-knowledge-base/sync-data-model#accounts)_ | Account to push to for each payment type. |

## Fees

| Field | Type | Description |
|---|---|---|
| syncFees | _boolean_ | Whether or not to synchronize fees data to the accounting software. |
| accounts | _Dictionary of [AccountType](/sfc/sync-for-commerce-knowledge-base/sync-data-model#account-types) to [Account](/sfc/sync-for-commerce-knowledge-base/sync-data-model#accounts)_ | Account to push to for each fee type. |

## Account types

This is an enum of different types of nominal or bank accounts that are created and synchronized within the accounting software. Depending on which sales or payment types your system is creating, you must configure accounts within the accounting software for each of these data types.  
Configure an existing account by selecting the account ID within the relevant section of the configuration.   
Create new accounts by calling the New Account Endpoint with **accountType** set to the relevant enum value.

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
| labelText | _string, read-only_ | Display name for this account. |
| descriptionText | _string, read-only_ | Friendly description of the data pushed to this account. |
| selectedAccountId | _string_ (Must be an id contained in **accountOptions**) | ID of the account in the accountancy package selected from the options that correspond to this account. |
| accountOptions | _[Array of Options](/sfc/sync-for-commerce-knowledge-base/sync-data-model#options)_, read-only | The list of available accounts. See AccountOptions |
