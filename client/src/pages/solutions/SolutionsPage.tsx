import './SolutionsPage.css';

// Icons & Images imports
import BackgroundPuzzles from '../../assets/background-puzzles-01-miluconnect.webp';
import PageTitle from '../../components/PageTitle/PageTitle';

// Portfolio images
import PortfolioImg1 from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-rybnik-radlin.png';
import PortfolioImg2 from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-internetowe-rybnik-radlin-2.png';
import PortfolioImg3 from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-internetowe-rybnik-radlin-3.png';
import PortfolioImg4 from '../../assets/portfolio/03_miluconnect-lesnaperla-strony-internetowe-rybnik-radlin-4.png';

// "Zaufali nam" images
import Trusted1 from '../../assets/partners/miluconnect-partner-holisticspa.png';
import Trusted2 from '../../assets/partners/miluconnect-partner-hurtownia-slonca.png';
import Trusted3 from '../../assets/partners/partner-darel-miluconnect.png';
import Trusted4 from '../../assets/partners/partner-lesnaperla-miluconnect.png';
import Trusted5 from '../../assets/partners/partner-gentlemanshop-miluconnect.png';
import Trusted6 from '../../assets/partners/partner-metkom-miluconnect.png';
import Trusted7 from '../../assets/partners/partner-vending4all-miluconnect.png';
import Trusted8 from '../../assets/partners/partner-natarasie-miluconnect.png';
import ImageTextSpecial from '../../components/ImageTextSpecial/ImageTextSpecial';
import { _homeContents_ImageBox_Profelio } from '../../consts/home.consts';
import Button from '../../components/Button/Button';

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
			
			<section className="p-4 md:p-12 m-2 md:m-8 background-top">
				<h2 className="text-3xl font-bold mb-4">Dlaczego warto wybrać nasze usługi?</h2>
				<p className="text-xl mb-4">
					Specjalizujemy się w tworzeniu <strong>stron internetowych</strong> i <strong>sklepów internetowych</strong>, które nie tylko przyciągają wzrok, ale także wspinają się na szczyty wyszukiwarek. Nasze <strong>dedykowane programowanie</strong> gwarantuje rozwiązania szyte na miarę, a <strong>szybka strona internetowa</strong> to nasza wizytówka – ładuje się błyskawicznie, by nie tracić ani sekundy.
				</p>
				<p className="text-xl mb-4">
					Dzięki kompleksowym <strong>działaniom SEO</strong>, precyzyjnemu <strong>pozycjonowaniu</strong> oraz inteligentnym kampaniom <strong>Google ADS</strong> Twoja obecność online zyska prawdziwą supermoc. A wszystko to podane z odrobiną humoru – bo kto powiedział, że biznes nie może być zabawny?
				</p>
				<ul className="list-disc pl-6 text-xl mb-8">
					<li>
						<strong>Strony internetowe</strong> – kreatywne, responsywne i zoptymalizowane pod SEO.
					</li>
					<li>
						<strong>Sklepy internetowe</strong> – intuicyjne, bezpieczne i gotowe na ogromny ruch.
					</li>
					<li>
						<strong>Dedykowane programowanie</strong> – unikalne rozwiązania dostosowane do Twoich potrzeb.
					</li>
					<li>
						<strong>Szybka strona internetowa</strong> – błyskawiczne ładowanie, które zachwyci Twoich użytkowników.
					</li>
					<li>
						<strong>Działania SEO</strong> i <strong>pozycjonowanie</strong> – podbijamy Google, byś był widoczny dla klientów.
					</li>
					<li>
						<strong>Google ADS</strong> – kampanie reklamowe, które naprawdę działają.
					</li>
				</ul>
				<p className="text-xl mt-4">
					Z nami Twoja obecność w sieci zyska nowy wymiar – gotowy na sukces? Skontaktuj się już dziś i przekonaj, że internet może być zarówno skuteczny, jak i pełen pozytywnej energii!
				</p>
			</section>

			<section className="p-4 md:p-12 m-2 md:m-8 background-top">
				<h2 className="text-3xl font-bold mb-4">Najświeższa realizacja:</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					<img src={PortfolioImg1} alt="Realizacja strony internetowej 1" className="w-full h-auto" />
					<img src={PortfolioImg4} alt="Realizacja strony internetowej 4" className="w-full h-auto" />
					<img src={PortfolioImg3} alt="Realizacja strony internetowej 3" className="w-full h-auto" />
					<img src={PortfolioImg2} alt="Realizacja strony internetowej 2" className="w-full h-auto" />
				</div>
				<div className='flex place-content-end'>
					<a href='https://lesna-perla.pl' target='_blank' rel='noreferrer, noopener' className='hover:scale-105 hover:shadow-2xl'>
					<span className='bg-[var(--color-accent-primary)] px-3 py-2 rounded-lg text-[var(--color-secondary)]'>
						Leśna Perła - Radlin
					</span>
					</a>
				</div>
			</section>

			<section className="p-4 md:p-12 m-2 md:m-8 background-top">
				<h2 className="text-3xl font-bold mb-4">Nasz produkt:</h2>
				{_homeContents_ImageBox_Profelio.map((item, index) => (
					<ImageTextSpecial
						key={index}
						heading={item.heading}
						imgsrc={item.imgsrc}
						content={item.content}
						labels={item.labels}
					/>
				))}
			</section>
			<section className="p-4 md:p-12 m-2 md:m-8 background-top">
				<h2 className="text-3xl font-bold mb-4">Zaufali nam</h2>
				<div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
					<img src={Trusted1} alt="Logo klienta 1" className="w-full h-auto" />
					<img src={Trusted2} alt="Logo klienta 2" className="w-full h-auto" />
					<img src={Trusted3} alt="Logo klienta 3" className="w-full h-auto" />
					<img src={Trusted4} alt="Logo klienta 4" className="w-full h-auto" />
					<img src={Trusted5} alt="Logo klienta 5" className="w-full h-auto" />
					<img src={Trusted6} alt="Logo klienta 6" className="w-full h-auto" />
					<img src={Trusted7} alt="Logo klienta 7" className="w-full h-auto" />
					<img src={Trusted8} alt="Logo klienta 8" className="w-full h-auto" />
				</div>
			</section>
		</>
	);
};

export default SolutionsPage;
