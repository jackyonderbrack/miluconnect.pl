import { useState, useEffect, FC } from 'react';
import './slider.css';

// Interfejs dla pojedynczego elementu slidera
interface SliderItem {
	title: string;
	description: string;
	buttonLink: string;
	imageUrl: string;
}

// Interfejs dla propsów komponentu Slider
interface SliderProps {
	items: SliderItem[];
}

const Slider: FC<SliderProps> = ({ items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const visibleItemsCount = 4;

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5500);

		return () => clearInterval(interval);
	}, [currentIndex, items.length]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === items.length - visibleItemsCount ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? items.length - visibleItemsCount : prevIndex - 1
		);
	};

	const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
		if (e.deltaY < 0) {
			prevSlide();
		} else {
			nextSlide();
		}
	};

	return (
		<div className='slider' onWheel={handleScroll}>
			<button className='slider-btn prev' onClick={prevSlide}>
				←
			</button>
			<div
				className='slider-track'
				style={{
					transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
				}}
			>
				{items.map((item, index) => (
					<a
						href={item.buttonLink}
						className='slider-item'
						target='_blank'
						key={index}
					>
						<div className='slider-card'>
							<div className='slider-card-image-wrapper'>
								<img
									src={item.imageUrl}
									alt={item.title}
									className='slider-card-image'
								/>
							</div>
							<div className='slider-card-content'>
								<h3 className='slider-card-title'>{item.title}</h3>
								<p className='slider-card-description'>{item.description}</p>
							</div>
						</div>
					</a>
				))}
			</div>
			<button className='slider-btn next' onClick={nextSlide}>
				→
			</button>
		</div>
	);
};

export default Slider;
