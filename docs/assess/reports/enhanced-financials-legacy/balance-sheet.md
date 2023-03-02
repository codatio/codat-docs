---
title: "Enhanced Balance Sheet"
description: "Reference document for the endpoint that produce a fully categorized balance sheet statement"
createdAt: "2022-03-14T16:26:58.720Z"
updatedAt: "2022-11-02T14:39:48.397Z"
---

:::caution New version of enhanced financials
Functionality described here has been superseded by a newer version of enhanced financials using revised accounting categories. Explore the new [Enhanced Financials](/assess/reports/enhanced-financials/financials).
:::

The _Enhanced Balance Sheet_ endpoint provides a fully categorized balance sheet over a specified period(s) of time, for a specific company’s accounting connection.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

For _Enhanced Balance Sheet_, these are the dimensions and measures:

**Dimensions**

- Period
- Category
- Sub Type
- Detail Type
- Accounts

**Measures**

- Value
- Percentage change

**Report Data**

- Is structured based on dimension (index =“0”). i.e. Period

<br />

**Categorizing debit accounts**
Debit accounts are categorized as **Asset > Current assets > Cash**. However, when the debit account is in overdraft over a given period, the **Enhanced Balance Sheet** automatically categorizes it as **Liability > Non-current liabilities > Loans payable**, and changes the sign from negative to positive.

<br />

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-enhancedBalanceSheet">API reference</a>.

```http
GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet
```

## Parameters

## Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

If any account needs to be recategorized, use the [API: Categorization of accounts](/assess/categories/api-categorization-of-accounts) endpoint.

### Measures

_Measures_ provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of 5 dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into Category, Sub Type, Detail Type and Accounts.

Components are nested within each other as below (grouped by dimension (index =“0”), i.e. _Period_). Both value and percent change measures are included for each level.

```
	components - “Category”, e.g. Asset

		components - “Sub Type”, e.g. Non-current assets

			components - “Detail Type”, e.g. Equipment and machinery

				components - “Accounts”, e.g. Computer equipment
```

#### Components structure

All components have the structure described in the _Measures in components_ data model below.

##### Measures in components

Each component level contains the total level in the currency, and the percentage change.
