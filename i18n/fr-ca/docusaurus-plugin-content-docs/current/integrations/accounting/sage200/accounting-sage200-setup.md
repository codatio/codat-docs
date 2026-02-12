---
title: "Configurer l'intégration Sage 200 Standard"
slug: "accounting-sage200-setup"
description: "Explorez notre intégration API avec Sage 200 Standard."
sidebar_label: Configuration
---

## À propos de Sage 200 Standard

Sage 200 Standard est une solution comptable pour les petites et moyennes entreprises. Cette application infonuagique fournit un outil flexible pour que les organisations gèrent leur stock, leurs finances, leurs ventes, leurs achats et leurs bons de commande.

:::note Versions prises en charge

Codat prend actuellement en charge Sage 200 Standard **uniquement**.
:::

## Configurer Sage 200 Standard

:::caution Changements dans l'authentification des intégrations

Sage a récemment modifié la façon dont les applications et les intégrations sont authentifiées dans l'API Sage 200. Vous pouvez en savoir plus sur les changements dans <a href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=201204115644533" target="_blank">Sage 200 API - Guide des changements Sage ID</a>.

Si vous êtes un **client Codat qui a déjà un compte** avec Sage, veuillez vous référer à la section [Demander de nouveaux identifiants](/integrations/accounting/sage200/accounting-sage200-setup#section-request-new-credentials) ci-dessous. **Les clients qui doivent configurer leurs comptes Sage** sont priés de suivre le processus décrit ci-dessous.
:::

Avant de pouvoir accéder aux données des clients utilisant Sage 200 Standard pour leur comptabilité, vous devez configurer une intégration Sage 200 Standard dans le Portail Codat. Vous devrez :

- Demander un compte auprès de Sage et obtenir des identifiants API.
- Attendre que Sage vous envoie vos clés sécurisées.
- Récupérer une clé d'abonnement et de signature depuis le site API de Sage.
- Ajouter vos clés sécurisées au Portail Codat.

## Demander un compte et obtenir des identifiants API

1. Demandez un compte auprès de Sage en remplissant le formulaire <a href="https://sage.az1.qualtrics.com/jfe/form/SV_2fRebFy4s4PWLmC" target="_blank">Sage Developer Services API - Demander un compte</a>. Fournissez les détails requis et choisissez _Sage 200 Standard API_ comme application pour laquelle vous développez.
2. Une fois votre compte créé, vous recevrez un courriel de Sage avec un lien vers une page my.sage.co.uk, où vous pouvez vous connecter pour obtenir votre numéro de compte sous Mon compte > Mes comptes.
3. Demandez vos identifiants API en remplissant le <a href="https://sage.az1.qualtrics.com/jfe/form/SV_bQ14AM1zXki0msm" target="_blank">formulaire de demande d'identifiants API Sage 200</a>.
   Lorsque vos identifiants API auront été générés, Sage vous enverra votre Client ID et Secret par courriel.

_Remarque_ : Lors de la soumission du formulaire de demande d'identifiants API Sage 200 :

- Demandez le temps d'expiration maximum pour le jeton d'actualisation, soit 90 jours.
- Faites une demande via le formulaire pour chaque environnement pour lequel vous avez besoin d'identifiants.
- Pour la question « Application de bureau ou Web », sélectionnez « _Web_ ».
- Pour la question « URL(s) de redirection », entrez : `https://sage200cloud.codat.io/oauth/callback` pour la production.

## Récupérer les clés d'abonnement et de signature API

Abonnez-vous à l'API Sage pour Sage 200 Unlimited.

1. Accédez à la <a className="external" href="https://developer.columbus.sage.com/products/" target="_blank">page API Sage</a>.
2. Dans le coin supérieur droit, sélectionnez **Se connecter**, et suivez les instructions pour enregistrer vos détails.
   Lorsque votre inscription est terminée, vous êtes automatiquement dirigé vers votre profil de compte.
3. Retournez à la <a href="https://developer.columbus.sage.com/products/" target="_blank">page API Sage</a>.
4. Sous Produits, choisissez **Sage 200 Unlimited**. La page **Sage 200 Unlimited** s'affiche répertoriant les API disponibles pour ce produit et elle couvre à la fois Sage 200 Standard et Sage 200 Extra/Professional.
5. Sélectionnez **S'abonner**.
6. Cochez la case **En vous abonnant à Sage 200 Unlimited...** et sélectionnez **Confirmer**.

![](/img/old/dbbec39-sage_subscribe.png "sage subscribe.png")

## Récupérer vos clés de signature

1. Depuis votre profil, dans la section **Vos clés de signature**, sélectionnez **Obtenir les clés**.
2. Sélectionnez **Afficher** puis copiez la valeur de la **Clé primaire** dans un document Word ou similaire. C'est la _clé de signature_ dont vous avez besoin pour configurer votre intégration dans le Portail Codat.
3. Fermez la boîte de dialogue pour retourner aux détails de votre profil.
4. Dans la section **Vos abonnements**, sélectionnez à nouveau **Afficher** et copiez la valeur de la **Clé primaire**. C'est la _clé d'abonnement_ dont vous avez également besoin pour configurer votre intégration Codat.

<img src="/fr-ca/img/old/4815330-sage_keyss2.png" />

## Ajouter vos clés sécurisées au Portail Codat

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **Sage 200 Standard** et cliquez sur **Configurer**.

3. Sous **Paramètres d'intégration**, entrez les valeurs pour le **Client ID** et le **Client secret** que vous avez reçus de Sage.

4. Entrez votre **Clé d'abonnement**. C'est la valeur de la **Clé primaire** de votre abonnement API Sage.

5. Cliquez sur **Enregistrer**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

6. La boîte de dialogue **Activer Sage 200 Standard** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

:::note
Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration Sage 200

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Sage 200 Standard** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

Votre intégration Sage 200 Standard est maintenant configurée.

## Tester votre intégration

Nous vous recommandons de tester votre intégration avant d'envoyer des URL Link aux clients. Vous aurez besoin de votre propre compte Sage 200 Standard pour ce faire.

:::note Comptes d'essai Sage 200 Standard

Malheureusement, vous ne pouvez pas utiliser un compte d'essai pour tester votre intégration. Sage ne permet pas la création ou la mise à jour d'enregistrements depuis leurs comptes d'essai.
:::

1. Configurez des données de test dans votre compte Sage 200 Standard. Par exemple, de nouvelles factures ou des factures modifiées.
2. Ensuite, accédez au Portail Codat où vous avez activé votre intégration et [créez une entreprise de test](/configure/portal/companies#add-a-new-company).
3. Trouvez l'URL Link pour votre entreprise de test. Sélectionnez **Demander des données** à côté du nom de l'entreprise.
4. Utilisez l'URL Link pour connecter votre compte Sage 200 Standard.
   - Lorsque Link s'ouvre, sélectionnez **Sage 200 Standard**, puis sélectionnez **Continuer vers Sage 200 Standard**.
   - Connectez-vous à votre compte Sage 200 Standard.
   - Autorisez l'accès aux détails de votre compte.
5. Assurez-vous que les données de test de votre compte sont affichées pour votre entreprise de test dans le Portail Codat.

## Demander de nouveaux identifiants

Si vous avez déjà un compte développeur Sage, vous n'aurez pas besoin d'enregistrer un compte et pourrez simplement demander des identifiants. Pour demander des identifiants :

1. Connectez-vous à votre compte sur la page <a href="https://sage.co.uk/" target="_blank">My Sage</a> et accédez à « Mes comptes » où vous pouvez trouver votre numéro de compte.
2. Remplissez le <a href="https://sage.az1.qualtrics.com/jfe/form/SV_bQ14AM1zXki0msm" target="_blank">formulaire de demande d'identifiants API Sage 200</a> pour demander de nouveaux identifiants API.
3. Récupérez la clé d'abonnement en vous abonnant à l'API Sage 200 sur la page <a href="https://developer.columbus.sage.com/products/" target="_blank">API Sage 200</a> pour les développeurs.
4. Lorsque vos identifiants API auront été générés, Sage fournira le Client ID et le secret par courriel.

_Remarque_ : Lors de la soumission du formulaire de demande d'identifiants API Sage 200 :

- Demandez le temps d'expiration maximum pour le jeton d'actualisation, soit 90 jours.
- Faites une demande via le formulaire pour chaque environnement pour lequel vous avez besoin d'identifiants.
- Pour la question « Application de bureau ou Web », sélectionnez « _Web_ ».
- Pour la question « URL(s) de redirection », entrez : `https://sage200cloud.codat.io/oauth/callback`

:::caution Bilans dans les données sandbox de Sage 200

Si vous liez une entreprise de test Codat à l'un des comptes sandbox de Sage, l'ensemble de données du bilan échouera à se synchroniser et affichera le statut `ValidationError`. C'est parce que l'ensemble de données échoue aux vérifications de Codat, qui s'assurent qu'un bilan est équilibré, c'est-à-dire que les actifs nets sont égaux aux capitaux propres.
:::

:::note Taux de taxe sur les lignes
En raison d'une limitation de Sage 200 Standard, les taux de taxe sur les lignes pour les factures, notes de crédit, comptes et notes de crédit de compte apparaissent différemment des autres intégrations. Pour plus d'informations, consultez [Limitations de Sage 200 Standard](/integrations/accounting/sage200/sage200-limitations).
:::
