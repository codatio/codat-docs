---
title: "Points de contrôle de certification Partenaire App Store de Xero"
description: "Un guide pour obtenir la certification Partenaire App Store de Xero avec Codat"
---

Pour recevoir la certification Partenaire App Store de Xero, vous devez vous conformer aux points de contrôle de certification de Xero. Vous pouvez les consulter en détail dans la [propre documentation de Xero](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/).

Ceci est le guide complémentaire de Codat sur la façon de se conformer à ces exigences. Nous vous conseillons fortement de discuter de la conformité Xero avec votre spécialiste de mise en œuvre Codat avant de commencer à travailler sur l'un des points ci-dessous.

## Points de contrôle de certification

### 1. S'inscrire avec Xero

**Action requise : importante**

Toutes les applications cherchant la certification doivent créer un parcours utilisateur qui mène les clients potentiels de l'App Store de Xero à leur application. Le but est double :

1. Cela crée une expérience utilisateur rapide et facile pour les utilisateurs de Xero.
2. Cela permet à Xero de suivre quels utilisateurs de Xero découvrent votre application dans l'App Store de Xero.
   Xero facture ensuite des frais de référence de 15 % pour les inscriptions générées par leur App Store mais ne monétise pas les connexions Xero qui proviennent de vos autres canaux d'acquisition de clients.

Vous pouvez utiliser notre [guide Sign Up with Xero](/integrations/accounting/xero/partner-certification/sign-up-with-xero) pour décider quel type de parcours construire et comment le faire avec Codat.

### 2. Xero App Store

**Action requise : minimale ou importante**

Les exigences minimales de Xero pour votre application sont les suivantes :

- Fournir vos coordonnées de facturation.
- Créer et soumettre votre fiche d'application pour examen.
- Mettre en œuvre les abonnements App Store.

La quantité de travail requise pour se conformer à ce point de contrôle dépend de la nature de votre application. Les deux premières exigences sont administratives et ne prennent pas longtemps à compléter. Le troisième élément nécessite un travail d'ingénierie pour se conformer si vous opérez au Royaume-Uni, en Australie et en Nouvelle-Zélande et avez un modèle commercial qui correspond aux critères de Xero.

Parlez avec votre équipe de compte Codat pour vérifier si vous devez mettre en œuvre la Facturation Commerciale ou les abonnements App Store avant de prendre toute action.

### 3. Connexion

**Action requise : importante**

Bien que Codat gère la connexion initiale à Xero via l'interface utilisateur Codat Link, Xero exige que vous permettiez à votre utilisateur de gérer cette connexion de manière continue. La meilleure pratique consiste à créer une page « Paramètres d'intégration » pour satisfaire ces exigences.

| Exigence                                                                                             | Recommandations                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Afficher le nom du locataire qui a été connecté                                                     | Cela peut être récupéré depuis notre endpoint [Get company info](/accounting-api#/operations/get-company-info).                                                                                                                                                                                                                                                                                                                |
| Afficher l'état actuel de la connexion. Si déconnecté, fournir un bouton pour se reconnecter à Xero | Utilisez notre endpoint [Get connection](/platform-api#/operations/get-company-connection) pour vérifier le `status` de la connexion et utilisez le `linkUrl` pour vous reconnecter.                                                                                                                                                                                                                                            |
| Fournir un bouton pour mettre fin à la connexion                                                    | Lorsqu'un utilisateur clique sur le bouton, utilisez notre endpoint [Delete connection](/platform-api#/operations/delete-connection) pour vous déconnecter de Xero.                                                                                                                                                                                                                                                             |
| Gérer une déconnexion du côté de Xero                                                               | Utilisez un webhook pour écouter notre événement [DataConnectionStatusChanged](/using-the-api/webhooks/event-types) qui identifie quand une déconnexion se produit. Lorsque l'alerte est déclenchée, changez l'état de la connexion dans votre interface utilisateur et affichez un bouton « Reconnecter » ou « Connecter ». Xero recommande de définir une synchronisation quotidienne régulière de types de données légers afin de pouvoir vérifier l'état de connexion de chaque entreprise connectée tous les jours. |
| Prendre en charge la connexion un-à-un ou multi-organisationnelle                                   | Codat permet à vos clients de sélectionner leur organisation Xero en utilisant l'interface utilisateur native de Xero. Vous pouvez leur permettre de se connecter à plusieurs organisations au sein de Xero en créant une entreprise Codat distincte par organisation.                                                                                                                                                           |
| Fournir un processus de déconnexion pour le désengagement                                           | Utilisez notre endpoint [Delete connection](/platform-api#/operations/delete-company-connection) pour empêcher d'autres synchronisations et interrogations des données historiquement synchronisées.                                                                                                                                                                                                                            |

### 4. Image de marque et dénomination

**Action requise : minimale**

Vous devez être conforme aux directives de Xero partout où vous mentionnez votre Partenariat Xero ou utilisez leurs éléments de marque. Pour assurer la conformité, consultez les [Directives de marque](https://developer.xero.com/static/otherfiles/xero-app-partner-brand-guidelines.pdf) de Xero et leur [Guide pratique sur l'image de marque](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/).

Xero [recommande d'utiliser leurs propres](https://developer.xero.com/documentation/guides/how-to-guides/branding-your-integration/) boutons _Connecter_ et _Déconnecter_, mais vous pouvez utiliser un ensemble de boutons standard pour la cohérence du style si votre application possède plusieurs intégrations.

### 5. Portées

**Action requise : minimale**

Xero exige que les applications aient accès strictement aux données dont elles ont besoin, vous ne devez donc activer que les portées requises pour accéder aux données pertinentes pour votre cas d'utilisation. Nous fournissons [un guide des portées](/integrations/accounting/xero/partner-certification/scopes) pour expliquer quelles portées correspondent généralement à quels cas d'utilisation. Parlez avec votre spécialiste de mise en œuvre Codat et ils ajusteront vos portées de manière appropriée une fois que vous aurez convenu de ce qui est nécessaire.

### 6. Gestion des erreurs

**Action requise : modérée**

Si une erreur se produit, l'interface utilisateur de votre application doit communiquer ce fait à l'utilisateur. Il est recommandé de leur fournir des messages d'erreur ou des journaux détaillés. Codat fournit des messages d'erreur détaillés pour tout problème avec l'intégration, y compris les codes d'état, comme indiqué dans nos [Codes d'état et erreurs](/using-the-api/errors).

### 7. Intégrité des données

**Action requise : aucune ou minimale**

La plupart des implémentations Codat sont entièrement conformes à ce point de contrôle sans aucun travail supplémentaire requis. Cependant, si votre application gère plusieurs devises, vous devez vérifier que vous gérez les scénarios multidevises de manière appropriée.

Avant de créer ou de mettre à jour des données transactionnelles, telles qu'un paiement dans une autre devise, utilisez notre endpoint [Get push options](https://docs.codat.io/platform-api#/operations/get-create-update-model-options-by-data-type) pour voir quelles devises ont été configurées par votre client dans Xero. Ensuite, procédez à la création ou à la mise à jour de ces données transactionnelles.

Vous pouvez également en savoir plus sur la [création, la mise à jour ou la suppression de données](https://docs.codat.io/using-the-api/push) avec Codat.

### 8. Mappage de compte et de paiement

**Action requise : aucune ou importante**

Ce point de contrôle n'est pertinent que pour certaines applications qui créent, mettent à jour ou suppriment des données dans Xero.

Les applications concernées doivent créer une interface de mappage de compte pour leurs utilisateurs. En préparation, nous vous recommandons de consulter le [guide des meilleures pratiques](https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices) de Xero et le [guide de mise en œuvre](/using-the-api/best-practices/implementing-a-mapping-page) de Codat sur les interfaces de mappage de compte.

### 9. Taxes

**Action requise : aucune ou minimale**

Si votre application gère les taxes, vous devez vous assurer que le taux de taxe correct est utilisé sur les factures, devis, etc.

Codat peut lire les taux de taxe en tant que taux de taxe individuels et sur les transactions, comme les factures ou les paiements. Nous gérons également le calcul du taux de taxe lors de la création ou de la mise à jour de transactions avec des taux de taxe où plusieurs composantes fiscales sont appliquées aux taux de taxe effectifs (par exemple, taux de taxe composés).

Nous ne prenons actuellement pas en charge la création de nouveaux taux de taxe, vous ne pouvez donc utiliser que les taux existants dans le compte Xero d'une PME. Vous devrez peut-être prévoir le mappage des taux de taxe dans votre [page de mappage de compte](/integrations/accounting/xero/partner-certification/checkpoints-app-store#12-account-mapping).
