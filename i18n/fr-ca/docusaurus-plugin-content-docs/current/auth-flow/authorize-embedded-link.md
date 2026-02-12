---
title: "Commencer avec le SDK Link"
sidebar_label: Commencer
description: "Intégrez notre flux d'authentification dans l'interface de votre application à l'aide de notre composant à faible code"
banner_image: "/fr-ca/img/banners/link.png"
---

import ReadNext from "@components/ReadNext";
import CodeExamples from "./_partial-auth-flow-examples.md";

![](/img/auth-flow/embedded-link-selection.png)

Notre SDK Link est un composant JavaScript préconçu qui s'intègre parfaitement dans votre code front-end et peut être déployé en quelques minutes.

Nous l'avons conçu pour être flexible afin que vous puissiez l'intégrer et l'initialiser de la manière que vous souhaitez, et offrir à l'utilisateur une expérience native de votre parcours d'autorisation. En conséquence, les clients utilisant le SDK notent que **89 %** de leurs utilisateurs terminent avec succès leurs parcours.

```jsx live
function AuthFlow() {
  const onConnection = (connection) =>
    alert(`Connection: ${connection.connectionId}`);
  const onFinish = () => alert("On finish callback");

  const config = {
    companyId: "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
    options: {
      showLandingPage: true,
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

## Ressources

Nous vous avons fourni [des exemples riches sur GitHub](https://github.com/codatio/sdk-link/tree/main/examples) qui illustrent comment vous pouvez ajouter le composant Link à votre projet.

:::note Besoin d'aide pour concevoir votre expérience de flux d'authentification ?

Notre équipe d'expérience utilisateur est prête à vous aider à concevoir un flux d'authentification hautement convertissant et de confiance, et à garantir que votre parcours utilisateur respecte les exigences des partenariats d'intégration. Parlez à votre gestionnaire de compte pour planifier un moment avec nos experts.

:::

:::info Démo indicative

Curieux de savoir où le flux Link de Codat pourrait s'intégrer dans l'expérience de votre client ? Consultez [notre démo indicative](https://sdk-link.vercel.app/).

:::

## Prérequis

#### Votre application

Vous avez besoin d'une application JavaScript pour afficher le composant. Le composant fonctionne avec tous les principaux frameworks JavaScript, y compris React, et avec JavaScript vanilla. Vous pouvez choisir de l'implémenter en TypeScript. Nous ne recommandons pas d'utiliser Link dans un iframe car il ne fonctionnera pas pour des raisons de sécurité (CORS).

L'application doit prendre en charge la création de [companies](../terms/company) de manière programmatique et récupérer le `companyId` de toute entreprise que vous souhaitez autoriser. De plus, créez la configuration de redirection requise dans votre application.

## Commencer

:::tip Installer le package npm

Profitez de notre [package npm](https://www.npmjs.com/package/@codat/sdk-link-types) pour ne pas avoir à importer et maintenir manuellement les définitions de types. Vous en tirerez le meilleur parti si vous utilisez Typescript, nos exemples sont donc préparés avec cette hypothèse.

`npm install @codat/sdk-link-types`

:::

<CodeExamples />

:::note Imports dynamiques

Le SDK Link est importé au moment de l'exécution, vous obtenez donc toujours la dernière version de notre interface de flux d'authentification sans risque d'obsolescence. Pour y parvenir, nous utilisons la fonctionnalité [import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) d'ES6 (alias imports dynamiques).

:::

## Autoriser l'utilisateur

Par défaut, nous appliquons des mesures de sécurité supplémentaires au sein de notre SDK Link. Le SDK nécessite un jeton d'accès pour vérifier votre client, servant d'équivalent à un mot de passe à usage unique. Contactez votre gestionnaire de compte si vous souhaitez désactiver ces mesures.

#### Jeton d'accès

Une fois que votre client s'est autorisé dans votre application, utilisez le endpoint [Get company access token](/platform-api#/operations/get-company-access-token) pour récupérer un jeton d'accès pour l'entreprise de ce client.

Transmettez le jeton au SDK Link lors de l'initialisation. Nous l'utilisons pour vérifier votre client et obtenir des informations spécifiques à l'entreprise à afficher dans l'interface.

:::tip Validité du jeton
Le jeton n'est valide que pendant un jour et s'applique à une seule entreprise.
:::

#### Paramètres CORS

Les paramètres [Cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (CORS) sont requis pour que le jeton d'accès fonctionne. Pour contrôler la liste de domaines à partir desquels votre application peut effectuer des demandes de jeton, enregistrez les origines autorisées à l'aide du endpoint [Set CORS settings](/platform-api#/operations/set-cors-settings).

Pour afficher les origines que vous avez précédemment enregistrées pour votre instance, utilisez le endpoint [Get CORS settings](/platform-api#/operations/get-cors-settings).

## Utiliser les fonctions de callback

Vous pouvez ajouter une logique personnalisée à notre SDK en utilisant des fonctions de callback pour effectuer une action. Utilisez les propriétés ci-dessous pour transmettre les fonctions de callback au composant SDK :

| Propriété             | Description                                                                                                                                                                                                                                               | Arguments                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onConnectionStarted` | Appelé lorsque l'utilisateur sélectionne son intégration. Une connexion est créée avec succès dans un état `pending`.                                                                                                                                    | Un objet `connection` contenant les propriétés suivantes : <ul><li>`connectionId` - identifiant unique de la connexion</li><li>`integrationId` - identifiant unique de l'intégration</li><li>`sourceId` - identifiant unique du type de source</li><li>`sourceType` - valeur indiquant le type de source d'information (`Unknown`, `Accounting`, `Banking`, `BankFeed`, `Commerce`, `Expense` ou `Other`)</li><li>`integrationKey` - valeur à 4 caractères qui identifie le logiciel d'intégration dans Codat</li><li>`platformName` - nom du logiciel d'intégration</li></ul> |
| `onConnection`        | Appelé lorsqu'une connexion est autorisée avec succès et déplacée hors d'un état `pending` ou que des fichiers sont téléchargés.                                                                                                                        | Un objet `connection` contenant les propriétés suivantes : <ul><li>`connectionId` - identifiant unique de la connexion</li><li>`integrationId` - identifiant unique de l'intégration</li><li>`sourceId` - identifiant unique du type de source</li><li>`sourceType` - valeur indiquant le type de source d'information (`Unknown`, `Accounting`, `Banking`, `BankFeed`, `Commerce`, `Expense` ou `Other`)</li><li>`integrationKey` - valeur à 4 caractères qui identifie le logiciel d'intégration dans Codat</li><li>`platformName` - nom du logiciel d'intégration</li></ul> |
| `onConsent`           | Appelé lorsque l'utilisateur consent aux conditions d'utilisation de ses données.                                                                                                                                                                        | Un objet `text` contenant une représentation Markdown de tout le texte sur l'écran de consentement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `onFinish`            | Appelé lorsque l'utilisateur termine toutes les étapes requises du flux de connexion et clique sur le bouton « Terminer ».<br/> Nous recommandons de démonter le composant `CodatLink` dans ce callback. Dans l'exemple React ci-dessus, nous appelons `setModalOpen(false)` pour faire cela. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `onClose`             | Appelé lorsque l'utilisateur clique sur le bouton « X » (« Fermer ») du flux de connexion. <br/> Nous recommandons de supprimer le composant `CodatLink` dans ce callback. Dans l'exemple React ci-dessus, nous appelons `setModalOpen(false)` pour faire cela.                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `onError`             | Appelé lorsqu'une erreur se produit dans le flux de connexion, renvoyant les informations d'erreur. <br/><br/> **Enregistrez ces erreurs.** Nous recommandons également de démonter le composant `CodatLink` en production si le paramètre `userRecoverable` est `false`.                   | Un objet `error` contenant les propriétés suivantes : <ul><li>`correlationId` - identifiant interne utilisé pour suivre les erreurs au sein de Codat</li><li>`message` - réponse d'erreur descriptive</li><li>`errorCode` - code numérique de l'erreur</li><li>`userRecoverable` - valeur booléenne indiquant si l'erreur peut être résolue par l'utilisateur.</li></ul> `correlationId`, `message` et `errorCode` sont facultatifs et peuvent ne pas être disponibles pour toutes les erreurs.                                                                            |

## Personnaliser Link

Vous pouvez configurer l'interface de Link pour qu'elle corresponde à votre image de marque et reflète les valeurs de votre entreprise, et ajuster le comportement de Link en utilisant le [portail Codat](https://app.codat.io/) ou les options avancées de notre SDK.

#### Configurer dans le portail

Dans le [portail Codat](https://app.codat.io/settings), naviguez vers **Settings > Auth flow** pour afficher les pages de paramètres du flux d'authentification. Utilisez-les pour ajouter du texte d'interface, définir les options de téléchargement de fichiers, choisir de rendre les étapes facultatives ou désactiver les étapes. Nous fournissons des instructions détaillées pour chaque catégorie de paramètres :

- [Paramètres Link](/auth-flow/customize/customize-link)
- [Paramètres de marque](/auth-flow/customize/branding)

#### Configurer dans le code

Si vous avez besoin de plus de contrôle sur l'interface en fonction de la logique spécifique à l'application, que vous souhaitez la faire varier de manière conditionnelle ou que vous préférez simplement gérer l'interface dans le code, nous offrons un contrôle programmatique via la propriété `options` qui **remplace les paramètres Link définis dans le portail**. Nous expliquons ces options avancées en détail :

- [Gérer les paramètres d'interface dans le code](/auth-flow/customize/sdk-customize-code)

Pour contrôler les redirections qui se produisent à la fin du flux, vous devez créer la configuration de redirection requise dans votre application.

<ReadNext
  links={[
    ["Gérer les paramètres Link dans le portail", "/auth-flow/customize/customize-link"],
    ["Gérer les paramètres de marque dans le portail", "/auth-flow/customize/branding"],
    ["Gérer les paramètres d'interface dans le code", "/auth-flow/customize/sdk-customize-code"],
    [
      "Utiliser le SDK Connections dans votre application",
      "/auth-flow/optimize/connection-management",
    ],
  ]}
/>
