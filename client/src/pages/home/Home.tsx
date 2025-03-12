
// Banners
import EarthImg from '../../assets/background-earth-01-miluconnect.webp';

// Components
import { HiArrowCircleDown } from 'react-icons/hi';
import BouncingButton from '../../components/BouncingButton/BouncingButton';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';
import H2 from '../../components/H2/H2';
import Header from '../../components/Header/Header';
import ImageText from '../../components/ImageText/ImageText';
import ImageTextSpecial from '../../components/ImageTextSpecial/ImageTextSpecial';
import MetaTags from '../../components/MetaTags/MetaTags';
import Slider from '../../components/Slider/Slider';
import Typewriter from '../../components/TypeWriter/TypeWriter';
import { _clientsContents, _homeContents_ImageBox_1, _homeContents_ImageBox_2, _homeContents_ImageBox_Profelio, _integrationsContents, _portfolio_items, _technologyContents, offer_boxes } from '../../consts/home.consts';

const HomePage = () => {
	return (
		<>
			<MetaTags
				title='MILU Connect'
				description='Tworzenie stron internetowych, sklepów e-commerce i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
			/>
			<Header
				content={
					<div className='flex flex-col space-y-12 justify-center'>
						<Typewriter 
							text={`# Tworzymy # Modernizujemy # Utrzymujemy`} 
							speed={100}
							className='h-12'
						/>

						<h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
							&gt; szybki <span className="whitespace-nowrap">e-commerce</span>
							<br />
							&gt; czy stylowa <span className='text-gradient'>strona internetowa?</span>
							<br />
						</h1>

						<div className='flex gap-4'>
							<Button
								linkTo='#cennik'
								buttonText='Cennik'
								theme='btn-primary'
								targetId='PricingForm'
								offset={140}
							/>
							<Button
								linkTo='#'
								buttonText='Realizacje'
								theme='btn-underline'
								targetId='realizacje'
								offset={140}
							/>
						</div>
						
						<p>
							Szybka, <i><strong>darmowa wycena </strong></i><span className='whitespace-nowrap'>i prosty kontakt online. </span> <br /> Jeśli wolisz się spotkać <span className='whitespace-nowrap'>- <a href='/kontakt'>Skontaktuj się</a></span>
						</p>
						
						<BouncingButton targetId='OfferBoxes'>
							<HiArrowCircleDown size={32}  />
							Oferta
						</BouncingButton>
					</div>
				}
				imgUrl={EarthImg}
			/>
			<div id='OfferBoxes' className='grid grid-cols-1 md:grid-cols-2 w-full'>
				{offer_boxes.map((box) => (
					<Box title={box.title} iconUrl={box.iconUrl} buttonLink={box.buttonLink} />
				))}
			</div>
			<div className='w-full bg-amber-100 p-6 flex justify-between items-center'>
				<p className='text-black!'>Mamy <u>wolne terminy</u> na marzec!</p>
				<Button linkTo={'/kontakt'} buttonText={'Umów się na wycenę'} theme={'btn-primary'} />
			</div>
			<section
				className='my-6 text-center mb-24'
				id='realizacje'
			>
				<div className='text-center py-6 px-2 '>
					<p>
						Jestesmy na rynku od ponad <strong>5 lat</strong>
					</p>
					<h2>
						Opracowaliśmy już 100+ <span className='text-gradient'>realizacji</span>
					</h2>
					<p className='text-center px-2 md:px-32 py-6 '>
						Wszystkie są <strong>realnymi</strong> projektami, którymi klienci się
						cieszą, zarządzają i wykorzystują w swoim biznesie. Mimo tego, że każdy
						projekt zakładał inny scenariusz, wszystkie są
						<strong> szybkie, responsywne i dostosowane</strong> do aktualnych
						warunków.
					</p>
				</div>
				<Slider items={_portfolio_items} />
			</section>

			<div className='px-4 md:px-8'>
				<H2 styleType='secondary'>W naszej ofercie znajdziesz:</H2>
				{_homeContents_ImageBox_1.map((item, index) => (
					<ImageText
						key={index}
						heading={item.heading}
						imgsrc={item.imgsrc}
						content={item.content}
						reverse={index % 2 !== 0}
						labels={item.labels}
					/>
				))}
				<H2 styleType={'primary'}>Nasz produkt</H2>
				{_homeContents_ImageBox_Profelio.map((item, index) => (
					<ImageTextSpecial
						key={index}
						heading={item.heading}
						imgsrc={item.imgsrc}
						content={item.content}
						labels={item.labels}
					/>
				))}

				{_homeContents_ImageBox_2.map((item, index) => (
					<ImageText
						key={index}
						heading={item.heading}
						imgsrc={item.imgsrc}
						content={item.content}
						reverse={index % 2 !== 0}
						labels={item.labels}
					/>
				))}
			</div>

			<section className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-1 rounded-2xl border-[var(--color-background-60)] m-8 p-8">
				<div className="flex flex-col items-center">
					<h3>Tworzymy integracje do:</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-8">
					{_integrationsContents.map((integration, index) => (
						<img
						key={index}
						src={integration.url}
						alt={integration.alt}
						className="p-2"
						/>
					))}
					</div>
				</div>
				<div className="flex flex-col items-center">
					<h3>Technologia, na której się znamy:</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-8">
					{_technologyContents.map((technology, index) => (
						<img
						key={index}
						src={technology.url}
						alt={technology.alt}
						className="p-2"
						/>
					))}
					</div>
				</div>
			</section>

			<section className='py-8 background-top flex flex-col align-center text-center justify-center'>
				<h2 className='text-gradient'>Nasi klienci są zadowoleni</h2>
				<div>
					<p>
						Wybierz z naszego portfolio jakikolwiek projekt, zadzwoń i zapytaj klienta
						o współpracę z nami.
					</p>
					<p>Zaufali nam m.in:</p>
				</div>
				<div className="grid grid-cols-4 md:grid-cols-8 gap-2 justify-center mt-8">
					{_clientsContents.map((integration, index) => (
						<img
						key={index}
						src={integration.url}
						alt={integration.alt}
						className="p-2"
						/>
					))}
					</div>
			</section>
				
		</>
	);
};

export default HomePage;
