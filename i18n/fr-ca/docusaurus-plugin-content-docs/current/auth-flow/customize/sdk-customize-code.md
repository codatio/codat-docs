---
title: "Personnaliser l'interface et le comportement de Link avec les propriétés du SDK"
sidebar_label: "Gérer Link dans le code"
description: "Exercez un contrôle programmatique avancé sur les paramètres de l'interface utilisateur du flux d'authentification Link"
banner_image: "/fr-ca/img/banners/link.png"
---

## Aperçu

La plupart de la configuration du flux d'authentification est actuellement gérée dans <a href="https://app.codat.io/settings/" target="_blank">**Paramètres du flux d'authentification**</a> dans le portail Codat.

Cependant, vous pouvez utiliser la propriété `options` du SDK pour remplacer les paramètres définis dans le portail et les contrôler de manière programmatique à la place. Cela est utile si vous souhaitez plus de contrôle sur l'interface utilisateur en fonction de la logique spécifique à l'application ou si vous voulez la faire varier de manière conditionnelle.

```jsx live
function AuthFlow() {
  const onConnection = (connection) =>
    alert(`Connection: ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");

  const config = {
    companyId: "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
    options: {
      nonModal: false,
      showLandingPage: true,
      showSandboxIntegrations: true,
      //theme: {...},
      //sourceTypes: {
      //  accounting: {...},
      //},
      //text: {...},
      enableAdditionalConsent: true,
      enableMultiEntityLinking: true,
    },
  };

  return (
    <div>
      <p>Click the button below to start authing.</p>

      <CodatLink {...config} />
    </div>
  );
}
```

:::caution Fonctionnalité avancée

Comme l'objet `options` remplace les paramètres Link définis dans le portail, cela peut entraîner de la confusion quant à la source de vérité pour ce que voient les utilisateurs. Assurez-vous de documenter et de communiquer votre utilisation de la propriété `options` en interne.
:::

## Propriétés

```js
<CodatLink
  companyId={companyId}
  onConnectionStarted={onConnectionStarted}
  onConnection={onConnection}
  onError={onError}
  onClose={onClose}
  onFinish={onFinish}
  options={{
    nonModal: true,
    showLandingPage: true,
    showSandboxIntegrations: true,
    theme: {...},
    sourceTypes: {
      accounting: {...},
      banking: {...},
      commerce: {...},
    },
    text: {...},
    enableAdditionalConsent: true,
    enableMultiEntityLinking: true,
  }}
/>
```

La propriété `options` est facultative et accepte un objet contenant les propriétés facultatives suivantes :

| Propriété                  | Description                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nonModal`                 | Détermine si Link est initialisé avec un style non modal (sans bordure et sans bouton de fermeture).                                            |
| `showLandingPage`          | Détermine si une page d'accueil supplémentaire est affichée à l'utilisateur au début de Link.                                                   |
| `showSandboxIntegrations`  | Contrôle si les intégrations qui connectent uniquement des données Sandbox sont affichées pour la sélection.                                    |
| `theme`                    | Contient des options qui contrôlent l'apparence visuelle du flux Link.                                                                          |
| `sourceTypes`              | Contrôle les types de sources de données (Comptabilité, Commerce, Bancaire et Documents d'affaires) que l'utilisateur peut connecter ou pour lesquels il peut télécharger des fichiers. |
| `text`                     | Contient des options qui contrôlent le texte affiché à l'utilisateur. Le Markdown est pris en charge.                                           |
| `enableAdditionalConsent`  | Détermine si un parcours de consentement supplémentaire pour d'autres cas d'utilisation est affiché à l'utilisateur.                            |
| `enableMultiEntityLinking` | Permet aux utilisateurs d'autoriser l'accès à plusieurs entreprises au sein d'une seule plateforme comptable en une seule fois pour les intégrations compatibles. |

L'objet est appliqué **au moment où le composant `CodatLink` est monté**, donc il ne prend pas en charge le rechargement à chaud. Modifiez les options et actualisez la page pour voir les options reflétées.

:::tip Essayez-le !

Téléchargez notre [fichier d'exemple](/documents/example-link-options.json), modifiez-le comme vous le souhaitez et utilisez-le dans notre [démo Options](https://codat-intg-link-sdk-v2-react-18-ui.azurewebsites.net/) pour voir comment l'interface Link reflète les modifications que vous apportez aux propriétés. Vous aurez besoin d'un `companyId` pour cela.
:::

### Style non modal

Par défaut, le composant Link est conçu pour être présenté dans une fenêtre modale. Pour remplacer cela, vous pouvez utiliser le paramètre d'options `nonModal`. Lorsqu'il est défini sur `true`, il :

- Masque l'icône de fermeture.
- Supprime la bordure et le rembourrage de style modal.

Vous pouvez voir un [exemple de cela sur GitHub](https://github.com/codatio/sdk-link/tree/main/examples/non-modal).

### Page d'accueil

Lorsque la propriété `showLandingPage` est définie sur `true`, une page supplémentaire est affichée à l'utilisateur au début du flux Link. Lorsqu'elle est définie sur `false`, l'utilisateur est dirigé directement vers la page de navigation.

### Intégrations Sandbox

La propriété `showSandboxIntegrations` contrôle si les intégrations Sandbox sont affichées pour la sélection. Cela devrait être défini sur `true` pour les environnements de test et `false` pour les environnements de production.

### Thème

Utilisez la propriété `colors` de l'option `theme` pour définir la valeur hexadécimale de la couleur `primary` pour les boutons, les liens et les animations de chargement.

### Types de sources

L'option `sourceTypes` contrôle les types de sources que l'utilisateur peut connecter via le flux Link. Utilisez les propriétés `accounting`, `banking`, `commerce` et `businessDocuments` pour indiquer le type de source souhaité.

Pour chaque type de source, vous pouvez également configurer les propriétés suivantes :

- `optional` : il s'agit d'une propriété obligatoire. Lorsqu'elle est définie sur `true`, l'utilisateur peut terminer le flux sans connecter une intégration du type spécifié ou télécharger des fichiers pertinents.
- `enableIntegrations` : il s'agit d'une propriété obligatoire. Lorsqu'elle est définie sur `true`, elle permet à l'utilisateur de se connecter à une intégration du type spécifié.
- `enableFileUpload` : il s'agit d'une propriété obligatoire. Lorsqu'elle est définie sur `true`, elle permet à l'utilisateur de télécharger des documents pertinents. Vous devez également activer les intégrations de téléchargement de fichiers pertinentes dans [Autres intégrations](https://app.codat.io/settings/integrations/other).
- `allowedIntegrations` : il s'agit d'une propriété facultative. Par défaut, toutes les intégrations configurées apparaissent dans Link. Ajoutez un tableau des clés de plateforme [comptables](/integrations/accounting/overview#platform-keys), [bancaires](/integrations/banking/overview#platform-keys) ou [commerciales](/integrations/commerce/overview#platform-keys) pertinentes à cette propriété pour filtrer la liste des plateformes affichées à l'utilisateur pendant le parcours d'autorisation.
- `dataTypes` : il s'agit d'une propriété facultative. Ajoutez un tableau de types de données que l'utilisateur partagera avec votre entreprise pour les afficher dans l'accordéon `Données de plateforme` sur l'écran de consentement. Si elle n'est pas définie, Link utilisera la configuration définie dans [Consentement d'accès aux données](https://app.codat.io/settings/link-settings/onboarding). Cela remplace les options de texte obsolètes `accounting.dataAccess.dataTypes`, `banking.dataAccess.dataTypes` et `commerce.dataAccess.dataTypes`.

:::tip Intégrations bancaires dans le flux d'authentification
Vous ne devriez avoir qu'une seule des intégrations bancaires activée à la fois. Cela garantit une utilisation optimale de Link, car chaque intégration bancaire est [représentée différemment](/integrations/banking/overview#banking-integrations-in-the-authorization-flow) dans le flux d'authentification et peut confondre le client.

:::

:::tip Activer les utilisateurs sans identifiants

Dans l'organisation de votre client, la personne qui s'inscrit via Codat peut ne pas avoir ses identifiants à portée de main. Par exemple, il peut s'agir de son comptable qui se connecte réellement à son logiciel de comptabilité.

Pour leur permettre de continuer et d'explorer votre produit, rendez l'autorisation initiale pour différentes catégories d'intégration facultative. Plus tard, rappelez-leur d'autoriser ou donnez-leur une option pour partager une URL Link ou même un lien `mailto:`.

:::

### Texte personnalisé

Utilisez la propriété `text` pour remplacer le texte affiché dans l'interface Link. Par exemple, vous pouvez détecter la langue parlée par l'utilisateur et définir le texte affiché en fonction de ses paramètres régionaux. Vous pouvez voir un [exemple simple de cela sur GitHub](https://github.com/codatio/sdk-link/tree/main/examples/locales).

La propriété accepte Markdown, ce qui signifie que vous pouvez ajouter des liens, des listes, des tableaux et plus encore à toutes les options de texte, à l'exception de `companyName`. Vous pouvez remplacer les options de texte suivantes :

| Option                                                                                                                                          | Type et description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `companyName`                                                                                                                                   | `string` <br/><br/> Le nom de votre entreprise affiché sur la dernière page du flux avant de connecter une intégration.                                                                                                                                                                                                                                                                                                                                                                                      |
| `landing.title`                                                                                                                                 | `string` _(accepte Markdown)_ <br/><br/>Titre de la page d'accueil affiché sur la première page que l'utilisateur voit. <br/> Activez la page d'accueil en définissant `showLandingPage` sur `true` ou en la configurant dans [Paramètres Link](https://app.codat.io/settings/link-settings/onboarding).                                                                                                                                                                                                     |
| `landing.subtitle`                                                                                                                              | `string` _(accepte Markdown)_ <br/><br/>Sous-titre de la page d'accueil affiché sur la première page que l'utilisateur voit. <br/> Activez la page d'accueil en définissant `showLandingPage` sur `true` ou en la configurant dans [Paramètres Link](https://app.codat.io/settings/link-settings/onboarding).                                                                                                                                                                                                |
| `landing.nextButton`                                                                                                                            | `string` <br/><br/>Texte affiché sur le bouton principal (de continuation) de la page d'accueil. Par défaut, cette option est définie sur `Next`.                                                                                                                                                                                                                                                                                                                                                            |
| `main.title`                                                                                                                                    | `string` _(accepte Markdown)_ <br/><br/>Titre affiché sur la page où l'utilisateur sélectionne les types de sources à connecter.                                                                                                                                                                                                                                                                                                                                                                             |
| `main.subtitle`                                                                                                                                 | `string` _(accepte Markdown)_ <br/><br/>Sous-titre affiché sur la page où l'utilisateur sélectionne les types de sources à connecter.                                                                                                                                                                                                                                                                                                                                                                        |
| `accounting.fileUpload.subtitle`                                                                                                                | `string` _(accepte Markdown)_ <br/><br/>Sous-titre affiché sur la page de téléchargement de fichiers comptables. <br/> Pour utiliser cela, activez le téléchargement de fichiers comptables en définissant l'[option de type de source](/auth-flow/customize/sdk-customize-code#source-types) sur `true` ou en la configurant dans [Autres intégrations](https://app.codat.io/settings/integrations/other).                                                                                                |
| `banking.fileUpload.subtitle`                                                                                                                   | `string` _(accepte Markdown)_ <br/><br/>Sous-titre affiché sur la page de téléchargement de fichiers bancaires. <br/> Pour utiliser cela, activez le téléchargement de fichiers bancaires en définissant l'[option de type de source](/auth-flow/customize/sdk-customize-code#source-types) sur `true` ou en la configurant dans [Autres intégrations](https://app.codat.io/settings/integrations/other).                                                                                                  |
| `businessDocuments.fileUpload.subtitle`                                                                                                         | `string` _(accepte Markdown)_ <br/><br/>Sous-titre affiché sur la page de téléchargement de documents d'affaires. <br/> Pour utiliser cela, activez le téléchargement de documents d'affaires en définissant l'[option de type de source](/auth-flow/customize/sdk-customize-code#source-types) sur `true` ou en la configurant dans [Autres intégrations](https://app.codat.io/settings/integrations/other).                                                                                              |
| `accounting.consents.title`<br/>`banking.consents.title`<br/>`commerce.consents.title`                                                          | `string` _(accepte Markdown)_ <br/><br/>Titre affiché sur la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale. Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Connectez votre compte {platformName} à {companyName}`.                                                                                                                                                                                                                     |
| `accounting.consents.subtitle`<br/>`banking.consents.subtitle`<br/>`commerce.consents.subtitle`                                                 | `string` _(accepte Markdown)_ <br/><br/>Sous-titre affiché sur la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale. Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Autoriser {companyName} à accéder à vos données {platformName}`.                                                                                                                                                                                                      |
| `accounting.dataAccess.consent`<br/>`banking.dataAccess.consent`<br/>`commerce.dataAccess.consent`                                              | ⚠️ **Obsolète** : Utilisez `accounting.consents.termsAndConditions`, `banking.consents.termsAndConditions` ou `commerce.consents.termsAndConditions` à la place. <br/><br/> `string` _(accepte Markdown)_ <br/><br/> Texte affiché sur la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale, sous la liste des types de données. Si vous souhaitez afficher un lien vers les conditions générales, ajoutez-le ici en utilisant Markdown.                           |
| `accounting.consents.termsAndConditions`<br/>`banking.consents.termsAndConditions`<br/>`commerce.consents.termsAndConditions`                   | `string` _(accepte Markdown)_ <br/><br/>Texte affiché sur la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale, sous la liste des types de données. Utilisez cela pour afficher les liens vers les conditions générales en utilisant Markdown.                                                                                                                                                                                                                       |
| `accounting.consents.purpose`<br/>`banking.consents.purpose`<br/>`commerce.consents.purpose`                                                    | `string` _(accepte Markdown)_ <br/><br/>Spécifie l'objectif de l'accès aux données. Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Autoriser {companyName} à accéder aux données {platformName}.`                                                                                                                                                                                                                                                                                  |
| `accounting.consents.access`<br/>`banking.consents.access`<br/>`commerce.consents.access`                                                       | `string` _(accepte Markdown)_ <br/><br/>Spécifie le type d'accès aux données requis (par exemple, lecture et écriture). Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Autoriser {companyName} à accéder aux données {platformName}.`                                                                                                                                                                                                                                              |
| `accounting.consents.accountInfo`<br/>`banking.consents.accountInfo`<br/>`commerce.consents.accountInfo`                                        | `string` _(accepte Markdown)_ <br/><br/>Spécifie les informations de compte que l'utilisateur partagera avec votre entreprise. Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Autoriser {companyName} à accéder aux données {platformName}.`                                                                                                                                                                                                                                        |
| `accounting.consents.retention`<br/>`banking.consents.retention`<br/>`commerce.consents.retention`                                              | `string` _(accepte Markdown)_ <br/><br/>Spécifie les conditions de conservation des données. Accepte les remplacements `{companyName}` et `{platformName}`, tels que `Autoriser {companyName} à accéder aux données {platformName}.`                                                                                                                                                                                                                                                                          |
| `accounting.dataAccess.nextButton`<br/>`banking.dataAccess.nextButton`<br/>`commerce.dataAccess.nextButton`                                     | ⚠️ **Obsolète** : Utilisez `accounting.consents.nextButton`, `banking.consents.nextButton` ou `commerce.consents.nextButton` à la place. <br/><br/> `string` <br/><br/> Texte affiché sur le bouton principal (de continuation) de la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale. Par défaut, cette option est définie sur `Next`.                                                                                                                            |
| `accounting.consents.nextButton`<br/>`banking.consents.nextButton`<br/>`commerce.consents.nextButton`                                           | `string` <br/><br/>Texte affiché sur le bouton principal (de continuation) de la dernière page du flux avant de connecter une plateforme comptable, bancaire ou commerciale. Par défaut, cette option est définie sur `Next`.                                                                                                                                                                                                                                                                                 |
| `accounting.dataAccess.dataTypes`<br/>`banking.dataAccess.dataTypes`<br/>`commerce.dataAccess.dataTypes`                                        | ⚠️ **Obsolète** : Utilisez la propriété `dataTypes` dans la configuration <a href="https://docs.codat.io/auth-flow/customize/sdk-customize-code#source-types">Types de sources</a> à la place. <br/><br/> `array[string]` _(accepte Markdown)_ <br/><br/> Liste des types de données demandés affichés sur la dernière page du flux avant de connecter un logiciel comptable, bancaire ou commercial.                                                                                                           |
| `accounting.dataAccess.additionalConsent.title`<br/>`banking.dataAccess.additionalConsent.title`<br/>`commerce.dataAccess.additionalConsent.title` | ⚠️ **Obsolète** : Utilisez `accounting.additionalConsents.title`, `banking.additionalConsents.title` ou `commerce.additionalConsents.title` à la place. <br/><br/> `string` _(accepte Markdown)_ <br/><br/> Titre affiché sur la page où le client consent à l'utilisation de ses données comptables, bancaires ou commerciales pour un cas d'utilisation supplémentaire. <br/><br/> Assurez-vous de configurer les [types de sources](/auth-flow/customize/sdk-customize-code#source-types) pour prendre en charge le flux de consentement supplémentaire. |
| `accounting.additionalConsents.title`<br/>`banking.additionalConsents.title`<br/>`commerce.additionalConsents.title`                            | `string` _(accepte Markdown)_ <br/><br/> Titre affiché sur la page où le client consent à l'utilisation de ses données comptables, bancaires ou commerciales pour un cas d'utilisation supplémentaire. <br/><br/> Assurez-vous de configurer les [types de sources](/auth-flow/customize/sdk-customize-code#source-types) pour prendre en charge le flux de consentement supplémentaire.                                                                                                                          |
| `accounting.dataAccess.additionalConsent.subtitle`<br/>`banking.dataAccess.additionalConsent.subtitle`<br/>`commerce.dataAccess.additionalConsent.subtitle` | ⚠️ **Obsolète** : Utilisez `accounting.additionalConsents.subtitle`, `banking.additionalConsents.subtitle` ou `commerce.additionalConsents.subtitle` à la place. <br/><br/> `string` _(accepte Markdown)_ <br/><br/> Sous-titre affiché sur la page où le client consent à l'utilisation de ses données comptables, bancaires ou commerciales pour un cas d'utilisation supplémentaire. <br/><br/> Assurez-vous de configurer les [types de sources](/auth-flow/customize/sdk-customize-code#source-types) pour prendre en charge le flux de consentement supplémentaire. |
| `accounting.additionalConsents.subtitle`<br/>`banking.additionalConsents.subtitle`<br/>`commerce.additionalConsents.subtitle`                   | `string` _(accepte Markdown)_ <br/><br/> Sous-titre affiché sur la page où le client consent à l'utilisation de ses données comptables, bancaires ou commerciales pour un cas d'utilisation supplémentaire. <br/><br/> Assurez-vous de configurer les [types de sources](/auth-flow/customize/sdk-customize-code#source-types) pour prendre en charge le flux de consentement supplémentaire.                                                                                                                       |

<details>
  <summary><b>En savoir plus sur les propriétés de texte personnalisé en tableau</b></summary>

Les propriétés `accounting.dataAccess.dataTypes`, `banking.dataAccess.dataTypes` et `commerce.dataAccess.dataTypes` sont des tableaux car elles contrôlent les puces affichées sur la page de consentement d'accès aux données du flux Link.

Chaque élément du tableau est rendu sous forme de puce distincte et détaille les types de données auxquels votre client accepte de vous laisser accéder.

Par exemple, si vous utilisez Javascript, vous pouvez définir ces valeurs comme suit :

```javascript
// Définir lors de l'initialisation de l'objet
const text : CodatTextOptions = {
  "companyName": "Polly's Profiteroles",
  "accounting.dataAccess.dataTypes": ["Informations sur les comptes clients", "Informations sur les comptes fournisseurs", "Informations sur le résumé financier"],
}

// Ou définir après l'initialisation de l'objet
text["accounting.dataAccess.dataTypes"] = ["Informations sur les comptes clients", "Informations sur les comptes fournisseurs", "Informations sur le résumé financier"];
```

Dans le flux Link, cela sera ensuite rendu comme suit :

![Un extrait du flux Link de Codat qui reflète les valeurs définies dans l'exemple de code sous forme de puces](/img/auth-flow/link-sdk-datatypes-array.png)

</details>

### Parcours de consentement supplémentaire

Vous pouvez avoir besoin de demander un consentement supplémentaire à votre client pour utiliser ses données financières précédemment partagées à des fins différentes. Par exemple, si le client a lié une plateforme pour utiliser le tableau de bord de prévision des flux de trésorerie de votre application, vous avez besoin d'un consentement supplémentaire de sa part si vous souhaitez utiliser ces données pour une évaluation de prêt.

Pour demander un consentement supplémentaire, définissez l'option `enableAdditionalConsent` sur `true`. Cela affichera un parcours de consentement supplémentaire aux clients lors de leurs visites ultérieures au flux Link, comme indiqué ci-dessous.

![](/img/auth-flow/additional-consent-journey.png)

Par défaut, cette option est définie sur `false`. Ensuite, utilisez [texte personnalisé](/auth-flow/customize/sdk-customize-code#custom-text) pour gérer le contenu qui leur est affiché pendant ce parcours.

## Liaison multi-entités

Vous pouvez souhaiter permettre à vos clients d'autoriser l'accès à plusieurs entreprises au sein d'une seule plateforme comptable dans le même flux de connexion. Cela est pertinent pour les intégrations qui permettent à leurs utilisateurs d'exploiter plusieurs filiales au sein du même compte.

Pour offrir cette option à vos clients, définissez l'option `enableMultiEntityLinking` sur `true`. Cela affichera des étapes de sélection de filiales supplémentaires dans le flux d'authentification pour les intégrations qui prennent en charge multi-entités. Par défaut, cette option est définie sur `false`.

---

## Lire ensuite

- [Gérer les paramètres Link dans le portail](/auth-flow/customize/customize-link)
- [Gérer les paramètres de marque dans le portail](/auth-flow/customize/branding)
- [Permettre à votre client de gérer les connexions](/auth-flow/optimize/connection-management)
