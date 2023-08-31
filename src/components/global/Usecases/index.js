import React from "react";

const usecases = [
  {
    icon: "/img/logos/usecases/lending.svg",
    title: "Lending",
    description: "Evaluate borrowers' financial history, income, assets, and debts to determine financial risk. ",
    link: "/usecases/summary/lending",
    linkText: "Discover lending →",
    linkTextMini: "Lend with Codat →",
  },
  {
    icon: "/img/logos/usecases/sync-expenses.svg",
    title: "Managing expenses",
    description: "Integrate data from corporate cards and expenses management platforms into accounting platforms your customers use.",
    link: "/usecases/summary/managing-expenses",
    linkText: "Discover expense management →",
    linkTextMini: "Discover expense management →",
  },
  {
    icon: "/img/logos/usecases/sync-commerce.svg",
    title: "Integrating commerce data",
    description: "Integrate high-volume sales and payment data from PoS, eCommerce, and payments platforms into your SMBs' accounting platforms.",
    link: "/usecases/summary/integrating-commerce-data",
    linkText: "Discover commerce data integration →",
    linkTextMini: "Discover commerce data integration →",
  },
  {
    icon: "/img/logos/usecases/payroll.svg",
    title: "Managing payroll",
    description: "Sync your customers' payroll data into their accounting platforms to support reconciliation.",
    link: "/usecases/summary/managing-payroll",
    linkText: "Discover payroll management →",
    linkTextMini: "Discover payroll management →",
  },
  {
    icon: "/img/logos/usecases/accounts-payable.svg",
    title: "Automating payables",
    description: "Automate your customers' accounts payable processes by reflecting bills from their business software and suppliers in their accounting platforms. ",
    link: "/usecases/summary/automating-payables",
    linkText: "Discover payables automation →",
    linkTextMini: "Discover payables automation →",
  },
  {
    icon: "/img/logos/usecases/pull-push.svg",
    title: "Reconciling bank transactions",
    description: "Push your customers' bank transaction data into accounting platform's bank transaction ledgers for reconcilliation.",
    link: "/usecases/summary/reconciling-bank-transactions",
    linkText: "Discover bank transaction reconciliation →",
    linkTextMini: "Discover bank transaction reconciliation →",
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
                <div className="card-row">
                  <div className="header">
                    <a href={usecase.link} className="icon-wrapper usecase">
                      <img
                        src={usecase.icon}
                        className="icon usecase"
                      />
                    </a>
                  </div>
                  
                  <div className="content">
                    <h4>{usecase.title}</h4>
                    <p>
                      <a href={usecase.link}>Explore use case →</a>
                    </p>    
                  </div>
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
                <a href={usecase.link} className="icon-wrapper usecase">
                  <img
                    src={usecase.icon}
                    className="icon usecase"
                  />
                </a>
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