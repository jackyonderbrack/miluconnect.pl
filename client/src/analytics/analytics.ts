import ReactGA from 'react-ga4';

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
