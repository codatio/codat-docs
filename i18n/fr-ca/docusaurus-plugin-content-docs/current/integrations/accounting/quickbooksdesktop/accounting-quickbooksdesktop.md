---
title: "QuickBooks Desktop (sur site)"
description: "En savoir plus sur notre connecteur QuickBooks Desktop sur site"
---

Notre connecteur QuickBooks Desktop permet aux PME qui utilisent QuickBooks Desktop de partager leurs données comptables consenties via la plateforme Codat, en prenant en charge les méthodes de connexion suivantes à QBD :

- Application QuickBooks Desktop
- QuickBooks Enterprise Cloud
- Rightworks

Le connecteur utilise le Web Connector Intuit, une application Windows qui s'exécute sur la machine locale de l'utilisateur PME.

:::caution Pièces jointes non prises en charge

Le téléchargement et le téléchargement de pièces jointes vers QuickBooks Desktop ne sont pas pris en charge pour aucun type de données. Cette fonctionnalité n'est pas prise en charge par le propre SDK QuickBooks d'Intuit.

:::

## Fonctionnalités et avantages

Notre connecteur offre une intégration transparente et complète à QuickBooks Desktop.

<ul className="card-container col-2">
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
      <h3>S'exécute en arrière-plan</h3>
    </div>
    <p>
      Le connecteur s'exécute comme un processus en arrière-plan et ne nécessite aucune interaction quotidienne par les utilisateurs PME.
    </p>
  </li>
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
      <h3>Redémarre et met à jour automatiquement</h3>
    </div>
    <p>
      Le connecteur démarre automatiquement après un redémarrage du système. Et il se met à jour silencieusement en arrière-plan.
    </p>
  </li>
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
      <h3>Synchronisations automatiques et manuelles</h3>
    </div>
    <p>
      Les données comptables sont synchronisées automatiquement. Les utilisateurs PME peuvent synchroniser manuellement leurs données quand ils le souhaitent.
    </p>
  </li>
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/copy-feature-bullet.svg" className="mini-icon" />
      <h3>Interface utilisateur intuitive</h3>
    </div>
    <p>
      Une interface utilisateur de connecteur permet les synchronisations manuelles et les fonctionnalités avancées, comme l'ajout de connexions à plusieurs entreprises.
    </p>
  </li>
</ul>

## Configuration initiale

Avant que vos utilisateurs PME ne puissent télécharger et installer le connecteur sur site, vous devrez effectuer les tâches suivantes dans le portail Codat.

### 1. Ajouter votre image de marque

Ajoutez l'image de marque de votre entreprise : elle est utilisée dans le flux Link.

Du point de vue de l'utilisateur PME, il verra l'application connecteur comme étant détenue et marquée par Intuit.

### 2. Activer le connecteur

Activez le connecteur QuickBooks Desktop dans le <a className="external" href="https://app.codat.io/" target="_blank">portail Codat</a>.

1. Sélectionnez **Settings > Integrations > Accounting**.
2. Cliquez sur **Set up** à côté de **QuickBooks Desktop**.
3. Sélectionnez le bouton à bascule pour définir l'intégration sur **Enabled**.

## Flux utilisateur PME

Voici comment vos utilisateurs PME interagissent avec le connecteur QBD.

- L'utilisateur sélectionne la façon dont il connecte QBD au début du flux. S'il choisit l'option `QuickBooks Desktop app`, il téléchargera le connecteur. La sélection de l'une des autres options ignore cette étape car les environnements hébergés ont déjà le web connector installé.
- L'utilisateur télécharge et exécute l'installateur du connecteur. Cela nécessite que l'utilisateur ait des privilèges d'administrateur (droits d'admin), ou qu'un autre administrateur approuve l'installation et exécute le connecteur.
- L'utilisateur PME télécharge et exécute ensuite le fichier de configuration (comme décrit dans [Installer le connecteur QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector)). En résumé, il devra :
  - Autoriser le connecteur à accéder à l'entreprise QuickBooks Desktop.
  - Saisir le mot de passe dans le connecteur, qui est fourni pendant le flux Link.

Une fois installé, le connecteur QBD ne nécessite aucune interaction supplémentaire de la part de l'utilisateur PME, et les privilèges d'administrateur ne sont plus requis.

Le connecteur a une interface utilisateur accessible depuis la barre d'état système et le menu Démarrer. Vos utilisateurs PME n'ont généralement pas besoin d'interagir avec cela, mais des fonctionnalités sont disponibles pour les utilisateurs avancés, telles que l'ajout de connexions à plusieurs entreprises et l'ajustement des horaires d'exécution automatique.

:::info Limitation de QuickBooks Desktop

Votre utilisateur PME ne peut pas interagir avec QBD pendant que le logiciel synchronise les données via le connecteur. Cela est dû aux propres limitations de QBD et s'applique à tous les connecteurs et synchronisations.

:::

Votre utilisateur peut avoir besoin de mettre en pause une synchronisation de données afin de pouvoir interagir avec QuickBooks Desktop. Pour prendre cela en charge, implémentez notre [SDK Connections](/auth-flow/optimize/connection-management) qui fournit cette fonctionnalité prête à l'emploi. Voir [Mettre en pause le connecteur](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#pause-the-connector).

## Configuration système requise

Consultez [Exigences QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/software-and-hardware-requirements) pour en savoir plus sur les versions prises en charge de QuickBooks Desktop, ainsi que sur les exigences matérielles, logicielles, d'environnement et de réseau pour l'exécution du connecteur.

## Installer le connecteur

Consultez [Installer le connecteur QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector) pour apprendre comment configurer et activer le connecteur.
