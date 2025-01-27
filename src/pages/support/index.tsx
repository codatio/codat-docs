import React from "react";
import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";
import Logo from "@theme/Logo";
import DocsCard from "../../components/DocsCard";

import styles from "../../components/Api/styles.module.scss";

const RaiseSupportTicket = () => {
  return (
    <Layout>
      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>
      <div className="container">
        <ul className="card-container">
          <li className="card animation-pulse">
            <div className="header">
              <img src="/img/wp-icons/accounting-2.png" className="mini-icon" />
              <h3>Get technical support</h3>
            </div>
            <p>
              Raise a technical issue with our support team{" "}
              <a href="/raise-support-ticket">here</a>.
            </p>
          </li>
          <li className="card">
            <div className="header">
              <img src="/img/wp-icons/Stack.png" className="mini-icon" />
              <h3>Request a feature</h3>
            </div>
            <p>
              Raise a feature request directly with the product team through{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfngaDxM3kPQXT_GtIt9MOR55KYRPydjSnHlvYgtSskIM5oDg/viewform"
                target="_blank"
              >
                this form
              </a>
              .
            </p>
          </li>
          <li className="card">
            <div className="header">
              <img src="/img/wp-icons/CreditCard.png" className="mini-icon" />
              <h3>Billing inquiry</h3>
            </div>
            <p>
              Click <a href="mailto:AR@codat.io">here</a> to raise a billing
              inquiry directly with our accounts team.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default RaiseSupportTicket;
