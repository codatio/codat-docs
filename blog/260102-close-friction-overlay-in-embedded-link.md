---
title: "Close Friction Overlay in Embedded Link"
date: "2026-01-02"
tags: ["Product", "Update", "Link", "UX"]
authors: pmckinney
---

A new confirmation overlay now appears when users attempt to close embedded Link during the connection flow, helping prevent accidental drop-offs.

<!--truncate-->

## What's new?

When users click the close button during the connection flow in embedded Link, they'll now see a friendly confirmation overlay that helps prevent accidental abandonment.

The new overlay includes:

- **Exit confirmation prompt** asking "Exit connection set up?"
- **Clear progress warning** that exiting will not save their progress and they'll need to start over
- **Two clear options**:
  - "Finish connecting": Returns them to complete the flow
  - "Exit without saving": Confirms they want to leave and lose progress

This improvement **reduces accidental drop-offs**, **improves conversion rates** by giving users a moment to reconsider, and **provides better UX** by setting clear expectations about what happens if they exit.

![](/img/updates/260102-close-friction-overlay-in-embedded-link.png)

## Who is this relevant for?

This update is relevant for all customers using **embedded Link integrations**, particularly those focused on improving connection completion rates and reducing user drop-offs during the onboarding flow.

> **Note:** This feature requires your implementation to include an [`onClose`](/auth-flow/authorize-embedded-link#use-callback-functions) callback that determines whether the close button is displayed.

## How to get started?

No action is required! This feature is **automatically enabled** for all embedded Link integrations. The overlay will appear whenever a user clicks the close button during an active connection flow.
