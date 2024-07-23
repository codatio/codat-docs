import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent(props) {
  const {children} = props
  const syntheticTitle = useSyntheticTitle();

  const {
    metadata,
    frontMatter,
    toc,
  } = useDoc();

  const {
    image,
    keywords,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
    title,
    description,
    banner_title: bannerTitle,
    banner_image: bannerImg,
    banner_text: bannerText,
    banner_icon: bannerIcon,
    banner_class: bannerClass,
    video_url: videoUrl,
    video_text: videoText,
  } = frontMatter;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {/*title && !bannerTitle && <h1>{title}</h1>*/}
      {description && !bannerTitle && <p className="subtitle">{description}</p>}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
