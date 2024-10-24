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
    description: "Integrate data from corporate cards and expense management platforms into accounting software your customers use.",
    link: "/usecases/summary/managing-expenses",
    linkText: "Discover expense management →",
    linkTextMini: "Discover expense management →",
  },
  {
    icon: "/img/logos/usecases/sync-commerce.svg",
    title: "Integrating commerce data",
    description: "Sync sales and payment data from PoS, eCommerce, and payments platforms with your customers' accounting software.",
    link: "/usecases/summary/integrating-commerce-data",
    linkText: "Discover commerce data integration →",
    linkTextMini: "Discover commerce data integration →",
  },
  {
    icon: "/img/logos/usecases/accounts-payable.svg",
    title: "Automating payables",
    description: "Read unpaid bills from customers' accounting software and mark them as paid to automate the accounts payable process.",
    link: "/usecases/summary/automating-payables",
    linkText: "Discover payables automation →",
    linkTextMini: "Discover payables automation →",
  },
  {
    icon: "/img/logos/usecases/pull-push.svg",
    title: "Reconciling bank transactions",
    description: "Write your customers' bank transaction data into accounting software's bank transaction ledgers for reconcilliation.",
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