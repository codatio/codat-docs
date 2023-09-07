---
title: "Sales overview"
sidebar_label: "Sales"
description: "Underwrite with real-time data from SMB's payments and shopping platforms"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { commerceIntegrations } from "@components/global/Integrations/integrations";

Our **sales** feature offers data sourced from a linked company's commerce connections, allowing you to access valuable insights through aggregated metrics and a comprehensive breakdown of sales transactions from prominent eCommerce, POS, and payment platforms.

## Use cases

The primary use case for this feature is **revenue analysis**. Evaluate historical revenue streams with real-time transactions, order and payouts information. Lenders use these data points to evaluate the stability, growth patterns and sustainability of the borrower's income. 

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=250863128&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "550px" }}
></iframe>

## Feature enrichments

#### Metrics

Our metrics include a set of pre-calculated ratios and metrics focused on commerce and sales data that help lenders assess merchant health and evaluate the credit risk of a company. The following table details which metrics are calculated and their formulas:

| Metric                 | Description                                                                                                               | How that's translated to Codat data                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[Revenue](https://docs.codat.io/lending-api#/operations/get-commerce-revenue-metrics)**            |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Revenue                | The gross revenue for a selected period.                                                                                  | `Revenue = SUM(orderlines.quantity * orderlines.unitPrice)` for the specified period                                                                                                                                                                                                                                                                                                                                                                          |
| Revenue growth         | The percentage change in revenue between the present period’s value and the previous period's value.                          | `Revenue growth % change = ((b-a)/a) * 100` compared to the previous period. <br/> a. previous month's revenue, <br/> b. current month's revenue.                                                                                                                                                                                                                                                                                                                     |
| **[Orders](https://docs.codat.io/lending-api#/operations/get-commerce-orders-metrics)**             |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Number of orders       | The number of orders for a specific period.                                                                               | `Number of orders = COUNT(orders)` for that period                                                                                                                                                                                                                                                                                                                                                                                                            |
| Order value            | The sum of the values of all orders over a specific period.                                                               | `Value of orders = SUM(orders.totalAmount)` for that period                                                                                                                                                                                                                                                                                                                                                                                                   |
| Average order value    | The average order value over a specified period.                                                                        | `Average order value = a / b` for that period. <br/> a. order value, <br/> b. COUNT(orders).                                                                                                                                                                                                                                                                                                                                                                              |
| **[Refunds](https://docs.codat.io/lending-api#/operations/get-commerce-refunds-metrics)**            |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Number of refunds      | The number of orders where the `totalRefund` field is NOT NULL.                                                             | `Number of refunds = COUNT(orders)` for the selected period where `totalRefund > 0` for the selected period                                                                                                                                                                                                                                                                                                                                                  |
| Value of refunds       | The sum of all refunds over a specified period.                                                                           | `Value of refunds = SUM(orders.totalRefund)` for the selected period, always expressed as a negative value                                                                                                                                                                                                                                                                                                                                                    |
| Refund rate            | The number of refunds compared with the number of orders over a specific period.                                          | `Refund rate = a / b` for that period. <br/> a. number of refunds, <br/> b. number of orders.                                                                                                                                                                                                                                                                                                                                                                             |
| **[Customer retention](https://docs.codat.io/lending-api#/operations/get-commerce-customer-retention-metrics)** |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Existing customers     | COUNT of unique customers where they have placed orders in the specified period AND any previous period                   | `Existing customers = COUNT(customers)` who placed orders in the specified period and any previous period                                                                                                                                                                                                                                                                                                                                                     |
| New customers          | COUNT of unique customers where they have placed orders in the specified period AND NONE in any previous period.          | `New customers = COUNT(customers)` who placed orders in the specified period only                                                                                                                                                                                                                                                                                                                                                                             |
| Total customers        | SUM of Existing and New customers.                                                                                        | `Total customers = a + b`. <br/> a. new customers, <br/> b. existing customers.                                                                                                                                                                                                                                                                                                                                                                                           |
| Retention rate         | The percentage of existing customers within the period compared to the total customers at the end of the previous period. | `Retention rate = (a/(b + c)) * 100` <br/> a. COUNT(customers): current period's existing customers, i.e. customers who have placed their very first order before the current period <br/> b. COUNT(customers): previous period's existing customers, i.e. customers who have placed their very first order before the previous period <br/> c. COUNT(customers): previous period's new customers, i.e. customers who have placed their very first order in the previous period |
| Repeat rate            | The percentage of existing customers to total customers over the specified period.                                        | `Repeat rate = (a / a + b) * 100` <br/> a. COUNT(customers): current period's existing customers, i.e. customers who have placed their very first order before the current period <br/> b. COUNT(customers): current period's new customers, i.e. customers who have placed their very first order in the current period                                                                                                                                                  |
| **[Lifetime value](https://docs.codat.io/lending-api#/operations/get-commerce-lifetime-value-metrics)**     |                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Lifetime value         | The revenue a business can expect from a paying customer during their time as a paying customer.                          | `Lifetime value = a * b * c` <br/> a. Average order value for that period <br/> b. `COUNT(orders) / COUNT(customers)`: average number of orders per customer, for that period <br/> c. `Average customer lifespan`: average difference in days between the last and first orders in a specified period, for all customers.                                                                                                                                                      |

## Supported outputs

You can retrieve the data pulled and enriched by the feature by calling the **sales** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our sales feature. 

#### Configure data sources

Follow the respective guides to set up and enable commerce integrations that will serve as a data source for the feature:

<br />

<IntegrationsList integrations={commerceIntegrations} />


#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Customers `commerce-customers`
- Disputes `commerce-disputes`
- Locations `commerce-locations`
- Orders `commerce-orders`
- Payment methods `commerce-paymentMethods`
- Payments `commerce-payments`
- Products `commerce-products`
- Product categories `commerce-productCategories`
- Transactions `commerce-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Financial statements](/lending/features/financial-statements-overview)