---
title: "Overview"
description: "Enterprise pages"
---

|  .                   | Responsibility           | How is it done?              |
|----------------------|--------------------------|------------------------------|
| Codat Responsibility | Information and Data     | - Codat Control Framework <br /> - Data Retention Policy <br /> - Encryption Policy <br /> - Encryption Policy <br /> - Access Control Policy <br /> - Security & Data Protection <br /> - Information Security Policy <br /> - Acceptable Use Policy <br /> - Whitepaper - Data Security   |
|                      | Devices (Mobile and PCs) | - People Operations Security Policy <br /> - Security Operations & Network Security Policy (Workplace Tech) <br /> - Security & Data Protection <br /> - Acceptable Use Policy |
|                      | Accounts and Identities  | - Password Policy <br /> - Access Control Policy <br /> - Information Security Policy <br /> - People Operations Security Policy <br /> - Security & Data Protection <br /> - Acceptable Use Policy |
|                      | Identity and Directory Infrastructure  | - Access Control Policy <br /> - Information Security Policy |
|                      | Applications             | - Codat Control Framework <br /> - Information Security Policy <br /> - Secure Software Development Lifecycle Policy |
|                      | Network Controls         | - Security Operations & Network Security Policy <br /> - Codat Control Framework <br /> - Information Security Policy <br /> - Whitepaper - Network Security |
| Azure Responsibility | Operating System         | - Firmware security - Azure Security <br /> - Security features used with Azure VMs - Azure security <br /> - Best practices for secure PaaS deployments - Microsoft Azure|
|                      | Phyisical Hosts          | - Azure information system components and boundaries|
|                      | Phyisical Network        | - Azure information system components and boundaries |
|                      | Physical Data Centre     | - Physical security of Azure datacenters - Microsoft Azure |



# Architecture 

The Codat technology system has a [microservice](https://en.wikipedia.org/wiki/Microservices) architecture, this modular structure parallelizes software development and enables a scalable and robust system to be created.

There are currently over 100 services that make up the Codat technology infrastructure, each with a separate instance for each of the two environments (integration, production). 

Most importantly, each connection to an external data source is a separate service with the responsibility of handling authentication, authorisation, data fetch and data mapping. Services are configured to automatically scale out to multiple instances in the event of increased load, thus ensuring high levels of availability and performance. 

Load on instances is proactively monitored by Azure, and the engineering team is alerted in the event of unexpected spikes.

![](/img/enterprise/architecture/architecture.png)

# Hosting and Data Storage

Codat uses the [Microsoft Azure](https://azure.microsoft.com/en-us/) platform for all hosting and data storage.  Codat has ensured that all hosting and data storage by Azure is located in the UK only.

Microsoft Azure is a growing collection of integrated cloud services that developers and IT professionals use to build, deploy and manage applications through a global network of data centres.
In particular Codat uses [Azure’s Platform-as-a-service PaaS](https://azure.microsoft.com/en-gb/overview/what-is-paas/) offering rather than Infrastructure-as-a-service (IaaS). 

This means that the underlying application infrastructure is managed by Microsoft themselves, ensuring it is maintained to the highest standard. Operating System patching is carried out automatically by Microsoft.

All data is stored on Microsoft Azure architecture.

# Azure Security
Codat utilizes the following security offerings provided by Microsoft Azure:
 - Encryption at rest: SQL transparent data encryption, Storage Service Encryption, AES-256
 - Encryption in transit: TLS/SSL enforced for all data transit, HSTS, IPSec
 - Role level access: Azure RBAC, Active Directory

For a more detailed explanation of Microsoft Azure security and data protection features see [here](https://www.microsoft.com/en-us/trustcenter/).