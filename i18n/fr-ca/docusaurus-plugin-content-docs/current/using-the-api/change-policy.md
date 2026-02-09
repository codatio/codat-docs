---
title: "Politique de changements"
description: "Découvrez comment nous vous communiquons les changements clés apportés à notre solution"
createdAt: "2021-11-03T11:41:14.711Z"
updatedAt: "2022-10-04T14:20:08.975Z"
---

Nous essayons toujours d'apporter des modifications à notre solution de manière rétrocompatible. Cela signifie que vous pouvez choisir si, quand et comment mettre à jour votre code et tirer parti des nouvelles fonctionnalités.

## Changements rétrocompatibles

Les changements suivants sont généralement considérés comme rétrocompatibles.

- Tout ajout à l'API Codat ou aux solutions frontales, comme :
  - un nouveau type de données ou endpoint API
  - un nouveau champ dans un type de données ou endpoint API
  - une nouvelle intégration
  - une nouvelle page du portail
  - une nouvelle règle
  - un nouveau paramètre optionnel pour un endpoint API
- Les changements frontaux qui n'altèrent pas matériellement les fonctionnalités disponibles ni la façon dont ces fonctionnalités sont accessibles

## Changements majeurs

Les changements majeurs sont des modifications qu'il n'est pas possible de rendre rétrocompatibles. Lors de leur dépréciation, nous essayons de suivre le <a href="https://martinfowler.com/bliki/ParallelChange.html" target="_blank">modèle de changement parallèle</a> (aussi appelé le modèle d'expansion et de contraction).

Lorsque nous prévoyons d'effectuer un changement majeur, nous publierons les détails de la dépréciation à venir sur nos [Mises à jour importantes](/updates) au moins trois mois avant sa mise en production.

Nous enverrons également un courriel à tous les utilisateurs ayant le rôle de [développeur](/configure/user-management/user-roles) et d'[administrateur](/configure/user-management/user-roles) la première semaine de chaque trimestre civil (janvier, avril, juillet, octobre) avec un résumé des dépréciations à venir.

Ces utilisateurs peuvent également choisir d'activer les dépréciations en avance dans le <a href="https://app.codat.io/" target="_blank">Portail Codat</a>.

## Activer les changements en avance

Si vous souhaitez opter pour un changement majeur avant sa date de mise en oeuvre prévue, vous pouvez le faire dans la [section Développeurs](/configure/portal/developers) du Portail Codat en naviguant vers **Développeurs&nbsp;> Dépréciations API**.

Assurez-vous de bien connaître les détails de la dépréciation que vous prévoyez d'activer et d'avoir effectué toutes les préparations nécessaires.

Seuls les utilisateurs ayant les rôles de [développeur](/configure/user-management/user-roles) et d'[administrateur](/configure/user-management/user-roles) peuvent accéder à l'onglet Développeurs et activer les dépréciations en avance.

## Calendrier de dépréciation

Vous pouvez également [vous abonner à notre calendrier de dépréciation](https://calendar.google.com/calendar/embed?src=c_83b00ebce11207e3c2b7b51fab82909ccff1e5a15f8d466f5919733aca458efb%40group.calendar.google.com).

<iframe
  src="https://calendar.google.com/calendar/embed?src=c_83b00ebce11207e3c2b7b51fab82909ccff1e5a15f8d466f5919733aca458efb%40group.calendar.google.com"
  style={{ border: 0 }}
  width="800"
  height="600"
  frameborder="0"
  scrolling="no"
/>

## Changements par des tiers

Occasionnellement, les intégrations auxquelles vous accédez via Codat peuvent apporter des modifications qui ont un impact sur votre utilisation de Codat. Cela peut inclure des changements à leurs propres API, des modifications de leurs conditions générales, et plus encore. Dans la mesure du possible :

- Nous essaierons de minimiser l'impact sur votre utilisation de Codat.
- Nous essaierons de vous informer de tout impact et de toute action que vous devez entreprendre.

Nous vous suggérons de vous assurer que vous êtes abonné aux mises à jour développeurs de tous les services que vous utilisez.
