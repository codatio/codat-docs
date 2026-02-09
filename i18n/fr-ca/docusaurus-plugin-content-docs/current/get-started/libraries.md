---
title: "Bibliothèques"
description: "Construisez facilement avec les API de Codat à l'aide de nos bibliothèques et SDK"
---

import ClientLibraries from "@components/ClientLibraries";

Toutes les bibliothèques clientes SDK pour Codat sont listées ci-dessous. Si vous avez créé votre propre SDK que vous seriez prêt à partager avec la communauté Codat, veuillez nous en informer et nous y ferons un lien ici !

## Bibliothèques clientes

Codat offre des bibliothèques clientes SDK officielles pour différents langages de programmation, qui sont régulièrement mises à jour pour les changements d'API cassants et non cassants. Ces bibliothèques clientes sont générées à partir de notre [spécification OpenAPI](https://github.com/codatio/oas).

<ClientLibraries />

### Versions des bibliothèques

La politique de version des bibliothèques clientes de Codat utilise le [versionnage sémantique](https://semver.org/spec/v2.0.0.html). Par exemple, une version de bibliothèque 4.2.0 définit la version _majeure_ comme 4, _mineure_ comme 2 et le _correctif_ comme 0.

Chaque nouvelle version de bibliothèque incrémentera l'un des composants de version en fonction du type de mise à jour :

- Le composant **Majeur** est incrémenté lorsque la version contient un changement cassant qui est incompatible avec la version précédente. Cela inclut un changement apporté à une propriété, un type, une méthode ou un paramètre (par exemple, l'ajout d'une valeur à un `enum` existant).
- Le composant **Mineur** est incrémenté lorsque la version contient une nouvelle fonctionnalité qui est rétrocompatible avec la dernière version. Cela inclut une nouvelle propriété, un type, une méthode ou un paramètre.
- Le composant **Correctif** est incrémenté lorsque la version contient des corrections de bogues rétrocompatibles. Cela inclut des modifications de code internes à la bibliothèque qui ne modifient aucune propriété, type, méthode ou paramètre.

### Support

Si vous rencontrez des difficultés lors de l'utilisation de nos SDK, n'hésitez pas à nous contacter pour obtenir de l'aide. Contactez votre représentant Codat dédié ou utilisez notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new) pour créer un ticket. Nous sommes là pour vous aider à assurer une expérience fluide.

### Gestion des changements

Pour rester à jour avec les mises à jour de produits de Codat, nous suggérons d'utiliser un outil tel que [Dependabot](https://github.com/dependabot), qui créera automatiquement des demandes de lecture pour vous chaque fois qu'une nouvelle version de chaque bibliothèque sera publiée.

## Bibliothèques communautaires

L'incroyable communauté de Codat a auto-publié un certain nombre de bibliothèques elle-même !

**Les bibliothèques communautaires ne sont pas officiellement prises en charge par Codat.** Codat ne peut pas fournir d'assistance pour l'utilisation de ces SDK ni garantir qu'ils seront tenus à jour avec les derniers changements, ajouts de fonctionnalités et dépréciations.

Si vous avez créé votre propre SDK, veuillez contacter notre [équipe d'expérience développeur](mailto:developer-experience@codat.io) pour l'ajouter à cette liste ! La meilleure façon de créer votre propre bibliothèque est d'utiliser la [spécification OpenAPI](https://github.com/codatio/oas) de Codat.

- [PHP](https://packagist.org/packages/thelogicstudio/codat-php)
- [Ruby](https://github.com/rikas/codat)
