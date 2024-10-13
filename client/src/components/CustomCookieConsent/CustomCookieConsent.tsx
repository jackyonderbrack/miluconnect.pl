import React, { useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { logPageView } from '../../analytics/analytics';
import './CustomCookieConsent.css';

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
				analytics_storage: 'granted',
			});
		}
	};

	const handleDecline = () => {
		// Ustawienie trybu zgody Google
		if (typeof window.gtag === 'function') {
			window.gtag('consent', 'update', {
				analytics_storage: 'denied',
			});
		}
	};

	const loadGtag = () => {
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z45CNGHHXT';
		script.async = true;
		document.head.appendChild(script);

		script.onload = function () {
			window.dataLayer = window.dataLayer || [];
			window.gtag = function (...args: any[]) {
				window.dataLayer.push(args);
			};
			window.gtag('js', new Date());
			window.gtag('config', 'G-Z45CNGHHXT');
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
					analytics_storage: 'granted',
				});
			} else {
				window.gtag('consent', 'default', {
					analytics_storage: 'denied',
				});
			}
		}
	}, []);

	const rootStyles = getComputedStyle(document.documentElement);
	const primaryDarkColor = rootStyles.getPropertyValue('--color-accent-primary');
	const secondaryLightColor = rootStyles.getPropertyValue('--color-secondary');
	const lightColor = rootStyles.getPropertyValue('--color-secondary');

	return (
		<CookieConsent
			contentClasses='cookie-consent-main-wrapper'
			location='bottom'
			buttonText='Akceptuj'
			buttonClasses='btn-primary'
			declineButtonText='Odrzuć'
			declineButtonClasses='btn-outline'
			enableDeclineButton
			containerClasses='cookie-consent-options'
			onAccept={handleAccept}
			onDecline={handleDecline}
			cookieName='ga_cookie_consent'
			acceptOnScroll={true}
			style={{
				background: primaryDarkColor,
				color: lightColor,
				borderTopLeftRadius: '1.25rem',
				borderTopRightRadius: '1.25rem',
			}}
			buttonStyle={{
				background: secondaryLightColor,
				color: primaryDarkColor,
				borderRadius: '2rem',
				paddingLeft: '1rem',
				paddingRight: '1rem',
			}}
			declineButtonStyle={{
				color: lightColor,
				background: 'transparent',
			}}
		>
			<p>
				Używamy plików cookies w celu poprawy doświadczeń użytkowników.
				<br />
				<a
					href='/polityka-prywatnosci'
					style={{ color: secondaryLightColor }}
					className='privacy-policy-link'
				>
					Dowiedz się więcej
				</a>
			</p>
		</CookieConsent>
	);
};

export default CustomCookieConsent;
