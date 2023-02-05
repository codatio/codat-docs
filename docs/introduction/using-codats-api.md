---
title: "Using Codat's API"
description: "Codat's API at a glance"
hidden: true
createdAt: "2022-02-01T11:15:53.700Z"
updatedAt: "2022-11-03T11:18:13.618Z"
---

The Codat API provides secure access to contributed business data from your SME customers mapped to our [accounting](https://docs.codat.io/docs/datamodel-accounting), [banking](https://docs.codat.io/docs/data-model-banking), and [commerce](https://docs.codat.io/docs/datamodel-commerce) data models.

A single REST API with over 40 different groups of endpoints, the API supports a wide range of operations and HTTP methods, including:

- Pulling data (`GET`)
- Pushing or creating data (`POST`)
- Updating data (`PUT`)

Requests and responses are in JSON and the API implements robust error handling.

Complex business data—like orders, payments, and taxes—is represented as _data types_ using logical and consistent schemas.

The API is secured using an OAuth 2.0 [authentication flow](https://docs.codat.io/docs/auth-flow).

Over [30 different API integrations](https://docs.codat.io/docs/core-integrations) provide connectivity between the Codat API and supported financial systems.

If you want to build to our API directly, you can explore all endpoints and schemas in our [API Reference](ref:authentication) documentation.
