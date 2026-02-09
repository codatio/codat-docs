---
title: "Aperçu des informations sur l'entreprise"
sidebar_label: "Informations sur l'entreprise"
description: "Identifier l'entreprise que vous souscrivez"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

La fonctionnalité d'**informations sur l'entreprise** fournit aux prêteurs des informations essentielles sur les entreprises emprunteuses. Elle sert de pierre angulaire pour des décisions de prêt complètes en offrant des informations sur l'identité d'une entreprise, y compris l'adresse, le numéro de téléphone et les numéros d'enregistrement.

## Composants de la fonctionnalité

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=303232670&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "400px" }}
/>

## Sorties prises en charge

Vous pouvez récupérer les données lues par la fonctionnalité en appelant soit l'endpoint [Get company accounting profile](/lending-api#/operations/get-accounting-profile) soit l'endpoint [Get company commerce profile](/lending-api#/operations/get-commerce-profile).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.companyInfo.getAccountingProfile({
  companyId: companyId,
});

if (response.statusCode != 200) {
  throw new Error("Could not get company's accounting profile");
}

console.log(response.accountingCompanyInfo.companyName);
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GetAccountingProfileRequest(
    company_id=company_id,
)
response = lending_client.company_info.get_accounting_profile(request=request)

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

## À lire ensuite

- [Excel download](/lending/features/excel-download-overview)
