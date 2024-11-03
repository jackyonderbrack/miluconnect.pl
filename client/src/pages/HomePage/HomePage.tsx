// Styles
import './HomePage.css';
// Icons
import IconDedidcatedSolutions from '../../assets/icon-dedicated-miluconnect.png';
import IconMobileApps from '../../assets/icon-mobileapps-miluconnect.png';
import IconSpectialistTeam from '../../assets/icon-webspecialists-miluconnect.png';
import IconPartnership from '../../assets/icon-partnership-miluconnect.png';
// Banners
import EarthImg from '../../assets/background-earth-01-miluconnect.webp';
// Clients
import Partner1 from '../../assets/partners/partner-artmageddon-miluconnect.png';
import Partner2 from '../../assets/partners/partner-gentlemanshop-miluconnect.png';
import Partner3 from '../../assets/partners/partner-holisticspa-miluconnect.png';
import Partner4 from '../../assets/partners/partner-lesnaperla-miluconnect.png';
import Partner5 from '../../assets/partners/partner-mensworldbarbershop-miluconnect.png';
import Partner6 from '../../assets/partners/partner-metkom-miluconnect.png';
import Partner7 from '../../assets/partners/partner-natarasie-miluconnect.png';
import Partner8 from '../../assets/partners/partner-vending4all-miluconnect.png';
// Components
import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
// Images
import PortfolioSkinsnImg from '../../assets/portfolio/07_miluconnect-skinsn-plock-rybnik-strony.png';
import PortfolioRestauracjaLesnaPerlaImg from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-rybnik-radlin.png';
import PorftolioNatarasieImg from '../../assets/portfolio/05_miluconnect-natarasie-strony-rybnik-zory.png';
import PortfolioVending4AllImg from '../../assets/portfolio/10_miluconnect-vending-strony-rybnik-zory.png';
import PortfolioMensworldImg from '../../assets/portfolio/04_miluconnect-mensworld-barbershop-strony-rybnik.png';
import PortfolioMetkomImg from '../../assets/portfolio/06_miluconnect-metkom-zory-cieszyn-strony-internetowe.png';
import PortfolioArtmageddonImg from '../../assets/portfolio/01_miluconnect-atrmageddon-strony-rybnik.png';
import PortfolioHolisticSpaImg from '../../assets/portfolio/08_miluconnect-holisticspa-spaslask-strony-rybnik-czerwionka-salon.png';
import PortfolioGentlemanshopImg from '../../assets/portfolio/02_miluconnect-gentlemanshop-strony-rybnik.png';
import PortfolioStolarniaprecyzjaImg from '../../assets/portfolio/09_miluconnect-stolarniaprecyzja-spaslask-strony-rybnik-czerwionka-biznes.png';
import PortfolioCentrumBagsImg from '../../assets/portfolio/11_miluconnect-centrumbags-strony-rybnik-zory.png';
// Components
import MetaTags from '../../components/MetaTags/MetaTags';
import Button from '../../components/Button/Button';
import ImageText from '../../components/ImageText/ImageText';
import Slider from '../../components/Slider/Slider';
import Pricing from '../../components/Pricing/Pricing';
import H2 from '../../components/H2/H2';
import Gallery from '../../components/Gallery/Gallery';

const HomePage = () => {
	const _portfolio_items = [
		{
			title: 'Centrum Bags - Bytom',
			description: 'SKLEP INTERNETOWY',
			imageUrl: PortfolioCentrumBagsImg,
			buttonLink: 'https://centrumbags.pl',
		},
		{
			title: 'SKIN Simply Nutrition',
			description: 'SKLEP I KOSMETOLOGIA',
			imageUrl: PortfolioSkinsnImg,
			buttonLink: 'https://skinsn.eu',
		},
		{
			title: 'Stolarnia Precyzja',
			description: 'WITRYNA BIZNESOWA',
			imageUrl: PortfolioStolarniaprecyzjaImg,
			buttonLink: 'https://stolarniaprecyzja.pl',
		},
		{
			title: 'Gentleman Shop',
			description: 'SKLEP BRANŻOWY',
			imageUrl: PortfolioGentlemanshopImg,
			buttonLink: 'https://gentlemanshop.com.pl',
		},
		{
			title: 'Leśna Perła',
			description: 'DOM PRZYJĘĆ',
			imageUrl: PortfolioRestauracjaLesnaPerlaImg,
			buttonLink: 'https://lesna-perla.pl',
		},
		{
			title: 'Na Tarasie',
			description: 'BRANŻA OGRODNICZA',
			imageUrl: PorftolioNatarasieImg,
			buttonLink: 'https://natarasie.eu',
		},
		{
			title: 'Vending 4 All',
			description: 'WIZYTÓWKA PRODUCENTA',
			imageUrl: PortfolioVending4AllImg,
			buttonLink: 'https://vending4all.eu',
		},
		{
			title: 'Men’s World',
			description: 'WITRYNA I SKLEP',
			imageUrl: PortfolioMensworldImg,
			buttonLink: 'http://mensworldbarbershop.pl',
		},
		{
			title: 'Metkom',
			description: 'STRONA, BLOG, KATALOG',
			imageUrl: PortfolioMetkomImg,
			buttonLink: 'https://metkom.com.pl',
		},
		{
			title: 'Artmageddon',
			description: 'WIZYTÓWKA STUDIA TATUAŻU',
			imageUrl: PortfolioArtmageddonImg,
			buttonLink: 'https://artmageddon.pl',
		},
		{
			title: 'Holistic Spa',
			description: 'GABINET SPECJALISTYCZNY',
			imageUrl: PortfolioHolisticSpaImg,
			buttonLink: 'https://spaslask.pl',
		},
	];

	const _homeContents_ImageBox = [
		{
			imgsrc: IconDedidcatedSolutions,
			heading: 'Dedykowane rozwiązania',
			url: 'rozwiazania',
			content: (
				<div className='text-align-justify'>
					<p>
						Jesteśmy małym gronem programistów, grafików, wizjonerów i chcemy rozwinąć Twój
						biznes.
					</p>
					<p>
						Projektujemy Strony internetowe, sklepy oraz wszystko co związane z
						siecią. Nasze <a href='#realizacje'>realizacje</a> to tworzenie systemów zarządzania
						produkcją, zasobami, ale również interaktywnych gier, programów i sieci.
						Dostosowujemy się do specyficznych potrzeb klienta, zapewniając
						elastyczność, skalowalność i integrację z istniejącymi systemami.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconMobileApps,
			heading: 'Responsywność',
			url: 'responsywnosc',
			content:
				'Projektujemy zaawansowane aplikacje mobilne dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod, a także stabilną działalność. Nasze aplikacje są zoptymalizowane pod kątem wydajności i bezpieczeństwa, co gwarantuje doskonałe wrażenia użytkownika i responsywność każdego systemu.',
		},
		{
			imgsrc: IconPartnership,
			heading: 'Partnerstwo technologiczne',
			url: 'technologie',
			content:
				'Dostarczamy wszechstronne konsultacje w dziedzinie technologii IT. Naszym celem jest osiągnięcie wyznaczonych rezultatów w ścisłej współpracy z naszymi klientami. Oferujemy wsparcie na każdym etapie projektu, od planowania, przez wdrożenie, aż po utrzymanie i rozwój.',
		},
		{
			imgsrc: IconSpectialistTeam,
			heading: 'Kadra specjalistyczna',
			url: 'nasz-team',
			content:
				'Nasza kadra to zespół wysoko wykwalifikowanych specjalistów, którzy projektują zaawansowane rozwiązania dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod oraz stabilną działalność aplikacji. Dzięki naszym ekspertom, możemy sprostać najbardziej wymagającym projektom.',
		},
	];

	return (
		<>
			<MetaTags
				title='MILU Connect'
				description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu. Katowice, Rybnik, Żory, Mikołów, Śląsk'
			/>
			<Header
				content={
					<>
						<div className='home-page-header-text'>
							<h1>
								&gt; szybki e-commerce
								<br />
								&gt; stylowa <span className='text-gradient'>strona internetowa</span>
								<br />
							</h1>
						</div>
						<div className='home-page-header-cta'>
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
					</>
				}
				imgUrl={EarthImg}
				align='start'
			/>
			<Pricing />
			<div className='container'>
				<H2 styleType='secondary'>Na czym się znamy</H2>
				{_homeContents_ImageBox. map((item, index) => (
					<ImageText
					key={index}
					heading={item.heading}
					imgsrc={item.imgsrc}
					content={item.content}
					reverse={index % 2 !== 0}
					/>
				))}
			</div>

			<section
				className='background-top my-3 py-4 text-align-center'
				id='realizacje'
			>
				<div className='align-items-center py-4 px-2'>
					<h2>
						Sprawdź niektóre nasze <span className='text-gradient'>realizacje</span>
					</h2>
					<p className='text-align-center container px-4'>
						Wszystkie nasze realizacje są <strong>realnymi</strong> projektami,
						którymi klienci się cieszą, zarządzają i wykorzystują w swoim biznesie.
						Mimo tego, że każdy projekt zakładał inny scenariusz, wszystkie są
						<strong> responsywne i dostosowane</strong> do warunków dzisiejszego
						Web-view.
					</p>
				</div>
				<Slider items={_portfolio_items} />
			</section>

			<section className='col background-top pt-2 pb-6'>
				<div className='flex flex-col align-items-center pb-6'>
					<Title
						gradientHeader='Nasi klienci'
						leadHeader={null}
						leadParagraph={
							<div>
								<h3>Dołącz i ciesz się rozwijającym się biznesem</h3>
								<p>Zaufali nam m.in:</p>
							</div>
						}
					/>
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
				</div>
			</section>
		</>
	);
};

export default HomePage;
