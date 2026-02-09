---
title: "Points de contrôle de certification Partenaire Bank Feeds de Xero"
description: "Un guide pour obtenir la certification Partenaire Bank Feeds de Xero avec Codat"
---

Pour recevoir la certification Partenaire Bank Feeds de Xero, vous devez vous conformer à une liste de points de contrôle techniques. Les exigences techniques de Xero pour les Bank Feeds diffèrent des [points de contrôle standard](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/) de Xero et ne sont pas disponibles en ligne. Sur demande, votre équipe de compte Codat peut vous fournir le formulaire de révision d'application Bank Feeds de Xero, qui documente les exigences en détail.

## Points de contrôle de certification

Codat gère de nombreux points de contrôle de certification pour vous. Pour ceux qui nécessitent une action de votre part, nous avons préparé ce guide complémentaire qui vous aide à comprendre les étapes que vous devez suivre. Nous vous recommandons également de travailler en étroite collaboration avec votre équipe de compte Codat lors de votre implémentation.

### 1. Nom de l'application et paramètres du portail

**Action requise : minimale**

Xero appelle toutes les plateformes se connectant à l'API Xero des « applications ». Vous ne considérez peut-être pas votre offre comme une application, mais c'est simplement la terminologie préférée de Xero. Votre application doit se conformer à deux exigences :

- Le nom de votre application doit refléter le nom commercial de votre application ou produit et ne peut pas inclure le mot `Xero`. Ceci est important car le nom est visible pour les utilisateurs finaux à plusieurs moments du parcours client. Vous pouvez modifier le nom de votre application dans la section **My Apps** de votre portail développeur Xero.

- L'adresse e-mail de votre application doit être générique (par exemple, `developers@companyname.com`) et ne pas être l'adresse d'un employé spécifique. Cela vous assurera de continuer à avoir accès à votre compte développeur Xero même si un membre du personnel quitte l'entreprise.

### 2. Image de marque

**Action requise : minimale**

Vous devez être conforme aux directives de Xero partout où vous mentionnez votre Partenariat Xero ou utilisez leurs éléments de marque. Pour vous en assurer, consultez les [Directives de marque](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) de Xero et leur [Guide pratique sur l'image de marque](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

### 3. Connexion

**Action requise : importante**

L'interface utilisateur de votre application doit répondre aux exigences suivantes :

| Exigence                                                                                             | Recommandations                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Afficher le nom du locataire qui a été connecté                                                     | Utilisez notre endpoint [Get company info](/bank-feeds-api#/operations/get-company-information) pour récupérer ce détail.                                                                                                                                                                                                                                                                                                        |
| Afficher l'état actuel de la connexion. Si déconnecté, fournir un bouton pour se reconnecter à Xero | Utilisez notre endpoint [Get connection](/bank-feeds-api#/operations/get-connection) pour vérifier le `status` de la connexion et utilisez le `linkUrl` pour vous reconnecter.                                                                                                                                                                                                                                                   |
| Fournir un bouton pour mettre fin à la connexion                                                    | Lorsqu'un utilisateur clique sur le bouton, utilisez notre endpoint [Delete connection](/bank-feeds-api#/operations/delete-connection) pour vous déconnecter de Xero.                                                                                                                                                                                                                                                            |
| Gérer une déconnexion du côté de Xero                                                               | Utilisez notre webhook [Data connection status changed](/using-the-api/webhooks/event-types) pour identifier quand une déconnexion se produit. Lorsque l'alerte est déclenchée, changez l'état de la connexion dans votre interface utilisateur et affichez un bouton « Reconnecter » ou « Connecter ». Xero recommande de définir une synchronisation quotidienne régulière de types de données légers afin de pouvoir vérifier l'état de connexion de chaque entreprise connectée tous les jours. |
| Prendre en charge la connexion un-à-un ou multi-organisationnelle                                   | Codat permet à vos clients de sélectionner leur organisation Xero en utilisant l'interface utilisateur native de Xero. Vous pouvez leur permettre de se connecter à plusieurs organisations au sein de Xero en créant une entreprise Codat distincte par organisation.                                                                                                                                                            |
| Fournir un processus de déconnexion pour le désengagement                                           | Utilisez notre endpoint [Delete connection](/bank-feeds-api#/operations/delete-connection) pour empêcher d'autres synchronisations et interrogations des données historiquement synchronisées.                                                                                                                                                                                                                                   |

### 4. Gestion des erreurs

**Action requise : aucune ou modérée**

Si vous utilisez l'interface utilisateur Bank Feeds de Codat, votre flux bancaire satisfera cette exigence. Si vous créez votre propre interface utilisateur de flux bancaire, vous devez communiquer les erreurs à vos clients de manière appropriée.

### 5. Accès hors ligne

**Action requise : aucune**

Notre intégration Xero couvre entièrement les exigences de ce point de contrôle.

### 6. Gestion des limites de taux

**Action requise : aucune**

Notre intégration Xero couvre entièrement les exigences de ce point de contrôle.

### 7. Portées

**Action requise : aucune**

Notre intégration Xero couvre entièrement les exigences de ce point de contrôle.

### 8. Mappage de compte

**Action requise : aucune**

Si vous utilisez l'interface utilisateur Bank Feeds de Codat, votre flux bancaire satisfera cette exigence. Si vous créez votre propre interface utilisateur de flux bancaire, vous devez fournir une fonctionnalité de mappage de compte appropriée. Utilisez notre [guide de page de mappage](https://docs.codat.io/using-the-api/best-practices/implementing-a-mapping-page) pour créer une interface utilisateur de mappage de compte avec Codat.

### 9. Nom de la banque, logos et numéro de compte

**Action requise : modérée**

Ce point de contrôle est pertinent lorsque vous configurez votre image de marque dans Codat et à nouveau lorsque vous partagez vos détails d'image de marque avec Xero à la fin du processus de certification.

Votre équipe Codat travaillera avec vous pour s'assurer que votre implémentation Bank Feed est conforme aux vérifications Xero suivantes :

- Votre marque est correctement représentée dans Xero.
- Vous définissez des noms appropriés pour les comptes que vous créez.
- Votre logo et votre numéro de compte sont affichés correctement.

### 10. Actualisation planifiée

**Action requise : aucune**

Notre intégration Xero couvre entièrement les exigences de ce point de contrôle.

### 11. Relevés manqués et rejetés

**Action requise : modérée**

Codat vous informera si un relevé bancaire est manqué ou rejeté. Incluez une logique appropriée dans votre application pour gérer ce résultat comme bon vous semble.

Votre équipe Codat travaillera ensuite avec vous pour s'assurer que votre implémentation Bank Feed est conforme aux vérifications Xero suivantes :

- Votre application peut gérer les relevés rejetés et manqués.
- Comment votre application compense un relevé manqué (par exemple, l'ajoute à la file d'attente suivante ou effectue un appel dédié).
- Votre utilisateur est informé en cas de relevés manqués ou rejetés.
