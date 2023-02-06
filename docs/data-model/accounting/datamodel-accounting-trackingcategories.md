---
title: "Tracking categories"
description: "Monitors cost centres and controls budgets that sit outside the standard chart of accounts"
createdAt: "2020-02-14T12:15:22.454Z"
updatedAt: "2022-11-21T12:47:59.997Z"
---

:::note Language tip

Parameters used to track types of spend in various parts of an organization can be called **dimensions**, **projects**, **classes**, or **locations** in different accounting platforms. In Codat, we refer to these as tracking categories.
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/TrackingCategories" target="_blank">Tracking Categories</a> endpoints in Swagger.

View the coverage for tracking categories in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories" target="_blank">Data coverage explorer</a>.

## Overview

Tracking categories are used to monitor cost centres and control budgets that sit outside the standard chart of accounts. Customers may use tracking categories to group together and track the income and costs of specific departments, projects, locations or customers.

From their accounting system, customers can:

- Create and maintain tracking categories and tracking category types.
- View all tracking categories that are available for use.
- View the relationships between the categories.
- Assign invoices, bills, credit notes, or bill credit notes to one or more categories.
- View the categories that a transaction belongs to.
- View all transactions in a tracking category.

From the [TrackingCategories](https://api.codat.io/swagger/index.html#/TrackingCategories) endpoints, you can retrieve:

- A [list of the latest tracking categories](https://api.codat.io/swagger/index.html#/TrackingCategories/TrackingCategories_ListPaged) for a company.
- The details of a [specific tracking category](https://api.codat.io/swagger/index.html#/TrackingCategories/TrackingCategories_Single).

:::note Example use case

Monitor the budget for your annual conference using a tracking category called 'AnnualConference2020' with the **type** set to **Costing**.
:::

## Data model

### Tracking category model

The tracking categories of a company. If a tracking category has a parent category, the ID of that parent category is displayed. There is also a **hasChildren** field that shows whether there are child subcategories nested beneath. See below for an [example tracking category.](#section-tracking-category)

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "Unique identifier for the tracking category in the accounting platform.",
"1-0": "**parentId** ",
"1-1": "_string_",
"1-2": "Identifier of 'parent' or main category that the tracking category belongs to.",
"2-0": "**modifiedDate** ",
"2-1": "_string_  
See [date](/datamodel-shared-date)",
"2-2": "Date when the record was last updated in the Codat system.",
"3-0": "**sourceModifiedDate** ",
"3-1": "_string_  
See [date](/datamodel-shared-date)",
"3-2": "Date when the record was last updated in the accounting platform.",
"4-0": "**name** ",
"4-1": "_string_",
"4-2": "Name of the tracking category in the accounting platform.",
"5-0": "**hasChildren** ",
"5-1": "_boolean_",
"5-2": "Indicates whether there are other tracking categories beneath this one in the hierarchy.",
"6-0": "**status** ",
"6-1": "_string_",
"6-2": "Current state of the tracking category, either:

- `Active` - Available for use.

- `Archived` - Unavailable."
  },
  "cols": 3,
  "rows": 7,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

### Tracking category tree model

The full structure of a specific tracking category including any child or sub categories.

| Field                    | Type                            | Description                                                          |
| :----------------------- | :------------------------------ | :------------------------------------------------------------------- |
| **trackingCategoryTree** | _TrackingCategory_              | All fields from the tracking category in a tree structure.           |
| **subCategories**        | _Array of TrackingCategoryTree_ | A collection of subcategories that are nested beneath this category. |

### Tracking category reference model

Data types that reference a tracking category – for example, the [line items of a bill](/datamodel-accounting-bills#line-items) – use a **trackingCategoryRef** that includes the ID and name of the linked category.

| Field    | Type     | Description                                                             |
| :------- | :------- | :---------------------------------------------------------------------- |
| **id**   | _string_ | Unique identifier for the tracking category in the accounting platform. |
| **name** | _string_ | Name of the tracking category in the accounting platform.               |

## Example data

### Tracking category

```json
{
  "results": [
    {
      "id": "C0",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "Marketing Department",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "C1",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "Engineering Department",
      "hasChildren": true,
      "status": "Active"
    },
    {
      "id": "C2",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "Sales Department",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "C3",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "UK",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "C7",
      "parentId": "C1",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "Team 1",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "T1",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "UK",
      "hasChildren": true,
      "status": "Active"
    },
    {
      "id": "T10",
      "parentId": "T1",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:12Z",
      "name": "London Office",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "T12",
      "parentId": "T1",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:12Z",
      "name": "Manchester Office",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "T13",
      "parentId": "T2",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:12Z",
      "name": "NYC Offices",
      "hasChildren": true,
      "status": "Active"
    },
    {
      "id": "T2",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:08Z",
      "name": "US",
      "hasChildren": true,
      "status": "Active"
    },
    {
      "id": "T8",
      "parentId": "T2",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:12Z",
      "name": "San Francisco Office",
      "hasChildren": false,
      "status": "Active"
    },
    {
      "id": "T9",
      "parentId": "T13",
      "modifiedDate": "2020-02-12T16:29:47Z",
      "sourceModifiedDate": "2016-08-11T11:28:12Z",
      "name": "Brooklyn",
      "hasChildren": false,
      "status": "Active"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 12,
  "_links": {
    "current": {
      "href": "/companies/f8f3ca24-679e-414d-8945-26a8eead7180/data/trackingCategories?page=1"
    },
    "self": {
      "href": "/companies/f8f3ca24-679e-414d-8945-26a8eead7180/data/trackingCategories"
    }
  }
}
```

### Tracking category tree

```json
{
  "id": "T2",
  "modifiedDate": "2020-02-12T16:29:47",
  "sourceModifiedDate": "2016-08-11T11:28:08",
  "name": "UK",
  "hasChildren": true,
  "status": "Active",
  "subCategories": [
    {
      "id": "T13",
      "parentId": "T2",
      "modifiedDate": "2020-02-12T16:29:47",
      "sourceModifiedDate": "2016-08-11T11:28:12",
      "name": "London",
      "hasChildren": true,
      "status": "Active",
      "subCategories": [
        {
          "id": "T9",
          "parentId": "T13",
          "modifiedDate": "2020-02-12T16:29:47",
          "sourceModifiedDate": "2016-08-11T11:28:12",
          "name": "Clerkenwell Office",
          "hasChildren": false,
          "status": "Active",
          "subCategories": []
        }
      ]
    },
    {
      "id": "T8",
      "parentId": "T2",
      "modifiedDate": "2020-02-12T16:29:47",
      "sourceModifiedDate": "2016-08-11T11:28:12",
      "name": "US",
      "hasChildren": false,
      "status": "Active",
      "subCategories": []
    }
  ]
}
```

### Tracking category reference

```json
{
  "id": "T2",
  "name": "UK"
}
```
