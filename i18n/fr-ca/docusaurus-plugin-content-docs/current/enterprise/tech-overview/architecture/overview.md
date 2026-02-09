---
title: "Aperçu de l'architecture"
description: "Explorez un aperçu de haut niveau de l'architecture de la plateforme Codat"
sidebar_label: "Aperçu"
hide_table_of_contents: false
---

## Introduction

Codat possède une **architecture de microservices**. Cette structure modulaire parallélise le développement logiciel et permet de créer un système évolutif et robuste.

Il existe actuellement plus de 100 services qui composent l'infrastructure technologique de Codat, chacun avec une instance distincte pour chacun des deux environnements (intégration et production). Plus important encore, chaque connexion à une source de données externe est un service distinct qui gère l'authentification, l'autorisation, la récupération de données et le mappage de données.

Les services sont configurés pour s'adapter automatiquement à plusieurs instances en cas d'augmentation de la charge. Cela garantit des niveaux élevés de disponibilité et de performance. La charge sur les instances est activement surveillée par [Microsoft Azure](https://azure.microsoft.com/en-us/), et l'équipe d'ingénierie est alertée en cas de pics inattendus.

### Topologie de flux réseau

Vous pouvez voir l'aperçu de la topologie de flux réseau de Codat sur l'image ci-dessous. Les clients appellent via un pare-feu d'application Web (WAF) vers notre passerelle, qui est routée vers le service approprié.

![](/img/enterprise/architecture/architecture.png)

## Hébergement et stockage de données

Codat utilise la plateforme [Microsoft Azure](https://azure.microsoft.com/en-us/) pour tout l'hébergement et le stockage de données, situés uniquement au Royaume-Uni. Microsoft Azure est une collection croissante de services cloud intégrés que les développeurs et les professionnels de l'informatique utilisent pour construire, déployer et gérer des applications via un réseau mondial de centres de données.

En particulier, Codat utilise l'offre [Platform as a service (PaaS)](https://azure.microsoft.com/en-gb/overview/what-is-paas/) d'Azure. Elle comprend l'hébergement, le réseau et l'infrastructure de stockage ainsi que le middleware, les outils de développement et d'autres ressources nécessaires pour prendre en charge un cycle de vie complet d'application Web.

Cela permet à Codat de se concentrer sur les services que nous créons tandis que Microsoft gère l'infrastructure applicative sous-jacente et corrige automatiquement le système d'exploitation, en les maintenant aux normes les plus élevées.

:::info Ressources supplémentaires
Consultez [Qu'est-ce que PaaS ?](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-paas/) de Microsoft pour en savoir plus sur les services de plateforme cloud et [Modèle de responsabilité partagée](/enterprise/tech-overview/architecture/shared-responsibility-model) pour plus d'informations sur notre utilisation d'Azure.
:::

## Lire ensuite

- [Modèle de responsabilité partagée](/enterprise/tech-overview/architecture/shared-responsibility-model)
