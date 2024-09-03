import './imageText.css';
import { useNavigate } from 'react-router-dom';

type ImageTextProps = {
	imgsrc: string;
	heading: string;
	content: React.ReactNode;
	url: string;
	reverse?: boolean;
};

const ImageText: React.FC<ImageTextProps> = ({
	imgsrc,
	heading,
	content,
	url,
	reverse,
}) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/${url}`);
	};
	return (
		<section id='ImageText' className={reverse === true ? 'col' : 'col reverse'}>
			<div className={`image-wrapper ${reverse == true ? '' : 'reverse'}`}>
				<img src={imgsrc} alt='{Box image}' />
			</div>
			<div className='content-wrapper'>
				<h2>{heading}</h2>
				<div className='icon-box-divider' />
				<p className='icon-box-content'>{content}</p>
				<button
					className={
						reverse == true ? 'btn-outline' : 'btn-underline underline-reverse'
					}
					onClick={handleClick}
				>
					Więcej
				</button>
			</div>
		</section>
	);
};

export default ImageText;
