---
title: "Architecture overview"
description: "A high-level view of Codat platform architecture"
---

## Introduction
Codat has a [microservice](https://en.wikipedia.org/wiki/Microservices) architecture, this modular structure parallelizes software development and enables a scalable and robust system to be created.

There are currently over 100 services that make up the Codat technology infrastructure, each with a separate instance for each of the two environments (integration, production). 

Most importantly, each connection to an external data source is a separate service with the responsibility of handling authentication, authorization, data fetch and data mapping. Services are configured to automatically scale out to multiple instances in the event of increased load, thus ensuring high levels of availability and performance. 

Load on instances is proactively monitored by Azure, and the engineering team is alerted in the event of unexpected spikes.

![](/img/enterprise/architecture/architecture.png)

## Hosting and data storage
Codat uses the [Microsoft Azure](https://azure.microsoft.com/en-us/) platform for all hosting and data storage.  Codat has ensured that all hosting and data storage by Azure is located in the UK only.

Microsoft Azure is a growing collection of integrated cloud services that developers and IT professionals use to build, deploy and manage applications through a global network of data centres.
In particular Codat uses [Azure’s Platform-as-a-service PaaS](https://azure.microsoft.com/en-gb/overview/what-is-paas/) offering rather than Infrastructure-as-a-service (IaaS). 

This means that the underlying application infrastructure is managed by Microsoft themselves, ensuring it is maintained to the highest standard. Operating System patching is carried out automatically by Microsoft.

All data is stored on Microsoft Azure architecture.

Please see the [Shared Responsibility Model](/enterprise/tech-overview/architecture/shared-responsibility-model) for more information on this. 