---
title: "2024-11-20: `onConnectionStarted` callback added to Link SDK"
date: "2024-11-20"
tags: ["Product", "Update"]
authors: ajacksoncodat
---

We have added to the callback functionality of the Link SDK. The `onConnectionStarted` prop allows you to provide a callback function to the SDK component. This function will be called with a Connection argument, including its`connectionId`.

<!--truncate-->

## What's new?

When a user selects an integration (clicks "Next") in the Link SDK, the `onConnectionStarted` callback will pass a `connectionId` to the SDK component.

![Integration Selection](/img/link/integration_selection.png)

This indicates a connection has been successfully created in a pending state, allowing you to track users reaching this point in the link flow. By calling [Get connection](https://docs.codat.io/platform-api#/operations/get-connection) you can identify which integration was selected.

## Who is this relevant for?

All clients using Link SDK.

## How to get started?

To implement Link SDK see [Get started with  Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link).

If you are already using Link SDK, add this callback into your component. See [Use callback functions](https://docs.codat.io/auth-flow/authorize-embedded-link).