---
title: "Personnaliser les paramètres de Link dans le portail"
sidebar_label: Paramètres de Link dans le portail
description: "Paramètres disponibles pour adapter Link aux besoins de votre parcours d'autorisation"
banner_image: "/fr-ca/img/banners/link.png"
---

## Aperçu

Nos paramètres Link vous permettent de configurer le processus d'autorisation en fonction de vos besoins en matière de données et de personnaliser Link pour qu'il corresponde à votre marque. Vous pouvez personnaliser ces paramètres dans le [portail Codat](https://app.codat.io/) dans **[Paramètres > Flux d'autorisation > Link](https://app.codat.io/settings/link-settings)**.

## Connexions de données

#### Intégrations de bac à sable

Permettre aux intégrations de bac à sable et de test d'apparaître dans le flux de liaison.

Certaines intégrations séparent leurs données de production et de bac à sable dans des environnements distincts, chacun avec ses propres identifiants uniques, par exemple QuickBooks Online. L'activation de cette fonctionnalité afficherait à la fois _QuickBooks Online_ et _QuickBooks Online Sandbox_ dans le flux de liaison. Cela inclurait également les intégrations _Codat Sandbox_.

:::note Intégrations de bac à sable dans le flux d'autorisation

Les intégrations de bac à sable apparaissent dans le flux d'autorisation par défaut. Vous pouvez remplacer ce comportement en ajoutant le paramètre de requête `link.showSandboxIntegrations` à l'URL Link avec une valeur de `true` ou `false`.
:::

#### Catégories d'intégration

Sélectionnez les types d'intégrations (comptabilité, bancaire ou commerce) que vous souhaitez que les clients connectent. Vous pouvez rendre chaque type d'intégration optionnel si vous souhaitez que vos clients puissent ignorer le partage.

Avant de les activer, vous devez [configurer une ou plusieurs intégrations](/core-concepts/integrations) pour chaque type d'intégration. Sinon, l'interface utilisateur Link affichera une page « Sélectionnez votre plateforme » vide lorsque les entreprises tenteront de lier leurs données comptables, bancaires ou commerciales.

Pour le type d'intégration Documents d'affaires, vous devez l'activer dans **Paramètres > Intégrations > Autres intégrations**. Vous pouvez également informer vos utilisateurs des fichiers qu'ils doivent télécharger pour chaque catégorie d'intégration en fournissant une description sous **Téléchargement de fichiers**.

:::tip Intégrations bancaires dans le flux d'autorisation

Vous ne devriez activer qu'une seule des intégrations bancaires à la fois. Cela garantit une utilisation optimale de Link, car chaque intégration bancaire est [représentée différemment](/integrations/banking/overview#banking-integrations-in-the-authorization-flow) dans le flux d'autorisation et peut confondre le client.
:::

:::tip Activer les utilisateurs sans identifiants

Dans l'organisation de votre client, la personne qui s'inscrit via Codat peut ne pas avoir ses identifiants à portée de main. Par exemple, ce peut être leur comptable qui se connecte réellement à leur logiciel de comptabilité.

Pour leur permettre de continuer et d'explorer votre produit, rendez l'autorisation préalable pour différentes catégories d'intégration optionnelle. Plus tard, rappelez-leur d'autoriser ou donnez-leur la possibilité de partager une URL Link ou même un lien `mailto:`.

:::

## Intégration

#### Support multi-entité

Utilisez ce paramètre pour permettre à vos clients d'autoriser l'accès à plusieurs entreprises au sein d'un seul logiciel de comptabilité dans le même flux de connexion. L'activation de cette option affichera une étape de sélection de filiale supplémentaire dans le flux.

Ce paramètre n'est pertinent que pour les intégrations qui permettent à leurs utilisateurs d'exploiter plusieurs filiales dans le même compte. La capture d'écran ci-dessous illustre la différence dans le flux de connexion pour les intégrations multi-entités avec le paramètre désactivé (gauche) et activé (droite).

<img
  src="/fr-ca/img/auth-flow/multi-entity-setting-off-on.png"
  alt="Une capture d'écran comparative qui montre la différence du flux de connexion avec le paramètre multi-entité désactivé et activé. Sans le paramètre, l'écran affiche une liste déroulante de plusieurs entités trouvées dans un compte NetSuite, et il n'est possible de sélectionner qu'une seule entité. Avec le paramètre activé, l'écran affiche une liste de contrôle de plusieurs entités trouvées dans un compte NetSuite et toutes les entités sont sélectionnées."
/>

#### Avertissement de support mobile

Informez vos utilisateurs que certaines intégrations ne sont pas optimisées ou ne se connecteront pas via mobile lors de l'accès au parcours de connexion sur mobile.

#### Sécurisé par Codat

Basculez l'affichage du logo _Sécurisé par Codat_ sur votre flux d'autorisation.

#### Redémarrer le parcours

Permettez à vos clients de redémarrer le processus de liaison pour le logiciel de comptabilité en cas d'échec de leur première tentative de connexion. L'activation de ce paramètre ajoutera un bouton « Réessayer » à la page d'erreur de connexion.

Il est possible de redémarrer le processus de liaison pour les plateformes de commerce et bancaires par défaut et aucun paramètre supplémentaire n'est requis.

#### Page d'accueil

Si activée, une page supplémentaire apparaîtra au début de Link. Le contenu de la page est personnalisable, ce qui est une excellente occasion d'expliquer la valeur de la liaison. Vous pouvez personnaliser l'en-tête et le corps du message.

#### Logo de l'entreprise

Activez ce paramètre pour que le logo de l'entreprise défini dans [Paramètres de marque](/auth-flow/customize/branding) soit affiché sur la page d'accueil du flux Link. Vous devez également avoir le paramètre [Page d'accueil](/auth-flow/customize/customize-link#landing-page) activé pour que ce paramètre prenne effet.

#### Panneau de gauche

Spécifiez le message qui apparaît sur le panneau de gauche tout au long du flux Link. C'est l'occasion de clarifier ce que l'utilisateur est sur le point de faire. Vous pouvez personnaliser l'en-tête et le corps du message.

#### Consentement d'accès aux données

Il s'agit d'un champ obligatoire où vous devez spécifier le message que vous souhaitez afficher aux entreprises lorsqu'elles partagent des données avec vous.

En option, vous pouvez ajouter un message et une URL pour les conditions générales que vous souhaitez que vos clients lisent avant de partager leurs données avec vous.

#### Informations sur le type de données

Énumérez les données que vous allez collecter pour chacune des catégories d'intégration (comptabilité, bancaire ou commerce). Cela informe l'utilisateur des types de données que Codat utilisera après la liaison de la source de données.

:::tip Types de données avec Plaid

Si vous avez activé Plaid comme intégration bancaire, les informations de cette section ne seront pas affichées dans Link. Cela est dû au fait que Plaid fournit sa propre liste de types de données dans son flux d'autorisation.
:::

**Dialogue de confirmation de sortie**
Personnalisez le message que vos clients voient s'ils annulent avant de terminer le processus de liaison.

**Page d'invitation de l'entreprise**
Une fois que vous fournissez à vos clients une URL Link, ils accèdent à une page où ils fournissent le nom de leur entreprise et commencent le processus de liaison. Vous pouvez personnaliser l'en-tête et le corps du message sur cette page.

## Informations sur le client

#### Aide et support

Personnalisez vos messages d'aide et de support qui sont affichés tout au long du flux Link.

#### Sécurité des données

Fournissez un lien vers votre politique de sécurité des données.

#### Contenu des conditions générales

Spécifiez le message que vous souhaitez afficher aux entreprises si vous avez des conditions générales spécifiques que vous souhaitez qu'elles consultent avant la liaison.

---

## Lire ensuite

- [Configurer la marque de votre entreprise](/auth-flow/customize/branding)
