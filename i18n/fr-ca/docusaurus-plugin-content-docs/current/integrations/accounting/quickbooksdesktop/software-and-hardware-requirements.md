---
title: "Exigences QuickBooks Desktop"
description: "Exigences et configurations logicielles, matérielles, d'environnement et de réseau"
sidebar_label: Exigences
---

## Versions QBD prises en charge

Codat suit la <a className="external" href="https://quickbooks.intuit.com/learn-support/en-us/help-article/feature-preferences/quickbooks-desktop-service-discontinuation-policy/L17cXxlie_US_en_US" target="_blank">politique d'interruption de service d'Intuit</a> pour QuickBooks Desktop et prend entièrement en charge les versions, niveaux de version et éditions spéciales suivants :

Les trois dernières versions de :

- QuickBooks Desktop (US)
- QuickBooks Desktop (Canada)

Niveaux de version :

- Accountant
- Pro
- Pro Plus
- Premier
- Premier Plus
- Enterprise

Éditions spéciales :

- Édition Contractor
- Édition Manufacturing and Wholesale
- Édition Accountant
- Édition Professional Services
- Édition Nonprofit

Codat ne corrige pas les problèmes liés aux anciennes versions du logiciel. Veuillez mettre à niveau vers la dernière version de QuickBooks Desktop pour continuer à utiliser notre connecteur QuickBooks Desktop.

Si vous rencontrez des problèmes de compatibilité avec des entreprises utilisant des versions plus anciennes du logiciel, le support Codat vous conseillera de mettre à niveau vers une version prise en charge.

:::caution QuickBooks Desktop pour Mac

Codat ne prend pas en charge Intuit QuickBooks pour Mac OS car cette fonctionnalité n'est pas prise en charge par le propre SDK QuickBooks d'Intuit. Seules les versions QuickBooks Desktop pour Windows listées ci-dessus sont prises en charge.

:::

## Modes QBD pris en charge

Le connecteur QBD fonctionne avec QBD en mode mono-utilisateur ou multi-utilisateur. En mode multi-utilisateur QBD, les utilisateurs sur différentes machines avec différents fichiers de données QBD peuvent synchroniser les données vers Codat.

## Limitations

Les limitations suivantes s'appliquent lors de l'utilisation du connecteur avec QBD en cours d'exécution en mode mono-utilisateur ou multi-utilisateur :

- Si QuickBooks Desktop est ouvert sur la machine de l'utilisateur PME, le fichier d'entreprise QuickBooks ouvert doit être le même que le fichier d'entreprise configuré pour le connecteur.

- Une seule instance de QBD peut être ouverte sur la machine d'un utilisateur à la fois.

- Il n'est pas possible d'interagir avec QBD pendant que le logiciel synchronise les données via le connecteur. Cela est dû aux propres limitations de QBD et s'applique à tous les connecteurs et synchronisations.

  Utilisez notre [SDK Connections](/auth-flow/optimize/connection-management) pour permettre à votre utilisateur de mettre en pause la synchronisation lorsque nécessaire (voir [Mettre en pause le connecteur](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#pause-the-connector)).

## Systèmes d'exploitation pris en charge

Le connecteur QuickBooks Desktop de Codat est pris en charge pour QuickBooks fonctionnant sur Windows 10 ou Windows 11 avec les derniers service pack(s) installés.

Les utilisateurs ont réussi à exécuter le connecteur sur des versions plus anciennes de Windows ; cependant, nous ne prenons pas officiellement cela en charge en raison du retrait du support de Microsoft pour ces systèmes d'exploitation.

Le connecteur ne fonctionnera pas sur Mac OS.

## Environnements pris en charge

Notre connecteur QuickBooks Desktop est vérifié pour fonctionner dans des environnements mono-locataire uniquement, où un seul utilisateur Windows est connecté à l'ordinateur utilisé pour accéder à QuickBooks Desktop.

En raison des limitations de synchronisation avec QBD, des complications peuvent survenir lors de tentatives de synchronisation dans des environnements multi-locataires. Par exemple, si vos fichiers d'entreprise sont hébergés sur un serveur différent de celui où vous exécutez et utilisez QBD, vous pouvez constater un impact sur les performances. Pour éviter cela, vous pouvez installer le web connector sur ce serveur, mais vous devez également installer QBD là-bas.

Vous pouvez également rencontrer des problèmes dans un environnement hébergé où plusieurs utilisateurs se connectent et utilisent QBD simultanément, bien que cela dépende de la configuration exacte. Cela ne s'applique pas aux instances hébergées Rightworks.

:::note Instances hébergées Rightworks

Les instances hébergées Rightworks ont déjà le web connector installé et prennent en charge notre intégration en conséquence. En dehors de la solution Rightworks, nous ne pouvons pas garantir le comportement du connecteur dans des environnements multi-locataires ou hébergés.

:::

## Exigences matérielles

Vous devrez vous assurer que la machine hôte répond aux <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/install-products/system-requirements-quickbooks-desktop-2022/L9664spDA_US_en_US" class="external" target="_blank">spécifications recommandées d'Intuit</a> pour l'exécution de QuickBooks Desktop.

Si vous avez un grand nombre d'entreprises, ou des fichiers d'entreprise particulièrement volumineux, vous devez porter une attention particulière à la consommation des ressources CPU, mémoire, disque et réseau sur la machine hôte et vous assurer qu'il y a une marge suffisante.

## Règles de pare-feu

Le connecteur QuickBooks Desktop communique sur le port 443 vers des URL hébergées sur `https://quickbooksdesktop.codat.io` en production.

Si vous rencontrez des problèmes avec la transmission de données du connecteur, veuillez ajouter les URL suivantes à votre liste d'autorisation de pare-feu :

`https://quickbooksdesktop.codat.io/`

`https://connectors.codat.io`
