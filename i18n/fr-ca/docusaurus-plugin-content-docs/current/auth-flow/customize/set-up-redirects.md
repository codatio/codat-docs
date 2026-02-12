---
title: "Configurer les URL de redirection dans le portail"
sidebar_label: Redirections
description: "Complétez le parcours d'autorisation de votre client avec un emplacement de redirection"
displayed_sidebar: docs
banner_image: "/fr-ca/img/banners/link.png"
---

## Aperçu

Une fois que vos clients ont autorisé avec succès la connexion à leurs données via [Hosted Link](/auth-flow/authorize-hosted-link), vous pouvez les rediriger vers un autre site web. Il existe plusieurs façons de rediriger vos clients :

- [Rediriger vers une URL statique](#redirect-to-a-static-url)
- [Rediriger avec des paramètres de requête personnalisés](#redirect-with-custom-query-parameters)
- [Rediriger avec des paramètres de requête réservés](#redirect-with-reserved-query-parameters)

:::note Voir un exemple

Vous ne savez pas comment gérer les paramètres dans votre site web ? [Voir un exemple ici](https://github.com/mcclowes/hosted-link-redirect-page).
:::

## Configurer les paramètres de redirection

Vous pouvez trouver la [page des paramètres de redirection](https://app.codat.io/settings/redirects) dans le portail :

1. Dans la barre de navigation, cliquez sur **Paramètres**.
2. Sur la page Paramètres, choisissez **Flux d'autorisation > Redirections**.

## Rediriger vers une URL statique

Une URL statique est une adresse web unique et inchangée vers laquelle chaque client serait dirigé. Pour la définir, entrez l'adresse du site web vers lequel vous souhaitez rediriger vos clients dans le champ **URL de redirection > URL**.

Vous pouvez ignorer les autres paramètres de la page.

## Rediriger avec des paramètres de requête réservés

Vous pouvez rediriger conditionnellement les utilisateurs en fonction de ce qui se passe pendant l'autorisation.

Codat prend en charge un certain nombre de paramètres de requête réservés pour les redirections. Si vous ajoutez des paramètres réservés à l'URL de redirection que vous envoyez à votre client, Codat remplacera les paramètres par les informations pertinentes.

Pour configurer une redirection avec des paramètres de requête réservés, entrez une URL de base avec les paramètres réservés que vous souhaitez utiliser pour construire la redirection dans le champ **URL de redirection > URL**.

Pour ajouter un paramètre, encadrez-le d'accolades. Par exemple :

```http
https://redirect.site/{sourceType}/?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
```

Si vous utilisez les valeurs de paramètre de redirection ci-dessus, votre client est redirigé vers :

```http
https://redirect.site/accounting/?flow=Codat&statuscode=403&errormessage=User%20cancelled
```

| Paramètres réservés de Codat | Valeurs de substitution                                  | Informations supplémentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :--------------------------- | :------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                   | GUID (identifiant global unique)                         | Identifiant du client qui complète le flux d'autorisation. **Remarque** : En tant que client Codat, vous pouvez avoir plusieurs instances Codat. Chacune de ces instances aura un `clientId` séparé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `connectionId`               | GUID                                                     | Identifiant de la connexion de données pour laquelle le flux d'autorisation a été complété.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `companyId`                  | GUID                                                     | Identifiant de l'entreprise qui complète le flux d'autorisation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `integrationId`              | GUID                                                     | Identifiant de l'intégration que l'entreprise a autorisée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `sourceId`                   | GUID                                                     | Identifiant de la source de données pour l'intégration autorisée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `platform`                   | par exemple `gbol`, `mqjo`, `zsth`, `ugxp`               | Clé à 4 caractères de la plateforme utilisée pour référencer les intégrations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `platformName`               | par exemple `Xero`, `Sandbox`, `Square`                  | Nom de la plateforme tel qu'affiché dans le portail Codat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `sourceType`                 | Accounting, Banking, BankFeed, Commerce, Expense, Other | Nom de la source utilisée pour récupérer les données.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `statusCode`                 | `200`, `201`, `403`, `500`, `501`                        | Codat normalise les codes d'état renvoyés par les intégrations : <br/> **200** = Succès - la demande de l'utilisateur a été satisfaite. <br/> **201** = Aucun contenu - réussi, mais aucune information sur la connexion de données ne sera disponible. <br/>_Scénario possible_ : Un utilisateur visite Link avec une connexion à sa source comptable déjà établie, il ne prend donc aucune mesure avant de quitter le flux. <br/> **403** = Non disponible. <br/>_Scénario possible_ : Un utilisateur choisit de quitter le flux Link avant que le processus de liaison ne soit terminé. <br/> **501** = Plateforme non prise en charge. <br/>_Scénario possible_ : Un utilisateur choisit une intégration qui n'est pas prise en charge par le client. À ce stade, le client leur offre une option alternative en dehors des flux Codat. <br/> **500** = Erreur interne du serveur. Codat normalise toutes les erreurs qui ne correspondent pas à l'une des catégories ci-dessus en un code 500 - Erreur interne du serveur. |
| `errorMessage`               |                                                          | Codat normalise les messages d'erreur pour les codes d'état. Les messages d'erreur renvoyés dans la redirection seront toujours mappés avec les codes d'état énumérés ci-dessus. <br/> **403** = "User cancelled." <br/> **500** = "Unknown error occurred." <br/> **501** = "Not supported." <br/> **Remarque** : Si vous souhaitez utiliser le message d'erreur original de l'intégration, utilisez `statusText`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `statusText`                 | _Chaîne_                                                 | Chaîne telle qu'elle est renvoyée par l'intégration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `data.company.companyName`   | _Chaîne_                                                 | Le nom de la partie connectée dans la plateforme sous-jacente. <br/>Cela correspond à la propriété nom de l'entreprise dans l'[ensemble de données d'informations sur l'entreprise](/accounting-api#/schemas/CompanyDataset).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

:::note Disponibilité des paramètres de requête réservés
Actuellement, le `data.company.companyName` n'est pris en charge que pour les intégrations suivantes :

- **Comptabilité** : Dynamics 365 Business Central, NetSuite, QuickBooks Online, Sage Intacct et Xero.
  :::

:::info Sensibilité à la casse

Les noms des paramètres de requête sont sensibles à la casse, par exemple `companyId` n'est pas identique à `companyid`.
:::

<details>
  <summary><b>Exemple : Utiliser les paramètres de redirection pour voir les erreurs dans le flux Link</b></summary>

URL de redirection :

```
https://www.mybank.io/{integrationType}?flow=Codat&statuscode={statusCode}&errormessage={errorMessage}
```

1.  Pour un utilisateur qui authentifie la connexion et peut être redirigé vers l'étape suivante du flux, la redirection serait :

    ```http
    https://www.mybank.io/accounting?flow=Codat&statuscode=200&errormessage=
    ```

2.  Pour un utilisateur qui quitte le processus de liaison sans fournir l'accès à ses données financières parce que sa plateforme n'est pas prise en charge ou qu'il ne souhaite pas fournir l'accès à ses données, la redirection ci-dessous serait l'endroit où il peut télécharger les documents pertinents manuellement.

    ```http
    https://www.mybank.io/accounting?flow=Codat&statuscode=403&errormessage=User%20cancelled
    ```

3.  Pour un utilisateur qui rencontre une erreur inattendue pendant le processus de liaison, la redirection ci-dessous serait l'endroit où il peut contacter votre équipe de support pour obtenir de l'aide.
    ```http
    https://www.mybank.io/accounting?flow=Codat&statuscode=500&errormessage= Unknown%20error%20occurred
    ```

</details>

## Rediriger avec des paramètres de requête personnalisés

Codat prend en charge les paramètres de requête personnalisés pour les redirections. Vous pouvez définir vos propres valeurs pour chaque paramètre personnalisé afin de pouvoir diriger différents clients vers, par exemple, différentes versions d'une page de destination. Pour ce faire, vous devez ajouter des paramètres de requête personnalisés au paramètre de redirection.

Pour configurer une redirection avec des paramètres de requête personnalisés :

1. Dans la zone **URL de redirection**, entrez une URL de base avec les paramètres que vous souhaitez utiliser pour construire la redirection personnalisée. Pour ajouter un paramètre, encadrez-le d'accolades.
   Par exemple : `https://mybank.io/{customParam}/show`.
2. Avant d'envoyer une **URL Link** à un client, modifiez l'URL en ajoutant un point d'interrogation et le nom et la valeur du paramètre à la fin.
   Par exemple : `https://link.codat.io/.../link?customParam=123456`.
   Si vous souhaitez ajouter plus d'un paramètre, séparez-les par un esperluette (`&`).
3. Si vous utilisez les valeurs de paramètre de redirection et d'URL Link ci-dessus, votre client est redirigé vers `https://redirect.site/123456/show`.

:::caution Encodage de caractères spéciaux

Assurez-vous que tous les caractères spéciaux utilisés dans l'URL Link sont correctement encodés, sinon les paramètres personnalisés peuvent ne pas être transmis correctement.
:::

:::caution Paramètres personnalisés non spécifiés

Il n'est pas possible de spécifier des paramètres par défaut. Si vous n'ajoutez pas de paramètre à l'URL Link lors de la création de la redirection, il est remplacé par une chaîne vide.

<details>
  <summary><b>Exemple : Comportement de redirection lorsque des paramètres personnalisés sont manquants</b></summary>

Par exemple, si vous définissez votre URL de redirection sur l'URL ci-dessous...

```
https://www.mybank.io/{journeyType}/success?ClientType={clientType}
```

...les URL Link donneraient les résultats suivants :

| URL Link                                                | Redirection calculée                                 |
| :------------------------------------------------------ | :--------------------------------------------------- |
| `...f67e946f84c9/link?journeyType=demo&clientType=test` | `https://www.mybank.io/demo/success?ClientType=test` |
| `...f67e946f84c9/link?clientType=test`                  | `https://www.mybank.io//success?ClientType=test`     |
| `...f67e946f84c9/link?journeyType=demo`                 | `https://www.mybank.io/demo/success?ClientType=`     |
| `...f67e946f84c9/link`                                  | `https://www.mybank.io//success?ClientType=`         |

</details>
:::

## Hôtes dynamiques

Il est également possible d'envoyer les utilisateurs vers des sites web et sous-domaines complètement différents.

| Paramètre d'URL de redirection                | URL Link                                     | Se résout en...                           |
| :-------------------------------------------- | :------------------------------------------- | :---------------------------------------- |
| `https://{environment}.mybank.io/success`     | `...f67e946f84c9/link?environment=uat`       | `https://uat.mybank.io/success`           |
| `https://mybank{customerType}.io/success`     | `...f67e946f84c9/link?customerType=business` | `https://mybank{business}.io/success`     |
| `https://{website}/success`                   | `...f67e946f84c9/link?website=mybank.io`     | `https://mybank.io/success`               |
| `https://mybank.{region}/success`             | `...f67e946f84c9/link?region=com`            | `https://mybank.com/success`              |
| `https://{business}.io/success`               | `...f67e946f84c9/link?business=mybank`       | `https://mybank.io/success`               |

<br />

Pour utiliser ce comportement d'hôte dynamique, vous devrez lister chaque hôte autorisé dans **URL de redirection autorisées**.

Pour l'exemple ci-dessus, `https://{environment}.mybank.io/success`, vous devriez explicitement lister tous les environnements valides :

- `https://local.mybank.io/success`
- `https://uat.mybank.io/success`
- `https://prod.mybank.io/success`

**Remarque** : Les URL doivent être des URL valides, ce qui signifie qu'elles doivent avoir _https://_ ou _http://_ ajouté avant elles.

:::note Paramètres réservés

N'utilisez pas de paramètres réservés dans vos hôtes de redirection.
:::

## Hôtes de redirection autorisés

Les hôtes dynamiques devront être définis ici. Un suffixe de domaine différent compterait comme un hôte différent - par exemple, mybank.io et mybank.com devraient être listés séparément.

Si vous n'utilisez pas la fonctionnalité d'hôte dynamique, vous n'avez pas besoin d'utiliser ce paramètre.

---

## Lire ensuite

- En savoir plus sur notre [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
