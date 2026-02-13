---
title: "Manage multiple use cases with Codat"
description: "See how your organization can use Codat's solutions to implement multiple use cases"
sidebar_label: "Manage multiple use cases"
---

This guide is aimed at enterprise clients who use Codat's solutions for multiple use cases and covers the following:

- Configuration required to address multiple use cases
- API requests for customers who share data for multiple use cases
- Features and specifics of Codat's solutions

## Key terms and features

**Products** are feature packages representing a use case that can be enabled in the Codat Portal. Codat supports:

    - **Standard products** that include data types defined by Codat as relevant and are available globally for all clients, such as Bank Feeds, Expenses, or Lending.
    - **Custom products** that include data types requested by the client for a bespoke solution and are only available for use by that client.

You can apply either **sync settings** that fit your use case best. Codat distinguishes either:

    - **Client-level** sync settings that are managed via **Settings > Data Types** in the Codat Portal, or
    - **Product-level** sync settings that are maintained by Codat upon client request.

To avoid the risk of dual syncs, you must only apply one type of sync settings.

Products are represented by an additional `products` property on calls to the [Create company](/platform-api#/operations/create-company) endpoint and can be added to an existing company using the [Add product](/platform-api#/operations/add-product) endpoint.

Codat's [webhook service](/using-the-api/webhooks/overview) provides a range of event types for standard products. To be notified about data read events for custom products, use the `{productIdentifier}.read.completed` webhooks.

## Assign products to companies

The following guidance is suitable for enterprise clients who have implemented Codat with a central data ingestion layer.

### Create new company

You can assign a product to a company at the point of creating that company. As a result, product-level sync settings will apply to the first data fetch every time the company gains a new connection in the `Linked` status.

![Sync flow diagram for updating existing companies with products](/img/enterprise/implementation/consent/syncflowproductsexisting.png)

### Update existing company

You can assign a product to an existing company that already has a connection in the `Linked` status using the [Add product](/platform-api#/operations/add-product) endpoint. The product-level sync settings will apply to the connection once the product is added.

This scenario assumes your customer has consented to the data type requirements of the additional use case.

![Sync flow diagram for creating new companies with products](/img/enterprise/implementation/consent/syncflowproductsnew.png)

To remove a product from an existing company, use the [Remove product](/platform-api#/operations/remove-product) endpoint.

## Refresh data

### Refresh in the Portal

The **Refresh data** button in the Codat Portal uses the client-level sync settings defined in **Settings > Data types** when a data refresh is triggered. It doesn't use any product-level sync settings that may have been maintained.

### Refresh via API

:::warning Not applicable to standard solutions

The methods listed below can't be used to refresh data for Codat's **standard solutions**. Refer to individual solutions' documentation instead.

:::

If you are using **client-level** sync settings, you can queue a data type refresh with these settings for a company using the [Refresh all data](/platform-api#/operations/refresh-company-data) or [Refresh data type](/platform-api#/operations/refresh-data-type) endpoints.

If you are using **product-level** settings applied to **custom products**, you can refresh the data using the [Refresh product data](/platform-api#/operations/refresh-product-data) endpoint.

When refreshing data for a custom product, remember:

- If a data sync is already in progress for a custom product, the refresh request will return a `Bad request (400)` response.
- If a company has multiple custom products assigned, you have to refresh data for each product individually.

### Manage data types in multiple products

Some data types may be required and used by multiple use cases and products. While the impact of this depends on your architecture, Codat supports product-level syncs to reduce your need for additional caching or data storage.

:::info Data type syncs in streaming or event-based architecture

If your organization employs several products that share a data type, teams using these products expect to see a complete set of data that covers the sync period and frequency defined by that team. They don't want to be impacted by data syncs triggered by a different team.

It may be that:

- Product A fetches invoices and payments once a day around 11 PM.
- Product B fetches payments every hour on the hour.

Codat ensures that, for product A, the `recordsModifiedFrom` date will align with its previously scheduled sync and will capture all records modified after 11 PM the day before.

:::

### Custom product webhooks

Codat's webhook service supports custom `{productIdentifier}.read.completed` event types that will be sent to the configured endpoint when Codat has successfully fetched or exhausted fetching data.

As a result, unless you are using one of the sub-event types, such as `.successful` or `.unsuccessful`, you will see a `Complete` or `Error` status for all data types in that product.

A data type may end up in an `Error` state in the following scenario:

1. Codat tries to perform a scheduled daily sync defined by product-level sync settings for a `Linked` connection.
2. The linked accounting software is experiencing downtime.
3. Codat receives an error response from the accounting software.
4. Codat retries the data sync up to 10 times over a 12-hour period and continues receiving error responses from the software.
5. Codat flags the data set with a `FetchError` status and sends a `read.completed` webhook.

### Specific event types

You may choose to receive webhooks for more specific event types, such as successful or unsuccessful reads:

- `read.completed.successful` or `{productIdentifer}.read.completed.successful` are sent of all data types have synced successfully. The synced data types may have validation warnings, but not validation errors.
- `read.completed.unsuccessful` or `{productIdentifer}.read.completed.unsuccessful` are sent if Codat has completed the fetch for all data types, but some have completed with errors.

The first webhook you receive after an initial successful company connection (this could be a `read.completed.successful.initial`, `read.completed.successful` or `read.completed` event type) will present `recordsModified` as `false`. Next time you receive a notification from a `read.completed` event, such as after the next scheduled sync, you will see a true reflection of any record modifications since that first fetch of data.

## Implementation considerations

The plan below reflects the activities required to migrate company syncs from using client-level sync settings to product-specific sync settings.

| **#** | Activity                                                                                              | Impact on webhooks                                                                                                                                          | Impact on sync                                                                  | Rollback actions                                                                                                                                                                                                                            |
| ----- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | Disable client-level sync settings                                                                    |                                                                                                                                                             | No further syncs scheduled except those already triggered                       | Re-enable client-level sync settings                                                                                                                                                                                                        |
| **2** | Wait for an hour or for the duration of the most frequent previous sync schedule                      |                                                                                                                                                             | Allows any client-level syncs already in progress to complete                   | Re-enable client-level sync settings                                                                                                                                                                                                        |
| **3** | Disable previous webhook configuration                                                                | Event notifications will no longer be sent                                                                                                                  |                                                                                 | 1. Resubscribe to previously disabled webhook events<br/>2. Re-enable client-level sync settings                                                                                                                                            |
| **4** | Configure webhooks for new event types                                                                | **Standard products**: subscribe to `read.completed` event types. <br/> **Custom products**: subscribe to `{productIdentifier}.read.completed` event types. |                                                                                 | 1. Unsubscribe from the new event types<br/>2.Resubscribe to previously disabled webhook event types<br/>3. Re-enable client-level sync settings                                                                                            |
| **5** | Add products to all companies using the [Add product](/platform-api#/operations/add-product) endpoint |                                                                                                                                                             | This will trigger a fetch of the product’s data types for the updated companies | 1. [Remove product](/platform-api#/operations/remove-product) from the company <br/>2. Unsubscribe from the new event type series<br/>3. Resubscribe to previously disabled webhook event types<br/>4. Re-enable client-level sync settings |

#### Additional considerations

When planning to implement multi-use case support, assess how this change may impact the following areas:

- **Environment management:** do you have multiple development, testing, and staging environments?

- **Developer apps with partners:** will you require more than one developer app for each accounting integration you support?

- **Consent journey:** how will you ask your customers for additional consent in a transparent and compliant way?

For more information on implementing multi-use case support, get in touch with your Codat contact.
