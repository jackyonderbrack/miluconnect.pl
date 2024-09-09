import { useState, useEffect } from 'react';
import pricingData from './pricingConfig.json';
import './Pricing.css';
import H2 from '../H2/H2';

// Definiujemy interfejsy dla danych

interface PricingOption {
	value: string;
	label: string[] | string;
	price?: number;
	time?: number;
	title?: string;
}

interface PricingSection {
	id: string;
	label: string;
	type: string;
	options?: PricingOption[];
	optionsByCondition?: {
		[key: string]: PricingOption[];
	};
}

interface PricingData {
	sections: PricingSection[];
}

const pricingConfig: PricingData = pricingData;

const PricingForm = () => {
	const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
	const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
	const [selectedDetails, setSelectedDetails] = useState<string | null>(null);
	const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalTime, setTotalTime] = useState<number>(0);
	const [totalPriceMessage, setTotalPriceMessage] = useState<string | null>(
		null
	);
	const [showCalculateButton, setShowCalculateButton] = useState<boolean>(false);
	const [linkedExtras, setLinkedExtras] = useState<string[]>([]);

	// Resetowanie wyniku po zmianie
	const resetTotal = () => {
		setTotalPrice(0);
		setTotalTime(0);
		setTotalPriceMessage(null);
	};

	// Monitorowanie, czy wszystkie trzy sekcje są wypełnione, aby pokazać przycisk
	useEffect(() => {
		if (selectedProduct && selectedDesign && selectedDetails) {
			setShowCalculateButton(true);
		} else {
			setShowCalculateButton(false);
		}
	}, [selectedProduct, selectedDesign, selectedDetails]);

	const handleProductChange = (value: string) => {
		setSelectedProduct(value);
		setSelectedDesign(null);
		setSelectedDetails(null);
		setSelectedExtras([]);
		resetTotal(); // Resetowanie wyniku po zmianie w sekcji
	};

	const handleDesignChange = (value: string) => {
		setSelectedDesign(value);
		setSelectedDetails(null);
		setSelectedExtras([]);
		resetTotal(); // Resetowanie wyniku po zmianie w sekcji
	};

	const handleDetailsChange = (value: string) => {
		setSelectedDetails(value);
		resetTotal(); // Resetowanie wyniku po zmianie w sekcji
	};

	const handleExtrasChange = (value: string) => {
		setSelectedExtras((prevSelectedExtras) =>
			prevSelectedExtras.includes(value)
				? prevSelectedExtras.filter((extra) => extra !== value)
				: [...prevSelectedExtras, value]
		);
		resetTotal();

		if (linkedExtras.includes(value)) {
			setLinkedExtras(linkedExtras.filter((extra) => extra !== value));
		}
	};

	const handleMouseLeave = (value: string) => {
		// Dodaj klasę "linked" tylko, jeśli element jest aktywny
		if (selectedExtras.includes(value) && !linkedExtras.includes(value)) {
			setLinkedExtras([...linkedExtras, value]);
		}
	};

	const calculateTotal = () => {
		let price = 0;
		let time = 0;
		let hasIndividualCosts = false;

		// Obliczenia dla sekcji "product"
		if (selectedProduct) {
			const productOption = pricingConfig.sections
				.find((section) => section.id === 'product')
				?.options?.find((option) => option.value === selectedProduct);

			if (productOption) {
				price += productOption.price || 0;
				time += productOption.time || 0;
			}
		}

		// Obliczenia dla sekcji "design"
		if (selectedDesign) {
			const designOption = pricingConfig.sections
				.find((section) => section.id === 'design')
				?.options?.find((option) => option.value === selectedDesign);

			if (designOption) {
				price += designOption.price || 0;
				time += designOption.time || 0;
			}
		}

		// Obliczenia dla sekcji "details"
		if (selectedDetails && selectedProduct) {
			const detailsSection = pricingConfig.sections.find(
				(section) => section.id === 'details'
			);
			const optionsByCondition =
				detailsSection?.optionsByCondition?.[selectedProduct.toLowerCase()];
			const detailsOption = optionsByCondition?.find(
				(option) => option.value === selectedDetails
			);
			if (detailsOption) {
				price += detailsOption.price || 0;
				time += detailsOption.time || 0;
			}
		}

		// Obliczenia dla sekcji "extras"
		if (selectedExtras.length > 0 && selectedProduct) {
			const extrasSection = pricingConfig.sections.find(
				(section) => section.id === 'extras'
			);
			const optionsByCondition =
				extrasSection?.optionsByCondition?.[selectedProduct.toLowerCase()];
			selectedExtras.forEach((extra) => {
				const extraOption = optionsByCondition?.find(
					(option) => option.value === extra
				);
				if (extraOption) {
					if (typeof extraOption.price !== 'undefined') {
						price += extraOption.price;
						time += extraOption.time || 0;
					} else {
						hasIndividualCosts = true;
					}
				}
			});
		}

		setTotalPrice(price);
		setTotalTime(time);

		// Dodaj komunikat o kosztach indywidualnych, jeśli takie występują
		if (hasIndividualCosts) {
			setTotalPriceMessage('+ koszty indywidualne');
		}
	};

	return (
		<section id='PricingForm' className='container py-2 px-4'>
			<H2 styleType='primary'>Konfigurator projektu</H2>
			<p>
				Wybierz odpowiednie pola aby poznać szacunkową cenę oraz termin realizacji
			</p>

			{/* Sekcja "product" */}
			<div>
				{pricingConfig.sections
					.filter((section) => section.id === 'product')
					.map((section) => (
						<div key={section.id} className='row'>
							<h3>{section.label}</h3>
							<div className='col'>
								{section.options?.map((option) => (
									<label
										key={option.value}
										className={`radio-button ${selectedProduct === option.value ? 'active' : ''}`}
									>
										<input
											type='radio'
											name={section.id}
											value={option.value}
											checked={selectedProduct === option.value}
											onChange={() => handleProductChange(option.value)}
										/>
										<span>{option.label}</span>
									</label>
								))}
							</div>
						</div>
					))}
			</div>

			{/* Sekcja "design" */}
			{selectedProduct && (
				<div>
					{pricingConfig.sections
						.filter((section) => section.id === 'design')
						.map((section) => (
							<div key={section.id} className='row'>
								<h3>{section.label}</h3>
								<div className='col'>
									{section.options?.map((option) => (
										<label
											key={option.value}
											className={`radio-button ${selectedDesign === option.value ? 'active' : ''}`}
										>
											<input
												type='radio'
												name={section.id}
												value={option.value}
												checked={selectedDesign === option.value}
												onChange={() => handleDesignChange(option.value)}
											/>
											<span>{option.label}</span>
										</label>
									))}
								</div>
							</div>
						))}
				</div>
			)}

			{/* Sekcja "details" */}
			{selectedDesign && selectedProduct && (
				<div>
					{pricingConfig.sections
						.filter((section) => section.id === 'details')
						.map((section) => {
							const optionsByCondition =
								section.optionsByCondition?.[selectedProduct.toLowerCase()];
							if (!optionsByCondition) {
								return null;
							}

							return (
								<div key={section.id} className='row details-section'>
									<h3>{section.label}</h3>
									<div className='col'>
										{optionsByCondition.map((option) => (
											<label
												key={option.value}
												className={`radio-button ${selectedDetails === option.value ? 'active' : ''}`}
											>
												<input
													type='radio'
													name={section.id}
													value={option.value}
													checked={selectedDetails === option.value}
													onChange={() => handleDetailsChange(option.value)}
												/>
												<span>{option.title}</span>
												<ul>
													{Array.isArray(option.label) &&
														option.label.map((labelItem, index) => (
															<li key={index}>{labelItem}</li>
														))}
												</ul>
											</label>
										))}
									</div>
								</div>
							);
						})}
				</div>
			)}

			{/* Sekcja "extras" */}
			{selectedDetails && selectedProduct && (
				<div>
					{pricingConfig.sections
						.filter((section) => section.id === 'extras')
						.map((section) => {
							const optionsByCondition =
								section.optionsByCondition?.[selectedProduct.toLowerCase()];
							if (!optionsByCondition) {
								return null;
							}

							return (
								<div key={section.id} className='row'>
									<h3>{section.label}</h3>
									<div className='col'>
										{optionsByCondition.map((option) => (
											<label
												key={option.value}
												className={`checkbox-button 
											${selectedExtras.includes(option.value) ? 'active' : ''}
											${linkedExtras.includes(option.value) ? 'linked' : ''}`}
												onClick={() => handleExtrasChange(option.value)}
												onMouseLeave={() => handleMouseLeave(option.value)}
											>
												<input
													type='checkbox'
													name={section.id}
													value={option.value}
													checked={selectedExtras.includes(option.value)}
													onChange={() => handleExtrasChange(option.value)}
												/>
												<span>
													{Array.isArray(option.label)
														? option.label.join(', ')
														: option.label}
												</span>
											</label>
										))}
									</div>
								</div>
							);
						})}
				</div>
			)}

			{/* Przycisk "Oblicz" */}
			{showCalculateButton && (
				<button onClick={calculateTotal} className='btn-outline'>
					Oblicz cenę i czas
				</button>
			)}

			{/* Wynik */}
			{totalPrice > 0 && (
				<div className='result'>
					<p>
						Szacowana cena:{' '}
						<span className='total-price'>
							{totalPrice} PLN brutto {totalPriceMessage && totalPriceMessage}
						</span>
					</p>
					<p>
						Szacowany czas realizacji:{' '}
						<span className='total-time'>{Math.ceil(totalTime / 15)} tygodni</span>
					</p>
				</div>
			)}
		</section>
	);
};

export default PricingForm;
