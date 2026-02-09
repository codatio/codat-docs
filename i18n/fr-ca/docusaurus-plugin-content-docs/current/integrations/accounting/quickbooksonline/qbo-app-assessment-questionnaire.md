---
title: "Questionnaire d'évaluation d'application QuickBooks Online"
description: "Conseils pour compléter le processus d'évaluation d'application d'Intuit"
---

## Introduction

Toutes les applications qui ont l'intention d'accéder aux données de production de QuickBooks Online doivent remplir un questionnaire dans le cadre du processus d'évaluation d'application d'Intuit. Plusieurs de ses questions nécessitent que vous fournissiez des informations sur votre organisation et le cas d'utilisation de votre application.

Cependant, certaines questions concernent l'intégration de Codat avec QuickBooks Online. Nous avons fourni des réponses guides pour ces questions ci-dessous. Elles sont mises en évidence en **gras**.

## Questionnaire

Pour accéder au questionnaire, accédez à **Keys and credentials** dans la vue détaillée de votre application et basculez l'environnement vers **Production**. Fournissez les détails généraux de l'application dans **App details**, puis passez à l'onglet **Compliance** et cliquez sur **Start questionnaire**.

<img src="/img/integrations/accounting/quickbooksonline/qbo-app-details-questionnaire.png" />

### Détails de l'application

Cette section comporte plusieurs questions relatives à Codat. Nous avons fourni des réponses détaillées aux réponses que vous devriez choisir, mises en évidence en **gras**.

1. **Examinez votre profil du Portail des développeurs Intuit et vérifiez votre courriel**

Cette question doit être répondue par le développeur de l'application.

2. **Ajoutez le contrat de licence utilisateur final et la politique de confidentialité de votre application**

Cette question doit être répondue par le développeur de l'application.

3. **Ajoutez le domaine hôte, l'URL de lancement et l'URL de déconnexion de votre application**

Cette question doit être répondue par le développeur de l'application en fonction des directives fournies ci-dessous.

    - **Host domain** : l'URL du domaine hôte de votre site web ou application.

    - **Launch URL** : URL initiale pour le flux d'autorisation de votre application. Si vous utilisez [Hosted Link](/auth-flow/authorize-hosted-link), fournissez l'URL Link générique du [Portail Codat](https://app.codat.io).

    - **Disconnect URL** : Lien vers le processus de désautorisation de l'accès de l'application à QBO. Il peut s'agir de l'URL du point de terminaison [Unlink connection](/platform-api#/operations/unlink-connection) ou d'un lien vers votre site web ou application à la place.

4. **Sélectionnez au moins une catégorie pour votre application**

Cette question doit être répondue par le développeur de l'application.

5. **Parlez-nous de toute industrie réglementée qui utilise votre application**

Cette question doit être répondue par le développeur de l'application.

6. **Dites-nous où votre application est hébergée**

Comme Codat interagit directement avec QBO, le développeur de l'application doit inclure les adresses IP et les emplacements d'hébergement de Codat ainsi que les siens. Consultez notre [référence d'intégration QBO](/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference#qbo-app-hosting) pour les détails d'hébergement de Codat.

### Conformité

#### Questions générales

Il n'y a aucune question relative à Codat dans cette section. Les développeurs peuvent répondre à toutes les questions selon leurs propres circonstances.

#### Prêt

Cette section n'apparaîtra dans votre questionnaire que si vous avez confirmé être un prêteur plus tôt dans le processus. Si vous n'êtes pas un prêteur, sautez cette section.

Si vous êtes un prêteur et ne voyez pas ces questions dans votre questionnaire, retournez à l'écran _Production Settings_ dans le tableau de bord du développeur QuickBooks et assurez-vous que la case **Lending** est cochée avant de continuer.

Il n'y a aucune question relative à Codat dans cette section. Les développeurs peuvent répondre à toutes les questions selon leurs propres circonstances.

#### Informations sur l'application

Cette section comporte plusieurs questions relatives à Codat. Nous avons mis en évidence les réponses que vous devriez choisir en **gras**.

1. **Laquelle des affirmations suivantes est vraie au sujet de votre application ? (Au moins une option doit être cochée)**

| Option | Réponse                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| a      | Vous avez construit votre application à partir de zéro et écrit le code qui lui permet d'interagir avec les API et les données Intuit                                    |
| **b**  | **Vous avez utilisé une autre plateforme ou un autre outil pour construire et coder votre application**                                                                  |
| c      | Votre application agit comme une plateforme qui permet à d'autres développeurs d'applications (en dehors de votre équipe ou entreprise) de s'intégrer avec QuickBooks    |
| d      | Vous exigez que les utilisateurs de votre application créent une application ou un profil supplémentaire sur la plateforme Intuit Developer pour utiliser votre application |
| e      | On vous a demandé de créer cette application afin d'obtenir des identifiants/clés à utiliser sur une autre plateforme qui s'intègre avec QuickBooks                     |

Après avoir sélectionné l'option **B**, fournissez ces réponses aux questions de suivi :

| Question                                                  | Réponse                                                               |
| --------------------------------------------------------- | --------------------------------------------------------------------- |
| Quel est le nom de la plateforme ou de l'outil ?          | Codat                                                                 |
| Fournissez un lien vers le site web de la plateforme ou de l'outil | `www.codat.io`                                                        |
| Décrivez comment votre application interagit avec la plateforme | Nous accédons à notre intégration avec QuickBooks Online via l'API de Codat |

2. **Quelle(s) plateforme(s) votre application utilise-t-elle et à partir de laquelle elle effectue des appels API ? (Sélectionnez toutes les réponses qui s'appliquent)**

Cette question doit être répondue par le développeur de l'application.

3. **Comment votre application interagit-elle avec les données produit Intuit ?**

Cette question doit être répondue par le développeur de l'application.

4. **Construisez-vous une application privée pour votre équipe ou votre entreprise ? Ou prévoyez-vous de la rendre publiquement disponible ?**

| Option | Réponse                                                  |
| ------ | -------------------------------------------------------- |
| a      | Nous construisons une application privée                 |
| **b**  | **Nous prévoyons de rendre notre application publiquement disponible** |

Après avoir sélectionné l'option **B**, fournissez un nombre estimé d'utilisateurs QuickBooks Online que vous prévoyez de connecter.

5. **Quels types d'utilisateurs de QuickBooks Online peuvent utiliser votre application ?**

| Option | Réponse                                        |
| ------ | ---------------------------------------------- |
| a      | Tout administrateur de l'entreprise QuickBooks Online |
| **b**  | **Tout utilisateur de l'entreprise QuickBooks Online** |

6. **Votre application s'intègre-t-elle avec des plateformes autres qu'Intuit ?**

Cette question doit être répondue par le développeur de l'application.

#### Autorisation et authentification

Cette section comporte plusieurs questions relatives à Codat. Nous avons mis en évidence les réponses que vous devriez choisir en **gras**.

1. **Avez-vous testé la connexion, la déconnexion et la reconnexion de votre application avec une entreprise sandbox ou hors production ?**

Cette question doit être répondue par le développeur de l'application. Tester l'application est une exigence obligatoire et Intuit rejettera l'application si vous fournissez _Non_ comme réponse.

2. **À quelle fréquence votre application actualise-t-elle les jetons d'accès ?**

| Option | Réponse                                  |
| ------ | ---------------------------------------- |
| a      | Chaque fois qu'elle effectue un appel API |
| **b**  | **Seulement lorsque les jetons d'accès expirent** |
| c      | Plus d'une fois par jour                 |
| d      | Quotidiennement                          |
| e      | Hebdomadairement                         |
| f      | Autre - spécifiez un délai               |

3. **Votre application réessaie-t-elle les demandes d'autorisation et d'authentification qui ont échoué ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

4. **Si votre application rencontre une erreur d'autorisation et d'authentification, demandez-vous aux clients de se reconnecter à votre application ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

5. **Avez-vous utilisé le document de découverte Intuit pour obtenir les derniers points de terminaison requis dans le flux OAuth2.0 ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

6. **Votre application peut-elle gérer les scénarios suivants ? (oui/non)**

| Scénario                                        | Réponse |
| ----------------------------------------------- | ------- |
| Erreurs dues à des jetons d'accès expirés       | **Oui** |
| Erreurs dues à des jetons d'actualisation expirés | **Oui** |
| Erreurs d'autorisation invalide                 | **Oui** |
| Erreurs CSRF                                    | **Oui** |

7. **Votre application s'appuie-t-elle sur le playground OAuth ou d'autres outils hors ligne pour obtenir des jetons d'accès ou d'actualisation ?**

| Option | Réponse |
| ------ | ------- |
| a      | Oui     |
| **b**  | **Non** |

#### Utilisation de l'API

Cette section comporte plusieurs questions relatives à Codat. Nous avons mis en évidence les réponses que vous devriez choisir en **gras**.

1. **Laquelle des grandes catégories d'API votre application utilise-t-elle ?** (choix multiple)

| Catégorie      | Réponse |
| -------------- | ------- |
| Accounting API | **Oui** |
| Payments API   | **Non** |
| Payroll API    | **Non** |

Codat ne s'intègre pas avec les API Payments ou Payroll.

2. **À quelle fréquence votre application appelle-t-elle nos API pour chaque client ?** (choix multiple)

Cette question doit être répondue par le développeur de l'application.

#### API Comptabilité

Cette section apparaîtra dans le questionnaire une fois que vous aurez sélectionné _Accounting API_ dans l'ensemble de questions précédent.

1. **Pour quelle version orientée client de QuickBooks Online votre application est-elle conçue ?** (Sélectionnez toutes les réponses qui s'appliquent)

| Version      | Réponse |
| ------------ | ------- |
| Simple Start | **Non** |
| Essentials   | **Oui** |
| Plus         | **Oui** |
| Advanced     | **Oui** |

2. **Les utilisateurs changent souvent de version de QuickBooks Online. Cela signifie qu'ils peuvent avoir accès à de nouvelles fonctionnalités, ou perdre certaines fonctionnalités, à tout moment. Votre application peut-elle gérer les situations où les utilisateurs gagnent ou perdent l'accès aux fonctionnalités spécifiques à une version ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

Après avoir sélectionné l'option **A**, fournissez cette réponse à la question de suivi :

| Question                                               | Réponse                                                                                                                                                                            |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dites-nous comment vous prévoyez de gérer cette situation | Pour les gains de fonctionnalités, il n'y a aucun impact sur l'utilisateur final. Pour la perte de fonctionnalités, des messages d'erreur sont générés lorsque les autorisations pour les fonctionnalités requises sont manquantes. |

3. **Votre application utilise-t-elle l'une des fonctionnalités suivantes ?** (Sélectionnez toutes celles que vous avez vérifiées et testées minutieusement)

| Fonctionnalité                                                        | Réponse |
| --------------------------------------------------------------------- | ------- |
| Multi-devises                                                         | **Oui** |
| Taxe de vente - Pour les entreprises QuickBooks aux États-Unis       | **Oui** |
| Taxe de vente - Pour les entreprises QuickBooks hors des États-Unis  | **Oui** |
| Aucune des options ci-dessus                                          | N/A     |

4. **Utilisez-vous des webhooks pour votre application ?**

| Option | Réponse |
| ------ | ------- |
| a      | Oui     |
| **b**  | **Non** |

Codat n'utilise pas les webhooks QuickBooks Online, bien que nous ayons notre propre [service de webhooks](/using-the-api/webhooks/overview).

5. **Utilisez-vous l'opération [CDC](https://developer.intuit.com/app/developer/qbo/docs/learn/explore-the-quickbooks-online-api/change-data-capture) pour votre application ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

Après avoir sélectionné l'option **A**, fournissez ces réponses aux questions de suivi :

i. **Pourquoi utilisez-vous l'opération CDC ?**

| Option | Réponse                                                                         |
| ------ | ------------------------------------------------------------------------------- |
| a      | L'utilisation de webhooks ne me donne pas les informations dont j'ai besoin    |
| b      | L'interrogation d'entités spécifiques ne me donne pas les informations dont j'ai besoin |
| **c**  | **Autre (Dites-nous pourquoi vous utilisez l'opération CDC)**                  |

Après avoir sélectionné l'option **C**, fournissez ces informations supplémentaires :

**Codat utilise CDC pour mettre en file d'attente les synchronisations pour les changements dans des points de terminaison spécifiques (clients et reçus de remboursement)**

ii. **À quelle fréquence interrogez-vous le service CDC ?**

| Option | Réponse                       |
| ------ | ----------------------------- |
| a      | Hebdomadairement              |
| b      | Quotidiennement               |
| c      | Toutes les heures             |
| d      | Plus d'une fois par heure     |
| **e**  | **Autre - spécifiez un délai** |

Après avoir sélectionné l'option **E**, fournissez ces informations supplémentaires :

**Ad hoc sur demandes de nouvelles données.**

#### Gestion des erreurs

1. **Avez-vous testé si votre application peut gérer les erreurs d'API, y compris les erreurs de syntaxe et de validation ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

2. **Votre application capture-t-elle la valeur du champ `intuit_tid` des en-têtes de réponse ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

3. **Votre application dispose-t-elle d'un mécanisme pour stocker toutes les informations d'erreur dans des journaux qui peuvent être partagés à des fins de dépannage, si nécessaire ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

4. **Fournissez-vous un moyen pour les clients de vous contacter pour obtenir de l'aide depuis votre application ?**

Cette question doit être répondue par le développeur de l'application.

#### Sécurité

1. **Votre entreprise a-t-elle déjà subi une violation de sécurité qui a nécessité une notification aux clients ou aux agences/autorités gouvernementales ?**

Cette question doit être répondue par le développeur de l'application.

2. **Avez-vous une équipe de sécurité qui évalue régulièrement les vulnérabilités et les risques pour votre application ?**

Cette question doit être répondue par le développeur de l'application.

3. **Le client ID et le client secret de votre application sont-ils stockés en toute sécurité (c'est-à-dire non codés en dur dans votre application ou affichés dans les journaux de la console du navigateur) ?**

| Option | Réponse |
| ------ | ------- |
| **a**  | **Oui** |
| b      | Non     |

4. **Votre application utilise-t-elle l'authentification multifacteur ?**

Cette question doit être répondue par le développeur de l'application.

5. **Votre application utilise-t-elle Captcha pour l'authentification ?**

Cette question doit être répondue par le développeur de l'application.

6. **Votre application utilise-t-elle WebSocket ?**

Cette question doit être répondue par le développeur de l'application.

7. **Une fois que les données Intuit d'un client sont dans votre système, permettez-vous qu'elles soient utilisées ou montrées à quelqu'un d'autre que ce client ?**

Cette question doit être répondue par le développeur de l'application.
