---
title: "Sécurité des webhooks"
description: "Sécuriser votre webhook pour empêcher l'utilisation non autorisée"
---

:::caution Nouveau service webhook disponible

Cette page décrit la fonctionnalité de notre offre webhook héritée. [En savoir plus](/using-the-api/webhooks/overview) sur notre nouveau service webhook et voir comment vous pouvez [migrer](/using-the-api/webhooks/migration-guide) pour l'utiliser à la place.

:::

Pour empêcher les utilisateurs non autorisés de publier du contenu vers votre webhook, Codat peut ajouter un en-tête `Authorization` aux requêtes envoyées. Vous pouvez configurer cela soit via le portail Codat, soit via l'API.

## Activer la sécurité des webhooks dans le portail Codat

Pour activer la sécurité pour les webhooks de votre organisation.

1. Connectez-vous au portail Codat.
2. Sélectionnez **Paramètres > Webhooks > Sécurité**.
3. Sélectionnez la méthode d'autorisation qui vous intéresse et entrez les informations requises. Par défaut, **Aucune autorisation** est sélectionnée, donc la sécurité est désactivée.

| Méthode ou schéma d'autorisation | Description                                                                                                           |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Basic                            | Un nom d'utilisateur et un mot de passe encodés en base-64 sont ajoutés à l'en-tête d'autorisation de la requête HTTP. |
| Bearer                           | Une valeur personnalisée ou un jeton est ajouté à l'en-tête d'autorisation.                                          |

Pour activer la sécurité des webhooks, utilisez toute valeur d'en-tête valide en ASCII dans le **alertAuthHeader**. Par exemple :

`PUT <https://api.codat.io/profile>`

```json
{
    "name": "Client Name"
    "logoUrl": "https://logo.png"
    "iconUrl": "https://icon.ico"
    "redirectUrl": "https://link.com/complete"
    "apiKey": "API-KEY"
    "alertAuthHeader": "Basic amFzb246cGFzc3dvcmQ=" // API accepts any raw string value
    "confirmCompanyName": false

}
```

L'en-tête d'autorisation est inclus dans tous les événements webhook envoyés à votre compte.

## Désactiver la sécurité des webhooks pour des règles spécifiques

Si vous souhaitez remplacer la sécurité des webhooks pour des règles spécifiques, veuillez ouvrir un ticket auprès de notre équipe de support via le [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new).

## Liste d'autorisation des adresses IP Codat pour les webhooks

Les règles webhook de Codat sont servies à partir d'adresses IP statiques. Cela signifie que vous êtes en mesure d'appliquer une règle de liste d'autorisation pour accorder l'accès réseau à ces notifications.

- `20.77.82.168/32`
- `51.142.76.22/32`
