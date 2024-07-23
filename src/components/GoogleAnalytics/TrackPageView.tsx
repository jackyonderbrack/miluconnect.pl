import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cookies } from 'react-cookie-consent';
import { logPageView } from '../../analytics/analytics';

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