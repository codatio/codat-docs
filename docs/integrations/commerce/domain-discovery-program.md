---
title: "Domain Discovery Program"
description: "Work with us to help define new domain-specific data models"
createdAt: "2022-08-01T14:35:51.916Z"
updatedAt: "2022-10-10T16:50:09.244Z"
---

## About the program

Through our integrations and API, Codat aggregates and standardizes consented business data from sources within the accounting, commerce, and banking domains. In the near future, we plan to expand our integration coverage into new domains&mdash;starting with recurring billing and subscriptions.

Defining a high quality data model within a new domain is crucial to ensuring our users' needs are met. To achieve this, we work with our users to discover and define new data models through the _Domain Discovery Program_.

If you choose to participate in the program, you'll benefit from early access to several integrations in new domains. Subject to some limitations explained below, you can use these integrations through the Codat API and leverage features such as [Link](/auth-flow) for SMB customer authentication.

Along with other participants, you'll be asked to provide valuable data and feedback on the integrations, helping us define a high quality, standardized data model for the new domains.

## Joining requirements

The Domain Discovery Program is accessible only to Codat users on an Enterprise pricing plan; you can request access through your Account Manager or Account Executive.

## Program limitations and expectations of participants

Be aware of the following information before joining the Domain Discovery Program.

1. Codat does not expose a standard data model for integrations which are in the scope of the program. Requests are sent to the Codat API and routed directly to the underlying integration API (known as proxying). Therefore participants need to familiarize themselves with relevant provider API endpoints and their expected responses. The data returned from the integrations is not standardized to a data model.

2. In exchange for access to the integrations within the scope of the program, Codat expects participants to commit to providing feedback on their use of the integration, including: their usage of the data; any logic or mappings applied to the data; and, where appropriate, code snippets and samples.

3. After Codat has completed the domain discovery phase for a particular integration in the program and implemented a standardized domain data model, participants will be asked to use the standardized data model (data types) instead of the proxy endpoint. The integration(s) will be retired from the program, subject to Codat's [change policy](/change-policy) for breaking changes.

:::caution Support levels

For integrations within the scope of the program, Codat handles authentication through Link and facilitates pass through of API calls and responses. As such, we have limited ability to support or diagnose errors from the underlying integrations.
:::

## Proposed domains and integrations

We're exploring the following domains within the scope of the Domain Discovery Program:
[block:parameters]
{
"data": {
"h-0": "Domain",
"h-1": "Proposed/available integrations",
"0-0": "Recurring Billing and Subscriptions",
"1-0": "Marketing and Social Media",
"2-0": "Customer Relationship Management (CRM)",
"1-1": "To be announced",
"2-1": "To be announced",
"h-2": "Status",
"0-2": "_Active_. Contact your Account Manager or Account Executive.",
"1-2": "_Planned Q1 2023_. Contact your Account Manager or Account Executive to register your interest.",
"2-2": "_Planned Q1 2023_. Contact your Account Manager or Account Executive to register your interest.",
"0-1": "\* [Recurly](/commerce-recurly)

- [Chargebee](/commerce-chargebee)
- [Chargify](/commerce-chargify),"
  },
  "cols": 3,
  "rows": 3
  }
  [/block]
