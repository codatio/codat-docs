import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

import DocSidebar from '@theme/DocSidebar';
import Navbar from '@theme/Navbar';

const NotFound = ({sidebar}) => (
  <>
    <PageMetadata
      title={translate({
        id: 'theme.NotFound.title',
        message: 'We couldn\'t find what you\'re looking for!',
      })}
    />

    <Layout>
      <div className={styles.docPage}>
        <aside className={styles.docSidebarContainer}>
          <DocSidebar
            key="docs-sidebar"
            sidebar={sidebar}
            path="/"
          />
        </aside>

        <div>
          <Navbar/>

          <main className="container margin-vert--xl">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h1 className="hero__title">
                  <Translate
                    id="theme.NotFound.title"
                    description="The title of the 404 page">
                    404
                  </Translate>
                </h1>
                <p>
                  <Translate
                    id="theme.NotFound.p1"
                    description="The first paragraph of the 404 page">
                    We couldn't find what you're looking for!
                  </Translate>
                </p>
                <p>
                  <a href="/">
                    <Translate
                      id="theme.NotFound.p2"
                      description="The 2nd paragraph of the 404 page">
                      Return to home
                    </Translate>
                  </a>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  </>
);

export default NotFound