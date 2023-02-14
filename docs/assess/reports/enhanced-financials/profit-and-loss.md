---
title: "Enhanced Profit and Loss"
description: "Reference document for the endpoint that produce a fully categorized profit and loss statement"
createdAt: "2022-03-10T14:12:26.131Z"
updatedAt: "2022-11-02T14:39:20.426Z"
---

The _Enhanced Profit and Loss_ endpoint provides a fully categorized profit and loss statement over a specified period(s) of time, for a specific company’s accounting connection.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

For _Enhanced Profit and Loss_, these are the dimensions and measures:

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

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_enhancedProfitAndLoss" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedProfitandLoss`

# Parameters


{
"data": {
"h-0": "Parameter",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"0-0": "**reportDate** ",
"0-1": "_string_
See [Date](/datamodel-shared-date)",
"0-2": "YYYY-MM-DD

Datetime or, Date (inclusive of whole day).",
"0-3": "Required",
"1-0": "**periodlength** ",
"1-1": "_integer_ ",
"2-0": "**numberOfPeriods** ",
"3-0": "**includeDisplayNames** ",
"2-1": "_integer_ ",
"3-1": "_boolean_ ",
"1-2": "The number of months per period.

It must be positive, not zero and an integer.",
"2-2": "The number of periods to return. It must be positive, not zero and an integer.",
"3-2": "Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable.

Default is _false_.",
"1-3": "Required",
"2-3": "Required",
"3-3": "Optional"
},
"cols": 4,
"rows": 4
}


# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_ ",
"1-0": "**displayName** ",
"1-1": "_string_ ",
"0-2": "“enhanced_profit_and_loss”",
"1-2": "“Enhanced Profit and Loss”"
},
"cols": 3,
"rows": 2
}


## Dimensions

The _Enhanced Profit and Loss_ consists of these dimensions: Period, Category, Sub Type, Detail Type, Accounts.

### Dimension (index = “0”): Period


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"1-0": "**type** ",
"2-0": "**items** ",
"0-1": "_string_ ",
"1-1": "_string_ ",
"2-1": "_array_
See [Dimension (index = “0”) items](#dimension-index--0-items)",
"0-2": "“Period”",
"1-2": "“datespan”",
"2-2": "Returns an array of “Period”. This is driven by the query parameter values.

Ordered by latest to earliest periods."
},
"cols": 3,
"rows": 3
}


#### Dimension (index = “0”) items


{
"data": {
"0-0": "**displayName** ",
"1-0": "**start** ",
"2-0": "**end** ",
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-1": "_string_ ",
"1-1": "_string_
See [Date](/datamodel-shared-date)",
"2-1": "_string_
See [Date](/datamodel-shared-date)",
"0-2": "“Period n”",
"1-2": "YYYY-MM-DD

Date in which the period begins (inclusive).",
"2-2": "YYYY-MM-DD

Date in which the period ends (inclusive)."
},
"cols": 3,
"rows": 3
}


### Dimension (index = “1”): Category


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"1-0": "**type** ",
"2-0": "**items** ",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_array_
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"0-2": "“Type”",
"1-2": "“string”",
"2-2": "\* Returns an array of “Categories”.

- Ordered as: Income and Expense.
- Also includes Gross Profit, Net Operating Profit and Net Profit as calculated values."
  },
  "cols": 3,
  "rows": 3
  }
  

#### Dimension (index = “1”) items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value** ",
"0-1": "_string_",
"0-2": "\* “Income”

- “Expense”
- “Gross Profit”
- “Net Operating Profit”
- “Net Profit”

These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}


### Dimension (index = “2”): Sub Type


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"1-0": "**type** ",
"2-0": "**items** ",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_array_
See [Dimension (index = “2”) items](#dimension-index--2-items)",
"0-2": "“Sub Type”",
"1-2": "“string”",
"2-2": "Returns an array of “Sub Type” of unique values. For example, “Operating” and “Non Operating”."
},
"cols": 3,
"rows": 3
}


#### Dimension (index = “2”) items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value** ",
"0-1": "_string_",
"0-2": "Returns all sub types available for the company queried."
},
"cols": 3,
"rows": 1
}


### Dimension (index = “3”): Detail Type


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"1-1": "_string_",
"1-0": "**type** ",
"2-0": "**items** ",
"2-1": "_array_
See [Dimension (index = “3”) items](#dimension-index--3-items)",
"0-2": "“Detail Type”",
"1-2": "“string”",
"2-2": "Returns an array of “Detail Type” of unique values."
},
"cols": 3,
"rows": 3
}


#### Dimension (index = “3”) items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value** ",
"0-1": "_string_",
"0-2": "Returns all category detail types available for the company queried.

Does not return the category detail types where there is no existing account data."
},
"cols": 3,
"rows": 1
}


### Dimension (index = “4”): Accounts


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"1-0": "**type** ",
"1-1": "_string_",
"2-0": "**items** ",
"2-1": "_array_
See [Dimension (index = “4”) items](#dimension-index--4-items)",
"2-2": "Returns an array of "Accounts".",
"0-2": ""Accounts"",
"1-2": ""recordRef""
},
"cols": 3,
"rows": 3
}


#### Dimension (index = “4”) items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"1-0": "**displayName** ",
"1-1": "_string_",
"0-2": "Unique record of the account.",
"1-2": "Name of the account."
},
"cols": 3,
"rows": 2
}

If any account needs to be recategorized, use the [API: Categorization of accounts](/assess-api-categorization-of-accounts) endpoint.

## Measures

_Measures_ provide information about the measures contained in the report data.

The two measures for this report are as follows:

**Index “0” - value**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"2-0": "**type** ",
"2-1": "_string_",
"0-2": "“Value”",
"2-2": "“currency”",
"1-0": "**units** ",
"1-1": "_string_",
"1-2": "Currency of the P&L."
},
"cols": 3,
"rows": 3
}

**Index “1” - percentage change**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"2-0": "**type** ",
"0-1": "_string_",
"2-1": "_string_",
"0-2": "“Percentage change vs. previous period”",
"2-2": "“percentage”",
"1-0": "**units** ",
"1-1": "_string_",
"1-2": ""%""
},
"cols": 3,
"rows": 3
}


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of 5 dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into Category, Sub Type, Detail Type and Accounts.

Components are nested within each other as below (grouped by dimension (index =“0”), i.e. _Period_). Both value and percent change measures are included for each level.

    components - “Category”, e.g. Income

    	components - “Sub Type”, e.g. Operating

    		components - “Detail Type”, e.g. Other operating income

    			components - “Accounts”, e.g. Sales

### Components structure


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**dimension** ",
"0-1": "_number_ ",
"1-0": "**dimensionDisplayName** ",
"2-0": "**item** ",
"3-0": "**itemDisplayName** ",
"4-0": "**measures**",
"1-1": "_string_ ",
"3-1": "_string_",
"2-1": "_number_",
"1-2": "Shows when _includeDisplayNames_ is set to _true_.",
"3-2": "Shows when _includeDisplayNames_ is set to _true_.",
"4-1": "See [Measures in components](#measures-in-components)",
"0-2": "Index 1 to 4, see dimensions."
},
"cols": 3,
"rows": 5
}

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0"**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value**",
"0-1": "_string_ ",
"0-2": "“Value”",
"1-1": "_number_ "
},
"cols": 3,
"rows": 2
}

**Index “1”**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value**",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Percentage change vs previous period”

If the system can't calculate the percentage change, this object will not display.",
"1-2": "“%”"
},
"cols": 3,
"rows": 2
}

Each component level contains the total level in the currency, and the percentage change.

```
{
  "reportInfo": {
      "name": "enhanced_profit_and_loss",
      "displayName": "Enhanced Profit and Loss"
  },
  "dimensions": [
      {
          "index": 0,
          "displayName": "Period",
          "type": "datespan",
          "items": [
              {
                  "index": 0,
                  "displayName": "September 2021",
                  "start": "2021-09-01",
                  "end": "2021-09-30"
              },
              {
                  "index": 1,
                  "displayName": "October 2021",
                  "start": "2021-10-01",
                  "end": "2021-10-31"
              }
          ]
      },
      {
          "index": 1,
          "displayName": "Category",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Income"
              },
              {
                  "index": 1,
                  "value": "Expense"
              },
              {
                  "index": 2,
                  "value": "Gross Profit"
              },
              {
                  "index": 3,
                  "value": "Net Operating Profit"
              },
              {
                  "index": 4,
                  "value": "Net Profit"
              }
          ]
      },
      {
          "index": 2,
          "displayName": "Sub Type",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Cost of sales"
              },
              {
                  "index": 1,
                  "value": "Operating"
              },
              {
                  "index": 2,
                  "value": "Non-operating"
              }
          ]
      },
      {
          "index": 3,
          "displayName": "Detail Type",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Other cost of sales"
              },
              {
                  "index": 1,
                  "value": "Marketing"
              },
              {
                  "index": 2,
                  "value": "Depreciation and depletion"
              },
              {
                  "index": 3,
                  "value": "Entertainment"
              },
              {
                  "index": 4,
                  "value": "General and Administrative"
              },
              {
                  "index": 5,
                  "value": "Repairs and maintenance"
              },
              {
                  "index": 6,
                  "value": "Distribution"
              },
              {
                  "index": 7,
                  "value": "Buildings rent and lease"
              },
              {
                  "index": 8,
                  "value": "Subscription fees"
              },
              {
                  "index": 9,
                  "value": "Travel"
              },
              {
                  "index": 10,
                  "value": "Bank charges"
              },
              {
                  "index": 11,
                  "value": "Taxes"
              },
              {
                  "index": 12,
                  "value": "Labour"
              },
              {
                  "index": 13,
                  "value": "Materials"
              },
              {
                  "index": 14,
                  "value": "Amortization"
              },
              {
                  "index": 15,
                  "value": "Interest"
              },
              {
                  "index": 16,
                  "value": "Other operating income"
              }
          ]
      },
      {
          "index": 4,
          "displayName": "Accounts",
          "type": "recordRef",
          "items": [
              {
                  "index": 0,
                  "id": "13931cbf-ea06-4d6e-9538-a8457fa66011",
                  "displayName": "Purchases",
                  "dataType": "account"
              },
              {
                  "index": 1,
                  "id": "868591ad-f9c2-4956-a5ec-c32c1d48c6f3",
                  "displayName": "Advertising & Marketing",
                  "dataType": "account"
              },
              {
                  "index": 2,
                  "id": "940c8a59-3348-4a0b-a1b1-781d9f29cc8b",
                  "displayName": "Depreciation Expense",
                  "dataType": "account"
              },
              {
                  "index": 3,
                  "id": "e7ac3baa-cfbe-40c1-a172-83d22e84435b",
                  "displayName": "Entertainment-100% business",
                  "dataType": "account"
              },
              {
                  "index": 4,
                  "id": "b5e801e8-8dbc-4390-ac99-3b0fff54a89f",
                  "displayName": "General Expenses",
                  "dataType": "account"
              },
              {
                  "index": 5,
                  "id": "5360066d-1474-49f6-a7a5-c66d5f6032ba",
                  "displayName": "Light, Power, Heating",
                  "dataType": "account"
              },
              {
                  "index": 6,
                  "id": "138a8eb3-5c08-4e59-a3bc-892119694447",
                  "displayName": "Motor Vehicle Expenses",
                  "dataType": "account"
              },
              {
                  "index": 7,
                  "id": "1734ff00-2a17-45b4-8db6-2dc2e832c460",
                  "displayName": "Postage, Freight & Courier",
                  "dataType": "account"
              },
              {
                  "index": 8,
                  "id": "7aa7988a-ff61-4cb8-bef3-15395355d108",
                  "displayName": "Printing & Stationery",
                  "dataType": "account"
              },
              {
                  "index": 9,
                  "id": "9cbe5fe4-ca60-4792-8bf1-de01fb7010aa",
                  "displayName": "Rent",
                  "dataType": "account"
              },
              {
                  "index": 10,
                  "id": "04f7111b-55d4-4efc-b329-1bd5c791933a",
                  "displayName": "Repairs & Maintenance",
                  "dataType": "account"
              },
              {
                  "index": 11,
                  "id": "7d8d0322-f452-47de-a8e8-54b0130e6f38",
                  "displayName": "Subscriptions",
                  "dataType": "account"
              },
              {
                  "index": 12,
                  "id": "043b6bcb-dfe6-4c97-9b4c-f9b300fe3f03",
                  "displayName": "Telephone & Internet",
                  "dataType": "account"
              },
              {
                  "index": 13,
                  "id": "df62060b-41cc-4bf2-9de7-c7e537b5663a",
                  "displayName": "Travel - National",
                  "dataType": "account"
              },
              {
                  "index": 14,
                  "id": "eef78ed1-dfed-447c-bdba-3a49fb2c044b",
                  "displayName": "Audit & Accountancy fees",
                  "dataType": "account"
              },
              {
                  "index": 15,
                  "id": "f3aa84fe-5c31-4107-b207-7e0419f636d7",
                  "displayName": "Bank Fees",
                  "dataType": "account"
              },
              {
                  "index": 16,
                  "id": "c16f5c35-8283-47da-9d09-5fecb183b0cb",
                  "displayName": "Cleaning",
                  "dataType": "account"
              },
              {
                  "index": 17,
                  "id": "fb3210ef-edeb-48af-bb49-b85d40c1e6bb",
                  "displayName": "Corporation Tax",
                  "dataType": "account"
              },
              {
                  "index": 18,
                  "id": "7f6a0e92-65be-4333-9a0a-d981b03bedd1",
                  "displayName": "Wages",
                  "dataType": "account"
              },
              {
                  "index": 19,
                  "id": "7403e960-5b72-42ff-abf4-c870ad8910bd",
                  "displayName": "Purchases",
                  "dataType": "account"
              },
              {
                  "index": 20,
                  "id": "e8a0a24e-2dab-46b1-bfe1-6e92551c04e8",
                  "displayName": "Purchase Discounts",
                  "dataType": "account"
              },
              {
                  "index": 21,
                  "id": "4378ddba-36b4-4b35-9970-bd972b20d137",
                  "displayName": "Amortization",
                  "dataType": "account"
              },
              {
                  "index": 22,
                  "id": "78785fd7-f197-4c34-aa17-6e76b9255d34",
                  "displayName": "Interest Paid (operating)",
                  "dataType": "account"
              },
              {
                  "index": 23,
                  "id": "72df89d2-512b-4455-af51-a6b563733842",
                  "displayName": "Sales",
                  "dataType": "account"
              }
          ]
      }
  ],
  "measures": [
      {
          "displayName": "Value",
          "units": "GBP",
          "index": 0,
          "type": "currency"
      },
      {
          "displayName": "Percentage change vs previous period",
          "units": "%",
          "index": 1,
          "type": "percentage"
      }
  ],
  "reportData": [
      {
          "dimension": 0,
          "dimensionDisplayName": "Period",
          "item": 0,
          "itemDisplayName": "September 2021",
          "components": [
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 1,
                  "itemDisplayName": "Expense",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 8712.78
                      }
                  ],
                  "components": [
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 0,
                          "itemDisplayName": "CostOfSales",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 6194.07
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 0,
                                  "itemDisplayName": "OtherCostOfSales",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 1452.4
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 0,
                                          "itemDisplayName": "Purchases",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 1452.4
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 12,
                                  "itemDisplayName": "Labour",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 4373.14
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 18,
                                          "itemDisplayName": "Wages",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 4373.14
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 13,
                                  "itemDisplayName": "Materials",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 368.53
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 19,
                                          "itemDisplayName": "Purchases",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 266.05
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 20,
                                          "itemDisplayName": "Purchase Discounts",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 102.48
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 1,
                          "itemDisplayName": "Operating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 2331.87
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 1,
                                  "itemDisplayName": "Marketing",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 275.82
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 1,
                                          "itemDisplayName": "Advertising & Marketing",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 275.82
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 2,
                                  "itemDisplayName": "DepreciationDepletion",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 130.71
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 2,
                                          "itemDisplayName": "Depreciation Expense",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 130.71
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 3,
                                  "itemDisplayName": "Entertainment",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 36.44
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 3,
                                          "itemDisplayName": "Entertainment-100% business",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 36.44
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 4,
                                  "itemDisplayName": "GeneralAdministrative",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 560.30
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 4,
                                          "itemDisplayName": "General Expenses",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 175.47
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 5,
                                          "itemDisplayName": "Light, Power, Heating",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 70.21
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 8,
                                          "itemDisplayName": "Printing & Stationery",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 149.62
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 12,
                                          "itemDisplayName": "Telephone & Internet",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 45.00
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 14,
                                          "itemDisplayName": "Audit & Accountancy fees",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 0.0
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 16,
                                          "itemDisplayName": "Cleaning",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 120.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 5,
                                  "itemDisplayName": "RepairsMaintenance",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 439.86
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 6,
                                          "itemDisplayName": "Motor Vehicle Expenses",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 394.18
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 10,
                                          "itemDisplayName": "Repairs & Maintenance",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 45.68
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 6,
                                  "itemDisplayName": "Distribution",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 67.42
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 7,
                                          "itemDisplayName": "Postage, Freight & Courier",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 67.42
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 7,
                                  "itemDisplayName": "BuildingRentLease",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 600.00
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 9,
                                          "itemDisplayName": "Rent",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 600.00
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 8,
                                  "itemDisplayName": "SubscriptionFees",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 45.86
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 11,
                                          "itemDisplayName": "Subscriptions",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 45.86
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 9,
                                  "itemDisplayName": "Travel",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 145.21
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 13,
                                          "itemDisplayName": "Travel - National",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 145.21
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 10,
                                  "itemDisplayName": "BankCharges",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 22.53
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 15,
                                          "itemDisplayName": "Bank Fees",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 22.53
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 14,
                                  "itemDisplayName": "Amortization",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 5.72
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 21,
                                          "itemDisplayName": "Amortization",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 5.72
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 15,
                                  "itemDisplayName": "Interest",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 2.0
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 22,
                                          "itemDisplayName": "Interest Paid (operating)",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 2.0
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 2,
                          "itemDisplayName": "NonOperating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 186.84
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 11,
                                  "itemDisplayName": "Taxes",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 186.84
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 17,
                                          "itemDisplayName": "Corporation Tax",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 186.84
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 0,
                  "itemDisplayName": "Income",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 7043.13
                      }
                  ],
                  "components": [
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 1,
                          "itemDisplayName": "Operating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 7043.13
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 16,
                                  "itemDisplayName": "OtherOperatingIncome",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 7043.13
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 23,
                                          "itemDisplayName": "Sales",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 7043.13
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 2,
                  "itemDisplayName": "Gross Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 849.06
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 3,
                  "itemDisplayName": "Net Operating Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": -1482.81
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 4,
                  "itemDisplayName": "Net Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": -1669.65
                      }
                  ]
              }
          ]
      },
      {
          "dimension": 0,
          "dimensionDisplayName": "Period",
          "item": 1,
          "itemDisplayName": "October 2021",
          "components": [
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 1,
                  "itemDisplayName": "Expense",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 8923.73
                      },
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage change vs previous period",
                          "value": 2.42
                      }
                  ],
                  "components": [
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 0,
                          "itemDisplayName": "CostOfSales",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 6319.15
                              },
                              {
                                  "index": 1,
                                  "measureDisplayName": "Percentage change vs previous period",
                                  "value": 2.02
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 0,
                                  "itemDisplayName": "OtherCostOfSales",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 1570.82
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 8.15
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 0,
                                          "itemDisplayName": "Purchases",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 1570.82
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 8.15
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 12,
                                  "itemDisplayName": "Labour",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 4373.14
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 0.0
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 18,
                                          "itemDisplayName": "Wages",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 4373.14
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 13,
                                  "itemDisplayName": "Materials",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 375.19
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 1.81
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 19,
                                          "itemDisplayName": "Purchases",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 180.23
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -32.26
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 20,
                                          "itemDisplayName": "Purchase Discounts",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 194.96
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 90.24
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 1,
                          "itemDisplayName": "Operating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 2482.40
                              },
                              {
                                  "index": 1,
                                  "measureDisplayName": "Percentage change vs previous period",
                                  "value": 6.46
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 1,
                                  "itemDisplayName": "Marketing",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 551.63
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 100.00
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 1,
                                          "itemDisplayName": "Advertising & Marketing",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 551.63
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 100.00
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 2,
                                  "itemDisplayName": "DepreciationDepletion",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 113.42
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -13.23
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 2,
                                          "itemDisplayName": "Depreciation Expense",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 113.42
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -13.23
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 3,
                                  "itemDisplayName": "Entertainment",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 36.7
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 0.71
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 3,
                                          "itemDisplayName": "Entertainment-100% business",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 36.7
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.71
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 4,
                                  "itemDisplayName": "GeneralAdministrative",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 473.57
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -15.48
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 4,
                                          "itemDisplayName": "General Expenses",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 173.08
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -1.36
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 5,
                                          "itemDisplayName": "Light, Power, Heating",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 80.5
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 14.66
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 8,
                                          "itemDisplayName": "Printing & Stationery",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 54.99
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -63.25
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 12,
                                          "itemDisplayName": "Telephone & Internet",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 45.00
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 14,
                                          "itemDisplayName": "Audit & Accountancy fees",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 0.0
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 16,
                                          "itemDisplayName": "Cleaning",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 120.0
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 5,
                                  "itemDisplayName": "RepairsMaintenance",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 363.28
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -17.41
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 6,
                                          "itemDisplayName": "Motor Vehicle Expenses",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 314.98
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -20.09
                                              }
                                          ]
                                      },
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 10,
                                          "itemDisplayName": "Repairs & Maintenance",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 48.3
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 5.74
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 6,
                                  "itemDisplayName": "Distribution",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 143.64
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 113.05
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 7,
                                          "itemDisplayName": "Postage, Freight & Courier",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 143.64
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 113.05
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 7,
                                  "itemDisplayName": "BuildingRentLease",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 600.00
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 0.0
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 9,
                                          "itemDisplayName": "Rent",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 600.00
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 8,
                                  "itemDisplayName": "SubscriptionFees",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 45.86
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 0.0
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 11,
                                          "itemDisplayName": "Subscriptions",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 45.86
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 9,
                                  "itemDisplayName": "Travel",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 106.71
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -26.51
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 13,
                                          "itemDisplayName": "Travel - National",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 106.71
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -26.51
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 10,
                                  "itemDisplayName": "BankCharges",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 22.25
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -1.24
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 15,
                                          "itemDisplayName": "Bank Fees",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 22.25
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -1.24
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 14,
                                  "itemDisplayName": "Amortization",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 5.72
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 0.0
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 21,
                                          "itemDisplayName": "Amortization",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 5.72
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 0.0
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 15,
                                  "itemDisplayName": "Interest",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 19.62
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 881.00
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 22,
                                          "itemDisplayName": "Interest Paid (operating)",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 19.62
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 881.00
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      },
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 2,
                          "itemDisplayName": "NonOperating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 122.18
                              },
                              {
                                  "index": 1,
                                  "measureDisplayName": "Percentage change vs previous period",
                                  "value": -34.61
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 11,
                                  "itemDisplayName": "Taxes",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 122.18
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": -34.61
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 17,
                                          "itemDisplayName": "Corporation Tax",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 122.18
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": -34.61
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 0,
                  "itemDisplayName": "Income",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 14692.22
                      },
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage change vs previous period",
                          "value": 108.60
                      }
                  ],
                  "components": [
                      {
                          "dimension": 2,
                          "dimensionDisplayName": "Sub Type",
                          "item": 1,
                          "itemDisplayName": "Operating",
                          "measures": [
                              {
                                  "index": 0,
                                  "measureDisplayName": "Value",
                                  "value": 14692.22
                              },
                              {
                                  "index": 1,
                                  "measureDisplayName": "Percentage change vs previous period",
                                  "value": 108.60
                              }
                          ],
                          "components": [
                              {
                                  "dimension": 3,
                                  "dimensionDisplayName": "Detail Type",
                                  "item": 16,
                                  "itemDisplayName": "OtherOperatingIncome",
                                  "measures": [
                                      {
                                          "index": 0,
                                          "measureDisplayName": "Value",
                                          "value": 14692.22
                                      },
                                      {
                                          "index": 1,
                                          "measureDisplayName": "Percentage change vs previous period",
                                          "value": 108.60
                                      }
                                  ],
                                  "components": [
                                      {
                                          "dimension": 4,
                                          "dimensionDisplayName": "Accounts",
                                          "item": 23,
                                          "itemDisplayName": "Sales",
                                          "measures": [
                                              {
                                                  "index": 0,
                                                  "measureDisplayName": "Value",
                                                  "value": 14692.22
                                              },
                                              {
                                                  "index": 1,
                                                  "measureDisplayName": "Percentage change vs previous period",
                                                  "value": 108.60
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 2,
                  "itemDisplayName": "Gross Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 8373.07
                      },
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage change vs previous period",
                          "value": 886.16
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 3,
                  "itemDisplayName": "Net Operating Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 5890.67
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Category",
                  "item": 4,
                  "itemDisplayName": "Net Profit",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 5768.49
                      }
                  ]
              }
          ]
      }
  ]
}
```
