/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import Navbar from "@theme/Navbar";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

import styles from "./styles.module.scss";

import type { Props } from "@theme/BlogLayout";

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();

  const isUpdatesPage = location?.pathname === "/updates" || location?.pathname.includes("/updates/page")

  return (
    <Layout {...layoutProps}>
      {
        siteConfig.customFields?.FEATURE_DEV_FLAG === "true" && <div className={styles.devFlag}>This is a staging build of the docs</div>
      }

      {
        siteConfig.customFields?.FEATURE_NEW_PRODUCTS_FLAG === "true" && <div className={styles.newFlagPositive}><a href="/updates/230901-new-products">We've reorganized our products to make building with Codat easier than ever</a></div>
      }

      <div className="blog">
        <div className={clsx("row", styles.row)}>
          <BlogSidebar sidebar={sidebar} />

          <div className="col">
            <Navbar />

            <div className="row margin-vert--lg">
              { isUpdatesPage 
                && <h1 className={styles.updatesHeader}>Updates</h1> 
              }

              <main
                className={isUpdatesPage ? styles.articlesGrid : styles.article}
                itemScope
                itemType="http://schema.org/Blog"
              >
                {children}
              </main>

              {toc && <div className="col col--2">{toc}</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
