import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SolutionsPage from './pages/SolutionsPage/SolutionsPage';
import { ScrollToTop } from './utils/ScrollToTop';
import TrackPageView from './components/GoogleAnalytics/TrackPageView';
import CustomCookieConsent from './components/CustomCookieConsent/CustomCookieConsent';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import ContactPageSent from './pages/ContactPage/ContactPageSent';
import { AccessProvider } from './contexts/AccessContext';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import NewsPage from './pages/NewsPage/NewsPage';
import Sidenav from './admin/components/Sidenav/Sidenav';
import Dashboard from './admin/pages/dashboard/Dashboard';
import Posts from './admin/pages/posts/Posts';
import Users from './admin/pages/users/Users';
import Settings from './admin/pages/settings/Settings';
import Reports from './admin/pages/reports/Reports';
import Form from './admin/components/Form/Form';
import PrivateRoute from './admin/components/PrivateRoute/PrivateRoute';
import Account from './admin/pages/account/Account';
import Login from './admin/pages/login/Login';
import BlogPage from './pages/BlogPage/BlogPage';

function ClientLayout() {
	const location = useLocation();

	useEffect(() => {
		ReactGA.send({
			hitType: 'pageview',
			page: location.pathname + location.search,
		});
	}, [location]);

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
			{ path: 'blog', element: <BlogPage />}
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
