---
title: "Tester votre solution Codat"
sidebar_label: "Tester votre solution"
description: "Consultez nos suggestions, meilleures pratiques et stratégies pour tester votre implémentation Codat"
---

Les tests sont un élément clé de tout processus de développement logiciel, tant pendant l'implémentation qu'après la mise en production si des changements sont apportés à la solution. Voici ce que Codat recommande pour tester votre implémentation Codat.

## Utiliser une instance de test

Nous vous recommandons d'utiliser une instance supplémentaire de Codat à des fins de test. Nous travaillons directement avec nos clients **Accès complet** pour organiser la création d'instances de test et copier les détails et paramètres suivants :

- Tous les utilisateurs ayant accès au client existant
- Paramètres du client et remplacements de fonctionnalités
- Solutions activées et dépréciations
- Paramètres et identifiants spécifiques aux intégrations
- Paramètres de synchronisation du client
- Endpoints et paramètres des consommateurs de webhooks
- Paramètres du flux d'authentification

Les utilisateurs peuvent basculer entre le client de production et le client de test en utilisant le menu déroulant de sélection de client dans le [Portail Codat](https://app.codat.io/).

### Conseils et pièges

1. Votre client de test aura un ensemble séparé de clés API, et vous devrez peut-être maintenir des identifiants différents pour les intégrations dans l'instance de test.

2. Pour voir le nouveau client une fois créé, vous devrez vous réauthentifier. Déconnectez-vous et reconnectez-vous si vous utilisez le portail, ou obtenez un nouveau jeton si vous utilisez nos API.

3. Les clients de test sont limités à 50 entreprises connectées actives et ne sont pas inclus dans la facturation.

## Stratégie de test

Lors de la planification d'une stratégie et d'une portée de test pour votre implémentation, envisagez d'inclure les approches suivantes :

1. Tests d'intégration back-end

   Une fois que vous avez terminé la construction initiale de l'API vers les endpoints de Codat, vous devez vous assurer que l'intégration fonctionne comme prévu. Nous recommandons d'effectuer la validation en utilisant des données sandbox.

2. Tests PME en direct

   Impliquez l'un de vos vrais clients PME pour effectuer l'authentification via votre flux d'application numérique front-end. Ensuite, vérifiez que les données se synchronisent entre la plateforme pertinente et Codat et déclenchent un webhook dans votre système pour démarrer la lecture des données.

## Tests d'intégration back-end

Lors du test de vos intégrations tout au long de l'implémentation, il est important de vérifier que vous pouvez autoriser et compléter les connexions avant de passer aux tests PME en direct.

Nous recommandons d'utiliser les intégrations **Codat Sandbox** qui contiennent des données d'exemple générées comme outil de test pour les développeurs. Lorsque vous vous liez à ces intégrations, vous pouvez choisir parmi plusieurs ensembles de données différents qui fournissent divers niveaux de détail. Ces intégrations sont activées par défaut et ne nécessitent aucun identifiant pour s'autoriser.

Vous pouvez également vous inscrire et tester avec **Xero** et **QuickBooks Online**, qui offrent tous deux des entreprises de démonstration ou sandbox équipées de données d'exemple. D'autres intégrations offrent également des essais gratuits pour tester les connexions, mais peuvent ne pas fournir de données d'exemple.

### Aperçu des comptes de test des intégrations

| Plateforme                                                                                                                               | Type d'intégration          | Type de compte              | Notes                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Codat Sandbox                                                                                                                            | Intégration sandbox         | Entreprise de démonstration | Les entreprises actives connectées uniquement à Codat Sandbox sont exclues de la facturation dans votre instance de production. <br/> [En savoir plus](/integrations/accounting/sandbox/accounting-sandbox) sur le test de cette intégration.                                                               |
| [Clear Books](https://www.clearbooks.co.uk/)                                                                                            | Intégration en direct       | Essai gratuit               |                                                                                                                                                                                                                                                                                                              |
| [Exact NL](https://www.exact.com/nl/producten/accountancy/boekhouden/probeer)                                                           | Intégration en direct       | Essai gratuit               |                                                                                                                                                                                                                                                                                                              |
| [FreeAgent](https://signup.sandbox.freeagent.com/signup)                                                                                 | Intégration en direct       | Essai gratuit               | Compte gratuit temporaire au [FreeAgent Sandbox](https://dev.freeagent.com/docs/quick_start).                                                                                                                                                                                                                |
| [FreshBooks](https://www.freshbooks.com/blog/freshbooks-trial)                                                                           | Intégration en direct       | Essai gratuit               |                                                                                                                                                                                                                                                                                                              |
| [MYOB](https://developer.myob.com/api/myob-business-api/api-overview/getting-started/)                                                  | Intégration en direct       | Entreprise de démonstration | Codat ne prend en charge que les données hébergées en ligne. Lors de la configuration du compte, vous recevrez des instructions pour charger les fichiers de démonstration.                                                                                                                                   |
| [Microsoft 365 Dynamics Business Central](https://learn.microsoft.com/en-gb/dynamics365/business-central/admin-sandbox-environments)     | Intégration en direct       | Environnement sandbox       | [En savoir plus](/integrations/accounting/dynamics365businesscentral/test-your-dynamics-365-business-central-integration) sur le test de cette intégration.                                                                                                                                                  |
| [QuickBooks Desktop](https://quickbooks.intuit.com/desktop/enterprise/contact/trial-download/?auto=true)                                 | Intégration en direct       | Essai gratuit               |                                                                                                                                                                                                                                                                                                              |
| [QuickBooks Online](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes)                        | Intégration sandbox         | Entreprise de démonstration | Les entreprises actives connectées uniquement à QuickBooks Online Sandbox sont exclues de la facturation dans votre instance de production. <br/> [En savoir plus](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup#create-a-quickbooks-online-app-configured-for-sandbox) sur le test de cette intégration. |
| [Sage 50 and Business Cloud](https://www.sage.com/en-gb/products/free-trials/)                                                          | Intégration en direct       | Essai gratuit               | Sage fournit également une [collection Postman](https://developer.sage.com/accounting/quick-start/preparing-to-create-test-data/) avec des données de test préremplies.                                                                                                                                      |
| [Pandle](https://my.pandle.com/users/sign_up)                                                                                           | Intégration en direct       | Compte gratuit              |                                                                                                                                                                                                                                                                                                              |
| [Wave](https://my.waveapps.com/register/)                                                                                               | Intégration en direct       | Compte gratuit              |                                                                                                                                                                                                                                                                                                              |
| [Xero](https://central.xero.com/s/article/Use-the-demo-company#Web)                                                                    | Intégration en direct       | Entreprise de démonstration | La démo n'inclut pas les flux bancaires automatiques ni la possibilité d'inviter d'autres utilisateurs. Vous pouvez ajouter vos propres données, mais l'entreprise de démonstration se réinitialise après 28 jours. <br/> [En savoir plus](/integrations/accounting/xero/accounting-xero-test) sur le test de cette intégration. |
| [Zoho Books](https://www.zoho.com/books/signup/)                                                                                        | Intégration en direct       | Entreprise de test          | Lors de la configuration d'une organisation de test, vous pouvez choisir d'importer ou de créer des données de test. <br/> [En savoir plus](/integrations/accounting/zoho-books/accounting-zohobooks-setup) sur le test de cette intégration.                                                                |
| [Plaid](https://plaid.com/docs/sandbox/)                                                                                                | Intégration en direct       | Environnement sandbox       | La configuration initiale de Plaid doit être complétée pour accéder à l'environnement sandbox avec des données de démonstration. <br/> [En savoir plus](/integrations/banking/plaid/test-your-plaid-integration) sur le test de cette intégration.                                                           |
