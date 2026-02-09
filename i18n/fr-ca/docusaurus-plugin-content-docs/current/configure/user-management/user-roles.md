---
title: "Rôles d'utilisateur"
description: "Comprendre les différences clés et les fonctionnalités d'accès des rôles d'utilisateur Codat"
createdAt: "2019-02-20T11:14:06.974Z"
updatedAt: "2022-10-04T14:21:33.026Z"
---

Il existe quatre niveaux d'utilisateurs sur le système Codat qui ont accès à différentes fonctionnalités du système Codat.

- Intégration
- Analyste
- Développeur
- Administrateur

## Intégration

Les utilisateurs _Intégration_ ont la capacité d'ajouter des entreprises au portail Codat et de lier ces entreprises avec des sources d'informations financières. Ils ont la capacité de voir quand les ensembles de données ont été liés mais ne peuvent pas voir les informations téléversées.

## Analyste

Les utilisateurs _Analyste_ ont toutes les capacités des utilisateurs _Intégration_ (ajout et liaison d'entreprises) ainsi que la capacité de voir les données financières qui sont téléversées, de voir les consommateurs de webhook qui ont été configurés et de résoudre les événements déclenchés dans le portail.

## Développeur

Les utilisateurs _Développeur_ ont accès à toutes les fonctionnalités disponibles dans Codat, sauf la capacité de créer, modifier et supprimer d'autres utilisateurs. Cela inclut toutes les capacités de l'utilisateur _Analyste_ ainsi que la possibilité de créer, modifier et supprimer des intégrations, des entreprises et des règles.

Les _Développeurs_ peuvent également configurer votre flux d'autorisation, votre organisation et les paramètres de type de données, et gérer les dépréciations à venir.

## Administrateur

Les utilisateurs _Administrateur_ ont un accès complet à toutes les fonctionnalités disponibles dans le portail Codat. Ils sont les seuls utilisateurs qui peuvent ajouter, modifier et supprimer d'autres utilisateurs de votre compte. Cela inclut tous les niveaux d'utilisateurs, donc tout _Administrateur_ peut supprimer d'autres utilisateurs _Administrateur_, _Développeur_, _Analyste_ et _Intégration_.

### Résumé des rôles d'utilisateur

| Action                                                     | Intégration | Analyste | Développeur | Administrateur |
| ---------------------------------------------------------- | ----------- | -------- | ----------- | -------------- |
| Ajouter des entreprises                                    | ✔           | ✔        | ✔           | ✔              |
| Modifier des entreprises                                   | ✔           | ✔        | ✔           | ✔              |
| Supprimer des entreprises                                  |             | ✔        | ✔           | ✔              |
| Ajouter des connexions, voir leur statut et les URL Link   | ✔           | ✔        | ✔           | ✔              |
| Ajouter ou retirer des produits des entreprises            | ✔           | ✔        | ✔           | ✔              |
| Gérer (supprimer et dissocier) les connexions             |             |          | ✔           | ✔              |
| Voir les données d'entreprise contribuées (Portail)       |             | ✔        | ✔           | ✔              |
| Voir les données d'entreprise contribuées (API)           | ✔           | ✔        | ✔           | ✔              |
| Téléverser des fichiers au nom d'une entreprise           | ✔           | ✔        | ✔           | ✔              |
| Gérer et voir les webhooks                                 |             |          | ✔           | ✔              |
| Configurer Link                                            |             |          | ✔           | ✔              |
| Gérer les intégrations                                     |             |          | ✔           | ✔              |
| Gérer les paramètres de type de données                   |             |          | ✔           | ✔              |
| Gérer les dépréciations à venir                           |             |          | ✔           | ✔              |
| Gérer d'autres paramètres                                 |             |          | ✔           | ✔              |
| Ajouter et mettre à jour des utilisateurs                 |             |          |             | ✔              |
