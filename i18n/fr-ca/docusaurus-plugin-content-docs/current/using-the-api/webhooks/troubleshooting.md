---
title: "Dépannage des webhooks"
sidebar_label: "Dépannage"
description: "Apprenez à rejouer les événements échoués, résoudre les problèmes courants, vérifier les journaux de webhooks et consulter notre politique de relance"
---

## Politique de relance

Avec notre service de webhooks, nous tentons de livrer un événement plusieurs fois sur une période de 28 heures en cas d'échec de livraison. Nos tentatives suivent le calendrier suivant, où chaque période commence une fois que la tentative précédente a échoué :

- Immédiatement
- 5 secondes
- 5 minutes
- 30 minutes
- 2 heures
- 5 heures
- 10 heures
- 10 heures supplémentaires

Si vous supprimez votre endpoint de consommateur de webhook, cela supprimera toutes les tentatives de livraison restantes qui sont planifiées dans le cadre de la politique de relance. Dans le cas d'endpoints désactivés, aucune tentative ne sera effectuée pendant la période durant laquelle l'endpoint du consommateur reste désactivé. Si l'endpoint est réactivé et qu'il reste des tentatives planifiées, ces tentatives seront envoyées.

:::tip Exemples de calendrier de relance

Un événement qui échoue trois fois puis réussit sera livré environ 35 minutes et 5 secondes après la tentative initiale.

Un endpoint de consommateur de webhook qui est désactivé après la relance de 5 min, puis réactivé environ 3 heures après, devrait avoir 3 tentatives de messages supplémentaires planifiées (5 heures, 10 heures, 10 heures supplémentaires).

:::

## Statut des messages

- **Succès** indique qu'il y a eu au moins une tentative pour ce message qui a réussi sur son endpoint.
- **Échec** indique que toutes les tentatives ont été épuisées et qu'aucune d'entre elles n'a réussi.
- **En cours de tentative** indique qu'au moins une tentative a été envoyée et qu'il reste des tentatives planifiées dans le cadre de la politique de relance.
- **En cours d'envoi** indique que le processus d'envoi du webhook a commencé mais qu'aucune tentative de livraison n'a encore été effectuée.

## Récupérer les messages échoués et manqués

Notre service de webhooks peut récupérer deux types de messages :

- **Les messages échoués** surviennent lorsque le message n'a pas été livré même après que toutes les tentatives de livraison ont été épuisées. Vous pouvez **récupérer** ces messages.
- **Les messages manqués** surviennent lorsque l'endpoint a été désactivé, que l'endpoint n'existait pas au moment de l'envoi du message (mais a été créé par la suite), ou que l'endpoint était initialement configuré pour écouter d'autres types d'événements et a été mis à jour pour en inclure de nouveaux. Vous pouvez **rejouer** ces messages.

Pour chaque message à récupérer, nous tenterons d'envoyer un nouveau message, indépendamment du fait qu'il reste ou non des tentatives planifiées dans le cadre de la politique de relance.

Si vous souhaitez rejouer ou récupérer un ou plusieurs messages en cas d'indisponibilité de votre application ou de configuration incorrecte, vous pouvez le faire dans le [Portail Codat](https://app.codat.io/monitor/events).

Naviguez vers **Surveiller > Webhooks > Événements > Endpoints** pour voir vos endpoints de consommateur et relancer les messages manuellement ou automatiquement.

Vous pouvez également sélectionner **Surveiller > Webhooks > Événements > Journaux** pour voir et filtrer les messages dans une liste indépendante des événements.

### Message unique

Si vous souhaitez rejouer un seul événement (c.-à-d. renvoyer un seul message), cliquez sur l'endpoint du consommateur sur la page **Événements webhook** et faites défiler pour voir ses tentatives de messages.

Ensuite, cliquez sur le menu à trois points à côté du message et cliquez sur **Renvoyer**. Cela enverra le même message à votre endpoint à nouveau.

![Un fragment de l'interface qui affiche un bouton Renvoyer à côté d'une tentative échouée](https://docs.svix.com/assets/images/resend-single-a4fb6e65f27f27e5700becb523135c2f.png)

### Messages multiples

Si vous souhaitez récupérer automatiquement tous les messages échoués ou renvoyer les messages manquants pour une certaine plage de dates, cliquez sur l'endpoint du consommateur sur la page **Événements webhook**.

Ensuite, cliquez sur le menu à trois points à droite et choisissez l'une des options applicables. Dans la fenêtre contextuelle, sélectionnez la période pour laquelle vous souhaitez récupérer les messages.

![Un fragment de l'interface qui affiche les options de récupération de messages multiples](/img/use-the-api/0046-multiple-message-retry.png)

Pour un contrôle de date plus granulaire, vous pouvez faire défiler jusqu'aux tentatives de messages de l'endpoint, cliquer sur le menu d'options à trois points d'un message spécifique et choisir **Rejouer > Rejouer tous les messages échoués depuis ce moment**.

Lors de la récupération de messages multiples, nous enverrons tous les messages en une seule fois, en appliquant un certain délai entre les messages. Cela vise à éviter de surcharger l'endpoint du consommateur de webhook. Si votre système a une limitation de débit en place, tenez compte de ce scénario pour éviter d'autres échecs. Consultez les détails de la [limitation de débit des endpoints webhook](/using-the-api/webhooks/create-consumer#endpoint-rate-limits).

### Idempotence

Bien que la fonctionnalité de webhooks du système Codat vise une livraison unique de chaque message, en raison du fait que les messages peuvent être renvoyés, cela n'est pas toujours possible à garantir. Si l'idempotence est importante pour votre système, nous vous recommandons d'utiliser l'en-tête webhook-id de la requête HTTP, qui fonctionne comme une clé d'idempotence pour un message donné (c.-à-d. qu'il reste constant à travers toutes les tentatives de livraison de ce message) et peut donc être utilisé par votre système pour s'assurer que les messages ne sont pas retraités.

## Échecs d'endpoint

Votre endpoint de consommateur de webhook pourrait échouer pour diverses raisons. Examinons la résolution des plus courantes.

#### Endpoint désactivé

Si toutes les tentatives de livraison vers l'endpoint échouent pendant une période de 5 jours, cet endpoint sera désactivé. Pour le réactiver, naviguez vers **Surveiller > Webhooks > Événements > Endpoints**, cliquez pour voir la vue détaillée de l'endpoint, puis choisissez **Activer l'endpoint** dans le menu d'options à trois points.

![Un fragment de l'interface qui affiche l'option Activer l'endpoint dans la vue détaillée de l'endpoint](/img/use-the-api/0048-enable-disabled-webhook.png)

#### Corps de la charge utile converti

Lors de la génération du contenu signé du message, nous utilisons le corps brut en chaîne de caractères de sa charge utile. Si vous convertissez les charges utiles JSON en chaînes de caractères, la méthode que vous choisissez peut produire une représentation différente de ces charges utiles.

Cela peut créer des écarts lors de la vérification de la signature du webhook. Pour résoudre ce problème, assurez-vous de vérifier la charge utile exactement telle qu'elle a été envoyée.

Pour plus d'informations, consultez [Vérification de la signature du webhook](/using-the-api/webhooks/create-consumer#webhook-signature-verification).

#### Clé secrète manquante

Un message peut échouer si la mauvaise clé secrète est utilisée. Les clés sont uniques à chaque endpoint, alors assurez-vous d'utiliser la bonne.

#### Codes de réponse incorrects

Lorsque votre endpoint webhook répond avec un code de statut `2xx`, nous considérons que la livraison du message est réussie même si la charge utile de la réponse indique un échec. Assurez-vous d'utiliser les bons codes de statut de réponse afin que nous puissions interpréter correctement les succès et les échecs.

#### Délai d'expiration de la réponse

Lorsque votre endpoint webhook ne répond pas au message dans les 15 secondes, nous considérons que le message a échoué.

Nous vous recommandons de configurer l'endpoint pour simplement recevoir le message et y répondre, puis de l'ajouter à une file d'attente pour un traitement asynchrone. Cela aidera à éviter les délais d'expiration.

#### Liste d'adresses IP autorisées

Si votre endpoint de consommateur de webhook est derrière un pare-feu ou un NAT, le message peut échouer si le trafic provenant de nos adresses IP est bloqué.

Les messages webhook de Codat sont servis à partir d'adresses IP statiques. Appliquez une règle d'autorisation pour accorder l'accès réseau aux messages provenant de ces adresses :

```
4.159.114.108

20.117.190.191
```

## Journaux et activité

Si vous devez retrouver un message particulier envoyé à l'un de vos endpoints, vous pouvez consulter la page de vue détaillée de l'endpoint qui contient une liste filtrée de tous les messages envoyés. Vous pouvez filtrer la liste par type d'événement et par date.

Vous pouvez également naviguer vers **Surveiller > Webhooks > Événements > Journaux** pour voir la liste complète des messages envoyés à tous les endpoints et la charge utile de chaque message directement dans le [Portail](https://app.codat.io/monitor/events).

Enfin, vous pouvez visualiser l'activité des webhooks sous forme de graphique en allant à **Surveiller > Webhooks > Événements > Activité**. Le graphique montre les six dernières heures de tentatives d'envoi d'événements.

---

## À lire ensuite

- [Gérer les consommateurs de webhooks](/using-the-api/webhooks/create-consumer)
- [Guide de migration](/using-the-api/webhooks/migration-guide)
