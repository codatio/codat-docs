---
title: "Company info overview"
sidebar_label: "Company info"
description: "Identify the business you are underwriting"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

The **company info** feature provides lenders with essential information about borrower companies. It serves as a cornerstone for comprehensive lending decisions by offering insights into a company's identity including address, phone number and registration numbers.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=303232670&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "400px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled by the feature by calling either the [Get company accounting profile](/lending-api#/operations/get-accounting-profile) or [Get company commerce profile](/lending-api#/operations/get-commerce-profile) endpoints.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.companyInfo.getAccountingProfile({
    companyId: companyId,
  });

if(response.statusCode != 200){
  throw new Error("Could not get company's accounting profile")
}

console.log(response.accountingCompanyInfo.companyName)
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GetAccountingProfileRequest(
    company_id=company_id,
)
response = lending_client.company_info.get_accounting_profile(req)

if response.status_code != 200:
  raise Exception("Could not get company's accounting profile")

print(response.accounting_company_info.company_name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.CompanyInfo.GetAccountingProfileAsync(new() {
    CompanyId = companyId,
});

if(response.StatusCode != 200){
  throw new Exception("Could not get current suppliers");
}

Console.WriteLine(response.AccountingCompanyInfo.CompanyName);
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.CompanyInfo.GetAccountingProfile(ctx,
operations.GetAccountingProfileRequest{
    CompanyID: companyID,
})

if response.StatusCode == 200 {
  fmt.Println(response.AccountingCompanyInfo.CompanyName)
}
```

</TabItem>

</Tabs>

---
## Read next
- [Excel download](/lending/features/excel-download-overview)
