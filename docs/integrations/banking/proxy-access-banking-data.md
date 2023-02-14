---
title: "Access to additional banking data"
description: "Access to additional banking data types for Plaid and TrueLayer"
createdAt: "2021-12-03T10:16:28.225Z"
updatedAt: "2022-01-11T15:11:06.060Z"
---

You can enable proxy access to banking data types from [Plaid](/banking-plaid) and [TrueLayer](/integrations/banking/basiq/banking-truelayer), in addition to the data types that are mapped to the Codat API. This gives you access to a wider range of data types in your customers’ banking data from Plaid or TrueLayer.

If proxy access is enabled, requests for the additional banking data types are routed directly to the relevant endpoints in the Plaid or TrueLayer API. The additional banking data types are not mapped to Codat's data model.

You should only enable proxy access if you require access to customer banking data that is in addition to the natively supported banking data types.

Proxy access is provided in parallel with access to the natively supported banking data types. It can't be used to access endpoints that are already supported through the Codat API (for example, `Transactions`). The additional banking data types can be accessed by every company you create.

You can [enable proxy access](/integrations/banking/proxy-access-banking-data/) for either the Plaid or TrueLayer integration in the Codat Portal. The Plaid and TrueLayer integrations can't both be enabled at the same time.

:::info Partner APIs

The availability and uptime of a partner API is the responsibility of the partner company, not Codat. Enabling proxy access does not guarantee access to the selected data types; the availability of Plaid or TrueLayer data types depends on which products are enabled for your account in the partner API.

:::

## Additional data types supported through proxy access

For the Plaid integration, you can enable some or all of the following additional data types via the proxy. These are referred to as "products".

### Plaid additional products

```
deposit_switch
identity
income_verification
investments
liabilities
payment_initiation
transfer
assets
```

For the TrueLayer integration, you can enable some or all of the following additional data types via the proxy. These are referred to as "scopes".

### TrueLayer additional scopes

```
direct_debits
standing_orders
```

To learn more about these data types, please refer to our partner documentation:

- [API Reference](https://plaid.com/docs/api/) in the Plaid documentation.
- [Overview](https://docs.truelayer.com/docs/account-data-overview) of the TrueLayer Data API.
