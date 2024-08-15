/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {ReactNode, useState, useCallback} from 'react';
import {MDXProvider} from '@mdx-js/react';

import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import type {DocumentRoute} from '@theme/DocItem';
import type {Props} from '@theme/DocPage';
import BackToTopButton from '@theme/BackToTopButton';
import Navbar from '@theme/Navbar';

import {matchPath} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';
import {useWindowSize} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import type {PropVersionMetadata} from '@docusaurus/plugin-content-docs-types';

import ApiStatus from '@components/ApiStatus';

import clsx from 'clsx';
import styles from './styles.module.scss';

import useZendesk from './useZendesk';

import Hotjar from '@hotjar/browser';

const siteId = 4976193;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

type DocPageContentProps = {
  readonly currentDocRoute: DocumentRoute;
  readonly versionMetadata: PropVersionMetadata;
  readonly children: ReactNode;
};

function DocPageContent(props: DocPageContentProps): JSX.Element {
  const {
    currentDocRoute,
    versionMetadata,
    children,
  } = props

  const {pluginId, version} = versionMetadata;

  const sidebarName = currentDocRoute.sidebar;
  const sidebar = sidebarName
    ? versionMetadata.docsSidebars[sidebarName]
    : undefined;

  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }

    setHiddenSidebarContainer((value) => !value);
  }, [hiddenSidebar]);

  const windowSize = useWindowSize();
  const renderAPI = (windowSize === 'desktop' || windowSize === 'ssr');

  return (
    <Layout
      wrapperClassName={ThemeClassNames.wrapper.docsPages}
      pageClassName={ThemeClassNames.page.docsDocPage}
      searchMetadata={{
        version,
      }}
    >
      <ApiStatus/>

      <div className={clsx(styles.docPage, renderAPI)}>
        <BackToTopButton />

        {sidebar && (
          <aside
            className={clsx(styles.docSidebarContainer, {
              [styles.docSidebarContainerHidden]: hiddenSidebarContainer,
            })}
            onTransitionEnd={(e) => {
              if (
                !e.currentTarget.classList.contains(styles.docSidebarContainer)
              ) {
                return;
              }

              if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
              }
            }}>
            <DocSidebar
              key={
                // Reset sidebar state on sidebar changes
                // See https://github.com/facebook/docusaurus/issues/3414
                sidebarName
              }
              sidebar={sidebar}
              path={currentDocRoute.path}
              onCollapse={toggleSidebar}
              isHidden={hiddenSidebar}
            />

            {hiddenSidebar && (
              <div
                className={styles.collapsedDocSidebar}
                title={translate({
                  id: 'theme.docs.sidebar.expandButtonTitle',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                aria-label={translate({
                  id: 'theme.docs.sidebar.expandButtonAriaLabel',
                  message: 'Expand sidebar',
                  description:
                    'The ARIA label and title attribute for expand button of doc sidebar',
                })}
                tabIndex={0}
                role="button"
                onKeyDown={toggleSidebar}
                onClick={toggleSidebar}>
                {'>'}
                {/*<IconArrow className={styles.expandSidebarButtonIcon} />*/}
              </div>
            )}
          </aside>
        )}
        {/* CUSTOM CODE - wrapper div */}
        <div>
          {/* CUSTOM CODE - navbar placement */}
          <Navbar />
          <main
            className={clsx(styles.docMainContainer, {
              [styles.docMainContainerEnhanced]:
                hiddenSidebarContainer || !sidebar,
            })}>
            <div
              className={clsx(
                'container padding-bottom--lg',
                styles.docItemWrapper,
                {
                  [styles.docItemWrapperEnhanced]: hiddenSidebarContainer,
                },
              )}>
              <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

function DocPage(props: Props): JSX.Element {
  const {
    route: {routes: docRoutes},
    versionMetadata,
    location,
  } = props;

  const currentDocRoute = docRoutes.find((docRoute) =>
    matchPath(location.pathname, docRoute),
  );

  if (!currentDocRoute) {
    return <NotFound
      route={docRoutes}
      versionMetadata={versionMetadata}
      location={location}
      sidebar={versionMetadata.docsSidebars.docs}
    />;
  }

  const {siteConfig} = useDocusaurusContext();

  return (
    <>
      <Head>
        <html className={versionMetadata.className} />
      </Head>

      {
        siteConfig.customFields?.FEATURE_DEV_FLAG === "true" && <div className={styles.devFlag}>This is a staging build of the docs. Do not share the link externally.</div>
      }

      {
        siteConfig.customFields?.FEATURE_NEW_PRODUCTS_FLAG === "true" && <div className={styles.newFlagPositive}><a href="/updates/230901-new-products">We've reorganized our products to make building with Codat easier than ever</a></div>
      }

      <DocPageContent
        currentDocRoute={currentDocRoute}
        versionMetadata={versionMetadata}>
        {renderRoutes(docRoutes, {versionMetadata})}
      </DocPageContent>
    </>
  );
}

export default DocPage;
