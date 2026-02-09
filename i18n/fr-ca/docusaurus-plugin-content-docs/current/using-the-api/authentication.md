---
title: "Authentifier"
description: "Utilisez votre en-tête d'autorisation ou votre clé API pour vous authentifier auprès des API de Codat"
sidebar_label: "Clés API"
---

Les clés API sont des jetons utilisés pour contrôler l'accès à l'API. Codat s'attend à ce que la clé API soit incluse dans toutes les requêtes au serveur, encodée en Base64 dans un en-tête 'Authorization' :

```json
Authorization: Basic YOUR_ENCODED_API_KEY // Remplacez *YOUR_ENCODED_API_KEY* par votre clé API, encodée en Base64
```

Lorsque vous utilisez des clés API dans votre application, vous pouvez soit stocker la clé API brute et l'encoder vous-même, soit simplement stocker l'en-tête d'autorisation pré-encodé que nous exposons.

## Gestion des clés

Vous pouvez afficher les clés API et leurs en-têtes d'autorisation dans le Portail Codat. Par défaut, votre client sera fourni avec une clé API pré-provisionnée.

1. Cliquez sur **Developers > API keys** pour naviguer vers la page [API keys](https://app.codat.io/developers/api-keys).
2. Copiez votre clé API ou votre en-tête d'autorisation depuis la colonne de tableau correspondante.

Vous pouvez également révoquer (supprimer) les clés API existantes et créer de nouvelles clés. Lors de la création de nouvelles clés, vous serez invité à les nommer - cela vous aidera à suivre à quoi une clé donnée est utilisée, ce qui est utile lors de la révocation de clés ultérieurement.

### Gestion des clés via l'API

Pour gérer les clés API en effectuant des appels API, utilisez les points de terminaison suivants :

1. [Create API keys](https://docs.codat.io/platform-api#/operations/create-api-key)
2. [List API keys](https://docs.codat.io/platform-api#/operations/list-api-keys)
3. [Delete API keys](https://docs.codat.io/platform-api#/operations/delete-api-key)

Vous ne pouvez afficher que les clés API, et non les en-têtes d'autorisation correspondants, via l'API.

:::caution Permissions

Les en-têtes d'autorisation et les clés API ne peuvent être créés, affichés, copiés et supprimés que par les utilisateurs Administrator ou Developer.
:::

## 💡 Conseils et pièges

- Votre première clé API est créée pour vous. Récupérez-la dans le [Portail Codat](https://app.codat.io/developers/api-keys) pour effectuer tout appel API ultérieur.
- Gardez la clé API secrète et assurez-vous qu'elle n'est pas disponible dans des zones accessibles publiquement, telles que GitHub et le code côté client.
- Nous recommandons d'insérer la clé API au moment de la publication et de minimiser le nombre de personnes dans votre organisation y ayant accès.
- Le nombre de clés API est limité à 10. Si vous avez atteint le nombre maximum de clés, supprimez d'abord une clé inutilisée.
- Il n'est pas possible de supprimer la dernière clé API restante. Pour supprimer cette clé, créez-en une nouvelle et supprimez celle dont vous n'avez plus besoin.

:::tip Récapitulatif
Vous avez appris :

- Comment autoriser les appels API
- Où trouver votre en-tête d'autorisation
- Comment créer et supprimer des clés API
  :::

---

## Lire ensuite

- [Gestion des entreprises](/using-the-api/managing-companies)
