---
title: "Enhanced Balance Sheet for eCommerce lenders"
description: "Endpoint reference to produce a fully categorized balance sheet using the revised categorization version for eCommerce lenders"
createdAt: "2023-01-25T13:57:24.867Z"
updatedAt: "2023-01-27T15:26:01.665Z"
---
::: caution Account categories 
The categories outlined here will not be returned by the older [Enhanced Balance Sheet](/assess/reports/enhanced-financials/balance-sheet) endpoint. It uses an [older version](/assess/categories/) of the account category taxonomy.
:::

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/assess/reports/enhanced-financials-ecommerce-lenders/categorize-accounts) to a more suitable one. 

Explore the _Enhanced Balance Sheet Accounts_ endpoint in our [Assess API reference](/assess-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts).

`GET /companies/{companyId}/reports/enhancedBalanceSheet/accounts`

## Parameters

In addition to the mandatory **companyId**, you can also include these parameters in your API call.

| Parameter       	| Type            	| Description                                                                                 	| Required 	|
|-----------------	|-----------------	|---------------------------------------------------------------------------------------------	|----------	|
| **reportDate**     	| _string_<br\>See [Date]() 	| YYYY-MM-DD.<br\>Datetime or Date (inclusive of the whole day).                                  	| Optional 	|
| **numberOfPeriods** 	| _integer_         	| The number of periods to return.<br\>If left blank, will return the latest available 12 months. 	| Optional 	|

## Data model

The response structure is split into two sections: _Report Info_ and _Report Items_.

### Report Info

| Field         	| Type            	| Description                                                           	|
|---------------	|-----------------	|-----------------------------------------------------------------------	|
| **name**          	| _string_        	| “EnhancedBalanceSheetAccounts”                                        	|
| **companyName**   	| _string_          	| Name of the company queried.                                          	|
| **currency**    	| _string_          	| Currency of the Balance Sheet.                                        	|
| **generatedDate** 	| _string_<br\>See [Date]() 	| Returns the YYYY-MM-DD datetime of report generation. <br\>This is in UTC. 	|

### Report Items

The report items are sorted first by _date_, then by _category_ alphabetically.

| Field           	| Type                        	| Description                                                                            	|
|-----------------	|-----------------------------	|----------------------------------------------------------------------------------------	|
| **date**            	| _string_<br\>See Date             	| Last date of the period.                                                               	|
| **balance**         	| _decimal_                     	| Balance of the account as reported on the Balance Sheet.                               	|
| **accountName**     	| _string_                      	| Name of the account.                                                                   	|
| **accountId**       	| _string_                      	| The unique account id.                                                                 	|
| **accountCategory** 	| _object_<br\>See [Account Category](/assess/reports/enhanced-financials-ecommerce-lenders/balance-sheet#account-category) 	| An object containing the suggested or confirmed account categories, up to five levels. 	|

#### Account Category

| Field  	| Type                 	| Description                                                                                                                              	|
|--------	|----------------------	|------------------------------------------------------------------------------------------------------------------------------------------	|
| **status** 	| _string_               	| Returns a status of "Suggested" or "Confirmed". If an account has a confirmed category, it will replace any suggested category returned. 	|
| **levels** 	| _object_<br\>See [Levels](/assess/reports/enhanced-financials-ecommerce-lenders/balance-sheet#levels) 	| An object containing an ordered list of account category levels.                                                                         	|

#### Levels

| Field         | Type      | Description                                                                                |
| :------------ | :-------- | :----------------------------------------------------------------------------------------- |
| **levelName** | _string_  | Account category name                                                                      |
| **levelName** | _decimal_ | Confidence level of the category. This will only be populated where `status` = "Suggested" |

Explore the example response:

```json
{
    "reportInfo": {
        "reportName": "EnhancedBalanceSheetAccounts",
        "companyName": "ABC LTD",
        "generatedDate": "2022-01-01",
    },
    "reportItems": [
        {
            "date": "2022-01-01",
            "balance": 70,
            "accountName": "Sales UK",
            "acountId": "13931cbf-ea06-4d6e-9538-a8457fa66011", 
            "accountCategory": {
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Asset",
                        "confidence": 0.99
                    },
                    {
                        "levelName": "Current",
                        "confidence": 0.95
                    }
                ]
            }
        },
        {
            "date": "2022-01-01",
            "balance": 30,
            "accountName": "Sales US",
            "acountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
            "accountCategory": {
                "lastUpdated": "datetime",
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Asset",
                        "confidence": 0.99
                    },
                    {
                        "levelName": "Current",
                        "confidence": 0.95
                    }
                ]
            }
        },
        {
            "date": "2022-01-01",
            "balance": 70,
            "accountName": "Amazon",
            "acountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
            "accountCategory": {
                "lastUpdated": "datetime",
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Asset",
                        "confidence": 0.99
                    },
                    {
                        "levelName": "Current",
                        "confidence": 0.95
                    },
                    {
                        "levelName": "RelatedParties",
                        "confidence": 0.97
                    }
                ]
            }
        }
    ]
}
```