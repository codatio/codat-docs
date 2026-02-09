---
title: "Flux de sélection de plateforme"
description: "Permettre à votre commerçant de sélectionner un logiciel de comptabilité cible avant de passer au flux de configuration Sync."
draft: true
---

## Créer un flux de sélection de plateforme

Dans votre application, présentez à votre commerçant une liste des logiciels de comptabilité auxquels il peut se connecter.

Lors de la sélection, votre commerçant doit être [redirigé vers l'URL du flux de configuration Sync](/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration) où il sera invité à autoriser l'accès à ses données comptables.

:::info Exigences en matière de données

Au cours des étapes de ce guide, vous devrez conserver plusieurs variables :

- `companyId` - l'identifiant unique de votre commerçant dans le système Codat
- `platformKey` - l'identifiant unique de l'intégration que votre commerçant souhaite utiliser

Vous en aurez besoin pour la page suivante.
:::

### 1. Créer votre commerçant en tant que Company

Votre commerçant doit exister en tant qu'entreprise dans le système Codat. Commencez par le créer :

```http
  POST /meta/companies/sync
```

Vous devez simplement définir un nom dans le corps de la requête.

Nous vous retournerons le `companyId` de ce commerçant à conserver (retourné ici comme `id`) :

```json
{
  "id": "d5211e9b-3cb6-47c8-826c-1b283f5621c7",
  "clientId": "4a7fc22d-b4e6-407c-bf46-5509f7f71d8a",
  "name": "Sample Company Name",
  ...
}
```

:::info Point de contrôle

Vous avez effectué un appel API POST pour créer votre commerçant et reçu une réponse qui inclut le `name` et le `companyId` du commerçant.
:::

### 2. Obtenir les intégrations disponibles

Obtenez une liste des intégrations que vous avez activées, ainsi que les métadonnées associées. Ce seront les intégrations que vous présenterez dans votre interface utilisateur.

Nos intégrations disponibles pour Sync for Commerce :

- [Xero](/integrations/accounting/xero/accounting-xero)
- [QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline)
- [FreeAgent](/integrations/accounting/freeagent/accounting-freeagent)

Appelez notre endpoint `GET /integrations`, en interrogeant les intégrations activées.

```http
GET /config/integrations?page=1&pageSize=100&query=enabled%253Dtrue
```

Exemple de réponse :

```json
{
  "results": [
    {
      "key": "gbol",
      "logoUrl": "https://static.codat.io/public/platforms/gbol.png",
      "name": "Xero",
      "enabled": true,
      "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
      "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
      "sourceType": "Accounting",
      "isOfflineConnector": false,
      "isBeta": false,
      "supportedEnvironments": "LiveAndSandbox",
      "linkedConnectionsCount": 0,
      "totalConnectionsCount": 0,
      "dataProvidedBy": "Codat",
      "datatypeFeatures": [
        {
          "datatype": "chartOfAccounts",
          "supportedFeatures": [
            {
              "featureType": "Get",
              "featureState": "Release"
            },
            {
              "featureType": "Post",
              "featureState": "Release"
            },
            {
              "featureType": "Categorization",
              "featureState": "Beta"
            },
            {
              "featureType": "Put",
              "featureState": "NotImplemented"
            }
          ]
        },
        ...
      ]
    },
    ...
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 125,
  "_links": {
    "current": {
      "href": "/integrations?page=1&pageSize=100"
    },
    "self": {
      "href": "/integrations"
    },
    "next": {
      "href": "/integrations?page=2&pageSize=100"
    }
  }
}
```

:::info Point de contrôle

**Conservez le `platformKey` de l'intégration**.

Pour référence :

- Xero - `gbol`
- QuickBooks Online - `qhyg`
- FreeAgent - `fbrh`

:::

### 3. Obtenir l'image de marque des intégrations

Remplissez votre interface utilisateur avec les logos de marque des logiciels de comptabilité sélectionnés.

Pour obtenir l'image de marque d'une intégration, appelez :

```http
GET /config/integrations/{platformKey}/branding
```

Exemple de réponse où le `platformKey` est `gbol` (Xero) :

```json
{
  "logo": {
    "full": {
      "image": {
        "src": "https://static.codat.io/public/officialLogos/Full/Xero_Full.png",
        "alt": "xero full icon"
      }
    },
    "square": {
      "image": {
        "src": "https://static.codat.io/public/officialLogos/Full/Xero_Square.png",
        "alt": "xero square icon"
      }
    }
  },
  "button": {},
  "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607"
}
```

### 4. Afficher les intégrations

Affichez chacune de ces intégrations, en utilisant l'image de marque pour aider l'utilisateur.

Selon votre pile frontale, cela variera. En utilisant React, cela pourrait ressembler à ceci :

```html
<div>
  { integrations.map((integration, i) => (
  <div key="{i}" onClick="{selectIntegration(integration.key)}">
    <img
      src="{branding[integration.key].logo.full.image.src}"
      alt="{branding[integration.key].logo.full.image.alt}"
    />

    <h3>{integration.name}</h3>

    <div>Liez votre compte {integration.name}</div>
  </div>
  ) }
</div>
```

### 5. Gérer la sélection de plateforme

Lorsque l'utilisateur sélectionne l'intégration, vous êtes prêt à le faire progresser vers le flux de configuration Sync, où votre commerçant autorisera l'intégration et configurera ses paramètres.

**Conservez le `platformKey` de l'intégration que votre commerçant a sélectionnée.** Dans l'exemple ci-dessus, cela est transmis à la fonction `onClick`, qui s'en charge.

:::caution Sélection de plateforme incorrecte

Si votre commerçant sélectionne accidentellement le mauvais logiciel de comptabilité, vous pouvez résoudre ce problème en [supprimant cette connexion](/core-concepts/connections#how-do-i-delete-a-data-connection) pour le logiciel de comptabilité sélectionné incorrectement et en les renvoyant à l'étape de sélection du logiciel de comptabilité.
:::

Lorsque vous êtes prêt à continuer, vous pouvez obtenir l'URL du flux de configuration de synchronisation en utilisant les variables que vous avez conservées.

```http
GET /config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}
```

:::info Point de contrôle

Vous êtes prêt à passer à la page suivante, où nous couvrirons quoi faire avec cette réponse, et plus encore.
:::

---

## Utiliser nos flux d'autorisation Link et Hosted Link

Nos flux sans code et à faible code prennent en charge la sélection de plateforme et l'autorisation pour vous.

Vous pouvez en savoir plus à ce sujet ici :

- [Autoriser avec Link](/auth-flow/authorize-embedded-link)
- [Autoriser avec Hosted Link](/auth-flow/authorize-hosted-link)

### 1. Autoriser

Chacune de ces options signifiera que vous :

- Avez créé une entreprise pour votre commerçant
- Avez créé une connexion avec leur plateforme de compte préférée

### 2. Rediriger l'utilisateur vers le flux de configuration de synchronisation

Lorsque vous êtes prêt à continuer, obtenez l'URL du flux de configuration de synchronisation.

Vous devriez avoir conservé le `companyId`.

Vous pouvez récupérer le `platformKey` lorsque vous en avez besoin.

:::info Vérification des connexions

Appelez `GET /companies/{companyId}/connections`. Il ne devrait y avoir qu'une seule connexion retournée si vos paramètres sont configurés correctement. Le `platformKey` s'appelle `integrationKey` dans la réponse.

Pour Link, vous pouvez utiliser la fonction de rappel `onConnection` pour conserver la connexion et son `platformKey`.
:::

```http
GET /config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}
```

:::info Point de contrôle
Vous êtes prêt à passer à la page suivante, où nous couvrirons quoi faire avec cette réponse, et plus encore.
:::
