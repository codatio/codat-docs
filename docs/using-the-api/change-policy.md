---
title: "Change policy"
description: "Learn how we communicate key product changes to you"
createdAt: "2021-11-03T11:41:14.711Z"
updatedAt: "2022-10-04T14:20:08.975Z"
---

We always try to make changes to our product in a backward-compatible way. This means you can choose whether, when, and how to update your code and take advantage of the new functionality.

## Backwards-compatible changes

The following changes are normally considered as backward-compatible.
- Any additive changes to the Codat API or front-end products, such as:
    - a new datatype or API endpoint
    - a new field within a datatype or API endpoint
    - a new integration
    - a new portal page
    - a new rule
    - a new optional parameter to an API endpoint
- Front-end changes that do not materially alter the functionality available or the way that functionality is accessed

## Breaking changes

Breaking changes are changes that are not possible to make backward-compatible. When deprecating these, we try to follow the <a href="https://martinfowler.com/bliki/ParallelChange.html" target="_blank">parallel change pattern</a> (also called the expand and contract pattern).

When planning to make a breaking change, we'll post the details of the upcoming deprecation on our [Important updates](https://codat-docs.vercel.app/updates) at least three months before it is released.  

We'll also send an email to all [developer](https://codat-docs.vercel.app/configure/user-management/user-roles) and [administrator](https://codat-docs.vercel.app/configure/user-management/user-roles) users in the first week of each calendar quarter (January, April, July, October) with a summary of the upcoming deprecations. 

These users can also choose to enable the deprecations early in the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>. 

## Opt-in to changes early

If you'd like to opt-in to a breaking change before its planned implementation date, you can do so in the [Developers section](https://codat-docs.vercel.app/configure/portal/developers) of the Codat Portal by navigating to **Developers&nbsp;> API deprecations**. 

Ensure you are familiar with the details of the deprecation you plan to enable and have completed any necessary preparations. 

Only users with [developer](https://codat-docs.vercel.app/configure/user-management/user-roles) and [administrator](https://codat-docs.vercel.app/configure/user-management/user-roles) roles are able to access the Developers tab and enable the deprecations early.

## Deprecation schedule

You can also [subscribe to our deprecation calendar](https://calendar.google.com/calendar/embed?src=c_83b00ebce11207e3c2b7b51fab82909ccff1e5a15f8d466f5919733aca458efb%40group.calendar.google.com).

<iframe src="https://calendar.google.com/calendar/embed?src=c_83b00ebce11207e3c2b7b51fab82909ccff1e5a15f8d466f5919733aca458efb%40group.calendar.google.com" style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>

## Changes by third-parties

Occasionally the integrations that you access through Codat may make changes that impact your use of Codat. This may include changes to their own APIs, changes to their terms and conditions, and more. Where possible:
- We'll try to minimize the impact to your use of Codat.
- We'll try to notify you of any impact and any actions you need to take.

We suggest ensuring you're subscribed to the developer updates of any services you're using.
