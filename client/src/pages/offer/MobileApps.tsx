import ImageMobileApps from '../../assets/banners/idea-to-website-miluconnect.png'
import IconMobileApps from '../../assets/icon-idea-miluconnect.webp'
import Layout from '../../components/Layout/Layout'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageTitle from '../../components/PageTitle/PageTitle'
import { AiFillAndroid, AiFillApple } from 'react-icons/ai'
import { FaReact, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { SiKotlin, SiFlutter } from 'react-icons/si'

const MobileApps = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - Aplikacje mobilne'
        description='Tworzymy nowoczesne aplikacje w Kotlinie, Flutterze, React Native i innych technologiach. Działamy na Android, iOS oraz wieloplatformowo.'
      />
      <PageTitle img={IconMobileApps}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; <span className='text-gradient'>Aplikacje Mobilne</span>
          <br />
        </h1>
      </PageTitle>

      <Layout variants={'sidenavRight'}>
        {/* Sekcja wprowadzająca */}
        <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
          <div className="category-boxes_webpages flex flex-col gap-4">
            <p className="text-xl! relative">
              <span className='text-3xl block'>
                <strong>Nowoczesne, wydajne i zaprojektowane z myślą o użytkownikach</strong>
              </span>
              Tworzymy aplikacje mobilne, które <span className="text-[var(--gradient-light-color-mid)]">przyciągają uwagę</span>, 
              świetnie wyglądają i płynnie działają – niezależnie czy używasz <strong>Androida</strong> czy <strong>iOS</strong>.
              Wykorzystujemy najnowsze technologie, takie jak <u>Kotlin, Flutter, React Native</u>, 
              aby dostarczyć rozwiązania dostosowane do Twoich potrzeb biznesowych.
            </p>

            <img
              src={ImageMobileApps}
              className='p-2 place-self-center mb-8 transition-transform duration-300 hover:scale-105'
              alt='MiluConnect - Aplikacje Mobilne'
            />

            <p>
              Zależy Ci na <strong>multiplatformowości</strong>? Nie ma problemu. 
              Oprócz natywnych rozwiązań, tworzymy aplikacje hybrydowe i 
              wieloplatformowe, które zadziałają nie tylko na telefonach, 
              ale też na tabletach, desktopach i innych urządzeniach. 
              Stawiamy na <span className="text-[var(--gradient-light-color-mid)]">spójność projektu</span> 
              w każdym środowisku, aby Twoi klienci czuli się jak w domu, 
              gdziekolwiek uruchomią Twoją aplikację.
            </p>
          </div>

          {/* Sekcja z technologiami */}
          <section className="my-12 px-2 md:px-8 py-8 border-t-2 border-[var(--color-accent-secondary)]">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6">
              <FaLaptopCode size={24} className="text-[var(--gradient-light-color-mid)] animate-bounce" />
              Technologie, na których możesz polegać
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="flex flex-col items-center gap-2 hover:animate-pulse">
                <SiKotlin size={36} className="text-[var(--gradient-light-color-mid)]" />
                <p>Kotlin</p>
              </div>
              <div className="flex flex-col items-center gap-2 hover:animate-pulse">
                <SiFlutter size={36} className="text-[var(--gradient-light-color-mid)]" />
                <p>Flutter</p>
              </div>
              <div className="flex flex-col items-center gap-2 hover:animate-pulse">
                <FaReact size={36} className="text-[var(--gradient-light-color-mid)]" />
                <p>React Native</p>
              </div>
              <div className="flex flex-col items-center gap-2 hover:animate-pulse">
                <AiFillAndroid size={36} className="text-[var(--gradient-light-color-mid)]" />
                <p>Android</p>
              </div>
              <div className="flex flex-col items-center gap-2 hover:animate-pulse">
                <AiFillApple size={36} className="text-[var(--gradient-light-color-mid)]" />
                <p>iOS</p>
              </div>
            </div>
            <p className="mt-6 text-sm">
              Nasz zespół stale poszerza horyzonty, 
              dlatego jesteśmy otwarci też na inne nowe technologie i frameworki.
            </p>
          </section>

          {/* Sekcja z atutami i korzyściami */}
          <section className="my-12 px-2 md:px-8 py-8 border-t-2 border-[var(--color-accent-secondary)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
              <FaRocket size={24} className="text-[var(--gradient-light-color-mid)]" />
              Dlaczego warto z nami tworzyć aplikacje?
            </h2>
            <ul className="flex flex-col gap-4 list-disc list-inside">
              <li>
                <strong>UX na pierwszym miejscu:</strong> stawiamy na intuicyjne rozwiązania i prostotę obsługi.
              </li>
              <li>
                <strong>Optymalizacja wydajności:</strong> działamy tak, by Twoja aplikacja była szybka i stabilna,
                nawet przy dużym obciążeniu.
              </li>
              <li>
                <strong>Bezproblemowa integracja:</strong> łączymy się z zewnętrznymi API, 
                systemami płatności i usługami w chmurze.
              </li>
              <li>
                <strong>Indywidualne podejście:</strong> nie używamy gotowców – każdy projekt jest szyty na miarę,
                zgodnie z Twoją wizją.
              </li>
              <li>
                <strong>Wsparcie i rozwój:</strong> po wdrożeniu aplikacji nadal służymy pomocą, 
                aktualizacjami i dalszym rozwojem funkcjonalności.
              </li>
            </ul>
          </section>

          {/* Sekcja z CTA */}
          <section className="my-12 px-2 md:px-8 py-8 border-t-2 border-[var(--color-accent-secondary)] text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Masz pomysł na aplikację? 
            </h3>
            <p className="mb-4">
              Nie ograniczaj się! Z nami nawet najbardziej śmiała wizja 
              stanie się rzeczywistością. 
            </p>
            <p className="text-[var(--color-accent-primary)] font-semibold animate-pulse">
              Sky is <u>not</u> the limit!
            </p>
          </section>
        </section>
      </Layout>
    </>
  )
}

export default MobileApps
