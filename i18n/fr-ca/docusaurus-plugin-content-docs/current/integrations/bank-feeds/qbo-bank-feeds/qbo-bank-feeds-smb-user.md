---
title: "Utilisateur PME : Connecte ses comptes bancaires choisis à QuickBooks Online"
description: "Apprenez comment vos utilisateurs PME peuvent connecter leurs comptes bancaires à QuickBooks Online"
sidebar_label: "Authentification"
---

Lorsque l'utilisateur PME visite le `linkUrl`, il est dirigé vers l'interface utilisateur Link QuickBooks Online Bank Feeds. Ce site permet à l'utilisateur PME de générer un nom d'utilisateur et un mot de passe à usage unique pour connecter un ou plusieurs comptes bancaires à QuickBooks Online (QBO).

:::caution Expiration de l'URL Link

Pour des raisons de sécurité, le `linkUrl` expirera une heure après sa génération.

:::

## Résumé du flux de connexion de l'utilisateur PME

Pour connecter leurs comptes bancaires à QBO, l'utilisateur PME effectue les étapes suivantes dans l'interface utilisateur Link QBO Bank Feeds et dans son compte QBO.

### Générer des identifiants à usage unique

1. Depuis votre application, l'utilisateur PME ouvre le `linkUrl` dans son navigateur.

   L'interface utilisateur Link QBO Bank Feeds est chargée.

2. Sur la page **Connect to QuickBooks Online Bank Feeds**, ils examinent les autorisations demandées, puis cliquent sur **Next**.

3. Sur la page **Set up QuickBooks**, ils cliquent sur **Get credentials** pour générer leur nom d'utilisateur et mot de passe uniques à usage unique pour connecter un compte à QBO (voir l'étape six dans la procédure suivante). Le bouton **Revoke credentials** apparaît immédiatement après la génération de leurs identifiants — consultez [Révoquer les identifiants](#revoke-credentials) pour en savoir plus.

   ![Image](/img/bank-feeds/qbo-bank-feeds/QBO-bankfeeds-credentials-page-updated.png "La page Set up QuickBooks qui permet à votre utilisateur PME d'obtenir ses identifiants.")

4. Ils suivent les instructions affichées dans l'interface utilisateur. Celles-ci sont résumées dans la procédure suivante.

### Entrer les identifiants à usage unique dans QuickBooks

1. L'utilisateur PME se connecte à QBO et va dans **Transactions > Bank Transactions**.

2. Ils cliquent sur le bouton **Link account**.

3. Sur l'écran **Connect an account**, ils trouvent et sélectionnent votre organisation dans la liste des institutions qui fournissent des flux bancaires.

4. Ils acceptent les termes et conditions.

5. Ils entrent leur nom d'utilisateur et mot de passe à usage unique dans QuickBooks et complètent l'invite d'authentification.

6. Ils sélectionnent un ou plusieurs comptes bancaires source à connecter à QBO.

7. Dans le menu déroulant qui apparaît, ils sélectionnent le type de compte — le plan comptable — pour lequel ils souhaitent voir les flux bancaires.

8. Ils sélectionnent une date de début pour le flux bancaire.

   :::caution Limitation sur l'écriture de transactions historiques

   Si l'utilisateur PME sélectionne une date de début de flux bancaire antérieure à sept jours, elle sera ignorée. L'intégration ne prend en charge que l'écriture de transactions historiques datant de sept jours maximum.

   :::

9. Enfin, ils cliquent sur **Connect**.

Votre utilisateur PME a maintenant connecté avec succès ses comptes bancaires choisis à QBO. Le statut de la connexion de données change en `Linked` ; vous pouvez maintenant [écrire des transactions bancaires vers QBO](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) pour l'utilisateur PME.

### Révoquer les identifiants

Le bouton **Revoke credentials** permet à l'utilisateur PME de révoquer ses identifiants précédemment générés. Cette option invalide tous leurs identifiants existants ; vous ne pouvez plus écrire de transactions bancaires vers QBO depuis les comptes bancaires qui utilisaient ces identifiants.

---

## Lire ensuite

[Écrire des transactions bancaires de Codat vers QBO](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions).
