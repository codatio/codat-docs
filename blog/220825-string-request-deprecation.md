---
title: "Completed 2023-01-10: Deprecation of string request to the create connections endpoint"
date: "2022-08-25"
tags: ["Deprecation", "Upcoming"]
draft: false
authors: mcclowes
---

On January 10, 2023 we will update the structure of the request body for requests to the POST /companies/{companyId}/connections endpoint to use a JSON object instead of a raw text string.

<!--truncate-->

To use the updated request body before this date, enable the relevant feature button in the Portal.

Action required
Update the body of any requests to the POST /companies/{companyId}/connections endpoint from a string value to the JSON object as specified below:


```JSON
{
  "platformKey": "string",
}
```

Currently, the platform key in the request body is entered as a raw text string. For example:

“platformKey"

#### Expected impact if no action is taken

A POST request body that is not a JSON object containing a platformKey property will be rejected with the following error:

```JSON

{
    "statusCode": 400,
    "service": "PublicApi",
    "error": "Push object DataConnectionArgs must be provided",
    "correlationId": "string",
    "validation": {
        "errors": [],
        "warnings": [],
        "_errors": [],
        "_warnings": [],
        "_internals": []
    },
    "canBeRetried": "Unknown",
    "detailedErrorCode": 0
}
```

### Further information

Legacy request body for POST /companies/{companyId}/connections endpoint; available only for clients onboarded prior to September 1, 2022. This model is being replaced on January 10, 2023.


New request body for POST /companies/{companyId}/connections endpoint; available for clients onboarded from September 1, 2022. This model will be implemented for all other clients on January 10, 2023.

```JSON

{
  "platformKey": "string",
}
```

You can get ahead of this change by enabling it now in the Portal.