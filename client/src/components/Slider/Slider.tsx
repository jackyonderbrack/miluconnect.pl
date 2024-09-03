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
	const visibleItemsCount = 3; // Ilość widocznych elementów na raz

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % (items.length - visibleItemsCount + 1)
			);
		}, 5500); // Zmiana co 2 sekundy

		return () => clearInterval(interval); // Wyczyść interval po unmount
	}, [items.length]);

	return (
		<div className='slider'>
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
		</div>
	);
};

export default Slider;
