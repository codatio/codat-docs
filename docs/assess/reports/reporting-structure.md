---
title: "Assess reporting structure"
description: "Assess reporting structure"
createdAt: "2022-03-10T17:21:44.288Z"
updatedAt: "2022-11-02T14:47:11.407Z"
---

Assess reports follow a consistent structure. Reports contain four sections of information:

1. Report definition information such as:
   a. The report info (e.g. enhanced_profit_and_loss).
   b. The display name of the report (e.g. Enhanced Profit and Loss).
2. Information about the dimension contained in the reports such as:
   a. The type of dimension (e.g. datetime, recordRef).
   b. The display name of the dimension (e.g. Period, Category type, Category sub type).
   c. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
3. Information about the measures contained in the report such as:
   a. The display name of the measure (e.g. value of account, percentage change).
   b. The type of the measure (e.g. currency, percentage).
   c. The unit of the measure (e.g. %, GBP).
4. The data for the report. When the _includeDisplayName_ parameter is set to _true_, it shows the _dimensionDisplayName_ and _itemDisplayName_ to make the data human-readable. The default setting for _includeDisplayName_ is _false_.

Reports can be rendered as follows (ordering is implicit rather than explicit):

![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)

# Data model

## Dimensions

```
    "dimensions": [{
      "index": 0,
      "displayName": "Month",
      "type": "datespan",
      "items": [{
          "index": 0,
          "displayName": "December 2021",
          "start": "2021-12-01",
          "end": "2022-12-31"
      }, {
          "index": 1,
          "displayName": "January 2022",
          "start": "2022-01-01",
          "end": "2022-01-31"
      }]
  }, {
      "index": 1,
      "displayName": "Customer",
      "type": "recordRef",
      "items": [{
          "index": 0,
          "displayName": "Thomas Craig",
          "recordRef": {
              "id": "Customer_0047",
              "dataType": "Customers"
          }
      }, {
          "index": 1,
          "displayName": "Kate Paul",
          "recordRef": {
              "id": "Customer_0104",
              "dataType": "Customers"
          }
      }, {
          "index": 2,
          "displayName": "All other customers",
          "recordRef": null
      }]
  }, {
      "index": 2,
      "displayName": "Product",
      "type": "recordRef",
      "items": [{
          "index": 0,
          "displayName": "Comic book",
          "recordRef": {
              "id": "Items_1473",
              "dataType": "Items"
          }
      }, {
          "index": 1,
          "displayName": "National flag",
          "recordRef": {
              "id": "Items_1123",
              "dataType": "Items"
          }
      }, {
          "index": 2,
          "displayName": "Gift basket",
          "recordRef": {
              "id": "Items_1321",
              "dataType": "Items"
          }
      }, {
          "index": 3,
          "displayName": "All other products",
          "recordRef": null
      }]
  }],
  "measures": [{
      "id": "totalBought",
      "displayName": "Total value bought",
      "type": "currency",
      "units": "USD"
  }, {
      "id": "changePercent",
      "displayName": "Percentage change vs. previous month",
      "type": "percentage",
      "units": "%"
  }],
```

## Report data

```
    "data": [{
          "dimension": 0,
          "item": 0,
          "measures": {
              "totalBought": 3903.99
          },
          "components": [{
              "dimension": 1,
              "item": 0,
              "measures": {
                  "totalBought": 152.99
              },
              "components": [{
                  "dimension": 2,
                  "item": 1,
                  "measures": {
                      "totalBought": 12.99
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 140
                  }
              }]
          }, {
              "dimension": 1,
              "item": 1,
              "measures": {
                  "totalBought": 86
              },
              "components": [{
                  "dimension": 2,
                  "item": 0,
                  "measures": {
                      "totalBought": 42
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 20
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 14
                  }
              }]
          }, {
              "dimension": 1,
              "item": 2,
              "measures": {
                  "totalBought": 3665
              },
              "components": [{
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 1450
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 2215
                  }
              }]
          }]
      }, {
          "dimension": 0,
          "item": 1,
          "measures": {
              "totalBought": 2781.99,
              "changePercent": -29
          },
          "components": [{
              "dimension": 1,
              "item": 0,
              "measures": {
                  "totalBought": 19.49,
                  "changePercent": -97
              },
              "components": [{
                  "dimension": 2,
                  "item": 1,
                  "measures": {
                      "totalBought": 19.49,
                      "changePercent": 50
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 0,
                      "changePercent": -100
                  }
              }]
          }, {
              "dimension": 1,
              "item": 1,
              "measures": {
                  "totalBought": 137.50,
                  "changePercent": 60
              },
              "components": [{
                  "dimension": 2,
                  "item": 0,
                  "measures": {
                      "totalBought": 120,
                      "changePercent": 186
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 0,
                      "changePercent": -100
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 17.5,
                      "changePercent": 25
                  }
              }]
          }, {
              "dimension": 1,
              "item": 2,
              "measures": {
                  "totalBought": 2625,
                  "changePercent": -28
              },
              "components": [{
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 205,
                      "changePercent": -86
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 2420,
                      "changePercent": 9
                  }
              }]
          }]
      }
  ]
```
