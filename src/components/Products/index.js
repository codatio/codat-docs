import React from "react";

const other = [
  {
    logo: "/logos/products-clear/accounting.svg",
    slug: "accounting-api",
    name: "Accounting API",
    description:
      "Connect to your customers' accounts through our universal API.",
    link: "/accounting-api/overview",
    linkText: "See our accounting data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/banking.svg",
    slug: "banking-api",
    name: "Banking API",
    description:
      "Use Open Banking data for bank accounts and transactions alongside our other best-in-class products.",
    link: "/banking-api/overview",
    linkText: "See our banking data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/commerce.svg",
    slug: "commerce-api",
    name: "Commerce API",
    description:
      "Connect to payment, Point of Sale, and eCommerce software and build with your customers' sales, orders, and payments data.",
    link: "/commerce-api/overview",
    linkText: "See our commerce data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/assess.svg",
    slug: "assess",
    name: "Assess",
    description:
      "Make smarter credit decisions for your small business customers. Enrich your customer's financial data and receive actionable insights.",
    link: "/lending/overview",
    linkText: "Start assessing your customers →",
  },
  {
    logo: "/img/logos/products/logo_commerce_clear.svg",
    slug: "commerce",
    name: "Sync for Commerce",
    description:
      "Sync your merchants' data between commerce and accounting systems to automate bookkeeping.",
    link: "/commerce/overview",
    linkText: "Begin syncing merchants' data →",
  },
];

const allProducts = [
  {
    logo: "/img/logos/products/logo_bankfeeds_clear.svg",
    slug: "bank-feeds",
    name: "Bank Feeds",
    description:
      "Write bank transaction data into your customers' accounting software with an automated feed.",
    link: "/bank-feeds/overview",
    linkText: "Build your first bank feed →",
  },
  {
    logo: "/img/logos/products/logo_lending_clear.svg",
    slug: "lending",
    name: "Lending",
    description:
      "Get insight into financial health for smarter, more efficient lending.",
    link: "/lending/overview",
    linkText: "Start assessing your customers →",
  },
  {
    logo: "/img/logos/products/logo_supplier_enablement_clear.svg",
    slug: "spend-insights",
    name: "Spend Insights",
    description:
      "Manage comprehensive vendor and spend data to grow commercial card volume.",
    link: "/spend-insights/overview",
    linkText: "Manage supplier relationship →",
  },
  {
    logo: "/img/logos/products/logo_expenses_clear.svg",
    slug: "expenses",
    name: "Expenses",
    description:
      "Embedded accounting integrations for corporate card providers. Standardize how you sync with bookkeeping software and ERPs.",
    link: "/expenses/overview",
    linkText: "Sync expenses data →",
  },
  {
    logo: "/img/logos/products/logo_payables_clear.svg",
    slug: "payables",
    name: "Bill Pay",
    description:
      "Embedded accounting integrations for accounts payable automation.",
    link: "/payables/overview",
    linkText: "Begin syncing merchants' data →",
  },
];

const Products = ({ mini, products, verbose }) => {
  const validProducts = !products
    ? allProducts
    : products
        .filter((productName) => {
          return (
            allProducts.findIndex((product) => product.name === productName) !==
            -1
          );
        })
        .map((productName) => {
          return allProducts[
            allProducts.findIndex((product) => product.name === productName)
          ];
        });

  validProducts.sort((a, b) => (a.name > b.name ? 1 : -1));

  if (!!mini) {
    return (
      <ul className="card-container mini">
        {validProducts.map((product, i) => {
          return (
            <li className="card mini" key={i}>
              <div className="card-row">
                <div className="header">
                  <a
                    href={product.link}
                    className={`icon-wrapper product animated ${product.slug}`}
                  >
                    <img src={product.logo} className="icon product" />
                  </a>
                </div>

                <div className="content">
                  <h4>{product.name}</h4>
                  <p>
                    <a href={product.link}>Explore solution →</a>
                  </p>
                </div>
              </div>

              {verbose && <div>{product.description}</div>}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="card-container">
      {validProducts.map((product, i) => {
        return (
          <li key={i} className="card">
            <div className="header">
              <a
                href={product.link}
                className={`icon-wrapper product animated ${product.slug}`}
              >
                <img src={product.logo} className="icon product" />
              </a>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              <a href={product.link}>{product.linkText}</a>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
