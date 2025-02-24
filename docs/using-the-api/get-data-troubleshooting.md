---
title: "Resolve issues when reading data"
sidebar_label: "Troubleshooting"
description: "Learn how to troubleshoot issues that occur when reading data"
---

This page provides guidance on effectively troubleshooting and resolving issues that may occue when reading data for each possible issue type. Navigate to the relevant issue type to see the proposed resolution.

### warning.validation<a name="warning.validation"></a>

**Details:** A validation warning was raised when reading data for a given data type.

**Cause:** This occurs when the retrieved data doesn't meet the expected validation criteria.

**Solution:**

Review the validation logs to determine if the validation criteria apply to your use case:
* If the criteria don't apply, you can safely ignore the warning.
* If they do apply, update your application logic to handle this exception accordingly. (THIS IS BAD BUT I CAN'T THINK OF A BETTER WAY FOR NOW AS WE CANNOT SUPPRESS WARNINGS Maybe we should?)