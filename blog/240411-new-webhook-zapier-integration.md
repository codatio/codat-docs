---
title: "Introducing our new webhook Zapier integration"
date: "2024-04-11"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We're excited to announce the pre-release of our new webhook Zapier integration, making it easier for you to build automated workflows triggered by our webhook events.

<!--truncate-->

Zapier provides no-code workflows that allow different web applications to be used in the same workflow. Their products focus on automating recurring tasks, and users can set up "rules" that set up the flow of data between different tools and services... now including Codat!

There are two parts to a 'Zap' automation:

- _Triggers_ (if X happens in Source A...)
- _Actions_ (...do Y in B)

The Codat Zapier app exposes all of the [Codat webhooks](/using-the-api/webhooks/event-types) as _triggers_. This means you can start building workflows on top of Codat without writing a line of code.

Some simple use cases might include:

- Posting a message on Slack or via email whenever a new Company has shared data
- Post a message when sync errors have occurred
- Adding companies that you onboard to a spreadsheet automatically

## Start 'zapping'

To start building your own workflows today, you need:

- **A Zapier account** - you can [create one for free](https://zapier.com/sign-up).
- **Admin or Developer access** to your Codat instance.

[Read more...](/using-the-api/webhooks/zapier-integration)
