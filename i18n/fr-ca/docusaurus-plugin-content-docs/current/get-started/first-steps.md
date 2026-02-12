---
title: "Premiers pas avec Codat"
sidebar_label: Premiers pas
description: "Une introduction pratique au portail et à l'API de Codat"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::note Prérequis

Vous avez besoin d'un compte et d'une clé API pour suivre ce guide. [Contactez-nous](https://www.codat.io/#get-in-touch) pour discuter de la création d'un compte aujourd'hui.

:::

## Dans ce guide...

Avec Codat, vous pouvez plus facilement créer des produits financiers intégrés pour les PME.

Configurez vos clients en les ajoutant en tant qu'[entreprises](../terms/company) dans Codat. Ensuite, établissez des connexions autorisées aux logiciels comptables, bancaires ou commerciaux des clients en utilisant l'une de nos intégrations.

Enfin, examinez et analysez les données pertinentes pour votre cas d'utilisation, que Codat lit à partir des sources de données de vos clients PME.

Ce guide s'adresse aussi bien aux développeurs qu'aux non-développeurs. En trois étapes faciles, vous créerez une entreprise, la relierez au sandbox de Codat et examinerez ses données financières pour vous familiariser avec la solution Codat.

:::info Vous voulez voir les données encore plus rapidement ? 🚀

Votre compte gratuit est équipé d'un exemple d'entreprise. Accédez à **Entreprises** dans le <a href="https://app.codat.io/companies?userflow=41dae845-29a6-4dd9-b886-4cb6c3464b1d" target="_blank">portail Codat</a> et cliquez sur l'entreprise de démonstration pour examiner les données pertinentes pour votre cas d'utilisation.

:::

Vous pouvez effectuer chaque étape dans le portail Codat ou en utilisant notre API.

<img
  src="https://raw.githubusercontent.com/codatio/codat-diagrams/03bed5cd40b599365aa7d4e2faa74379fcf5da8d/codat-concepts-quickstart.svg?token=A2XEKEOBLPXDEIA43SRARIDDQUARC"
  alt="Un diagramme montrant les relations entre les concepts clés de Codat"
/>

## Prérequis développeur

Si vous êtes développeur et souhaitez travailler avec Codat en utilisant notre <a className="external" href="/platform-api#/">référence API</a> ou en effectuant des appels à notre API dans le code, vous devez d'abord vous authentifier.

<details>
  <summary><b>S'authentifier avec l'API de Codat</b></summary>

:::caution Visualisation des en-têtes d'authentification
Les en-têtes d'autorisation ne peuvent être visualisés et copiés que par les utilisateurs ayant les <a href="/configure/user-management/user-roles" target="_blank">rôles</a> Administrateur ou Développeur.
:::

Codat utilise des clés API, encodées en Base64 dans un en-tête d'autorisation, pour contrôler l'accès à l'API. Pour copier votre en-tête d'autorisation, accédez à **Développeurs > Clés API** dans le <a href="https://app.codat.io/developers/api-keys" target="_blank">portail Codat</a>.

Ensuite, remplacez `{basicAuthHeader}` dans les extraits de code ci-dessous.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">

##### Installation

```bash
  dotnet add package Codat.Platform
```

##### Authentification

```c
  using CodatPlatform;
  using CodatPlatform.Models.Shared;

  var codatPlatform = new CodatPlatformSDK(
      security: new Security() {
          AuthHeader = "{basicAuthHeader}",
      }
  );
```

  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

##### Installation

```bash
  npm add @codat/platform
```

ou

```bash
  yarn add @codat/platform
```

##### Authentification

```javascript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "{basicAuthHeader}",
});
```

  </TabItem>

  <TabItem value="python" label="Python">

##### Installation

```bash
  pip install codat-platform
```

##### Authentification

```python
from codat_platform import CodatPlatform
from codat_platform.models import shared

codat_platform = CodatPlatform(
    security=shared.Security(
        auth_header='{basicAuthHeader}',
    ),
)
```

  </TabItem>

  <TabItem value="go" label="Go">

##### Installation

```bash
  go get github.com/codatio/client-sdk-go/platform
```

##### Authentification

```go
  import(
    "context"
    "log"
    "github.com/codatio/client-sdk-go/platform"
  )

  codatPlatform := codatplatform.New(
      codatplatform.WithSecurity(shared.Security{
          AuthHeader: "{basicAuthHeader}",
      }),
  )
```

  </TabItem>
</Tabs>

Vous pouvez en savoir plus sur l'<a href="/using-the-api/authentication" target="_blank">authentification chez Codat</a>, ou procéder à la création de votre première entreprise.

</details>

## 1. Créer une entreprise

Configurez votre client PME en l'ajoutant en tant qu'entreprise. Dans le <a href="https://app.codat.io/companies" target="_blank">portail Codat</a>, accédez à **Entreprises > Nouvelle entreprise**. La boîte de dialogue « Ajouter une nouvelle entreprise » apparaît.

Entrez le nom que vous souhaitez donner à l'entité qui représente votre client PME et cliquez sur **Ajouter**. Un message de succès s'affiche, fournissant une URL de connexion. Normalement, vous partageriez cette URL avec votre client afin qu'il puisse autoriser une connexion avec Codat.

Copiez cette URL pour l'utiliser à l'étape suivante. Notez que cette URL peut être consultée à nouveau à tout moment dans le futur.

<img
  src="/fr-ca/img/old/5ab4ca8-2022-11-21_16-26-23.png"
  alt="Modal de succès de création de nouvelle entreprise avec le nom de l'entreprise et l'URL Link affichés"
/>

<details>
  <summary><b>Créer une entreprise en utilisant l'API de Codat</b></summary>

Pour créer une entreprise dans Codat, utilisez l'endpoint `POST /companies` avec un corps de requête contenant le `name` de l'entreprise. Il n'a pas besoin d'être unique et sert à identifier votre client dans Codat.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">

```c
using CodatPlatform.Models.Shared;

var res = await codatPlatform.Companies.CreateAsync(new CompanyRequestBody() {
    Description = "Requested early access to the new financing scheme.",
    Name = "Bank of Dave",
});

if(res.Company != null) {
  logger.LogInformation('{CompanyId} {CompanyName}', res.Company.Id, res.Company.Name)
}
```

  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

```javascript
codatPlatform.companies
  .create({
    description: "Requested early access to the new financing scheme.",
    name: "Bank of Dave",
  })
  .then((res) => {
    // gérer la réponse
  });
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
  req = shared.CompanyRequestBody(
    description='Requested early access to the new financing scheme.',
    name='Bank of Dave',
  )

  res = codat_platform.companies.create(req)

  if res.company is not None:
    print(res.company.id, res.company.name)
```

  </TabItem>

  <TabItem value="go" label="Go">

```go
import(
  "github.com/codatio/client-sdk-go/platform/pkg/models/shared"
  "fmt"
)

ctx := context.Background()

res, err := codatPlatform.Companies.Create(ctx, shared.CompanyRequestBody{
  Description: codatplatform.String("Requested early access to the new financing scheme."),
  Name: "Bank of Dave",
})

if err != nil {
  log.Fatal(err)
}

if res.Company != nil {
    fmt.Println("%s %s", res.Company.Id, res.Company.Name)
}
```

  </TabItem>

  <TabItem value="curl" label="cURL">

```bash
  curl --request POST \
      --url "https://api.codat.io/companies" \
      --header "Authorization: $CODAT_AUTH_HEADER" \
      --header "accept: application/json" \
      --header "content-type: application/json" \
      --data '{
              "name": "SMB company name",
              "description": "Any additional information about the company"
      }
```

  </TabItem>
</Tabs>

L'endpoint renvoie une réponse JSON, confirmant l'`id` unique de l'entreprise et une URL `redirect` utilisée pour établir une connexion avec une source de données.

Conservez l'`id` et l'URL `redirect` pour les utiliser dans les étapes suivantes.

Vous pouvez également utiliser l'endpoint <a href="/platform-api#/operations/create-company" target="_blank"><i>Créer une entreprise</i></a> dans notre référence API pour essayer cela.

</details>

## 2. Créer une connexion de données sandbox

Ensuite, connectez votre entreprise à notre Sandbox pour utiliser des données comptables, commerciales et bancaires fictives. Cela vous donne accès à de nombreux types de données et opérations pris en charge par Codat.

Si vous avez conservé l'URL de connexion de l'étape précédente, ouvrez-la simplement dans un nouvel onglet de navigateur.

Si vous devez visualiser l'URL à nouveau, accédez à **Entreprises** dans le <a href="https://app.codat.io/companies" target="_blank">portail Codat</a>. Ensuite, trouvez l'entreprise que vous avez créée pour le client et cliquez sur **Demander des données** à côté du nom de l'entreprise. Copiez l'URL Link et ouvrez-la dans le nouvel onglet.

Cela ouvre le flux d'autorisation de Codat construit à l'aide de notre <a href="/auth-flow/overview" target="_blank">fonctionnalité</a> Link.

<img
  src="/fr-ca/img/old/cdeee57-2022-11-21_20-09-48.png"
  alt="URL Link dans le modal Demander des données"
/>

Suivez le flux et sélectionnez **Codat Sandbox** comme source de vos données comptables, commerciales et bancaires. Vous n'avez pas besoin de saisir d'identifiants. Ignorez l'étape de téléchargement des documents commerciaux.

Lorsque toutes les connexions Sandbox sont terminées, vous verrez un message de confirmation. Vous pouvez maintenant fermer l'onglet. Pendant ce temps, Codat lit les données Sandbox via la connexion établie.

<img
  src="/fr-ca/img/old/e802c95-2022-11-21_20-15-14.png"
  alt="Étape du flux Link se connectant au Sandbox Codat pour les données comptables. L'intégration Sandbox est sélectionnée"
/>

<details>
  <summary><b>Lier au Sandbox en utilisant l'API de Codat</b></summary>

Récupérez l'URL `redirect` renvoyée dans le corps de réponse de l'étape de création d'entreprise et ouvrez-la dans une nouvelle fenêtre de navigateur.

Suivez le flux pour vous connecter au Sandbox Codat comme source de vos données comptables, commerciales et bancaires. Vous n'avez pas besoin de saisir d'identifiants.

Une fois le flux terminé, vous pouvez vérifier le statut de l'entreprise sous l'endpoint <a href="/platform-api#/operations/get-companies-companyId" target="_blank"><i>Voir une seule entreprise</i></a>.

N'oubliez pas de remplacer `{companyId}` par l'`id` de votre entreprise obtenu précédemment.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">

```c
using CodatPlatform.Models.Shared;
using CodatPlatform.Models.Operations;
using System.Net;

var res = await sdk.Companies.GetAsync(new GetCompanyRequest() {
  CompanyId = "{companyId}",
});

if res.statusCode == (int)HttpStatusCode.OK {
  logger.LogInformation("{Redirect}", res.Company.Redirect)
}
```

  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

```javascript
codatPlatform.companies
  .get({
    companyId: "{companyId}",
  })
  .then((res) => {
    // gérer la réponse
  });
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
  req = operations.GetCompanyRequest(
    company_id='{companyId}',
  )

  res = codat_platform.companies.get(req)

  if res.company is not None:
    print(res.company.redirect)
```

  </TabItem>

  <TabItem value="go" label="Go">

```go
import(
  "github.com/codatio/client-sdk-go/common/pkg/models/shared"
  "fmt"
)

ctx := context.Background()

res, err := s.Companies.Get(ctx, operations.GetCompanyRequest{
      CompanyID: "{companyId}",
  })

if err != nil {
  log.Fatal(err)
}

if res.Company != nil {
    fmt.Println("%s",res.Company.Redirect)
}
```

  </TabItem>

  <TabItem value="curl" label="cURL">

```bash
  curl --request GET \
      --url "https://api.codat.io/companies/{companyId}" \
      --header "Authorization: $CODAT_AUTH_HEADER" \
      --header "accept: application/json"
```

  </TabItem>
</Tabs>

Dans la réponse JSON, vous pouvez voir que le `status` des connexions de données est passé à **linked**.

Lors de la première connexion, Codat lit les données de la source de données immédiatement. Vous pouvez également utiliser l'endpoint <a href="/platform-api#/operations/get-companies-companyId-dataStatus" target="_blank"><i>Obtenir le statut des données de l'entreprise</i></a> pour confirmer que la synchronisation a réussi.

</details>

Vous êtes maintenant prêt à examiner les données financières de l'entreprise et à visualiser les ensembles de données pertinents pour votre cas d'utilisation.

## 3. Examiner les données de l'entreprise pour votre cas d'utilisation

Retournez à la page **Entreprises** dans le <a href="https://app.codat.io/companies" target="_blank">portail Codat</a>. Vous verrez votre entreprise nouvellement créée, ainsi que les connexions aux Sandboxes comptables, commerciaux et bancaires qui ont été connectés à l'étape précédente.

<img
  src="/fr-ca/img/old/671c3bb-2022-11-22_16-04-26.png"
  alt="L'exemple d'entreprise créée est visible dans la liste des entreprises avec ses connexions au sandbox"
/>

Maintenant, cliquez sur le nom de l'entreprise et utilisez le menu latéral pour accéder à **Produits**. Vous pouvez examiner les données lues par les API comptables, bancaires et commerciales de Codat. Basculez entre les types de données à l'aide de la liste déroulante sur la droite, et visualisez et exportez les données selon les besoins de votre cas d'utilisation.

Ici, nous examinons les données de factures du client PME lues depuis le Sandbox comptable. Ces données aident aux prévisions commerciales et à la gestion des flux de trésorerie basées sur les changements de ventes au fil du temps, les délais de paiement moyens et les montants liés aux factures.

<img
  src="/fr-ca/img/old/32f7dff-2022-11-22_16-22-17.png"
  alt="Vue du type de données Factures de l'API comptable de Codat"
/>

Les développeurs peuvent également utiliser le portail pour examiner comment Codat a interrogé un type de données spécifique et les résultats qu'il a reçus au bas de chaque page de type de données.

<img
  src="/fr-ca/img/old/bf495eb-2022-11-22_16-28-50.png"
  alt="Vue du type de données Factures de l'API comptable de Codat"
/>

<details>
  <summary><b>Accéder aux données de l'entreprise en utilisant l'API de Codat</b></summary>

Codat fournit divers endpoints pour vous permettre d'interroger facilement chacun des types de données pris en charge.

Par exemple, pour interroger les factures, utilisez l'endpoint <a href="/lending-api#/operations/list-invoices" target="_blank"><i>Toutes les factures</i></a>. Vous pouvez effectuer un filtrage sur les données de réponse en utilisant des requêtes. Dans ce guide, nous utilisons les paramètres `page` et `pageSize` pour lire dix factures pour l'entreprise que nous avons créée précédemment.

N'oubliez pas de remplacer `{companyId}` par l'`id` de votre entreprise obtenu précédemment.

<Tabs groupId="language">
  <TabItem value="csharp" label="C#">

##### Installation

```bash
  dotnet add package Codat.Lending
```

##### Utilisation

```c
using CodatLending;
using CodatLending.Models.Shared;
using CodatLending.Models.Operations;

var codatLending = new CodatLendingSDK(
  security: new Security() {
        AuthHeader = "{basicAuthHeader}",
    }
);

var res = await codatLending.AccountsReceivable.Invoices.ListAsync(new ListAccountingInvoicesRequest() {
    CompanyId = "8a210b68-6988-11ed-a1eb-0242ac120002",
});

if(res.StatusCode == (int)HttpStatusCode.OK){
  logger.LogInformation(res.invoices.results[0].Id)
}
```

  </TabItem>

  <TabItem value="nodejs" label="TypeScript">

##### Installation

```bash
  npm add @codat/lending
```

ou

```bash
  yarn add @codat/lending
```

##### Utilisation

```javascript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "{basicAuthHeader}",
});

codatLending.accountsReceivable.invoices
  .list({
    companyId: "{companyId}",
  })
  .then((res) => {
    // gérer la réponse
  });
```

  </TabItem>

  <TabItem value="python" label="Python">

##### Installation

```bash
  pip install codat-lending
```

##### Utilisation

```python
from codat_lending import CodatLending
from codat_lending.models import operations, shared

codat_lending = CodatLending(
    security=shared.Security(
        auth_header="{basicAuthHeader}",
    ),
)

res = codat_lending.accounts_receivable.invoices.list(request={
        "company_id": "8a210b68-6988-11ed-a1eb-0242ac120002"
    })

if res:
  # gérer la réponse
  pass
```

  </TabItem>

  <TabItem value="go" label="Go">

##### Installation

```bash
  go get github.com/codatio/client-sdk-go/lending
```

##### Utilisation

```go
package main

import(
  "context"
  "log"
  "github.com/codatio/client-sdk-go/lending"
  "github.com/codatio/client-sdk-go/lending/pkg/models/operations"
  "fmt"
)

func main() {
    codatLending := codatlending.New(
        codatlending.WithSecurity(shared.Security{
            AuthHeader: "{basicAuthHeader}",
        }),
    )

    ctx := context.Background()
    res, err := codatLending.AccountsReceivable.Invoices.List(ctx, operations.ListInvoicesRequest{
        CompanyID: "{companyId}"
    })

    if err != nil {
        log.Fatal(err)
    }

    if res.Invoices != nil {
      fmt.Println("%s ",res.AccountingInvoices.Results[0].id)
    }
}
```

  </TabItem>

  <TabItem value="curl" label="cURL">

```bash
  curl --request GET \
      --url "https://api.codat.io/companies/{companyId}/data/invoices?page=1&pageSize=10" \
      --header "Authorization: {basicAuthHeader}" \
      --header "accept: application/json"
```

  </TabItem>
</Tabs>

Dans la réponse JSON, l'API fournit dix factures détaillées comme résultat.

Vous pouvez également utiliser le portail pour examiner comment Codat a interrogé un type de données spécifique et les résultats qu'il a reçus au bas de chaque page de type de données.

</details>

:::success Récapitulatif
Vous avez maintenant :

- créé une entreprise Codat qui représente votre client de petite entreprise,
- autorisé des connexions sandbox pour lire diverses données financières, et
- examiné les données et leur représentation visuelle, en les reliant à votre cas d'utilisation.

:::

## Étapes suivantes

#### Vous voulez lire et visualiser des données d'une plateforme différente ?

Codat vous permet de vous connecter à plus de 30 logiciels comptables, bancaires et commerciaux différents. Vous pouvez choisir de lire des données depuis une plateforme la plus pertinente pour vous.

Accédez à **Paramètres > Intégrations** dans le portail. Choisissez le type d'intégration, trouvez la plateforme dont vous avez besoin et configurez-la. Une fois que vous avez activé la plateforme, créez une connexion de données vers celle-ci, comme vous l'avez fait avec le Sandbox précédemment. Vous aurez besoin d'identifiants valides pour la plateforme que vous essayez de lier.

Vous pouvez consulter nos instructions détaillées pour la configuration d'intégrations comme [Xero](/integrations/accounting/xero/accounting-xero), [QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline), [PayPal](/integrations/commerce/paypal/commerce-paypal), [Plaid](/integrations/banking/plaid/banking-plaid), et bien d'autres.

#### Vous êtes curieux de savoir quelles autres données Codat peut vous fournir ?

Codat lit une variété de types de données depuis les plateformes sources, ce qui facilite la satisfaction des besoins de votre cas d'utilisation.

Avec nos [intégrations comptables](/accounting-api#/), vous pouvez lire les états financiers, les détails de gains et de dépenses, les écritures de journal, les détails fiscaux et bien plus encore. Nos [intégrations bancaires](/banking-api#/) vous fournissent des transactions bancaires, des comptes et des soldes de comptes. Enfin, nos [intégrations commerciales](/commerce-api#/) peuvent vous montrer les détails des commandes, des clients, des paiements, des produits et autres.

#### Vous souhaitez personnaliser l'apparence du flux d'authentification ?

Les couleurs, logos et icônes du flux d'autorisation de Codat [peuvent être modifiés](/auth-flow/customize/branding) pour une expérience sur mesure. Accédez à **Paramètres > Auth flow > Branding** dans le portail Codat et ajustez pour adapter le flux à la palette de votre marque.

Ensuite, utilisez l'URL Link de l'entreprise que vous avez créée précédemment pour examiner l'expérience de votre client avec le flux. Vous pouvez même aller [encore plus loin](/auth-flow/customize/customize-link) dans la personnalisation et modifier le texte et les comportements d'accompagnement.

#### Vous souhaitez migrer votre intégration existante vers Codat ?

Si vous avez déjà une application OAuth avec l'une de nos intégrations prises en charge, vous pouvez migrer de manière transparente les connexions de vos clients — sans que vos clients aient besoin de se reconnecter.

Vous pouvez choisir une migration de jetons en libre-service ou nous engager pour une migration gérée. [Choisissez l'option](/get-started/migration) qui convient le mieux à votre cas d'utilisation.
