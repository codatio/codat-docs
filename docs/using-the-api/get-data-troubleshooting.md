---
title: "Troubleshooting get data"
sidebar_label: "Troubleshooting"
description: "Frequently asked questions and troubleshooting guidance for getting data"
---

### warning.validation<a name="warning.validation"></a>

**Issue:** A validation warning was raised when getting data for a given data type.

**Cause:** This occurs when the data retrieved does not meet the expected validation criteria.

**Solution:**
1. Review the validation logs to determine if the validation criteria apply to your use case.
2. If the criteria do not apply, you can safely ignore the warning.
3. If the criteria do apply, update your application logic to handle this exception accordingly. (THIS IS BAD BUT I CAN'T THINK OF A BETTER WAY FOR NOW AS WE CANNOT SUPPRESS WARNINGS Maybe we should?)