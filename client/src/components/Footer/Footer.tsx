import "./footer.css";
import Logo from "../../assets/logo/miluconnect_logo_light_3.png";
import FacebookSocial from "../../assets/socials/facebook_icon_dark.png";
import FacebookSocialHover from "../../assets/socials/facebook_icon_dark_hover.png";
// import InstagramSocial from "../../assets/socials/instagram_icon_dark.png";
// import InstagramSocialHover from "../../assets/socials/instagram_icon_dark_hover.png";
import GithubSocial from "../../assets/socials/github_icon_dark.png";
import GithubSocialHover from "../../assets/socials/github_icon_dark_hover.png";

import { Link } from "react-router-dom";
import Button from "../Button/Button";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="background-top px-4">
      <section className="footerHeader grid grid-cols-4 justify-items-center align-items-center gap-2 px-4 py-2">
        <div className="footerHeaderCol">
          <Link
            to="/#"
            className="footerLogoContainer">
            <img
              src={Logo}
              alt="miluconnect"
              className="footerLogoImg"
            />
          </Link>
        </div>
        <div className="footerHeaderCol">
          <nav className="footerNav flex flex-col">
            <Link to="/">Strona główna</Link>
            <Link to="/rozwiazania">Rozwiązania</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>
        <div className="footerHeaderCol">
          <div className="social_icons">
            <div className="socialIconContainer">
            <a
                href="https://facebook.com/miluconnect"
                target="_blank">
              <img
                className="facebookSocialIcon"
                src={FacebookSocial}
                alt="Facebook social icon"
              />
              <img
                className="facebookSocialIconHover"
                src={FacebookSocialHover}
                alt="Facebook social icon hover"
              />
              </a>
            </div>

            {/* <div className="socialIconContainer">
              <img
                className="instagramSocialIcon"
                src={InstagramSocial}
                alt="Instagram social icon"
              />
              <img
                className="instagramSocialIconHover"
                src={InstagramSocialHover}
                alt="Instagram social icon"
              />
            </div> */}

            <div className="socialIconContainer">
              <a
                href="https://github.com/jackyonderbrack"
                target="_blank">
                <img
                  className="githubSocialIcon"
                  src={GithubSocial}
                  alt="Github social icon"
                />
                <img
                  className="githubSocialIconHover"
                  src={GithubSocialHover}
                  alt="Github social icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footerHeaderCol">
          <Button
            linkTo="/kontakt"
            buttonText="Skontaktuj się z nami"
            theme="btn-secondary"
          />
        </div>
      </section>
      <section className="footerBottom px-4">
        <PrivacyPolicy />
      </section>
    </footer>
  );
};

export default Footer;
