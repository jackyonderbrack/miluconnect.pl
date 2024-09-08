import React, { useState, useEffect, FC } from 'react';
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
	// Domyślnie ustawiamy 4 elementy widoczne
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleItemsCount, setVisibleItemsCount] = useState(4);

	let touchStartX: number = 0;
	let touchEndX: number = 0;

	// Funkcja do dynamicznego ustawiania liczby widocznych elementów w zależności od szerokości ekranu
	const updateVisibleItemsCount = () => {
		const screenWidth = window.innerWidth;

		if (screenWidth < 480) {
			setVisibleItemsCount(1); // 1 element na bardzo małych ekranach
		} else if (screenWidth < 768) {
			setVisibleItemsCount(2); // 2 elementy na małych ekranach
		} else if (screenWidth < 1024) {
			setVisibleItemsCount(3); // 3 elementy na tabletach
		} else {
			setVisibleItemsCount(4); // 4 elementy na dużych ekranach
		}
	};

	// Obsługa zmiany rozmiaru okna
	useEffect(() => {
		// Aktualizacja widocznych elementów przy montowaniu komponentu
		updateVisibleItemsCount();
		// Dodaj event listener do aktualizowania widocznych elementów przy zmianie rozmiaru okna
		window.addEventListener('resize', updateVisibleItemsCount);

		// Sprzątanie event listenera przy demontażu komponentu
		return () => window.removeEventListener('resize', updateVisibleItemsCount);
	}, []);

	// Automatyczne przewijanie co 5.5 sekundy
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

	// Obsługa dotyku:
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		touchStartX = e.touches[0].clientX;
	};
	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		touchEndX = e.touches[0].clientX;
	};
	const handleTouchEnd = () => {
		if (touchStartX - touchEndX > 50) {
			nextSlide();
		}
		if (touchStartX - touchEndX < -50) {
			prevSlide();
		}
	};

	return (
		<div
			className='slider'
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			onTouchMove={handleTouchMove}
		>
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
