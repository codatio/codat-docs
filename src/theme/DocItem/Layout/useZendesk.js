import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const useZendesk = () => {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    if (!siteConfig.customFields.ZENDESK_KEY) {
      return;
    }

    if (window.zE || document.getElementById('ze-snippet')) {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute("id", "ze-snippet");
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${siteConfig.customFields.ZENDESK_KEY}`;
    script.async = true;

    document.body.appendChild(script);
  }, [siteConfig.customFields.ZENDESK_KEY]);

  return;
};

export default useZendesk;
