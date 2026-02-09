---
title: "Intégrité des données"
description: "Découvrez la fonctionnalité qui fait correspondre les données comptables modifiables avec les données bancaires immuables pour augmenter la confiance dans les données financières"
sidebar_label: "Aperçu"
image: "/img/banners/social/lending.png"
draft: true
---

Les données comptables sont riches et contextuelles, mais elles sont saisies par l'utilisateur et sont donc potentiellement ouvertes à la manipulation et à la fraude. Les données bancaires manquent de contexte et de signification, mais elles proviennent directement d'une source de confiance ou d'un tiers et sont immuables.

Notre fonctionnalité Intégrité des données fait correspondre automatiquement ces sources de données pour vous. Elle fait correspondre les comptes bancaires et les transactions rapportés dans une source de données comptables avec les comptes bancaires et les transactions rapportés dans les sources de données bancaires.

L'intégrité des données aide les prêteurs à valider l'exactitude des comptes financiers et à vérifier si une fraude a pu se produire.

L'API Intégrité des données se compose des endpoints suivants, appelés individuellement pour chaque type de données :

- L'endpoint [Statut](/lending-api#/operations/get-data-integrity-status) expose les informations nécessaires pour interroger utilement les résultats.
- L'endpoint [Résumés](/lending-api#/operations/get-data-integrity-summaries) expose les résultats récapitulatifs, interrogeables de manière granulaire.
- L'endpoint [Détails](/lending-api#/operations/list-data-integrity-details) expose les informations enregistrement par enregistrement, interrogeables en utilisant les mêmes paramètres que l'endpoint de résumé.

## Comment faisons-nous correspondre les données?

Les entreprises doivent avoir des sources de données comptables et bancaires liées.

L'intégrité des données est basée sur la correspondance entre une ou plusieurs transactions bancaires dans la source bancaire et une seule transaction bancaire dans la source comptable. L'algorithme de correspondance fait correspondre selon les types de données synchronisés.

Pour utiliser cette fonctionnalité, les types de données suivants doivent être activés :

- _banking-accounts_ pour la source de données bancaires.
- _banking-transactions_ pour la source de données bancaires.
- _bankAccounts_ pour la source de données comptables.
- _accountTransactions_ pour la source de données comptables.

## Correspondance

L'algorithme de correspondance fera correspondre _accountTransactions_ (comptable) avec _banking-transactions_ (bancaire) et _bankAccounts_ (comptable) avec _banking-accounts_ (bancaire).

La logique de correspondance utilise une approche en plusieurs étapes qui libère progressivement les restrictions de mappage. Elle commence la comparaison en recherchant des transactions qui correspondent à des conditions strictes et assouplit ces conditions à chaque étape de comparaison pour permettre une correspondance plus flexible. Cela garantit la précision et la fiabilité maximales des résultats de correspondance fournis.

Les données de transaction utilisées pour comparer dans la logique sont :

- Montant de la transaction
- Devise
- Date de compensation
- Description
- Données du compte

Pour les comparaisons non textuelles (comme les dates et les nombres), la logique compare les valeurs pour les faire correspondre exactement ou dans un seuil.

Pour les comparaisons textuelles (comme la description du compte), une combinaison de la similarité de _Jaro-Winkler_ et du _coefficient de chevauchement_ (avec seuils) est utilisée pour comparer dans quelle mesure les valeurs de chaîne correspondent.

Dans le cas où l'entreprise a des comptes bancaires avec des devises différentes, ces transactions seront mises en correspondance avec une source comptable ayant la même devise. Pour ces entreprises, le pourcentage de correspondance sera moins précis.
