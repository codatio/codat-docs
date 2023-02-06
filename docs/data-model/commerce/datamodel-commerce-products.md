---
title: "Products"
description: "Information about a company's product inventory"
createdAt: "2020-09-17T13:36:19.514Z"
updatedAt: "2022-11-22T13:10:20.781Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceProducts" target="_blank">Commerce Products</a> endpoints in Swagger.

View the coverage for products in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-products" target="_blank">Data coverage explorer</a>.

## Overview

The **Products** data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

From the **Products** endpoints you can retrieve:

- A list of all the products available for sale by the company:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-products`.
- The details of an individual product:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-products/{productId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"0-1": "_string_",
"0-2": "Identifier of the product, unique to the company.",
"1-0": "**categorization**",
"1-1": "_string_",
"1-2": "Retail category that the product is assigned to.",
"2-0": "**name**",
"2-1": "_string_",
"2-2": "Name of the product recorded in the commerce or point of sale platform.",
"3-0": "**description**",
"3-1": "_string_",
"3-2": "Description of the product recorded in the commerce or point of sale platform.",
"4-0": "**productCategoryRefs**",
"4-1": "See [Reference types](/datamodel-commerce-referencetypes#productcategoryref)",
"4-2": "Array of references to the [product category or categories](/datamodel-commerce-productcategories) that this product is a member of.",
"5-0": "**isGiftCard**",
"5-1": "_boolean_",
"5-2": "Whether or not the product is a gift card or voucher that can be redeemed.",
"6-0": "**variants**",
"6-1": "\\\*array of [product variants](#section-product-variants)",
"6-2": "For example, different colours, sizes, and specifications of a product.",
"7-0": "**createdDate**",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date on which the product was created in the commerce or point of sale platform.",
"8-0": "**modifiedDate**",
"8-1": "_string_  
See [date](/datamodel-shared-date)",
"8-2": "Date the product was last updated in the Codat system.",
"9-0": "**sourceModifiedDate**",
"9-1": "_string_  
See [date](/datamodel-shared-date)",
"9-2": "Date the product was last changed in the commerce or point of sale platform.",
"10-0": "**status**",
"10-1": "_string_",
"10-2": "Current status of the product in the commerce system, including:

- `Unknown`

- `Published`

- `Unpublished`"
  },
  "cols": 3,
  "rows": 11,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

## Product variants

Variations of a product available for sale. For example, the product in a different size or colour.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier of the product variant, unique to the company.",
"1-0": "**name** ",
"1-1": "_string_",
"1-2": "Name of the product recorded in the commerce or point of sale platform.",
"2-0": "**isTaxEnabled**",
"2-1": "_boolean_",
"2-2": "Whether sales taxes are enabled for this product variant.",
"3-0": "**sku**",
"3-1": "_string_",
"3-2": "SKU (stock keeping unit) of the variant, as defined by the merchant.",
"4-0": "**barcode**",
"4-1": "_string_",
"4-2": "Unique product number of the variant. This might be a barcode, UPC, ISBN, etc.",
"5-0": "**unitOfMeasure**",
"5-1": "_string_",
"5-2": "Unit of measure for the variant, such as `kg` or `meters`.",
"6-0": "**vatPercentage**",
"6-1": "_decimal_",
"6-2": "VAT rate for the product variant if sales taxes are enabled.",
"7-0": "**prices**",
"7-1": "_array of [product variant prices](#section-product-variant-price)_",
"7-2": "Prices for the product variants in different currencies.",
"8-0": "**inventory**",
"8-1": "_[product variant inventory](#section-product-variant-inventory)_",
"8-2": "Information about the total inventory as well as the locations inventory is in.",
"9-0": "**shippingRequired**",
"9-1": "_boolean_",
"9-2": "Indicates whether or not the product requires physical delivery.",
"10-0": "**createdDate**",
"10-1": "_string_  
See [date](/datamodel-shared-date)",
"10-2": "Date on which the product variant was created in the commerce or point of sale platform."
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Product variant price

Price of the product variant in the base currency of the commerce or point of sale platform.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**currency**",
"0-1": "_string_  
See [currency](/datamodel-shared-currency)",
"0-2": "Currency of the product variant price.",
"1-0": "**unitPrice**",
"1-1": "_decimal_",
"1-2": "Price of each unit of the product variant."
},
"cols": 3,
"rows": 2,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Product variant inventory

Inventory object providing information on the total inventory quantity as well as detailed quantities across several locations.

| Field             | Type                                                                                           | Description                                                 |
| :---------------- | :--------------------------------------------------------------------------------------------- | :---------------------------------------------------------- |
| **totalQuantity** | _decimal_                                                                                      | The total inventory across all locations.                   |
| **locations**     | _array of [product variant inventory locations](#section-product-variant-inventory-locations)_ | Details of the locations of each quantity of the inventory. |

## Product variant inventory locations

Inventory quantity in a location

| Field           | Type                                                                                                 | Description                                 |
| :-------------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| **quantity**    | _decimal_                                                                                            | The quantity of inventory at this location. |
| **locationRef** | _[reference type](/datamodel-commerce-referencetypes#section-locationref)_ | The location of the inventory.              |

## Example data

```json
{
   "products":[
      {
         "id":"e2b56d6c-4724-4ab6-84e9-495765c0df82",
         "categorization":"Hardware",
         "name":"Anvil (10,000lb)",
         "description":"An excellent Anvil (10,000lb)",
         "productCategoryRefs": [
            {
              "id": "102",
              "name": "Movie"
            }
          ],
         "isGiftCard":false,
         "variants":[
            {
               "id":"d459cfcf-a208-41ad-be45-aeaeee1403d3",
               "name":"Small",
               "isTaxEnabled":true,
               "sku":Anvil-UK-876676A,
               "barcode":564158468416486458646886484,
               "unitOfMeasure":lb,
               "vatPercentage":20.0,
               "prices":[
                  {
                     "currency":"GBP",
                     "unitPrice":10.09
                  },
                  {
                     "currency":"EUR",
                     "unitPrice":11.30
                  },
                  {
                     "currency":"USD",
                     "unitPrice":13.42
                  }
               ],
               "inventory": {
                  "totalQuantity":"5",
                  "locations": [
                      {
                        "quantity":"2",
                        "locationRef": {
                            "id":"UK-West",
                            "name":"West-Distribution-Center"
                      }
                  },
                  {
                      "quantity":"3",
                      "locationRef": {
                          "id":"UK-East",
                          "name":"East-Distribution-Center"
                      }
                   }
                 ]
               },
               "shippingRequired":true,
               "createdDate":"0001-01-01T00:00:00"
            },
            {
               "id":"5ae824f4-0100-4fff-aa37-526c19b87c55",
               "name":"Large",
               "quantity":1.0,
               "isTaxEnabled":true,
               "vatPercentage":20.0,
               "prices":[
                  {
                     "currency":"GBP",
                     "unitPrice":18.57
                  },
                  {
                     "currency":"EUR",
                     "unitPrice":20.80
                  },
                  {
                     "currency":"USD",
                     "unitPrice":24.70
                  }
               ],
               "shippingRequired":true,
               "createdDate":"0001-01-01T00:00:00"
            }
         ],
         "createdDate":"0001-01-01T00:00:00",
         "modifiedDate":"2018-10-01T08:42:41.491Z",
         "sourceModifiedDate":"2018-10-01T08:42:41.491Z",
         "status":"Published"
      },
      {
         "id":"7013d344-d012-4da7-90e6-0c3e15bdd91b",
         "categorization":"General",
         "name":"ACME Dynamite",
         "description":"An excellent ACME Dynamite",
         "isGiftCard":false,
         "variants":[
            {
               "id":"edd73224-f4e0-4e3e-835a-49260ae349a8",
               "name":"Small",
               "quantity":1.0,
               "isTaxEnabled":true,
               "vatPercentage":20.0,
               "prices":[
                  {
                     "currency":"GBP",
                     "unitPrice":7.13
                  },
                  {
                     "currency":"EUR",
                     "unitPrice":7.99
                  },
                  {
                     "currency":"USD",
                     "unitPrice":9.49
                  }
               ],
               "shippingRequired":true,
               "createdDate":"0001-01-01T00:00:00"
            },
            {
               "id":"9371bc9c-46ae-4f19-afa9-b4ed608d101a",
               "name":"Large",
               "quantity":1.0,
               "isTaxEnabled":true,
               "vatPercentage":20.0,
               "prices":[
                  {
                     "currency":"GBP",
                     "unitPrice":12.47
                  },
                  {
                     "currency":"EUR",
                     "unitPrice":13.97
                  },
                  {
                     "currency":"USD",
                     "unitPrice":16.59
                  }
               ],
               "shippingRequired":true,
               "createdDate":"0001-01-01T00:00:00"
            }
         ],
         "createdDate":"0001-01-01T00:00:00",
         "modifiedDate":"2018-10-01T08:42:41.491Z",
         "sourceModifiedDate":"2018-10-01T08:42:41.491Z",
         "status":"Published"
      }
   ]
}
```
