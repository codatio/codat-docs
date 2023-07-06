import React from "react";
import Head from '@docusaurus/Head';

const SocialImages = ({imgSrc}) => {
  return <Head>
    <meta property="og:image" content={imgSrc}/>
    <meta data-rh="true" name="og:image" content={imgSrc}/>
    <meta data-rh="true" name="twitter:image" content={imgSrc}/>
  </Head>
}

export default SocialImages