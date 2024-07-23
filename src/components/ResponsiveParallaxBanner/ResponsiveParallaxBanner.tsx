import { Parallax } from "react-parallax";
import "./responsiveParallaxBanner.css";

type ResponsiveParallaxBannerProps = {
  text: React.ReactNode;
  imageUrl: string;
  image2Url: string;
  backgroundUrl: string;
  imgPosition: "left" | "right";
};

const ResponsiveParallaxBanner: React.FC<ResponsiveParallaxBannerProps> = ({ text, imageUrl, image2Url, backgroundUrl, imgPosition }) => {
  return (
    <Parallax
      bgImage={backgroundUrl}
      strength={500}
      className="parallax-wrapper">
      <div className={imgPosition === "left" ? "banner-container-reverse" : "banner-container"}>
        <div className="text-box">{text}</div>
        <div className="image-box">
          <div className="imageContainerFirst">
            <img
              src={imageUrl}
              alt="Banner"
              className="firstPicture"
            />
            <div className="firstOverlay"></div>
          </div>
          <div className="imageContainerSecond">
            <img
              src={image2Url}
              alt="Banner"
              className="secondPicture"
            />
            <div className="secondOverlay"></div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ResponsiveParallaxBanner;
