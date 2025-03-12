import ImageGraphicDesign from '../../assets/banners/idea-to-website-miluconnect.png'
import IconGraphicDesign from '../../assets/icon-web-design-miluconnect.png'
import Layout from '../../components/Layout/Layout'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageTitle from '../../components/PageTitle/PageTitle'

import { HiLightBulb, HiOutlineSparkles } from 'react-icons/hi'
import { AiFillCamera } from 'react-icons/ai'

const GraphicDesign = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - Projektowanie graficzne'
        description='Zaprojektujemy dla Ciebie logo, materiały drukowane, a także zadbamy o spójny wygląd Twoich social mediów. Pomożemy w web designie, makietach, wireframach i nie tylko.'
      />
      <PageTitle img={IconGraphicDesign}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; <span className='text-gradient'>Projektowanie graficzne</span>
          <br />
        </h1>
      </PageTitle>
      <Layout variants={'sidenavRight'}>
        <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
          <div className="category-boxes_webpages flex flex-col gap-4">
            <p className="text-xl!">
            <span className='flex items-center gap-2'>
              <span className='text-[var(--gradient-light-color-mid)]'>
                <HiOutlineSparkles size={32} className='animate-bounce'/>
              </span>

              <span className='text-3xl block'>
                <strong>Wyraź swoją markę</strong> poprzez spójną identyfikację wizualną.
              </span>
            </span>
              W MILU Connect dbamy o każdy aspekt <u>projektowania graficznego</u>, od logotypów i wizytówek, aż po banery i posty
              na Facebooka, Instagrama czy TikToka. Tworzymy profesjonalne materiały marketingowe przy użyciu
              <strong> Photoshopa</strong>, <strong>Illustratora</strong> oraz innych zaawansowanych narzędzi graficznych.
            </p>

            <img
              src={ImageGraphicDesign}
              className='p-2 place-self-center mb-8 transition-transform duration-300 hover:scale-105'
              alt='MiluConnect - Projektowanie graficzne'
            />

            <p>
              Oprócz klasycznych form reklamy, takich jak plakaty czy ulotki, zajmujemy się również
              <strong> web designem</strong> w <strong>Figmie</strong>,
              przygotowując precyzyjne makiety i <strong>wireframy</strong>. 
              Dzięki temu możesz zobaczyć wstępną wizję strony internetowej
              lub aplikacji przed rozpoczęciem kodowania. Stawiamy na 
              <span className="text-[var(--gradient-light-color-mid)]"> spójność stylistyczną</span>
              oraz funkcjonalność, aby każdy projekt wyglądał nowocześnie i budził zaufanie odbiorców.
            </p>
            <section>
              <h2 className='flex items-center gap-2'>
                <HiLightBulb size={28} className='text-[var(--gradient-light-color-mid)]' />
                <span>Najważniejsze obszary naszej pracy w projektowaniu graficznym</span>
              </h2>
              <ul className='mt-2 flex flex-col gap-2'>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Logo i identyfikacja wizualna:</span>
                    &nbsp;od koncepcji po finalne pliki; tworzymy znaki rozpoznawalne na lata.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Materiały drukowane:</span>
                    &nbsp;wizytówki, ulotki, plakaty, katalogi – wszystko zgodne z wizerunkiem Twojej marki.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Grafiki do social mediów:</span>
                    &nbsp;projektujemy posty i reklamy na Facebooka, Instagrama, TikToka i inne kanały.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Banery i reklamy outdoor:</span>
                    &nbsp;wyraziste projekty, które przyciągają wzrok w przestrzeni publicznej.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Web design:</span>
                    &nbsp;praca w Figmie, tworzenie makiet, prototypów i <u>wireframów</u> dla stron i aplikacji.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <AiFillCamera size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                  <span>
                    <span className='text-[var(--gradient-light-color-mid)]'>• Mockupy i wizualizacje:</span>
                    &nbsp;profesjonalna prezentacja projektów, dzięki której łatwiej wyobrazić sobie finalny produkt.
                  </span>
                </li>
              </ul>
            </section>
            <p>
              Naszym priorytetem jest spójność koncepcji oraz <strong>wysoka jakość wykonania</strong>.
              Staramy się, by każdy element graficzny
              komunikował wartości Twojej marki i przykuwał uwagę odbiorców. Działamy kompleksowo, oferując
              zarówno projekty cyfrowe, jak i drukowane, co daje Ci pełne wsparcie w rozwoju wizerunku Twojej firmy.
            </p>
          </div>
          <div className='my-8 border-t-2 pt-8 border-[var(--color-accent-secondary)] text-center'>
            <p className='text-lg animate-pulse'>
              Masz pomysł, który wymaga kreatywnej oprawy graficznej? 
              <br/> Zadzwoń lub napisz, a my przekujemy go w projekt, który olśni Twoich odbiorców!
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default GraphicDesign
