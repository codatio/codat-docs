---
title: "Sage 50 requirements"
slug: "sage-50-requirements"
description: "Software, hardware, environment and network requirements and configurations"
sidebar_label: Requirements
---

## Supported versions

Codat supports the following variations of Sage 50:

- Sage 50 and Sage 50 cloud (Sage 50c) 
- Versions 26, 27, 28, 29 and 30 
- Standard and Professional plans

This is in line with <a className="external" href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112228593" target="_blank">Sage's software lifecycle policy</a>. If you experience issues with the supported versions, please use our [support request form](https://codat.zendesk.com/hc/en-gb/requests/new) to raise a ticket. If you would like to register your interest in an unsupported version, please contact your account manager.

## Unsupported versions

The Codat Sage 50 connector is not compatible with all non-UKI (UK & Ireland) versions of Sage 50.

The following UKI versions are also not supported:

- Construction for Sage 50
- Sage 50 HR
- Sage Instant Accounts (formerly Sage 50 Instant Accounts)
- Abila Fundraising 50 (formerly Sage 50 Fundraising)

## Supported operating systems

The Codat Sage 50 connector is supported for Sage 50 (UK & Ireland) running on Windows 10 or Windows 11 with the latest service packs installed.

Users have successfully run the connector on older versions of Windows; however, we do not officially support this due to Microsoft's withdrawal of support for these operating systems.

The connector will not run on Mac OS.

:::note Supported environments

The Sage 50 connector is designed to work in single tenant environments only, where one Windows user logs on to the same computer they use to access Sage 50 (UK & Ireland). It is not designed or supported for use in hosted environments; for example, if your customer uses Online50 to access their Sage 50 accounts (UK & Ireland) software.
:::

## Hardware requirements

You will need to ensure that the host machine meets [Sage's recommended specification](https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112205533&hypermediatext=null#) for running Sage 50 Desktop.

If you have a large number of companies, or particularly large company files, you should pay special attention to the consumption of CPU, memory, disk and network resources on the host machine and ensure there is sufficient headroom.

## Firewall rules

The Sage 50 connector communicates over port 443 to URLs hosted on `https://sage50.codat.io`

If you experience problems with the connector transmitting data, add the following URLs to your firewall allow list:

`https://sage50.codat.io/*`

`https://connectors.codat.io`
