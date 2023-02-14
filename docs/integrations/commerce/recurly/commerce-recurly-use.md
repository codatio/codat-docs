---
title: "Use the Recurly integration"
description: "When an SMB user has linked their Recurly account, access their subscriptions and billing data by making proxy requests to the Recurly API"
createdAt: "2022-08-01T16:20:34.184Z"
updatedAt: "2022-10-20T09:00:21.155Z"
---

The Recurly integration is part of the [Domain Discovery Program](/integrations/commerce/domain-discovery-program), so Codat doesn't yet expose standardized data types or provide any data visualization or metrics (for example, in Assess).

Instead, when an SMB customer (a company) has [linked their Recurly account](/commerce-recurly-setup#smb-customer-authenticate-and-connect-your-commerce-data), you can access their subscriptions and billing data through the `proxy` endpoint in the Codat API. Only GET requests are currently supported.

## Send a proxy request

To proxy to the Recurly API, send a GET request to the `proxy` endpoint:

```
GET /companies/COMPANY_ID/connections/CONNECTION_ID/data/proxy?endpoint=RECURLY_ENDPOINT
```

Replace `RECURLY_ENDPOINT` with the desired Recurly API object, which must be URL encoded.

For example, to query a company's list of accounts in Recurly, send the following request:

```
GET /companies/COMPANY_ID/connections/CONNECTION_ID/data/proxy?endpoint=/accounts
```

To view a list of all available endpoints, see the <a className="external" href="https://developers.recurly.com/api/v2021-02-25/index.html" target="_blank">Recurly Developer Hub</a>.

:::caution

Use of the Recurly integration is subject to participation in the Codat [Domain discovery program](/integrations/commerce/domain-discovery-program). Be aware of the [program expectations](/integrations/commerce/domain-discovery-program) before using the integration.
:::
