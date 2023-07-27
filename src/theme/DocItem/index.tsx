/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import DocPaginator from '@theme/DocPaginator';
import type {Props} from '@theme/DocItem';
import TOC from '@theme/TOC';
import TOCCollapsible from '@theme/TOCCollapsible';

import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';

import PageHeader from '@components/global/PageHeader'
import Vote from './Vote';

import clsx from 'clsx';
import styles from './styles.module.css';

import useZendesk from './useZendesk';

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
    banner_title: bannerTitle,
    banner_image: bannerImg,
    banner_text: bannerText,
    banner_icon: bannerIcon,
    banner_class: bannerClass,
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

      {
        bannerTitle
        &&
        <PageHeader
          className={bannerClass}
          title={bannerTitle}
          img={bannerImg}
          text={bannerText}
          icon={bannerIcon}
        />
      }

      <div className={clsx('row', styles.docItemRow)}>
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

              { canRenderTOC &&
                <Vote props={props} page={props.route.path}/>
              }

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
