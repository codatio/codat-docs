import { useEffect } from 'react';

const useZendesk = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.setAttribute("id", "ze-snippet");
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${process.env.ZENDESK_KEY}`;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default useZendesk;