---
title: "Resolve data read issues"
sidebar_label: "Troubleshooting"
description: "Learn how to troubleshoot issues that occur when reading data"
---

To view guidance on effective troubleshooting and issue resolution, navigate to the issue type you encountered.

### warning.validation<a name="warning.validation"></a>

**Details:** A validation warning was raised when reading data for a given data type.

**Cause:** This occurs when the retrieved data doesn't meet the expected validation criteria.

**Solution:**
Review the validation logs to determine if the validation criteria apply to your use case:
* If the criteria don't apply, you can safely ignore the warning.
* If they do apply, update your application logic to handle this exception accordingly.

:::info Accessing validation specifications

Due to the dynamic nature of our validation system, we cannot provide a fully exhaustive list of validation warnings for our data types. Our validation logic continuously evolves as we enhance the platform, introduce new data types, and refine rules based on real-world usage. Additionally, some warnings are context-dependent, triggered by specific data patterns, integration settings, or evolving third-party standards.

To ensure you have the most up-to-date and relevant insights, we recommend leveraging real-time validation feedback via our API.
:::