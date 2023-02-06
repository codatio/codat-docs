---
title: "Portal overview"
description: "Key concepts and elements of the Codat Portal"
createdAt: "2021-05-25T10:55:38.491Z"
updatedAt: "2023-01-16T16:45:57.942Z"
---

The Codat Portal home page gives you a quick way of seeing the products you're using in your Codat environment, the breakdown of your Company connections by status, and the Portal's navigation bar.

## Navigation bar

This section allows you to access other sections of the Portal where you are able to set up, monitor, and use the Codat products.

Some navigation bar tabs (for example, the [Developers](/portal-for-developers) tab) are only available to specific [user roles](/user-roles).

## Getting started

This section shows you some useful resources including our getting started guides for both technical and non-technical users, and where to find your API keys (if your user role allows you access).

## Your products

This section shows you which products are enabled for your account. By default, Accounting API, Banking API, and Commerce API are enabled.

Clicking **Manage products** takes you to the Products page, where you can manage the products you have enabled, and enable additional products.

## Dashboard

This section gives you real-time insight into the number of companies and the current statuses of their [data connections](/core-concepts/connections). A company's connections can have the following status:

- Linked,
- PendingAuth,
- Deauthorized,
- Unlinked, or
- No connections.

Note that:

- You can access the list of companies by selecting the **View all companies** button.
- All the statuses can be accessed via API using the <a class="external" href="https://api.codat.io/swagger/index.html#/Metrics/get_metrics_companies" target="_blank">Metrics</a> endpoint.
