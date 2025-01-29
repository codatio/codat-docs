import React from "react";

const usecases = [
  {
    icon: "/img/logos/usecases/accounts-payable.svg",
    title: "Spend insights",
    description: "Grow commercial card volume by accessing deeper spend insights from more clients through seamless data sharing.",
    link: "/usecases/summary/spend-insights",
    linkText: "Discover spend insights →",
    linkTextMini: "Insight into spend with Codat →",
  },
  {
    icon: "/img/logos/usecases/lending.svg",
    title: "Business lending",
    description: "Automate data collection processes and make more confident credit decisions with easy access to customers' financial data. ",
    link: "/usecases/summary/lending",
    linkText: "Discover lending →",
    linkTextMini: "Lend with Codat →",
  },
  {
    icon: "/img/logos/usecases/pull-push.svg",
    title: "Accounting automation",
    description: "Become your customers’ go-to payment platform by automating more of their financial processes in real time.",
    link: "/usecases/summary/accounting-automation",
    linkText: "Discover accounting automation →",
    linkTextMini: "Automate with Codat →",
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