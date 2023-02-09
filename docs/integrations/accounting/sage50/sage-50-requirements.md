---
title: "Sage 50 requirements"
slug: "sage-50-requirements"
description: "Software, hardware, environment and network requirements and configurations"
createdAt: "2022-11-25T12:08:57.434Z"
updatedAt: "2022-11-25T14:08:49.131Z"
---

:::note Supported Sage 50 accounts and versions

Codat supports Sage 50 accounts (UK) for versions from 2018 onwards (v24+). This is in line with <a className="external" href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112228593" target="_blank">Sage's software lifecycle policy</a>.

See a full list of supported Sage 50 versions below. We aim for this list to be as comprehensive and current as possible. If you experience issues with the supported versions or would like to register your interest in an unsupported version, please contact support@codat.io
:::

## Supported versions

Codat support versions 24, 25, 26, 27 and 28 of Sage 50c Accounts Standard & Professional.

## Unsupported versions

The Codat Sage 50 connector is not compatible with all non-UK versions of Sage 50.

The following UK versions are also not supported:

- Construction for Sage 50
- Sage 50 HR
- Sage Instant Accounts (formerly Sage 50 Instant Accounts)
- Abila Fundraising 50 (formerly Sage 50 Fundraising)

## Supported operating systems

The Codat Sage 50 connector is supported for Sage 50 (UK) running on Windows 10 or Windows 11 with the latest service packs installed.

Users have successfully run the connector on older versions of Windows; however, we do not officially support this due to Microsoft's withdrawal of support for these operating systems.

The connector will not run on Mac OS.

:::note Supported environments

The Sage 50 connector is designed to work in single tenant environments only, where one Windows user logs on to the same computer they use to access Sage 50 (UK). It is not designed or supported for use in hosted environments; for example, if your customer uses Online50 to access their Sage 50 accounts (UK) software.
:::

## Hardware requirements

You will need to ensure that the host machine meets [Sage's reccomended specification](https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112205533&hypermediatext=null#) for running Sage 50 Desktop.

If you have a large number of companies, or particularly large company files, you should pay special attention to the consumption of CPU, memory, disk and network resources on the host machine and ensure there is sufficient headroom.

## Firewall rules

The Sage 50 connector communicates over port 443 to URLs hosted on `<https://sage50.codat.io`>

If you experience problems with the connector transmitting data, please add the following URL to your firewall allow list:

`<https://sage50.codat.io/*>`
