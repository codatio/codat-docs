---
title: "Architecture overview"
description: "Explore a high-level overview of Codat's platform architecture"
sidebar_label: "Overview"
hide_table_of_contents: true
---

## Introduction

Codat has a **microservice architecture**. This modular structure parallelizes software development and enables a scalable and robust system to be created.

There are currently over 100 services that make up the Codat technology infrastructure, each with a separate instance for each of the two environments (integration and production). Most importantly, each connection to an external data source is a separate service that handles authentication, authorization, data fetch, and data mapping. 

Services are configured to automatically scale out to multiple instances in the event of increased load. This ensures high levels of availability and performance. The load on instances is proactively monitored by [Microsoft Azure](https://azure.microsoft.com/en-us/), and the engineering team is alerted in the event of unexpected spikes.

You can see the overview of Codat's networking flow topology on the image below. Clients call through a Web Application Firewall (WAF) to our gateway, which is routed to the correct service.

![](/img/enterprise/architecture/architecture.png)

## Hosting and data storage

Codat uses the [Microsoft Azure](https://azure.microsoft.com/en-us/) platform for all hosting and data storage, located in the UK only. Microsoft Azure is a growing collection of integrated cloud services that developers and IT professionals use to build, deploy, and manage applications through a global network of data centres.

In particular, Codat uses Azure’s [Platform as a service (PaaS)](https://azure.microsoft.com/en-gb/overview/what-is-paas/) offering instead of the Infrastructure-as-a-service (IaaS) option. This means that the underlying application infrastructure is managed by Microsoft themselves, ensuring it is maintained to the highest standard. Operating System patching is also carried out by Microsoft automatically. See [Shared Responsibility Model](/enterprise/tech-overview/architecture/shared-responsibility-model) for more information on this arrangement.  

## Read next

- [Platform as a service](/enterprise/tech-overview/architecture/platform-as-a-service)
- [Shared responsibility model](/enterprise/tech-overview/architecture/shared-responsibility-model)
