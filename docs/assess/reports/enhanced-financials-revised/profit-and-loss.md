---
title: "Enhanced Profit and Loss"
description: "Endpoint reference to produce a fully categorized profit and loss statement"
createdAt: "2023-01-25T13:57:24.867Z"
updatedAt: "2023-01-27T15:26:01.665Z"
---

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/assess/reports/enhanced-financials-revised/categorize-accounts) to a more suitable one. 

Explore the _Enhanced Profit and Loss Accounts_ endpoint in in our [Assess API reference](/assess-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts).

`GET /companies/{companyId}/reports/enhancedProfitAndLoss/accounts`

## Parameters

In addition to the mandatory **companyId**, you can also include these parameters in your API call.

| Parameter       	| Type            	| Description                                                                                 	| Required 	|
|-----------------	|-----------------	|---------------------------------------------------------------------------------------------	|----------	|
| **reportDate**     	| _string_<br/>See Date 	| YYYY-MM-DD.<br/>Datetime or Date (inclusive of the whole day).                                   	| Optional 	|
| **numberOfPeriods** 	| _integer_         	| The number of periods to return.<br/>If left blank, will return the latest available 12 months.  	| Optional 	|

## Data model

The response structure is split into two sections: _Report Info_ and _Report Items_.

### Report Info

| Field         	| Type            	| Description                                                           	|
|---------------	|-----------------	|-----------------------------------------------------------------------	|
| **name**          	| _string_        	| “EnhancedProfitAndLossAccounts”                                        	|
| **companyName**   	| _string_          	| Name of the company queried.                                          	|
| **currency**    	| _string_          	| Currency of the Profit and Loss.                                        	|
| **generatedDate** 	| _string_<br/>See Date  	| Returns the YYYY-MM-DD datetime of report generation. <br/>This is in UTC.  	|

### Report Items

The report items are sorted first by _date_, then by _category_ alphabetically. 

| Field           	| Type                        	| Description                                                                            	|
|-----------------	|-----------------------------	|----------------------------------------------------------------------------------------	|
| **date**            	| _string_<br/>See Date              	| Last date of the period.                                                               	|
| **balance**         	| _decimal_                     	| Balance of the account as reported on the Balance Sheet.                               	|
| **accountName**     	| _string_                      	| Name of the account.                                                                   	|
| **accountId**       	| _string_                      	| The unique account id.                                                                 	|
| **accountCategory** 	| _object_<br/>See [Account Category](/assess/reports/enhanced-financials-revised/profit-and-loss#account-category) 	| An object containing the suggested or confirmed account categories, up to five levels.  	|

#### Account Category

| Field  	| Type                 	| Description                                                                                                                              	|
|--------	|----------------------	|------------------------------------------------------------------------------------------------------------------------------------------	|
| **status** 	| _string_               	| Returns a status of "Suggested" or "Confirmed". If an account has a confirmed category, it will replace any suggested category returned. 	|
| **levels** 	| _object_<br/>See [Levels](/assess/reports/enhanced-financials-revised/profit-and-loss#levels)  	| An object containing an ordered list of account category levels.                                                                         	|

#### Levels

| Field         | Type      | Description                                                                                |
| :------------ | :-------- | :----------------------------------------------------------------------------------------- |
| **levelName** | _string_  | Account category name                                                                      |
| **confidence** | _decimal_ | Confidence level of the category. This will only be populated where `status` = "Suggested" |

Explore the example response:

```json
{
    "reportInfo": {
        "reportName": "EnhancedProfitAndLossAccounts",
        "companyName": "ABC LTD",
        "generatedDate": "2022-01-01",
    },
    "reportItems": [
        {
            "date": "2022-01-01",
            "balance": 70,
            "accountName": "Sales UK",
            "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
            "accountCategory": {
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Income",
                        "confidence": 0.95
                    },
                    {
                        "levelName": "Revenue",
                        "confidence": 0.90
                    }
                ]
            }
        },
        {
            "date": "2022-01-01",
            "balance": 30,
            "accountName": "Sales US",
            "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
            "accountCategory": {
                "lastUpdated": "datetime",
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Income",
                        "confidence": 0.95
                    },
                    {
                        "levelName": "Revenue",
                        "confidence": 0.90
                    }
                ]
            }
        },
        {
            "date": "2022-01-01",
            "balance": 70,
            "accountName": "Amazon",
            "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
            "accountCategory": {
                "lastUpdated": "datetime",
                "status": "Suggested",
                "levels": [
                    {
                        "levelName": "Income",
                        "confidence": 0.95
                    },
                    {
                        "levelName": "Revenue",
                        "confidence": 0.95
                    },
                    {
                        "levelName": "Online",
                        "confidence": 0.80
                    }
                ]
            }
        }
    ],
}
```

:::caution Legacy enhanced financials 
The categories outlined here will not be returned by the legacy [Enhanced Profit and Loss](/assess/reports/enhanced-financials-legacy/profit-and-loss) endpoint. It uses an [outdated version](/assess/categories/) of the account category taxonomy.
:::