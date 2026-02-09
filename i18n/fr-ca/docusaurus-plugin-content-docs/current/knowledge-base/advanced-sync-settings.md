---
title: "Paramètres de synchronisation avancés"
description: "Consultez les paramètres supplémentaires disponibles pour configurer la synchronisation de divers types de données"
displayed_sidebar: "docs"
---

Pour la plupart de nos types de données, nous récupérons tout l'historique disponible. Pour les types de données d'états financiers (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), nous récupérons 24 mois d'historique. Vous pouvez appliquer des paramètres de synchronisation supplémentaires pour modifier ces valeurs par défaut. Cela vous aide à limiter la quantité de données synchronisées à partir de la plateforme source.

Ces paramètres ne fonctionnent que pour les sources de données qui autorisent les synchronisations delta et sont appliqués à toutes les entreprises.

## Paramètres de synchronisation

Vous pouvez configurer les paramètres avancés suivants :

| Paramètre de synchronisation | Propriété        | Description                                                                                                                                                                                       | Types de données                                                    |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Mois à synchroniser          | `monthsToSync`   | Détermine combien de mois d'historique de données récupérer. Défini sur 24 mois par défaut.                                                                                                      | `balanceSheet`, `profitAndLoss`, `cashFlowStatement`                |
| Fenêtre de synchronisation   | `syncFromWindow` | Définit un nombre de mois pour récupérer l'historique de données, où seules les données avec une date de modification dans cette période seront synchronisées.                                   | Tous sauf `balanceSheet`, `profitAndLoss`, `cashFlowStatement`      |
| Synchronisation depuis UTC   | `syncFromUtc`    | Définit une valeur UTC comme date de début pour la synchronisation des données, où seules les données avec une date de modification dans cette période seront synchronisées. Les enregistrements avec une date de modification antérieure à `syncFromUtc` ne seront pas retournés. | Tous sauf `balanceSheet`, `profitAndLoss`, `cashFlowStatement`      |

## Configuration

Utilisez notre endpoint [Update all sync settings](/platform-api#/operations/update-profile-syncSettings) pour configurer les paramètres de synchronisation avancés. Ces paramètres sont configurés par type de données et s'appliquent à toutes les entreprises. Le endpoint ne fournit aucun message d'erreur si les paramètres ne sont pas pris en charge.

Par exemple, pour configurer les paramètres avancés pour notre type de données `invoices`, envoyez la requête suivante au endpoint :

```json
{
  "clientId": "367f7975-267b-439b-90c6-a6040ee680f3",
  "settings": [
    {
      "dataType": "invoices",
      "fetchOnFirstLink": true,
      "syncSchedule": 24,
      "syncOrder": 0,
      "syncFromUtc": "2020-01-01T12:00:00.000Z",
      "syncFromWindow": 24,
      "monthsToSync": 0,
      "isLocked": true
    }
  ],
  "overridesDefaults": true
}
```

## 💡 Conseils et pièges

- Lors de l'utilisation de paramètres de synchronisation avancés, adoptez une approche uniforme pour tous vos types de données (par exemple, tous les types de données demandent 24 mois de données). Certains types de données partagent des requêtes, et l'application d'approches différentes peut causer des incohérences.

- Les paramètres de synchronisation avancés peuvent être appliqués à tous les types de données, mais nous vous conseillons de ne pas les définir pour les données de référence, telles que les clients, les fournisseurs, le plan comptable, les taux de taxe, les catégories de suivi et les articles.

- `syncFromWindow` et `syncFromUtc` utilisent tous deux `sourceModifiedDate` pour sélectionner les enregistrements à synchroniser. Vous pouvez [en savoir plus sur les dates de modification](/using-the-api/modified-dates).

- Lorsqu'un paramètre de synchronisation est introduit après une synchronisation de données réussie, les enregistrements récupérés avant le nouveau paramètre de synchronisation seront soit supprimés, soit mis à jour avec un statut _Void_ ou _Archived_.
