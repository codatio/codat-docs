---
title: "Créer ou mettre à jour des règles"
description: "Gérer les nouvelles règles et celles existantes via le portail Codat"
---

:::caution Nouveau service webhook disponible

Cette page décrit la fonctionnalité de notre offre webhook héritée. [En savoir plus](/using-the-api/webhooks/overview) sur notre nouveau service webhook et voir comment vous pouvez [migrer](/using-the-api/webhooks/migration-guide) pour l'utiliser à la place.

:::

:::info Permissions requises

Vous devez être un utilisateur [Administrateur](/configure/user-management/user-roles#administrator) ou [Développeur](/configure/user-management/user-roles#developer) pour créer des règles. Les utilisateurs [Analyste](/configure/user-management/user-roles#analyst) peuvent voir les événements mais ne peuvent pas créer ou modifier des règles.

:::

## Créer une nouvelle règle

1. Connectez-vous au [portail Codat](https://app.codat.io).
2. Dans la barre de navigation, sélectionnez **Paramètres > Webhooks > Règles**.
3. Sélectionnez **Créer une nouvelle règle**.
   La fenêtre modale **Créer une nouvelle règle** s'affiche.
4. Dans le menu déroulant **Type de règle**, sélectionnez l'événement dont vous souhaitez être notifié. Voir [Types de règles](/using-the-api/webhooks/legacy/core-rules-types) pour plus de détails sur les événements qui déclenchent un webhook et les détails inclus dans la notification.
5. Dans le menu déroulant **Entreprise**, sélectionnez l'entreprise que vous souhaitez surveiller, ou sélectionnez **Toutes les entreprises** pour que toutes les entreprises déclenchent cette règle.
6. Par défaut, les webhooks déclenchés par les règles sont affichés dans le portail Codat, mais vous pouvez également choisir de les envoyer par courriel ou de les publier vers un webhook. Pour ce faire :
   - Dans la boîte **Adresses courriel à notifier**, entrez une liste d'adresses courriel séparées par des virgules qui doivent recevoir la notification.
   - Dans la boîte **URL de notification webhook**, entrez l'URL vers laquelle vous souhaitez publier les détails du webhook. Voir [Types de règles](/using-the-api/webhooks/legacy/core-rules-types) pour plus de détails.
7. Sélectionnez **Enregistrer les modifications**.

## Mettre à jour une règle existante

Vous pouvez mettre à jour l'entreprise que vous souhaitez surveiller, ou les méthodes de notification que vous souhaitez utiliser pour une règle à tout moment.

1. Suivez les étapes 1 et 2 dans [Créer une nouvelle règle](/using-the-api/webhooks/legacy/core-rules-create#create-a-new-rule).
2. Sur la page **Règles**, trouvez la règle qui vous intéresse et cliquez sur son icône **Modifier**.
3. Mettez à jour la règle selon vos besoins.
4. Sélectionnez **Enregistrer les modifications**.
