import React from 'react';

import clsx from 'clsx';

import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Unlisted from '@theme/Unlisted';

import TOC from '@theme/TOC';

import styles from './styles.module.css';

import PageHeader from '@components/PageHeader'
import Vote from './Vote';

import CookieConsent from "react-cookie-consent";

import useZendesk from './useZendesk';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, metadata, toc} = useDoc();

  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile editUrl={metadata.editUrl}/> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop editUrl={metadata.editUrl}/>
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout(props) {
  const {children} = props;

  const {
    metadata,
    frontMatter,
    toc,
    ...rest
  } = useDoc();

  const docTOC = useDocTOC();

  const {
    image,
    keywords,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    banner_title: bannerTitle,
    banner_image: bannerImg,
    banner_text: bannerText,
    banner_icon: bannerIcon,
    banner_class: bannerClass,
    video_url: videoUrl,
    video_text: videoText,
  } = frontMatter;

  const {description, title} = metadata;

  const canRenderTOC =
    !hideTableOfContents && toc?.length > 0;

  useZendesk();

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieConsent3"
        style={{ background: "#556680" }}
        buttonStyle={{ backgroundColor: "white", fontSize: "12px", borderRadius: "4px" }}
      >
        This website uses cookies to enhance your experience.
      </CookieConsent>

      {
        bannerTitle
        &&
        <PageHeader
          className={bannerClass}
          title={bannerTitle}
          img={bannerImg}
          text={bannerText}
          icon={bannerIcon}
          videoUrl={videoUrl}
          videoText={videoText}
        />
      }

      <div className={clsx('row', styles.docItemRow)}>
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          {metadata.unlisted && <Unlisted />}
          <DocVersionBanner />
          <div className={styles.docItemContainer}>
            <article>
              {/*}
                {canRenderTOC && (
                  <TOCCollapsible
                    toc={toc}
                    minHeadingLevel={tocMinHeadingLevel}
                    maxHeadingLevel={tocMaxHeadingLevel}
                    className={clsx(
                      //ThemeClassNames.docs.docTocMobile,
                      styles.tocMobile,
                    )}
                  />
                )}*/
              }

              {docTOC.mobile}

              {/*<div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>*/}
              <div className={clsx('markdown')}>
                <DocItemContent>{children}</DocItemContent>
              </div>

              { canRenderTOC &&
                <Vote props={props} page={title}/>
              }
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {docTOC.desktop && <div className={styles.tocWrapper}>{docTOC.desktop}</div>}
      </div>
    </>
  );
}
