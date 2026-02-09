---
title: "Sécurité des données"
description: "Examinez les pratiques de sécurité qui couvrent la façon dont nous stockons les données au repos et les sécurisons en transit"
sidebar_label: "Sécurité des données"
---

:::tip Ressources supplémentaires
Consultez nos derniers certificats de conformité et nos politiques de sécurité et juridiques dans notre **[Portail de confiance](https://trust.codat.io/)**.
:::

## Données au repos

Dans cette section, nous couvrons les principes de sécurité qui s'appliquent aux données que nous stockons dans les bases de données SQL et le stockage blob d'Azure.

### Bases de données SQL Azure

Les bases de données sont chiffrées à l'aide de Transparent Data Encryption (TDE). Microsoft gère le cycle de vie complet des clés et les normes de chiffrement au sein d'Azure en utilisant AES-256 dans le cadre de ce processus.

Consultez [Transparent data encryption pour SQL Database, SQL Managed Instance et Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview?view=azuresql&viewFallbackFrom=sql-server-ver16&tabs=azure-portal)🔗 de Microsoft pour plus d'informations.

#### Clés de chiffrement spécifiques à l'entreprise

Les clients d'entreprise de Codat ont la possibilité d'utiliser des bases de données dédiées qui peuvent faciliter des clés de chiffrement spécifiques au client. Les clés de chiffrement sont stockées dans un Azure Key Vault géré par Codat avec l'option de stockage client. Toutes les bases de données pour le même client partagent la même clé de chiffrement.

##### Principes de régénération des clés

- De nouvelles versions de clés sont générées au moins tous les deux ans pour respecter les meilleures pratiques cryptographiques.
- Pour les coffres gérés par Codat, le cycle de vie de gestion des clés suit notre approche actuelle de meilleures pratiques.
- Les versions précédentes des clés sont conservées pendant la durée de la politique de conservation des sauvegardes pour permettre la récupération à partir des sauvegardes.
- La rotation automatique des clés est activée au niveau de la base de données. La rotation est déclenchée lorsqu'une nouvelle version de la clé est détectée et sera automatiquement effectuée dans les 24 heures.

Consultez [Configurer la rotation automatique des clés cryptographiques dans Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/keys/how-to-configure-key-rotation)🔗 pour plus de détails.

##### Principes de suppression des clés

Sur demande ou à la fin du contrat, Codat supprime la clé spécifique au client dans les 5 jours ouvrables excluant les week-ends. Cela rend les données persistées illisibles. Le client peut confirmer que la suppression est terminée en demandant des données depuis notre API, ce qui échouera car la base de données sera illisible.

Consultez [Transparent data encryption (TDE) avec des clés gérées par le client au niveau de la base de données](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-byok-database-level-overview)🔗 pour plus d'informations.

### Stockage blob Azure

Codat stocke des données dans le stockage blob Azure de manière temporaire aux fins de mise en scène et de support. Ces données sont chiffrées au repos via Storage Service Encryption.

Consultez [Chiffrement Azure Storage pour les données au repos](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption)🔗 pour plus de détails.

### Sauvegardes et redondance

Pour assurer un service continu, Codat suit une méthodologie de sauvegarde de données et de redondance de meilleures pratiques. Par conséquent, toutes nos sauvegardes sont chiffrées et suivent notre politique de conservation.

Selon le contrat du client, les sauvegardes peuvent être protégées à l'aide d'une clé client dédiée ou via l'utilisation d'une clé de chiffrement gérée par Microsoft.

## Données en transit

Dans cette section, nous couvrons les façons dont Codat applique les mécanismes de chiffrement de meilleures pratiques actuelles dans le cadre de tout transport de données.

### HTTPS

Toute communication vers `codat.io` impose HTTPS (pas HTTP) avec les meilleures pratiques appliquées. Les résultats du rapport ci-dessous fournis par le tiers indépendant [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) attestent de cette configuration.

![Rapport de scan Qualys SSL Labs](qualys-ssl-report.png)

### Trafic réseau interne

Tout le trafic réseau interne fonctionne sur SSL/TLS (HTTPS).

### HTTP Strict Transport Security

Au niveau de l'application, toutes les réponses HTTPS desservant les requêtes (depuis le portail ou l'API) incluent un en-tête HTTP Strict Transport Security (HSTS).

## Contrôle d'accès aux données

Dans le cadre de notre posture de sécurité des données, Codat applique un contrôle d'accès aux données strict. Cela inclut les pratiques suivantes :

1. **Principe du moindre privilège**

   Par défaut, les personnes n'ont pas accès aux données client de production.

2. **Accès de secours**

   Les individus ont la possibilité d'obtenir un accès de secours à la production aux fins d'investigation de problèmes. Cet accès est limité dans le temps, lié à une tâche spécifique et doit être approuvé par un ensemble élu de dirigeants. Il doit être effectué via une connexion à un VPN de production dédié qui nécessite une 2FA et un appareil fourni par Codat conforme.

3. **Contrôle des appareils du personnel Codat**

   Tous les appareils fournis par Codat ont un chiffrement complet du disque, et les données de production ne quittent pas l'environnement de production.

Le contrôle d'accès est appliqué via Azure RBAC et Active Directory. Vous pouvez trouver plus de détails sur ces fonctionnalités sur le [Microsoft Trust Center](https://www.microsoft.com/en-us/trustcenter/)🔗.

## Stockage des secrets

Des parties de l'application de Codat nécessitent la persistance de secrets (tels que des jetons ou des identifiants). Ceux-ci sont traités avec un soin et une sensibilité particuliers : ils sont stockés dans l'Azure Key Vault et ne sont accessibles que via un contrôle d'accès de secours spécifique.

Consultez [Sécurité Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/security-features)🔗 pour plus d'informations.

## Journalisation

Les informations de diagnostic sont conservées aux fins d'investigation et de support en ingénierie. Aucune information sensible ou PII n'est enregistrée.
