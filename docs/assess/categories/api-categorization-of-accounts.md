---
title: "Categorization of accounts"
description: "Reference document for the Account Categorization endpoints"
createdAt: "2022-02-21T12:45:33.573Z"
updatedAt: "2022-11-02T14:38:29.977Z"
---
:::caution Account category versions
This categorization of accounts via only applies to our classic [Enhanced Financials](/assess/reports/enhanced-financials/financials). For our revised categorization aimed at eCommerce lenders, explore [Enhanced Financials for eCommerce lenders.](/assess/reports/enhanced-financials-ecommerce-lenders/financials)
:::

The **Categorization of accounts** API consists of the following endpoints:

- [List all available categories](#list-all-available-categories)
- [Get the category for a specific account](#get-the-category-for-a-specific-account)
- [List all accounts with their categories](#list-all-accounts-with-their-categories)
- [Update categories for a company](#update-categories-for-a-company)
- [Update the category for a specific account](#update-the-category-for-a-specific-account)

# API endpoints for categorization of accounts

Account categories have three sub-categories:

- Account type — the highest level classification of an account, e.g. Asset, Liability, etc.
- Account subtype — category often used for traditional financial ratios, e.g. Current assets, Current liabilities, etc.
- Account detail — individual accounts, e.g. Cash, Inventory, Depreciation, etc.

# List all available categories

The endpoint is available in our <a href="/assess-api#/operations/get-data-assess-accounts-categories">API reference</a>. It contains the original category suggested by Codat `suggested` and the category that was confirmed by you or your customer `confirmed`.

- A list of all the Codat standard categories can be found under:

```http
GET /data/assess/accounts/categories
```

```json
[
{
  "type": "Asset",
  "subtype": "Current",
  "subtypeDisplayName": "Current assets",
  "detailType": "Cash",
  "detailTypeDisplayName": "Cash",
  "detailTypeDescription": "Use 'Cash' for cash in the bank or held on premise. This should include overdrawn accounts."
},
{
  "type": "Income",
  "subtype": "Operating",
  "subtypeDisplayName": "Operating",
  "detailType": "GeneralServices",
  "detailTypeDisplayName": "General services",
  "detailTypeDescription": "Use 'General services' for income generated from services the company performs or usage fees charged."
}
...
]
```

## Get the category for a specific account

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accounts-accountId-categories">API reference</a>.

The suggested and confirmed categories for a specific account can be obtained from the following endpoint:

```http
GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories
```

```json

    {
    "accountRef": {
      "id": "367f8daa-1464-4152-bf4e-21548696f916",
      "name": "Purchases"
    },
    "suggested": {
      "type": "Expense",
      "subtype": "CostOfSales",
      "detailType": "Labour"
    },
    "confirmed": {
      "type": "Expense",
      "subtype": "Operating",
      "detailType": "AmortisationDepreciation"
    }

}
```

# List all accounts with their categories

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accounts-categories">API reference</a>.

```http
GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories
```

## Data model
| Field      | Type                          | Description                                   |
|------------|-------------------------------|-----------------------------------------------|
| accountRef | See [AccountRef](#accountref) | An object containing account reference data.  |
| suggested  | See [Suggested](#suggested)   | An object containing suggested category data. |
| confirmed  | See [Confirmed](#confirmed)   | An object containing confirmed category data. |

## AccountRef
| Field     | Type                           | Description                                   |
|-----------|--------------------------------|-----------------------------------------------|
| id        |  _string_                      | The account Id.                               |
| name      |  _string_                      | The name of the account.                      |

## Suggested
| Field         | Type        | Description                                                                 |
|---------------|-------------|-----------------------------------------------------------------------------|
| type          |  _string_   | The suggested account type.                                                 |
| subtype       |  _string_   | The suggested account subtype.                                              |
| detailType    |  _string_   | The suggested account detail type.                                          |
| modifiedDate  | See [Date](/datamodel-shared-date)    | The date the category was suggested for the account, YYYY-MM-DDT00:00:00Z.  |

# Confirmed
| Field         | Type        | Description                                                         |
|---------------|-------------|---------------------------------------------------------------------|
| type          |  _string_   | The confirmed account type.                                         |
| subtype       |  _string_   | The confirmed account subtype.                                      |
| detailType    |  _string_   | The confirmed account detail type.                                  |
| modifiedDate  | See [Date](/datamodel-shared-date)   | The date the account category was confirmed, YYYY-MM-DDT00:00:00Z.  |

```
{
"results": [
  {
    "accountRef": {
      "id": "043b6bcb-dfe6-4c97-9b4c-f9b300fe3f03",
      "name": "Telephone & Internet"
    },
    "suggested": {
      "type": "Expense",
      "subtype": "Operating",
      "detailType": "GeneralAdministrative",
      "modifiedDate": "2021-12-08T12:21:29"
    },
    "confirmed": {
      "type": "Expense",
      "subtype": "Operating",
      "detailType": "SubscriptionFees",
      "modifiedDate": "2022-03-02T09:41:06"
    }
  }
```

# Update categories for a company

The categories for all or a batch of accounts in a specific connection can be updated in Sthe API reference.
Note that this does not update the end accounting platform’s account, and only updates the categories saved against the company within Assess.

The endpoint is available in our <a href="/assess-api#/operations/patch-data-companies-companyId-connections-connectionId-assess-accounts-categories">API reference</a>.

`PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories`

In the update request body, provide:

- `type` (classification of the account, e.g. Asset, Liability, Income, Expense)
- `subType` (e.g. Current asset)
- `detailType` (e.g. Cash equivalents).

You can provide a partial list of accounts you wish to update, or pass the whole object as `null` if you wish to remove the confirmed category for an account.

```json
{
"categories": [
  {
    "accountRef": {
      "id": "string"
    },
    "confirmed": {
      "type": "string",
      "subtype": "string",
      "detailType": "string"
      "modifiedDate": "2022-03-01T16:58:15.907Z"
    }
  }
]
}
```

## Update the category for a specific account

The confirmed category for an account can be updated or removed.

The endpoint is available in our <a href="/assess-api#/operations/patch-data-companies-companyId-connections-connectionId-assess-accounts-accountId-categories">API reference</a>.

`PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories`

Note: Even if you are updating 2 accounts out of 100, you should still provide the categories on the other 98 accounts to prevent replacing those that were previously confirmed.
