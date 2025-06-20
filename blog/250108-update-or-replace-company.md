---
title: "New company update endpoint"
date: "2025-01-09"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We have introduced a new [Update company](/platform-api#/operations/update-company) endpoint that uses the `PATCH` method to update specific company properties without impacting others.

<!--truncate-->

## What's new?

You can now use our new [Update company](/platform-api#/operations/update-company) endpoint to update one or more company properties without overwriting properties not included in your request. To differentiate it, we have also renamed our existing endpoint that uses the `PUT` method and overwrites all company values to [Replace company](/platform-api#/operations/replace-company).

For most scenarios where you are currently using the existing [Replace company](/platform-api#/operations/replace-company) endpoint, we recommend switching to [Update company](/platform-api#/operations/update-company) to enjoy greater flexibility and precision when updating company details.

## Who is this relevant for?

This feature is ideal for users who need to make partial updates to a company's details without impacting the entire company record.

## How to get started?

You can start using the new [Update company](/platform-api#/operations/update-company) endpoint immediately in one of the following ways:

- **Start using our [client libraries](/get-started/libraries)** for quicker implementation and reduced maintenance.
- If using our libraries, **update them to the latest version**, and the `update` method will automatically use the `PATCH` endpoint.
- **Review our [API reference](/platform-api#/operations/update-company)** with detailed examples and usage guidelines to ensure a seamless integration.
