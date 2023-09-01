import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const useZendesk = url => {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    if(!siteConfig.customFields.ZENDESK_KEY || !!siteConfig.customFields.DEVELOPMENT) { return null }

    const script = document.createElement('script');

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