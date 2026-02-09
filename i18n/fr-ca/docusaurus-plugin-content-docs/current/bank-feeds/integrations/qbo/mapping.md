---
title: "Mapper les comptes dans QuickBooks Online"
description: "Écrire les données de transactions bancaires dans le logiciel de comptabilité de vos clients avec un flux automatisé"
sidebar_label: Mapper les comptes
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Loom from "@components/Loom";

Pour les Bank Feeds dans QuickBooks Online, le mappage des comptes est effectué dans la plateforme QuickBooks elle-même. Codat produit un nom d'utilisateur et un mot de passe sécurisés pour une connexion de données qui peuvent être saisis dans QuickBooks, facilitant ainsi le processus de vérification des comptes et des transactions.

Il existe deux façons de partager les identifiants avec une entreprise - soit via une page d'identifiants Codat hébergée et personnalisable, soit alternativement via le point de terminaison [Generate credentials](/bank-feeds-api#/operations/generate-credentials).

## Utiliser la page d'identifiants Codat

L'interface utilisateur fournie par Codat est conçue pour vous permettre de lancer rapidement les flux bancaires QuickBooks avec un minimum de frais généraux et permettre à l'entreprise de récupérer des identifiants pour leurs flux bancaires de manière sécurisée.

Pour utiliser l'interface utilisateur de mappage, dirigez les utilisateurs de votre entreprise vers l'`linkUrl` fournie dans la réponse de [create-data-connection](/bank-feeds/setup#creating-a-data-connection). Le linkUrl contient un mot de passe à usage unique (OTP) qui expirera après 60 minutes. Si le mot de passe expire, vous pouvez récupérer à nouveau l'`linkUrl` (avec un nouvel OTP) en utilisant le point de terminaison [`get-connection`](/bank-feeds-api#/operations/get-connection).

Sur la page Configurer QuickBooks, ils cliquent sur Obtenir les identifiants pour générer leur nom d'utilisateur et mot de passe uniques à usage unique pour connecter un compte à QBO.

![Image](/img/bank-feeds/qbo-bank-feeds/400590b-qbo-bank-feeds_smb-customer-steps-revised.png "La page Configurer QuickBooks qui permet à votre utilisateur PME d'obtenir ses identifiants.")

Une fois les identifiants générés, l'utilisateur peut simplement suivre les instructions affichées dans l'interface utilisateur. Celles-ci sont résumées dans [Mapper les comptes dans QuickBooks](/bank-feeds/integrations/qbo/mapping#map-accounts-in-quickbooks)

Le bouton Révoquer les identifiants apparaît immédiatement après la génération de leurs identifiants.

## Utiliser l'API Generate Credentials

Si vous souhaitez une expérience utilisateur plus intégrée, vous avez la possibilité de générer et d'afficher les identifiants directement dans votre propre application via l'API.
Pour ce faire, appelez le point de terminaison [Generate credentials](/bank-feeds-api#/operations/generate-credentials).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const credentialsResponse = bankFeedClient.sourceAccounts.generateCredentials({
  requestBody: {},
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});

const credentials = credentialsResponse.bankAccountCredentials;
console.log(credentials.username, credentials.password);
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = operations.GenerateCredentialsRequest(
    request_body='',
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

credentials_response = bank_feed_client.source_accounts.generate_credentials(req)

credentials = credentials_response.bankAccountCredentials
print(credentials.username, credentials.password)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var credentialsResponse = await bankFeedClient.SourceAccounts.GenerateCredentialsAsync(new() {
    RequestBody = null,
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});

var credentials = credentialsResponse.bankAccountCredentials;
Console.WriteLine($"{credentials.Username} {credentials.Password}")
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
credentialsResponse, err := s.SourceAccounts.GenerateCredentials(ctx, operations.GenerateCredentialsRequest{
    RequestBody: nil,
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID,
})

fmt.Println("%s %s", credentialsResponse.Username, credentialsResponse.Password)
```

</TabItem>

</Tabs>

## Révoquer les identifiants

Les identifiants d'une entreprise peuvent être révoqués à tout moment en utilisant le point de terminaison [Delete credentials](/bank-feeds-api#/operations/delete-bank-feed-credentials).

Cela supprimera **tous** les identifiants associés à l'entreprise. Si vous souhaitez reconnecter l'entreprise et rétablir le flux bancaire, vous devez générer de nouveaux identifiants via la page Identifiants ou l'API.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const res = bankFeedsClient.sourceAccounts.deleteCredentials({
  companyId: companyResponse.company.id,
  connectionId: connectionResponse.connection.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = operations.DeleteBankFeedCredentialsRequest(
    company_id=company_response.company.id,
    connection_id=connection_response.connection.id,
)

res = bank_feed_client.source_accounts.delete_credentials(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var res = await sdk.SourceAccounts.DeleteCredentialsAsync(new() {
    CompanyId = companyResponse.Company.Id,
    ConnectionId = connectionResponse.Connection.Id
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := s.SourceAccounts.DeleteCredentials(ctx, operations.DeleteBankFeedCredentialsRequest{
    CompanyID: companyResponse.Company.ID,
    ConnectionID: connectionResponse.Connection.ID
})
```

</TabItem>

</Tabs>

## Mapper les comptes dans QuickBooks

<Loom source="https://www.loom.com/embed/50fbe91987924c38a6de91c3582069ab" />

<br />

L'utilisateur PME se connecte d'abord à QuickBooks Online et accède à la section Banking s'il est en mode Comptabilité ou à Tenue de livres > Transactions bancaires s'il est en mode Entreprise.

Ensuite, ils cliquent sur le bouton Lier un compte et, sur l'écran Connecter un compte qui s'affiche, trouvent et choisissent votre organisation dans la liste des institutions financières disponibles.

Après avoir accepté les conditions générales, ils saisissent un nom d'utilisateur et un mot de passe à usage unique pour terminer le processus d'authentification. Ils sélectionnent ensuite un ou plusieurs comptes bancaires sources à lier à QBO et choisissent le type de compte dans un menu déroulant, en spécifiant quel plan comptable ils souhaitent consulter pour les flux bancaires.

De plus, ils sélectionnent une date de début pour le flux bancaire.

:::info Transactions historiques

QuickBooks online ne prend en charge que la récupération des transactions **jusqu'à 90 jours**, toutes les transactions antérieures à cette date seront exclues quelle que soit la date sélectionnée par l'utilisateur.
:::

---

## Lire ensuite

[Écrire des transactions](/bank-feeds/pushing-transactions).
