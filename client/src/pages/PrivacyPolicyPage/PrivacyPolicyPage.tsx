import Button from '../../components/Button/Button';
import EarthImg from '../../assets/background-earth-01-miluconnect.webp';
import Header from '../../components/Header/Header';

const PrivacyPolicyPage = () => {
	return (
		<>
			<Header
				content={
					<div>
						<h1>
							Polityka <br />
							<span className='text-gradient'>prywatności</span>
						</h1>
					</div>
				}
				imgUrl={EarthImg}
				align='start'
			/>
			<section className='content background-top px-2 py-2'>
				<h4>Wstęp</h4>
				<p>
					Niniejsza polityka prywatności opisuje, w jaki sposób miluConnect gromadzi,
					wykorzystuje i chroni Twoje dane osobowe, które nam przekazujesz podczas
					korzystania z naszej strony internetowej <a href='https://miluconnect.pl'>miluconnect.pl</a>.
				</p>

				<h4>Gromadzenie danych</h4>
				<p>
					Gromadzimy różne rodzaje informacji, w tym: - Dane osobowe, które
					dobrowolnie przekazujesz nam podczas rejestracji, wypełniania formularzy
					kontaktowych lub dokonywania zakupów. - Dane techniczne, takie jak adres
					IP, typ przeglądarki, wersja systemu operacyjnego i inne informacje
					dotyczące urządzenia, z którego korzystasz, aby uzyskać dostęp do naszej
					strony. - Informacje o aktywności na naszej stronie internetowej, w tym
					odwiedzone strony, czas spędzony na stronie oraz inne dane analityczne.
				</p>

				<h4>Wykorzystywanie danych</h4>
				<p>
					Wykorzystujemy zgromadzone dane do następujących celów: - Zapewnienie i
					poprawa funkcjonalności naszej strony internetowej. - Realizacja zamówień i
					świadczenie usług. - Kontaktowanie się z Tobą w celach marketingowych i
					informacyjnych, jeżeli wyraziłeś na to zgodę. - Analizowanie ruchu na
					stronie i zachowań użytkowników w celu ulepszania naszych usług.
				</p>

				<h4>Udostępnianie danych</h4>
				<p>
					Nie sprzedajemy, nie wymieniamy ani nie przekazujemy Twoich danych
					osobowych stronom trzecim bez Twojej zgody, z wyjątkiem sytuacji, w których
					jest to niezbędne do świadczenia usług (np. przekazanie danych firmie
					kurierskiej) lub jest wymagane przez prawo.
				</p>

				<h4>Pliki cookie</h4>
				<p>
					Nasza strona wykorzystuje pliki cookie w celu poprawy komfortu użytkowania
					i analizowania ruchu na stronie. Pliki cookie są małymi plikami tekstowymi
					przechowywanymi na Twoim urządzeniu. Możesz zarządzać plikami cookie za
					pomocą ustawień swojej przeglądarki.
				</p>

				<h4>Bezpieczeństwo danych</h4>
				<p>
					Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje
					dane osobowe przed nieautoryzowanym dostępem, utratą, zmianą czy
					zniszczeniem.
				</p>

				<h4>Twoje prawa</h4>
				<p>
					Masz prawo do: - Dostępu do swoich danych osobowych. - Poprawiania swoich
					danych osobowych. - Żądania usunięcia swoich danych osobowych. -
					Ograniczenia przetwarzania swoich danych osobowych. - Wniesienia sprzeciwu
					wobec przetwarzania swoich danych osobowych. - Przenoszenia swoich danych
					osobowych.
				</p>
				<p>
					W celu skorzystania z tych praw prosimy o kontakt z nami pod adresem email:
					<a href='mailto:kontakt@miluconnect.pl'>kontakt@miluconnect.pl</a>.
				</p>

				<h4>Zmiany w polityce prywatności</h4>
				<p>
					Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce
					prywatności. Wszelkie zmiany będą publikowane na tej stronie. Zalecamy
					regularne przeglądanie naszej polityki prywatności, aby być na bieżąco z
					naszymi praktykami dotyczącymi ochrony danych.
				</p>

				<h4>Kontakt</h4>
				<p>
					Jeśli masz jakiekolwiek pytania dotyczące niniejszej polityki prywatności,
					prosimy o kontakt z nami pod adresem email: <a href='mailto:kontakt@miluconnect.pl'>kontakt@miluconnect.pl</a>.
				</p>
				<div className='my-4'>
					<Button
						linkTo='/'
						buttonText='Wróć do Strony głównej'
						theme='btn-primary'
					/>
				</div>
			</section>
		</>
	);
};

export default PrivacyPolicyPage;
