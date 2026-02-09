import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./styles.module.scss";

const Client = (props) => {
  const { path, name } = props;
  const imageUrl = useBaseUrl(path);

  return (
    <div className={styles.client}>
      <img
        src={imageUrl}
        alt={translate(
          {
            id: "clients.logoAlt",
            message: "{name} logo",
            description: "Alt text for client logo",
          },
          { name },
        )}
      />
    </div>
  );
};

const Clients = (props) => {
  const { clients } = props;

  return (
    <div className={styles.clients}>
      <p className={styles.header}>
        <Translate id="clients.trustedBy">
          Trusted by leading fintechs and financial institutions
        </Translate>
      </p>

      <div className={styles.clientsList}>
        <a
          className={styles.actionButton}
          href="https://www.codat.io/case-studies/"
        >
          <Translate id="clients.caseStudies">Read our case studies</Translate>
        </a>

        {clients.map((client, i) => {
          return <Client key={i} {...client} />;
        })}
      </div>
    </div>
  );
};

export default Clients;
