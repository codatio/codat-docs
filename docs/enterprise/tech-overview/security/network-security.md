---
title: "Network security"
description: "Review the network security practices that apply to Codat's network architecture"
sidebar_label: "Network security"
---

:::tip Additional resources
View our latest compliance certificates and security and legal policies in our **[Trust Portal](https://trust.codat.io/)**.
:::

## Network architecture

Codat enforces a defense-in-depth (DiD) network architecture to protect our network, a cybersecurity strategy built on the following layers of control: 

* Principle of least privilege 
* Network segmentation 
* Strong identity and access management
* Encryption everywhere
* Monitoring and incident response
* Resilience and redundancy
* Minimization of attack surface
* Regular audits and penetration testing
* Cloud security principles
* Vulnerability management

The diagram below represents a high-level network architecture overview of the Codat platform.

![Codat Platform network architecture](network-architecture-diagram.png)

## Perimeter security

### Virtual private networks

The network architecture at Codat is logically separated into virtual private networks (VPNs). Each network represents a product environment, and direct access to that environment requires the use of the appropriate VPN connection. This ensures that:
* Data never leaves its environment (e.g. production data is only in production).
* The principle of least privilege can be applied (see [Access control](/enterprise/tech-overview/security/network-security#access-control) for more information).
* A single ingress and egress point can be enforced.

### Firewalls

Our network architecture uses a Web Application Firewall (WAF), which acts as an additional layer of protection filtering out malicious traffic. This WAF enforces numerous best practice checks on all ingress traffic. At a high level, these include protection against attacks, such as:
* Distributed denial of service (DDoS) 
* Denial of service (and rate limiting)
* The Open Web Application Security Project (OWASP) Top 10, including cross-site-scripting and SQL injection
* IP restrictions

## Endpoint security

### Device management

All devices used to interact with our VPNs (see [Virtual private networks](/enterprise/tech-overview/security/network-security#virtual-private-networks-vpns)) must be Codat-provisioned and meet our hardening and compliance policies. This is enforced and ensures that:
* Anti-virus software is installed and up to date.
* Full disk encryption is enabled.
* Latest operating system patches have been applied. 
* The device is enrolled in our asset inventory alongside an allocated owner.

## Traffic encryption

Please refer to [Data Security](/enterprise/tech-overview/security/data-security) for a full breakdown of how data is encrypted at Codat. From a network perspective, best practice encryption mechanisms are applied as part of all data transportation.

### HTTPS

All communication to `codat.io` mandates HTTPS (not HTTP) with best practice enforced. The report results below provided by the independent third party [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) attest to this configuration. 

![Qualys SSL Labs Scan Report](qualys-ssl-report.png)

### Internal network traffic

All internal network traffic operates over SSL/TLS (HTTPS). 

### HTTP Strict Transport Security

At an application level, all HTTPS responses servicing requests (from the portal or API) include an HTTP Strict Transport Security (HSTS) header. 

### mTLS

Enterprise customers can optionally conduct communication with our API via mutual TLS (mTLS). As part of this setup, Codat provides customers with a unique client certificate to use during the exchange. 

For more information, see [API mutual TLS](/enterprise/tech-overview/security/api-mTLS). If you wish to use mTLS, please speak to your account manager.  

## Access control

### Role-Based Access Control

Access to Codat's systems and network infrastructure is underpinned by Azure Role-Based Access Control (RBAC) and Active Directory. Group management is centralized and can only be modified via a ticket and an approved change management process. Core groups are reviewed quarterly as part of our user access review policy. 

Full details on these features can be found on the [Microsoft Trust Center](https://www.microsoft.com/en-us/trustcenter/)🔗.

### Multi–factor authentication and device compliance

Connections to any internal networks or infrastructure require several stringent access control checks to be met. These must include:

* Authentication via centralized accounts with mandated 2FA and time-bound access that requires regular re-authentication
* Virtual Private Network (VPN) usage
* Device compliance in the form of Codat provisioning and configuration

### Principle of least privilege

The principle of least privilege is applied to network access. Following this, we don't provision access to sensitive network infrastructure or data to an individual user's account by default. If the need to access such systems or data arises, group access is provisioned via a time-bound privilege elevation process that requires approval and a specific work item as part of our change management process.  

## Vulnerability scanning

Network-level vulnerability scanning is conducted by various tooling on a continuous basis. Any findings identified through this process are either automatically resolved through compensating controls or Azure policy, or triaged through our risk management process.

## Network monitoring and logging

### Log analysis

All network activity is logged for the purposes of auditing.

### Real-time monitoring

Access to sensitive user groups or changes that result in a significant change in resource operational behavior are alerted in real-time. 
