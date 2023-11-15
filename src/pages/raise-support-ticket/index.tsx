import React from "react";
import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";
import Logo from "@theme/Logo";
import { useState } from "react";
import axios from "axios";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import formConfig from "./formconfig";

import styles from "../../components/global/Api/styles.module.scss";
import localstyles from "./styles.module.scss";

const RaiseSupportTicket = () => {
  const { siteConfig } = useDocusaurusContext();
  const [form, setForm] = useState({
    email: "",
    subject: "",
    description: "",
    companyId: "",
    affectedCompanies: "",
    useCase: "",
  });

  const customFields = formConfig();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var token = siteConfig.customFields.ZENDESK_KEY;
    var urlBase = siteConfig.customFields.ZENDESK_URL;
    var headers = {
      Authorization: `Basic ${token}`,
    };
    var url = `${urlBase}/requests`;
    console.log(form);

    const requestBody = {
      request: {
        requester: {
          email: form.email,
        },
        subject: form.subject,
        comment: { body: form.description },
        ticket_form_id: customFields.formId,
        custom_fields: [
          {
            id: customFields.companyId.id,
            value: form.companyId,
          },
          {
            id: customFields.affectedCompanies.id,
            value: `${form.affectedCompanies}`,
          },
          {
            id: customFields.useCase.id,
            value: `${form.useCase}`,
          },
        ],
      },
    };

    const response = await axios.post(url, requestBody, {
      headers: headers,
    });
    if (response.status == 201) {
      alert(
        "Thanks for raising a ticket with us. Someone will be in touch shortly."
      );
      window.location.reload();
    }
  };

  return (
    <Layout>
      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>
      <div className="container">
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label>
              Your email address
              <input
                id="email"
                type="email"
                className={localstyles.input}
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Subject
              <input
                id="subject"
                type="text"
                className={localstyles.input}
                value={form.subject}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Company Id
              <input
                id="companyId"
                type="text"
                className={localstyles.input}
                value={form.companyId}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Description
              <textarea
                id="description"
                className={localstyles.input}
                value={form.description}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Companies affected
              <select
                id="affectedCompanies"
                className={localstyles.input}
                value={form.affectedCompanies}
                onChange={handleChange}
              >
                {customFields.affectedCompanies.options.map((opt) => (
                  <option key={opt.tag} value={opt.tag}>
                    {opt.display}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Use case
              <select
                id="useCase"
                className={localstyles.input}
                value={form.useCase}
                onChange={handleChange}
              >
                {customFields.useCase.options.map((opt) => (
                  <option key={opt.tag} value={opt.tag}>
                    {opt.display}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </Layout>
  );
};

export default RaiseSupportTicket;
