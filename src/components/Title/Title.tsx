import './title.css';

type TitleProps = {
  gradientHeader: string | null;
  leadHeader: string | null;
  leadParagraph: React.ReactNode | null;
};

const Title: React.FC<TitleProps> = ({
  gradientHeader,
  leadHeader,
  leadParagraph,
}) => {
  return (
    <div id="Title">
      {gradientHeader ? (
        <h1>
          <span className="text-gradient">{gradientHeader}</span>
        </h1>
      ) : (
        ''
      )}
      {leadHeader ? <h1>{leadHeader}</h1> : ''}
      <div className="divider" />
      {leadParagraph ? <span>{leadParagraph}</span> : ''}
    </div>
  );
};

export default Title;
