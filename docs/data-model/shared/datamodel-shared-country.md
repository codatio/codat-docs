---
title: "Country"
description: "The country property provided by the underlying platform"
createdAt: "2021-04-01T15:01:43.834Z"
updatedAt: "2022-11-22T13:55:23.664Z"
---

The Codat country property is returned as it was provided in the underlying platform by the company without any formatting on our part.

Depending on the platform the value of this property will either be an <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="_blank">ISO 3166</a> code (2-alpha or 3-alpha) or free-form text returned as a string name in our model.

For POST operations against platforms that demand a specific format for the country code, we have documented accepted values in the [options](https://api.codat.io/swagger/index.html#/Push/get_companies__companyId__connections__connectionId__options__dataType_) endpoint.
