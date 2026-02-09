---
title: "Utiliser l'application hébergée"
sidebar_label: "Utiliser l'application hébergée"
description: "Utilisez l'application de démonstration hébergée pour vous connecter aux données sandbox, puis afficher et payer des factures. Pour boucler la boucle, voyez comment les paiements sont rapprochés dans QuickBooks"
---

### Dans cette section, vous allez :

- Connecter l'application de démonstration à QuickBooks Online
- Afficher les factures
- Payer une facture

### Connecter l'application de démonstration à QuickBooks Online

1. <a href="https://demo-bill-pay.vercel.app/" target="_blank">
     Ouvrez l'application de démonstration
   </a>
   .
2. Sur l'écran de démarrage **Bill Pay**, cliquez sur **Commencer**.
3. Créez une nouvelle entreprise.
4. Sélectionnez l'intégration **Intuit QuickBooks Sandbox**.
5. Dans la boite de dialogue de connexion, entrez les identifiants de votre compte Intuit et sélectionnez n'importe quelle entreprise sandbox QuickBooks Online.

6. L'écran **Connexion réussie** s'affiche une fois que vous avez connecté votre logiciel comptable. Cliquez sur **Lancer le portail des factures** pour ouvrir l'application de démonstration.

   ![bill-pay_launch-bills-portal-screen](/img/use-cases/bill-pay/bill-pay_launch-bills-portal-screen.png)

Pour plus de détails sur la façon dont l'application crée une connexion à QuickBooks Online via Hosted Link, consultez [Comprendre le flux d'authentification](/payables/guides/bill-pay/how-the-demo-app-works#understand-the-auth-flow).

### Afficher les factures

Une fois que vous avez connecté votre logiciel comptable, vous verrez un tableau des factures ouvertes et payées de l'entreprise que vous venez de connecter. Celles-ci sont lues à partir de votre entreprise sandbox QuickBooks Online et classées par date d'émission.

![bill-pay_app-view](/img/use-cases/bill-pay/bill-pay_app-view.png "Interface de l'application de démonstration de paiement de factures")

1. Si vous ne voyez que des factures payées, utilisez le bouton bascule **Afficher les factures impayées uniquement** pour filtrer la liste.
2. Cliquez sur **Afficher** à côté d'une facture impayée pour ouvrir la vue **Facture**.

   Celle-ci contient des informations supplémentaires sur la facture, notamment le numéro de facture, la date d'échéance et les lignes de détail (le cas échéant).

   ![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_bill-detail-dialog-renamed.png "La vue Facture affiche des informations supplémentaires sur une facture impayée.")

3. Cliquez sur **Payer la facture** pour effectuer un paiement sur la facture.

### Payer une facture

Ensuite, vous pouvez effectuer un paiement sur une facture. Lorsque vous le faites, l'application écrit automatiquement un paiement de facture dans le logiciel comptable &mdash; dans ce cas, QuickBooks Online. Le paiement est ensuite rapproché avec la facture source, qui est marquée comme _payée_.

1. Dans la vue **Paiement de facture**, choisissez un compte dans le menu déroulant **Nom du compte**. C'est le compte dans QuickBooks Online auquel vous souhaitez attribuer le paiement de la facture.

   ![bill-pay_payment-view](/img/use-cases/bill-pay/bill-pay_payment-view.png "La vue Paiement de facture avec le champ Nom du compte mis en évidence.")

   :::info Comptes affichés
   Seuls les comptes bancaires dans la même devise que la facture sont affichés.
   :::

2. (Facultatif) Entrez des détails de carte de paiement fictifs.

   :::info Détails de la carte
   Nous avons inclus la section des détails de la carte pour montrer comment Codat peut être utilisé avec d'autres systèmes, tels que les fournisseurs de paiement, pour améliorer les applications de paiement de factures.
   :::

3. Cliquez sur **Payer la facture** pour payer le montant total de la facture.

Vous avez maintenant vu l'application en action en affichant et en payant des factures.

### Voir le paiement dans QuickBooks

Facultativement, vous pouvez vérifier que votre paiement a été rapproché correctement dans QuickBooks Online. Les paiements de factures ont initialement un statut `pending` (en attente), mais cela devrait changer à `paid` (payé) après environ une minute.

:::info Opération d'écriture asynchrone

Dans Codat, les opérations de création et de mise à jour sont asynchrones, ce qui signifie que l'écriture de données dans un logiciel comptable retourne une opération d'écriture avec un statut `Pending`. Vous pouvez [en savoir plus](/using-the-api/push) sur les opérations CUD dans Codat. Nos webhooks permettent à votre solution d'être notifiée d'un [changement d'opération d'écriture](/using-the-api/push#monitor-the-status-of-your-operation).

:::

1. Connectez-vous au <a href="https://developer.intuit.com/" target="_blank">portail développeur Intuit</a>.
2. Depuis l'onglet **Docs API et outils**, ouvrez l'entreprise sandbox que vous avez connectée à l'application de démonstration.
3. Dans la barre latérale, sélectionnez **Encaisser et payer**.
4. Vérifiez le statut de la facture que vous avez payée dans l'application de démonstration :
   1. Sélectionnez **Factures > Payées**.
   2. Sélectionnez la facture et vérifiez que le statut de paiement est **Payé**.

   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "Une facture dans QBO avec un statut PAYÉ.")

5. Vérifiez à quel compte bancaire le paiement a été rapproché :
   1. Retournez à **Factures > Payées**.
   2. Dans la colonne **Action**, sélectionnez **Afficher les paiements** pour révéler la ligne de paiement.
   3. Cliquez sur **Voir les détails** pour ouvrir le paiement de facture qui correspond à la facture.
   4. Vérifiez que le menu déroulant **Compte bancaire/crédit** contient le compte auquel vous avez attribué le paiement.

   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "Un paiement de facture dans QBO montrant le compte Chèques dans le menu déroulant Compte bancaire/crédit.")

### Récapitulatif

Vous avez utilisé l'application de démonstration pour afficher des factures et effectuer un paiement. Vous avez également vérifié les données sources dans QuickBooks Online pour comprendre le processus de rapprochement des paiements.

<hr />

### À lire ensuite

Maintenant que vous avez essayé l'application de démonstration, vous pouvez :

- [Exécuter l'application de démonstration de paiement de factures localement](/payables/guides/bill-pay/run-demo-app-locally).
- En savoir plus sur [le fonctionnement de l'application de démonstration](/payables/guides/bill-pay/how-the-demo-app-works).
