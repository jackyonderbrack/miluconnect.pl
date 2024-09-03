import { useState } from "react";
import "./imageBox.css";
type ImageBoxProps = {
  imgsrc: string;
  heading: string;
  content: React.ReactNode;
};

const ImageBox: React.FC<ImageBoxProps> = ({ imgsrc, heading, content }) => {
  const [isActive, setIsActive] = useState(false)

  const handleShow = () => {
    setIsActive(!isActive)
  }
  return (
    <div id="ImageBox">
      <img
        src={imgsrc}
        alt="Box image"
      />
      <div className="box_image_heading">
        <h3>{heading}</h3>
      </div>
      <div className="icon-box-divider" />
      <div className={`icon-box-content ${isActive ? "active" : ""}`}>{content}</div>
      <div className="handleShowButton" onClick={handleShow}>
        {isActive ? "Zwiń" : "Rozwiń"}
      </div>
    </div>
  );
};

export default ImageBox;
