---
title: "Téléverser des reçus en tant que pièces jointes"
description: "Joindre des reçus à une transaction pour une piste d'audit complète"
sidebar_label: "Téléverser des pièces jointes"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Téléverser des pièces jointes

Lors de la création d'une transaction de dépense ou de transfert, votre client PME peut vouloir sauvegarder une copie du reçu associé dans son logiciel de comptabilité.

Utilisez le endpoint [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) pour joindre un ou plusieurs fichiers à la transaction, en les reliant via son `transactionId`. Le endpoint accepte les pièces jointes sous forme de données multipart et les écrit de manière synchrone.

```http
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```

```
Content-Type: multipart/form-data; boundary=yourBoundaryString

--yourBoundaryString
Content-Type: application/json
Content-Disposition: form-data; name="yourFileMetaData"

{ "includeWhenSent": false }

--yourBoundaryString
Content-Type: application/octet-stream
Content-Disposition: form-data; name="yourFileData"; filename="TEST_SEND_FILE.txt"

--yourBoundaryString--
```

### Prise en charge de la taille et du format de fichier

:::note Exceptions

Les pièces jointes pour les types de transaction `Adjustment` et `Transfer` ne sont pas prises en charge pour aucune intégration.
:::

| Intégration                       | Taille de fichier | Extension de fichier                                                                                                                                                                                   | Type de transaction pris en charge                        |
| --------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Xero**                          | 3 MB              | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF, ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP                                               | Tous les types pris en charge                             |
| **QuickBooks Online**             | 100 MB            | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF, TXT, XLS, XLSX, XML                                                                                                           | `ReimbursableExpenses`, `ExpensePayment`, `ExpenseRefund` |
| **NetSuite**                      | 100 MB            | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF, DOC, DOCX, ZIP                                                                                                                  | `ExpensePayment`, `ExpenseRefund`                         |
| **Dynamics 365 Business Central** | 350 MB            | [Aucune exigence explicite décrite](https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice) pour les fichiers texte, image et vidéo. | Tous les types pris en charge                             |
| **QuickBooks Desktop**            | N/A               | Ne prend pas en charge le téléversement de pièces jointes                                                                                                                                              | N/A                                                       |
| **FreeAgent**                     | 5 MB              | PNG, X-PNG, JPEG, PJG, GIF, X-PDF                                                                                                                                                                      |                                                           |

#### Joindre un reçu en utilisant Postman

Si vous utilisez Postman pour joindre des fichiers, il y a des étapes supplémentaires que vous devez compléter.

Effectuez une requête `POST` au endpoint [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) (consultez notre exemple [ici](https://postman.codat.io/#f3b78b32-f1a7-4016-b222-fd26efdcc126)) :

```http
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```

1.  Dans la configuration de la requête, sélectionnez **Body**, puis **form-data**.

2.  Cliquez dans la première ligne **KEY**, puis sélectionnez **File** dans la liste **File**.

3.  Dans le champ **VALUE** correspondant, cliquez sur **Select Files** et choisissez le fichier que vous souhaitez joindre.

4.  Tapez manuellement le nom du fichier et l'extension dans le champ **KEY**.

5.  Appuyez sur **Send** pour effectuer la requête.

## Mettre à jour des pièces jointes

Si votre utilisateur souhaite mettre à jour l'un des documents joints, il doit d'abord supprimer la pièce jointe existante directement dans le logiciel de comptabilité.

Ensuite, il peut joindre le document correct en utilisant le endpoint [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment).

Alternativement, l'utilisateur peut téléverser le fichier correct directement dans le logiciel de comptabilité.

---

## À lire ensuite

- Essayez la solution Expenses dans notre [référence API](/sync-for-expenses-api#/) interactive
