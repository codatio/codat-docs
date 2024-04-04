---
title: "Introducing our new webhook Zapier integration"
date: "2024-05-05"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We're excited to announce the pre-release of our new webhook Zapier integration, making it easier for you to build automated workflows trigger by our webhook events.

<!--truncate-->

Zapier provides no-code workflows that allow different web applications to be used in the same workflow. Their products focus on automating recurring tasks, and users can set up "rules" that set up the flow of data between different tools and services... now including Codat!

There are two parts to a 'Zap' automation:
- *Triggers* (if X happens in Source A...)
- *Actions* (...do Y in B)

The Codat Zapier app exposes all of the [Codat webhooks](/using-the-api/webhooks/event-types) as *triggers*. This means you can start building workflows on top of Codat without writing a line of code.

Some simple usecases might include:
- Posting a message on Slack or via email whenever a new Company has shared data
- Post a message when sync errors have occurred
- Adding companies that you onboard to a spreadsheet automatically

## Start 'zapping'

To start building your own workflows today, you need:

- **A Zapier account** -  you can [create one for free](https://zapier.com/sign-up).
- **Access to our pre-release Zapier app** - click on [our invitation](https://zapier.com/developer/public-invite/202044/c35843349a2aa85193b9f9ec6a9556e7/?utm_source=codat-docs).
- **Admin or Developer access** to your Codat instance.

(Read more...](/using-the-api/webhooks/zapier-integration)
