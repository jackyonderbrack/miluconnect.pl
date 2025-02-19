import './HomePage.css';
// Icons
import IconDedicatedSolutions from '../../assets/icon-dedicated-miluconnect.png';
import IconMobileApps from '../../assets/icon-mobileapps-miluconnect.png';
import IconPartnership from '../../assets/icon-partnership-miluconnect.png';
import IconSpectialistTeam from '../../assets/icon-webspecialists-miluconnect.png';
import IconLongTerm from '../../assets/icon-longterm-miluconnect.png'
import IconBrainstorm from '../../assets/icon-brainstorm-miluconnect.png'
// Banners
import EarthImg from '../../assets/background-earth-01-miluconnect.webp';
// Clients
import Partner1 from '../../assets/partners/miluconnect-partner-hurtownia-slonca.png';
import Partner2 from '../../assets/partners/partner-gentlemanshop-miluconnect.png';
import Partner3 from '../../assets/partners/miluconnect-partner-holisticspa.png';
import Partner4 from '../../assets/partners/partner-lesnaperla-miluconnect.png';
import Partner5 from '../../assets/partners/partner-darel-miluconnect.png';
import Partner6 from '../../assets/partners/partner-metkom-miluconnect.png';
import Partner7 from '../../assets/partners/partner-natarasie-miluconnect.png';
import Partner8 from '../../assets/partners/partner-vending4all-miluconnect.png';
// Components
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
// Images
import PortfolioDarelBizPlImg from '../../assets/portfolio/miluconnect-darel-strony-internetowe-rybnik-zory.png';
import PortfolioRestauracjaLesnaPerlaImg from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-rybnik-radlin.png';
import PorftolioNatarasieImg from '../../assets/portfolio/05_miluconnect-natarasie-strony-rybnik-zory.png';
import PortfolioMetkomImg from '../../assets/portfolio/06_miluconnect-metkom-zory-cieszyn-strony-internetowe.png';
import PortfolioSkinsnImg from '../../assets/portfolio/07_miluconnect-skinsn-plock-rybnik-strony.png';
import PortfolioHolisticSpaImg from '../../assets/portfolio/08_miluconnect-holisticspa-spaslask-strony-rybnik-czerwionka-salon.png';
import PortfolioStolarniaprecyzjaImg from '../../assets/portfolio/09_miluconnect-stolarniaprecyzja-spaslask-strony-rybnik-czerwionka-biznes.png';
import PortfolioVending4AllImg from '../../assets/portfolio/10_miluconnect-vending-strony-rybnik-zory.png';
import PortfolioCentrumBagsImg from '../../assets/portfolio/11_miluconnect-centrumbags-strony-rybnik-zory.png';
// Components
import Button from '../../components/Button/Button';
import Gallery from '../../components/Gallery/Gallery';
import H2 from '../../components/H2/H2';
import ImageText from '../../components/ImageText/ImageText';
import MetaTags from '../../components/MetaTags/MetaTags';
import Pricing from '../../components/Pricing/Pricing';
import Slider from '../../components/Slider/Slider';
// Solutions
// Clients
import IntegrationAllegro from '../../assets/integrations/integrations-allegro-miluconnect.webp';
import IntegrationBaseLinker from '../../assets/integrations/integrations-baselinker-light-miluconnect.webp';
import IntegrationPresta from '../../assets/integrations/integrations-prestashop-light-miluconnect.webp';
import IntegrationWordpress from '../../assets/integrations/integrations-wordpress-light-miluconnect.webp';
import IntegrationWooCommerce from '../../assets/integrations/integrations-woocommerce-light-miluconnect.webp';
import IntegrationShopGold from '../../assets/integrations/integrations-shopgold-light-miluconnect.webp';
import IntegrationInPost from '../../assets/integrations/integrations-inpost-light-miluconnect.webp';
import IntegrationCyberFolks from '../../assets/integrations/integrations-cyberfolks-light-miluconnect.webp';

// Technologies
import TechnologyAngular from '../../assets/technologies/solutions-agular-miluconnect.webp';
import TechnologyExpress from '../../assets/technologies/solutions-expressjs-light-miluconnect.webp';
import TechnologyGolang from '../../assets/technologies/solutions-go-miluconnect.webp';
import TechnologyMongodb from '../../assets/technologies/solutions-mongodb-light-miluconnect.webp';
import TechnologyNodejs from '../../assets/technologies/solutions-nodejs-light-miluconnect.webp';
import TechnologyReactjs from '../../assets/technologies/solutions-react-miluconnect.webp';
import TechnologySharepoint from '../../assets/technologies/solutions-sharepoint-light-miluconnect.webp';
import TechnologyKotlin from '../../assets/technologies/integrations-kotlin.webp';


const HomePage = () => {
	const _portfolio_items = [
		{
			title: 'Centrum Bags - Bytom',
			description: 'SKLEP INTERNETOWY',
			imageUrl: PortfolioCentrumBagsImg,
			buttonLink: 'https://centrumbags.pl',
		},
		{
			title: 'Leśna Perła',
			description: 'DOM PRZYJĘĆ',
			imageUrl: PortfolioRestauracjaLesnaPerlaImg,
			buttonLink: 'https://lesna-perla.pl',
		},
		{
			title: 'Stolarnia Precyzja',
			description: 'WITRYNA BIZNESOWA',
			imageUrl: PortfolioStolarniaprecyzjaImg,
			buttonLink: 'https://stolarniaprecyzja.pl',
		},

		{
			title: 'Na Tarasie',
			description: 'BRANŻA OGRODNICZA',
			imageUrl: PorftolioNatarasieImg,
			buttonLink: 'https://natarasie.eu',
		},
		{
			title: 'SKIN Simply Nutrition',
			description: 'SKLEP I KOSMETOLOGIA',
			imageUrl: PortfolioSkinsnImg,
			buttonLink: 'https://skinsn.eu',
		},
		{
			title: 'Vending 4 All',
			description: 'WIZYTÓWKA PRODUCENTA',
			imageUrl: PortfolioVending4AllImg,
			buttonLink: 'https://vending4all.eu',
		},
		{
			title: 'Metkom',
			description: 'STRONA, BLOG, KATALOG',
			imageUrl: PortfolioMetkomImg,
			buttonLink: 'https://metkom.com.pl',
		},
		{
			title: 'Holistic Spa',
			description: 'GABINET SPECJALISTYCZNY',
			imageUrl: PortfolioHolisticSpaImg,
			buttonLink: 'https://spaslask.pl',
		},
		{
			title: 'Darel - IE',
			description: 'LOKALNY SKLEP BRANŻOWY',
			imageUrl: PortfolioDarelBizPlImg,
			buttonLink: 'https://darel.biz.pl',
		},
	];

	const _integrationsContents = [
		{ url: IntegrationAllegro, alt: 'Allegro' },
		{ url: IntegrationBaseLinker, alt: 'BaseLinker' },
		{ url: IntegrationPresta, alt: 'PrestaShop' },
		{ url: IntegrationWordpress, alt: 'WordPress' },
		{ url: IntegrationWooCommerce, alt: 'WooCommerce' },
		{ url: IntegrationShopGold, alt: 'ShopGold' },
		{ url: IntegrationInPost, alt: 'InPost' },
		{ url: IntegrationCyberFolks, alt: 'CyberFolks' },
	];

	const _technologyContents = [
		{ url: TechnologyAngular, alt: 'Angular' },
		{ url: TechnologyExpress, alt: 'Express.js' },
		{ url: TechnologyGolang, alt: 'Golang' },
		{ url: TechnologyKotlin, alt: 'Kotlin' },
		{ url: TechnologyMongodb, alt: 'MongoDB' },
		{ url: TechnologyNodejs, alt: 'Node.js' },
		{ url: TechnologyReactjs, alt: 'React.js' },
		{ url: TechnologySharepoint, alt: 'SharePoint' },
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
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
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
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
		},
		{
			imgsrc: IconLongTerm,
			heading: 'Profesjonalizm i długoterminowość',
			url: 'profesjonalizm-długoterminowość',
			content: (
				<div className='text-align-left'>
					<p>O gwarancjach można wiersze pisać. My chwalimy się efektami i zadowoleniem klientów.</p>
					<p>
						Znamy się na rzeczy więc działamy szybko, a szybka praca nie zawsze idzie w parze z szybkim projektem. Zastanawiamy się, planujemy, opisujemy, działamy.
					</p>
					<p>
						Nasze działania często trwają tygodniami, miesiacami...
						Dlatego nie boimy się dużych projektów - przeciwnie. Małe, szybkie i proste cieszą, ale to te wielkie napawają do dumy. Zaangażowanie zawsze przynosi upragniony efekt.
					</p>
					
				</div>
			),
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
		},
		{
			imgsrc: IconBrainstorm,
			heading: 'Konsultacje technologiczne i wsparcie IT',
			url: 'konsultacje-technologiczne',
			content: (
				<div className='text-align-left'>
					<p>
						Nasz zespół oferuje wsparcie technologiczne na każdym etapie projektu.
					</p>
					<p>
						Pomagamy dopracowywać na prawdę różne projekty.
						Od planowania - przez wdrożenie, aż po optymalizację. Zapewniamy efektywne i nowoczesne rozwiązania IT, które wspierają Twoją firmę w osiąganiu kluczowych celów.
					</p>
				</div>
			),
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
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
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
		},
		{
			imgsrc: IconPartnership,
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
			labels: [
				"Wordpress", "WooCommerce", "Allegro", "Baselinker"
			]
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

			<section
				className='background-top my-3 py-4 text-align-center'
				id='realizacje'
			>
				<div className='align-items-center py-4 px-2'>
					<p>Jestesmy na rynku od ponad <strong>5 lat</strong></p>
					<h2>
						Opracowaliśmy już 100+ <span className='text-gradient'>realizacji</span>
					</h2>
					<p className='text-align-center container px-4'>
						Wszystkie są <strong>realnymi</strong> projektami,
						którymi klienci się cieszą, zarządzają i wykorzystują w swoim biznesie.
						Mimo tego, że każdy projekt zakładał inny scenariusz, wszystkie są
						<strong> szybkie, responsywne i dostosowane</strong> do aktualnych warunków.
					</p>
				</div>
				<Slider items={_portfolio_items} />
			</section>

			<div className='container'>
				<H2 styleType='secondary'>Na czym się znamy</H2>
				{_homeContents_ImageBox.map((item, index) => (
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
			<section className=' background-primary content py-4 grid grid-cols-2 justify-content-evenly gap-2'>
				<div className='flex flex-col align-items-center'>
					<h3>Tworzymy integracje do:</h3>
					<div className='imageRows integrations flex flex-wrap justify-content-center'>
						{_integrationsContents.map((integration, index) => (
							<img
								key={index}
								src={integration.url}
								alt={integration.alt}
								className='p-2'
							/>
						))}
					</div>
				</div>
				<div className='flex flex-col align-items-center'>
					<h3>Technologia, na której się znamy:</h3>
					<div className='imageRows integrations flex flex-wrap justify-content-center'>
						{_technologyContents.map((technology, index) => (
							<img
								key={index}
								src={technology.url}
								alt={technology.alt}
								className='p-2'
							/>
						))}
					</div>
				</div>
			</section>
			<section className='col background-top pt-2 pb-6'>
				<div className='flex flex-col align-items-center pb-6'>
					<Title
						gradientHeader='Nasi klienci są zadowoleni'
						leadHeader={null}
						leadParagraph={
							<div>
								<p>Wybierz z naszego portfolio jakikolwiek projekt, zadzwoń i zapytaj klienta o współpracę z nami.</p>
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
