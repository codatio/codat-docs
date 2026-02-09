---
title: "Intégration Zapier"
description: "Créez vos propres flux de travail de notification déclenchés par nos webhooks"
---

import ZapierEmbed from "@components/ZapierEmbed";

## Aperçu

L'application [Zapier](https://zapier.com/apps/Codat/integrations) de Codat expose tous les [webhooks Codat](/using-the-api/webhooks/event-types) en tant que _déclencheurs_. Cela signifie que vous pouvez commencer à créer des flux de travail par-dessus Codat sans écrire une seule ligne de code.

Quelques cas d'utilisation simples pourraient inclure :

- Publier un message sur Slack ou par courriel chaque fois qu'une nouvelle entreprise a partagé des données.
- Publier un message lorsque des erreurs de synchronisation surviennent.
- Ajouter automatiquement les entreprises que vous intégrez à un tableur.

## Qu'est-ce que Zapier?

[Zapier](https://zapier.com/apps/Codat/integrations) fournit des flux de travail sans code qui vous permettent de connecter Codat à plus de 2 000 autres applications web. Ces connexions automatisées sont appelées des Zaps. Vous pouvez les configurer en quelques minutes sans coder pour automatiser vos tâches quotidiennes et créer des flux de travail entre des applications qui ne seraient autrement pas connectables.

Chaque Zap se compose de deux parties : un **déclencheur** qui détermine la condition de départ du flux de travail (Si X se produit dans la Source A...) et une **action** qui se produit dans une autre application en conséquence (...faire Y dans la Cible B).

Avec notre application [Zapier](https://zapier.com/apps/Codat/integrations), vous pouvez utiliser nos événements webhook comme déclencheurs et piloter des actions dans tous les outils que vous utilisez - de Google Sheets à SalesForce.

:::tip En savoir plus
Vous pouvez en apprendre davantage sur les Zaps dans la [propre documentation de Zapier](https://zapier.com/apps/email/integrations/triggerapp?utm_source=codat-docs).
:::

## Prérequis

Pour créer vos propres flux de travail, vous avez besoin de :

- **Un compte Zapier** que vous pouvez [créer gratuitement](https://zapier.com/sign-up).
- **Un accès Administrateur ou Développeur** à votre instance Codat.

## Créer votre flux de travail

Accédez à [Zapier](https://zapier.com/app/zaps) et suivez les étapes ci-dessous pour créer votre propre flux de travail.

### Configurer le déclencheur

1. Dans [Zapier](https://zapier.com/app/zaps), sélectionnez **Créer > Zaps** pour démarrer un nouveau Zap et donnez-lui un nom approprié.

2. Cliquez sur **Déclencheur** pour sélectionner un événement qui démarre votre Zap, recherchez _Codat_ et cliquez sur la tuile pour sélectionner.

3. Choisissez le déclencheur _Receive Webhook Messages_ dans le menu déroulant **Événement**.

4. Cliquez sur **Continuer**, puis **Se connecter** et connectez-vous à Codat en utilisant votre identifiant client et votre clé d'intégration Zapier.

Pour copier votre **identifiant client**, utilisez le menu déroulant de sélection de client dans le [Portail Codat](https://app.codat.io/).
![Image](/img/use-the-api/webhooks-zapier-integration-client-selector.png)

Pour obtenir votre **clé d'intégration Zapier** : - Récupérez votre en-tête d'autorisation depuis **Développeurs > Clés API** dans le [Portail Codat](https://app.codat.io/). Vous pouvez utiliser une clé API existante ou en créer une nouvelle spécifiquement pour cette intégration. - En utilisant notre endpoint [Rotation de la clé Zapier](https://docs.codat.io/platform-api#/operations/rotate-zapier-key), collez l'en-tête d'autorisation dans le champ `Authorization` et appuyez sur **Envoyer la requête API**. - Utilisez la `key` retournée dans le corps de la réponse comme clé d'intégration Zapier.

:::caution Limitations multi-utilisateurs
Pour chaque instance Codat, vous ne pouvez avoir qu'une seule clé d'intégration Zapier active. La génération d'une nouvelle clé invalide la précédente. Pour contourner cela, vous pouvez : - Avoir un seul utilisateur qui gère votre intégration Zapier. - Ajouter votre clé à un fournisseur de stockage de mots de passe sécurisé et partager la clé avec votre équipe.
:::

5. Choisissez le type d'événement webhook que vous souhaitez utiliser comme déclencheur du flux de travail et cliquez sur **Continuer**.

6. Testez le déclencheur et cliquez sur **Continuer avec l'enregistrement sélectionné** une fois le test réussi.

   Si vous constatez qu'aucun message n'existe dans Codat correspondant au type d'événement, vous devrez peut-être d'abord créer des événements de test. Vous pouvez ignorer cette étape pour l'instant et y revenir plus tard une fois que vous aurez déclenché des événements webhook correspondants. Consultez [Dépannage](#troubleshooting) pour plus de détails.

### Configurer l'action

Cliquez sur **Action** pour sélectionner un événement que le Zap effectue après le démarrage du flux de travail. Bien que Zapier offre des centaines d'actions, nous suggérons de commencer par leurs services de courriel ou de messagerie Slack.

#### Modèles

Vous pouvez utiliser un modèle existant pour gagner du temps.

<ZapierEmbed />

#### Notification par courriel

1. Dans la fenêtre contextuelle de sélection d'action, recherchez _Email by Zapier_ et cliquez sur la tuile pour sélectionner.

![Image](/img/use-the-api/webhooks-zapier-integration-email-by-zapier.png)

2. Choisissez l'action _Send Outbound Email_ dans le menu déroulant **Événement** et cliquez sur **Continuer**.

![Image](/img/use-the-api/webhooks-zapier-integration-send-outbound-email.png)

3. Entrez les détails de l'action, y compris l'adresse courriel pour les notifications ainsi que l'objet et le corps du courriel. Cliquez sur **Continuer**.
   ![Image](/img/use-the-api/webhooks-zapier-integration-construct-email.png)

4. Enfin, testez et publiez votre Zap.

#### Message Slack

L'intégration Slack de Zapier offre de nombreuses façons de communiquer avec Slack. Dans cet exemple, nous avons choisi de configurer un Zap qui envoie un message à un canal spécifié.

1. Dans la fenêtre contextuelle de sélection d'action, recherchez _Slack_ et cliquez sur la tuile pour sélectionner.

![Image](/img/use-the-api/webhooks-zapier-integration-slack.png)

2. Choisissez l'action _Send channel message_ dans le menu déroulant **Événement** et cliquez sur **Continuer**. Sinon, choisissez une action pertinente pour votre cas d'utilisation.

Si c'est la première fois que vous utilisez Slack, on vous demandera d'authentifier votre compte. Une fois prêt, cliquez sur **Continuer**.
![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-event.png)

3. Recherchez le canal qui doit recevoir le message et sélectionnez-le.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-channel.png)

4. Créez le texte du message que le canal devrait recevoir. Cliquez sur **Continuer**.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-construct-message.png)

5. Enfin, testez et publiez votre Zap.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-published-message.png)

## Dépannage

Si vous utilisez notre service de webhooks pour la première fois, vous pourriez ne pas être en mesure de tester votre déclencheur lors de la création. C'est parce que Zapier teste le déclencheur en vérifiant si des messages existent dans Codat pour le type d'événement choisi, et il ne détectera les événements pertinents qu'une fois le déclencheur configuré pour la première fois.

Par exemple, si vous utilisez [NewCompanySynchronized](/using-the-api/webhooks/event-types) comme déclencheur, vous devriez avoir configuré le déclencheur puis avoir une nouvelle synchronisation d'entreprise.

Pour effectuer le test, créez et publiez d'abord votre flux de travail. Zapier générera un nouveau consommateur de webhook dans Codat, incluant une description du type d'événement auquel le déclencheur est abonné. Suivez [nos instructions de test](/using-the-api/webhooks/create-consumer#test-a-webhook-consumer) pour tester le consommateur de webhook Zapier.

Sinon, vous pouvez attendre qu'une solution ou un service Codat déclenche votre Zap.
