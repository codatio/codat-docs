---
title: "Données supplémentaires"
sidebar_label: "Aperçu"
description: "Personnalisez les types de données avec des propriétés additionnelles non incluses dans les modèles de données prêts à l'emploi de Codat"
---

## Que sont les données supplémentaires?

Les types de données pris en charge par Codat incluent des propriétés standardisées. Certaines sources de données (par exemple Xero) peuvent contenir des propriétés qui ne sont pas communes à d'autres sources, et ne sont donc pas couvertes par notre modèle de données prêt à l'emploi. Vous pouvez utiliser les données supplémentaires pour étendre nos types de données afin de récupérer ou créer de telles propriétés aux côtés de nos propriétés standard.

:::note Méthodes HTTP prises en charge

Les données supplémentaires prennent en charge la lecture de données via des méthodes de requête `GET` ou la création de données via `POST`. Codat ne prend pas en charge la mise à jour de données à l'aide de données supplémentaires.

:::

Considérons notre intégration Xero. Le schéma [Contact](https://developer.xero.com/documentation/api/accounting/contacts) de Xero correspond au type de données `supplier` de Codat. Certaines de ses propriétés (comme `TaxNumber`) _sont_ mappées, alors que d'autres (comme `BankAccountDetails`) ne le sont pas. Si vous configurez des données supplémentaires pour cette propriété Xero, les données de `suppliers` provenant de Xero pourraient inclure en plus `BankAccountDetails`.

![Un diagramme démontrant les propriétés supplémentaires dans la réponse standard du type de données des fournisseurs](/img/use-the-api/supplemental-data.png)

## Utilisations courantes

Les propriétés spécifiques à une intégration non incluses dans nos modèles de données standard peuvent néanmoins vous apporter des avantages supplémentaires, en enrichissant les données pertinentes pour votre cas d'utilisation. Par exemple, vous pouvez enrichir notre type de données `invoices` avec une `URL` de facture, un champ spécifique à Xero qui dirige l'utilisateur vers un document source pour une facture hébergée en dehors de Xero. Pour QBO, le type de données `invoices` peut être complété avec `SalesTermRef`, vous fournissant les conditions de vente associées à une facture.

Nous avons compilé une liste de propriétés couramment utilisées par nos clients pour enrichir nos types de données standard. Vous pouvez [les consulter en détail](/using-the-api/supplemental-data/usecases) pour voir comment vous pouvez utiliser les données supplémentaires à votre avantage.

:::tip Données supplémentaires ou personnalisées?

Cherchez-vous à récupérer des _types de données_ supplémentaires en utilisant des endpoints qui ne sont pas inclus dans le modèle de données standardisé de Codat? Vous pourriez avoir besoin d'utiliser des [données personnalisées](/using-the-api/custom-data) à la place.

:::

## Intégrations prises en charge

Nous élargissons rapidement la couverture des intégrations et des types de données selon la demande des clients. Nous couvrons actuellement les intégrations et les types de données suivants :

<iframe
  src="https://docs.google.com/spreadsheets/d/1ZkGe3zkWVC-8DWv3UtJOiiI42d2wAFzTFQZKDhkQeGY/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "400px" }}
/>

## Configurer les données supplémentaires

Vous devrez spécifier quelles données supplémentaires doivent être transmises dans la réponse pour chaque paire d'intégration et de type de données dont vous avez besoin. Pour ce faire, utilisez l'endpoint [Configure supplemental data](/platform-api#/operations/configure-supplemental-data).

```http
PUT /integrations/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

Vous pouvez utiliser le même endpoint avec un objet `supplementalDataConfig` vide pour réinitialiser la configuration des données supplémentaires à tout moment.

Dans le corps de la requête, les valeurs des paramètres `PlatformEndpoint` et `PlatformPropertyName` doivent correspondre exactement aux exigences de l'intégration, y compris la casse. Assurez-vous de bien connaître la structure des données sources, car Codat ne valide pas les valeurs des données supplémentaires par rapport au fournisseur d'intégration.

```json title="Corps de requête de configuration des données supplémentaires"
{
  "supplementalDataConfig": {
    "{ClientObjectName}": {
      "dataSource": "/{PlatformEndpoint}",
      "pullData": {
        "{ClientDefinedName}": "{PlatformPropertyName}",
        "{ClientDefinedName2}": "{PlatformPropertyName2}"
      },
      "pushData": {
        "{ClientDefinedName}": "{PlatformPropertyName}",
        "{ClientDefinedName2}": "{PlatformPropertyName2}"
      }
    }
  }
}
```

Vous pouvez utiliser la notation par points pour récupérer des propriétés imbriquées dans l'objet de données supplémentaires. Par exemple, maintenez la configuration suivante pour récupérer la valeur `Name` du fournisseur à partir de l'objet `BrandingTheme` de Xero avec deux propriétés, `BrandingThemeID` et `Name`, ainsi que leurs `BankAccountDetails`.

```json title="Configuration de données supplémentaires avec notation par points"
{
  "supplementalDataConfig": {
    "yourKeyNameForXeroSuppliers": {
      "dataSource": "/Contacts",
      "pullData": {
        "SupplierBankAccount": "BankAccountDetails",
        "BrandingThemeName": "BrandingTheme.Name"
      }
    }
  }
}
```

Une fois définie, vous pouvez récupérer une configuration de données supplémentaires existante en utilisant l'endpoint [Get supplemental data configuration](/platform-api#/operations/get-supplemental-data-configuration) :

```http
GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

## Mappage des endpoints de plateforme

Consultez le tableau ci-dessous pour les schémas de plateforme que nous utilisons dans nos types de données, qui sont disponibles pour récupérer ou créer des données supplémentaires. Référez-vous à la documentation individuelle de la plateforme (par exemple, [Xero](https://developer.xero.com/documentation/api/accounting/overview) ou [QBO](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account)) pour plus de détails sur leurs schémas et leur couverture de propriétés.

<iframe
  src="https://docs.google.com/spreadsheets/d/1-d80bkqHOskCF8MJdF331SGX08YV5MKPjlmVul5wcMs/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "400px" }}
/>

## 💡 Conseils et pièges

- Les données supplémentaires ne sont actuellement disponibles qu'au niveau de l'enregistrement et ne peuvent pas être utilisées pour interagir avec les propriétés au niveau des lignes.

- Les données dans l'objet de données supplémentaires ne sont pas validées, manipulées, standardisées ou transformées par Codat.

- Notre fonctionnalité de [requête](/using-the-api/querying) ne prend pas en charge les données supplémentaires.

- Lorsque vous ajoutez ou modifiez la configuration des données supplémentaires, la prochaine synchronisation de ce type de données sera une synchronisation complète par défaut pour garantir que les données supplémentaires sont ajoutées aux enregistrements nouveaux et précédemment synchronisés.

- Nous exposons les sources de données disponibles pour interagir avec les données supplémentaires, mais nous vous demandons de vous référer à la documentation des plateformes elles-mêmes pour obtenir des détails sur les données et propriétés disponibles pour chaque source de données.

- Lorsque nous ne sommes pas en mesure de récupérer les données supplémentaires demandées, l'opération de récupération se terminera quand même, mais les propriétés supplémentaires seront nulles.

- Si nous ne sommes pas en mesure d'effectuer l'opération lors de la création de données supplémentaires, l'opération échouera pour éviter de créer des enregistrements potentiellement incomplets ou inexacts.

- Si vous configurez des propriétés qui existent déjà dans le modèle de données standard de Codat en tant que propriétés supplémentaires, elles écraseront les données standard lors de la création d'enregistrements.

- Les objets supprimés, indiqués par le drapeau `metadata.isDeleted` défini sur `true`, ne seront pas enrichis par des données supplémentaires. Vous pouvez en savoir plus sur [comment nous gérons les données supprimées](https://docs.codat.io/updates/230411-deletion-of-data#additional-information).
