---
title: "Sélection de plateforme"
description: "Rationalisez le flux de sélection de plateforme pour augmenter la conversion"
---

L'étape de sélection de plateforme est le moment crucial où vos clients doivent facilement trouver le logiciel qu'ils utilisent et sont prêts à se connecter. Bien faire les choses est essentiel pour donner à vos clients les meilleures chances de connectivité.

:::info Pourquoi c'est important

L'action qui est le plus positivement corrélée à une connexion réussie est un utilisateur cliquant sur une carte de nom de plateforme/intégration, avec une **augmentation de 50% de la conversion** si cela est fait. C'est le résultat d'un flux de sélection de plateforme bien exécuté.

:::

## Expliquez ce qui va se passer

Par exemple, faites-leur savoir qu'après la sélection de la plateforme, ils seront redirigés vers un site web tiers pour entrer leurs identifiants afin d'authentifier et d'autoriser l'accès aux données, et une fois qu'ils l'auront fait, ils seront redirigés vers votre application.

## Regroupez les intégrations disponibles par catégorie

Les intégrations disponibles doivent être regroupées par catégorie lorsqu'il existe plusieurs types disponibles pour se connecter, ce qui facilite la détermination et la connexion de leurs comptes pour l'utilisateur. Par exemple :

- Données comptables
- Données commerciales (ce qui peut être plus utile de désigner comme « Revenus », « Flux de revenus » ou similaire selon la terminologie utilisée dans votre produit)
- Données bancaires (ou « Comptes bancaires » dans le contexte de « Connectez vos comptes bancaires »)

## Utilisez une image de marque d'intégration précise

Pour établir un sentiment de familiarité et de certitude chez les utilisateurs, assurez-vous d'afficher le nom et le logo corrects de l'intégration, ainsi que l'adresse du site web vers laquelle les utilisateurs naviguent lorsqu'ils utilisent leur logiciel.

Nous recommandons [d'utiliser les éléments fournis par Codat](/auth-flow/build/build-your-own-authorization-journey#step-2-display-a-list-of-integrations-for-your-users-to-select-including-the-integration-name-and-logo) car ils répondent aux exigences des intégrations prises en charge.

:::caution

Assurez-vous d'afficher le nom complet de l'intégration pour éviter toute confusion, c'est-à-dire QuickBooks Online vs QuickBooks Desktop, Sage Accounting vs Sage Intacct.

:::

## Incluez une fonction de recherche

Permettez de rechercher des intégrations via une barre de recherche, surtout si vous ne pouvez pas les afficher sur un seul écran.

## Fournissez des alternatives à la sélection d'une plateforme

Assurez-vous de gérer le chemin « malheureux » dans le scénario où un utilisateur ne peut pas trouver sa plateforme dans la liste fournie. Par exemple, si la plateforme d'un utilisateur n'est pas disponible, offrez un moyen de partager ses données via le téléchargement de fichiers.

## Créez un flux non linéaire

Dans de nombreuses organisations, différentes personnes sont les gardiens des différentes plateformes utilisées au sein de leur entreprise. Cela signifie que la personne qui consulte votre parcours de connexion peut ne pas avoir les droits ou connaître les détails de connexion au logiciel demandé pour se connecter. Vous devez donc leur donner la possibilité de mettre le flux en pause jusqu'à ce qu'ils obtiennent l'entrée nécessaire ou de partager le flux avec d'autres utilisateurs.

Si votre cas d'utilisation permet ou nécessite plusieurs connexions, assurez-vous que l'utilisateur peut naviguer et voir différentes intégrations à tout moment, créant une vue « sans état ». C'est important car cela donne la liberté aux utilisateurs de choisir ce qu'ils veulent connecter et quand ils veulent le faire.

## Gérez plusieurs connexions

Assurez-vous qu'il existe un moyen d'ajouter plusieurs connexions si votre cas d'utilisation en bénéficiera ou nécessite plusieurs types de connexion, c'est-à-dire en incluant un bouton « Ajouter un autre » dans la même vue. De plus, il est utile de :

- Afficher l'état des connexions existantes, par exemple en affichant « Connecté ✔️ » à côté du nom et du logo de la plateforme connectée
- Mettre en évidence les plateformes précédemment sélectionnées qui sont en attente d'autorisation

Voir [ici](/auth-flow/authorize-hosted-link#managing-existing-users-with-pending-connections) pour plus de détails sur les connexions avec un statut `pendingAuth` et [ici](/using-the-api/querying#for-companies-whose-status-is-pending-with-data-connection-established) sur la création d'une requête pour trouver ces entreprises.

:::info Pourquoi utiliser Link ?

[L'utilisation de Link de Codat pour l'autorisation](/auth-flow/overview) vous permet de :

- Communiquer pour renforcer la confiance avec vos clients en spécifiant le message qui apparaît sur le panneau de gauche
- Exiger une action pour consentir au partage de données
- Fournir divers détails de contact de support

Pour en savoir plus sur les différentes façons de personnaliser Link, lisez [Personnaliser votre Link](/auth-flow/customize/customize-link).

Vous pouvez également [créer votre propre parcours d'autorisation](/auth-flow/build/build-your-own-authorization-journey).
:::

---

## Lire ensuite

- Apprenez à [améliorer le parcours client lorsqu'une connexion persistante est requise](/auth-flow/optimize/connection-management)
