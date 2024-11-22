---
title: "Shared responsibility model"
description: "Review Codat's shared responsibility model with Microsoft Azure"
hide_table_of_contents: false
---

Operations at Codat are performed entirely on cloud hosted platforms. As such, responsibilities vary across layers of the stack. You can see Microsoft's approach to dividing responsibility in the cloud below. 
![Microsoft's division of responsibility in the cloud](ms-shared-responsibility.svg)

## Resposibilities by party

The following tables articulate the responsible parties at each layer of our [platform as a service](/enterprise/tech-overview/architecture/platform-as-a-service) offering and the details of their implementation. 

### Codat's scope

| Responsibility           | How is it done?              |
|--------------------------|------------------------------|
| Information and data     | &#x2022; Codat Control Framework <br /> &#x2022; Data Retention Policy <br /> &#x2022; Encryption Policy <br /> &#x2022; Access Control Policy <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Data Security](/enterprise/tech-overview/security/data-security) |
| Devices (mobile and PCs) | &#x2022; People Operations Security Policy <br /> &#x2022; Security Operations & Network Security Policy (workplace tech) <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 |
| Accounts and identities  | &#x2022; Password Policy <br /> &#x2022; Access Control Policy <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; People Operations Security Policy <br /> &#x2022; Security & Data Protection <br /> &#x2022; [Acceptable Use Policy](https://trust.codat.io/)🔗 |
| Identity and directory infrastructure  | &#x2022; Access Control Policy <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 |
| Applications             | &#x2022; Codat Control Framework <br /> &#x2022; [Change Management Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Secure SDLC Policy](https://trust.codat.io/)🔗 |
| Network controls         | &#x2022; Security Operations & Network Security Policy <br /> &#x2022; Codat Control Framework <br /> &#x2022; [Information Security Policy](https://trust.codat.io/)🔗 <br /> &#x2022; [Network Security](/enterprise/tech-overview/security/network-security) |

### Azure's scope

Comprehensive details on the security and data protection features within Microsoft Azure can be found on the [Microsoft Trust Center](https://www.microsoft.com/en-us/trustcenter/)🔗 and as part of Microsoft's [Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)🔗 documentation. 

| Responsibility           | How is it done?              |
|--------------------------|------------------------------|
| Operating System         | &#x2022; [Firmware security](https://learn.microsoft.com/en-us/azure/security/fundamentals/firmware)🔗 <br /> &#x2022; [Security in Azure App Services](https://learn.microsoft.com/en-us/azure/app-service/overview-security)🔗 <br /> &#x2022; [Securing PaaS deployments](https://learn.microsoft.com/en-us/azure/security/fundamentals/paas-deployments)🔗 |
| Physical hosts          | &#x2022; [Azure information system components and boundaries](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
| Physical network        | &#x2022; [Azure information system components and boundaries](https://learn.microsoft.com/en-us/azure/security/fundamentals/infrastructure-components)🔗 |
| Physical data centre     | &#x2022; [Datacenter security overview](https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-security)🔗 |
