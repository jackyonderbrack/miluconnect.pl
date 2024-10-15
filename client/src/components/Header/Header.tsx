import { useRef, useEffect } from 'react';
import './header.css';
type HeaderProps = {
	content: React.ReactNode;
	imgUrl?: string;
	align: 'start' | 'center' | 'end';
};

const Header: React.FC<HeaderProps> = ({ imgUrl, content, align = 'left' }) => {
	const parallaxRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const speed = 0.6;
			const yPos = window.scrollY * speed;

			if (parallaxRef.current) {
				parallaxRef.current.style.transform = `translateY(${yPos}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section
			className={`header ${imgUrl ? '' : 'without-image'} justify-content-${align}`}
		>
			<div className='headerContent'>{content}</div>
			{imgUrl && (
				<img
					src={imgUrl}
					alt='MILU Connect Zdjęcie główne'
					ref={parallaxRef}
					className='headerPicture'
				/>
			)}
		</section>
	);
};

export default Header;
