---
title: "Flux de configuration de la synchronisation"
description: "Comment implémenter un flux d'authentification et de configuration Sync for Commerce, permettant à votre commerçant de configurer le mappage de données souhaité."
createdAt: "2022-05-12T14:01:29.011Z"
updatedAt: "2022-11-17T11:02:46.252Z"
---

:::caution Tests bêta

Sync for Commerce est en version bêta. Si vous êtes intéressé à développer avec Sync for Commerce, veuillez [nous contacter](mailto:sync-for-commerce@codat.io).
:::

Avant que Codat puisse accepter les données de votre commerçant, le commerçant doit :

- Autoriser l'accès à ses données
- Définir comment les données doivent être mappées à son logiciel de comptabilité
- Définir un calendrier de synchronisation

Notre flux de configuration Sync gère cela pour vous.

Vous pouvez [personnaliser votre flux](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow) pour offrir à vos utilisateurs la meilleure expérience.

### 1. Récupérer l'URL du flux de configuration Sync

Après que le commerçant a sélectionné son logiciel de comptabilité, il doit être immédiatement redirigé vers une URL sécurisée le menant au flux de configuration Sync. Pour récupérer l'URL sécurisée, effectuez la requête suivante :

```http
GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}
```

Exemple de réponse :

```json
{
  "url": "https://sync-flow.codat.io/df074e52-0267-4707-879b-0cc2adbd20e3/partnercommerce/xero/start?merchantIdentifier=demo merchant&otp=479149"
}
```

#### Mot de passe à usage unique (OTP)

L'URL que vous recevrez en réponse inclut un mot de passe à usage unique qui expirera après 30 secondes. L'OTP élimine la possibilité que des tiers non désirés accèdent à l'URL, garantissant la sécurité de vos commerçants.

En raison de notre sécurité OTP, les URL ne sont valides que pendant 30 secondes - assurez-vous que le commerçant est redirigé dans ce délai. Une fois expiré, il verra une erreur 401.

Si le lien expire, appelez simplement la requête à nouveau pour générer une nouvelle URL avec un nouvel OTP.

#### (Optionnel) Redirections personnalisées

À la fin du flux, le commerçant verra un message de succès. **Vous pouvez plutôt rediriger le commerçant vers une URL personnalisée.**

Ajoutez un paramètre de requête `redirectUrl` et l'URL absolue comme valeur à la requête `GET` précédente.

```http
GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}&redirectUrl=app.codat.io
```

L'URL résultante du flux Sync inclura l'URL de redirection comme indiqué dans cet exemple :

```json
{
  "url": "https://sync-flow.codat.io/06de067c-1d6c-416a-8e61-676e6c135e68/lqai/gbol/start?merchantIdentifier=CoPay&otp=615853&redirectUrl=app.codat.io"
}
```

### 2. Autorisation

Le commerçant sera redirigé vers une page d'autorisation pour le logiciel de comptabilité qu'il a sélectionné. Il doit saisir ses identifiants.

Une fois réussi, il aura créé une connexion valide et sera redirigé vers l'étape de configuration.

:::note Utilisation de la solution Link de Codat

Si vous avez utilisé nos solutions Link ou Hosted Link pour la sélection de plateforme, cette étape sera automatiquement ignorée.
:::

### 3. Configuration

Une fois autorisé, le commerçant se voit présenter le flux de configuration en marque blanche de Codat et est invité à configurer la synchronisation des données :

- Choisir dans quels comptes de leur logiciel de comptabilité écrire les données
- Lier les taux de taxe de leur logiciel de comptabilité à ceux utilisés pour leurs données de commerce électronique ou de point de vente
- Planifier la date de début, l'heure de début et la fréquence de la [synchronisation régulière des données](/sfc/sync-for-commerce-knowledge-base/synchronization-schedule)
- Définir le statut de facture par défaut
- Définir la période de regroupement des données

:::note Créer une expérience de marque

Pour offrir à vos commerçants une expérience de marque, nous vous recommandons de personnaliser votre [flux de configuration Sync](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow), incluant votre logo et votre couleur principale.
:::

### 4. Permettre au commerçant de réviser sa configuration

Pour permettre aux commerçants de réviser et de modifier leur connexion, présentez-leur la même URL que celle utilisée pour la configuration initiale. Elle redirigera le commerçant vers une page de paramètres où il pourra :

- Activer et désactiver la synchronisation des données
- Planifier la date de début, l'heure de début et la fréquence de la [synchronisation régulière des données](/sfc/sync-for-commerce-knowledge-base/synchronization-schedule)
- Voir la date et l'heure de la dernière synchronisation et de la prochaine
- Réviser et modifier dans quels comptes de leur logiciel de comptabilité écrire les données (voir [Spécifications de mappage](/sfc/mapping-specifications/overview) pour plus d'informations)
- Réviser et modifier le mappage des taux de taxe
- Définir le statut de facture par défaut
- Définir la période de regroupement des données
- Révoquer la connexion à leur logiciel de comptabilité

:::caution Connexion de synchronisation supprimée

Si le commerçant coupe la connexion, la prochaine synchronisation de données planifiée échouera et aucune autre synchronisation de données ne sera tentée.

Vous pouvez [configurer un webhook](/using-the-api/webhooks/legacy/core-rules-create) pour la règle [Sync Connection Deleted](/using-the-api/webhooks/legacy/core-rules-types#sync-connection-deleted) pour être notifié si un commerçant coupe sa connexion.
:::

### 5. (Optionnel) Vérifier le statut de configuration

Si vous souhaitez vérifier que le commerçant a bien autorisé et configuré, et est prêt à synchroniser :

1. Obtenir l'entreprise

Vous devriez déjà avoir le `companyId` du commerçant.

```text
GET /companies/{companyId}
```

Exemple de réponse :

```json
{
  "results": [
    {
      "id": "8f810334-2846-4898-828e-dd7b5318ecbb",
      "integrationId": "9e0cc03b-3868-4543-98c0-568f0f1b12a3",
      "integrationKey": "gbol",
      "sourceId": "aff0f057-255f-42c4-8d4a-ae23b43e1615",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections/8f810334-2846-4898-828e-dd7b5318ecbb/start",
      "status": "Linked",
      "lastSync": "2022-04-22T16:58:32.512646Z",
      "created": "2022-04-22T16:58:17Z",
      "sourceType": "Accounting"
    },
    {
      "id": "cd4a4f4f-0117-4815-83aa-c12ac71ab535",
      "integrationId": "b27611c5-c104-4360-b979-e8f6b16db164",
      "integrationKey": "lqai",
      "sourceId": "fac84d06-5a70-4e9e-bf46-7607e647b036",
      "platformName": "PlatformCommerce",
      "linkUrl": "https://link-api.codat.io/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections/cd4a4f4f-0117-4815-83aa-c12ac71ab535/start",
      "status": "Linked",
      "lastSync": "2022-04-22T16:58:26.8185875Z",
      "created": "2022-04-22T16:58:17Z",
      "sourceType": "Commerce"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "current": {
      "href": "/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections"
    }
  }
}
```

La réponse doit avoir des connexions de données de comptabilité et de commerce présentes et avec le statut `Linked`.

2. Obtenir le statut de configuration du commerçant :

```http
GET /config/companies/{companyId}/sync/commerce
```

Exemple de réponse partielle :

```json
{
  "companyId": "d5211e9b-3cb6-47c8-826c-1b283f5621c7",
  "accountingSoftwareCompanyName": "Sample Company Name",
  "enabled": true,
  "configured": true,
  ...
}
```

Les paramètres `enabled` et `configured` doivent tous deux être définis sur `true`.

:::note Personnalisation du flux Sync

N'oubliez pas de personnaliser votre [flux de configuration Sync](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow).
:::
