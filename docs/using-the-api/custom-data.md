---
title: "Custom data"
sidebar_label: "Custom data"
description: "Leverage existing integrations to fetch data types not included in Codat's out-of-the box data model"
---

import {IntegrationsList} from '@components/global/Integrations'
import {integrationsFilterCustomData} from '@components/global/Integrations/integrations'

## What is custom data?

We relied on our extensive industry experience and knowledge to identify and standardize a multitude of data types that best support your business, and included them in Codat's data model. 

However, these data types are only a subset of what is available in the source platforms we integrate with. For example, we do not currently fetch any data from Xero's [Payroll](https://developer.xero.com/documentation/api/payrolluk/overview) and NetSuite's [Expense Reports](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N908140.html#Expense-Reports) endpoints.

With custom data, we made it possible for you to fetch new, non-standardized data types that are not included in our out-of-the box data model for the integrations we support.

Custom data is only available to consume via our API.

:::tip Custom or supplemental data?

Are you looking to fetch, create, or update additional _properties_ in data types already supported by Codat's standardized data model? You might need to use [supplemental data](/using-the-api/supplemental-data/overview) instead.

:::

## Supported integrations

<IntegrationsList filter={integrationsFilterCustomData}/>

Custom data does not extend to all underlying API endpoints for Xero and Sage Intacct. To learn more about the limitations of custom data for these integrations, request coverage of unsupported endpoints, or discover integration-specific behaviors, please speak to your Codat contact. 

## Configure custom data

You need to specify the new data type and its associated data source for each integration you require. We advise you to make your custom configuration as similar as possible to our standard data types so you can interact with them in exactly the same way. 

To do so, use the Configure custom data (OAS LINK) endpoint.

```http
PUT /integrations​/{platformKey}/datatypes/custom/{customDataIdentifier}
```

Keep the following guidance in mind when creating your configuration: 

- Only a single data source is allowed for each custom data type. 
- It is not possible to change the `customDataIdentifier` once you created the configuration, but you can update the content of it using the same endpoint (I ASSUME THIS IS CORRECT?). 
- It is not possible to specify nested objects or arrays within the `requiredData` property.

```json title="Example request body for myExpenseData custom data type"
{
    "dataSource": "/expenses",
    "requiredData": {
      "myExpenseId": "$.expenseId",
      "myExpenseDetails": "$.expenseDetails.notes",
    },
    "keyBy": ["$.expenseId", "$.accountId"], 
    "sourceModifiedDate": ["$.modifiedDate", "$.createdDate", "$.lines[*].modifiedDate"]  
}
```  
:::caution Check your configuration values!

Codat does not validate any of the values you enter in the configuration request. 

For example, if you misspell the `requiredData` or the `dataSource` values when you create the configuration, you will receive a fetch error in response when trying to pull it later. 

You must also specify the `dataSource` including any additional routes associated with it. For example, FreeAgent's [Estimates API](https://dev.freeagent.com/docs/estimates) must be specified as `"dataSource": "/v2/estimates"`, not `"dataSource": "/estimates"`.

:::

### Manage existing configuration

You can view previously created configurations for a specific platform using the following endpoints: 

* `GET /integrations​/{platformKey}/datatypes/custom/` (OAS LINK) returns **all** configured custom data for the platform you indicate. 
* `GET /integrations​/{platformKey}/datatypes/custom/{customDataIdentifier}` (OAS LINK) returns the configuration of the specified custom data for the platform you indicate.

You can also delete configuration for a specific custom data you created using the following endpoint:

* `DELETE /integrations​/{platformKey}/datatypes/custom/{customDataIdentifier}` (OAS LINK)

You will not receive a response to this request. Once the configuration is deleted, you will not be able to view it using the `GET` endpoints listed above. You can still view the data you have previously synced for this custom data type.

:::tip Test custom data

It's not possible to test custom data in the Codat Sandbox. Instead, create a test company with a data connection to an integration and trial different configuration options.

:::

## Sync and view custom data

Custom data configuration is created for a specific platform, so you can only queue a custom data sync for data connections that use that platform as a source. Use the ENDPOINT NAME (OAS LINK) to do so:

`POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}`


:::info Refresh all data

Requests to our [Refresh all data](/platform-api#/operations/refresh-company-data) endpoint do not trigger a sync for any of the custom datasets. 

:::

To view synced custom data, use the ENDPOINT NAME (OAS LINK). You must specify a page number in the request.

`GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}?page=1`

## 💡 Tips and traps

- Custom data is available at record and line item level, but only supports fetch operations. 

- Our [querying](/using-the-api/querying) functionality doesn't support custom data, but you can include required URL parameters in the `dataSource` of your custom data configuration (ANDY PLEASE CHECK IF I UNDERSTOOD THIS RIGHT).

- Our [Fetch on first link](/core-concepts/data-type-settings#use-fetch-on-first-link) functionality doesn't support custom data. [Advanced sync functionalities](/knowledge-base/advanced-sync-settings) like `Sync from UTC` are available where the integration already supports it.

DO WE MENTION THE FETCH HISTORY ENDPOINTS?

---

## Read next

See if [supplemental data](/using-the-api/supplemental-data/overview) is right for you