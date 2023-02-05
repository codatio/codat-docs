import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Navbar from "@theme/Navbar";
import Logo from "@theme/Logo";
import styles from "./styles.module.scss";
import clsx from "clsx";
//import "@stoplight/elements/styles.min.css";
import "./index.css";

const LazyStoplight = React.lazy(() => import("../../page/api/Stoplight"));
const Fallback = (
  <div style={{ minHeight: "calc(100vh - var(--ifm-navbar-height))" }} />
);

const Api = ({ url }) => {
  return (
    <Layout title="API reference">
      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>

      <main>
        <div className={styles.stoplightWrapper}>
          <BrowserOnly>
            {() => (
              <Suspense fallback={Fallback}>
                <LazyStoplight apiDescriptionUrl={url} />
              </Suspense>
            )}
          </BrowserOnly>
        </div>
      </main>
    </Layout>
  );
};

export default Api;
