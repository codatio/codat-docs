---
title: "Démarrer avec Lending"
sidebar_label: Démarrer
description: "Apprenez à effectuer la configuration initiale de la solution Lending"
image: "/fr-ca/img/banners/social/lending.png"
---

import { IntegrationsList } from "@components/Integrations";
import {
  accountingIntegrations,
  bankingIntegrations,
  commerceIntegrations,
} from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

:::tip Votre parcours de prêt

Notre solution Lending prend en charge l'étape de collecte de données de votre parcours de prêt, qui commence dans votre propre application web. Activez Lending et configurez-le, puis intégrez notre [SDK Link](/auth-flow/authorize-embedded-link) dans votre application pour gérer le flux d'autorisation. Déterminez où les données collectées seront stockées et gérez les étapes suivantes du processus de prêt dans votre application.

:::

## Activer Lending

1. Ouvrez le <a href="https://app.codat.io" target="_blank">Portal Codat</a> et connectez-vous.
2. Cliquez sur **Settings > Organizational settings > Products**.
3. Dans la liste des produits, trouvez _Lending_ et cliquez sur **Enable**. Ensuite, suivez l'invite à l'écran.

## Configurer Lending

### Sources de données

Dans le <a href="https://app.codat.io" target="_blank">Portal Codat</a>, naviguez vers **Settings > Integrations** pour activer et configurer les intégrations qui serviront de source de données pour la solution. Suivez les guides respectifs pour les instructions spécifiques à chaque intégration.

La couverture des sources de données varie selon la fonctionnalité, alors assurez-vous de vérifier la couverture pour les fonctionnalités que vous souhaitez utiliser.

#### Comptabilité

<IntegrationsList integrations={accountingIntegrations} />

#### Bancaire

<IntegrationsList integrations={bankingIntegrations} />

#### Commerce

<IntegrationsList integrations={commerceIntegrations} />

### Flux d'autorisation

Dans le cadre de l'utilisation de Lending, vous aurez besoin que vos clients autorisent votre accès à leurs données. Pour ce faire, utilisez [Link](/auth-flow/overview) - notre flux d'autorisation préconçu, optimisé pour la conversion et en marque blanche.

Nous vous recommandons d'intégrer complètement ce flux d'autorisation dans votre expérience en utilisant notre [SDK Link](/auth-flow/authorize-embedded-link) dans votre code front-end. Vous pouvez également choisir notre option de flux d'autorisation [Hosted Link](/auth-flow/authorize-hosted-link) prête à l'emploi pour démarrer aussi rapidement que possible.

La solution vous permet d'adapter le parcours d'autorisation à vos besoins commerciaux. Vous pouvez :

- [Personnaliser les paramètres de Link](/auth-flow/customize/customize-link)
- [Configurer l'image de marque de l'entreprise](/auth-flow/customize/branding)
- [Configurer les redirections](/auth-flow/customize/set-up-redirects)

### Types de données

Définissez l'ensemble minimum de [types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) requis pour Lending à `fetch on first link`. Chaque fonctionnalité peut également avoir des exigences supplémentaires en matière de types de données, alors assurez-vous de les vérifier pour la fonctionnalité que vous souhaitez utiliser.

Dans le <a href="https://app.codat.io" target="_blank">Portal Codat</a>, naviguez vers **Settings > Integrations > Data types**. Au minimum, vous avez besoin des types de données suivants activés :

| Source de données | Comptabilité                                                                                                     | Bancaire                                                                                                        | Commerce                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Types de données  | `company`<br/>`chartOfAccounts`<br/>`balanceSheet`<br/>`profitAndLoss`<br/>`bankAccounts`<br/>`bankTransactions` | `banking-accounts`<br/>`banking-transactions`<br/>`banking-transactionCategories`<br/>`banking-accountBalances` | `commerce-companyInfo`<br/>`commerce-customers`<br/>`commerce-orders` |

Configurez la solution pour actualiser les données quand vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency) sur le même écran. Nous recommandons de la configurer sur une synchronisation quotidienne ou mensuelle.

### Webhooks

Codat prend en charge une gamme de [types d'événements](/using-the-api/webhooks/event-types) que vous pouvez écouter et qui vous aident à gérer vos pipelines de données. Beaucoup de ces événements envoient un message pour chaque `dataType` séparément.

Dans le <a href="https://app.codat.io" target="_blank">Portal Codat</a>, naviguez vers **Settings > Webhooks > Create consumer** et cliquez sur **Add endpoint** pour ajouter un nouveau [point de terminaison de consommateur de webhook](/using-the-api/webhooks/overview) et tirer le meilleur parti de Lending :

- [`DataSyncStatusChangedToError`](/using-the-api/webhooks/event-types)

  Cela signifie qu'un problème est survenu lors de la synchronisation du type de données spécifié. Résolvez le problème et [relancez la synchronisation](/using-the-api/queueing-data-syncs#refresh-data) pour ce jeu de données.

- [`Dataset data changed`](/using-the-api/webhooks/event-types)

  Cela signifie que des données ont été mises à jour pour le type de données spécifié. Cela peut inclure des données nouvelles, mises à jour ou supprimées. Vous devriez alors actualiser les données dans votre plateforme.

- [`Account categories updated`](/using-the-api/webhooks/event-types)

  Cela signifie que les catégories associées aux comptes ont été mises à jour pour l'[état des résultats catégorisé](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) et l'[état du bilan catégorisé](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts).

## Utiliser Lending

Avant de pouvoir collecter les données de votre client PME, vous devez créer une [entreprise](../terms/company) Codat et la connecter à une source de données (par exemple, un logiciel de comptabilité). Vous pouvez le faire de deux manières :

- Dans le [Portal Codat](https://app.codat.io) en naviguant vers **Companies > Create company**
- En appelant l'endpoint [Create company](/lending-api#/operations/create-company) de notre API

N'oubliez pas de vous [authentifier](/using-the-api/authentication) si vous effectuez des appels à notre API. Naviguez vers **Developers > API keys** dans le Portal pour obtenir votre en-tête d'autorisation.

Pour établir une connexion à une source de données et synchroniser les données commerciales, votre client doit vous accorder l'accès. Il peut le faire en utilisant notre solution de [flux d'autorisation Link](/auth-flow/overview), que nous vous recommandons d'utiliser dans votre application.

Une fois la connexion établie, Codat récupérera les données pour les types de données que vous avez précédemment configurés pour récupérer à la première liaison. Vous pouvez écouter l'[événement](/using-the-api/webhooks/event-types) `NewCompanySynchronized` pour être notifié une fois que ces synchronisations initiales sont terminées, et qu'au moins l'une d'entre elles est réussie.

<ul className="card-container col-2">
  <li className="card">
    <div className="header">
      <img
        src="/fr-ca/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Souscripteurs</h3>
    </div>
    <p>
      Utilisez nos <a href="/lending/features/excel-download-overview">rapports d'exportation Excel</a> pour auditer les données source et effectuer la souscription en toute confiance.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/fr-ca/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Développeurs</h3>
    </div>
    <p>
      Interagissez avec notre <a href="/lending-api">référence Lending</a> pour comprendre les paramètres de corps requis, les réponses et les erreurs. Utilisez nos <a href="/get-started/libraries">SDK clients</a> pour simplifier votre parcours d'implémentation.
    </p>
  </li>

  </ul>

### Bibliothèques clientes

Utilisez notre [bibliothèque Lending](/get-started/libraries) complète pour démarrer et simplifier votre développement.
Installez simplement la bibliothèque dans l'un des langages pris en charge et passez votre clé API encodée en base64 au constructeur.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

#### Installer

##### NPM

```sh
npm add @codat/lending
```

##### Yarn

```sh
yarn add @codat/lending
```

#### Initialiser

```javascript
import { CodatLending } from "@codat/lending";

const lendingClient = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});
```

</TabItem>

<TabItem value="python" label="Python">

#### Installer

```sh
pip install codat-lending
```

#### Initialiser

```python
from codat_lending import CodatLending
from codat_lending.models import shared

lending_client = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)
```

</TabItem>

<TabItem value="csharp" label="C#">

#### Installer

```sh
dotnet add package Codat.Lending
```

#### Initialiser

```csharp
using Codat.Lending;
using Codat.Lending.Models.Shared;

var lendingClient = new CodatLending(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);
```

</TabItem>

<TabItem value="go" label="Go">

#### Installer

```sh
go get github.com/codatio/client-sdk-go/lending
```

#### Initialiser

```go
import (
	"context"
	lending "github.com/codatio/client-sdk-go/lending/v4"
	"github.com/codatio/client-sdk-go/lending/v4/pkg/models/operations"
	"github.com/codatio/client-sdk-go/lending/v4/pkg/models/shared"
	"log"
)

func main() {
	lendingClient := lending.New(
		lending.WithSecurity(shared.Security{
			AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
		}),
	)
}
```

</TabItem>

</Tabs>

<ReadNext
  links={[
    ["Bank statements", "/lending/features/bank-statements-overview"],
    ["Sales", "/lending/features/sales-overview"],
    ["Financial statements", "/lending/features/financial-statements-overview"],
    ["Liabilities", "/lending/features/liabilities-overview"],
    ["Accounts receivable", "/lending/features/accounts-receivable-overview"],
    ["Accounts payable", "/lending/features/accounts-payable-overview"],
  ]}
>
  <p>Explorez les fonctionnalités qui composent notre solution Lending :</p>
</ReadNext>
