---
title: "Sécurité réseau"
description: "Examinez les pratiques de sécurité réseau qui s'appliquent à l'architecture réseau de Codat"
sidebar_label: "Sécurité réseau"
---

:::tip Ressources supplémentaires
Consultez nos derniers certificats de conformité et nos politiques de sécurité et juridiques dans notre **[Portail de confiance](https://trust.codat.io/)**.
:::

## Architecture réseau

Codat applique une architecture réseau de défense en profondeur (DiD) pour protéger notre réseau, une stratégie de cybersécurité basée sur les couches de contrôle suivantes :

- Principe du moindre privilège
- Segmentation du réseau
- Gestion forte de l'identité et de l'accès
- Chiffrement partout
- Surveillance et réponse aux incidents
- Résilience et redondance
- Minimisation de la surface d'attaque
- Audits réguliers et tests d'intrusion
- Principes de sécurité cloud
- Gestion des vulnérabilités

Le diagramme ci-dessous représente un aperçu de haut niveau de l'architecture réseau de la plateforme Codat.

![Architecture réseau de la plateforme Codat](network-architecture-diagram.png)

## Sécurité périmétrique

### Réseaux privés virtuels

L'architecture réseau chez Codat est logiquement séparée en réseaux privés virtuels (VPN). Chaque réseau représente un environnement de produit, et l'accès direct à cet environnement nécessite l'utilisation de la connexion VPN appropriée. Cela garantit que :

- Les données ne quittent jamais leur environnement (par exemple, les données de production sont uniquement en production).
- Le principe du moindre privilège peut être appliqué (voir [Contrôle d'accès](/enterprise/tech-overview/security/network-security#access-control) pour plus d'informations).
- Un seul point d'entrée et de sortie peut être appliqué.

### Pare-feu

Notre architecture réseau utilise un pare-feu d'application Web (WAF), qui agit comme une couche de protection supplémentaire filtrant le trafic malveillant. Ce WAF applique de nombreuses vérifications de meilleures pratiques sur tout le trafic entrant. À un niveau élevé, celles-ci incluent une protection contre les attaques, telles que :

- Déni de service distribué (DDoS)
- Déni de service (et limitation de débit)
- Les 10 principaux de l'Open Web Application Security Project (OWASP), y compris le cross-site-scripting et l'injection SQL
- Restrictions IP

## Sécurité des endpoints

### Gestion des appareils

Tous les appareils utilisés pour interagir avec nos VPN (voir [Réseaux privés virtuels](/enterprise/tech-overview/security/network-security#virtual-private-networks-vpns)) doivent être fournis par Codat et répondre à nos politiques de renforcement et de conformité. Cela est appliqué et garantit que :

- Le logiciel antivirus est installé et à jour.
- Le chiffrement complet du disque est activé.
- Les derniers correctifs du système d'exploitation ont été appliqués.
- L'appareil est inscrit dans notre inventaire d'actifs avec un propriétaire attribué.

## Chiffrement du trafic

Veuillez vous référer à [Sécurité des données](/enterprise/tech-overview/security/data-security) pour une analyse complète de la façon dont les données sont chiffrées chez Codat. Du point de vue du réseau, les mécanismes de chiffrement de meilleures pratiques sont appliqués dans le cadre de tout transport de données.

### HTTPS

Toute communication vers `codat.io` impose HTTPS (pas HTTP) avec les meilleures pratiques appliquées. Les résultats du rapport ci-dessous fournis par le tiers indépendant [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) attestent de cette configuration.

![Rapport de scan Qualys SSL Labs](qualys-ssl-report.png)

### Trafic réseau interne

Tout le trafic réseau interne fonctionne sur SSL/TLS (HTTPS).

### HTTP Strict Transport Security

Au niveau de l'application, toutes les réponses HTTPS desservant les requêtes (depuis le portail ou l'API) incluent un en-tête HTTP Strict Transport Security (HSTS).

### mTLS

Les clients d'entreprise peuvent optionnellement effectuer une communication avec notre API via mutual TLS (mTLS). Dans le cadre de cette configuration, Codat fournit aux clients un certificat client unique à utiliser pendant l'échange.

Pour plus d'informations, consultez [API mutual TLS](/enterprise/tech-overview/security/api-mTLS). Si vous souhaitez utiliser mTLS, veuillez parler à votre gestionnaire de compte.

## Contrôle d'accès

### Contrôle d'accès basé sur les rôles

L'accès aux systèmes et à l'infrastructure réseau de Codat est soutenu par le contrôle d'accès basé sur les rôles (RBAC) d'Azure et Active Directory. La gestion des groupes est centralisée et ne peut être modifiée que via un ticket et un processus de gestion des changements approuvé. Les groupes principaux sont examinés trimestriellement dans le cadre de notre politique d'examen de l'accès des utilisateurs.

Les détails complets sur ces fonctionnalités peuvent être trouvés sur le [Microsoft Trust Center](https://www.microsoft.com/en-us/trustcenter/)🔗.

### Authentification multifacteur et conformité des appareils

Les connexions à tous les réseaux ou infrastructures internes nécessitent que plusieurs vérifications de contrôle d'accès strictes soient remplies. Celles-ci doivent inclure :

- Authentification via des comptes centralisés avec 2FA obligatoire et accès limité dans le temps qui nécessite une réauthentification régulière
- Utilisation de réseau privé virtuel (VPN)
- Conformité des appareils sous forme de fourniture et de configuration par Codat

### Principe du moindre privilège

Le principe du moindre privilège est appliqué à l'accès réseau. Suite à cela, nous ne provisionnons pas l'accès à l'infrastructure réseau sensible ou aux données au compte d'un utilisateur individuel par défaut. Si le besoin d'accéder à de tels systèmes ou données se présente, l'accès de groupe est provisionné via un processus d'élévation de privilèges limité dans le temps qui nécessite une approbation et un élément de travail spécifique dans le cadre de notre processus de gestion des changements.

## Analyse des vulnérabilités

L'analyse des vulnérabilités au niveau du réseau est effectuée par divers outils de manière continue. Toutes les constatations identifiées par ce processus sont soit automatiquement résolues par des contrôles compensatoires ou une politique Azure, soit triées par notre processus de gestion des risques.

## Surveillance et journalisation du réseau

### Analyse des journaux

Toute l'activité réseau est enregistrée aux fins d'audit.

### Surveillance en temps réel

L'accès à des groupes d'utilisateurs sensibles ou des changements qui entraînent un changement significatif du comportement opérationnel des ressources sont alertés en temps réel.
