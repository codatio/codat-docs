---
title: "FAQ QuickBooks Online"
description: "Questions fréquemment posées sur notre intégration QuickBooks Online."
sidebar_label: FAQ
---

## Comment la taxe de vente est-elle gérée pour les entreprises américaines qui utilisent QuickBooks ?

Extrait de QuickBooks - \*Les entreprises QuickBooks Online américaines créées après le 10 novembre 2017 gèrent les calculs de taxe de vente via un moteur de taxe de vente automatisé (AST). La taxe de vente est déterminée en fonction de l'adresse source et de l'adresse de destination. L'adresse source est l'adresse légale de l'entreprise telle qu'elle est disponible dans les paramètres de l'entreprise. L'adresse de destination est l'adresse de livraison fournie sur la transaction de vente. Si aucune adresse de livraison n'est fournie, l'adresse de l'entreprise est considérée comme l'adresse de destination. La possibilité de personnaliser l'adresse source en fonction de l'emplacement d'une transaction donnée n'est pas prise en charge.

## Comment le moteur de taxe de vente automatisé (AST) de QuickBooks affecte-t-il l'écriture de données dans QBO ?

Au niveau de la ligne d'une facture, d'un compte ou d'une note de crédit, le statut imposable de chaque ligne est noté comme `TAX` ou `NON`. Les objets TaxCode dans ce contexte sont appelés pseudo codes fiscaux.

Un objet TaxCode est utilisé pour suivre le statut imposable ou non imposable des produits, services et clients. Les utilisateurs peuvent attribuer un code de taxe de vente à chacun de leurs produits, services et clients en fonction du statut imposable ou non imposable de leurs clients dans QBO, via l'API Codat.

Dans QBO, les utilisateurs peuvent ensuite utiliser ces codes pour générer des rapports qui fournissent des informations aux agences fiscales sur le statut imposable ou non imposable de certaines ventes.

Si une entreprise américaine a activé l'option de taxe de vente automatisée (AST) dans QBO, alors la taxe est calculée automatiquement par QBO. Le 'taxAmount' est ignoré s'il est fourni dans une demande d'envoi.

L'AST est pris en charge par les types de données Codat suivants : Invoices, Credit Notes et Direct Incomes.

Lorsque le point de terminaison Options est appelé pour l'un de ces types de données et une entreprise compatible AST, alors le `taxAmount` est retourné comme non disponible. Le statut AST de l'entreprise est indiqué dans un champ `information` dans le corps de la réponse ; par exemple :

```json
"validation": {
  "information": [
    {
        "details": "Automated Sales Tax is enabled for this company."
    }
  ]
}
```

## QuickBooks Online (FR) est-il pris en charge ?

:::caution QBO n'est plus disponible en France
Notez que QuickBooks Online (FR) ne sera plus disponible après le 31 décembre 2023, comme communiqué par [Intuit](https://quickbooks.intuit.com/learn-support/fr-fr/help-article/account-management/faq/L5GgPEpLf_FR_fr_FR).
:::

Oui. Codat prend en charge la même fonctionnalité pour QuickBooks Online France (FR) que pour QuickBooks Online UK et US.

Les entreprises de la région française exigent que des _codes de journal_ (représentés dans QBO comme des objets `JournalCode`) soient attribués aux écritures de journal. Par conséquent, lors de l'écriture d'écritures de journal dans une entreprise QBO (FR), Codat attribue à chaque écriture de journal un code de journal, en choisissant tout code de journal qui a un `Type` de `Others` ou `Autres`. Si un code de journal de `Type` `Others` ou `Autres` n'existe pas, une erreur de validation est retournée.

L'objet Journal Entries dans le modèle de données comptables de Codat n'a pas de champ pour le code de journal.

:::caution Erreurs de validation des numéros de compte
Vous pouvez remarquer des erreurs de validation lors de la création de nouveaux comptes pour QBO Fr via notre API. Cela est dû au fait que les numéros de compte doivent suivre un format strict. Assurez-vous que votre attribut `nominalCode` est conforme à ces exigences :

- La longueur doit être comprise entre 6 et 20 caractères
- Doit commencer par le numéro de compte de la liste des catégories principales
- Nom limité aux caractères alphanumériques
  :::

## QuickBooks Self Employed est-il pris en charge ?

Malheureusement, QuickBooks Self Employed utilise une API différente de QuickBooks Online. Cette API n'est pas rendue publique par Intuit et n'est donc pas actuellement prise en charge par Codat.

## Comment Codat gère-t-il les transactions « Expense » de QuickBooks Online

QuickBooks Online utilise les _expenses_ pour enregistrer les achats qui sont payés immédiatement. Lorsqu'ils sont enregistrés auprès d'un [fournisseur](/accounting-api#/schemas/Suppliers), ils sont rendus disponibles dans les ensembles de données [Bills](/accounting-api#/schemas/bills) et [Bill payments](/accounting-api#/schemas/billpayments) de Codat.

## Pourquoi ne puis-je pas synchroniser les bons de commande d'un compte de démonstration QuickBooks Online ?

Intuit ne rend les Purchase Orders disponibles que sur les abonnements payants de QuickBooks Online, ils ne sont donc pas disponibles sur les comptes de démonstration ou d'essai gratuits.

## Catégories de suivi

Dans Codat, les « classes » et « locations » de QBO sont mappées aux [catégories de suivi](/accounting-api#/schemas/trackingcategories).

## Les tags QuickBooks sont-ils pris en charge ?

Dans QuickBooks Online, vous pouvez utiliser des tags de texte libre pour suivre vos transactions et obtenir des informations supplémentaires. Cependant, QBO n'expose pas ces tags via leur API, ils ne sont donc pas disponibles dans Codat.

## Pourquoi ne puis-je pas me connecter à QuickBooks Online ?

Dans QuickBooks Online, seuls les utilisateurs auxquels sont attribués les rôles `Primary Admin` ou `Company Admin` disposent des autorisations suffisantes pour connecter une application. Vérifiez que l'utilisateur qui complète le flux Codat Link a l'un de ces rôles attribués.
