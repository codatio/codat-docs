---
title: "Points de contrôle de certification Partenariat Prêt de Xero"
description: "Un guide pour obtenir la certification Partenariat Prêt de Xero avec Codat"
---

Pour les prêteurs qui souhaitent devenir Partenaires Xero, Xero stipule deux exigences techniques à respecter :

- [Lending writeback](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/), qui est une exigence spécifique aux prêteurs.
- Les [points de contrôle de certification](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) de Xero, qui ne s'appliquent pas tous aux prêteurs.

## Lending writeback

Le but du lending writeback est de maintenir avec précision la position financière d'un client dans Xero à tout moment du cycle de prêt. Cela se fait généralement en enregistrant le passif du prêt, les intérêts, les frais et les remboursements, et en facilitant le rapprochement du compte bancaire.

Codat offre [ce guide sur la mise en œuvre du lending write-back](https://docs.codat.io/lending/guides/loan-writeback/introduction).

## Points de contrôle de certification

### 1. S'inscrire avec Xero

**Action requise : aucune**

Ce point de contrôle n'est pas pertinent pour les Partenariats Prêt.

### 2. Xero App Store

**Action requise : aucune**

Ce point de contrôle n'est pas pertinent pour les Partenariats Prêt.

### 3. Connexion

**Action requise : importante**

Bien que Codat gère la connexion initiale à Xero via l'interface utilisateur Codat Link, Xero exige que vous permettiez à votre utilisateur de gérer cette connexion de manière continue. La meilleure pratique consiste à créer une page « Paramètres d'intégration » pour satisfaire ces exigences.

| Exigence                                                                                             | Recommandations                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Afficher le nom du locataire qui a été connecté                                                     | Cela peut être récupéré depuis notre endpoint [Get company info](/lending-api#/operations/get-accounting-profile).                                                                                                                                                                                                                                                                                                             |
| Afficher l'état actuel de la connexion. Si déconnecté, fournir un bouton pour se reconnecter à Xero | Utilisez notre endpoint [Get connection](/lending-api#/operations/get-connection) pour vérifier le `status` de la connexion et utilisez le `linkUrl` pour vous reconnecter                                                                                                                                                                                                                                                     |
| Fournir un bouton pour mettre fin à la connexion                                                    | Lorsqu'un utilisateur clique sur le bouton, utilisez notre endpoint [Delete connection](/lending-api#/operations/delete-connection) pour vous déconnecter de Xero.                                                                                                                                                                                                                                                             |
| Gérer une déconnexion du côté de Xero                                                               | Utilisez un webhook pour écouter notre événement [connection.disconnected](/using-the-api/webhooks/event-types) qui identifie quand une déconnexion se produit. Lorsque l'alerte est déclenchée, changez l'état de la connexion dans votre interface utilisateur et affichez un bouton « Reconnecter » ou « Connecter ». Xero recommande de définir une synchronisation quotidienne régulière de types de données légers afin de pouvoir vérifier l'état de connexion de chaque entreprise connectée tous les jours. |
| Prendre en charge la connexion un-à-un ou multi-organisationnelle                                   | Codat permet à vos clients de sélectionner leur organisation Xero en utilisant l'interface utilisateur native de Xero. Vous pouvez leur permettre de se connecter à plusieurs organisations au sein de Xero en créant une entreprise Codat distincte par organisation.                                                                                                                                                          |
| Fournir un processus de déconnexion pour le désengagement                                           | Utilisez notre endpoint [Delete connection](/lending-api#/operations/delete-connection) pour empêcher d'autres synchronisations et interrogations des données historiquement synchronisées.                                                                                                                                                                                                                                    |

### 4. Image de marque et dénomination

**Action requise : minimale**

Vous devez être conforme aux directives de Xero partout où vous mentionnez votre Partenariat Xero ou utilisez leurs éléments de marque. Pour assurer la conformité, consultez les [Directives de marque](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) de Xero et leur [Guide pratique sur l'image de marque](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

Xero [recommande d'utiliser leurs propres](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) boutons _Connecter_ et _Déconnecter_, mais vous pouvez utiliser un ensemble de boutons standard pour la cohérence du style si votre application possède plusieurs intégrations.

### 5. Portées

**Action requise : minimale**

Xero exige que les applications aient accès strictement aux données dont elles ont besoin, vous ne devez donc activer que les portées requises pour accéder aux données pertinentes pour votre cas d'utilisation. Nous fournissons [un guide des portées](/integrations/accounting/xero/partner-certification/scopes) pour expliquer quelles portées correspondent généralement à quels cas d'utilisation. Parlez avec votre spécialiste de mise en œuvre Codat et ils ajusteront vos portées de manière appropriée une fois que vous aurez convenu de ce qui est nécessaire.

### 6. Gestion des erreurs

**Action requise : modérée**

Si une erreur se produit, l'interface utilisateur de votre application doit communiquer ce fait à l'utilisateur. Il est recommandé de leur fournir des messages d'erreur ou des journaux détaillés. Codat fournit des messages d'erreur détaillés pour tout problème avec l'intégration, y compris les codes d'état, comme indiqué dans nos [Codes d'état et erreurs](/using-the-api/errors).

### 7. Intégrité des données

**Action requise : aucune**

Codat gère ce point de contrôle pour vous.

### 8. Mappage de compte et de paiement

**Action requise : aucune**

Ce point de contrôle n'est pas pertinent pour les Partenariats Prêt.

### 9. Taxes

**Action requise : aucune**

Ce point de contrôle n'est pas pertinent pour les Partenariats Prêt.
