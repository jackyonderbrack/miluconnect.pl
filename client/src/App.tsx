import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import Form from './admin/components/Form/Form';
import PrivateRoute from './admin/components/PrivateRoute/PrivateRoute';
import Sidenav from './admin/components/Sidenav/Sidenav';
import Account from './admin/pages/account/Account';
import Dashboard from './admin/pages/dashboard/Dashboard';
import Login from './admin/pages/login/Login';
import Posts from './admin/pages/posts/Posts';
import Reports from './admin/pages/reports/Reports';
import Settings from './admin/pages/settings/Settings';
import Users from './admin/pages/users/Users';
import './App.css';
import CustomCookieConsent from './components/CustomCookieConsent/CustomCookieConsent';
import Footer from './components/Footer/Footer';
import TrackPageView from './components/GoogleAnalytics/TrackPageView';
import Navigation from './components/Navigation/Navigation';
import { AccessProvider } from './contexts/AccessContext';
import BlogPage from './pages/blog/BlogPage';
import ContactPage from './pages/contact/ContactPage';
import ContactPageSent from './pages/contact/ContactPageSent';
import HomePage from './pages/home/Home';
import NewsPage from './pages/news/NewsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import DomainsAndHosting from './pages/offer/DomainsAndHosting';
import Ecommerce from './pages/offer/Ecommerce';
import GraphicDesign from './pages/offer/GraphicDesign';
import MobileApps from './pages/offer/MobileApps';
import SeoAndGoogleAds from './pages/offer/SeoAndGoogleAds';
import Websites from './pages/offer/Websites';
import PrivacyPolicyPage from './pages/privactPolicy/PrivacyPolicyPage';
import SolutionsPage from './pages/solutions/SolutionsPage';

function ClientLayout() {
	const location = useLocation();

	useEffect(() => {
		ReactGA.send({
			hitType: 'pageview',
			page: location.pathname + location.search,
		});
	}, [location]);


	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo({
			top: 0,
			left: 0,
			});
		}, [location]);

		return null;
	};

	return (
		<div id='Client'>
			<Navigation />
			<div className='client-outlet'>
				<ScrollToTop />
				<Outlet />
				<Footer />
				<TrackPageView />
				<CustomCookieConsent />
			</div>
		</div>
	);
}

function AdminLayout() {
	return (
		<div id='AdminPanel'>
			<Sidenav />
			<div className='admin-outlet'>
				<Outlet />
			</div>
		</div>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <ClientLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'rozwiazania', element: <SolutionsPage /> },
			{ path: 'kontakt', element: <ContactPage /> },
			{ path: 'wyslano', element: <ContactPageSent /> },
			{ path: 'polityka-prywatnosci', element: <PrivacyPolicyPage /> },
			{ path: 'nowosci', element: <NewsPage /> },
			{ path: 'blog', element: <BlogPage />},
			{ path: 'strony-internetowe', element: <Websites />},
			{ path: 'ecommerce', element: <Ecommerce />},
			{ path: 'seo-i-google-ads', element: <SeoAndGoogleAds />},
			{ path: 'projektowanie-graficzne', element: <GraphicDesign />},
			{ path: 'domeny-i-hosting', element: <DomainsAndHosting />},
			{ path: 'aplikacje-mobilne', element: <MobileApps />},
		],
	},
	{
		path: '/admin-login',
		element: <Login />,
	},
	{
		path: '/admin-panel',
		element: <PrivateRoute />,
		children: [
			{
				element: <AdminLayout />,
				children: [
					{ index: true, element: <Dashboard /> },
					{ path: 'posts', element: <Posts /> },
					{ path: 'users', element: <Users /> },
					{ path: 'reports', element: <Reports /> },
					{ path: 'settings', element: <Settings /> },
					{ path: 'account', element: <Account /> },
					{ path: ':type/new', element: <Form /> },
				],
			},
		],
	},
	{ path: '*', element: <NotFoundPage /> },
]);

function App() {
	return (
		<div id='App'>
			<AccessProvider>
				<RouterProvider router={router} />
			</AccessProvider>
		</div>
	);
}

export default App;
