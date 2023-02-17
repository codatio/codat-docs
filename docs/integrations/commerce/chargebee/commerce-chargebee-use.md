---
title: "Use the Chargebee integration"
description: "When an SMB user has linked their Chargebee account, access their subscriptions and billing data by making proxy requests to the Chargebee API"
createdAt: "2022-08-02T15:56:09.330Z"
updatedAt: "2022-10-19T16:28:15.495Z"
---

The Chargebee integration is part of the [Domain discovery program](/integrations/commerce/domain-discovery-program), so Codat doesn't yet expose standardized data types or provide any data visualization or metrics (for example, in Assess).

Instead, when an SMB user has [linked their Chargebee account](/integrations/commerce/chargebee/commerce-chargebee-setup#smb-customer-authenticate-and-connect-your-commerce-data), you can access their subscriptions and billing data through the `proxy` endpoint in the Codat API. Only GET requests are currently supported.

## Send a proxy request

To proxy to the Chargebee API, send a GET request to the `proxy` endpoint:

```
GET /companies/COMPANY_ID/connections/CONNECTION_ID/data/proxy?endpoint=CHARGEBEE_ENDPOINT
```

Replace `CHARGEBEE_ENDPOINT` with the desired Chargebee API object, which must be URL encoded.

For example, to view a company's customers in Chargebee, send the following request:

```
GET /companies/COMPANY_ID/connections/CONNECTION_ID/data/proxy?endpoint=v2/customers
```

To view a list of all available endpoints, see the <a className="external" href="https://apidocs.eu.chargebee.com/docs/api" target="_blank">Chargebee API documentation</a>.

:::caution

Use of the Chargebee integration is subject to participation in the Codat [Domain discovery program](/integrations/commerce/domain-discovery-program). Be aware of the program expectations before using the integration.
:::
