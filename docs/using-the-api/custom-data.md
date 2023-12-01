---
title: "Custom data types"
sidebar_label: "Custom data"
description: "Leverage existing integrations to fetch data types not included in Codat's out-of-the box data model"
---

import {IntegrationsList} from '@components/global/Integrations'
import {integrationsFilterCustomData} from '@components/global/Integrations/integrations'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Advanced feature
Request guidance from your Codat contact if you want to implement this feature of our API.
:::

## What are custom data types?

Codat's standard data models leverage our extensive industry experience and knowledge, which we used to identify and standardize a multitude of data types that best support your business. 

However, your use case may require additional data types from our integrations that are excluded from our standard model. For example, we do not currently fetch any data from Xero's [Payroll](https://developer.xero.com/documentation/api/payrolluk/overview) and NetSuite's [Expense Reports](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N908140.html#Expense-Reports) endpoints.

With custom data, you can fetch new, non-standardized data types that are not included in our out-of-the-box data model for the integrations we support. You will need to configure and request these custom data types using our API endpoints. 

![A diagram that compares standard data types at Codat with custom data types](/img/use-the-api/custom-data.png)

:::tip Custom or supplemental data?

Are you looking to fetch, create, or update additional _properties_ in data types already supported by Codat's standardized data model? You might need to use [supplemental data](/using-the-api/supplemental-data/overview) instead.

:::

## Supported integrations

<iframe 
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSZhBnE0b69-_VZ107d-i-I4pjgGFgMBGL0rVq7yxdUJZoKSsvcHY4wX-p9YZyA0zX-gU6-2e1eBkhI/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "250px" }}
></iframe>

## Configure custom data

#### Create new custom data type

Use our [Configure custom data type](/platform-api#/operations/configure-custom-data-type) endpoint to create a new data type for each integration you require. Keep these guidelines in mind:

- You can only indicate a single data source for each custom data type. 
- It is not possible to specify nested objects or arrays within the `requiredData` property.
- You can query the underlying platform's API by specifying the query as part of the `dataSource` property.

We advise you make your custom configuration as similar as possible to our standard data types so you can interact with them in exactly the same way. 

<Tabs>
  <TabItem value="request" label="Request">  

```json
PUT /integrations​/{platformKey}/datatypes/custom/{customDataIdentifier}

{
    "dataSource": "{endpointFromUnderlyingPlatform}",//required
    "requiredData": {
      "{nameYourField}": "$.{fieldNameFromUnderlyingPlatform}",
      "{nameYourField}": "$.{fieldNameFromUnderlyingPlatform}"
    },
    "keyBy": [“$.{fieldNameFromUnderlyingPlatform}”],//required
    "sourceModifiedDate": ["{fieldNameFromUnderlyingPlatform}"]  
}

```  
  </TabItem>
  <TabItem value="example" label="Example">  

```json title="Example request using QuickBooks Online's CashFlow endpoint"

PUT /integrations/qhyg/datatypes/custom/qbo-cashflow-report

{
    "dataSource": "/reports/CashFlow",
    "requiredData": {
        "Heads": "$.Header.EndPeriod",
        "Header": "$.Header",
        "Rows": "$.Rows",
        "Columns": "$.Columns"
    },
    "keyBy": ["$.Header.ReportName"],
    "sourceModifiedDate": ["$.Header.Time"]
}
```
  </TabItem>
</Tabs>

:::caution Check your configuration values!

Codat does not validate any of the values you enter in the configuration request. If you misspell values or don't specify the full API routes, you will receive a fetch error when trying to pull the custom data type later. 

Refer to the platform's own API documentation to make sure you are using the correct endpoint, route, and field names.

:::

#### Update existing configuration

Once you configured a custom data type, you can't change its `customDataIdentifier`. However, you can update the data type's content using the [Configure custom data type](/platform-api#/operations/configure-custom-data-type) endpoint. 

#### View existing configuration

You can view previously created configurations for a specific platform using the following endpoint: 

* [Get custom data configuration](/platform-api#/operations/get-custom-data-type-configuration) returns the configuration of the specified custom data type for the platform you indicate in `platformKey`.

#### Test your configuration

It's not possible to test custom data types in the Codat Sandbox. Instead, create a test company with a data connection to an integration and trial different configuration options.

## Sync and view custom data

Custom data configuration is created for a specific platform, so you can only queue a custom data type sync for connections that use that platform as a source. Use the [Refresh custom data type](/platform-api#/operations/refresh-custom-data-type) endpoint to do so:

```
POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}
```

:::info Refresh all data

Requests to our [Refresh all data](/platform-api#/operations/refresh-company-data) endpoint do not trigger a sync for any of the custom datasets. 

:::

To view synced custom data, use the [List custom data type records](/platform-api#/operations/list-custom-data-type-records) endpoint. You must specify a page number in the request.

```
GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}?page=1
```

To view the pull history for your custom data types, use the following endpoints. In the response, `dataType` property will reflect the custom data type as `custom/{customDataIdentifier}`:

- [List pull operations](/platform-api#/operations/list-pull-operations) to view the company's pull history for all of its data types
- [Get pull operation](/platform-api#/operations/get-pull-operation) to view information about a single specific dataset.

## 💡 Tips and traps

- Custom data types can be used at record and line item level, but only support fetch operations. 

- Custom data types support ony JSON responses from the integrations' APIs.

- Codat's [querying](/using-the-api/querying) functionality doesn't support custom data types, but you can include URL parameters that are accepted by the underlying platform in the `dataSource` of your custom data type configuration.

- Codat's [Fetch on first link](/core-concepts/data-type-settings#use-fetch-on-first-link) functionality doesn't support custom data types.
