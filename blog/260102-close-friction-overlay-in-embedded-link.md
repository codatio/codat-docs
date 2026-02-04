---
title: "Exit confirmation in Embedded Link"
date: "2026-01-02"
tags: ["Product", "Update", "Link", "UX"]
authors: pmckinney
---

We've added a new exit confirmation overlay to Embedded Link. It appears when users attempt to close an in-progress connection flow, helping prevent accidental drop-offs.

<!--truncate-->

## What's new?

When users click the **Close** button during an active connection flow in Embedded Link, they will now see an exit confirmation overlay. The overlay includes:

- An exit confirmation prompt
- A clear warning about the loss of progress
- Two possible actions:
  - _Finish connecting_ returns the user to complete the flow.
  - _Exit without saving_ stops the progress of the connection flow.

This improvement **reduces accidental drop-offs**, **improves conversion rates** by giving users a moment to reconsider, and **provides better user experience** by clarifying the consequences of exiting the flow.

![](/img/updates/260102-close-friction-overlay-in-embedded-link.png)

## Who is this relevant for?

This update is relevant for all customers using **Embedded Link** and is especially useful when improving connection completion rates and reducing user drop-offs during the onboarding flow.

:::tip onCLose callback required

To use this feature, include an [`onClose`](/auth-flow/authorize-embedded-link#use-callback-functions) callback in your implementation. This callback determines whether the **Close** button is displayed.

:::

## How to get started?

If your Embedded Link implementation includes an `onClose` callback, no further action is required. This feature is **automatically enabled**, and the overlay will appear whenever a user clicks the **Close** button during an active connection flow.

If you want to include an `onClose` callback, start with our [Use callback functions](/auth-flow/authorize-embedded-link#use-callback-functions) documentation.
