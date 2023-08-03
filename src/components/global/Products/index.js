import React from "react";

const other = [
  {
    logo: "/logos/products-clear/accounting.svg",
    slug: "accounting-api",
    name: "Accounting API",
    description: "Connect to your customers' accounts through our universal API.",
    link: "/accounting-api/overview",
    linkText: "See our accounting data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/banking.svg",
    slug: "banking-api",
    name: "Banking API",
    description: "Use Open Banking data for bank accounts and transactions alongside our other best-in-class products.",
    link: "/banking-api/overview",
    linkText: "See our banking data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/commerce.svg",
    slug: "commerce-api",
    name: "Commerce API",
    description: "Connect to payment, Point of Sale, and eCommerce platforms and build with your customers' sales, orders, and payments data.",
    link: "/commerce-api/overview",
    linkText: "See our commerce data and integration coverage →",
  },
  {
    logo: "/logos/products-clear/assess.svg",
    slug: "assess",
    name: "Assess",
    description: "Make smarter credit decisions for your small business customers. Enrich your customer's financial data and receive actionable insights.",
    link: "/lending/overview",
    linkText: "Start assessing your customers →",
  },
]

const allProducts = [
  {
    logo: "/img/logos/products/logo_bankfeeds_clear.svg",
    slug: "bank-feeds",
    name: "Bank Feeds API",
    description: "Enable your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.",
    link: "/bank-feeds/overview",
    linkText: "Build your first bank feed →",
  },
  {
    logo: "/img/logos/products/logo_lending_clear.svg",
    slug: "lending",
    name: "Lending API",
    description: "Make smarter credit decisions for your small business customers. Enrich your customer's financial data and receive actionable insights.",
    link: "/lending/overview",
    linkText: "Start assessing your customers →",
  },
  {
    logo: "/img/logos/products/logo_commerce_clear.svg",
    slug: "commerce",
    name: "Sync for Commerce",
    description: "Sync your merchants' data between commerce and accounting systems, and automate bookkeeping.",
    link: "/commerce/overview",
    linkText: "Begin syncing merchants' data →",
  },
  {
    logo: "/img/logos/products/logo_expenses_clear.svg",
    slug: "expenses",
    name: "Sync for Expenses",
    description: "Embedded accounting integrations for corporate card providers. Standardize how you sync with bookkeeping software and ERPs.",
    link: "/expenses/overview",
    linkText: "Sync expenses data →",
  },
  {
    logo: "/img/logos/products/logo_payables_clear.svg",
    slug: "payables",
    name: "Sync for Payables",
    description: "Integrate with your customers' accounting software, and keep their supplier information, invoices, and payments in sync.",
    link: "/payables/overview",
    linkText: "Begin syncing merchants' data →",
  },
  {
    logo: "/img/logos/products/logo_payroll_clear.svg",
    slug: "payroll",
    name: "Sync for Payroll",
    description: "Manage payroll reconciliation with your customers' accounting platform.",
    link: "/payroll/overview",
    linkText: "Reconcile payroll data →",
  },
]

const Products = ({mini, products, verbose}) => {
  const validProducts = !products
    ? allProducts
    : products
      .filter(productName => {
        return allProducts.findIndex(product => product.name === productName) !== -1
      })
      .map(productName => {
        return allProducts[allProducts.findIndex(product => product.name === productName)]
      })

  if(!!mini) {
    return (
      <ul className="card-container mini">
        {
          validProducts.map(product => {
            return (
              <li className="card mini">
                <div className="card-row">
                  <div className="header">
                    <a href={product.link} className={`icon-wrapper product animated ${product.slug}`}>
                      <img
                        src={product.logo}
                        className="icon product"
                      />
                    </a>
                  </div>
                  
                  <div className="content">
                    <h4>{product.name}</h4>
                    <p>
                      <a href={product.link}>Explore product →</a>
                    </p>    
                  </div>
                </div>

                { verbose && <div>{product.description}</div> }
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
        validProducts.map((product, i) => {
          return (
            <li key={i} className="card">
              <div className="header">
                <a href={product.link} className={`icon-wrapper product animated ${product.slug}`}>
                  <img
                    src={product.logo}
                    className="icon product"
                  />
                </a>
              </div>
              <h3>{product.name}</h3>
              <p>
                {product.description}
              </p>
              <p>
                <a href={product.link}>{product.linkText}</a>
              </p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Products