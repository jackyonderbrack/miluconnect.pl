import './imageTextSpecial.css';

type ImageTextSpecialProps = {
  imgsrc: string[];
  heading: string;
  content: React.ReactNode;
  labels?: string[];
};

const ImageTextSpecial: React.FC<ImageTextSpecialProps> = ({
  imgsrc,
  heading,
  content,
  labels,
}) => {
  return (
    <section id="ImageTextSpecial">
      <div className="content-wrapper">
        <h2>{heading}</h2>
        <div className="labels">
          {labels?.map((label, index) => (
            <div className="label" key={index}>
              {label}
            </div>
          ))}
        </div>
        <div className="icon-box-content">{content}</div>
      </div>
      <div className="image-wrapper">
        <div className="slider-track">
          {imgsrc.map((img, index) => (
            <div className="slider-item" key={index}>
              <img src={img} alt="Slider image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSpecial;
