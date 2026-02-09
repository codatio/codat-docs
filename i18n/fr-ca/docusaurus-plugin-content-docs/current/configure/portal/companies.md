---
title: "Gestion des entreprises dans le portail"
sidebar_label: Via le portail
description: "Apprenez à gérer les entreprises, leurs connexions et leurs données via le portail"
createdAt: "2019-04-07T19:24:16.018Z"
updatedAt: "2022-10-06T11:36:02.635Z"
---

Dans le portail Codat, cliquez sur **Entreprises** dans la barre de navigation pour afficher la liste de vos entreprises créées. Si vous vous êtes inscrit avec l'essai gratuit, vous verrez qu'une entreprise a déjà été créée pour vous avec des données sandbox.

À partir de là, vous pouvez :

- [Ajouter une nouvelle entreprise](/configure/portal/companies#add-a-new-company).
- Copier votre [URL Link](/auth-flow/authorize-hosted-link#use-the-hosted-link-url) pour permettre à vos clients de partager leurs données via Link.
- [Récupérer les URL Link pour les entreprises existantes](/auth-flow/authorize-hosted-link#use-the-hosted-link-url) pour leur permettre d'autoriser des connexions de données supplémentaires ou de réautoriser les connexions dissociées si nécessaire.
- Afficher les détails et le statut des entreprises existantes.
- Rechercher une entreprise créée précédemment en cliquant sur l'icône de recherche.
- Gérer les [connexions](/core-concepts/connections) existantes de l'entreprise.
- [Supprimer des entreprises](/configure/portal/companies#delete-a-company).

## Ajouter une entreprise

### 1. Créer une nouvelle entreprise

Pour créer une nouvelle entreprise, utilisez le bouton **Nouvelle entreprise** dans le coin supérieur droit de la vue **Entreprises**. Dans la boîte de dialogue **Ajouter une nouvelle entreprise**, entrez le nom de l'entreprise de votre client et sélectionnez **Ajouter**.

Vous pouvez renommer une entreprise à tout moment. Cela n'affecte pas la connexion. À côté du nom de l'entreprise, cliquez sur l'icône « crayon » et mettez à jour le nom dans le champ de texte qui apparaît. **Enregistrez** les modifications.

### 2. Autoriser l'entreprise

Pour lier une entreprise via le portail, suivez les instructions [ici](/auth-flow/authorize-hosted-link#use-the-hosted-link-url).

Vous pouvez également [en savoir plus sur Link](/auth-flow/overview).

### 3. Mettre en file d'attente l'actualisation des données

Vous pouvez déclencher l'actualisation des données pour demander des données en dehors de la fréquence de synchronisation préconfigurée.

1. Accédez à **Entreprises** et sélectionnez l'entreprise que vous souhaitez synchroniser.
2. Cliquez sur l'icône **Actualiser les données**.
3. Pour voir la progression et les résultats de la synchronisation, cliquez sur **Historique de lecture**. L'historique est mis à jour en temps réel.
4. Une fois l'actualisation terminée, vous pouvez consulter les dernières données.

La fréquence de synchronisation configurée reprend à partir de l'heure de la dernière synchronisation réussie.

La page **<a class="external" href="https://app.codat.io/settings/data-types" target="_blank">Paramètres de type de données</a>** dans le portail Codat permet aux utilisateurs de définir une fréquence de synchronisation par défaut pour chaque type de données afin de garantir que les données de vos clients restent à jour. Les options disponibles sont _horaire_, _quotidienne_, _hebdomadaire_ et _mensuelle_.

Si vous avez besoin d'un calendrier plus spécifique, vous [mettez en file d'attente la synchronisation des données en utilisant l'API de Codat](/using-the-api/queueing-data-syncs).

Pour plus d'informations sur la configuration de vos paramètres de synchronisation, veuillez consulter [Paramètres de type de données](/core-concepts/data-type-settings).

:::info Expiration du jeton et désautorisation de la connexion
Pour certains logiciels de comptabilité, si vous ne synchronisez pas les données d'une entreprise pendant une période significative (entre 60 et 100 jours), l'autorisation est révoquée. Dans ce cas, [fournissez à votre client une nouvelle URL Link](/auth-flow/authorize-hosted-link#use-the-hosted-link-url) afin qu'il puisse renouveler votre accès à ses données.
:::

## Gérer les entreprises existantes

### La page Entreprises

Dans la vue des entreprises, vous pouvez voir les informations suivantes pour chaque entreprise :

- Nom de l'entreprise
- ID de l'entreprise
- Nom de l'utilisateur du portail qui a créé l'entreprise
- Date et heure de la création de l'entreprise
- Date et heure de la dernière lecture des données
- Connexions de données et leurs [statuts](/configure/portal/companies#data-connection-statuses)

#### Statuts des connexions de données

- _Vert_ indique que la connexion est liée et que les données peuvent être actualisées à partir de la connexion
- _Rouge_ indique que la connexion a une erreur ou a été désautorisée (votre client devra réautoriser la connexion)
- _Mauve_ indique que la connexion a été créée mais n'a pas encore été autorisée
- _Gris_ indique que la connexion a été dissociée (votre client devra réautoriser la connexion)

Cliquer sur une connexion de données vous permet de gérer la connexion et de voir les erreurs de liaison.

### Afficher les données de l'entreprise

Cliquez sur une entreprise pour accéder aux informations la concernant :

- Un **Résumé** bref qui inclut les revenus, le bénéfice d'exploitation et les capitaux propres de l'entreprise, ainsi qu'un journal d'activité.
- Le menu **Gérer les connexions** qui vous permet de copier l'URL Link et de dissocier ou supprimer une connexion existante.
- Les **Données** et l'**Historique des données** de l'entreprise, y compris [l'historique des lectures de jeux de données et leurs statuts](/core-concepts/status), et les fichiers téléversés.
