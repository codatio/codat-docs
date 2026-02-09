---
title: "Calendrier de synchronisation"
description: "Obtenez une meilleure compréhension du fonctionnement de notre planificateur Sync avec les paramètres fournis via le flux Sync."
image: "/img/banners/social/commerce.png"
---

## Configuration du calendrier de synchronisation

Le calendrier des synchronisations régulières de données dépend des valeurs suivantes :

- Date de début (sélectionnée par le commerçant dans l'interface utilisateur du flux Sync)
- Heure de synchronisation (définie par le flux Sync sur la valeur par défaut du client si disponible, sinon par défaut à 00:00 am dans le fuseau horaire du commerçant)
- Fuseau horaire (spécifié par le commerçant dans l'interface utilisateur du flux Sync)
- Fréquence (actuellement uniquement quotidienne)

```json
"schedule": {
  "selectedFrequency": "Daily",
  "frequencyOptions": [
      "Daily",
      "Monthly"
  ],
  "startDate": "2022-06-15",
  "syncHour": 0,
  "timeZone": "Europe/London"
}

```

:::caution Option de synchronisation quotidienne

Bien que l'option mensuelle soit présente dans le fichier de configuration, actuellement nous n'affichons que l'option **quotidienne** dans l'interface utilisateur du flux Sync.
:::

| Propriété                                       | Type                                                                           | Description                                                                                                                                                                                                                                                | Requis                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Fréquence sélectionnée (`selectedFrequency`)    | _chaîne_                                                                       | La fréquence de synchronisation sélectionnée par le commerçant.                                                                                                                                                                                           | Requis                                                                 |
| Options de fréquence (`frequencyOptions`)       | _chaîne_                                                                       | Les options disponibles pour la fréquence de synchronisation fournies par Codat. **Dans l'interface utilisateur du flux Sync, seule l'option quotidienne est disponible pour qu'un commerçant puisse la sélectionner.**                                  | Requis                                                                 |
| Date de début (`startDate`)                     | _datetime ISO 8601_                                                            | La date à partir de laquelle la synchronisation des données de commerce devrait commencer (s'applique uniquement à la première synchronisation).                                                                                                          | Requis                                                                 |
| Heure de synchronisation (`syncHour`)           | _Nombre_ <br/> Entiers de 0 à 23 inclus                                       | L'heure du jour qui marquera le début/la fin de toute période de synchronisation. **Le flux Sync définit cette valeur automatiquement sur la valeur par défaut du client si disponible, sinon par défaut à minuit (00:00am) dans le fuseau horaire du commerçant.** | Optionnel, défini sur la valeur par défaut du client si disponible, sinon à 0 |
| Fuseau horaire (`timeZone`)                     | _chaîne_ de fuseaux horaires IANA **ou** <br/> `null` (par défaut `Etc/UTC`) | Le fuseau horaire appliqué à la date de début et à l'heure de synchronisation.                                                                                                                                                                            | Optionnel, défini sur `ETC/Utc` par défaut                            |

Une fois que [le flux Sync est terminé et que Codat reçoit la configuration](/commerce/build/implementing-codats-no-code-merchant-configuration), nous l'utilisons pour déterminer la **période de synchronisation** - la période pour laquelle les données de commerce seront synchronisées en une exécution du service de synchronisation.

Pour déterminer la période de synchronisation, nous établissons d'abord les valeurs suivantes en interne :

- La **date d'échéance** de synchronisation : la datetime à laquelle une synchronisation devient due en fonction de l'heure de synchronisation. Elle marquera la fin d'une période de synchronisation et le début de la suivante.

  Notez que le flux Sync définit l'**heure de synchronisation** pour vous, et c'est la valeur par défaut du client si disponible, sinon c'est 00:00 am dans le fuseau horaire du commerçant. Cela signifie que la **date d'échéance** est à l'heure de synchronisation le jour suivant le jour où nous recevons la configuration.

- La **date d'exécution** de la synchronisation qui est la datetime de la prochaine exécution de synchronisation.

:::caution Date d'échéance vs. date d'exécution

**Date d'échéance** et **date d'exécution** ne sont pas similaires. Codat gère la **date d'exécution** en fonction de la charge du système et d'autres facteurs. L'écart de temps entre la **date d'échéance** de synchronisation et la **date d'exécution** de synchronisation dépend de plusieurs facteurs et peut différer d'une synchronisation à l'autre.
:::

La **date de début** et l'**heure de synchronisation** déterminent le début de la première période de synchronisation.

À partir de la deuxième, chaque synchronisation commence à la date d'échéance de la synchronisation réussie précédente.

Voici un exemple de première synchronisation typique :

- Maintenant, c'est le 13 juillet, 16h
- La **date de début** est définie au 1er mai
- L'**heure de synchronisation** est définie à 00:00 am avec la fréquence de synchronisation définie sur **quotidienne**
- La **date d'échéance** de synchronisation (déterminée par Codat) est le 14 juillet à 00:00 am
- La **date d'exécution** de synchronisation (déterminée par Codat) peut être plusieurs heures plus tard, par exemple, à 03:00 am le 14 juillet
- La première période de synchronisation sera du 1er mai (00:00 am) à la **date d'échéance** de synchronisation du 14 juillet (00:00 am)
- La prochaine période de synchronisation sera du 14 juillet (00:00 am), **ou la dernière date de synchronisation réussie** au 15 juillet (00:00 am), la prochaine **date d'échéance** de synchronisation.
