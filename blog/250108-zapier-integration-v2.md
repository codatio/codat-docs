---
title: "Updates to our Zapier integration"
date: "2025-01-08"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

![Zapier event type selection screen](/img/updates/250108-zapier-integration-v2.png)

We’re excited to announce that our Zapier integration now supports subscriptions to the latest webhook event types, making it easier than ever to automate your workflows.

## What's new?

- **Subscribe to the latest event types** - stay updated with the newest triggers available.
- **Multiple subscriptions** - subscribe to one or more event types at the same time.
- **New webhook schema** - take advantage of our updated webhook schema for seamless integration.

## Who is this relevant for?

Zapier provides no-code workflows that allow different web applications to be used in the same workflow. Their products focus on automating recurring tasks, and users can set up "rules" that set up the flow of data between different tools and services... now including Codat!

There are two parts to a 'Zap' automation:
- *Triggers* (if X happens in Source A...)
- *Actions* (...do Y in B)

The Codat Zapier app exposes all of the [Codat webhooks](/using-the-api/webhooks/event-types) as *triggers*. This means you can start building workflows on top of Codat without writing a line of code.

Some simple use cases might include:
- Posting a message on Slack or via email whenever a new Company has shared data
- Post a message when sync errors have occurred
- Adding companies that you onboard to a spreadsheet automatically

## How to get started?

To start building your own workflows today, you need:

- **A Zapier account** - you can [create one for free](https://zapier.com/sign-up).
- **Admin or Developer** access to your Codat instance.

[Read more](/using-the-api/webhooks/zapier-integration)