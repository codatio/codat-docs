---
title: "Migrer vers Codat"
description: "Découvrez comment migrer les jetons d'autorisation existants de vos intégrations existantes vers Codat"
createdAt: "2020-08-26T13:23:10.920Z"
updatedAt: "2022-11-25T13:10:30.057Z"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Si vous êtes nouveau chez Codat mais que vous avez déjà construit et utilisez une application OAuth avec l'une de nos intégrations prises en charge, vous êtes au bon endroit. Le processus de migration de jetons de Codat vous permet de migrer de manière transparente les connexions de vos clients d'une intégration autogérée vers Codat — sans que vos clients aient besoin de se reconnecter.

Cette page décrit les informations dont nous aurons besoin de votre part et fournit un aperçu du processus de migration.

## Migrations en libre-service

L'API de Codat vous permet de fournir des jetons pour un sous-ensemble de nos intégrations, ce qui vous permettra de gérer vous-même une migration.

La migration de jetons en libre-service est actuellement prise en charge pour plus de vingt de nos intégrations, avec d'autres qui seront ajoutées dans les mois à venir. Pour consulter une liste à jour, consultez les intégrations disponibles dans la section **Migrations de jetons OAuth** de notre <a href="https://postman.codat.io/#88a1864c-60e8-4105-bea9-e55314d6b74d" target="_blank" class="external">collection Postman</a>.

Avant de migrer un jeton, l'entreprise et la connexion de données doivent être créées. Cela est requis car le `companyId` et le `connectionId` sont des paramètres dans l'URL PUT de migration de jetons (voir ci-dessous). Vous pouvez créer l'entreprise en utilisant un appel POST vers l'endpoint [Créer une entreprise](/platform-api#/operations/create-company). La connexion peut être créée en utilisant l'endpoint [Créer une connexion](/platform-api#/operations/create-connection).

Pour migrer, utilisez l'endpoint PUT connections. Vous devrez fournir les informations spécifiques à l'intégration telles que l'ID d'organisation et les jetons OAuth que Codat doit utiliser. Parce que ces informations sont différentes pour chaque intégration, des exemples du format requis pour les intégrations disponibles sont listés dans la collection Postman liée ci-dessus.

<Tabs>

<TabItem value="Request URL" label="URL de requête">

```http request title="Autoriser la connexion"
  PUT /companies/{companyId}/connections/{connectionId}/authorization
```

</TabItem>

<TabItem value="Request Body" label="Corps de requête">

```json
{
  "accessToken": "0000-0000",
  "businessId": "test-business-1234"
}
```

</TabItem>

</Tabs>

:::caution Synchronisation des données post-migration

Après avoir mis à jour avec succès une connexion avec des identifiants valides, vous devrez initier une synchronisation manuellement en utilisant l'endpoint `POST ​/companies​/{companyId}​/data​/all`.

La _récupération lors de la première liaison_ n'est pas prise en charge lors de l'exécution de migrations de jetons en libre-service à l'aide de l'endpoint `PUT /companies/{companyId}/connections/{connectionId}/authorization`.
:::

## Migrations gérées

Pour d'autres plateformes où nous ne prenons pas encore en charge la voie de migration en libre-service, ou si vous avez des considérations ou des préoccupations particulières, l'équipe de solutions de Codat offre une voie de migration gérée.

:::note Intégrations prises en charge

Nous avons actuellement pris en charge des migrations depuis les plateformes suivantes : FreeAgent, FreshBooks, QuickBooks Online, Shopify, Wave et Zoho Books.

Nous n'avons pas de processus de migration standard pour nos autres intégrations, mais sommes heureux d'explorer des solutions possibles. Veuillez contacter votre ingénieur de solutions si vous avez besoin de discuter de la migration de l'une de ces intégrations.
:::

Le processus de migration implique généralement les étapes suivantes.

:::success Planifiez votre migration

Chaque migration est différente, alors assurez-vous de parler à votre ingénieur de solutions ou d'utiliser notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new) dès que possible pour discuter et planifier votre migration.
:::

| Étape                                         | Détails                                                                                                                                                                                          | Responsabilité                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| **1. Fournir les détails de migration et de plateforme** | Fournir tous les détails requis pour la plateforme spécifique à l'équipe de support de Codat.                                                                                                             | Votre entreprise                            |
| **2. Planifier la migration**                | Convenir d'un moment où la migration peut avoir lieu. Sur la base des données de votre entreprise, l'équipe de support de Codat estime combien de temps la migration prendra.                                                   | Votre entreprise et l'équipe de support Codat |
| **3. Mettre à jour les détails de votre application**       | Ajouter l'URL de rappel de Codat à l'application enregistrée auprès de votre fournisseur de plateforme.                                                                                                              | Votre entreprise                            |
| **4. Désactiver la synchronisation des données**                  | Désactiver la synchronisation des données dans votre application existante pour toutes les entreprises que vous avez choisies de migrer. Cela permet d'éviter que les jetons ne deviennent invalides.                                            | Votre entreprise                            |
| **5. Migrer la première entreprise**                 | L'équipe de support de Codat importe le nom et le jeton pour une seule entreprise et effectue un test de bout en bout pour s'assurer que : <br/> - Aucune réautorisation n'est requise.<br/> - Les synchronisations de données se terminent correctement. | Équipe de support Codat                      |
| **6. Terminer la migration**                    | L'équipe de support de Codat :<br/>- Migre les entreprises restantes.<br/>- Effectue des tests de bout en bout.<br/>- Complète une passation.                                                                       | Équipe de support Codat                      |
