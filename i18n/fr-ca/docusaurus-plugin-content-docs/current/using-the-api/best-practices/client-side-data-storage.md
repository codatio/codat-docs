---
title: "Mise en œuvre du stockage de données local"
description: "Conseils et recommandations sur le stockage, la manipulation et la consommation des données Codat"
sidebar_label: "Stockage de données local"
---

Vous pouvez stocker les données JSON récupérées depuis l'API Codat de plusieurs façons différentes. Nous avons décrit certaines des options pour vous, mais le bon choix dépend de vos exigences et des outils et compétences dont vous disposez.

:::tip Soutien pour le stockage de données
Si vous avez des questions spécifiques basées sur votre cas d'utilisation, veuillez contacter votre interlocuteur chez Codat.
:::

## Options de stockage de données

Nous conseillons de stocker localement les données récupérées depuis l'API, car il est beaucoup plus rapide de les récupérer depuis le stockage local que depuis l'API Codat. Vous pouvez utiliser l'une des options de stockage suivantes.

1. **Base de données relationnelle**

   Dans une base de données relationnelle, telle que SQL Server ou MySQL, vous pouvez stocker les champs de données extraits du JSON dans des tables séparées avec des colonnes prédéfinies. Cela permet des requêtes sophistiquées, mais signifie que vous devez définir un schéma rigide pour les données et créer des relations entre les tables.

2. **Base de données NoSQL**

   Les bases de données NoSQL, telles que MongoDB ou CouchDB, peuvent stocker les documents JSON tels quels sans nécessiter de schéma prédéfini. Chaque document peut avoir sa propre structure, et la base de données peut indexer les champs dans les documents pour permettre des requêtes efficaces.

3. **Stockage basé sur des fichiers**

   Vous pouvez stocker les données JSON dans des fichiers sur disque. Cette approche prend en charge des requêtes très limitées, mais est utile lorsque vous souhaitez une solution simple et portable, ou lorsque vous devez échanger des données avec d'autres systèmes qui attendent des fichiers JSON.

## 💡 Conseils et pièges

- Considérez les [paramètres de synchronisation](/core-concepts/data-type-settings) configurés pour un type de données spécifique lors de la détermination de la fréquence de récupération des données.

  Par exemple, si Codat synchronise les données de factures hebdomadairement, il n'y a aucun intérêt à récupérer ces données depuis l'API Codat quotidiennement.

- Stockez la date et l'heure de récupération des données depuis l'API Codat. Vous limitez les récupérations suivantes uniquement aux données modifiées depuis la récupération précédente en utilisant les [dates de modification](/using-the-api/modified-dates) pour contrôler la récupération.

- Codat stocke la plupart des données dans une forme relationnelle, mais il n'est peut-être pas nécessaire de suivre tous les chemins relationnels.

  Par exemple, si vous avez besoin de données de factures, mais pas des détails du client associés, vous n'avez pas besoin de les récupérer séparément car les factures contiennent déjà un `customerId`.

- Utilisez l'identifiant (également appelé clé) inclus dans nos types de données pour identifier correctement les données lors de leur stockage local. Cela aidera à associer facilement ces données aux enregistrements sources dans Codat.

- Vérifiez la portée de l'identifiant. Par exemple, l'identifiant d'une facture est la propriété `id` dans la portée d'une entreprise individuelle, donc une facture devrait être stockée avec un identifiant `companyId` + `invoiceId`.
