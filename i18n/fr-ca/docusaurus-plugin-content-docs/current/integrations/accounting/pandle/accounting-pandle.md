---
title: "Pandle"
description: "En savoir plus sur notre intégration Pandle."
unlisted: true
---

Pandle est un logiciel de comptabilité cloud conçu pour rendre l'enregistrement des transactions aussi simple et efficace que possible pour les comptables, les teneurs de livres et les propriétaires de petites entreprises. Pandle est une plateforme basée au Royaume-Uni avec plus de 40 000 utilisateurs.

Vous pouvez lire les données comptables de <a className="external" href="http://www.pandle.com">Pandle</a> en utilisant notre intégration Pandle.

## Configurer l'intégration

:::caution Périodes de maintenance Pandle
Pandle effectue occasionnellement des mises à jour les mardis matin (heure du Royaume-Uni) qui rendent leur API temporairement indisponible. Si vous rencontrez des problèmes pour récupérer des données de Pandle pendant ces périodes, consultez leur [page de statut](http://status.pandle.com/) et mettez en file d'attente de nouvelles synchronisations lorsqu'ils ont terminé leur maintenance.
:::

Avant de pouvoir accéder aux données des clients utilisant Pandle pour leur comptabilité, vous devez configurer une intégration Pandle dans le portail Codat. Vous devrez :

- Enregistrer une nouvelle application auprès de Pandle.
- Attendre que Pandle vous envoie vos clés sécurisées.
- Ajouter les clés sécurisées de votre application au portail Codat.

Nous recommandons également de tester votre intégration en utilisant un compte Pandle gratuit.

## Enregistrer votre application

Actuellement, Pandle ne prend pas en charge les inscriptions en ligne, vous devrez donc envoyer un e-mail à [support@pandle.com](mailto:support@pandle.com) qui inclut les détails suivants :

- **App name** – Un nom court pour votre application. Vos clients verront ceci lorsqu'ils autoriseront votre connexion à leurs données.
- **Description** – Une brève description de ce que fait votre application qui mentionne Codat. Par exemple : "En tant que prêteurs, nous nous connecterons aux comptes de nos clients pour les consulter ou les mettre à jour en utilisant l'intégration Pandle de Codat".
- **Re-direct URI** – Les clients sont redirigés vers cette URL après avoir autorisé la connexion de votre application. Pour une intégration Codat, vous devez utiliser `https://pandle.codat.io/oauth/callback`

## Attendre vos clés sécurisées

Pandle vous émettra des clés sécurisées, y compris un ID client et un secret client. Il peut falloir plusieurs jours ouvrables pour recevoir ces détails.

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **Pandle** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** de votre application que vous avez reçues de Pandle.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. La boîte de dialogue **Enable Pandle** s'affiche. Sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

:::note
Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration Pandle

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Pandle** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

Votre intégration Pandle est maintenant configurée.

## Tester votre intégration

Nous recommandons de tester votre intégration avant d'envoyer des URL Link aux clients.

1. Inscrivez-vous pour un <a href="https://my.pandle.com/users/sign_up" target="_blank">compte Pandle</a> gratuit en tant que propriétaire d'entreprise. Vous devrez ajouter une adresse e-mail valide et un numéro de TVA dans le format correct. Pour le reste du formulaire d'inscription, vous pouvez saisir des détails fictifs si vous le souhaitez.
2. Lorsque la configuration de votre compte est terminée, connectez-vous à Pandle, choisissez le plan d'abonnement gratuit et créez des données pour votre entreprise test, par exemple, quelques factures.
3. Ensuite, allez dans le portail Codat où vous avez activé votre intégration et [créez une entreprise test](/configure/portal/companies#add-a-new-company).
4. Trouvez l'URL Link pour votre entreprise test. À côté du nom de l'entreprise, sélectionnez **Request data**.
5. Utilisez l'URL Link pour connecter votre compte Pandle.
   - Lorsque Link s'ouvre, sélectionnez _PANDLE_, puis sélectionnez _Continue to Pandle_.
   - Connectez-vous à votre compte Pandle.
   - Autorisez l'accès aux détails de votre compte.
6. Assurez-vous que toutes les données que vous avez configurées dans votre compte Pandle s'affichent dans le portail Codat pour votre entreprise test.
