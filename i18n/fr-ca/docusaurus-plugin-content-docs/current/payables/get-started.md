---
title: "Commencer avec la solution Bill Pay"
sidebar_label: Configurer la solution
description: "Voir les étapes clés requises pour effectuer la configuration initiale de la solution Bill Pay"
image: "/img/banners/social/payables.png"
---

import { IntegrationsList } from "@components/Integrations";
import { integrationsFilterBillPayAsync } from "@components/Integrations/integrations";
import { integrationsFilterBillPaySync } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Aperçu du parcours

Le diagramme ci-dessous représente le flux d'activité global lors de l'utilisation de Bill Pay. Vous pouvez gérer les factures, les fournisseurs et les méthodes de paiement de différentes façons et dans un ordre différent.

Nous vous guiderons à travers chacun de ces éléments afin que vous puissiez construire le flux qui vous convient le mieux, à vous et à vos clients.

![Flux du processus des comptes fournisseurs incluant les étapes client](/img/payables/payables-process-flow.png)

Une fois que vous décidez de construire avec Bill Pay, vous devez configurer Codat en conséquence. Passons en revue ces exigences en détail.

## Activer Bill Pay

1. Ouvrez le <a href="https://app.codat.io" target="_blank">portail Codat</a> et connectez-vous.
2. Cliquez sur **Paramètres > Paramètres organisationnels > Produits**.
3. Dans la liste des produits, trouvez _Bill Pay_ et cliquez sur **Activer**. Ensuite, suivez les instructions à l'écran.

## Configurer Bill Pay

### Types de données

Dans le <a href="https://app.codat.io" target="_blank">portail Codat</a>, accédez à **Paramètres > Intégrations > Types de données**. Activez les [types de données](/core-concepts/data-type-settings#override-the-default-sync-settings) requis pour Bill Pay et configurez-les sur `Récupérer à la première liaison` :

| Source de données | Types de données                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Comptabilité      | `bankAccounts`<br/> `bills`<br/> `billPayments`<br/> `chartOfAccounts`<br/> `company`<br/> `paymentMethods`<br/> `suppliers`<br/> |

Configurez la solution pour actualiser les données quand vous en avez besoin en [définissant une fréquence de synchronisation](/core-concepts/data-type-settings#choose-a-synchronization-frequency) sur le même écran. Nous recommandons de la configurer sur une synchronisation quotidienne ou mensuelle.

### Gérer les sources de données

Dans le <a href="https://app.codat.io" target="_blank">portail Codat</a>, accédez à **Paramètres > Intégrations** et cliquez sur **Gérer les intégrations**. Ensuite, cliquez sur **Gérer** à côté de l'intégration spécifique que vous souhaitez activer et configurez-la pour servir de source de données pour la solution.

Vous pouvez également consulter les instructions de configuration détaillées en cliquant sur la tuile correspondante :

<IntegrationsList filter={integrationsFilterBillPaySync} />

### Flux d'autorisation

Dans le cadre de l'utilisation de Bill Pay, vous devrez demander à vos clients d'autoriser votre accès à leurs données. Pour ce faire, utilisez [Link](/auth-flow/authorize-embedded-link) - notre flux d'autorisation préconstruit, intégrable, optimisé pour la conversion et personnalisable.

La solution vous permet d'adapter le parcours d'autorisation à vos besoins commerciaux. Vous pouvez :

- [Personnaliser les paramètres de Link](/auth-flow/customize/customize-link).
- [Configurer l'image de marque de l'entreprise](/auth-flow/customize/branding).
- [Configurer les redirections](/auth-flow/customize/set-up-redirects).

### Webhooks

Codat prend en charge une gamme de [types d'événements](/using-the-api/webhooks/event-types) que vous pouvez écouter pour vous aider à gérer vos pipelines de données. Dans le <a href="https://app.codat.io" target="_blank">portail Codat</a>, accédez à **Paramètres > Webhooks > Configurer le consommateur** et cliquez sur **Ajouter un point de terminaison** pour ajouter des points de terminaison de consommateur de webhooks, ou en savoir plus sur le [service de webhooks chez Codat](/using-the-api/webhooks/overview).

Nous recommandons d'écouter les [types d'événements](/using-the-api/webhooks/event-types) suivants pour tirer le meilleur parti de Bill Pay :

- `read.completed.initial`

  Écoutez cet événement pour suivre l'achèvement de la lecture _initiale_ des types de données pour une entreprise spécifique. Lorsque vous recevez un message de ce webhook, vérifiez la charge utile avant de passer aux étapes suivantes du processus de paiement de factures.

- `read.completed`

  Cet événement indique que la lecture des types de données est terminée. Cela s'applique aussi bien aux lectures de modifications de données existantes qu'aux lectures de nouveaux enregistrements de données. Vous devez ensuite actualiser les données dans votre plateforme.

- `bill.write.successful` et `bill.write.unsuccessful`

  Écoutez ces événements pour suivre l'achèvement de l'opération de paiement de facture dans le logiciel comptable de la PME.

Vous pouvez également vouloir écouter les événements `client.rateLimit.reached` et `client.rateLimit.reset` pour suivre votre nombre de requêtes à l'API de Codat par rapport à votre quota alloué.

### Bibliothèques clientes

Utilisez nos [bibliothèques Bill Pay](/get-started/libraries) complètes pour démarrer et simplifier votre développement. Installez simplement la bibliothèque dans l'un des langages pris en charge et passez votre clé API encodée en base64 au constructeur.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

#### Installer

##### NPM

```sh
npm add @codat/sync-for-payables
```

##### Yarn

```sh
yarn add @codat/sync-for-payables
```

#### Initialiser

```javascript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const payablesClient = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});
```

</TabItem>

<TabItem value="python" label="Python">

#### Installer

```sh
pip install codat-sync-payables
```

#### Initialiser

```python
from codat_sync_for_payables  import CodatSyncPayables
from codat_sync_for_payables .models import operations, shared

payables_client = CodatSyncPayables(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)
```

</TabItem>

<TabItem value="csharp" label="C#">

#### Installer

```sh
dotnet add package Codat.Sync.Payables
```

#### Initialiser

```csharp
using Codat.Sync.Payables;
using Codat.Sync.Payables.Models.Shared;
using Codat.Sync.Payables.Models.Operations;

var payablesClient = new CodatSyncPayables(authHeader: "Basic BASE_64_ENCODED(API_KEY)");
```

</TabItem>

<TabItem value="go" label="Go">

#### Installer

```sh
go get github.com/codatio/client-sdk-go/sync-for-payables
```

#### Initialiser

```go
import (
	"context"
	syncforpayables "github.com/codatio/client-sdk-go/sync-for-payables/v2"
	"github.com/codatio/client-sdk-go/sync-for-payables/v2/pkg/models/shared"
)

func main() {
	payablesClient := syncforpayables.New(
		syncforpayables.WithSecurity(shared.Security{
			AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
		}),
	)
}
```

</TabItem>

</Tabs>

:::tip Récapitulatif

Vous avez activé Bill Pay, configuré les intégrations pertinentes, paramétré le flux d'authentification et noté les webhooks recommandés. Cela complète la configuration initiale de la solution.

Ensuite, vous allez créer une entreprise et sa connexion pour mettre en place l'infrastructure de base nécessaire à la gestion des comptes fournisseurs avec Codat.

:::

---

## À lire ensuite

- [Configurer votre client PME](/payables/configure-customer) pour la solution Bill Pay afin de continuer à développer votre processus de gestion des CF.
- Consultez nos [bibliothèques clientes](/get-started/libraries) pour démarrer rapidement votre développement Bill Pay.
