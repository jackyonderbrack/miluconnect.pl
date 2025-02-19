import Header from '../../components/Header/Header';
import PuzzlesImg from '../../assets/background-puzzles-01-miluconnect.webp';

import './SolutionsPage.css';

// Icons imports
import IconCustomWebSites from '../../assets/icon-webadjustment-miluconnect.webp';
import IconCustomWebShops from '../../assets/icon-webshop-miluconnect.png';
import IconDedicatedSolutions from '../../assets/icon-dedicated-miluconnect.webp';
import MetaTags from '../../components/MetaTags/MetaTags';
import ImageText from '../../components/ImageText/ImageText';

const SolutionsPage = () => {


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
			<section className='background-top container'>
				<div>
					<h2>CZYM SIE ZAJMUJEMY?</h2>
					<p>
						Jesteśmy w czołówce firm programistycznych w Polsce, specjalizujących się
						w tworzeniu stron i sklepów internetowych, które są nie tylko estetyczne,
						ale również niezwykle przyjazne dla użytkowników. Nasze projekty są
						zaprojektowane w taki sposób, aby zapewnić łatwą nawigację, intuicyjne
						interakcje i doskonałe wrażenia użytkownika.
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
							biznesie klienta. Oznacza to, że system będzie rósł wraz z firmą, co jest
							dużym atutem.
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
							Choć początkowy koszt może być wyższy niż w przypadku gotowych rozwiązań,
							w dłuższej perspektywie dedykowane oprogramowanie często okazuje się
							bardziej opłacalne, ponieważ dokładnie odpowiada potrzebom firmy i może
							być efektywniej wykorzystane.
						</p>
					</div>
				</div>
			</section>

			<div id='CategoryBoxes' className='grid grid-cols-1 gap-1'>
				{_solutionsContents_ImageBox.map((item, index) => (
					<ImageText
						key={index}
						heading={item.heading}
						imgsrc={item.imgsrc}
						content={item.content}
					/>
				))}
			</div>

			
			<section className='container'>
				<div className='text-align-center'>
					<h3>Na czym się obecnie można się oprzeć?</h3>
				</div>
				{/* <div className='actual-trends-container'> */}
				<div className='grid grid-cols-4 gap-2 background-border-shadow '>
					<p>
						<strong>AI-augmented Development</strong>: <br />
						Sztuczna inteligencja (AI) staje się coraz bardziej integralną częścią
						procesu programowania, przyspieszając tworzenie kodu, tłumaczenie kodu z
						języków legacy oraz optymalizację kodu.
					</p>
					<p>
						<strong>Cybersecurity</strong>: <br />
						Cyberbezpieczeństwo pozostaje priorytetem w 2024 roku, z rosnącym
						znaczeniem strategii takich jak wykrywanie zagrożeń oparte na AI/ML,
						architektura zero-trust oraz siatka bezpieczeństwa (cybersecurity mesh).
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
						Technologie rzeczywistości rozszerzonej (AR) i wirtualnej (VR) zyskują na
						znaczeniu, przekształcając interakcje cyfrowe w różnych sektorach.
					</p>
					<p>
						<strong>Serverless Architecture</strong>: <br />
						Architektura bezserwerowa umożliwia programistom skupienie się na kodzie
						bez zarządzania infrastrukturą, co pozwala na skalowanie aplikacji w
						zależności od zapotrzebowania i optymalizację kosztów.
					</p>
					<p>
						<strong>React Native</strong>: <br />
						React Native pozostaje popularnym wyborem do tworzenia aplikacji mobilnych
						dzięki możliwości ponownego wykorzystania kodu i tworzeniu natywnych
						komponentów UI, co poprawia wydajność i doświadczenie użytkownika.
					</p>
				</div>
			</section>
		</>
	);
};

export default SolutionsPage;
