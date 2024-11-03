// Styles
import './HomePage.css';
// Icons
import IconDedicatedSolutions from '../../assets/icon-dedicated-miluconnect.png';
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
			imgsrc: IconDedicatedSolutions,
			heading: 'Rozwiązania WooCommerce dla WordPress',
			url: 'rozwiazania-wordpress-woocommerce',
			content: (
				<div className='text-align-left'>
					<p>
						Specjalizujemy się w projektowaniu rozwiązań eCommerce na platformie <a href='/rozwiazania'>WordPress WooCommerce</a>, które wspierają rozwój sklepów internetowych i zwiększają konwersję.
					</p>
					<p>
						Nasze <a href='#realizacje'>projekty</a> obejmują kompleksowe tworzenie stron, sklepów, systemów zarządzania produkcją i zasobami oraz integrację z systemami ERP i CRM. Dzięki doświadczeniu i elastycznemu podejściu, pomagamy firmom zyskać przewagę konkurencyjną.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconMobileApps,
			heading: 'Projektowanie Mobile-First',
			url: 'projektowanie-mobile-first',
			content: (
				<div className='text-align-left'>
					<p>
						Tworzymy strony i aplikacje oparte na podejściu Mobile First, dostosowane do urządzeń mobilnych oraz desktopowych.
					</p>
					<p>
						Dbamy o intuicyjny interfejs użytkownika, szybkość działania i responsywność na każdym urządzeniu, co jest kluczowe dla SEO i zadowolenia użytkowników.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconSpectialistTeam,
			heading: 'Optymalizacja dla eCommerce',
			url: 'optymalizacja-ecommerce',
			content: (
				<div className='text-align-left'>
					<p>
						Oferujemy pełną optymalizację SEO dla sklepów internetowychi stron eCommerce, koncentrując się na wzroście ruchu organicznego i zwiększeniu sprzedaży.
					</p>
					<p>
						Nasze działania obejmują optymalizację treści, analizy danych i audyty SEO, które skutkują lepszą widocznością i konwersją.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconPartnership,
			heading: 'Konsultacje technologiczne i wsparcie IT',
			url: 'konsultacje-technologiczne',
			content: (
				<div className='text-align-left'>
					<p>
						Nasz zespół oferuje wsparcie technologiczne na każdym etapie projektu.
					</p>
					<p>
						Od planowania, przez wdrożenie, aż po optymalizację, zapewniamy efektywne i nowoczesne rozwiązania IT, które wspierają Twoją firmę w osiąganiu kluczowych celów.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconSpectialistTeam,
			heading: 'Audyt i optymalizacja SEO',
			url: 'audyt-seo',
			content: (
				<div className='text-align-left'>
					<p>
						Nasze audyty SEO to szczegółowa analiza stron internetowych pod kątem wyszukiwarek.
					</p>
					<p>
						Pomagamy zidentyfikować i wyeliminować techniczne problemy, poprawić struktury linków i zwiększyć pozycję Twojej strony w wynikach wyszukiwania.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconSpectialistTeam,
			heading: 'Zespół ekspertów IT',
			url: 'zespol-ekspertow-it',
			content: (
				<div className='text-align-left'>
					<p>
						Mamy zespół specjalistów IT. To doświadczeni programiści i projektanci, którzy tworzą zaawansowane rozwiązania e-commerce.
					</p>
					<p>
						Niezależnie od skali projektu, zapewniamy stabilność, bezpieczeństwo i najwyższą jakość wdrożeń, które odpowiadają na potrzeby biznesowe.
					</p>
				</div>
			),
		},
	];

	return (
		<>
			<MetaTags
				title='MILU Connect'
				description='Tworzenie stron internetowych, sklepów e-commerce i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
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
				{_homeContents_ImageBox.map((item, index) => (
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
