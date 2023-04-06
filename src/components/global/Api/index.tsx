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

const Api = ({ url, title="API reference"}) => {
  return (
    <Layout title={title}>
      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>

      <main>
        <div className={clsx(styles.stoplightWrapper, "api-ref-stoplight")}>
          <BrowserOnly>
            {() => (
              <Suspense fallback={Fallback}>
                <LazyStoplight apiDescriptionUrl={url} />
              </Suspense>
            )}
          </BrowserOnly>
        </div>
        
        <div className={clsx(styles.stoplightFallback, "col")}><p>Our API reference is not supported at this screen size.</p></div>
      </main>
    </Layout>
  );
};

export default Api;
