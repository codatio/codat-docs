---
title: "Customer lifecycle"
description: "Recommendations for managing the customer consent lifecycle"
---

**Codat’s authentication API will be used at multiple stages of the customer lifecycle. There are some scenarios & considerations listed below.**

####  Onboarding a new customer for the first time

A customer hasn't granted access to integrations before, they will authenticate either through a specific product user journey or as part of a general new customer onboarding process.
####  Onboarding an existing customer onto a new product (multi usecase)

Codat recommends that each customer grants access to all data during their first integration setup, but only relevant data will be pulled into Codat based on the usecase.

This means Codat will initially only pull relevant data for that first usecase, but can later pull data for a other usecases without requiring the customer to re-authenticate.

For example, a user might connect their Xero via a Dashboard customer journey. They grant access to all data within their Xero account, but you initially only pull data types that are relevant to the Dashboard product, because that is all the user has consented to.
#### An existing customer wants to add integration package(s) for existing product

Customers can use the Strategic Consent Journey UI to add additional integration packages for a specific product. For example, by clicking a “Click here to connect more packages" button.

The UI will offer options for customers to make changes, like signing up for additional banks or eCommerce packages.


#### A previously connected customer wants to grant data access for a specific product

A customer has already connected their Xero account to a dashboard product and now wants to provide data for a lending origination use case.

As the customer has previously granted access to all their Xero data, technically you already have access to pull additional data types that you haven’t pulled before (for example, Financial Statements).

The customer will be presented with a UI screen that confirms they are happy to share additional datasets. This UI contains a simple “Confirm I’m happy to share additional data” message and does not require the customer to re-auth or re-login to any accounting package.

This consent should be stored and always adhered to with the ability to be revoked at any time.
#### An existing customer wants to remove consent for a specific use case

Customers should have the option to revoke access to integrations through the product's UI. It's important to inform customers about potential impacts when removing access, i.e. how it can impact other products.

It is also important to consider data retention processes when a customer disconnects. If the customer has granted access for their data to be used in multiple products, keep in mind that access might still be needed for another product. 

Codat provides the capability to remove/delete historical data via a specific endpoint.


#### An existing customer's Open Banking connection has expired
When an Open Banking connection expires, it's important to communicate this to the customer. You should provide them with an option to re-consent via the user journey within a specific product. Utilizing Codat's "Connection" API, you can re-initiate the login journey for the customer to re-consent.
