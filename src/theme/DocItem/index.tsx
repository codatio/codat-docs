/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import DocPaginator from '@theme/DocPaginator';
//import Seo from '@theme/Seo';
import type {Props} from '@theme/DocItem';
//import DocItemFooter from '@theme/DocItemFooter';
import TOC from '@theme/TOC';
import TOCCollapsible from '@theme/TOCCollapsible';
import styles from './styles.module.css';
import useZendesk from './useZendesk';

import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';

import CookieConsent from "react-cookie-consent";

export default function DocItem(props: Props): JSX.Element {
  const {content: DocContent} = props;
  const {metadata, frontMatter} = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_description: hideDescription,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  const { metadata: { editUrl } } = DocContent;
  const {description, title} = metadata;

  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === 'undefined';

  const windowSize = useWindowSize();

  const canRenderTOC =
    !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;

  const renderTocDesktop =
    canRenderTOC && (windowSize === 'desktop' || windowSize === 'ssr');

  useZendesk();

  return (
    <DocProvider content={props.content}>
      {/*<Seo {...{title, description, keywords, image}} />*/}
      <DocItemMetadata />

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}>
          <div className={styles.docItemContainer}>
            <article>
              {canRenderTOC && (
                <TOCCollapsible
                  toc={DocContent.toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                  className={clsx(
                    ThemeClassNames.docs.docTocMobile,
                    styles.tocMobile,
                  )}
                />
              )}

              <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
                {title && !hideTitle && <h1>{title}</h1>}

                {description && !hideDescription && <p className="subtitle">{description}</p>}

                <DocContent />
              </div>

              {/*<DocItemFooter {...props} />*/}
            </article>

            <DocPaginator metadata={metadata} />
          </div>
          <div className="spacer"></div>
        </div>

        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="cookieConsent3"
          style={{ background: "#556680" }}
          buttonStyle={{ backgroundColor: "white", fontSize: "12px", borderRadius: "4px" }}
        >
          This website uses cookies to enhance your experience.
        </CookieConsent>


        <CookieConsent
          location="bottom"
          buttonText="Enter"
          cookieName="cookieConsent2"
          style={{ background: "#556680", height: "100px", textAlign: "center" }}
          buttonStyle={{ backgroundColor: "white", fontSize: "12px", borderRadius: "4px" }}
        >
          Welcome to our new docs! <br/>
          They're in beta so you may find a issues in our content. <br/>
          You can contribute to them <a href="https://github.com/codatio/codat-docs" target="_blank">here</a>.
        </CookieConsent>

        <div className="end">
          { !hideTableOfContents && DocContent.toc && (
            <TOC
              toc={DocContent.toc}
              minHeadingLevel={tocMinHeadingLevel}
              maxHeadingLevel={tocMaxHeadingLevel}
              editUrl={editUrl}
              className={ThemeClassNames.docs.docTocDesktop}
            />
          )}
        </div>
      </div>
    </DocProvider>
  );
}
