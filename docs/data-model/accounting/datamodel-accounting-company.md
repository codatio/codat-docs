---
title: "Company info"
description: "Standard details about a linked company such as their address, phone number, and company registration"
createdAt: "2019-02-20T13:10:43.444Z"
updatedAt: "2022-11-16T09:31:58.105Z"
---

Explore the company <a className="external" href="https://api.codat.io/swagger/index.html#/Info" target="_blank">Info</a> endpoints in Swagger.

View the coverage for company info in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=company" target="_blank">Data coverage explorer</a>.

:::info Company information or companies?
Company information is standard information that is held in the accounting platform about a company. [Companies](/codat-api#/operations/list-companies) is an endpoint that lists businesses in the Codat system that have linked and shared their data sources.
:::

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**companyName** ",
"1-0": "**accountingPlatformRef** ",
"2-0": "**companyLegalName** ",
"3-0": "**addresses** ",
"4-0": "**phoneNumbers** ",
"5-0": "**webLinks** ",
"7-0": "**registrationNumber** ",
"8-0": "**taxNumber** ",
"9-0": "**financialYearStartDate** ",
"10-0": "**baseCurrency** ",
"12-0": "**createdDate** ",
"0-1": "_string_ ",
"1-1": "_string_",
"2-1": "_string_",
"7-1": "_string_",
"8-1": "_string_",
"9-1": "_string_
See [date](/datamodel-shared-date)",
"10-1": "_string_
See [currency](/datamodel-shared-currency)",
"12-1": "_string_
See [date](/datamodel-shared-date)",
"3-2": "An array of [Addresses](#section-addresses).",
"4-2": "An array of [PhoneNumbers](#section-phone-numbers).",
"5-2": "An array of [WebLinks](#section-web-links).",
"0-2": "Name of the linked company.",
"1-2": "Identifier or reference for the company in the accounting platform.",
"2-2": "Registered legal name of the linked company.",
"7-2": "Registration number given to the linked company by the companies authority in the country of origin. In the UK this is Companies House.",
"8-2": "Company tax number.",
"9-2": "Start date of the financial year for the company.",
"10-2": "Currency set in the accounting platform of the linked company. Used by the [currency rate](/datamodel-shared-currencyrate).",
"12-2": "Date the linked company was created in the accounting platform.",
"11-0": "**sourceUrls** ",
"11-1": "_dictionary of strings_",
"11-2": "URL addresses for the accounting source.

For example, for Xero integrations two URLs are returned. These have many potential use cases, such as [deep linking](https://developer.xero.com/documentation/api-guides/deep-link-xero).",
"6-0": "**ledgerLockDate** ",
"6-1": "_string_ See [date](/datamodel-shared-date)",
"6-2": "If set in the accounting platform, the date (in the ISO 8601 date/time format) after which accounting transactions cannot be edited. Commonly used when books are closed at year-end."
},
"cols": 3,
"rows": 13
}
[/block.

### Addresses

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"1-0": "**line1** ",
"2-0": "**line2** ",
"3-0": "**city** ",
"4-0": "**region** ",
"5-0": "**country** ",
"6-0": "**postalCode** ",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_string_",
"4-1": "_string_",
"5-1": "_string_",
"6-1": "_string_",
"0-2": "Type of address, either:

- `Billing`
- `Delivery`
- `Unknown`",
  "1-2": "Line 1 of the address for the linked company.",
  "2-2": "Line 2 of the address for the linked company.",
  "3-2": "City address of the linked company.",
  "4-2": "Regional address of the linked company.",
  "5-2": "Country address of the linked company.",
  "6-2": "Postal code or zip code address of the linked company."
  },
  "cols": 3,
  "rows": 7
  }
  [/block.

### Phone numbers

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**number** ",
"1-0": "**type** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "Phone number of the linked company.",
"1-2": "Type of phone number, either:

- `Primary`
- `Landline`
- `Mobile`
- `Fax`
- `Unknown`"
  },
  "cols": 3,
  "rows": 2
  }
  [/block.

### Web links

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"1-0": "**url** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "Type of web link, either:

- `Website`
- `Social`
- `Unknown`",
  "1-2": "URL of a web link for a linked company"
  },
  "cols": 3,
  "rows": 2
  }
  [/block]

## Example data

```
{
"companyName": "ACME Corporation",
"accountingPlatformRef": "4444e827-401b-4925-92cb-d79086bf3b6b",
"companyLegalName": "ACME Corporation Ltd.",
"addresses": [
  {
    "type": "Billing",
    "line1": "Warner House",
    "line2": "98 Theobald's Road",
    "city": "London",
    "region": "",
    "country": "United Kingdom",
    "postalcode": "WC1X 8WB"
  },
  {
    "type": "Unknown",
    "line1": "123 Sierra Way",
    "line2": "",
    "city": "San Pablo",
    "region": "CA",
    "country": "",
    "postalCode": "87999"
  }
],
"phoneNumbers": [
  {
    "number": "010 1234 5678",
    "type": "Landline"
  }
],
"webLinks": [
  {
    "type": "Website",
    "url": "https://www.wbsl.com/"
  }
],
"ledgerLockDate": "2019-03-04T12:08:01.881Z",
"registrationNumber": "1234567890",
"taxNumber": "GB 123456789",
"financialYearStartDate": "2019-04-01T00:00:00Z",
"baseCurrency": "USD",
"sourceUrls": {
  "url1": "https://go.xero.com/organisationlogin/default.aspx?shortcode=!rxs0Q",
  "url2": "https://reporting.xero.com/!rxs0Q"
},
"createdDate": "2020-02-03T16:42:02Z"
}
```
