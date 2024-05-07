import React, { useState, Suspense } from "react";
import {Helmet} from "react-helmet";

import BrowserOnly from "@docusaurus/BrowserOnly";

import Layout from "@theme/Layout";
import Navbar from "@theme/Navbar";
import Logo from "@theme/Logo";

import clsx from "clsx";

import styles from "./styles.module.scss";
import "./styles/stoplight.scss";

const LazyStoplight = React.lazy(() => import("../../page/api/Stoplight"));
const Fallback = (
  <div className={styles.stoplightFallback} />
);

const Api = ({ url, title="API reference", socialBanner="https://docs.codat.io/img/meta/codat-bg.png"}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout title={title}>
      <Helmet>
        <meta data-rh="true" name="og:image" content={socialBanner}/>
        <meta data-rh="true" name="twitter:image" content={socialBanner}/>
      </Helmet>

      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>

      <main>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          {
            menuOpen
            ? "Hide endpoints"
            : "Show all endpoints"
          }
        </div>

        <div className={clsx(styles.stoplightWrapper, !menuOpen && "menu-closed")}>
          <BrowserOnly>
            {() => (
              <Suspense fallback={Fallback}>
                <LazyStoplight apiDescriptionUrl={url} />
              </Suspense>
            )}
          </BrowserOnly>
        </div>
        
        <div className={clsx(styles.stoplightPlaceholder, "col")}><p>Our API reference is not supported at this screen size.</p></div>
      </main>
    </Layout>
  );
};

export default Api;
