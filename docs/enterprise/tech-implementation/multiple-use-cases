---

title: "Managing multiple use cases"
description: "Using Codat features to implement multiple use cases"
sidebar_label: "Managing multiple use cases"

---

This guide is aimed at Enterprise clients who use one Codat for multiple use cases (products) and includes:

- Configuration required to address multiple use cases
- Managing API requests for customers who connect to multiple use cases
- How Codat’s products features work


# Key Codat features to manage multiple use cases 
-Products
:used to described the packages of Codat features which can be enabled/disabled in Codat portal such as Bank Feeds, Sync for Expenses, Lending
-Data object
:an additional property on the [Create new company](/platform-api#/operations/create-company) 'POST/companies' and [Add product to an existing company](/platform-api#/operations/add-product)
'PUT/companies/product' requests where you tell Codat which product(s) a company is connecting to
-Webhooks
:enhanced to give product-specific alerts
1. standard products 
2. custom products use {productIdentifier}.read.completed 

# Key terms
- Products - a defined feature in Codat which represents a use case
- Standard product = data types defined by Codat and available globally for all clients
- Custom product = data types defined between Codat and the client, as part of a bespoke product, only available for use by one client 
1. Client-level sync settings = managed in the Codat portal at Settings > Data Types 
2. Product-level sync settings = data types managed in backend by Codat

# Using products with companies
This guidance is suitable for enterprise clients who have implemented Codat with a central data ingestion layer:

## Creating new companies
- when a company has a product assigned to it, the product sync settings will apply for the first fetch each time that company has a new connection status of Linked, e.g.;

! [sync flow for creating new companies with products] (/static/img/enterprise/implementation/consent/syncflowproductsnew.png)

##Updating existing companies
- when a company has a product assigned to an existing connection with Linked status, the product sync settings will apply upon adding the product 

[Add product to an existing company](/platform-api#/operations/add-product)

![sync flow for creating new companies with products] (/static/img/enterprise/implementation/consent/syncflowproductsexisting.png)

- assumes that customer has already given consent which includes data type requirements for the additional use case or product 

! [sync flow for updating existing companies with products] (/static/img/enterprise/implementation/consent/syncflowproductsexisting.png)

- to remove a product from a company, use (Remove a product)[/platform-api#/operations/remove-product]

## Refreshing data 
Currently the *Refresh Data* button in the portal applies client level sync settings (those defined in the Codat portal > Settings > Data types page, rather than any product level sync settings). 

### Refreshing via API
Previously, Codat supported the queueing of all data types from client level sync settings per company using [Refresh All](/platform-api#/operations/refresh-company-data)'POST/company/{companyId}/refresh/all' or queueing individual data types for a company using [Queue data type](/platform-api#/operations/refresh-data-type) 'POST/company/{companyId/data/queue/{dataType}'.  These remain available to clients using client-level sync settings.

For clients using products, specifically custom products, you can refresh data using [Product Refresh](/platform-api#/operations/refresh-product-data) 'POST/company/{companyId}/product/{productIdentifier}/refresh'

Note that this can't be used for Codat's standard solutions. Please refer to individual solutions' documentation instead. 

When refreshing a data for a product, remember:

- If a data sync is already in progress for a custom product, the refresh request will return a Bad request (400) response

- If a company has multiple custom products enabled, you refresh data for each product individually

## Managing data types across multiple products
Some data types may be required across multiple use cases/products.  Whilst the impact of this will depend on your architecture, Codat distinguishes between product-level syncs to reduce the need for you to build additional caching or data storage on your side.

:::info
For example, if you have implemented using streaming or event based architecture, a consuming product team will likely expect complete set of data to cover same period and frequency for their product and will not want to be impacted by the sync of data for a data type shared across multiple use cases, e.g.:

Product A: Fetches invoices and payments once daily around 11 PM.

Product B: Fetches payments hourly, on the hour.

For Product A, the recordsModifiedFrom date will align with its previous sync, capturing all records modified after 11 PM the day before.
:::
 

## Custom product webhooks
'{productIdentifier}.read.completed' events will be sent to the endpoint you’ve defined when Codat has successfully fetched or exhausted fetching the data.  Therefore, unless you are using one of the sub-events such as .successful or .unsuccessful, you will expect to see a status for all data types in that product as Complete or an Error state.  


For example:
1. Codat fetches data as per the daily regular sync schedule (defined by the product-level sync settings) for a Linked connection and the accounting platform is experiencing some downtime
2. Codat receives an error response from the accounting platform
3. Codat retries up to 10 times on an exponential backoff over a 12 hour period 

If Codat continues to receive those error responses from the accounting platform after the 10 retries, i.e. around 12 hours later, that would trigger the dataset to be flagged with FetchError status and read.completed webhook is sent

## Specific events (applies to both read.completed series and '{productIdentifer}.read.completed series')
'read.completed.successful' is sent if all data types have a successful sync, but may have validation warnings (not validation errors)

'read.completed.unsuccessful' is sent if Codat has completed the fetch for all data types and some are not successful.

The first webhook received after successful company connection - read.completed.successful.initial or read.completed.successful or read.completed - will present recordsModified as false. The next time you receive an event from the read.completed series i.e. after the next sync at defined frequency, will provide a true reflection of whether any records have been modified since that first fetch of data.

### Considerations when starting to implement multiple use cases
The following plan shares the steps to move away from companies syncs being driven by the same client-level sync settings to product-specific sync settings

 


Migration plan for existing companies

| Step | Impact on Webhooks                                                | Impact on Sync                                                                 | Rollback Actions                                                                                                                   |
|------|-------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| 1. Disable client level sync settings | No further syncs scheduled, except those already triggered by client-level sync settings | 1. Enable client level sync settings                                           |
| 2. Wait an hour (or previous most frequent sync schedule) | Allows for any client-level sync settings already in progress to complete      | 1. Enable client level sync settings                                           |
| 3. Disable previous webhook events        | Events will no longer be sent                                                 | 1. Subscribe to previously disabled webhook events<br>2. Enable client level sync settings                                         |
| 4. Enable new webhooks (`{productIdentifier}.read.completed` series) | For standard products - `read.completed` series should be enabled<br>For custom products - `{productIdentifier}.read.completed` series should be enabled | 1. Unsubscribe from `read.completed` series or `{productIdentifier}.read.completed` event series<br>2. Subscribe to previously disabled webhook events<br>3. Enable client level sync settings |
| 5. Add products to all companies using [PUT/companies/product](/platform-api#/operations/add-product)`PUT /{companyId}/products/{productIdentifier}` | This will prompt a fetch for the product’s data types                          | 1. `DELETE /{companyId}/products/{productIdentifier}`<br>https://docs.codat.io/platform-api#/operations/remove-product<br>2. Unsubscribe from `read.completed` series or `{productIdentifier}.read.completed` event series<br>3. Subscribe to previously disabled webhook events<br>4. Enable client level sync settings |


## Additional considerations:
You may want to assess how supporting multiple use cases impacts your

- Environment management (where enterprise clients typically use multiple development, testing and staging environments)

- Developer Apps with Partners (for example where one or more developer apps may be required per accounting platform)

- Consent Journey - how you ask your customers for consent to optimise their customer experience whilst ensuring you ask for consent in a transparent and compliant way


For more information, please get in touch with your Codat contact to discuss implementing support for multiple use cases.

 
