---
title: "Zettle integration reference"
description: "Things to know when reading data from Zettle"
---

Be aware of the following information when building your application using our Zettle integration.

## Field coverage for supported data types

Codat's data model supports a wide range of fields within each data type.

Sometimes a provider's API does not grant access to a field that exists in a Codat data type. Conversely, our data model sometimes does not support all the relevant fields on an object in a provider's API.

The following table highlights selected fields that are not available in data read from and written to Zettle.

### Unavailable provider fields

| Codat data type                      | Status                              |
|--------------------------------------|-------------------------------------|
| `Commerce.Payments.paymentProvider`  | Not available in the provider's API |