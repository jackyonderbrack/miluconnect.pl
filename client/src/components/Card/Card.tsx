import './Card.css';
type CardProps = {
  title?: string;
  description?: React.ReactNode;
  imageUrl: string;
  buttonLink: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonLink,
}) => {
  return (
    <a href={buttonLink} className="card-link" target='_blank'>
      <div className="card">
        <div className="card-image-wrapper">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
