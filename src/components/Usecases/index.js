import React from "react";
import Cards from "@components/Cards";

const usecases = [
  {
    icon: "/img/logos/usecases/accounts-payable.svg",
    title: "Spend insights",
    description:
      "Grow card volume by accessing deeper spend insights from more clients through seamless data sharing.",
    link: "/usecases/summary/spend-insights",
    linkText: "Discover spend insights →",
    linkTextMini: "Insight into spend with Codat →",
  },
  {
    icon: "/img/logos/usecases/lending.svg",
    title: "Business lending",
    description:
      "Automate data collection processes and make more confident credit decisions for your customers. ",
    link: "/usecases/summary/lending",
    linkText: "Discover lending →",
    linkTextMini: "Lend with Codat →",
  },
  {
    icon: "/img/logos/usecases/pull-push.svg",
    title: "Accounting automation",
    description:
      "Become your customers’ go-to payment platform by automating their financial processes in real time.",
    link: "/usecases/summary/accounting-automation",
    linkText: "Discover accounting automation →",
    linkTextMini: "Automate with Codat →",
  },
];

const Usecases = ({ mini }) => {
  if (!!mini) {
    return (
      <Cards>
        {usecases.map((usecase, i) => {
          return (
            <Cards.MiniCard
              title={usecase.title}
              subtitle={usecase.description}
              image={usecase.icon}
              link={usecase.link}
            >
              Explore use case →
            </Cards.MiniCard>
          );
        })}
      </Cards>
    );
  }

  return (
    <Cards>
      {usecases.map((usecase, i) => {
        return (
          <Cards.CardTwo
            title={usecase.title}
            image={usecase.icon}
            subtitle={usecase.description}
            link={usecase.link}
            linkText="Explore use case"
          >
            {usecase.description}
          </Cards.CardTwo>
        );
      })}
    </Cards>
  );
};

export default Usecases;
