---
title: "Commencer"
description: "Faites vos premiers pas à travers les informations et le support disponibles pour vous"
---

import Cards from "@components/Cards";

## Contenu de référence

<Cards>
  <Cards.Card
    title="Documentation"
    image="/fr-ca/img/wp-icons/accounting-2.png"
  >
    Commencez par nos <a href="/core-concepts/overview">concepts fondamentaux</a>, ou appuyez sur <code>Ctrl-K</code> pour afficher la barre de recherche rapide afin de trouver les informations dont vous avez besoin.
  </Cards.Card>

<Cards.Card image="/fr-ca/img/wp-icons/Stack.png" title="Référence API">
  Plongez et commencez à utiliser les endpoints API Codat via nos{" "}
  <a href="/using-the-api/overview">références API interactives</a>.
</Cards.Card>

  <Cards.Card
    image="/fr-ca/img/wp-icons/Financial-Services.png"
    title="Bibliothèques"
  >
    Utilisez nos <a href="/get-started/libraries">SDK de bibliothèques clientes</a> pour commencer à construire rapidement.
  </Cards.Card>
</Cards>

## Guides pour débutants

<ul className="card-container">
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/Lightbulb.png" className="mini-icon" />
      <h3>Guide des premiers pas</h3>
    </div>
    <p>Une introduction pratique au portail et à l'API de Codat.</p>
    <p>
      <a href="/get-started/first-steps">Voir le guide →</a>.
    </p>
  </li>
  <li className="card">
    <div className="header">
      <img src="/fr-ca/img/wp-icons/RocketLaunch.png" className="mini-icon" />
      <h3>Guide vidéo : Vos 10 premières minutes</h3>
    </div>
    <p>De l'inscription à la synchronisation des données en 10 minutes.</p>
    <p>
      <a href="/get-started/first-ten-minutes">Voir le guide →</a>.
    </p>
  </li>
</ul>

## Tutoriels

<Cards>
  <Cards.MiniCard
    title="Financement de factures"
    subtitle="Voir le tutoriel"
    image="/fr-ca/img/logos/usecases/lending.svg"
    link="/lending/guides/invoice-finance/introduction"
  >
    Prêter contre des factures en utilisant notre API Accounting
  </Cards.MiniCard>
  <Cards.MiniCard
    title="Paiement de factures"
    subtitle="Voir le tutoriel"
    image="/fr-ca/img/logos/usecases/payments.svg"
    link="/payables/guides/bill-pay/introduction"
  >
    Rationalisez les processus de comptes fournisseurs de vos clients
  </Cards.MiniCard>
  <Cards.MiniCard
    title="Rapprochement de flux bancaires avec QuickBooks Online"
    subtitle="Voir le tutoriel"
    image="/fr-ca/img/logos/usecases/sync.svg"
    link="/bank-feeds/guides/bank-feeds-tutorial"
  >
    Faites gagner du temps à vos clients en automatisant le rapprochement des transactions bancaires
  </Cards.MiniCard>
  <Cards.MiniCard
    title="Construction d'un prototype de tableau de bord avec Retool"
    subtitle="Regarder la vidéo"
    image="/fr-ca/img/logos/usecases/lending.svg"
    link="/guides/retool-dashboard"
  >
    Ingérez et visualisez les données Codat dans un tableau de bord Retool personnalisé en 10 minutes
  </Cards.MiniCard>
  <Cards.MiniCard
    title="Écriture de prêt"
    subtitle="Suivre le guide"
    image="/fr-ca/img/logos/usecases/lending.svg"
    link="/lending/guides/loan-writeback/introduction"
  >
    Suivez nos meilleures pratiques pour comptabiliser correctement un prêt de manière programmatique
  </Cards.MiniCard>
  <Cards.MiniCard
    title="Qualification de prêt"
    subtitle="Suivre le guide"
    image="/fr-ca/img/logos/usecases/lending.svg"
    link="/lending/guides/loan-qualification/introduction"
  >
    Découvrez comment Codat aide à vérifier les finances d'un demandeur de prêt et à automatiser
    la prise de décision
  </Cards.MiniCard>
</Cards>
