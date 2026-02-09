---
title: "Types de données personnalisés"
sidebar_label: "Données personnalisées"
description: "Tirez parti des intégrations existantes pour récupérer des types de données non inclus dans le modèle de données standard de Codat"
---

import { IntegrationsList } from "@components/Integrations";
import { integrationsFilterCustomData } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::caution Fonctionnalité avancée
Demandez des conseils à votre contact Codat si vous souhaitez implémenter cette fonctionnalité de notre API.
:::

## Que sont les types de données personnalisés?

Les modèles de données standard de Codat tirent parti de notre vaste expérience et de nos connaissances de l'industrie, que nous avons utilisées pour identifier et standardiser une multitude de types de données qui soutiennent au mieux votre entreprise.

Cependant, votre cas d'utilisation peut nécessiter des types de données supplémentaires provenant de nos intégrations qui sont exclus de notre modèle standard. Par exemple, nous ne récupérons actuellement aucune donnée des endpoints [Payroll](https://developer.xero.com/documentation/api/payrolluk/overview) de Xero et [Expense Reports](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N908140.html#Expense-Reports) de NetSuite.

Avec les données personnalisées, vous pouvez récupérer de nouveaux types de données non standardisés qui ne sont pas inclus dans notre modèle de données prêt à l'emploi pour les intégrations que nous prenons en charge. Vous devrez configurer et demander ces types de données personnalisés à l'aide de nos endpoints API.

![Un diagramme qui compare les types de données standard de Codat avec les types de données personnalisés](/img/use-the-api/custom-data.png)

:::tip Données personnalisées ou données supplémentaires?

Cherchez-vous à récupérer, créer ou mettre à jour des _propriétés_ supplémentaires dans des types de données déjà pris en charge par le modèle de données standardisé de Codat? Vous devriez peut-être utiliser les [données supplémentaires](/using-the-api/supplemental-data/overview) à la place.

:::

## Intégrations prises en charge

<iframe
  src="https://docs.google.com/spreadsheets/d/1DmS8whMQ3iJtggfAkKvNgK__FdoYfnmtZvob_D5SsfY/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "300px" }}
/>

## Configurer les données personnalisées

#### Créer un nouveau type de données personnalisé

Utilisez notre endpoint [Configurer le type de données personnalisé](/platform-api#/operations/configure-custom-data-type) pour créer un nouveau type de données pour chaque intégration dont vous avez besoin. Gardez ces directives à l'esprit :

- Vous ne pouvez indiquer qu'une seule source de données pour chaque type de données personnalisé.
- Il n'est pas possible de spécifier des objets imbriqués ou des tableaux dans la propriété `requiredData`.
- Vous pouvez interroger l'API de la plateforme sous-jacente en spécifiant la requête dans la propriété `dataSource`.

Nous vous conseillons de rendre votre configuration personnalisée aussi similaire que possible à nos types de données standard afin de pouvoir interagir avec eux exactement de la même manière.

<Tabs>
  <TabItem value="request" label="Requête">

```json
PUT /integrations​/{platformKey}/datatypes/custom/{customDataIdentifier}

{
    "dataSource": "{endpointFromUnderlyingPlatform}",//required
    "requiredData": {
      "{nameYourField}": "$.{fieldNameFromUnderlyingPlatform}",
      "{nameYourField}": "$.{fieldNameFromUnderlyingPlatform}"
    },
    "keyBy": ["$.{fieldNameFromUnderlyingPlatform}"],//required
    "sourceModifiedDate": ["{fieldNameFromUnderlyingPlatform}"]
}

```

  </TabItem>
  <TabItem value="example" label="Exemple">

```json title="Exemple de requête utilisant l'endpoint CashFlow de QuickBooks Online"

PUT /integrations/qhyg/datatypes/custom/qbo-cashflow-report

{
    "dataSource": "/reports/CashFlow",
    "requiredData": {
        "Heads": "$.Header.EndPeriod",
        "Header": "$.Header",
        "Rows": "$.Rows",
        "Columns": "$.Columns"
    },
    "keyBy": ["$.Header.ReportName"],
    "sourceModifiedDate": ["$.Header.Time"]
}
```

  </TabItem>
</Tabs>

:::caution Vérifiez vos valeurs de configuration!

Codat ne valide aucune des valeurs que vous saisissez dans la requête de configuration. Si vous faites des fautes de frappe ou ne spécifiez pas les routes API complètes, vous recevrez une erreur de récupération lorsque vous essaierez de lire le type de données personnalisé par la suite.

Référez-vous à la propre documentation API de la plateforme pour vous assurer d'utiliser les bons endpoints, routes et noms de champs.

:::

#### Mettre à jour la configuration existante

Une fois que vous avez configuré un type de données personnalisé, vous ne pouvez pas modifier son `customDataIdentifier`. Cependant, vous pouvez mettre à jour le contenu du type de données en utilisant l'endpoint [Configurer le type de données personnalisé](/platform-api#/operations/configure-custom-data-type).

#### Voir la configuration existante

Vous pouvez consulter les configurations précédemment créées pour une plateforme spécifique en utilisant l'endpoint suivant :

- [Obtenir la configuration des données personnalisées](/platform-api#/operations/get-custom-data-type-configuration) retourne la configuration du type de données personnalisé spécifié pour la plateforme que vous indiquez dans `platformKey`.

#### Tester votre configuration

Il n'est pas possible de tester les types de données personnalisés dans le Codat Sandbox. Créez plutôt une entreprise de test avec une connexion de données à une intégration et essayez différentes options de configuration.

## Synchroniser et consulter les données personnalisées

La configuration des données personnalisées est créée pour une plateforme spécifique, vous ne pouvez donc mettre en file d'attente une synchronisation de type de données personnalisé que pour les connexions qui utilisent cette plateforme comme source. Utilisez l'endpoint [Actualiser le type de données personnalisé](/platform-api#/operations/refresh-custom-data-type) pour ce faire :

```
POST /companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}
```

:::info Actualiser toutes les données

Les requêtes vers notre endpoint [Actualiser toutes les données](/platform-api#/operations/refresh-company-data) ne déclenchent pas de synchronisation pour aucun des ensembles de données personnalisés.

:::

Pour consulter les données personnalisées synchronisées, utilisez l'endpoint [Lister les enregistrements de type de données personnalisé](/platform-api#/operations/list-custom-data-type-records). Vous devez spécifier un numéro de page dans la requête.

```
GET /companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}?page=1
```

Pour consulter l'historique de lecture de vos types de données personnalisés, utilisez les endpoints suivants. Dans la réponse, la propriété `dataType` reflétera le type de données personnalisé sous la forme `custom/{customDataIdentifier}` :

- [Lister les opérations de lecture](/platform-api#/operations/list-pull-operations) pour consulter l'historique de lecture de l'entreprise pour tous ses types de données
- [Obtenir l'opération de lecture](/platform-api#/operations/get-pull-operation) pour consulter les informations sur un ensemble de données spécifique

## Conseils et pièges

- Les types de données personnalisés peuvent être utilisés au niveau des enregistrements et des postes de ligne, mais ne prennent en charge que les opérations de récupération.

- Les types de données personnalisés ne prennent en charge que les réponses JSON des API des intégrations.

- La fonctionnalité de [requêtes](/using-the-api/querying) de Codat ne prend pas en charge les types de données personnalisés, mais vous pouvez inclure des paramètres d'URL acceptés par la plateforme sous-jacente dans le `dataSource` de votre configuration de type de données personnalisé.

- La fonctionnalité [Récupérer au premier lien](/core-concepts/data-type-settings#use-fetch-on-first-link) de Codat ne prend pas en charge les types de données personnalisés.
