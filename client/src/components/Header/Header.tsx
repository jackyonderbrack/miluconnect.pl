import { useRef, useEffect } from 'react';

type HeaderProps = {
	content: React.ReactNode;
	imgUrl?: string;
	className?: string;
};

const Header: React.FC<HeaderProps> = ({ imgUrl, content }) => {
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
		<section className='flex flex-row justify-between'>
			<div className='flex-1'>{content}</div>
			{imgUrl && (
				<img
					src={imgUrl}
					alt='MILU Connect Zdjęcie główne'
					ref={parallaxRef}
					className='flex-2 z-[-1] mt-[-20rem] opacity-36 [animation:var(--fade-in)]'
				/>
			)}
		</section>
	);
};

export default Header;
