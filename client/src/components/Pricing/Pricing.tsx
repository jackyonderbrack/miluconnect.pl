import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pricingData from './pricingConfig.json';
import './Pricing.css';
import H2 from '../H2/H2';
import Button from '../Button/Button';
import { HiOutlineCalculator } from 'react-icons/hi';
import ReactGA from 'react-ga4';

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
	const navigate = useNavigate()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [totalPriceMessage, setTotalPriceMessage] = useState<string | null>(null);
  const [showCalculateButton, setShowCalculateButton] = useState<boolean>(false);
  const [linkedExtras, setLinkedExtras] = useState<string[]>([]);

  const location = useLocation();

  // Reset formularza przy zmianie ścieżki
  useEffect(() => {
    setSelectedProduct(null);
    setSelectedDesign(null);
    setSelectedDetails(null);
    setSelectedExtras([]);
    resetTotal();
  }, [location.pathname]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
	try {
		e.preventDefault();
   	 	ReactGA.event({
			category: "Formularz",
			action: "Wysłano formularz 'Poproś o ofertę'",
			label: "Oferta",
		});
		navigate('/kontakt'); 
	} catch (error) {
		console.log('Błąd podczas submitowania formularza')
	} 
  };

  const resetTotal = () => {
    setTotalPrice(0);
    setTotalTime(0);
    setTotalPriceMessage(null);
  };

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
    resetTotal();
  };

  const handleDesignChange = (value: string) => {
    setSelectedDesign(value);
    setSelectedDetails(null);
    setSelectedExtras([]);
    resetTotal();
  };

  const handleDetailsChange = (value: string) => {
    setSelectedDetails(value);
    resetTotal();
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
    if (selectedExtras.includes(value) && !linkedExtras.includes(value)) {
      setLinkedExtras([...linkedExtras, value]);
    }
  };

  const calculateTotal = () => {
    let price = 0;
    let time = 0;
    let hasIndividualCosts = false;

    if (selectedProduct) {
      const productOption = pricingConfig.sections
        .find((section) => section.id === 'product')
        ?.options?.find((option) => option.value === selectedProduct);

      if (productOption) {
        price += productOption.price || 0;
        time += productOption.time || 0;
      }
    }

    if (selectedDesign) {
      const designOption = pricingConfig.sections
        .find((section) => section.id === 'design')
        ?.options?.find((option) => option.value === selectedDesign);

      if (designOption) {
        price += designOption.price || 0;
        time += designOption.time || 0;
      }
    }

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

    if (hasIndividualCosts) {
      setTotalPriceMessage('+ koszty indywidualne');
    }
  };

  return (
    <form 
      id='PricingForm'
      className='p-4 lg:px-8'
      onSubmit={handleSubmitForm} 
      // Jeśli chcesz, żeby GTM widział form submission bez reloadu,
      // w trigerze "Form Submission" włącz "Enable overridden form submissions".
    >
      <H2 styleType='primary'>Konfigurator projektu i wyceny</H2>
      <p>
        Wyceń swój projekt - <span className='text-[var(--gradient-light-color-mid)]'>kompletnie za darmo.</span>
      </p>
      <p>
        Zaznacz odpowiednie pola aby poznać szacunkową cenę oraz termin realizacji
      </p>

      {/* Section "Product" */}
      <div>
        {pricingConfig.sections
          .filter((section) => section.id === 'product')
          .map((section) => (
            <div key={section.id}>
              <p className='font-bold! text-2xl! my-6'>{section.label}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-2'>
                {section.options?.map((option) => (
                  <label
                    key={option.value}
                    className={`border-radius radio-button ${selectedProduct === option.value ? 'active' : ''}`}
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

      {/* Section "Design" */}
      {selectedProduct && (
        <div>
          {pricingConfig.sections
            .filter((section) => section.id === 'design')
            .map((section) => (
              <div key={section.id}>
                <p className='font-bold! text-2xl! my-6'>{section.label}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-2'>
                  {section.options?.map((option) => (
                    <label
                      key={option.value}
                      className={`border-radius radio-button ${selectedDesign === option.value ? 'active' : ''}`}
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

      {/* Section "Details" */}
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
                <div key={section.id} className='details-section'>
                  <p className='font-bold! text-2xl! my-6'>{section.label}</p>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-2'>
                    {optionsByCondition.map((option) => (
                      <label
                        key={option.value}
                        className={`border-radius radio-button ${selectedDetails === option.value ? 'active' : ''}`}
                      >
                        <input
                          type='radio'
                          name={section.id}
                          value={option.value}
                          checked={selectedDetails === option.value}
                          onChange={() => handleDetailsChange(option.value)}
                        />
                        <span>{option.title}</span>
                        <ul className='mt-3'>
                          <div role='spacer'></div>
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

      {/* Section "Extras" */}
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
                <div key={section.id}>
                  <p className='font-bold! text-2xl! my-6'>{section.label}</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {optionsByCondition.map((option) => (
                      <label
                        key={option.value}
                        className={`checkbox-button ${selectedExtras.includes(option.value) ? 'active' : ''} ${linkedExtras.includes(option.value) ? 'linked' : ''}`}
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

      {/* Button "Oblicz cenę i czas" */}
      {showCalculateButton && (
        <div className='my-8 place-items-center md:place-items-start'>
          <button 
            type='button'
            onClick={calculateTotal} 
            className='btn-outline flex! items-center gap-4'
          >
            <HiOutlineCalculator size={36} />
            Oblicz cenę i czas
          </button>
        </div>
      )}

      {/* Result "Poproś o ofertę" */}
      {totalPrice > 0 && (
        <div className='result my-8'>
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>

            <button 
              type='submit' 
              className='btn-outline'
            >
              Poproś o ofertę
            </button>

            <Button
              linkTo='/rozwiazania'
              buttonText='Więcej o nas'
              theme='btn-primary'
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default PricingForm;
