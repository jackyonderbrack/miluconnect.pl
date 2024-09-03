export const logPageView = () => {
    window.gtag('config', 'G-Z45CNGHHXT', {
      page_path: window.location.pathname,
    });
  };