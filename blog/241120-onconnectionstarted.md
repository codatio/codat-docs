---
title: "`onConnectionStarted` callback added to Link SDK"
date: "2024-11-20"
tags: ["Product", "Update"]
authors: ajacksoncodat
---

We have added a new `onConnectionStarted` property to the callback functionality of the Link SDK. It is called with a Connection argument, including its `connectionId`.

<!--truncate-->

## What's new?

When a user selects an integration and clicks **Next** in the Link flow deployed using our [Link SDK](/auth-flow/authorize-embedded-link), the `onConnectionStarted` callback will pass a `connectionId` to the SDK component.

![Integration Selection](/img/link/integration_selection.png)

This indicates that a connection has been successfully created in a pending state, allowing you to track users reaching this point in the Link flow. You can identify which integration has been selected by calling the [Get connection](/platform-api#/operations/get-connection) endpoint.

## Who is this relevant for?

All clients using Link SDK to deploy the auth flow in their application.

## How to get started?

To implement an auth flow with our Link SDK, see [Get started with Link SDK](/auth-flow/authorize-embedded-link). 

If you are already using Link SDK, add this callback into your component. See [Use callback functions](/auth-flow/authorize-embedded-link) for more details.
