---
title: "Configurer le client dans Codat"
description: "Créer une entreprise, sa connexion et un compte source qui forment la structure requise pour établir un flux bancaire"
sidebar_label: Configurer le client
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Aperçu

Lors de l'implémentation de votre solution de flux bancaires, vous devez créer votre client en tant qu'[entreprise](../terms/company) dans Codat avant d'enregistrer son logiciel de comptabilité en tant que connexion et de créer un compte source pour représenter le compte bancaire réel de l'entreprise.

Vous pouvez voir comment ces éléments s'assemblent et où ils se situent dans le processus global des flux bancaires sur le diagramme ci-dessous.

![Un diagramme démontrant la relation entre divers concepts Codat et les étapes suivantes du processus Bank Feeds](/img/bank-feeds/bankfeeds-concept-flow.png)

:::tip Autoriser vos appels API
N'oubliez pas de [vous authentifier](/using-the-api/authentication) lors des appels à notre API. Accédez à **Développeurs > Clés API** dans le portail pour récupérer votre en-tête d'autorisation.
:::

## Créer une entreprise

Dans Bank Feeds, une entreprise représente votre client PME qui souhaite exporter ses transactions de votre application vers son logiciel de comptabilité.

Utilisez le point de terminaison [Create company](/bank-feeds-api#/operations/create-company) pour représenter votre client dans Codat.
Assurez-vous de stocker l'ID d'entreprise car vous l'utiliserez pour établir une connexion à un logiciel de comptabilité.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyResponse = bankFeedsClient.companies.create({
  name: companyName,
});

if (companyResponse.statusCode == 200) {
  throw new Error("Could not create company");
}

const companyId = companyResponse.company.id;
console.log(companyId);
```

</TabItem>

<TabItem value="python" label="Python">

```python
company_request = shared.CompanyRequestBody(
    name=company_name,
)

company_response = bank_feeds_client.companies.create(company_request)

if company_response.status_code != 200:
  raise Exception('Could not create company')

company_id = company_response.company.id
print(company_id)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var companyResponse = await bankFeedsClient.Companies.CreateAsync(new() {
    Name = companyName,
});

if(companyResponse.StatusCode != 200){
  throw new Exception("Could not create company");
}

var companyId = companyResponse.Company.Id;
console.log(companyId)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyResponse, err := bankFeedsClient.Companies.Create(ctx, &shared.CompanyRequestBody{
  Name: companyName,
	})

if companyResponse.StatusCode == 200 {
  companyID := companyResponse.Company.ID
  fmt.Println("%s", companyID)
}
```

</TabItem>

</Tabs>

## Créer une connexion

Ensuite, utilisez le point de terminaison [Create connection](/bank-feeds-api#/operations/create-connection) pour connecter l'entreprise à une source de données comptables via l'une de nos intégrations. Cela vous permettra de synchroniser des données avec cette source.

Dans le corps de la requête, spécifiez une `platformKey` du logiciel de comptabilité que vous cherchez à connecter.

| Logiciel de comptabilité    | platformKey |
| --------------------------- | ----------- |
| QuickBooks Online Bankfeeds | `hcws`      |
| Oracle NetSuite             | `akxx`      |
| Xero                        | `gbol`      |
| FreeAgent                   | `fbrh`      |
| Sage bank feeds             | `olpr`      |

À titre d'exemple, créons une connexion QuickBooks Online (QBO). En réponse, le point de terminaison retourne un objet `dataConnection` avec un statut `PendingAuth` et un `linkUrl`. Dirigez votre client vers le `linkUrl` pour lancer notre [flux d'authentification Link](/auth-flow/overview) et lui permettre d'autoriser cette connexion.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const connectionResponse = bankFeedsClient.connections.create({
  requestBody: {
    platformKey: "hcws",
  },
  companyId: companyResponse.company.id,
});

console.log(connectionResponse.connection.linkUrl);
```

</TabItem>

<TabItem value="python" label="Python">

```python
connection_request = operations.CreateConnectionRequest(
    request_body=operations.CreateConnectionRequestBody(
        platform_key='hcws',
    ),
    company_id=company_response.company.id,
)

connection_response = bank_feeds_client.connections.create(connection_request)

console.log(connection_response.connection.link_url)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var connectionResponse = await bankFeedsClient.Connections.CreateAsync(new() {
    RequestBody = new CreateConnectionRequestBody() {
        PlatformKey = "hcws",
    },
    CompanyId = companyResponse.Company.Id,
});

Console.WriteLine(connectionResponse.Connection.LinkUrl)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
connectionResponse, err := bankFeedsClient.Connections.Create(ctx, operations.CreateConnectionRequest{
    RequestBody: &operations.CreateConnectionRequestBody{
        PlatformKey: bankfeeds.String("hcws"),
    },
    CompanyID: companyResponse.Company.ID,
})

fmt.Println(connectionResponse.Connection.LinkUrl)
```

</TabItem>

</Tabs>

:::info Mot de passe à usage unique pour QBO

Pour QBO, le `linkUrl` contient un mot de passe à usage unique (OTP) qui expire après une heure. Si l'OTP a expiré, votre client recevra une erreur `401` lors du chargement de la page. Générez un nouvel OTP en appelant le point de terminaison [Get connection](/bank-feeds-api#/operations/get-connection).

<details>
  <summary><b>Voir les extraits de code</b></summary>

<Tabs groupId="language">
<TabItem value="nodejs" label="TypeScript">

```javascript
const connectionOtpResponse = bankFeedsClient.connections.get({
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});

console.log(connectionOtpResponse.connection.linkUrl);
```

</TabItem>

<TabItem value="python" label="Python">

```python

connection_otp_request = operations.GetConnectionRequest(
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

connection_otp_response = bank_feeds_client.connections.get(connection_otp_request)

console.log(connection_otp_response.connection.link_url)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var connectionOtpResponse = await bankFeedsClient.Connections.GetAsync(new() {
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id,
});

Console.WriteLine(connectionOtpResponse.Connection.LinkUrl)
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
connectionOtpResponse, err := bankFeedsClient.Connections.Get(ctx, operations.GetConnectionRequest{
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})

fmt.Println(connectionOtpResponse.Connection.LinkUrl)
```

</TabItem>

</Tabs>

</details>

:::

### Désautoriser une connexion

Si votre client souhaite révoquer son approbation et rompre la connexion à son logiciel de comptabilité, utilisez le point de terminaison [Unlink connection](/bank-feeds-api#/operations/unlink-connection).

Vous pouvez [en savoir plus](/auth-flow/optimize/connection-management) sur les meilleures pratiques de gestion des connexions et voir comment vous pouvez fournir cette fonctionnalité dans l'interface utilisateur de votre application.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const unlinkResponse = bankFeedsClient.connections.unlink({
  requestBody: {
    status: DataConnectionStatus.Unlinked,
  },
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
unlink_request = operations.UnlinkConnectionRequest(
    request_body=operations.UnlinkConnectionUpdateConnection(
      status=shared.DataConnectionStatus.UNLINKED
    ),
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

unlink_response = bank_feeds_client.connections.unlink(req)

```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var unlinkResponse = await bankFeedsClient.Connections.UnlinkAsync(new() {
    RequestBody = new UnlinkConnectionUpdateConnection() {
      Status = DataConnectionStatus.Unlinked
    },
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
unlinkResponse, err := bankFeedsClient.Connections.Unlink(ctx, operations.UnlinkConnectionRequest{
    RequestBody: &operations.UnlinkConnectionUpdateConnection{
      Status: shared.DataConnectionStatusUnlinked
    },
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})
```

</TabItem>

</Tabs>

## Créer un compte source

Enfin, créez un compte source en utilisant notre point de terminaison [Create source account](/bank-feeds-api#/operations/create-source-account). Il représente le compte financier réel, le compte d'épargne ou la carte de crédit de l'entreprise dans Codat. Nous catégorisons les comptes en type de compte crédit ou débit à des fins de standardisation.

Si vous avez besoin de plusieurs comptes bancaires sources, utilisez simplement le même point de terminaison pour créer des comptes supplémentaires pour la connexion comptable existante.

À titre d'exemple, créons un compte de débit. Si le compte source passe la validation, vous recevrez une **réponse synchrone** avec un code de statut `200` indiquant une opération réussie.

:::note Exigences spécifiques au Royaume-Uni

Pour les comptes bancaires en GBP, `sortCode` est également un champ requis.

:::

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountResponse = bankFeedsClient.sourceAccounts.create({
  sourceAccount: {
    id: "ac-001",
    accountName: "Checking Account",
    accountType: "checking",
    accountNumber: "01120912",
    currency: "USD",
    balance: 4002,
  },
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
source_account_request = operations.CreateSourceAccountRequest(
    id="ac-001",
    accountName="Checking Account",
    accountType=AccountType.CHECKING,
    accountNumber="01120912",
    currency="USD",
    balance=4002
  ),
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

source_account_response = bank_feeds_client.source_accounts.create(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var sourceAccountResponse = await bankFeedsClient.SourceAccounts.CreateAsync(new() {
    SourceAccount = new SourceAccount() {
      Id = "ac-001",
      AccountName = "Checking Account",
      AccountType = AccountType.Checking,
      AccountNumber = "01120912",
      Currency = "USD",
      Balance = 4002
    },
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});

```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
sourceAccountResponse, err := bankFeedsClient.SourceAccounts.Create(ctx, operations.CreateSourceAccountRequest{
    SourceAccount: &shared.SourceAccount{
      ID: bankfeeds.String("ac-001"),
      AccountName: bankfeeds.String("Checking Account"),
      AccountType: shared.AccountTypeChecking,
      AccountNumber: bankfeeds.String("01120912"),
      Currency: bankfeeds.String("USD"),
      Balance: 4002
    },
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```

</TabItem>

<TabItem value="java" label="Java">

```java
CreateSourceAccountRequest req = CreateSourceAccountRequest.builder()
    .requestBody(CreateSourceAccountRequestBody.of(SourceAccountV2.builder()
        .id("ac-001")
        .accountName("Checking Account")
        .accountType(AccountType.LOAN)
        .accountNumber("01120912")
        .currency("USD")
        .balance(new BigDecimal("4002"))
        .build()))
    .companyId(companyId)
    .connectionId(connectionId)
    .build();

CreateSourceAccountResponse res = bankFeedsClient.sourceAccounts().create()
    .request(req)
    .call();
```

</TabItem>

</Tabs>

Une fois le compte source créé avec succès, guidez votre client à travers le **processus de mappage** pour l'associer à un compte cible correspondant dans son logiciel de comptabilité. Le compte restera dans un statut `pending` jusqu'à ce que cela se produise, et il doit passer à `linked` avant que vous puissiez transmettre avec succès des transactions bancaires.

### Comptes multi-devises

Vous pouvez créer plusieurs comptes dans différentes devises en utilisant le même point de terminaison [Create source account](/bank-feeds-api#/operations/create-source-account) pour l'entreprise et la connexion. Si l'utilisateur n'a pas activé les multi-devises dans son logiciel de comptabilité, vous recevrez un message d'erreur que vous pouvez afficher à l'utilisateur.

### Mettre à jour un compte source

Vous devrez peut-être modifier un compte source avant que le mappage ne soit finalisé. Par exemple, votre client pourrait vouloir qu'un nom de compte bancaire apparaisse dans son logiciel de comptabilité. Pour ce faire, utilisez le point de terminaison [Update source account](/bank-feeds-api#/operations/update-source-account).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountUpdateResponse = bankFeedsClient.sourceAccounts.update({
  sourceAccount: {
    id: "ac-001",
    accountName: "Bank of Dave Checking Account",
    accountType: "checking",
    accountNumber: "01120912",
    currency: "USD",
    balance: 4002,
  },
  accountId: sourceAccountResponse.sourceAccount.id,
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python

source_account_update_request = operations.UpdateSourceAccountRequest(
  source_account=shared.SourceAccount(
    id="ac-001",
    accountName="Bank of Dave Checking Account",
    accountType=AccountType.CHECKING,
    accountNumber="01120912",
    currency="USD",
    balance=4002
  ),
  account_id=source_account_response.source_account.id,
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

res = bank_feeds_client.source_accounts.update(source_account_update_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var sourceAccountUpdateResponse = await sdk.SourceAccounts.UpdateAsync(new() {
    SourceAccount = new SourceAccount() {
        Id = "ac-001",
        AccountName = "Checking Account",
        AccountType = AccountType.Checking,
        AccountNumber = "01120912",
        Currency = "USD",
        Balance = 4002
    },
    AccountId = sourceAccountResponse.SourceAccount.Id,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := bankFeedsClient.SourceAccounts.Update(ctx, operations.UpdateSourceAccountRequest{
    SourceAccount: &shared.SourceAccount{
        ID: bankfeeds.String("ac-001"),
        AccountName: bankfeeds.String("Checking Account"),
        AccountType: shared.AccountTypeChecking,
        AccountNumber: bankfeeds.String("01120912"),
        Currency: bankfeeds.String("USD"),
        Balance: 4002
    },
    AccountID: sourceAccountResponse.SourceAccount.ID,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```

</TabItem>

</Tabs>

### Supprimer un compte source

Si votre client décide de fermer son compte, vous pouvez également le supprimer de Codat en utilisant le point de terminaison [Delete source account](/bank-feeds-api#/operations/delete-source-account). Cela ne supprimera pas le compte du logiciel de comptabilité de votre client, mais cela désactivera le flux bancaire, empêchant toute nouvelle transaction d'apparaître.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const sourceAccountDeleteResponse = bankFeedsClient.sourceAccounts.delete({
  accountId: sourceAccountResponse.sourceAccount.id,
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
source_account_delete_request = operations.DeleteSourceAccountRequest(
  account_id=source_account_response.source_account.id,
  company_id=company_response.company.id,
  connection_id=connection_response.connection.id
)

res = bank_feeds_client.source_accounts.delete(source_account_delete_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var res = await bankFeedsClient.SourceAccounts.DeleteAsync(new() {
    AccountId = sourceAccountResponse.SourceAccount.Id,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := bankFeedsClient.SourceAccounts.Delete(ctx, operations.DeleteSourceAccountRequest{
    AccountID: sourceAccountResponse.SourceAccount.ID,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```

</TabItem>

</Tabs>

:::tip Récapitulatif

Vous avez créé la structure des objets clés requis par la solution Bank Feeds de Codat : une entreprise, sa connexion à une source de données comptables et un compte source.

Ensuite, fournissez à votre client une interface de processus de **mappage** afin qu'il puisse associer le compte source à un compte cible dans son logiciel de comptabilité.
:::

---

## Lire ensuite

- Permettez à votre client de mapper des comptes vers son logiciel de comptabilité via une [interface utilisateur de mappage](/bank-feeds/mapping/overview).
