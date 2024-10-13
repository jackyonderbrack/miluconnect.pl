import './imageText.css';

type ImageTextProps = {
	imgsrc: string;
	heading: string;
	content: React.ReactNode;
	reverse?: boolean;
};

const ImageText: React.FC<ImageTextProps> = ({
	imgsrc,
	heading,
	content,
	reverse,
}) => {

	return (
		<section id='ImageText' className={reverse === true ? 'col' : 'col reverse'}>
			<div className={`image-wrapper ${reverse == true ? '' : 'reverse'}`}>
				<img src={imgsrc} alt='{Box image}' />
			</div>
			<div className='content-wrapper'>
				<h2>{heading}</h2>
				<div className='icon-box-divider' />
				<p className='icon-box-content'>{content}</p>
			</div>
		</section>
	);
};

export default ImageText;
