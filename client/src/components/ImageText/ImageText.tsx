import './imageText.css';

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
	labels
}) => {

	return (
		<section id='ImageText' className={reverse === true ? 'col' : 'col reverse'}>
			<div className={`image-wrapper ${reverse == true ? '' : 'reverse'}`}>
				<img src={imgsrc} alt='{Box image}' />
			</div>
			<div className='content-wrapper'>
				<h2>{heading}</h2>
				<div className='labels'>
					{labels?.map((label) => (
						<div className='label'>{label}</div>
					))}
				</div>
				<div className='icon-box-content'>{content}</div>
				
			</div>
			
		</section>
	);
};

export default ImageText;
