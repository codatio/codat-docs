---
title: "Network Security"
description: "Our Network security practices."
---

## Network Architecture
Codat enforces a defense in depth network architecture with focuses on:
* The principle of least privilege 
* Network segmentation 
* Strong identity and access management
* Encryption everywhere
* Monitoring and incident response
* Resilience and redundancy
* Minimisation of attack surface
* Regular audits and penetration testing
* Cloud security principles
* Vulnerability management

Below is a high level network architecture diagram of the Codat platform.

![Codat Platform network architecture](network-architecture-diagram.png)
*Codat Platform network architecture*

## Perimeter Security

### Virtual Private Networks (VPNs)
The network architecture at Codat is logically separated into virtual private networks. Each network represents a product environment, with direct access to that environment requiring the use of the appropriate VPN connection.

This ensures that:
* Data never leaves its environment (e.g. production data is only in production)
* The principle of least privilege can be applied (see Access Control for more information)
* A single ingress and egress point can be enforced

### Firewalls
Our network architecture makes use of a Web Application Firewall (WAF), which acts as an additional layer of protection filtering out malicious traffic. This WAF enforces numerous best practice checks on all ingress traffic. At a high level these include protection against attacks such as:
* Distributed Denial of Service 
* Denial of Service (and rate limiting)
* OWASP Top 10, including (not limited to):
  * Cross-Site-Scripting 
  * SQL Injection
* IP Restrictions

## Endpoint Security

### Device Management
All devices used to interact with our VPNs (see Virtual Private Networks) must be Codat provisioned and meet our hardening/compliance policies. This is enforced and ensures that:
* Anti-virus software is installed and up to date
* Full disk encryption is enabled
* Latest operating system patches have been applied 
* The device is enrolled in our asset inventory alongside an allocated owner


## Traffic Encryption
Please refer [Data Security](/enterprise/tech-overview/security/data-security) for a full breakdown of how data is encrypted at Codat. From a network perspective, best practice encryption mechanisms are applied as part of all data transportation.

### HTTPS
All communication to codat.io mandates HTTPS (rather than HTTP) with best practice enforced. The report below provided by the independent third party SSL Labs attests to this configuration.

![Qualys SSL Labs Scan Report](qualys-ssl-report.png)
*Qualys SSL Labs Scan Report*

### Internal Network Traffic
All internal network traffic operates over SSL/TLS (HTTPS). 

### HTTP Strict Transport Security (HSTS)
At an application level, all HTTPS responses servicing requests (from the portal or API) include an HSTS header. 

### mTLS (enterprise offering)
Enterprise customers can optionally conduct communication with our API via mutual TLS. As part of this setup, Codat is able to provide customers with a unique client certificate to use during the exchange. For more information, please raise with your account manager.  

## Access Control

### Role Based AccessControl (RBAC)
Access to systems and network infrastructure is underpinned by RBAC. Group management is centralised and can only be modified via a ticket and approved change management process. Core groups are reviewed quarterly as part of our user access review policy.

### Multi–Factor Authentication & Device Compliance
Connections to any internal networks or infrastructure require several stringent access control checks to be met. These must include:
* Authentication via centralised accounts with mandated 2FA. Such access is time-bound and requires regular re-authentication
* Virtual Private Network (VPN) usage
* Device compliance in the form of Codat provisioning and configuration

### Principle of Least Privilege
The principle of least privilege is applied to network access. As such, an individual’s user account is not provisioned access to groups providing access to ‘sensitive’ network infrastructure or data by default. Should the need to access such systems or data arise, group access is provisioned via a time-bound privilege elevation process requiring approval and a specific work item as part of our change management process.  

## Vulnerability Scanning
Network level vulnerability scanning is conducted by various tooling on a continuous basis. Any findings identified through this process are either automatically resolved through compensating controls or Azure policy, or triaged through our risk management process.

## Network Monitoring and Logging

### Log Analysis
All network activity is logged for the purposes of auditing.

### Real-time Monitoring
Access to sensitive user groups or changes that result in a significant change in resource operational behavior are alerted in real-time. 





