import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const useZendesk = url => {
  const {siteConfig} = useDocusaurusContext();
  console.log(siteConfig.customFields)

  useEffect(() => {
    if(!siteConfig.customFields.ZENDESK_KEY) { return null }

    const script = document.createElement('script');

    console.log(siteConfig.customFields)

    script.setAttribute("id", "ze-snippet");
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${siteConfig.customFields.ZENDESK_KEY}`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default useZendesk;