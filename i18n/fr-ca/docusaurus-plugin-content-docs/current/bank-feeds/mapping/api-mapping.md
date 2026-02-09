---
title: "Créer votre propre interface de mappage"
description: "Pour une expérience utilisateur plus intégrée, créez votre propre interface en utilisant les points de terminaison de mappage de comptes de notre API"
sidebar_label: Mapper via API
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { IntegrationsList } from "@components/Integrations";
import { bankfeedsInternalMappingIntegrations } from "@components/Integrations/integrations";

Vous pouvez permettre à vos utilisateurs de mapper leurs comptes directement dans votre propre application en utilisant les points de terminaison de mappage de comptes de notre API. Ce sont les mêmes points de terminaison que notre [interface préconstruite](/bank-feeds/mapping/codat-ui) utilise. Lors de la création, assurez-vous de vérifier toutes les exigences des partenaires pour maintenir la conformité de votre application.

## Lister les options de compte

En préparation, configurez vos [paramètres de redirection](/auth-flow/customize/set-up-redirects) pour faire référence à la page de mappage de votre application. Ensuite, dirigez votre client vers l'`linkUrl` renvoyée dans la réponse [Create a connection](/bank-feeds/create-account#create-a-connection). Après qu'ils aient autorisé votre accès à leur logiciel de comptabilité, ils seront guidés vers votre application.

Utilisez le point de terminaison [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) pour récupérer une liste des comptes cibles valides disponibles pour mapper le compte source de l'entreprise et afficher ces options à votre utilisateur.

Ces options sont filtrées en fonction de la devise et du type du compte source. Par exemple, si le compte source est une carte de crédit en devise USD, le point de terminaison ne renverra que les comptes de crédit USD comme options.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const mappingResponse = bankFeedsClient.accountMapping.get({
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
mapping_request = operations.GetBankAccountMappingRequest(
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

mapping_response = s.account_mapping.get(mapping_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var mappingResponse = await sdk.AccountMapping.GetAsync(new() {
	CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
mappingResponse, err := s.AccountMapping.Get(ctx, operations.GetBankAccountMappingRequest{
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```

</TabItem>

</Tabs>

#### Exemple de réponse Xero

```json
[
  {
    "sourceAccountId": "39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8",
    "sourceAccountNumber": "4243",
    "sourceAccountName": "source-account-1",
    "sourceBalance": 100,
    "sourceCurrency": "GBP",
    "targetAccountId": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
    "targetAccountName": "SavingsBankPro",
    "status": "connected",
    "targetAccountOptions": [
      {
        "name": "SavingsBankPro",
        "id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
        "accountNumber": "4243"
      },
      {
        "name": "WaveCrestFinance",
        "id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
        "accountNumber": "77"
      }
    ],
    "feedStartDate": "2023-09-12T00:00:00"
  }
]
```

## Enregistrer le mappage de compte

Une fois que votre utilisateur indique la paire de compte source et cible souhaitée dans votre application, utilisez notre point de terminaison [Create bank feed account mapping](/bank-feeds-api#/operations/create-bank-account-mapping) pour enregistrer le mappage.

:::caution Mappage de plusieurs comptes
Vous ne pouvez enregistrer le mappage que pour un seul compte à la fois. Si votre utilisateur doit mapper plusieurs comptes, enregistrez les mappages dans des requêtes séparées à notre API.
:::

### Mapper vers un nouveau compte

Si votre utilisateur souhaite utiliser un nouveau compte cible pour rapprocher les transactions bancaires, vous pouvez y parvenir en omettant le paramètre `targetAccountId` lors de l'enregistrement du mappage.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Requête

```json
POST /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping

{
    "sourceAccountId": "source-account-id",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```

#### Réponse

```json
{
  "sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
  "targetAccountId": null,
  "status": "connecting"
}
```

</TabItem >

</Tabs>

### Mapper vers un compte existant

Si votre utilisateur choisit un compte cible existant pour rapprocher les transactions bancaires, remplissez le paramètre `targetAccountId` lors de l'enregistrement du mappage.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Requête

```json
POST /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping

{
    "sourceAccountId": "source-account-id",
    "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
    "feedStartDate": "2023-01-01T00:00:21.470Z"
}
```

#### Réponse

```json
{
  "sourceAccountId": "e58c281d-e8fd-48eb-a07f-ea7eef9b96f3",
  "targetAccountId": "2efba41e-1edf-49dc-8e14-b5eaed792f07",
  "status": "connecting"
}
```

</TabItem >

</Tabs>

### Vérifier le statut du mappage

Parfois, le mappage n'est pas immédiatement enregistré dans le logiciel de comptabilité sous-jacent et son statut dans la requête reste `pending`.

Interrogez le point de terminaison [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) jusqu'à ce que le statut passe à `connected`. Vous pouvez ensuite procéder à la création de transactions bancaires dans le compte cible.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const status = "";
while (status !== "connected") {
  const mappingResponse = bankFeedsClient.accountMapping.get({
    companyId: companyResponse.company.id,
    connectionId: connectionResponse.connection.id,
  });

  if (mappingResponse.statusCode == 200) {
    status = mappingResponse.bankFeedMapping.status;
  }
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
mapping_request = operations.GetBankAccountMappingRequest(
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id
)

status = ''
while status != 'connected':
	mapping_response = bank_feeds_client.account_mapping.get(mapping_request)

	if mapping_response.status_code == 200:
		status = mapping_response.bankFeedMapping.status
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var status = "";
while (!status.Equals("connected"))
{
	var mappingResponse = await bankFeedsClient.AccountMapping.GetAsync(new() {
		CompanyId = companyResponse.Company.Id,
		ConnectionId = connectionResponse.Connection.Id
	});

	if(mappingResponse.StatusCode == 200){
		status = mappingResponse.BankFeedMapping.Status;
	}
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
status := ""
for status != "connected" {
	ctx := context.Background()
	mappingResponse, err := bankFeedsClient.AccountMapping.Get(ctx, operations.GetBankAccountMappingRequest{
		CompanyID: companyResponse.Company.ID,
    	ConnectionID: connectionResponse.Connection.ID
	})

	if mappingResponse.StatusCode == 200 {
		status = mappingResponse.BankFeedMapping.Status
	}
}
```

</TabItem>

</Tabs>

## Intégrations prises en charge

<IntegrationsList integrations={bankfeedsInternalMappingIntegrations} />

---

## Lire ensuite

- [Créer des transactions bancaires dans le logiciel de comptabilité](/bank-feeds/pushing-transactions)
