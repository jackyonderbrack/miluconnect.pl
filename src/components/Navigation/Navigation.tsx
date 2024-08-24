import { Link } from "react-router-dom";
import Logo from "../../assets/logo/miluconnect-f5b642-transparent.png";
import "./Navigation.css";
import NavIcon from "../../assets/icon-menu-miluconnect.png";
import CloseIcon from "../../assets/icon-close-miluconnect.png";
import { useEffect, useRef, useState } from "react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const navigation = navigationRef.current;
    if (navigation) {
      if (isMenuOpen) {
        navigation.classList.add("navigation-active");
        navigation.classList.remove("navigation-hidden");
      } else {
        navigation.classList.add("navigation-hidden");
        setTimeout(() => {
          navigation.classList.remove("navigation-active");
          navigation.classList.remove("navigation-hidden");
        }, 300);
      }
    }
  }, [isMenuOpen]);

  const toggleMobileNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`overlay ${isMenuOpen ? "active" : ""}`}></div>
      <div id="Navigation">
        <div id="NavigationHeader">
          <Link
            to="/#"
            className="mainLogoContainer">
            <img
              src={Logo}
              alt="Logo miluConnect"
              className="mainLogoImg"
            />
            <div className="mainLogoText">
              <p>
                <span>m</span><span>ilu</span>
              </p>
              <p>CONNECT</p>
             
            </div>
          </Link>
        </div>
        <div
          ref={navigationRef}
          className="main-navigation-links">
          <Link
            to="/"
            onClick={toggleMobileNav}>
            Strona główna
          </Link>
          <Link
            to="/rozwiazania"
            onClick={toggleMobileNav}>
            Rozwiązania
          </Link>
          <Link
            to="/nowosci"
            onClick={toggleMobileNav}>
            Nowości
          </Link>
          <Link
            to="/kontakt"
            onClick={toggleMobileNav}>
            Kontakt
          </Link>
        </div>
        <div className="mobileNav">
          <img
            src={!isMenuOpen ? NavIcon : CloseIcon}
            alt="NavIcon"
            className="nav-mobile-icon"
            onClick={toggleMobileNav}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
