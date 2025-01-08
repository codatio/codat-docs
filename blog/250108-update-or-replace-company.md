---
title: "Replace or update company"
date: "2025-01-08"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We have to introduced a new `PATCH` endpoint that allows you to update specific company properties without affecting others. This complements our existing `PUT` endpoint, which replaces all company details provided in the request body.

## What's New?

We have added a new PATCH endpoint to allow you to update specific company properties. 
This works in parallel with our existing PUT endpoint that will replace all company details irrespective of whether they are presented in the request body.  

## What's new?

With the new `PATCH` endpoint, you can:
- Update one or more specific properties without overwriting properties not included in the request.

To clarify the distinction between these methods, we've updated their names:
- `PATCH` -> [Update Company](/platform-api#/operations/update-company)
- `PUT` -> [Replace Company](/platform-api#/operations/replace-company)

## Who is this relevant for?

This feature is ideal for users who need to make partial updates to a company's details without replacing the entire record.

## How to get started?

To start using the `PATCH` endpoint:
1. Explore our [client libraries](/get-started/libraries) for faster implementation and easier maintenance.
2. Refer to the API documentation for detailed examples and usage.

[Learn more about our libraries](/get-started/libraries) and start streamlining your updates today!