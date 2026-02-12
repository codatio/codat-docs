---
title: "Surveiller une synchronisation"
description: "Apprenez comment surveiller la progression d'une synchronisation, consulter les journaux détaillés et réessayer les éléments échoués"
image: "/fr-ca/img/banners/social/commerce.png"
---

Utilisez la page Santé de la synchronisation dans le portail Codat pour surveiller l'état de vos synchronisations, consulter les journaux détaillés et les messages d'erreur, et afficher et réessayer l'écriture des éléments échoués. Cela aide votre équipe de support à résoudre les problèmes courants liés aux paramètres ou aux actions du client.

## Vérifier l'historique de synchronisation

Dans le <a href="https://app.codat.io/" target="_blank">portail Codat</a>, cliquez sur **Products** et sélectionnez le produit Sync pertinent pour afficher sa page Santé :

- Consultez le **tableau de bord** (1) pour un résumé visuel des totaux de synchronisation.
- Utilisez la **barre de recherche** (2) pour affiner les enregistrements par ID de synchronisation ou ID d'entreprise.
- Affichez l'historique de synchronisation pour une période spécifique en indiquant une **plage de dates** (3).
- [Consultez les statuts possibles](/commerce/error-documentation#status-codes) des synchronisations et filtrez les enregistrements par leur **code de statut** (4).
- Utilisez le **menu** (6) pour trier et modifier le tableau **historique de synchronisation** (5) selon vos besoins.

<img
  src="/fr-ca/img/sync-for-commerce/0006-sync-health-ui.png"
  alt="Vue de la page Santé de la synchronisation avec des annotations numérotées sur les éléments clés de la page : le tableau de bord, les filtres, le filtre de statut et le tableau de données principal"
/>

## Afficher les enregistrements détaillés

Pour afficher des informations plus détaillées sur un enregistrement, cliquez sur un élément de votre **historique de synchronisation**. Les informations apparaissent dans la fenêtre **Détails de la synchronisation** et fournissent les heures de début et de fin de synchronisation, ainsi que les plateformes source et cible de la synchronisation.

Elle affiche également des notes conviviales pour le client et des messages d'erreur en cas d'échec de synchronisation. Consultez notre [guide de dépannage](/commerce/error-documentation#error-messages) pour des recommandations sur la façon de résoudre ces problèmes.

Vous pouvez également naviguer vers l'onglet **Config** pour afficher et télécharger la configuration de synchronisation du client, ce qui aide à établir les causes profondes de toute erreur survenue.

<img
  src="/fr-ca/img/sync-for-commerce/0007-sync-details-ui.png"
  alt="Vue détaillée d'une entrée de journal de synchronisation avec les onglets Résumé, Config et Push Items"
/>

## Afficher les éléments push

Dans la même vue d'enregistrement détaillé, sélectionnez l'onglet **Push items** pour accéder à une liste d'**éléments push**. La liste contient un élément pour chaque type de données comptables produit dans la synchronisation sélectionnée (par exemple, un élément pour les factures ou les notes de crédit).

Ici, vous pouvez afficher le statut de chaque élément, rechercher les éléments par leur ID core ou type de données, ou les filtrer par statut.

## Réessayer les éléments push

Sur l'onglet **Push items**, vous pouvez également réessayer les éléments push en statut échoué. Cliquez sur le bouton **Retry failed items** pour déclencher une nouvelle tentative d'écriture des données de tous les éléments push échoués. Le bouton n'est activé que s'il y a des éléments échoués à réessayer.

<img
  src="/fr-ca/img/sync-for-commerce/0009-sync-push-items-ui.png"
  alt="Vue détaillée de l'onglet Push Items avec deux synchronisations échouées"
/>

## Historique de synchronisation pour les clients

Vos clients peuvent consulter leur propre historique de synchronisation et statut de synchronisation dans le **flux de synchronisation**. Pour chaque synchronisation, le client peut vérifier la plage de dates de synchronisation et son statut.

## 💡 Conseils et pièges

- Les synchronisations sont affichées comme échouées si l'un des éléments inclus échoue à l'écriture. Par conséquent, si une synchronisation contient un mélange d'enregistrements échoués et écrits avec succès, elle sera toujours marquée comme échouée.
- Si un enregistrement de journal de synchronisation affiche une note "Veuillez réconcilier manuellement" pour une commande, c'est probablement parce qu'une commande mise à jour n'a pas de commande originale correspondante dans la plateforme. Par conséquent, Sync n'est pas en mesure de la réconcilier, et cela doit être effectué manuellement.
- L'historique de synchronisation n'affiche actuellement pas la plage de dates pour les données lues à partir du logiciel de commerce utilisées dans la synchronisation.
