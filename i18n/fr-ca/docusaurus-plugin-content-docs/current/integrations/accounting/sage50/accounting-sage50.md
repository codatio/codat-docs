---
title: "Sage 50 Accounts (RU et Irlande) (sur site)"
slug: "accounting-sage50"
description: "Découvrez notre connecteur sur site Sage 50 (RU et Irlande)."
sidebar_label: Aperçu
---

Le connecteur sur site Codat Sage 50 Accounts (RU et Irlande) est une application Windows qui permet aux PME utilisant Sage 50 (RU et Irlande) de s'intégrer pleinement à la plateforme Codat.

## Image de marque, parcours de liaison et activation de l'intégration

Avant que vos utilisateurs PME puissent télécharger et installer le connecteur sur site, vous devrez effectuer les étapes suivantes dans le portail Codat.

Du point de vue de la PME, ils verront l'application du connecteur sur site comme étant détenue et marquée par vous plutôt que par Codat.

- Créez votre image de marque - elle sera utilisée sur le site de liaison et l'application du connecteur sur site.
- Optionnellement, configurez le flux Link Codat. Cela créera un lien de téléchargement pour le connecteur et fournira l'identifiant d'entreprise unique pour chacun de vos utilisateurs PME. Alternativement, vous pouvez choisir de créer cette fonctionnalité vous-même en lisant le point de terminaison de téléchargement et l'identifiant client de l'API Codat, par exemple pour l'offrir depuis votre propre site, ou pour implémenter un flux de travail spécifique, pour maintenir une apparence étroitement marquée, etc.
- Activez l'intégration du connecteur sur site (QBD/Sage 50 Accounts)

## Le connecteur sur site

- Le connecteur sera téléchargé par l'utilisateur PME dans le cadre du flux de liaison
- Le programme d'installation du connecteur nécessite des privilèges d'administrateur (droits d'administrateur) pour s'exécuter initialement
- L'utilisateur PME devra compléter quelques étapes simples pour terminer l'installation (voir le guide d'installation pour plus de détails) :
  - Coller leur numéro de licence unique (identifiant d'entreprise) - ceci est fourni à l'utilisateur pendant le parcours de liaison
  - Compléter quelques étapes simples pour pointer le connecteur vers le bon fichier de données du logiciel comptable
- Par la suite, le connecteur n'a besoin d'aucune autre interaction de l'utilisateur ou de privilèges d'administrateur
- Le connecteur s'exécute en tant que processus en arrière-plan
- Le connecteur démarre automatiquement après les redémarrages
- Toutes les mises à jour sont effectuées automatiquement et silencieusement
- Les demandes de synchronisation des données peuvent être faites à volonté et seront satisfaites dès qu'une machine est en ligne, par exemple lorsqu'elle est démarrée le matin
- Le connecteur dispose d'une interface utilisateur accessible depuis l'icône de la barre d'état système. Vos utilisateurs PME n'ont généralement pas besoin d'interagir avec elle, mais des fonctionnalités sont disponibles pour les utilisateurs avancés telles que l'ajout de connexions à plusieurs entreprises, la pause et l'instigation manuelle des synchronisations

## Exigences

Consultez [Exigences de Sage 50 Accounts](sage-50-requirements) pour en savoir plus sur les versions prises en charge et les exigences matérielles, logicielles, environnementales et réseau pour l'exécution du connecteur.

## Installer le connecteur

Consultez [Installer le connecteur Sage 50 Accounts](/integrations/accounting/sage50/installing-the-sage-50-connector) pour apprendre comment configurer et activer le connecteur.
