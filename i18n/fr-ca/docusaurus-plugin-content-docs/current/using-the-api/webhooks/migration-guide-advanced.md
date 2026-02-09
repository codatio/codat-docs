---
title: "Guide de migration des webhooks pour les scénarios complexes"
sidebar_label: "Scénarios avancés"
description: "Découvrez l'impact supplémentaire de la transition vers notre nouveau service en fonction de votre configuration spécifique"
---

## Dois-je migrer vers le nouveau service et les nouveaux endpoints?

Si vous envisagez d'utiliser les nouveaux endpoints de gestion des webhooks de Codat, vérifiez d'abord que votre configuration est compatible. Trouvez les scénarios applicables à votre configuration existante et voyez si vous pouvez migrer.

| J'utilise...                                                                                                                            | Action et impact                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ...la fonctionnalité de notification par courriel <br/><br/> ![Static Badge](https://img.shields.io/badge/Configuration_required-yellow)               | - Migrer vers le nouveau service de webhooks <br/> - Consultez les [considérations critiques](/using-the-api/webhooks/migration-guide-advanced#email-notification-functionality)                                               |
| ...les endpoints du journal d'événements (p. ex. `/rules/alerts`) <br/><br/> ![Static Badge](https://img.shields.io/badge/Development_work_required-yellow)  | - Ne migrez pas tant que vous n'avez pas supprimé tous les appels aux endpoints de journaux de votre logique applicative <br/> - Consultez les [considérations critiques](/using-the-api/webhooks/migration-guide-advanced#event-log-endpoints) |
| ...`RuleId` dans la logique existante de mon application <br/><br/> ![Static Badge](https://img.shields.io/badge/Development_work_required-yellow) | - Ne migrez pas tant que vous n'avez pas supprimé toute la logique applicative utilisant la propriété `RuleId` <br/> - Consultez les [considérations critiques](/using-the-api/webhooks/migration-guide-advanced#ruleid-in-existing-logic)  |
| ...uniquement la fonctionnalité de webhook indépendante de l'entreprise                                                                                           | - Demandez la migration vers le nouveau service de webhooks <br/>                                                                                                                                                              |
| ...la fonctionnalité de webhook spécifique à l'entreprise                                                                                                | - Demandez la migration vers le nouveau service de webhooks <br/> - Consultez les [considérations supplémentaires](/using-the-api/webhooks/migration-guide-advanced#company-specific-webhooks)                                         |
| ...l'en-tête `X-Codat-ClientId` pour déterminer l'instance Codat source de l'événement                                                         | - Demandez la migration vers le nouveau service de webhooks <br/> - Consultez les [considérations supplémentaires](/using-the-api/webhooks/migration-guide-advanced#source-client-header)                                              |
| ...l'en-tête d'authentification webhook via l'endpoint `/profile`                                                                                       | - Demandez la migration vers le nouveau service de webhooks <br/> - Consultez les [considérations supplémentaires](/using-the-api/webhooks/migration-guide-advanced#webhook-auth-header)                                               |
| ...l'en-tête d'authentification webhook via le portail                                                                                                    | - Demandez la migration vers le nouveau service de webhooks <br/> - Consultez les [considérations supplémentaires](/using-the-api/webhooks/migration-guide-advanced#webhook-auth-header)                                               |
| ...l'en-tête `Retry-After` pour contrôler le délai entre les tentatives                                                                              | - Demandez la migration vers le nouveau service de webhooks <br/> - Consultez les [considérations supplémentaires](/using-the-api/webhooks/migration-guide-advanced#retry-after-header)                                                |

## Considérations critiques

### Endpoints du journal d'événements

Notre nouveau service dispose d'une [politique de relance](/using-the-api/webhooks/troubleshooting#retry-policy) robuste qui garantit que nous tentons de livrer un événement plusieurs fois sur une période de 28 heures. Cela signifie que vous n'avez pas besoin d'écrire de logique complexe pour gérer les événements non livrés. Par conséquent, vous n'avez plus besoin d'utiliser ces endpoints :

- `GET /rules/alerts`
- `GET /rules/{ruleId}/alerts`
- `GET /rules/alerts/{alertId}`

Consultez l'[avis de dépréciation](/updates/240306-deprecation-rules-alerts) pour tous les détails de ces changements.

### Fonctionnalité de notification par courriel

Notre nouveau service de webhooks prend en charge l'envoi de notifications pour les événements à l'aide de notre [application Zapier](https://zapier.com/apps/codat/integrations), afin que vous puissiez créer des flux de travail automatisés pour envoyer des courriels, des messages Slack ou d'autres notifications. Utilisez nos événements webhook comme déclencheurs et pilotez des actions dans tous les outils que vous utilisez, de Google Sheets à SalesForce.

Pour des instructions détaillées sur la création de notifications automatisées avec Zapier, consultez notre [guide Zapier](/using-the-api/webhooks/zapier-integration).

### `RuleId` dans la logique existante

Si vous utilisez les propriétés `RuleId` retournées par nos webhooks existants dans votre logique applicative, révisez et mettez à jour votre logique applicative pour supprimer toute dépendance au `RuleId`. Cela aidera à prévenir toute perturbation de votre intégration avec Codat.

Vous devriez utiliser `RuleType` pour identifier à quel événement un webhook donné correspond.

Consultez l'[avis de dépréciation](/updates/240320-deprecation-ruleId) pour tous les détails de ces changements.

## Considérations supplémentaires

Selon votre configuration, vous pourriez avoir besoin de configurer davantage vos consommateurs de webhooks dans Codat ou être informé des changements à l'interface utilisateur.

### Liste d'adresses IP autorisées

Si votre endpoint consommateur est derrière un pare-feu ou un NAT, assurez-vous d'autoriser les messages provenant de `4.159.114.108` et `20.117.190.191`.

### En-tête du client source

Si vous utilisez plusieurs instances Codat et devez les différencier, vous pouvez filtrer les messages par client en utilisant un en-tête personnalisé `X-Codat-ClientId`.

Si vous utilisez déjà cet en-tête dans votre configuration existante, nous l'inclurons lors de la migration de vos règles vers le nouveau service. Pour plus d'informations sur la création d'en-têtes personnalisés dans les consommateurs de webhooks, consultez [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).

### En-tête d'authentification webhook

Si vous sécurisez actuellement vos endpoints webhook avec un en-tête d'autorisation, vous pouvez l'ajouter comme en-tête personnalisé `Authorization` à l'endpoint du consommateur de webhook via notre portail. Il n'est plus possible de le faire via notre API.

Si vous utilisez déjà cet en-tête dans votre configuration existante, nous l'inclurons lors de la migration de vos règles vers le nouveau service. Pour plus d'informations sur la création d'en-têtes personnalisés dans les consommateurs de webhooks, consultez [En-têtes personnalisés](/using-the-api/webhooks/create-consumer#custom-headers).

### En-tête `Retry-After`

Notre nouveau service dispose d'une [politique de relance](/using-the-api/webhooks/troubleshooting#retry-policy) robuste qui garantit que nous tentons de livrer un événement plusieurs fois sur une période de 28 heures. Par conséquent, vous n'avez plus besoin de définir un en-tête `Retry-After` pour contrôler le délai entre les tentatives.

### Webhooks spécifiques à l'entreprise

Pour des raisons d'extensibilité, nous limitons le nombre de consommateurs de webhooks à 50. Cela signifie qu'il y a de nouvelles considérations pour la gestion des webhooks spécifiques à l'entreprise.

Le service de webhooks mis à jour prend désormais en charge le passage de métadonnées sur une entreprise et le filtrage des entreprises à l'aide d'étiquettes d'entreprise.

#### Passer des métadonnées à un consommateur de webhook

Vous pouvez désormais passer des métadonnées sur une entreprise en définissant des étiquettes sur vos entreprises.

Par exemple, si vous passiez précédemment des métadonnées via le chemin du consommateur de webhook, comme :

```
POST /region/{regionId}/accounts/{accountId}
```

Vous définirez désormais ces informations lors de la création ou de la mise à jour d'une entreprise :

```json
{
  "name": "{you company name}",
  "tags": {
    "region": "{regionId}",
    "account": "{accountId}"
  }
}
```

Ces métadonnées seront ensuite transmises à votre consommateur de webhook dans la propriété `payload.referenceCompany.tags`.

Pour plus de détails, [consultez notre guide sur l'ajout de métadonnées à une entreprise](/using-the-api/managing-companies#add-metadata-to-a-company).

#### Filtrer les webhooks par étiquettes d'entreprise

Pour acheminer des entreprises spécifiques vers des consommateurs de webhooks désignés, utilisez le filtre par étiquettes d'entreprise pour votre consommateur de webhook.

Cette fonctionnalité vous permet d'envoyer des messages uniquement pour les entreprises dont les étiquettes correspondent à l'une des étiquettes définies sur le consommateur de webhook.

Pour plus d'informations, [consultez la documentation sur le filtrage des webhooks par étiquettes d'entreprise](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

---

## À lire ensuite

- [Types d'événements](/using-the-api/webhooks/event-types)
- [Configurer les consommateurs de webhooks](/using-the-api/webhooks/create-consumer)
- [Dépannage](/using-the-api/webhooks/troubleshooting)
