---
title: "Référence de l'intégration Zettle"
description: "Choses à savoir lors de la lecture de données depuis Zettle"
---

Soyez conscient des informations suivantes lors de la création de votre application en utilisant notre intégration Zettle.

## Couverture des champs pour les types de données pris en charge

Le modèle de données de Codat prend en charge un large éventail de champs au sein de chaque type de données.

Parfois, l'API d'un fournisseur ne donne pas accès à un champ qui existe dans un type de données Codat. À l'inverse, notre modèle de données ne prend parfois pas en charge tous les champs pertinents sur un objet dans l'API d'un fournisseur.

Le tableau suivant met en évidence les champs sélectionnés qui ne sont pas disponibles dans les données lues depuis et écrites vers Zettle.

### Champs de fournisseur non disponibles

| Type de données Codat                     | Statut                              |
| ----------------------------------- | ----------------------------------- |
| `Commerce.Payments.paymentProvider` | Non disponible dans l'API du fournisseur |
