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
* If they do apply, update your application logic to handle this exception accordingly. (THIS IS BAD BUT I CAN'T THINK OF A BETTER WAY FOR NOW AS WE CANNOT SUPPRESS WARNINGS Maybe we should?)
