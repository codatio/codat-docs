import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const useZendesk = () => {
  const { siteConfig } = useDocusaurusContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!siteConfig.customFields.ZENDESK_KEY || siteConfig.customFields.DEVELOPMENT) {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute("id", "ze-snippet");
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${siteConfig.customFields.ZENDESK_KEY}`;
    script.async = true;
    script.onload = () => setIsLoaded(true);

    document.body.appendChild(script);

    return () => {
      // Check if the widget provides a specific cleanup function and call it here
      if (window.zE) {
        window.zE('webWidget', 'hide'); // Example cleanup call, replace with actual if different
      }
      document.body.removeChild(script);
      setIsLoaded(false);
    }
  }, [siteConfig.customFields.ZENDESK_KEY, siteConfig.customFields.DEVELOPMENT]);

  return isLoaded;
};

export default useZendesk;
