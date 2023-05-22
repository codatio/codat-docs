import React from "react";

const usecases = [
  {
    icon: "/logos/usecases/lending.svg",
    title: "Lending",
    description: "Evaluate borrowers' financial history, income, assets, and debts to determine financial risk. ",
    link: "/usecases/summary/lending",
    linkText: "Discover lending →",
    linkTextMini: "Lend with Codat →",
  },
  {
    icon: "/logos/usecases/sync-expenses.svg",
    title: "Managing expenses",
    description: "Integrate data from corporate cards and expenses management platforms into accounting platforms your customers use.",
    link: "/usecases/summary/managing-expenses",
    linkText: "Discover expense management →",
    linkTextMini: "Discover expense management →",
  },
  {
    icon: "/logos/usecases/sync-commerce.svg",
    title: "Integrating commerce data",
    description: "Integrate high-volume sales and payment data from PoS, eCommerce, and payments platforms into your SMBs' accounting platforms.",
    link: "/usecases/summary/integrating-commerce-data",
    linkText: "Discover commerce data integration →",
    linkTextMini: "Discover commerce data integration →",
  },
  {
    icon: "/logos/usecases/payroll.svg",
    title: "Managing payroll",
    description: "Integrate your customers' payroll data from their HR and payroll platforms into their accounting platforms to support its reconciliation.",
    link: "/usecases/summary/managing-payroll",
    linkText: "Discover payroll management →",
    linkTextMini: "Discover payroll management →",
  },
  {
    icon: "/logos/usecases/dashboarding.svg",
    title: "Dashboarding",
    description: "Pull real-time SMB data from accounting platforms and display it in your platform, providing insight to your customers.",
    link: "/usecases/summary/dashboarding",
    linkText: "Discover dashboarding →",
    linkTextMini: "Discover dashboarding →",
  },
  {
    icon: "/logos/usecases/accounts-payable.svg",
    title: "Automating payables",
    description: "Automate your customers' accounts payable processes by reflecting bills from their business software and suppliers in their accounting platforms. ",
    link: "/usecases/summary/automating-payables",
    linkText: "Discover payables automation →",
    linkTextMini: "Discover payables automation →",
  },
  {
    icon: "/logos/usecases/accounts-receivable.svg",
    title: "Automating receivables",
    description: "Automate your customers' accounts receivable processes by reflecting outstanding and received invoices from their buyers in their accounting platforms.",
    link: "/usecases/summary/automating-receivables",
    linkText: "Discover receivables automation →",
    linkTextMini: "Discover receivables automation →",
  },
  {
    icon: "/logos/usecases/pull-push.svg",
    title: "Reconciling bank transactions",
    description: "Pushing your customers' bank transaction data into accounting platform's bank transaction ledgers for reconcilliation.",
    link: "/usecases/summary/reconciling-bank-transactions",
    linkText: "Discover bank transactions reconciliation →",
    linkTextMini: "Discover bank transactions reconciliation →",
  },
]

const Usecases = ({mini}) => {
  if(!!mini) {
    return (
      <ul className="card-container mini">
        {
          usecases.map((usecase, i) => {
            return (
              <li key={i} className="card mini">
                <div className="header">
                  <img
                    src={usecase.icon}
                    className="icon usecase"
                  />
                </div>
                
                <div className="content">
                  <h4>{usecase.title}</h4>
                  <p>
                    <a href={usecase.link}>Explore use case →</a>
                  </p>    
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <ul className="card-container">
      {
        usecases.map((usecase, i) => {
          return (
            <li key={i} className="card">
              <div className="header">
                <img
                  src={usecase.icon}
                  className="icon usecase"
                />
              </div>
              <h3>{usecase.title}</h3>
              <p>
                {usecase.description}
              </p>
              <p>
                <a className="tertiary" href={usecase.link}>{usecase.linkText}</a>
              </p>    
            </li>
          )
        })
      }
    </ul>
  )
}

export default Usecases