---
title: "Architecture overview"
description: "Explore a high-level overview of Codat's platform architecture"
sidebar_label: "Overview"
hide_table_of_contents: false
---

## Introduction

Codat has a **microservice architecture**. This modular structure parallelizes software development and enables a scalable and robust system to be created.

There are currently over 100 services that make up the Codat technology infrastructure, each with a separate instance for each of the two environments (integration and production). Most importantly, each connection to an external data source is a separate service that handles authentication, authorization, data fetch, and data mapping. 

Services are configured to automatically scale out to multiple instances in the event of increased load. This ensures high levels of availability and performance. The load on instances is proactively monitored by [Microsoft Azure](https://azure.microsoft.com/en-us/), and the engineering team is alerted in the event of unexpected spikes.

### Networking flow topology

You can see the overview of Codat's networking flow topology on the image below. Clients call through a Web Application Firewall (WAF) to our gateway, which is routed to the correct service.

![](/img/enterprise/architecture/architecture.png)

## Hosting and data storage

Codat uses the [Microsoft Azure](https://azure.microsoft.com/en-us/) platform for all hosting and data storage, located in the UK only. Microsoft Azure is a growing collection of integrated cloud services that developers and IT professionals use to build, deploy, and manage applications through a global network of data centres.

In particular, Codat uses Azure’s [Platform as a service (PaaS)](https://azure.microsoft.com/en-gb/overview/what-is-paas/) offering. It includes hosting, networking, and storage infrastracture as well as middleware, development tools, and other resources required to support a complete web application lifecycle. 

This allows Codat to focus on the services we create while Microsoft manages the underlying application infrastructure and automatically patches the operating system, maintaining them to the highest standard. 

:::info Additional resources
See Microsoft's [What is PaaS?](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-paas/) to learn more about cloud platform services and [Shared Responsibility Model](/enterprise/tech-overview/architecture/shared-responsibility-model) for more information on our use of Azure. 
:::

## Read next

- [Shared responsibility model](/enterprise/tech-overview/architecture/shared-responsibility-model)
