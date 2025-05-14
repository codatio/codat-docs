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

You can apply **sync settings** that fit your use case best to these data types. Codat distinguishes:

    - **Client-level** sync settings that are managed via **Settings > Data Types** in the Codat Portal.
    - **Product-level** sync settings that are mainted by Codat upon client request.

Products are represented by an additional `products` property on calls to the [Create company](/platform-api#/operations/create-company) endpoind and can be added to an existing company using the [Add product](/platform-api#/operations/add-product) endpoint. 

Codat's [webhook service](/using-the-api/webhooks/overview) provides a range of event types for standard products. To be notified about data read events for custom products, use `\{productIdentifier}.read.completed` webhooks.

## Assign products to companies

The following guidance is suitable for enterprise clients who have implemented Codat with a central data ingestion layer.

### Create new company

You can assign a product to a company at the point of creating that company. As a result, product-level sync settings will apply to the first data fetch every time the company gains a new connection in the `Linked` status. 

![sync flow for creating new companies with products](/img/enterprise/implementation/consent/syncflowproductsnew.png)

### Update existing company

You can assign a product to an existing company that already has a connection in the `Linked` status using the [Add product](/platform-api#/operations/add-product) endpoint. The product-level sync settings will apply to the connection once the product is added. 

This scenario assumes your customer has consented to the data type requirements of the additional use case. 

![sync flow for updating existing companies with products] (/img/enterprise/implementation/consent/syncflowproductsexisting.png)

To remove a product from an existing company, use the [Remove product](/platform-api#/operations/remove-product) endpoint.

### Refresh data 

#### Refresh in the Portal

The **Refresh data** button in the Codat Portal uses the client-level sync settings defined in **Settings > Data types** when a data refresh is triggered. It doesn't use any product-level sync settings that may have been maintained. 

#### Refresh via API

:::warning Not applicable to standard solutions

The methods listed below can't be used to refresh data for Codat's **standard solutions**. Refer to individual solutions' documentation instead.

:::

If you are using **client-level** sync settings, you can queue a data type refresh with these settings for a company using the [Refresh all data](/platform-api#/operations/refresh-company-data) or [Refresh data type](/platform-api#/operations/refresh-data-type) endpoints.

If you are using **product-level** settings applied to **custom products**, you can refresh the data using the [Refresh product data](/platform-api#/operations/refresh-product-data) endpoint. 

When refreshing data for a custom product, remember:

- If a data sync is already in progress for a custom product, the refresh request will return a `Bad request (400)` response.
- If a company has multiple custom products assigned, you have to refresh data for each product individually. 

### Manage data types in multiple products

Some data types may be required and used by multiple use cases and products.  While the impact of this depends on your architecture, Codat supports product-level syncs to reduce your need for additional caching or data storage.

:::info Data type syncs in streaming or event-based architecture

 a team that uses a product's output is likely to expect a complete set of data that covers the period and frequency defined by that team. They don't want to be impacted by data syncs for a shared data type triggered by a different team, such as: 

- Product A fetches invoices and payments once a day around 11 PM.
- Product B fetches payments every hour on the hour.

For Product A, the `recordsModifiedFrom` date will align with its previously scheduled sync, capturing all records modified after 11 PM the day before.

:::
 

### Custom product webhooks
'\{productIdentifier}.read.completed' events will be sent to the endpoint you’ve defined when Codat has successfully fetched or exhausted fetching the data.  Therefore, unless you are using one of the sub-events such as .successful or .unsuccessful, you will expect to see a status for all data types in that product as Complete or an Error state.  


For example:
1. Codat fetches data as per the daily regular sync schedule (defined by the product-level sync settings) for a Linked connection and the accounting platform is experiencing some downtime
2. Codat receives an error response from the accounting platform
3. Codat retries up to 10 times on an exponential backoff over a 12 hour period 

If Codat continues to receive those error responses from the accounting platform after the 10 retries, i.e. around 12 hours later, that would trigger the dataset to be flagged with FetchError status and read.completed webhook is sent

### Specific events (applies to both read.completed series and '\{productIdentifer}.read.completed series')
'read.completed.successful' is sent if all data types have a successful sync, but may have validation warnings (not validation errors)

'read.completed.unsuccessful' is sent if Codat has completed the fetch for all data types and some are not successful.

The first webhook received after successful company connection - read.completed.successful.initial or read.completed.successful or read.completed - will present recordsModified as false. The next time you receive an event from the read.completed series i.e. after the next sync at defined frequency, will provide a true reflection of whether any records have been modified since that first fetch of data.

## Considerations when starting to implement multiple use cases
The following plan shares the steps to move away from companies syncs being driven by the same client-level sync settings to product-specific sync settings

 


Migration plan for existing companies

| Step | Impact on Webhooks                                                | Impact on Sync                                                                 | Rollback Actions                                                                                                                   |
|------|-------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 1. Disable client level sync settings | No further syncs scheduled, except those already triggered by client-level sync settings | 1. Enable client level sync settings                                           |
| 2. Wait an hour (or previous most frequent sync schedule) | Allows for any client-level sync settings already in progress to complete      | 1. Enable client level sync settings                                           |
| 3. Disable previous webhook events        | Events will no longer be sent                                                 | 1. Subscribe to previously disabled webhook events<br/>2. Enable client level sync settings                                         |
| 4. Enable new webhooks (`\{productIdentifier}.read.completed` series) | For standard products - `read.completed` series should be enabled<br/>For custom products - `\{productIdentifier}.read.completed` series should be enabled | 1. Unsubscribe from `read.completed` series or `\{productIdentifier}.read.completed` event series<br/>2. Subscribe to previously disabled webhook events<br/>3. Enable client level sync settings |
| 5. Add products to all companies using [PUT/companies/product](/platform-api#/operations/add-product)`PUT /\{companyId}/products/\{productIdentifier}` | This will prompt a fetch for the product’s data types                          | 1. `DELETE /\{companyId}/products/\{productIdentifier}`<br/>https://docs.codat.io/platform-api#/operations/remove-product<br/>2. Unsubscribe from `read.completed` series or `\{productIdentifier}.read.completed` event series<br/>3. Subscribe to previously disabled webhook events<br/>4. Enable client level sync settings |


## Additional considerations:
You may want to assess how supporting multiple use cases impacts your

- Environment management (where enterprise clients typically use multiple development, testing and staging environments)

- Developer Apps with Partners (for example where one or more developer apps may be required per accounting platform)

- Consent Journey - how you ask your customers for consent to optimise their customer experience whilst ensuring you ask for consent in a transparent and compliant way


For more information, please get in touch with your Codat contact to discuss implementing support for multiple use cases.

 
