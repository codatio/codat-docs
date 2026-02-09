---
title: "Dépannage et FAQ"
description: "Questions fréquemment posées et conseils de dépannage pour notre intégration Plaid"
sidebar_label: Dépannage
hide_table_of_contents: true
---

### Erreur « Connectivity not supported » lors de la tentative de connexion d'un compte bancaire

Si vous recevez le message d'erreur « Connectivity not supported » lors de la tentative de connexion d'un compte bancaire via Plaid, c'est probablement en raison de l'une de ces raisons :

- L'institution ne prend pas en charge l'un des produits spécifiés dans l'initialisation Link.
- L'institution est associée à un pays non spécifié dans l'initialisation Link.
- L'institution est associée à un pays pour lequel votre compte Plaid n'a pas été activé.

En pratique, cela signifie que l'institution Plaid sélectionnée ne prend pas en charge [Instant Auth](https://plaid.com/docs/auth/coverage/instant/#instant-auth) comme méthode d'authentification. Heureusement, il existe une alternative à Instant Auth appelée [Instant Match](https://plaid.com/docs/auth/coverage/instant/#instant-match), que Codat utilise comme repli d'authentification.

### Erreur de récupération des transactions bancaires lors de la première synchronisation

Vous pourriez très occasionnellement remarquer des erreurs de récupération lors de votre première tentative de synchronisation des transactions bancaires pour les entreprises liées à l'intégration Plaid, les tentatives suivantes se terminant sans problème.

Lors de la récupération des données de transaction de Plaid, nous effectuons un appel sortant vers leur API pour initier une tâche en arrière-plan qui rassemble les données demandées. Une fois la tâche terminée, Plaid envoie les résultats à Codat via un webhook. Parfois, la préparation des données peut prendre plus de 15 minutes, ce qui déclenchera un timeout de notre côté. En conséquence, nous renverrons une erreur pour l'opération. Cela se produit lorsqu'un volume particulièrement important de données est impliqué, par exemple, lors de la première synchronisation.

Les requêtes suivantes pour récupérer ces données réussiront car la tâche initiale aurait déjà progressé suite à la requête précédente. Cela se produit souvent peu de temps après. Initiez simplement une autre synchronisation pour le type de données pour résoudre le problème.

### Erreur « Action required with your account » lors de la connexion d'un compte bancaire

Cette erreur est probablement due au fait que l'utilisateur autorisant la connexion n'a pas les autorisations correctes attribuées à son compte utilisateur sur la plateforme bancaire. Les étapes pour résoudre ce problème varient d'une banque à l'autre, mais la plupart des banques fournissent des instructions de résolution détaillées dans leur propre documentation. Par exemple, consultez [les propres conseils de résolution de Chase](https://www.chase.com/digital/customer-service/helpful-tips/business-banking/security/add-users-assign-rights).
