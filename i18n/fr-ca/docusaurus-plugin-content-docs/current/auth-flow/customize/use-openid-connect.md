---
title: "Utiliser OpenID Connect"
description: "Configurez votre processus d'autorisation pour utiliser le protocole OpenID Connect"
---

Lorsqu'un client lie les données de son entreprise, OpenID Connect vous permet de récupérer [des informations standards](/auth-flow/customize/use-openid-connect#openid-connect-fields) du profil utilisateur de leur logiciel de comptabilité, comme le nom, l'adresse e-mail et le numéro de téléphone du client. Vous pourriez utiliser ces détails pour :

- Pré-remplir un formulaire de demande pour le client.
- Identifier les comptes liés par la même personne.

Cet article explique comment configurer votre processus d'autorisation pour utiliser OpenID Connect.

:::info Support pour OpenID Connect

- Le processus de liaison de Codat ne peut renvoyer que les détails de profil disponibles, qui varient d'une plateforme à l'autre. Codat prend actuellement en charge OpenID Connect pour QuickBooks Online, Xero et notre bac à sable de test. Voir [_Champs pris en charge par OpenID Connect_](/auth-flow/customize/use-openid-connect#openid-connect-fields) pour les champs spécifiques pris en charge pour chaque plateforme.
- Codat n'utilise pas OpenID Connect pour vérifier l'identité des clients, ni pour autoriser le partage de données ou les connexions.

:::

## Configurez votre processus d'autorisation

Mettez à jour votre URL de redirection et vos URL Hosted Link.

1. Ajoutez tous les paramètres dont vous avez besoin du profil utilisateur à votre [URL de redirection](/auth-flow/customize/set-up-redirects). Par exemple :
   ```http
   https://redirect.com/site/{companyId}?firstName={openId_given_name}&email={openId_email}&phone={openId_phone_number}
   ```
2. Ajoutez `?openId=true` à une URL Link avant de l'envoyer à un client. Par exemple :

   ```http
   https://link-uat.codat.io/{companyId}/link?openId=true
   ```

   Lorsque le client connecte son logiciel de comptabilité, toutes les valeurs de profil disponibles sont substituées dans l'URL de redirection. Par exemple :

   ```http
   https://redirect.com/site /{companyId}?firstName=John&email=john.smith@theworld.com&phone+441234555666
   ```

Codat prend en charge un sous-ensemble des [champs OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) disponibles, ou revendications, pour les intégrations sélectionnées. Codat préfixe chaque nom de champ avec `openId_` pour éviter les conflits avec les champs existants.

## Champs OpenID Connect

Le tableau suivant répertorie les champs OpenID Connect et les logiciels de comptabilité pour lesquels ils sont pris en charge.

| Champ et type                               | Description                                                                       | Disponibilité de la plateforme |
| ------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| **openId_name**, _chaîne_                   | Nom complet du client.                                                            | Sandbox                        |
| **openId_given_name**, _chaîne_             | Prénom du client.                                                                 | Sandbox, QuickBooks Online, Xero |
| **openId_middle_name**, _chaîne_            | Deuxième prénom du client.                                                        | Sandbox                        |
| **openId_family_name**, _chaîne_            | Nom de famille du client.                                                         | Sandbox, QuickBooks Online, Xero |
| **openId_nickname**, _chaîne_               | Nom alternatif ou familier du client.                                             | Sandbox                        |
| **openId_preferred_username**, _chaîne_     | Nom court que le client préfère être connu.                                       | Sandbox                        |
| **openId_gender**, _chaîne_                 | Genre du client.                                                                  | Sandbox                        |
| **openId_birthdate**, _chaîne_              | Date de naissance du client au format `AAAA-MM-JJ`.                              | Sandbox                        |
| **openId_address**, _objet JSON_            | Adresse postale que le client préfère pour être contacté.                         | Sandbox, QuickBooks Online     |
| **openId_email**, _chaîne_                  | Adresse e-mail que le client préfère pour être contacté.                          | Sandbox, QuickBooks Online, Xero |
| **openId_email_verified**, _booléen_        | Si `true`, cette adresse e-mail a été vérifiée.                                  | Sandbox, QuickBooks Online     |
| **openId_phone_number**, _chaîne_           | Numéro de téléphone que le client préfère pour être contacté.                    | Sandbox, QuickBooks Online     |
| **openId_phone_number_verified**, _booléen_ | Si `true`, ce numéro de téléphone a été vérifié.                                 | Sandbox, QuickBooks Online     |
| **openId_locale**, _chaîne_                 | Code de langue et de pays pour la locale du client. Par exemple : `en-GB`.       | Sandbox                        |
| **openId_profile**, _chaîne_                | URL de la page de profil du client.                                               | Sandbox                        |
| **openId_picture**, _chaîne_                | URL de l'image de profil du client.                                               | Sandbox                        |
| **openId_website**, _chaîne_                | URL de la page web ou du blog du client.                                          | Sandbox                        |
| **openId_zoneinfo**, _chaîne_               | Fuseau horaire pour l'emplacement du client. Par exemple : `Europe/Paris`.       | Sandbox                        |
| **openId_birthdate**, _chaîne_              | Date de naissance du client au format `AAAA-MM-JJ`.                              | Sandbox                        |
| **openId_updated_at**, _nombre_             | Heure à laquelle le client a mis à jour son profil pour la dernière fois.        | Sandbox                        |
