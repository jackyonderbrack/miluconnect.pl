// src/components/GoogleAnalytics/TrackPageView.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cookies } from 'react-cookie-consent';

const logPageView = () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
    });
  }
};

const TrackPageView: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (Cookies.get('ga_cookie_consent') === 'true') {
      logPageView();
    }
  }, [location]);

  return null;
};

export default TrackPageView;
