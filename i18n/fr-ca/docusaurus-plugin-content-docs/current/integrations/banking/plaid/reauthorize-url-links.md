---
title: "Réautoriser une entreprise"
description: "Apprenez à réautoriser les entreprises qui ont été désautorisées"
sidebar_label: Réautorisation des entreprises
---

Une entreprise précédemment liée peut devenir désautorisée. Cela signifie que le lien de Codat vers les données bancaires d'un client n'est plus valide, et vous ne pouvez plus mettre en file d'attente les synchronisations de données. Vous pouvez toujours interroger les données historiques.

Les raisons de la désautorisation incluent :

- Réglementations sur la banque ouverte. Tous les 90 jours, votre client doit reconfirmer son consentement à partager des données.
- Toute mise à jour de l'ID client ou du secret de votre intégration Plaid.
- Si vous supprimez ou recréez votre application dans Plaid.

Pour réautoriser l'entreprise, vous devez trouver et envoyer la bonne URL de lien à votre client.

## URL de lien pour la réautorisation

Vous pouvez trouver l'URL de lien pour chaque entreprise dans le portail Codat.

1. Ouvrez le portail Codat et connectez-vous.
2. Dans la barre de navigation, sélectionnez **Companies**.
3. Sur la page **Companies**, recherchez l'entreprise qui vous intéresse.
4. À côté du nom de l'entreprise, sélectionnez **Request data**.
5. Dans la boîte de dialogue **Link URLs...**, sous **Banking**, sélectionnez **Reauthorize**.
   Les connexions nécessitant une réautorisation sont clairement marquées d'un point d'exclamation.
6. Copiez l'URL de lien pour la connexion désautorisée et envoyez-la à votre client.
