---
title: "Dépannage"
description: Problèmes courants avec QuickBooks Desktop
---

## Accéder aux journaux

Les journaux du connecteur peuvent aider lors du diagnostic des problèmes pour QuickBooks Desktop. Il y a deux ensembles qui sont utiles dans nos investigations.

#### Journaux du connecteur QuickBooks

Les fichiers journaux créés par le connecteur lui-même sont situés dans :

`C:\ProgramData\Intuit\QBWebConnector\log\QWCLog.txt`

Vous pouvez également afficher le fichier journal en sélectionnant le bouton "View Log" dans le web connector.

#### Journaux QuickBooks

Il y a également des journaux créés par QuickBooks lui-même qui sont situés dans :

`C:\ProgramData\Intuit\QuickBooks\qbsdklog.txt`

## Le connecteur ne peut pas être téléchargé ou exécuté

Certaines politiques d'entreprise ou logiciels antivirus particulièrement stricts peuvent empêcher l'exécution du connecteur. Codat soumet activement les fichiers du connecteur avec des informations de support aux packages antivirus courants afin qu'il ne soit pas incorrectement marqué comme une menace potentielle.

Si l'un de vos clients a des problèmes avec le blocage de l'antivirus, veuillez le signaler à Codat.

## Entreprise désautorisée immédiatement après la synchronisation des ensembles de données

Vous pouvez configurer le connecteur QuickBooks Desktop pour qu'il fonctionne dans l'un des deux modes :

- Synchronisation unique
- Synchronisation continue

Pour plus d'informations sur ces modes, consultez [Configuration du connecteur sur site](/integrations/accounting/offline-connectors). Si la synchronisation unique est configurée, l'entreprise passera au statut désautorisé après la synchronisation initiale. L'utilisateur devra désinstaller le web connector.

Si vous souhaitez activer les synchronisations continues avec l'entreprise, mettez à jour vos paramètres de connecteur et demandez à l'utilisateur PME de compléter à nouveau le processus de liaison (c'est-à-dire télécharger et installer le connecteur).

:::note Re-liaison et ID d'entreprise

Le même ID d'entreprise doit être utilisé lors de la recomplétion du processus de liaison.

:::

## Réinstaller le certificat d'application

Pour que le connecteur se lie au fichier de données QuickBooks desktop, l'utilisateur doit avoir accepté un certificat d'application QuickBooks. Typiquement, cela apparaît comme une invite la première fois que l'utilisateur télécharge le connecteur. Les options peuvent varier selon les versions de QuickBooks, mais sont similaires à :

- **No**
- **Yes, always; allow access even if QuickBooks is not running**

L'utilisateur doit sélectionner **Yes, always; allow access even if QuickBooks is not running** pour permettre au connecteur de fonctionner.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-app-certificate.png" />

Pour revenir aux paramètres du certificat dans QuickBooks, accédez à **Edit > Preferences > Integrated Applications > Company Preferences**. Vous devrez ensuite sélectionner l'application nommée 'QuickBooks Connector' et cliquer sur **Remove**.

Une fois que vous avez supprimé le certificat, vous pouvez ensuite réexécuter le processus d'installation du connecteur. Vous pouvez soit exécuter le fichier téléchargé (il peut se trouver dans le dossier de téléchargements et sera nommé `QuickBooksDesktopConnector.exe`) ou revisiter la page de téléchargement du connecteur. Pendant le processus d'installation, vous recevrez une invite demandant l'autorisation du certificat d'application.

## Le web connector ne fonctionne pas

Une fois le connecteur installé et configuré, vous ne pouvez synchroniser les données avec QuickBooks Desktop que si le web connector est en cours d'exécution. Nous ajoutons une tâche de démarrage au système de l'utilisateur pendant l'installation pour garantir que le connecteur est disponible pour synchroniser lorsque requis. Il ne pourra pas s'exécuter pour l'une des raisons suivantes :

- La machine de l'utilisateur est éteinte.
- L'utilisateur a fermé le web connector (y compris en appuyant sur le "X" en haut à droite de la fenêtre du web connector).
- L'utilisateur a plusieurs instances de QuickBooks Desktop en cours d'exécution, c'est-à-dire connecté à plusieurs fichiers d'entreprise (cette fonctionnalité n'est disponible que dans l'édition Enterprise).

## QuickBooks Desktop ne s'ouvre pas

Si le web connector est en cours de synchronisation, l'utilisateur ne pourra pas ouvrir QuickBooks Desktop tant que la synchronisation n'est pas terminée. Si le fichier d'entreprise est déjà ouvert dans QuickBooks Desktop et que le web connector exécute une synchronisation, l'interface de QuickBooks Desktop peut se comporter de manière inattendue, réduisant l'utilisabilité pendant ces périodes de synchronisation.

Cela est dû aux propres limitations de QBD et se produira lors de l'utilisation de n'importe quel connecteur.

Permettez à votre utilisateur de mettre en pause la synchronisation lorsqu'il a besoin d'accéder à QBD avec notre [SDK Connections](/auth-flow/optimize/connection-management) (voir [Mettre en pause le connecteur](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#pause-the-connector)).
