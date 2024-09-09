import Header from '../../components/Header/Header';
import PuzzlesImg from '../../assets/background-puzzles-01-miluconnect.webp';
import ImageBox from '../../components/ImageBox/ImageBox';

import './SolutionsPage.css';

// Icons imports
import IconCustomWebSites from '../../assets/icon-webadjustment-miluconnect.webp';
import IconCustomWebShops from '../../assets/icon-webshop-miluconnect.png';
import IconDedicatedSolutions from '../../assets/icon-dedicated-miluconnect.webp';

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
import TechnologyLitelements from '../../assets/technologies/solutions-lit-elements-light-miluconnect.webp';
import TechnologyMongodb from '../../assets/technologies/solutions-mongodb-light-miluconnect.webp';
import TechnologyNodejs from '../../assets/technologies/solutions-nodejs-light-miluconnect.webp';
import TechnologyReactjs from '../../assets/technologies/solutions-react-miluconnect.webp';
import TechnologySharepoint from '../../assets/technologies/solutions-sharepoint-light-miluconnect.webp';
import MetaTags from '../../components/MetaTags/MetaTags';

const SolutionsPage = () => {
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
		{ url: TechnologyLitelements, alt: 'Litelements' },
		{ url: TechnologyMongodb, alt: 'MongoDB' },
		{ url: TechnologyNodejs, alt: 'Node.js' },
		{ url: TechnologyReactjs, alt: 'React.js' },
		{ url: TechnologySharepoint, alt: 'SharePoint' },
	];

	const _solutionsContents_ImageBox = [
		{
			imgsrc: IconCustomWebSites,
			heading: 'Witryny internetowe',
			content: (
				<div className='category-boxes_webpages'>
					<p>
						Od najprostszych wizytówek, po wytworne i skuteczne elementy opisowe dla
						firm, produktów, miejsc, blogów itp.
					</p>
				</div>
			),
		},
		{
			imgsrc: IconCustomWebShops,
			heading: 'Sklepy / systemy zarządzania',
			content: (
				<div className='category-boxes_webpages'>
					<p>
						Sprzedajesz książkę? Czy może prowadzisz ogromny magazyn? Wszystko da się
						zrobić!
					</p>
				</div>
			),
		},
		{
			imgsrc: IconDedicatedSolutions,
			heading: 'Dedykowane rozwiązania',
			content: (
				<div className='category-boxes_webpages'>
					<p>
						Mamy doświadczenie w tworzeniu systemów zarządzania produkcją, zasobami,
						ale również interaktywnych gier, programów i sieci.
					</p>
				</div>
			),
		},
	];

	return (
		<>
			<MetaTags
				title='MILU Connect - Sklepy internetowe Żory'
				description='Poznaj nasze dedykowane rozwiązania IT: systemy zarządzania produkcją, zasobami oraz interaktywne gry i aplikacje.'
			/>
			<Header
				content={
					<div>
						<h1>
							Poznaj nasze <br />
							<span className='text-gradient'>Rozwiązania</span>
							<br />w biznesie
						</h1>
					</div>
				}
				imgUrl={PuzzlesImg}
				align='start'
			/>
			<section className='content background-top'>
				<div className='content'>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<h2>CZYM SIE ZAJMUJEMY?</h2>
							<p>
								Jesteśmy w czołówce firm programistycznych w Polsce, specjalizujących
								się w tworzeniu stron i sklepów internetowych, które są nie tylko
								estetyczne, ale również niezwykle przyjazne dla użytkowników. Nasze
								projekty są zaprojektowane w taki sposób, aby zapewnić łatwą nawigację,
								intuicyjne interakcje i doskonałe wrażenia użytkownika.
							</p>
							<div className='my-4'>
								<h3>Czym są dedykowane rozwiązania?</h3>
								<p>
									<strong>Indywidualne dopasowanie do potrzeb</strong>: <br />
									Dedykowane rozwiązania to oprogramowanie stworzone specjalnie pod kątem
									konkretnych wymagań i potrzeb klienta. W przeciwieństwie do gotowych
									produktów, są one projektowane tak, aby idealnie pasowały do specyfiki
									działalności klienta.
								</p>
								<p>
									<strong>Elastyczność i skalowalność</strong>: <br />
									Oprogramowanie może być rozwijane i dostosowywane w miarę zmian w
									biznesie klienta. Oznacza to, że system będzie rósł wraz z firmą, co
									jest dużym atutem.
								</p>
								<p>
									<strong>Integracja z istniejącymi systemami</strong>: <br />
									Mogą być łatwo zintegrowane z już używanymi przez klienta narzędziami i
									systemami, co zapewnia płynność pracy i optymalizację procesów.
								</p>
								<p>
									<strong>Bezpieczeństwo i niezawodność</strong>:<br />
									Zwróćmy uwagę na aspekty bezpieczeństwa, podkreślając, że dedykowane
									oprogramowanie może być dostosowane do specyficznych wymagań
									bezpieczeństwa i prywatności klienta.
								</p>
								<p>
									<strong>Wsparcie i rozwój</strong>: <br />
									Wraz z dedykowanym rozwiązaniem klient otrzymuje również dostosowane
									wsparcie techniczne oraz możliwość ciągłego rozwijania oprogramowania
									zgodnie z ewoluującymi potrzebami.
								</p>
								<p>
									<strong>Koszty i inwestycja długoterminowa</strong>:<br />
									Choć początkowy koszt może być wyższy niż w przypadku gotowych
									rozwiązań, w dłuższej perspektywie dedykowane oprogramowanie często
									okazuje się bardziej opłacalne, ponieważ dokładnie odpowiada potrzebom
									firmy i może być efektywniej wykorzystane.
								</p>
								<h3>Aktualne trendy w programowaniu i tworzeniu stron internetowych</h3>
								<p>
									<strong>AI-augmented Development</strong>: <br />
									Sztuczna inteligencja (AI) staje się coraz bardziej integralną częścią
									procesu programowania, przyspieszając tworzenie kodu, tłumaczenie kodu
									z języków legacy oraz optymalizację kodu.
								</p>
								<p>
									<strong>Cybersecurity</strong>: <br />
									Cyberbezpieczeństwo pozostaje priorytetem w 2024 roku, z rosnącym
									znaczeniem strategii takich jak wykrywanie zagrożeń oparte na AI/ML,
									architektura zero-trust oraz siatka bezpieczeństwa (cybersecurity
									mesh).
								</p>
								<p>
									<strong>Low-code/No-code Development</strong>: <br />
									Platformy low-code i no-code zyskują na popularności, umożliwiając
									tworzenie aplikacji bez tradycyjnych umiejętności kodowania.
								</p>
								<p>
									<strong>Industry Cloud Platforms</strong>: <br />
									Specjalizowane platformy chmurowe stają się coraz bardziej popularne,
									oferując rozwiązania dostosowane do specyficznych potrzeb branżowych.
								</p>
								<p>
									<strong>Platform Engineering</strong>: <br />
									Inżynieria platform to podejście polegające na tworzeniu wewnętrznych
									platform deweloperskich, które ułatwiają pracę programistom poprzez
									zapewnienie zestawu narzędzi i procesów wspierających.
								</p>
								<p>
									<strong>AR/VR and Mixed Reality</strong>: <br />
									Technologie rzeczywistości rozszerzonej (AR) i wirtualnej (VR) zyskują
									na znaczeniu, przekształcając interakcje cyfrowe w różnych sektorach.
								</p>
								<p>
									<strong>Serverless Architecture</strong>: <br />
									Architektura bezserwerowa umożliwia programistom skupienie się na
									kodzie bez zarządzania infrastrukturą, co pozwala na skalowanie
									aplikacji w zależności od zapotrzebowania i optymalizację kosztów.
								</p>
								<p>
									<strong>React Native</strong>: <br />
									React Native pozostaje popularnym wyborem do tworzenia aplikacji
									mobilnych dzięki możliwości ponownego wykorzystania kodu i tworzeniu
									natywnych komponentów UI, co poprawia wydajność i doświadczenie
									użytkownika.
								</p>
							</div>
						</div>
						<div>
							<div id='CategoryBoxes' className='grid grid-cols-1 gap-1'>
								{_solutionsContents_ImageBox.map((item, index) => (
									<ImageBox
										key={index}
										heading={item.heading}
										imgsrc={item.imgsrc}
										content={item.content}
									/>
								))}
							</div>
							<div className='pt-4'>
								<h3>Aktualne trendy w technologii</h3>
								<ul className='list-disc pl-5'>
									<li>
										<strong>AI-augmented Development</strong>: Wykorzystanie AI do
										przyspieszenia tworzenia i optymalizacji kodu.
									</li>
									<li>
										<strong>Cybersecurity</strong>: Zaawansowane strategie bezpieczeństwa,
										takie jak AI/ML wykrywanie zagrożeń i architektura zero-trust.
									</li>
									<li>
										<strong>Low-code/No-code Development</strong>: Platformy umożliwiające
										tworzenie aplikacji bez tradycyjnych umiejętności kodowania.
									</li>
									<li>
										<strong>Industry Cloud Platforms</strong>: Specjalizowane platformy
										chmurowe dostosowane do potrzeb branżowych.
									</li>
									<li>
										<strong>Platform Engineering</strong>: Tworzenie wewnętrznych platform
										deweloperskich, które wspierają pracę programistów.
									</li>
									<li>
										<strong>AR/VR and Mixed Reality</strong>: Wzrost popularności
										technologii AR i VR w różnych sektorach.
									</li>
									<li>
										<strong>Serverless Architecture</strong>: Architektura bezserwerowa,
										która pozwala na skalowanie aplikacji i optymalizację kosztów.
									</li>
									<li>
										<strong>React Native</strong>: Popularność React Native w tworzeniu
										aplikacji mobilnych dzięki możliwości ponownego wykorzystania kodu.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='background-top content py-4 grid grid-cols-2 justify-content-evenly gap-2'>
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
		</>
	);
};

export default SolutionsPage;
