
import './SolutionsPage.css';

// Icons imports
import BackgroundPuzzles from '../../assets/background-puzzles-01-miluconnect.webp';
import PageTitle from '../../components/PageTitle/PageTitle';

const SolutionsPage = () => {
	

	return (
		<>
			<PageTitle img={BackgroundPuzzles}>
				<h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
					&gt; Dlaczego to nasze <span className='text-gradient'>rozwiązania</span>
					<br />
					dadzą Ci efekt, którego szukasz?
				</h1>
			</PageTitle>
			
			<section>
				<div className='text-align-center'>
					<h3>Na czym się obecnie można się oprzeć?</h3>
				</div>
				{/* <div className='actual-trends-container'> */}
				<div className='grid grid-cols-4 gap-2'>
					<p>
						<strong>AI-augmented Development</strong>: <br />
						Sztuczna inteligencja (AI) staje się coraz bardziej integralną częścią
						procesu programowania, przyspieszając tworzenie kodu, tłumaczenie kodu z
						języków legacy oraz optymalizację kodu.
					</p>
					<p>
						<strong>Cybersecurity</strong>: <br />
						Cyberbezpieczeństwo pozostaje priorytetem w 2025 roku, z rosnącym
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
