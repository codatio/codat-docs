---
title: "Shared Responsibility Model"
description: "Our PaaS shared responsibility model"
---

Operations at Codat are performed entirely on cloud hosted platforms. As such, responsibilities vary across layers of the stack.

|  &nbsp;              | Responsibility           | How is it done?              |
|----------------------|--------------------------|------------------------------|
| Codat Responsibility | Information and Data     | &#x2022; Codat Control Framework <br /> &#x2022; Data Retention Policy <br /> &#x2022; Encryption Policy <br /> &#x2022; Access Control Policy <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Data Security](/enterprise/tech-overview/security/data-security) |
|                      | Devices (Mobile and PCs) | &#x2022; People Operations Security Policy <br /> &#x2022; Security Operations & Network Security Policy (Workplace Tech) <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 |
|                      | Accounts and Identities  | &#x2022; Password Policy <br /> &#x2022; Access Control Policy <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; People Operations Security Policy <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 |
|                      | Identity and Directory Infrastructure  | &#x2022; Access Control Policy <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 |
|                      | Applications             | &#x2022; Codat Control Framework <br /> &#x2022; [Change Management Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Secure SDLC Policy](https://trust.codat.io/)🔗 |
|                      | Network Controls         | &#x2022; Security Operations & Network Security Policy <br /> &#x2022; Codat Control Framework <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Network Security](/enterprise/tech-overview/security/network-security) |
| Azure Responsibility | Operating System         | &#x2022; [Firmware security (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/firmware)🔗 <br /> &#x2022; [Security in Azure App Services (Azure)](https://learn.microsoft.com/en-us/azure/app-service/overview-security)🔗 <br /> &#x2022; [Securing PaaS deploymnets (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/paas-deployments)🔗 |
|                      | Phyisical Hosts          | &#x2022; [Information system components and boundaries (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
|                      | Phyisical Network        | &#x2022; [Information system components and boundaries (Azure)](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
|                      | Physical Data Centre     | &#x2022; [Datacentre security overview (Azure)](https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-security)🔗 |

## Azure Security
Codat utilises the following security offerings provided by Microsoft Azure:
 - Encryption at rest: SQL transparent data encryption, Storage Service Encryption, AES-256
 - Encryption in transit: TLS/SSL enforced for all data transit, HSTS, IPSec
 - Role level access: Azure RBAC, Active Directory

Full details on Microsoft Azure security and data protection features can be found on the [Microsoft Trust Centre](https://www.microsoft.com/en-us/trustcenter/)🔗.