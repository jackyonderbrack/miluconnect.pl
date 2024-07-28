import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import { ScrollToTop } from "./utils/ScrollToTop";
// import AniTransition from "./utils/AniTransition/AniTransition";
import TrackPageView from "./components/GoogleAnalytics/TrackPageView";
import CustomCookieConsent from "./components/CustomCookieConsent/CustomCookieConsent";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ContactPageSent from "./pages/ContactPage/ContactPageSent";
import { AccessProvider } from "./contexts/AccessContext";
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      
      <Navigation />
      {/* <AniTransition> */}
      <ScrollToTop />
        <Outlet />
      {/* </AniTransition> */}
      <Footer />
      <TrackPageView />
      <CustomCookieConsent />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rozwiazania", element: <SolutionsPage /> },
      { path: "kontakt", element: <ContactPage /> },
      { path: "wyslano", element: <ContactPageSent /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "polityka-prywatnosci", element: <PrivacyPolicyPage /> },
    ],
  },
]);

function App() {
  return (
    <div id="App">
      <AccessProvider>
        <RouterProvider router={router} />
      </AccessProvider>
    </div>
  );
}

export default App;
