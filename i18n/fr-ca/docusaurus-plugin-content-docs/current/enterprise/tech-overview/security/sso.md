---
title: "Enterprise SSO"
description: "Découvrez les prérequis pour configurer l'Enterprise SSO"
---

:::tip Activation de l'Enterprise SSO

Si vous souhaitez utiliser l'Enterprise SSO mais que vous ne l'avez pas déjà activé, veuillez d'abord parler à votre gestionnaire de compte.
:::

Avant d'effectuer toute configuration de votre côté, veuillez remplir le questionnaire ci-dessous et partager les réponses avec votre gestionnaire de compte.

### Questionnaire client

- Quel fournisseur d'identité utilisez-vous ?

- Avez-vous besoin d'une déconnexion fédérée (SSO complet), c'est-à-dire une déconnexion de la session au niveau de l'application et de la session SSO ? Si oui, veuillez spécifier l'URL de déconnexion.

- De quels environnements avez-vous besoin (par exemple Test et Prod, Prod uniquement) ? Si vous avez besoin de plusieurs environnements, les utilisateurs doivent être sur des domaines différents.

- Avez-vous besoin que la requête d'authentification SAML soit signée ? Si oui, veuillez spécifier l'algorithme (RSA-SHA1, RSA-SHA256) et le digest de l'algorithme (SHA1, SHA256). Nous pouvons fournir la clé publique pour la vérification de signature.

- Avez-vous besoin d'une déconnexion initiée par l'IdP, c'est-à-dire si un utilisateur se déconnecte dans votre AD ou effectue un autre changement de profil, avez-vous besoin que nous déconnections l'individu ?

### Connecter votre fournisseur d'identité

Afin de prendre en charge le SSO, vous devez connecter votre fournisseur d'identité (IdP) à Codat. Des exemples courants d'intégration d'IdP incluent Active Directory (AD), PingFederate ou OKTA.
Dans votre IdP, effectuez la configuration suivante :

1. Configurez des groupes correspondant aux quatre rôles Codat (Administrateur, Analyste, Intégration, Développeur) pour chaque instance Codat que vous avez, et ajoutez au moins un utilisateur de test à chaque groupe pour les tests ultérieurs.

   Envoyez-nous les mappages de nom de groupe vers rôle, y compris l'ID et le mappage vers nos rôles :

   | Nom de rôle Codat | Nom de votre groupe | ID de votre groupe |
   | :-------------- | :-------------- | :------------ |
   | Administrateur   |                 |               |
   | Analyste         |                 |               |
   | Intégration      |                 |               |
   | Développeur       |                 |               |

2. Provisionnez une inscription d'application SSO (ou équivalent) dans l'IdP. Celle-ci devrait être configurée pour :

   a. Retourner des réponses SAML qui incluent la revendication `groups`. Cela garantit qu'un ID représentant chaque groupe AD auquel l'utilisateur
   appartient nous est envoyé pour mapper l'accès client/rôle.

   b. Définir l'`URL de réponse (URL du service consommateur d'assertion)` et l'`URL de redirection` sur
   `https://authentication.codat.io/login/callback?connection=[client-name]-[instance-name]-saml-connection`

   c. Inclure les revendications suivantes pour chaque utilisateur dans les réponses SAML de l'IdP authentifiant :
   - `email`
   - tableau `groups` (un ID représentant chaque groupe AD auquel l'utilisateur appartient et correspond au mappage pour l'accès client/rôle)
   - `displayname` (composé du prénom et du nom de famille)

   Si les revendications ne sont pas nommées comme ci-dessus, veuillez nous faire connaître les noms et les espaces de noms des revendications.

3. Envoyez-nous le fichier `metadata.xml` ou, alternativement, tous les éléments suivants :
   - URL de connexion IdP
   - URL de déconnexion IdP (si requis)
   - Certificat de signature
   - Attributs de revendication SAML, y compris le nom et l'espace de noms (voir 2d ci-dessus)

4. Une fois que nous avons les informations ci-dessus, nous pouvons envoyer notre fichier `metadata.xml` SAML contenant EntityId, clé de signature et URL.

Une fois cette configuration terminée, nous vous fournirons une URL de connexion unique à utiliser pour vous connecter.
Celle-ci devrait être utilisée au lieu de la page de connexion normale du portail Codat.

Note : pour aider à maintenir la meilleure sécurité de sa classe, nous prenons en charge les flux initiés par SP et non les flux initiés par IdP. Veuillez vous référer à la documentation d'Auth0
sur les [risques et considérations initiés par l'IdP](https://auth0.com/docs/authenticate/protocols/saml/saml-sso-integrations/identity-provider-initiated-single-sign-on#risks-and-considerations)
pour plus d'informations à ce sujet.

### Gestion des utilisateurs

Lors de l'utilisation du SSO, vous n'utiliserez plus la page `Utilisateurs` dans le portail Codat pour gérer les utilisateurs. Au lieu de cela, cela sera fait dans votre fournisseur d'identité.

#### Ajouter un nouvel utilisateur

L'ajout d'un utilisateur se fait en l'ajoutant à un (ou plusieurs) des groupes fournis lors de la configuration. Note - les utilisateurs assumeront le niveau de privilège le plus élevé lorsqu'ils sont ajoutés à plusieurs groupes.

Après qu'un utilisateur a été ajouté au groupe pertinent dans votre fournisseur d'identité, il peut utiliser l'URL de connexion fournie et sera ajouté à votre instance Codat.

#### Retirer un utilisateur

Empêcher un utilisateur d'accéder au portail Codat peut se faire via :

- Le retrait de tous les groupes d'accès spécifiés dans votre fournisseur d'identité.
- La prévention de l'authentification via votre fournisseur d'identité.

### FAQ

Quelles sont les URL de configuration SAML ?

| Configuration SAML                    | Format                                                                                                                                        |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifiant (ID d'entité)                | URN spécifique au client, tel que <br />`urn:auth0:codat:[client-name]-[instance-name]-saml-connection`                                            |
| ReplyURL (service consommateur d'assertion) | URN spécifique au client, tel que <br /> `https://authentication.codat.io/login/callback?connection=[client-name]-[instance-name]-saml-connection` |
| URL de connexion                           | URN spécifique au client, tel que <br /> `https://app.codat.io/sso/signin/[client-name]-[instance-name]-saml-connection`                           |
| URL de déconnexion                            | Aucune                                                                                                                                          |
