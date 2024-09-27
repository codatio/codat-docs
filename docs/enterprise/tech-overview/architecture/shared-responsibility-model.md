---
title: "Shared Responsibility Model"
description: "Codat's PaaS Shared Responsibility Model"
draft: true
---

Operations at Codat are performed entirely on cloud hosted platforms. As such, responsibilities vary across layers of the stack.

|  .                   | Responsibility           | How is it done?              |
|----------------------|--------------------------|------------------------------|
| Codat Responsibility | Information and Data     | - Codat Control Framework <br /> - Data Retention Policy <br /> - Encryption Policy <br /> - Access Control Policy <br /> - Security & Data Protection <br /> - [Information Security Policy](https://trust.codat.io/)🔗 <br /> - [Acceptable Use Policy](https://trust.codat.io/)🔗 <br /> - [Data Security](/enterprise/tech-overview/security/data-security) |
|                      | Devices (Mobile and PCs) | - People Operations Security Policy <br /> - Security Operations & Network Security Policy (Workplace Tech) <br /> - Security & Data Protection <br /> - [Acceptable Use Policy](https://trust.codat.io/)🔗 |
|                      | Accounts and Identities  | - Password Policy <br /> - Access Control Policy <br /> - [Information Security Policy](https://trust.codat.io/)🔗 <br /> - People Operations Security Policy <br /> - Security & Data Protection <br /> -[Acceptable Use Policy](https://trust.codat.io/)🔗 |
|                      | Identity and Directory Infrastructure  | - Access Control Policy <br /> - [Information Security Policy](https://trust.codat.io/)🔗 |
|                      | Applications             | - Codat Control Framework <br /> - [Change Management Policy](https://trust.codat.io/)🔗 <br /> - [Secure SDLC Policy](https://trust.codat.io/)🔗 |
|                      | Network Controls         | - Security Operations & Network Security Policy <br /> - Codat Control Framework <br /> - [Information Security Policy](https://trust.codat.io/)🔗 <br /> - [Network Security](/enterprise/tech-overview/security/network-security) |
| Azure Responsibility | Operating System         | - [Firmware security (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/firmware)🔗 <br /> - [Security in Azure App Services (Azure)](https://learn.microsoft.com/en-us/azure/app-service/overview-security)🔗 <br /> - [Securing PaaS deploymnets (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/paas-deployments)🔗 |
|                      | Phyisical Hosts          | - [Information system components and boundaries (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
|                      | Phyisical Network        | - [Information system components and boundaries (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
|                      | Physical Data Centre     | - [Datacentre security overview (Azure)](https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-security)🔗 |