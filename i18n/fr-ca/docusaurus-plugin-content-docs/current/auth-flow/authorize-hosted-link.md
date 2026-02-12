---
title: "Autoriser avec Hosted Link"
description: "Découvrez comment intégrer Hosted Link dans votre flux d'autorisation"
unlisted: true
displayed_sidebar: docs
---

<head>
  <meta property="og:image" content="/fr-ca/img/link/link-banner.png" />
</head>

:::tip Codat recommande Link SDK

Au lieu de Hosted Link, utilisez le [Link SDK](/auth-flow/authorize-embedded-link) pour intégrer complètement notre flux d'autorisation flexible et personnalisable dans votre application.

Vous bénéficierez de notre vaste expérience combinée aux meilleures pratiques d'autorisation, offrant à vos utilisateurs une expérience native du flux d'autorisation qui atteint un taux de conversion moyen de **89%**.

:::

## Aperçu

Si vous ne pouvez pas utiliser notre Link SDK, vous pouvez choisir Hosted Link comme solution d'autorisation prête à l'emploi construite, fournie et hébergée par Codat.

Pour connecter les logiciels financiers de vos clients avec Hosted Link, vous pouvez :

- Diriger votre client depuis votre application existante vers le flux d'autorisation Hosted Link de manière programmatique, ou
- Partager manuellement l'URL Link avec votre client.

![](/img/link/link-banner.png)

:::info Démo indicative

Vous êtes curieux de savoir où le flux Hosted Link de Codat pourrait s'intégrer dans l'expérience de votre client ? Découvrez comment une entreprise fintech fictive l'utilise [dans notre démo](https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc).

:::

## Intégrer Link dans votre application

Tout d'abord, créez une [entreprise](../terms/company.md) pour représenter votre PME dans Codat. Nous recommandons de le faire au moment où votre utilisateur PME s'inscrit dans votre application. De cette façon, vous pouvez suivre l'état de leur connexion dès le premier jour.

Pour créer une nouvelle entreprise, utilisez l'endpoint [Créer une entreprise](/platform-api#/operations/create-company) et fournissez un nom pour l'entreprise dans le corps de la requête. Pour plus de détails sur la gestion et la suppression des entreprises existantes, consultez [Gérer les entreprises avec notre API](/using-the-api/managing-companies).

:::tip Utilisez l'identifiant de votre client pour le nom de l'entreprise

Pour le paramètre `name` de l'entreprise, nous recommandons de transmettre l'identifiant que vous utilisez pour le client dans **votre** système interne. Cela facilite l'identification de l'entreprise Codat qui correspond à votre enregistrement du client.
:::

Examinez les paramètres dans l'exemple de réponse à la création d'une nouvelle entreprise :

```json
{
  // companyId - conservez-le
  "id": "1126743b-113d-4d72-b14f-36d6742df487",
  "name": "Superapp",
  "platform": "",
  // redirect - utilisez pour rediriger votre client vers Hosted Link
  "redirect": "https://link.codat.io/company/1126743b-113d-4d72-b14f-36d6742df487",
  "dataConnections": [],
  "created": "2022-05-16T14:55:21.6076495Z"
}
```

À partir de la réponse, conservez ce qui suit :

- `companyId`, car vous en aurez besoin pour diriger vos clients vers Link et gérer leurs connexions ;
- Valeur d'URL `redirect`, car vous utiliserez cette URL dans votre application pour diriger le client afin qu'il commence son parcours Link.

Une fois que votre client a terminé le flux Link, il sera redirigé vers l'URL que vous avez définie dans les [paramètres Link](/auth-flow/customize/set-up-redirects). Vous pouvez également présenter à votre client un écran de confirmation montrant les plateformes qu'il a liées.

#### Surveiller l'état de connexion

Pour améliorer votre expérience Hosted Link, [configurez un webhook](/using-the-api/webhooks/event-types) pour lorsqu'un utilisateur autorise une connexion de données de l'entreprise nouvellement créée afin que vous puissiez agir en conséquence dans votre application.

#### Gérer les utilisateurs existants avec des connexions actives

Dirigez l'utilisateur vers l'URL Link `redirect` que vous pouvez récupérer à partir des métadonnées d'une entreprise. Cela leur permet de modifier leurs connexions existantes via l'interface utilisateur Hosted Link.

Si vous créez une nouvelle entreprise et établissez une nouvelle connexion pour un client précédemment connecté, vous pourriez être facturé pour cela en fonction de votre contrat.

#### Gérer les utilisateurs existants avec des connexions en attente

Lorsqu'un utilisateur initie une connexion mais ne parvient pas à autoriser l'accès à sa plateforme financière, une connexion de données est créée dans un [statut en attente](/core-concepts/connections#data-connection-status) dans l'entreprise Codat respective.

Dans ce scénario, permettez à votre utilisateur d'autoriser cette connexion en l'envoyant directement à l'écran d'authentification tiers. Utilisez la valeur `linkUrl` du tableau `dataConnections` dans les métadonnées de l'entreprise. Cela invitera l'utilisateur à autoriser la connexion à sa plateforme financière.

## Utiliser l'URL pour initier Link

Vous pouvez demander des mesures de sécurité supplémentaires dans Hosted Link. Les URL Link peuvent avoir un mot de passe à usage unique (OTP) ajouté comme paramètre de requête pour limiter la validité et le nombre d'utilisations de ces URL. Contactez votre gestionnaire de compte si vous souhaitez activer ces mesures.

:::tip Validité de Link
Les URL Link améliorées par les OTP se comportent comme suit :

- Vos clients ne peuvent pas utiliser la même URL Link plus d'une fois.
- Les URL Link spécifiques à l'entreprise et à la connexion expirent après un jour même si elles n'ont pas été utilisées.
  :::

#### Utiliser l'URL Hosted Link

Utilisez l'URL Hosted Link si la connexion de votre client est destinée à être persistante et que votre client peut avoir besoin de consulter ou de mettre à jour sa connexion à l'avenir.

Pour initier le flux, suivez ces étapes :

1. Créez une [entreprise via le portail](/configure/portal/companies#add-a-new-company) pour votre client.
2. Accédez à la page **Entreprises** dans le portail.
3. Trouvez l'entreprise que vous avez créée pour le client et cliquez sur **Demander des données** à côté du nom de l'entreprise.
4. Copiez l'URL Link de la boîte qui apparaît et partagez-la avec le client. Cela permettra au client de créer et d'autoriser une connexion de données.

Si un utilisateur a déjà une connexion d'intégration qui n'a pas été autorisée et qui n'est pas dans un état actif, cliquez sur le nom de l'intégration et copiez l'URL de la section **Connexions** au lieu de l'URL Link. Partagez ce lien avec l'utilisateur pour lui permettre d'autoriser la connexion spécifique.

<img
  src="/fr-ca/img/old/4c41ef0-manage.png"
  alt="Modal d'URL de connexion pour gérer une connexion existante"
/>

:::warning Paramètres de requête dans les URL Link

Si votre application ajoute déjà des paramètres de requête aux URL Link (par exemple, en ajoutant `?link.showSandboxIntegrations=false`), confirmez que votre code peut gérer les URL qui contiennent déjà des chaînes de requête.

:::

#### Utiliser l'URL Inviter une entreprise

:::warning Non compatible avec les OTP

Par défaut, Hosted Link a une autorisation supplémentaire activée qui utilise des OTP. En conséquence, il n'est pas possible d'utiliser le bouton générique **Inviter une entreprise** pour inviter vos clients à partager leurs données.

Contactez votre gestionnaire de compte si vous souhaitez désactiver ces mesures.

:::

Nous recommandons d'utiliser l'_URL Inviter une entreprise_ si ces deux critères s'appliquent à votre cas d'utilisation :

- Vous souhaitez intégrer un grand nombre de nouvelles entreprises sans avoir besoin de spécifier les noms ou les références d'entreprise, et
- Votre entreprise et votre client n'ont pas besoin de gérer, consulter ou mettre à jour les connexions à l'avenir.

Pour obtenir l'_URL Inviter une entreprise_, accédez à la page **Entreprises** dans le [portail Codat](https://app.codat.io/companies) et cliquez sur le bouton **Inviter une entreprise**. Avant de partager l'URL, vérifiez que vous avez [personnalisé](/auth-flow/customize/customize-link) le flux Link comme souhaité.

## Personnaliser le flux Link

Nos paramètres Link vous permettent de configurer le processus d'autorisation en fonction de vos besoins en matière de données et de gérer les visuels de Link pour qu'ils correspondent à votre marque. Vous pouvez personnaliser ces paramètres dans le [portail Codat](https://app.codat.io/settings) dans **Paramètres > Flux d'autorisation > Link**.

Nous fournissons des instructions détaillées sur l'utilisation de chaque paramètre dans notre documentation :

- [Personnaliser les paramètres de Link](/auth-flow/customize/customize-link)
- [Configurer la marque de votre entreprise](/auth-flow/customize/branding)
- [Configurer les URL de redirection](/auth-flow/customize/set-up-redirects)

## Limitations

Notez les limitations suivantes de la solution Hosted Link :

- Hosted Link n'est pas compatible avec les iframes car cela va à l'encontre de nos politiques de sécurité.
- Certains utilisateurs peuvent être préoccupés par le partage de leurs données sur un domaine `codat.io`. Envisagez de les avertir de visiter un site web tiers pour le processus d'autorisation.

Pour éviter cela, essayez plutôt notre [solution Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link).

---

## Lire ensuite

- En savoir plus sur notre [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
