
// Banners
import EarthImg from '../../assets/background-earth-01-miluconnect.webp';
// Clients
import Partner3 from '../../assets/partners/miluconnect-partner-holisticspa.png';
import Partner1 from '../../assets/partners/miluconnect-partner-hurtownia-slonca.png';
import Partner5 from '../../assets/partners/partner-darel-miluconnect.png';
import Partner2 from '../../assets/partners/partner-gentlemanshop-miluconnect.png';
import Partner4 from '../../assets/partners/partner-lesnaperla-miluconnect.png';
import Partner6 from '../../assets/partners/partner-metkom-miluconnect.png';
import Partner7 from '../../assets/partners/partner-natarasie-miluconnect.png';
import Partner8 from '../../assets/partners/partner-vending4all-miluconnect.png';
// Components
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';
import H2 from '../../components/H2/H2';
import ImageText from '../../components/ImageText/ImageText';
import MetaTags from '../../components/MetaTags/MetaTags';
import Pricing from '../../components/Pricing/Pricing';
import Slider from '../../components/Slider/Slider';
import ImageTextSpecial from '../../components/ImageTextSpecial/ImageTextSpecial';
import { _portfolio_items, _homeContents_ImageBox_1, _homeContents_ImageBox_2, _integrationsContents, _technologyContents, _homeContents_ImageBox_Profelio, offer_boxes } from '../../consts/home.consts';
import Box from '../../components/Box/Box';
import { HiArrowCircleDown } from 'react-icons/hi';
import BouncingButton from '../../components/BouncingButton/BouncingButton';
import Typewriter from '../../components/TypeWriter/TypeWriter';

const HomePage = () => {
	return (
		<>
			<MetaTags
				title='MILU Connect'
				description='Tworzenie stron internetowych, sklepów e-commerce i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
			/>
			<Header
				content={
					<div className='space-y-10'>
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
							Szybka, <i><strong>darmowa wycena</strong></i> i prosty kontakt online. <br /> Jeśli wolisz się spotkać - <a href='/kontakt'>Skontaktuj się</a>
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

			<section className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="flex flex-col items-center">
				<h3>Tworzymy integracje do:</h3>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center mt-8">
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
				<div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center mt-8">
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
				<Gallery
					imageUrls={[
						Partner1,
						Partner2,
						Partner3,
						Partner4,
						Partner5,
						Partner6,
						Partner7,
						Partner8,
					]}
				/>
			</section>
				
		</>
	);
};

export default HomePage;
