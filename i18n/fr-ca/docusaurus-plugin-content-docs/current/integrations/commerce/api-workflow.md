---
title: "Flux de travail de l'API Commerce"
description: "Après avoir configuré une intégration, suivez ce processus pour utiliser l'API de Codat afin d'activer, lier et lire les données commerce de vos clients"
createdAt: "2020-10-02T14:07:18.839Z"
updatedAt: "2022-10-20T10:13:39.906Z"
---

Vous devrez :

- Mettre à jour vos paramètres de type de données pour activer les types de données commerce.
- Créer une entreprise et une connexion de données pour votre client.
- Lire les ensembles de données commerce.

## Activer et mettre à jour les paramètres de synchronisation commerce

Mettez à jour vos [paramètres de synchronisation commerce](/integrations/commerce/commerce-sync-settings#update-commerce-sync-settings-via-the-api) pour récupérer automatiquement les données d'une entreprise lorsqu'elle autorise votre connexion à ses données.

## Créer une entreprise et une connexion de données

Créez une entreprise et une connexion de données Codat pour votre client.

1. Ouvrez le endpoint [Créer une entreprise](/platform-api#/operations/create-company).
2. Entrez un **companyName** et **platformType** et soumettez votre demande.
   La réponse retournée inclut :
   - L'**linkUrl** qui permet à votre client d'autoriser votre connexion à ses données.
   - L'**id** de connexion de données qui vous permet de synchroniser les données de l'entreprise.

3. Copiez l'**linkUrl** et envoyez-la à votre client.

```json
{
  "name": "john",
  "platformType": "woocommerce",
  "createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

```json
{
  "id": "fc0043b0-8c40-4c5b-b92f-f155cb720451",
  "name": "john",
  "platform": "WooCommerce",
  "redirect": "https://link-uat.codat.io/company/fc0043b0-8c40-4c5b-b92f-f155cb720451",
  "status": "PendingAuth",
  "dataConnections": [
    {
      "id": "f124c782-166a-4911-85c6-e5db8dd5c992",
      "integrationId": "8cbe957a-8337-463b-9353-2186c372e083",
      "sourceId": "1feb821a-cb05-4375-9b53-cd6367e9fb60",
      "platformName": "WooCommerce",
      "linkUrl": "https://link-api-uat.codat.io/companies/fc0043b0-8c40-4c5b-b92f-f155cb720451/connections/f124c782-166a-4911-85c6-e5db8dd5c992/start",
      "status": "PendingAuth",
      "created": "2021-05-04T15:28:09.3409951Z",
      "sourceType": "Commerce"
    }
  ],
  "created": "2021-05-04T15:28:09.2805505Z"
}
```

## Lire les ensembles de données commerce

Lorsque votre client autorise votre connexion à ses données d'entreprise, Codat récupère automatiquement ses ensembles de données. Vous pouvez lire ces ensembles de données depuis les endpoints suivants. Utilisez l'**id** d'entreprise et de connexion de données que vous avez déjà créé. Voir ci-dessus.

`GET /companies/{{companyId}}/connections/{{connectionId}}/data/commerce-customers`

`GET /.../commerce-disputes`

`GET /.../commerce-info`

`GET /.../commerce-orders`

`GET /.../commerce-payments`

`GET /.../commerce-products`

`GET /.../commerce-transactions`

:::info Statut de synchronisation

Avant de pouvoir afficher les données en utilisant l'un des endpoints commerce, vous devez attendre que la synchronisation des données soit terminée. Pour vérifier le statut de n'importe quel ensemble de données, consultez la documentation sur le [statut de synchronisation](/core-concepts/status).
:::
