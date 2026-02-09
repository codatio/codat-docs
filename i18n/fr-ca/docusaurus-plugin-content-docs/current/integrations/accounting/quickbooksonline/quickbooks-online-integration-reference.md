---
title: "Référence de l'intégration QuickBooks Online"
description: "Informations à connaître lors de la synchronisation de données avec QuickBooks Online"
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant notre intégration QuickBooks Online.

## Direct Incomes

Direct Incomes comprend les Sales Receipts et les Refund Receipts de QuickBooks Online.

Lors de l'écriture de Direct Incomes dans QuickBooks Online, vous devez saisir les Sales Receipts comme des montants positifs et les Refund Receipts comme des montants négatifs.

## Direct Costs

Lors de la création de coûts directs dans QuickBooks Online pour les régions GB, FR, IE, CA et AU, les enregistrements avec un montant de taxe spécifié sur la ligne seront classés comme `Tax Exclusive`. Spécifiquement pour CA, s'il n'y a pas de montants de taxe spécifiés sur les lignes ou si toutes les lignes ont un montant de taxe de zéro, la dépense sera écrite comme `Out Of Scope Of Tax`.

## Invoice Line Items

Lors de l'écriture d'une Invoice dans QBO, vous pouvez créer des lignes sans faire référence à des articles existants dans QBO. Cependant, si vous ne spécifiez pas un article existant avec un `itemID` existant pour la ligne de facture, Codat utilise l'_Item par défaut_ qui est défini pour l'entreprise. Cela utilisera également le `AccountRef` par défaut associé à l'Item par défaut.

En raison d'une limitation de la plateforme, lors de l'extraction de factures depuis QBO, Codat mappe les comptes par défaut pour les lignes d'expédition et de pourboire. Ces comptes mappés peuvent donc être incorrects si les comptes par défaut ont changé depuis la création de la facture.

## Payment Methods

Lors de la lecture de Payment Methods depuis QuickBooks Online, le `type` de Payment Method est toujours `Unknown`.

## Couverture des champs pour les types de données pris en charge

Le modèle de données de Codat prend en charge une large gamme de champs dans chaque type de données.

Parfois, l'API d'un fournisseur n'accorde pas l'accès à un champ qui existe dans un type de données Codat. Inversement, notre modèle de données ne prend parfois pas en charge tous les champs pertinents sur un objet dans l'API d'un fournisseur.

Le tableau suivant met en évidence certains champs sélectionnés qui ne sont pas disponibles dans les données lues depuis et écrites dans QuickBooks Online.

### Champs de fournisseur non disponibles

| Type de données et champ Codat | Statut                                                           |
| :----------------------------- | :--------------------------------------------------------------- |
| Bank Transactions              | Le numéro de compte bancaire n'est pas disponible dans l'API du fournisseur. |

:::caution Groupes d'articles dans QBO

Les _groupes d'articles_ dans QuickBooks Online sont pris en charge pour Direct Incomes, Invoices et Credit Notes uniquement.
:::

## Hébergement d'application QBO

Pour accéder à vos identifiants de production dans QuickBooks Online, vous devez confirmer où votre application est hébergée. Comme Codat interagit directement avec QBO, vous devez inclure nos adresses IP et nos emplacements d'hébergement ainsi que les vôtres (le cas échéant).

:::note IP dynamiques
Nos adresses IP sont dynamiques. L'ensemble des adresses IP incluses ci-dessous est correct en date du troisième trimestre 2024.
:::

**Pays** : Royaume-Uni de Grande-Bretagne et d'Irlande du Nord

| Type d'adresse IP   | Début        | Fin            |
| ------------------- | ------------ | -------------- |
| Plage d'adresses IP | 20.77.152.0  | 20.77.153.255  |
| IP unique           | 51.104.28.73 |                |
| Plage d'adresses IP | 51.132.44.0  | 51.132.47.255  |
| Plage d'adresses IP | 51.132.155.0 | 51.132.159.255 |

## Pièces jointes

Lors de la création de pièces jointes, QuickBooks Online exige que la demande multipart/form-data utilisée pour télécharger les fichiers inclue un en-tête `Content-Type`.

L'en-tête doit être contenu dans chaque partie séparée par des limites du corps de la demande et doit être un type MIME qui reflète le type de fichier téléchargé. QBO n'acceptera pas `application/octet-stream` comme valeur d'en-tête.

```http title="Exemple multipart/form-data avec un en-tête Content-Type"
--boundaryxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Content-Disposition: form-data; name="test"; filename="test1.pdf"
Content-Type: application/pdf

 ## binary file data
--boundaryxxxxxxxxxxxxxxxxxxxxxxxxxxxx--
```
