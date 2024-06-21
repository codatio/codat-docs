---
title: "2024-07-01: Xero changes allowed Organisation Class values"
date: "2024-06-21"
tags: ["Xero", "Update"]
authors: Amy-Roberts
---

On **July 01, 2024**, Xero will introduce [new pricing plans](https://www.xero.com/uk/campaign/new-plans/) for their customers. As a result, the possible values for Xero's `Organisation Classes` will change to reflect this.

<!--truncate-->

:::caution Client impact

Codat doesn't surface `Organisation Classes` data in its standardized `Company profile` data model. As a result, this change only impacts Codat customers who: 

- Use [Bank Feeds API](/bank-feeds-api#/) **and** the `planType` property of the [Company info](/bank-feeds-api#/schemas/CompanyInformation) data type.
- Use [supplemental data](/using-the-api/supplemental-data/overview) to enhance Codat’s `Company profile` data model with Xero’s `Organisation Class` data.

:::

From **July 01, 2024**, 3 new pricing plans will become available. To reflect this, Xero’s `GET Organisations` endpoint will start returning the following additional `Organisation Classes` [values](https://developer.xero.com/documentation/api/accounting/types#organisation):

- `IGNITE`
- `GROW`
- `COMPREHENSIVE`

Between **September 12, 2024** and **March 2025**, Xero will migrate their existing customers to the new pricing plans and assign new `Organisation Classes` to their Organisations. During this time, Xero’s `GET Organisations` endpoint will return **both** the new and [existing values](https://developer.xero.com/documentation/api/accounting/types/#organisation) for the `Organisation Classes` property.

Once the migration is complete, Xero will deprecate all other Organisation Classes in **March 2025**. As a result, Xero’s `GET Organisations` endpoint will only return the following `Organisation Classes` values: 

- `IGNITE`
- `GROW`
- `COMPREHENSIVE`
- `ULTIMATE`
- `DEMO`
- `TRIAL`

## Action required

#### Bank Feeds API customers

If your code uses the `planType` property of the Bank Feeds API’s [Get company information](/bank-feeds-api#/operations/get-company-information) endpoint, update your code to handle the full set of current and new values expected from **July 01, 2024**.

#### Supplemental data users

If you have configured [supplemental data](/using-the-api/supplemental-data/overview) to enhance Codat’s `Company Profile` data model with Xero’s `Organisation Class` data, update your code to support the full set of current and new values expected from **July 01, 2024**.

:::tip Guidance on using Organisation Classes

Xero discourages its customers from using `Organisation Classes` to determine the Xero functionality available to an organization. They recommend calling the `GET Organisation Actions` endpoint instead. 

Codat suggests taking this opportunity to deprecate your use of `Organisation Classes` and implement the `GET Organisation Actions` endpoint in line with Xero's [Accounting API - Organisation](https://developer.xero.com/documentation/api/accounting/organisation#get-organisation-actions) guidance. 

:::

## Expected impact if no action is taken

If no action is taken by **July 01, 2024**, you will start receiving unhandled `Organisation Class` values **for new Xero Organisations** created after this date.

If no action is taken by **September 12, 2024**, you will start receiving unhandled `Organisation Class` values **for pre-existing Xero Organisations**.
