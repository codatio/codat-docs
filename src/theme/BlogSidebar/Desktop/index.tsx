/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import type { Props } from "@theme/BlogSidebar/Desktop";
import Logo from "@theme/Logo";

import styles from "./styles.module.css";

export default function BlogSidebarDesktop({ sidebar }: Props): JSX.Element {
  const deprecations = sidebar.items.filter((item) =>
    item.title.includes("Upcoming")
  ); //.slice(4)
  const latest = sidebar.items.filter(
    (item) => !item.title.includes("Upcoming")
  ); //.slice(4)

  console.log(deprecations, latest);

  return (
    <aside className={styles.sidebarWrapper}>
      <div className={styles.sidebarLWrapper}>
        <Logo />
      </div>

      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          Upcoming deprecations
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {deprecations?.length > 1
            ? deprecations.map((item) => (
                <li key={item.permalink} className={styles.sidebarItem}>
                  <Link
                    isNavLink
                    to={item.permalink}
                    className={styles.sidebarItemLink}
                    activeClassName={styles.sidebarItemLinkActive}
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            : "No deprecations"}
        </ul>
        <a href="/updates/tags/deprecation">See all...</a>

        <br />
        <br />

        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {latest.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
