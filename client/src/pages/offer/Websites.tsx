import ImageIdeaToWebsite from '../../assets/banners/idea-to-website-miluconnect.png';
import IconDedicatedSolutions from '../../assets/icon-dedicated-miluconnect.webp';
import Layout from '../../components/Layout/Layout';
import MetaTags from '../../components/MetaTags/MetaTags';
import PageTitle from '../../components/PageTitle/PageTitle';

const Websites = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - Sklepy internetowe Żory'
        description='Poznaj nasze dedykowane rozwiązania IT: systemy zarządzania produkcją, zasobami oraz interaktywne gry i aplikacje.'
        />
      <PageTitle img={IconDedicatedSolutions}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; Tworzymy <span className='text-gradient'>strony internetowe</span>
          <br />
        </h1>
      </PageTitle>
      <Layout variants={'sidenavRight'}>
          <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
            <div className="category-boxes_webpages flex flex-col gap-4">
              <p className="text-xl!">
                <span className='text-4xl block'>Czytelna i funkcjonalna strona <strong>WWW</strong></span> stanowi kluczowy element skutecznego marketingu online. Ta <span className="uppercase">strona internetowa</span> pełni rolę Twojej siedziby w sieci, gdzie intuicyjna nawigacja, starannie dobrana kolorystyka oraz szybkie ładowanie wpływają na pozytywne doświadczenia użytkowników i wspierają SEO. <u>Przemyślana architektura informacji</u> oraz intuicyjne formularze kontaktowe zwiększają zaangażowanie odwiedzających, budując trwałe relacje i przekładając się na lepsze <span className='text-[var(--gradient-light-color-mid)]'>wyniki biznesowe.</span>
              </p>

              <img src={ImageIdeaToWebsite} className='p-2 place-self-center mb-8'/>
              <p>
                Profesjonalna <span className="uppercase font-bold">strona internetowa WWW</span> to fundament <span className="uppercase font-bold">skutecznego marketingu</span> online. Twoja witryna to nie tylko wizytówka firmy – to narzędzie, które buduje zaufanie, <span className="font-bold text-[var(--color-accent-primary)]">zwiększa widoczność</span> w wyszukiwarkach i napędza sprzedaż. Dzięki nowoczesnemu web designowi, responsywności, szybkiemu ładowaniu oraz <a className="font-medium" href="/seo-i-google-ads">optymalizacji SEO</a> Twoja strona zyskuje przewagę nad konkurencją.
              </p>

              <section>
                <h2>Najważniejsze cechy witryny zoptymalizowanej pod SEO</h2>
                <ul className='mt-2 flex flex-col gap-2'>
                  <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Responsywność:</span> Adaptacja strony do <span className="uppercase font-bold ">urządzeń mobilnych</span>, co zwiększa komfort użytkowania i poprawia pozycjonowanie w wyszukiwarkach.
                  </li>
                  <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Szybkość:</span> Usprawnienie ładowania poprzez optymalizację obrazów, kodu i serwera, skracając czas oczekiwania i obniżając wskaźnik odrzuceń.
                  </li>
                  <li>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Unikalna treść:</span> Oryginalne i wartościowe materiały, bogate w słowa kluczowe, które przyciągają nowych użytkowników.
                  </li>
                  <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Intuicyjna nawigacja:</span>  Przejrzysta struktura umożliwiająca łatwe poruszanie się po stronie, co zachęca odwiedzających do dłuższego przebywania.
                  </li>
                  <li>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Optymalizacja:</span> Używamy nowoczesnych technologii, takich jak HTML5, CSS3 i JavaScript, co gwarantuje efektywną indeksację oraz <span className="uppercase font-bold">pełną kompatybilność</span> z przeglądarkami.
                  </li>
                </ul>
              </section>

              <p>
                Nasze realizacje internetowe powstają z myślą o mobilności – dziś większość użytkowników korzysta z urządzeń mobilnych. Niezależnie czy potrzebujesz prostej strony portfolio, czy rozbudowanej platformy e-commerce, tworzymy witryny, które wiernie oddają charakter Twojej marki i skutecznie zachęcają odwiedzających do działania.
              </p>
            </div>
            <div className='my-8 border-t-2 pt-8 border-[var(--color-accent-secondary)]'>
              <p>Wiedząc to - spróbuj wycenić swój pomysł!</p>
              
            </div>
          </section>
      </Layout>
    </>

    
  )
}

export default Websites