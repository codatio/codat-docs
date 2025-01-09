---
title: "Replace or update company"
date: "2025-01-08"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We have introduced a new [`PATCH`](/platform-api#/operations/update-company) endpoint, designed to let you update specific company properties without impacting others. 
For most scenarios where you are currently using the [`PUT`](/platform-api#/operations/replace-company) endpoint, we recommend switching to `PATCH` to enjoy greater flexibility and precision when updating company details.

## What's new?

With the new `PATCH` endpoint, you can:
- Update one or more specific properties without overwriting properties not included in the request.

To clarify the distinction between these methods, we've updated their names:
- `PATCH` -> [Update Company](/platform-api#/operations/update-company)
- `PUT` -> [Replace Company](/platform-api#/operations/replace-company)

## Who is this relevant for?

This feature is ideal for users who need to make partial updates to a company's details without replacing the entire record.

## How to get started?

To start using the `PATCH` method either:

- **Use our [client libraries](/get-started/libraries)** - leverage our libraries for quicker implementation and reduced maintenance.
- **Update your existing libraries** - if you're already using our client libraries, just update to the latest version, and the `update` method will automatically use `PATCH`.
- **Review the [API reference](/platform-api#/operations/update-company)** - find detailed examples and usage guidelines to ensure a seamless integration.

[Learn more about our libraries](/get-started/libraries) and start streamlining your updates today!