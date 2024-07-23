// src/components/CookieConsent/CookieConsent.tsx
import React, { useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { logPageView } from '../../analytics/analytics';

const CustomCookieConsent: React.FC = () => {
  const handleAccept = () => {
    // Ustawienie ciasteczka zgody na pliki cookie
    Cookies.set('ga_cookie_consent', 'true', { expires: 365 });
    // Załaduj Google Analytics
    loadGtag();
    // Wywołanie funkcji śledzenia strony
    logPageView();

    // Ustawienie trybu zgody Google
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    // Ustawienie trybu zgody Google
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  const loadGtag = () => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-18TG3P482S";
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(...args: any[]) { window.dataLayer.push(args); };
      window.gtag('js', new Date());
      window.gtag('config', 'G-18TG3P482S');
    };
  };

  useEffect(() => {
    if (Cookies.get('ga_cookie_consent') === 'true') {
      loadGtag();
    }
  }, []);

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      if (Cookies.get('ga_cookie_consent') === 'true') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      } else {
        window.gtag('consent', 'default', {
          'analytics_storage': 'denied'
        });
      }
    }
  }, []);

  const rootStyles = getComputedStyle(document.documentElement);
  const primaryDarkColor = rootStyles.getPropertyValue('--primary-dark-color');
  const secondaryLightColor = rootStyles.getPropertyValue('--secondary-light-color');
  const lightColor = rootStyles.getPropertyValue('--light-color');

  return (
    <CookieConsent
      location="bottom"
      buttonText="Tylko niezbędne"
      declineButtonText="Odrzuć"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="ga_cookie_consent"
      style={{ background: primaryDarkColor, color: lightColor, borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem", boxShadow: "0 -1px 24px #00000084" }}
      buttonStyle={{ background: secondaryLightColor, color: primaryDarkColor, fontSize: "18px", borderRadius: "2rem", paddingLeft: "1rem", paddingRight: "1rem" }}
      declineButtonStyle={{ color: lightColor, background: "transparent", fontSize: "18px" }}
    >
      Używamy plików cookies w celu poprawy doświadczeń użytkowników.{" "}
      <a href="/polityka-prywatnosci" style={{ color: secondaryLightColor }}>
        Dowiedz się więcej
      </a>
    </CookieConsent>
  );
};

export default CustomCookieConsent;
