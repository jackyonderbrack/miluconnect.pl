type ImageTextProps = {
  imgsrc: string;
  heading: string;
  content: React.ReactNode;
  reverse?: boolean;
  labels?: string[];
};

const ImageText: React.FC<ImageTextProps> = ({
  imgsrc,
  heading,
  content,
  reverse,
  labels,
}) => {
  return (
    <section
      id="ImageText"
      className={`flex flex-col md:flex-row md:items-stretch py-16 ${
        reverse ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="flex-1 flex justify-center items-center md:h-full">
        <img
          src={imgsrc}
          alt="Box image"
          className="object-contain max-h-48 md:max-h-64"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 md:h-full">
        <h2>{heading}</h2>
        {labels && (
          <div className="flex gap-2 flex-wrap">
            {labels.map((label, index) => (
              <div key={index} className="px-4 py-1 bg-gray-700 rounded-2xl">
                {label}
              </div>
            ))}
          </div>
        )}
        <div className="icon-box-content">{content}</div>
      </div>
    </section>
  );
};

export default ImageText;
