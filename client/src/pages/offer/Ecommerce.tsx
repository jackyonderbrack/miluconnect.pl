import ImageIdeaToEcommerce from '../../assets/banners/idea-to-website-miluconnect.png'
import IconEcommerce from '../../assets/icon-webshop-miluconnect.png'
import Layout from '../../components/Layout/Layout'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageTitle from '../../components/PageTitle/PageTitle'
import { _integrationsContents } from '../../consts/home.consts'

const Ecommerce = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - E-commerce Żory'
        description='Poznaj nowoczesne rozwiązania e-commerce: sklep internetowy szyty na miarę, wspierający SEO i zapewniający skuteczną sprzedaż online.'
      />
      <PageTitle img={IconEcommerce}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; Tworzymy <span className='text-gradient'>e-commerce</span>
          <br />
        </h1>
      </PageTitle>
      <Layout variants={'sidenavRight'}>
        <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
          <div className="category-boxes_webpages flex flex-col gap-4">
            <p className="text-xl!">
              <span className='text-3xl block'>Profesjonalny <strong>sklep internetowy</strong> </span>to podstawa sprzedaży w sieci. Dobrze zaprojektowana <span className="uppercase">platforma eCommerce</span> pozwala na łatwe zarządzanie produktami, zamówieniami oraz płatnościami, przyczyniając się do zwiększenia <span className='text-[var(--gradient-light-color-mid)]'>wyników sprzedażowych</span>. <u>Przemyślana architektura kategorii i podkategorii</u>, a także spójna identyfikacja wizualna, sprawiają, że klienci chętniej kupują i wracają do sklepu.
            </p>

            <img src={ImageIdeaToEcommerce} className='p-2 place-self-center mb-8' alt='MiluConnect E-commerce' />
            
            <p>
              Starannie przygotowany <span className="uppercase font-bold">sklep internetowy eCommerce</span> to znacznie więcej niż oferta produktowa – to Twoja wizytówka w świecie online, która buduje wiarygodność marki i napędza konwersję. Dzięki responsywności, szybkiej obsłudze zamówień oraz <a className="font-medium" href="/pozycjonowanie-i-google-ads">optymalizacji SEO</a>, Twój sklep będzie się wyświetlał wyżej w wynikach wyszukiwania, docierając do większej grupy odbiorców.
            </p>

            <section>
              <h2>Najważniejsze cechy sklepu eCommerce zoptymalizowanego pod SEO</h2>
              <ul className='mt-2 flex flex-col gap-2'>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Responsywność:</span> Dostosowanie sklepu do <span className="uppercase font-bold ">urządzeń mobilnych</span>, co poprawia wrażenia kupujących i zwiększa widoczność w Google.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Szybkość:</span> Odpowiednia optymalizacja obrazów, kodu oraz serwera, by maksymalnie skrócić czas ładowania strony i ułatwić zakupy.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Unikalna treść:</span> Opisy produktów bogate w słowa kluczowe, które zachęcają do zakupu i przyciągają nowych klientów.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Przyjazna nawigacja:</span> Intuicyjna struktura kategorii oraz prosty proces składania zamówienia, który zwiększa satysfakcję kupujących.
                </li>
                <li>
                  <span className='text-[var(--gradient-light-color-mid)]'>• Optymalizacja:</span> Zastosowanie standardów HTML5, CSS3 i JavaScript, aby uzyskać <span className="uppercase font-bold">pełną kompatybilność</span> z przeglądarkami oraz wsparcie dla systemów płatności.
                </li>
              </ul>
            </section>

            <p>
              W naszych realizacjach stawiamy na dopasowanie do potrzeb klienta – niezależnie czy sprzedajesz produkty cyfrowe, czy fizyczne. Wygodny panel administracyjny, integracje z systemami płatności oraz narzędzia analityczne sprawiają, że zarządzanie sklepem jest szybkie i efektywne. Wszystko po to, byś mógł skupić się na rozwoju swojego biznesu online.
            </p>
          </div>
          <div className='my-8 border-t-2 pt-8 border-[var(--color-accent-secondary)]'>
            <div className="flex flex-col items-start mb-12">
                <h3>Tworzymy integracje do:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-8">
                {_integrationsContents.map((integration, index) => (
                    <img
                    key={index}
                    src={integration.url}
                    alt={integration.alt}
                    className="p-2"
                    />
                ))}
                </div>
            </div>
            <p>Wiedząc to - spróbuj wycenić swoją platformę eCommerce!</p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Ecommerce
