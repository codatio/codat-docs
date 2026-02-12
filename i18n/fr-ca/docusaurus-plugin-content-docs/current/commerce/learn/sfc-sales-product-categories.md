---
title: "Ventes avec catégories de produits"
description: "Examiner la fonctionnalité de mappage des catégories de produits, sa configuration et sa maintenance"
image: "/fr-ca/img/banners/social/commerce.png"
---

:::caution Activation de la fonctionnalité

Cette section fournit des instructions pour une fonctionnalité non activée par défaut. Soumettez une demande à Codat pour activer la fonctionnalité de mappage de catégorisation.
:::

Les catégories de produits sont utilisées pour suivre les types d'articles qu'un commerçant vend. Pour les clients Sync for Commerce de Codat, nous prenons en charge la synchronisation des données de catégorisation de produits dans le logiciel de comptabilité d'un commerçant.

Cette fonctionnalité est disponible pour catégoriser les données de ventes et facilite la tenue de livres automatisée basée sur ces catégories.

## Catégories de ventes dans le flux de synchronisation

Avant que le commutateur de fonctionnalité ne soit activé, l'interface utilisateur du flux de synchronisation affiche une catégorie Ventes, ainsi que Remboursement, Taxes et Pourboires. Ce sont les catégories de mappage standard disponibles de Sync for Commerce.

<img
  src="/fr-ca/img/old/983ceb0-34c49797-e20b-43b1-9047-578a81dceb78.png"
  alt="Flux de synchronisation avec catégories de ventes standard"
/>

Une fois que vous activez la fonctionnalité, une page de mappage de catégorie supplémentaire est ajoutée au flux de synchronisation. Elle remplace la catégorie Ventes par une ventilation des options de mappage pour chaque [catégorie de produit que vous avez créée](/commerce/learn/sfc-sales-product-categories#configure-sales-categories). Nous fournissons également une catégorie fourre-tout "Autres ventes" qui n'a pas besoin d'être créée séparément.

Dans cet exemple, nous décomposons les ventes en cours, produits et services.

<img
  src="/fr-ca/img/old/7c4f5c0-c68df5c3-4a6f-4cfa-9ca0-b3473fb2a318.png"
  alt="Flux de synchronisation avec catégories de produits supplémentaires"
/>

La page de mappage de compte pour les catégories standard est disponible sur la page suivante du flux de synchronisation. Elle n'a plus de mappage "Ventes", remplacé par "Autres ventes" sur l'écran précédent. La même catégorisation est également disponible dans les paramètres du flux de synchronisation.

<img
  src="/fr-ca/img/old/f774a48-7eb40aee-9370-4222-8300-1f33a6210c73.png"
  alt="Catégories standard avec catégorisation des ventes activée"
/>

## Configurer les catégories de ventes

Assurez-vous que la fonctionnalité de mappage de catégorisation a été activée pour votre client.

Ensuite, créez les catégories de produits que vous souhaitez utiliser pour diviser les données de ventes. Pour ce faire, utilisez le endpoint `/companies/{companyId}/data/commerce-productCategories` avec la méthode `PUT`.

Par exemple, afin de créer des catégories pour décomposer les ventes en produits, services et cours, le corps de requête suivant doit être envoyé :

```json
{
  "ContractVersion": "9.3.1",
  "ProductCategories": [
    {
      "id": "prods",
      "name": "Produits"
    },
    {
      "id": "serv",
      "name": "Services"
    },
    {
      "id": "cours",
      "name": "Cours"
    }
  ]
}
```

:::note Hiérarchies de catégories non prises en charge

Sync for Commerce ne prend pas en charge les hiérarchies de catégories et nécessite un simple tableau d'ID et de noms de catégories.
:::

Si vous utilisez la fonctionnalité `visibleAccounts` [feature](/commerce/build/customizing-the-sync-configuration-flow#how-to-change-the-visibility-of-feature-categories-accounts), assurez-vous d'ajouter `sales-accounts-sales-other` à la liste des comptes visibles. Cela permet de rendre le mappage "Autres ventes" visible et configurable.

Si vous utilisez la fonctionnalité `visibleAccounts` [feature ](/commerce/build/customizing-the-sync-configuration-flow#how-to-change-the-visibility-of-feature-categories-accounts) et que certaines de vos entreprises n'ont pas de catégories de produits créées, assurez-vous d'ajouter `sales-accounts-sales` à la liste des comptes visibles.

### 💡 Conseils et pièges

- Si vous ne créez aucune catégorie de produit après avoir activé la fonctionnalité, puis invoquez l'interface utilisateur du flux de synchronisation, la page de catégorisation supplémentaire ne sera pas affichée.
- Si vous créez, mappez et supprimez ensuite une catégorie, elle n'apparaîtra plus dans l'interface utilisateur du flux de synchronisation. Cependant, le mappage de compte existera toujours dans la configuration de l'entreprise.
- Une fois que vous introduisez les catégories de produits pour une entreprise, le mappage Ventes précédent apparaîtra comme mappage "Autres ventes" à la place.

## Personnaliser les étiquettes et le texte des catégories

Pour modifier une étiquette de catégorie de produit, modifiez les catégories de produits en utilisant le endpoint `/companies/{companyId}/data/commerce-productCategories`, de la même manière que lorsque vous les avez créées.

Vous pouvez [modifier l'étiquette](/commerce/build/customizing-the-sync-configuration-flow#sales-feature-categories) pour le mappage "Autres ventes" en utilisant la clé `configure-content-sales-accounts-entries-sales-other`.

Les titres des pages de catégorisation de produits (nommées "Comptes de ventes" et "Autres comptes" une fois la fonctionnalité activée) ne peuvent pas être personnalisés. Les descriptions des pages de mappage de compte supplémentaires et existantes ne peuvent pas être personnalisées séparément.
