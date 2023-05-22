---
title: "Create and update data"
description: "Understand how to add data and update data in Codat's integrated platforms"
---

In addition to pulling data from integrations, you can push data to create and update records in the underlying integrations using Codat's data model.

:::note Data coverage

View the full details of Codat's support for pushing data for each accounting platform in the <a class="external" href="https://knowledge.codat.io/supported-features/accounting" target="_blank">Data Coverage Explorer</a>.

:::

## Types of push

Codat supports two types of push to a company's data source: 

- `POST` - Create a record in a company's accounting software
- `PUT` - Update an existing record

Create and update operations behave similarly, with both having an options endpoint and returning a _pushOperation_ to allow you to monitor the state of the push. 

There are some additional considerations when updating to help ensure the company's data integrity.

## Step 1: Options

Before pushing data into accounting software, it is often necessary to collect some details from the user as to how they would like the data to be inserted. This includes names and amounts on transactional entities, but also factors such as categorization of entities, which is often handled differently between different accounting packages. A good example of this is specifying where on the balance sheet/profit and loss reports the user would like a newly-created nominal account to appear.

Our `/options` endpoint exposes which fields are required to be pushed for a specific linked company, and the options which may be selected for each field.

### GET /options

You can retrieve the options for a given data type by calling:

`GET /companies/{companyId}/connections/{connectionId}/options/{dataType}` 

<a class="external" href="https://docs.codat.io/codat-api#/operations/get-create-update-model-options-by-data-type" target="_blank">See the API reference</a>.

```json title="Response from this endpoint for the accounts dataset"
{
  "type": "Object",
  "displayName": "Nominal Account",
  "description": "Account represented in the chart of accounts or general ledger.",
  "properties": {
    "nominalCode": {
      "type": "String",
       "displayName": "Nominal Code",
       "description": "Identifier for the nominal account.",
       "required": true,
       "validation": {
         "warnings": [{
            "field": "nominalCode",
             "details": "Must have a length between 1 and 7 characters."
          }
        ]
      }
      
    },
     "name": {
       "type": "String",
       "displayName": "Name",
       "description": "Name of account as it appears in the chart of accounts or general ledger.",
       "required": true
      
    },
     "fullyQualifiedCategory": {
      "type": "String",
      "displayName": "Fully Qualified Category",
      "description": "Account type and category for nominal account.",
      "options": [{
          "value": "Asset.CashOnHand",
          "type": "String",
          "displayName": "Cash On Hand"
        }, {
          "value": "Asset.Checking",
          "type": "String",
          "displayName": "Checking"
        }
      ],
      "required": true,
    }
  },
  "required": false,
}
```

This example describes the nominal account object as requiring three properties to be populated: `nominalCode`, `name`, and `fullyQualifiedCategory`. 

- The `nominalCode` property is a string, which has a validation warning that it must be between 1 and 7 characters long. 
- The `name` property is an unrestricted string. 
- The `fullyQualifiedCategory` property is an enum property, namely it accepts a string chosen from a list of options (in this case, "Asset.CashOnHand" and "Asset.Checking"). The `displayName` on the options can be used to display the user a more descriptive name, such as "Cash On Hand" and "Checking".

### Displaying options to your user

The structure of the options endpoint is designed such that it can be easily parsed into a set of controls which can be displayed to the end user such that they can select how data is pushed into their accounting software.

For example, when rendering the "fullyQualifiedCategory" from the above example as a control on a HTML form, it can be parsed into the following:

```html
<select name="fullyQualifiedCategory" required>
  <option value="Asset.CashOnHand">Cash On Hand</option>
  <option value="Asset.Checking">Checking</option>
</select>
```

## Step 2: Pushing a record

:::caution Pushing data not referenced by the Options endpoint

If you attempt to push a record using fields that are not documented in the Options response for that company, the additional data may not be pushed to the platform and you may receive validation errors in response to your "push" request.
:::

### The push endpoint

The endpoint for pushing a record is as follows:

`POST /companies/{companyId}/connections/{connectionId}/push/{dataType}`

An example would be <a href="/accounting-api#/operations/post-invoice">posting a new invoice to an accounting package for a given company</a>.

The request body should be a JSON object which conforms to the structure of the options endpoint above. It is expected that the options endpoint is queried before performing any push operation.

For example, a valid request body for the example above would be as follows:

```json
{
  "nominalCode": "4200", 
  "name": "Codat Bank Account", 
  "fullyQualifiedCategory": "Asset.CashOnHand" 
}
```
The response from the push endpoint is a PushOperation object, which is structured as follows:

```json
{
  "pushOperationKey": "f989ebc8-1fc6-4367-acd1-1892e97bb7b0",
  "companyId": "9ac8109a-ebf9-464a-b178-fdab4970a584",
  "dataConnectionId": "15b69c97-318c-46c4-bb68-6f451f365227", 
  "dataType": "accounts",
  "status": "Pending",
  "requestedOnUtc": "2018-08-15T17:22:00",
  "completedOnUtc": null,
  "data": {},
  "validation": {}
}
```
Properties on the object are as follows: 

- **pushOperationKey**: A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted
- **dataType**: The type of data being pushed, eg invoices, customers 
- **status**: The status of the push operation, which can be `Pending`, `Failed`, `Success`, `TimedOut`, or `Unknown`
- **requestedOnUtc**: The datetime (in UTC) when the push was requested 
- **completedOnUtc**: The datetime (in UTC) when the push was completed, null if Pending 
- **data**: The object which was pushed. If the push has completed successfully, this represents the object as it appears in the platform (with any platform-generated fields populated)
- **validation**: A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.

### Synchronous vs asynchronous push

The majority of platforms are implemented to push asynchronously so you will receive a `Pending` push operation in response to your push request.  You can use the details in this response to monitor the status of your push request. 

For some platforms, pushing may be implemented synchronously and you may receive a `Success` or `Failed` push operation in response to your push request (in place of a `Pending` push operation). However, we strongly suggest that you assume that all pushes will be processed asynchronously when integrating with Codat.

### Timeouts

It is possible for an operation to be in a `Pending` status indefinitely, for example if a user's on-premise software is offline. To avoid possible issues this could create for clients, Codat provides a timeout functionality for push operations in the `Pending` status. If the `timeoutInMinutes` property has been set on a push operation, Codat will guarantee that the operation will not be processed after that deadline. If the deadline expires, the status of the push operation will change to `TimedOut`.

## Step 3: Monitoring status of push

For asynchronous push operations, where the push is initially in a `Pending` status, you may wish to have a process that will provide an update on a final `Success` or `Failed` state, or `Unknown` state if the outcome of the push is unclear. This outcome can then be communicated to the user, or further actions can be taken.

Codat supports two methods of monitoring the status of push operations: polling and webhooks. 

### 1. Polling

The Codat API provides two endpoints for monitoring push operations: one for viewing the status of all the most recent push operations, and one for viewing the status of a single push operation, identified by the `PushOperationKey` returned when you requested the push.

You can:

- List all push operations (paged) for a company using `GET /companies/{companyId}/push`
- Get a single push operation by ID using `GET /companies/{companyId}/push/{pushOperationKey}`.

You can periodically poll the single endpoint while a push is in a `Pending` state to identify when it enters a `Success`, `Failed`, or `Unknown` state, at which point the outcome can be communicated to the user. 

The list endpoint can be used to present to the user a list of recent push requests and their statuses. This can be useful for applications which push data frequently.

### 2. Webhooks

A second option for monitoring push operations is to register a subscription to the "Push status changed" rule. This can be configured by following the instructions in our documentation for [subscribing to rules](/introduction/webhooks/core-rules-create).
