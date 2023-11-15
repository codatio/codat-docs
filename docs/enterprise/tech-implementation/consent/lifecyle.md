---
title: "Customer lifecycle"
description: "Recommendations for managaing the customer consent lifecyle"
---

**Codat’s authentication API will be used at multiple stages of the customer lifecycle. There are some scenarios & considerations listed below.**

####  Onboarding a new customer for the 1st time

A customer hasn't granted access to integrations before, they will authenticate either through a specific product user journey or as part of a general new customer onboarding process.
####  Onboarding an existing customer onto a new product (multi use-case)

Codat recommends that each customer grants access to all data during their 1st integration setup, but only relevant data will be pulled into Codat based on the use-case.

This allows Codat to have access to all data from the 1st connection, but will only pull relevant data based on the specific use-case.

E.g. I connect my Xero via a Dashboard customer journey. I grant access to all data within my Xero account - but you only pull data-types that are relevant for the Dashboard product as that is all the user has provided consent for.
#### An existing customer wants to add integration package(s) for existing product

Customers can use the Strategic Consent Journey UI to add additional integration packages for a specific product. E.g. “Click here to connect more packages.

The UI will offer options for customers to make changes, like signing up for additional banks or eCommerce packages.


#### A customer wants to grant data access for a specific product, but has already previously connected

A customer has already connected their Xero account into a dashboard product, and now wants to provide data for a lending origination use-case.

As the customer has already granted access to all their Xero data, you technically have access to pull additional data-types that they haven’t pulled before. E.g. Financial Statements.

The customer will be presented with a UI screen that confirms they are happy to share additional data-sets. This UI is a simple “Confirm I’m happy to share additional data”, and does not require the customer to re-auth or re-login to any accounting package.

This consent should be stored and always adhered to with the ability to be revoked at any time.
#### An existing customer wants to remove consent for a specific use-case

Customers should have the option to revoke access to integrations through the product's UI. It's important to inform customers about potential impacts when removing access. I.e. Impacting other products.

Also, it's important to consider data retention processes when a customer disconnects. If the customer has granted access for their data to be used in multiple products, keep in mind that access might still be needed for another product. 

Codat provides the capability to remove/delete historical data via a specific endpoint.


#### An existing customers Open Banking connection has expired
After an open banking connection has expired, it's important to communicate this to the customer. You should provide them with an option to re-consent via the user journey within a specific product. Utilizing Codat's "Connection" API, you can re-initiate the login journey for the customer to re-consent.

