import ImageSeoGoogleAds from '../../assets/banners/idea-to-website-miluconnect.png'
import IconSeoGoogleAds from '../../assets/icon-idea-miluconnect.webp'
import Layout from '../../components/Layout/Layout'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageTitle from '../../components/PageTitle/PageTitle'
import { _seoAndGoogleAdsContents } from '../../consts/seo-and-google-ads'

const SeoAndGoogleAds = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - Pozycjonowanie i Google Ads'
        description='Zadbaj o wysoką widoczność w wyszukiwarkach i skuteczne kampanie Google Ads. Zwiększ ruch, generuj wartościowe leady i rozwiń swój biznes online.'
      />
      <PageTitle img={IconSeoGoogleAds}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; Pozycjonowanie &amp; <span className='text-gradient'>Google Ads</span>
          <br />
        </h1>
      </PageTitle>
      <Layout variants={'sidenavRight'}>
        <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
          <div className="category-boxes_webpages flex flex-col gap-4">
            <p className="text-xl!">
              <span className='text-3xl block'>Rozwój biznesu online zaczyna się od <strong>pozycjonowania</strong> </span>
              w wyszukiwarkach, dzięki któremu klienci bez trudu trafią na Twoją 
              ofertę. Właściwie dobrana strategia SEO nie tylko poprawia widoczność 
              strony, ale także zwiększa <span className='text-[var(--gradient-light-color-mid)]'>zaufanie do marki</span>. 
              Natomiast <u>skuteczne kampanie Google Ads</u> pozwalają dotrzeć do 
              konkretnych grup odbiorców i szybko podnieść poziom sprzedaży.
            </p>

            <img
              src={ImageSeoGoogleAds}
              className='p-2 place-self-center mb-8'
              alt='MiluConnect Pozycjonowanie i Google Ads'
            />

            <p>
              W <span className="uppercase font-bold">MILU Connect</span> 
              stawiamy na naturalny, przyjazny odbiór oferty związanej z SEO 
              i Google Ads. Łączymy optymalizację strony – od kodu po treści – 
              z dopracowanymi reklamami w sieci wyszukiwania, aby dotrzeć dokładnie 
              tam, gdzie są Twoi klienci. Dzięki ciągłej analizie i monitorowaniu 
              wyników możemy precyzyjnie dostosowywać kampanie do potrzeb rynku 
              i Twojej branży.
            </p>

            <section>
              <h2>Co zyskujesz dzięki pozycjonowaniu i Google Ads?</h2>
              <ul className='mt-2 flex flex-col gap-2'>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Lepsza widoczność w sieci:</span> 
                  Twoja strona częściej pojawia się w wynikach wyszukiwania, zwiększając szansę na dotarcie do nowych klientów.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Precyzyjne targetowanie reklam:</span>
                  Google Ads umożliwia ustawienie reklam tak, by dotrzeć do osób 
                  zainteresowanych Twoją ofertą, co optymalizuje koszty i przyspiesza zwrot z inwestycji.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Wiarygodność marki:</span>
                  Strona plasująca się wyżej w wynikach wyszukiwania jest częściej 
                  postrzegana jako bardziej godna zaufania.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Stały napływ ruchu:</span>
                  Odpowiednio zoptymalizowane treści i kampanie reklamowe generują 
                  trwały strumień odwiedzin, co przekłada się na sprzedaż.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Analiza danych i optymalizacja:</span>
                  Dzięki raportom Google Ads i narzędziom do analizy SEO wiesz, 
                  które działania przynoszą najlepsze efekty i co należy ulepszyć.
                </li>
              </ul>
            </section>

            <p>
              Zadbaj o długofalowy rozwój swojej firmy w Internecie – 
              profesjonalne pozycjonowanie zwiększy zasięg Twojej witryny, 
              a odpowiednio poprowadzone kampanie Google Ads pomogą w szybkim 
              dotarciu do potencjalnych klientów. Postaw na
              <strong> trwałe efekty </strong> i rosnącą rozpoznawalność 
              Twojej marki w sieci.
            </p>
          </div>

          {/* Sekcja przyciągająca wzrok – prezentacja osiągnięć */}
          <section className='my-12 py-8 px-4 md:px-8 border-t-2 border-[var(--color-accent-secondary)]'>
            <h3 className='text-2xl md:text-3xl font-bold mb-6'>
              Nasze osiągnięcia w liczbach
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-[var(--color-bg-secondary)] p-6 rounded-md flex flex-col items-center justify-center shadow-lg'>
                <span className='text-4xl font-bold text-[var(--color-accent-primary)]'>+300%</span>
                <p className='mt-2 text-center'>Wzrost ruchu organicznego <br/>u naszych klientów*</p>
              </div>
              <div className='bg-[var(--color-bg-secondary)] p-6 rounded-md flex flex-col items-center justify-center shadow-lg'>
                <span className='text-4xl font-bold text-[var(--color-accent-primary)]'>1,2 s</span>
                <p className='mt-2 text-center'>Średni czas ładowania <br/>zoptymalizowanych stron*</p>
              </div>
              <div className='bg-[var(--color-bg-secondary)] p-6 rounded-md flex flex-col items-center justify-center shadow-lg'>
                <span className='text-4xl font-bold text-[var(--color-accent-primary)]'>95%</span>
                <p className='mt-2 text-center'>Pozytywnych opinii <br/>wśród naszych klientów*</p>
              </div>
            </div>
            <p className='text-sm mt-4 italic'>
              *Dane szacunkowe na podstawie wybranych projektów z ostatnich 12 miesięcy.
            </p>
          </section>
          {/* Koniec sekcji przyciągającej wzrok */}

          <div className='my-8 border-t-2 pt-8 border-[var(--color-accent-secondary)]'>
            <p>
              Zapraszamy do kontaktu – wspólnie przeanalizujemy Twoje potrzeby i 
              ustalimy optymalną strategię online.
            </p>
          </div>
          <section className='py-8 background-top flex flex-col align-center text-center justify-center'>
            <h2 className='text-gradient'>Pomogliśmy zwiększyć zasięgi np:</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 justify-center mt-8">
              {_seoAndGoogleAdsContents.map((integration, index) => (
                <img
                key={index}
                src={integration.url}
                alt={integration.alt}
                className="p-2"
                />
              ))}
              </div>
          </section>
        </section>
        
      </Layout>
    </>
  )
}

export default SeoAndGoogleAds
