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
import styles from './styles.module.css';

import PageHeader from '@components/global/PageHeader'
import Vote from './Vote';
import TOCCollapsible from '@theme/TOCCollapsible';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout(props) {
  const {children} = props;

  const docTOC = useDocTOC();
  const {
    metadata,
    frontMatter,
    toc,
    ...rest
  } = useDoc();

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

  return (
    <>
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
        {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
      </div>
    </>
  );
}
