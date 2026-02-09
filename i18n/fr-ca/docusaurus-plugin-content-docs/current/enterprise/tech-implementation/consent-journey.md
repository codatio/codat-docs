---
title: "Parcours de consentement client"
sidebar_label: "Parcours de consentement"
description: "Explorez les meilleures pratiques et les solutions pour offrir un parcours de consentement à vos clients"
---

:::tip Documentation de la solution Link

Pour plus de détails sur l'implémentation, consultez notre documentation complète pour [Link](/auth-flow/overview), notre solution de parcours de consentement.

:::

L'autorisation est un élément clé de toute solution Codat - chaque entreprise doit autoriser l'accès de votre organisation à ses données avant que vous puissiez lire ou écrire ces données. Un flux d'authentification fluide et rassurant est essentiel pour accéder aux données de vos clients PME.

Pour répondre à ce besoin, Codat vous fournit Link, notre solution de parcours de consentement et d'autorisation. Vous pouvez voir les étapes clés de ce parcours sur le diagramme ci-dessous. Son objectif principal est de rationaliser les processus de consentement des clients spécifiquement liés au partage de divers types de données, y compris les données comptables, bancaires et commerciales. Vous viserez à créer un cadre modulaire qui peut être appliqué à différentes fonctions bancaires et expériences utilisateur, telles que l'intégration et les demandes de prêt.

![](/img/enterprise/implementation/consent/authjourney.png)

:::info Exemple de parcours de consentement

Nous avons préparé un prototype de parcours de consentement utilisant un exemple de cas d'utilisation de tableau de bord d'informations commerciales.

[Voir le prototype en plein écran →](https://www.figma.com/proto/YWkKvsYgeHJskPsfuIpy7w/Codat---Generic-bank---Consent-Journey?page-id=601%3A4488&type=design&node-id=641-11421&viewport=1275%2C-2886%2C0.1&t=rrDznIIhmQ8EayyY-1&scaling=contain&starting-point-node-id=641%3A11421&mode=design)

:::

### Options d'implémentation

Codat offre deux options pour implémenter la solution Link dans votre application :

1. **Utiliser le SDK pré-construit**

Codat a facilité le déploiement de notre solution Link au sein de votre interface utilisateur (UI) front-end avec notre kit de développement logiciel (SDK). Le SDK est l'option recommandée par Codat pour implémenter un parcours de consentement.

Notre SDK est un composant JavaScript pré-construit qui s'intègre facilement dans votre code front-end que vous pouvez intégrer et initialiser de la manière que vous souhaitez, offrant à vos clients une sensation native de votre parcours d'autorisation. Le composant fonctionne avec tous les principaux frameworks JavaScript, y compris React, ainsi qu'avec le JavaScript vanilla. Vous pouvez choisir d'implémenter le composant en TypeScript.

[**Commencez votre construction Link avec le SDK →**](/auth-flow/authorize-embedded-link)

2. **Construire avec l'API**

La solution Link de Codat couvre une série d'endpoints API que vous pouvez utiliser pour intégrer complètement le parcours d'authentification dans votre application numérique. Ces endpoints API peuvent être appelés pour créer un client dans l'instance de Codat et configurer la connexion aux intégrations applicables. Avec cette option, votre organisation est entièrement responsable de la construction et de la propriété de l'interface utilisateur d'autorisation.

[Examiner les exigences de construction personnalisée →](/auth-flow//auth-flow/build/build-your-own-authorization-journey)

<details>
<summary>Étapes et endpoints de construction personnalisée</summary>

Examinez les étapes clés et les endpoints impliqués dans un parcours de consentement personnalisé. Ces étapes et les endpoints correspondants sont déjà pris en compte et couverts dans notre SDK facile à utiliser.

| No.                     | Action                                                          | Description                                                                                                                                                                                               |
| :---------------------- | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Intégration :**         |
| 1                       | Le client clique sur le bouton « Connecter »                             | Le client clique sur le bouton dans l'interface utilisateur pour initier la connexion                                                                                                                                                |
| 2                       | L'application déclenche la création de l'entreprise                           | L'application effectue un appel à l'endpoint `POST Create company` de Link pour créer une entreprise Codat                                                                                                              |
| 3                       | L'API répond avec les détails de l'entreprise                               | L'endpoint API de Link répond avec un `CompanyId` unique à stocker et à utiliser par l'application                                                                                                             |
| 4                       | L'application déclenche la création de la connexion                        | L'application effectue un appel à l'endpoint `POST Create connection` de Link pour créer une connexion                                                                                                              |
| 5                       | L'API répond avec les détails de la connexion                            | L'endpoint API de Link répond avec un `linkURL` à partager avec le client par l'application                                                                                                                 |
| 6                       | Le client autorise l'accès                                      | L'application dirige l'utilisateur vers le 'linkURL' où le client s'authentifie et autorise l'accès aux données                                                                                                      |
| 7                       | Le client est redirigé vers l'application                           | Le parcours de consentement du client se termine sur un écran de confirmation de l'application                                                                                                                           |
| **Gestion continue :** |
| 8                       | Le client souhaite connecter un forfait supplémentaire ultérieurement | Le client clique sur un bouton dans l'application pour connecter un forfait supplémentaire. L'application effectue un appel à `POST Create connection` de Link avec un `companyId` pour créer une connexion et fournir un `linkURL` |
| 9                       | Le client souhaite déconnecter un forfait existant                | Le client clique sur un bouton « Déconnecter » dans l'application. L'application effectue un appel à `DELETE Delete connection` de Link                                                                               |

</details>

#### Propriété de la livraison

| Zone                  | Description                                                  | Propriétaire                                                           |
| :-------------------- | :----------------------------------------------------------- | :-------------------------------------------------------------- |
| UI                    | Interface utilisateur d'interaction client front-end                            | Client                                                          |
| Parcours d'intégration    | Capacité à connecter des logiciels comptables, bancaires et commerciaux | Utilisation de Link via SDK → Codat <br/> Utilisation de Link via API → Client    |
| Gestion des connexions | Capacité à ajouter, déconnecter et gérer les connexions           | Utilisation du SDK Connections → Codat <br/> Utilisation de Link via API → Client |

### Considérations relatives à l'accès aux données

#### Sécurité et confidentialité des données et RGPD

Dans notre accord avec vous, Codat agit en tant que Sous-traitant des données de vos clients tandis que vous en restez le Responsable du traitement. Cette relation vous permet de conserver le contrôle total sur les données de vos clients, y compris la décision de supprimer ces données. Vous devez fournir au client un aperçu de vos politiques de sécurité et de confidentialité des données dans votre parcours de consentement stratégique.

Notre [Centre d'aide](https://help.codat.io/resources/about#how-we-access-your-data) pour les clients fournit des réponses centrées sur le client aux préoccupations en matière de sécurité et de confidentialité des données.

#### Gestion continue des connexions

Votre client devrait avoir la possibilité d'ajouter, de modifier ou de supprimer des connexions existantes via une interface utilisateur. Certains fournisseurs de logiciels, tels que Xero, en font même une exigence obligatoire. Vous pouvez utiliser le [SDK Connections](https://docs.codat.io/auth-flow/optimize/connection-management) de Codat, qui fait partie de notre solution Link, dans votre interface utilisateur pour ajouter des intégrations supplémentaires ou supprimer des intégrations existantes.

Lors de la suppression d'une connexion, il est essentiel que les clients soient conscients de l'impact potentiel de la révocation de cet accès. Par exemple, s'ils utilisent plusieurs produits que vous fournissez, tous seront impactés.

### Cycle de vie du client

Link, la solution d'authentification de Codat, est utilisée à plusieurs étapes du cycle de vie du client. Nous avons couvert certains des scénarios d'utilisation ci-dessous.

1. Intégration d'un client pour la première fois

   Si un client n'a pas accordé l'accès aux intégrations auparavant, il s'authentifiera soit via un parcours utilisateur de produit spécifique, soit dans le cadre d'un processus d'intégration général de nouveau client.

2. Intégration d'un client existant sur un nouveau produit (cas d'utilisation multiple)

   Codat recommande que chaque client accorde l'accès à toutes les données lors de sa première configuration d'intégration, mais seules les données pertinentes seront lues dans le cache de Codat en fonction du cas d'utilisation. Cela signifie que Codat ne lira initialement que les données pertinentes pour ce premier cas d'utilisation, mais pourra ensuite lire les données pour d'autres cas d'utilisation sans nécessiter que le client se réauthentifie.

   Par exemple, un utilisateur peut connecter son logiciel Xero via un parcours client Dashboard. Il accorde l'accès à toutes les données de son compte Xero, mais vous ne lisez initialement que les types de données pertinents pour le produit Dashboard, car c'est tout ce à quoi l'utilisateur a consenti.

3. Un client existant souhaite ajouter des forfaits d'intégration pour un produit existant

   Les clients peuvent utiliser l'interface utilisateur du parcours de consentement pour apporter des modifications ou ajouter des forfaits d'intégration supplémentaires pour un produit spécifique, par exemple en cliquant sur un bouton « Cliquez ici pour connecter plus de forfaits ».

4. Un client précédemment connecté souhaite accorder l'accès aux données pour un produit spécifique

   Un client a déjà connecté son compte Xero à un produit de tableau de bord et souhaite maintenant fournir des données pour un cas d'utilisation de prêt. Comme il a précédemment accordé l'accès à toutes ses données Xero, techniquement vous avez déjà accès à la lecture de types de données supplémentaires que vous n'aviez pas auparavant.

   Le client se verra présenter un écran qui lui demande de confirmer qu'il accepte de partager des ensembles de données supplémentaires. Cet écran devrait contenir un simple message « Je confirme être d'accord pour partager des données supplémentaires » et ne nécessite pas que le client se réauthentifie ou se reconnecte à un logiciel comptable. Ce consentement doit être enregistré et toujours respecté avec la possibilité d'être révoqué à tout moment.

5. Un client existant souhaite retirer le consentement pour un cas d'utilisation spécifique

   Les clients devraient avoir la possibilité de révoquer l'accès aux intégrations via l'interface utilisateur de votre produit. Il est important d'informer les clients des impacts potentiels lors du retrait de l'accès, c'est-à-dire comment cela peut impacter d'autres produits.

   Considérez également les processus de conservation des données lorsqu'un client se déconnecte. Si le client a accordé l'accès à l'utilisation de ses données dans plusieurs produits, gardez à l'esprit que l'accès pourrait encore être nécessaire pour un autre produit. Codat offre la possibilité de supprimer les données historiques via un endpoint spécifique.

6. La connexion Open Banking d'un client existant a expiré

   Lorsqu'une connexion Open Banking expire, il est important de le communiquer au client. Offrez-lui une option pour redonner son consentement via le parcours utilisateur au sein d'un produit spécifique. En utilisant les endpoints de connexion de l'API Codat, vous pouvez réinitier le parcours de connexion pour que le client redonne son consentement.

### Questions courantes

- **Qu'est-ce que le processus Link ?**

  Le processus Link, soutenu par notre solution Link, est le mécanisme d'autorisation qui permet à vos clients existants et potentiels de partager en toute sécurité leurs données financières avec vous. Cela offre des avantages tant pour le client qui se connecte que pour vous en tant que fournisseur de services financiers.

- **Quelle est la première étape pour créer un flux d'authentification personnalisé avec Codat ?**

  Votre application devrait créer une entreprise Codat pour représenter votre client lorsqu'il s'inscrit à votre application. Cela vous permet de suivre leur statut de connexion dès le début en utilisant `POST Create company`.

- **Comment les utilisateurs doivent-ils saisir leurs identifiants tiers pour autoriser une connexion ?**

  Votre application devrait rediriger le client vers le `linkUrl` trouvé dans la réponse API après la création d'une connexion de données pour l'intégration sélectionnée. C'est là qu'il saisira ses identifiants.

- **Comment Codat sécurise-t-il la connexion avec les forfaits sous-jacents ?**

  Codat utilise OAuth 2.0 pour faciliter le processus de consentement et d'authentification entre Codat et chaque intégration logicielle. Notre documentation contient des détails sur notre approche de [Sécurité des données](/enterprise/tech-overview/security/data-security), et notre [Centre d'aide](https://help.codat.io/resources/about#how-we-access-your-data) contient des réponses centrées sur le client aux préoccupations en matière de sécurité.

- **Comment l'utilisateur se connecte-t-il ?**

  Chaque logiciel comptable a une expérience de connexion et de consentement légèrement différente. En général, les forfaits basés sur le cloud nécessitent une connexion par nom d'utilisateur et mot de passe une fois que l'utilisateur a été redirigé. Nous fournissons des instructions de connexion détaillées pour chaque intégration que nous prenons en charge sur notre [Centre d'aide](https://help.codat.io).

- **Que se passe-t-il lorsqu'un client se connecte ?**

  Lorsqu'un client se connecte, Codat commencera à extraire et à mettre en cache les types de données pertinents. Ce processus prendra probablement quelques minutes mais dépendra de la quantité de données historiques extraites.

- **Comment Codat indique-t-il une synchronisation terminée ?**

  Codat génère un [événement webhook](/using-the-api/webhooks/event-types) une fois qu'une synchronisation de données est terminée. Un consommateur de webhook peut être configuré pour écouter la fin de lecture de types de données spécifiques ou une fois que tous les types de données ont été synchronisés.

- **Comment les utilisateurs peuvent-ils gérer leurs connexions continues et révoquer l'accès aux plateformes ?**

  Dans le cadre de l'implémentation de notre solution Link, nous recommandons d'utiliser le [SDK Connections](https://docs.codat.io/auth-flow/optimize/connection-management) dans votre interface utilisateur. Le SDK s'intègre parfaitement avec votre déploiement Link via notre SDK et se connecte proprement aux endpoints sous-jacents de Codat qui prennent en charge la fonctionnalité de gestion des connexions. Si vous choisissez l'approche de construction personnalisée, assurez-vous de construire une interface utilisateur de gestion des connexions qui utilise les endpoints de gestion des connexions de Codat.

- **Nos clients sont susceptibles d'avoir des questions sur le partage de leurs données. Comment pouvons-nous y répondre ?**

  Nous répondons aux questions les plus fréquemment posées par les clients de nos clients sur notre [Centre d'aide](https://help.codat.io/resources/about#how-we-access-your-data). Vous pouvez partager directement les réponses centrées sur le client qui y sont fournies avec vos clients ou les utiliser comme base pour préparer vos propres réponses.

  Certaines des questions que nous entendons le plus souvent incluent :
  - Aurez-vous accès à toutes mes données ?
  - Mes données seront-elles partagées en toute sécurité ?
  - Et si mon logiciel comptable n'est pas répertorié ?
  - Partagerez-vous mes données avec des tiers ?
  - Comment puis-je révoquer l'accès à mes données ?
