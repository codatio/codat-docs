---
title: "Use the Recurly integration"
description: "When an SMB user has linked their Recurly account, access their subscriptions and billing data by making proxy requests to the Recurly API"
sidebar_label: Use
---

The Recurly integration doesn't yet expose standardized data types or provide any data visualization or metrics (for example, in Lending).

Instead, when an SMB customer (a company) has [linked their Recurly account](/integrations/commerce/recurly/commerce-recurly-setup#smb-customer-authenticate-and-connect-your-commerce-data), you can access their subscriptions and billing data through the `proxy` endpoint in the Codat API. Only GET requests are currently supported.

By default, Codat disables users from making `proxy` requests. To enable proxy for Recurly, contact your account manager or raise a ticket with our support team through the [support request form](https://codat.zendesk.com/hc/en-gb/requests/new).

## Send a proxy request

To proxy to the Recurly API, send a GET request to the `proxy` endpoint:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=RECURLY_ENDPOINT
```

Replace `RECURLY_ENDPOINT` with the desired Recurly API object, which must be URL encoded.

For example, to query a company's list of accounts in Recurly, send the following request:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=/accounts
```

To view a list of all available endpoints, see the <a className="external" href="https://developers.recurly.com/api/v2021-02-25/index.html" target="_blank">Recurly Developer Hub</a>.