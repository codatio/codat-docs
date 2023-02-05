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

import type { Props } from "@theme/BlogLayout";

export default function BlogLayout(props: Props): JSX.Element {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className="blog">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />

          <div className="col">
            <Navbar />

            <div className="row margin-vert--lg">
              <main
                className={clsx("col", {
                  "col--7": hasSidebar,
                  "col--9 col--offset-1": !hasSidebar,
                })}
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
