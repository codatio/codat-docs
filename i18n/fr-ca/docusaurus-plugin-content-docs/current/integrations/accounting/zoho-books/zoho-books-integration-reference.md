---
title: "Référence de l'intégration Zoho Books"
description: "Informations à connaître lors de la synchronisation de données avec Zoho Books."
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration Zoho Books de Codat.

## Bill payments

Les Bill Payments sont mappés à partir des Vendor Payments et Vendor Credits dans Zoho Books.

Lors de la synchronisation des Bill payments avec Zoho Books :

- Le champ `paymentMethodRef` n'est pas rempli.
- Les transactions de journal manuel ne sont pas prises en charge. Zoho Books ne prend pas en charge la modification d'AR ou AP en utilisant des journaux manuels.
- Les transactions de remise ne sont pas prises en charge.

  Zoho Books ne prend pas en charge le traitement des remises sur les Vendor Payments au moment du paiement (par exemple, les remises de règlement anticipé). Au lieu de cela, les utilisateurs ajoutent un Vendor Credit pour le montant de la remise au paiement de facture.

## Tracking categories

Les catégories de suivi sont prises en charge pour les types de données suivants :

- Invoices (lecture et écriture)
- Credit Notes (lecture)
- Bills (lecture et écriture)

Les catégories de suivi sont mappées à partir des _Reporting Tags_ dans Zoho Books. [Reporting Tags](https://www.zoho.com/uk/books/help/settings/reporting-tags.html) sont créés en utilisant un _Tag Name_ et une ou plusieurs _Tag Options_ enfants. Le Tag Name et les Tag Options sont lus dans Codat comme des catégories de suivi distinctes. Les identifiants de catégorie de suivi sont attribués en fonction des valeurs des champs `tag_id` (pour Tag Name) et `tag_option_id` (pour Tag Options).
