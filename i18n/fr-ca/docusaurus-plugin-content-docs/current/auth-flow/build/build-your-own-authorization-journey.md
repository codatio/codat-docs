---
title: "Créez votre propre flux d'autorisation"
description: "Créez votre propre parcours pour connecter les plateformes financières de vos clients"
unlisted: true
displayed_sidebar: docs
---

:::tip Codat recommande Link SDK

Au lieu de créer votre propre solution, utilisez le [Link SDK](/auth-flow/authorize-embedded-link) pour intégrer complètement notre flux d'autorisation flexible et personnalisable dans votre application.

Vous bénéficierez de notre vaste expérience combinée aux meilleures pratiques d'autorisation, offrant à vos utilisateurs une expérience native du flux d'autorisation et atteignant un taux de conversion moyen de **89%**.

:::

Si votre scénario d'affaires et vos circonstances vous empêchent d'utiliser notre Link SDK, vous pouvez utiliser les endpoints qui vous permettent de créer le parcours pour que vos clients commerciaux connectent leurs plateformes financières. Ensuite, nous examinerons les étapes et les endpoints en détail.

## Créer une entreprise Codat

Tout d'abord, créez une [entreprise](../../terms/company.md) pour représenter votre PME dans Codat. Nous recommandons de le faire au moment où votre utilisateur PME s'inscrit dans votre application. De cette façon, vous pouvez suivre l'état de leur connexion dès le premier jour.

Pour créer une nouvelle entreprise, utilisez l'endpoint [Créer une entreprise](/platform-api#/operations/create-company) et fournissez un nom pour l'entreprise dans le corps de la requête. Si votre utilisateur a déjà été autorisé avec vous, utilisez l'entreprise que vous avez précédemment créée pour lui. Pour plus de détails sur la gestion et la suppression des entreprises existantes, consultez [Gérer les entreprises avec notre API](/using-the-api/managing-companies).

:::tip Utilisez l'identifiant de votre client pour le nom de l'entreprise

Pour le paramètre `name` de l'entreprise, nous recommandons de transmettre l'identifiant que vous utilisez pour le client dans **votre** système interne. Cela facilite l'identification de l'entreprise Codat qui correspond à votre enregistrement du client.
:::

À partir de la réponse, conservez l'identifiant de l'entreprise (`companyId`), car vous en aurez besoin pour diriger vos clients vers Link et gérer leurs connexions.

En option, vous pouvez [configurer un webhook](/using-the-api/webhooks/event-types) pour surveiller l'état de connexion de l'entreprise nouvellement créée.

## Afficher une liste d'intégrations

Ensuite, vous devez fournir à votre client une liste de plateformes auxquelles il peut vous donner accès, y compris le nom et le logo de la plateforme. Pour des conseils supplémentaires sur les meilleures pratiques de sélection d'intégration, consultez [Sélection de plateforme](/auth-flow/optimize/platform-selection).

#### Récupérer toutes les intégrations disponibles

Utilisez l'endpoint [Lister les intégrations](/platform-api#/operations/list-integrations) pour récupérer une liste de toutes les intégrations disponibles pour la connexion du client.

Nous recommandons d'utiliser une requête pour filtrer cette liste. Par exemple, utilisez le paramètre `enabled` pour ne renvoyer que les intégrations activées via le portail Codat. Le paramètre `sourceType` vous permet de filtrer les intégrations par leur type de données - `accounting`, `banking` ou `commerce`.

Vous devez encoder la requête, à moins que vous n'utilisiez notre référence API, où cela se fait automatiquement. Pour plus de détails sur les requêtes, consultez [Interrogation](/using-the-api/querying).

```http
  //Requête non encodée :
  ?query=sourceType=accounting&&enabled=true

  //Requête encodée :
  ?query=sourceType%3DAccounting%26%26enabled%3Dtrue"
```

#### Récupérer les éléments de marque

Appelez l'endpoint [Obtenir la marque](/platform-api#/operations/get-integrations-branding) pour récupérer les éléments de marque pour les intégrations requises, y compris les logos et les boutons, et utilisez-les sur la page de sélection d'intégration. Mettez en cache les éléments au lieu d'appeler l'endpoint à chaque fois qu'un utilisateur visite la page de sélection de plateforme.

Ajoutez une clé de plateforme pertinente en tant que paramètre à l'appel, en choisissant parmi les options [comptabilité](/integrations/accounting/overview#platform-keys), [bancaire](/integrations/banking/overview#platform-keys) ou [commerce](/integrations/commerce/overview#platform-keys). Le `platformKey` est une clé unique que Codat utilise pour supprimer la dépendance au nom d'affichage d'une plateforme.

:::info Éléments de marque fournis par Codat

Nous conseillons d'utiliser les éléments fournis par Codat car ils répondent aux exigences des intégrations prises en charge. Par exemple, les intégrations Intuit (QuickBooks Online et QuickBooks Desktop) imposent l'utilisation de boutons de marque QuickBooks, y compris des états de survol spécifiques.
:::

## Diriger l'utilisateur pour entrer ses identifiants

Ensuite, dirigez votre client pour qu'il entre ses identifiants et autorise votre connexion avec la plateforme qu'il a sélectionnée.

Pour ce faire, créez une connexion de données à l'aide de l'endpoint [Créer une connexion](/platform-api#/operations/create-connection). En réponse, vous recevrez un `linkUrl`.

Dirigez votre utilisateur vers le `linkUrl`. La page l'invitera à entrer ses identifiants pour la plateforme tierce, autorisant la connexion et l'activant dans Codat.

:::tip Mots de passe à usage unique pour Link

Les URL Link ont maintenant des mots de passe à usage unique (OTP) ajoutés. En conséquence, ils se comportent comme suit :

- Vos clients ne peuvent pas utiliser la même URL Link plus d'une fois.
- Les URL Link spécifiques à l'entreprise et à la connexion expirent après un jour même si elles n'ont pas été utilisées.

Contactez votre gestionnaire de compte si vous souhaitez désactiver ces mesures.

Si votre application ajoute déjà des paramètres de requête aux URL Link (par exemple, en ajoutant `?link.showSandboxIntegrations=false`), confirmez que votre code peut gérer les URL qui contiennent déjà des chaînes de requête.

:::

Une fois que le client a autorisé avec succès la connexion de données, redirigez-le vers votre application. Assurez-vous de gérer tous les codes d'état de redirection et les messages d'erreur possibles afin que vos utilisateurs comprennent ce qui s'est mal passé.

Si vous ne définissez pas d'URL de redirection, l'utilisateur verra notre page de succès Link pré-construite. Pour en savoir plus sur les URL de redirection dans Codat, consultez [URL de redirection](/auth-flow/customize/set-up-redirects).

:::caution Limitations sur le nombre de connexions

Une entreprise ne peut lier qu'une seule source de données comptables, mais plusieurs sources de données bancaires ou commerciales. Toute combinaison de connexions comptables, bancaires et commerciales est autorisée. Pour plus d'informations sur les connexions de données et les états de connexion, consultez [Connexions de données](/core-concepts/connections).
:::

## Confirmer l'autorisation réussie

Une fois la connexion terminée, marquez-la comme autorisée et confirmez l'autorisation réussie à l'utilisateur. Si vous souhaitez surveiller la connexion, vous pouvez [configurer un webhook](/using-the-api/webhooks/overview) pour être informé du changement d'état.

L'achèvement de la connexion déclenche la synchronisation initiale des données pour l'entreprise nouvellement connectée. Vous pouvez surveiller la progression de la synchronisation dans le [portail Codat](/using-the-api/pull-history), en utilisant l'endpoint [Obtenir l'état des données](/platform-api#/operations/get-company-data-status) de notre API, ou avec un [webhook](/using-the-api/webhooks/event-types).

Une fois la synchronisation initiale des données terminée, informez l'utilisateur en conséquence et continuez le flux de votre application.

## Permettre aux utilisateurs de gérer la connexion

À l'avenir, votre client doit avoir le contrôle sur les données auxquelles il vous a donné la permission d'accéder. Ceci est essentiel d'un point de vue réglementaire et renforce la confiance entre vous et votre client. Pour créer cette capacité, vous aurez besoin de ces valeurs :

- Le `companyId` de l'entreprise Codat qui représente l'utilisateur
- Le `connectionId` de la connexion que l'utilisateur souhaite modifier

Utilisez l'endpoint [Obtenir l'entreprise](/platform-api#/operations/get-company) si vous avez besoin d'obtenir ces valeurs à partir des métadonnées de l'entreprise.

#### Permettre aux utilisateurs de voir les connexions existantes

Appelez l'endpoint [Lister les connexions](/platform-api#/operations/list-connections) pour obtenir toutes les connexions existantes pour une entreprise et les afficher à votre client.

#### Permettre aux utilisateurs de révoquer l'autorisation

Le consentement de l'utilisateur est collecté via OAuth2, ce qui signifie que nous pouvons accéder aux données de votre client de manière continue.

Par conséquent, vos clients devraient pouvoir révoquer l'autorisation d'une connexion existante, révoquant essentiellement votre accès à leur plateforme. Vous pourrez toujours accéder aux données précédemment synchronisées, mais vous ne pourrez pas effectuer de synchronisations supplémentaires.

Utilisez l'endpoint [Dissocier la connexion](/platform-api#/operations/unlink-connection) pour révoquer l'autorisation de la connexion sans la supprimer.

#### Permettre aux utilisateurs de supprimer une connexion

Les données de votre client sont également stockées de manière permanente dans notre base de données centrale, à moins que la connexion n'ait été supprimée. Nous faisons cela pour que les données soient toujours accessibles via notre API et que nous n'ayons pas besoin d'aller sur la plateforme pour les obtenir, évitant ainsi les limites de taux.

Cependant, votre client peut vouloir supprimer complètement une connexion, vous empêchant de synchroniser de nouvelles données ou de visualiser les données synchronisées. Pour ce faire, utilisez l'endpoint [Supprimer la connexion](/platform-api#/operations/delete-connection).

L'utilisateur final devrait autoriser une nouvelle connexion de données si vous souhaitez afficher de nouvelles données pour cette entreprise.

:::tip Gestion des connexions de Codat

Codat publie un composant d'interface utilisateur intégrable à faible code pour la gestion des connexions. Veuillez [nous faire savoir](https://forms.gle/d1zuh2iHBLJCNCsj9) si vous êtes intéressé à l'utiliser.

Pour un article détaillé sur les meilleures pratiques en matière de gestion des connexions, consultez [Gestion des connexions](/auth-flow/optimize/connection-management).

:::

## Meilleures pratiques

Nous avons résumé notre vaste expérience dans la création de flux d'autorisation et la maximisation de la conversion dans les suggestions de meilleures pratiques suivantes.

1. **Montrez que votre flux d'autorisation est alimenté par Codat**

Pour renforcer la confiance de vos clients, vous pouvez [télécharger notre logo « Propulsé par Codat »](https://static.codat.io/public/branding/powered-by-codat.svg) et l'intégrer dans votre application.

2. **Utilisez des webhooks pour surveiller les mises à jour**

Dans la mesure du possible, utilisez notre [service de webhooks](/using-the-api/webhooks/overview) pour recevoir des mises à jour sur les états de l'entreprise et des données. Cela vous permettra de récupérer des données fraîches dès qu'elles sont disponibles et de réduire le nombre d'appels à notre API.

3. **Gérez les autorisations d'utilisation des données**

Nous ne prenons en charge que la gestion des autorisations d'accès aux données, et non les autorisations d'utilisation des données. Cela signifie que votre client peut consentir à ce que nous accédions à ses données, et non à ce qui en est fait. Si vous souhaitez gérer la façon dont les données sont utilisées, vous devez le faire dans votre système.

4. **Activez les utilisateurs sans identifiants**

Dans l'organisation de votre client, la personne qui s'inscrit via Codat peut ne pas avoir ses identifiants à portée de main. Par exemple, ce peut être leur comptable qui se connecte réellement à leur logiciel de comptabilité.

Pour leur permettre de continuer et d'explorer votre produit, rendez l'autorisation préalable pour différentes catégories d'intégration optionnelle dans **Paramètres > Flux d'autorisation > Link**. Plus tard, rappelez-leur d'autoriser ou donnez-leur une alternative, comme `Vous ne pouvez pas vous connecter à votre plateforme ?`.

Si le client sélectionne cette option, vous pouvez :

- Leur fournir une URL Link qu'ils peuvent partager
- Utiliser un lien `mailto:`, en pré-remplissant éventuellement la ligne d'objet et le corps de l'e-mail

Il est important que la demande d'autorisation provienne de votre client pour s'assurer que le message est fiable.

---

## Lire ensuite

- En savoir plus sur notre [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
