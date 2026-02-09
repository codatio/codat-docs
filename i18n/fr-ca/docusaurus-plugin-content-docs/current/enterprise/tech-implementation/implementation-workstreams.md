---
title: "Flux de travail impliqués dans l'implémentation"
description: "Détails des flux de travail clés à mobiliser pour assurer le succès de votre implémentation Codat"
sidebar_label: "Fonctions des flux de travail"
---

Cette page détaille les flux de travail essentiels requis pour assurer une implémentation fluide et efficace. En comprenant et en abordant ces flux de travail, votre organisation peut atteindre une sécurité robuste, une intégration rationalisée, un traitement optimal des données et une gestion efficace des intervenants internes et externes.

## Exigences de sécurité et de conformité

Assurer la sécurité et la conformité de votre intégration API sera une priorité pour vos équipes juridiques, de conformité et de données. Elles sont susceptibles de mener une évaluation approfondie des risques avant l'implémentation et pourraient rechercher les éléments suivants à livrer dans le cadre de celle-ci :

- Chiffrement des données sur les webhooks (tels que mTLS, HMAC)
- Méthodes d'authentification sécurisées (OAuth)
- Respect des réglementations industrielles pertinentes (telles que RGPD, HIPAA)
- Processus de surveillance et d'audit continus pour détecter et répondre aux menaces potentielles en temps réel

Engagez-vous avec ces intervenants tôt ou avant l'implémentation pour vous assurer que leurs exigences sont intégrées dans le plan de programme d'implémentation avec des ressources qualifiées de manière appropriée et un financement attribué.

| Entrées clés                                                                                  | Sorties clés                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Politique de gouvernance des données de votre organisation <br/> - Évaluation des risques technologiques tiers | - Chiffrement des webhooks <br/> - Méthode conforme pour l'ingestion, la rétention et le transfert de données <br/> - Méthode d'authentification sécurisée pour que les clients se connectent |

## Parcours d'intégration client front-end

La conception de parcours d'intégration client fluides est essentielle pour l'adoption et la satisfaction des utilisateurs.

Cela implique la création d'interfaces utilisateur intuitives, l'intégration des exigences des logiciels comptables et l'automatisation de la capture du consentement. Cela devrait être soutenu par des instructions et des conseils clairs tout au long du processus d'intégration pour minimiser les frictions et améliorer l'expérience utilisateur. Codat fournit des instructions de connexion détaillées sur notre [Centre d'aide](https://help.codat.io/).

| Entrées clés                                                                                                                                                                                                                          | Sorties clés                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Politique de confidentialité de votre organisation <br/> - Principes de conception de votre organisation <br/> - [Solution Link de Codat](/auth-flow/overview) <br/> - [Solution de gestion des connexions de Codat](/auth-flow/optimize/connection-management) | - Conception du parcours client <br/> - Évaluation de l'impact sur la confidentialité des données <br/> - Stratégie de test d'acceptation utilisateur (UAT) <br/> - Stratégie de communications externes / clients |

## Parcours des collègues

Soutenir vos équipes internes lors de leur adaptation à la nouvelle intégration API est essentiel pour l'efficacité opérationnelle.

| Activités clés                                                                                                                                                                                                                                                  | Entrées clés | Sorties clés                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| - Fournir des programmes de formation complets <br/> - Développer une documentation et des supports de soutien conviviaux <br/> - Configurer des canaux de support dédiés <br/> - Favoriser une boucle de rétroaction pour améliorer continuellement l'expérience interne en fonction des commentaires des collègues |            | - Conception du parcours des collègues <br/> - Stratégie de communications internes |

## Approche architecturale

L'établissement d'une approche architecturale robuste implique la sélection et l'intégration de votre propre interface utilisateur (UI) ou d'une interface tierce qui peut efficacement consommer et afficher les données externes.

| Activités clés                                                                                                                                                                                                                 | Entrées clés                                                                                | Sorties clés                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| - Évaluer les options d'interface utilisateur pour la compatibilité et l'évolutivité <br/> - Concevoir une architecture flexible et évolutive <br/> - Assurer une intégration API transparente <br/> - Effectuer des tests approfondis pour garantir la précision des données et les performances | - Logiciel / UI tiers <br/> - Schéma de données interne <br/> - Évaluation de l'impact sur le système | - Diagramme d'architecture <br/> - Stratégie d'environnement <br/> - Stratégie de test d'intégration système (SIT) |

## Ingestion de données et approche de partage de données interne

Une ingestion de données efficace et un partage de données interne sont essentiels pour maximiser la valeur des données externes.

| Activités clés                                                                                                                                                                                            | Entrées clés                                                                                      | Sorties clés                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| - Développer des pipelines d'ingestion de données automatisés <br/> - Assurer la qualité et la cohérence des données <br/> - Configurer des solutions de stockage de données sécurisées et efficaces <br/> - Implémenter des protocoles pour le partage de données interne | - Plateforme cloud préférée de votre organisation <br/> - Outils de données préférés de votre organisation | - Diagramme d'architecture <br/> - Plan d'ingestion <br/> - Plan de déploiement Test vers Prod |

## Cartographie des produits

La cartographie des données externes à vos produits, tels que les modèles de crédit pour les prêts, nécessite une planification et une exécution méticuleuses.

| Activités clés                                                                                                                                                                                                                                                      | Entrées clés                                                 | Sorties clés                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------- |
| Spécifique au cas d'utilisation et à la solution, par exemple : <br/> - Analyser les sources de données externes pour identifier les points de données pertinents <br/> - Développer des algorithmes et des modèles pour intégrer les données dans les produits existants <br/> - Affiner continuellement les modèles en fonction des performances et des commentaires | - Feuille de route produit <br/> - Modèle de crédit de votre organisation | - Conception de solution <br/> - Stratégie UAT |

## Configuration du logiciel comptable

Chaque logiciel comptable a son propre processus de configuration de l'intégration qui varie en complexité. De plus, certains fournisseurs de logiciels exigent la mise en place d'accords commerciaux. Codat vous guidera à travers le processus pour activer votre intégration pour un lancement à grande échelle.

| Activités clés                                                                                                                                                                                                              | Entrées clés                                                            | Sorties clés                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| - Configurer les portails développeurs des logiciels comptables <br/> - Récupérer les clés API <br/> - Compléter les questionnaires requis par le fournisseur <br/> - Assurer la conformité avec les exigences d'implémentation technique et les meilleures pratiques | - Gestionnaire de mots de passe avec capacité MFA <br/> - Boîte mail d'équipe dédiée | - Accords commerciaux <br/> - Intégrations conformes <br/> - Stratégie de test d'intégration système (SIT) <br/> - Stratégie d'environnement |
