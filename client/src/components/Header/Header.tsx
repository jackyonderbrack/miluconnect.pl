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
		<section className='flex flex-row justify-between items-center md:min-h-64 space-y-6 px-2'>
			<div>{content}</div>
			{imgUrl && (
				<div className='absolute top-12 md:top-0 md:right-0 aspect-[4/3] z-[-1] md:w-[61dvw]  [animation:var(--fade-in)]'>
					<img
						src={imgUrl}
						alt='MILU Connect Zdjęcie główne'
						ref={parallaxRef}
						className='object-cover opacity-61'
					/>
				</div>
			)}
		</section>
	);
};

export default Header;
