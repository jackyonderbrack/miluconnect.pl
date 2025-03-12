import ImageDomainsHosting from '../../assets/banners/idea-to-website-miluconnect.png'
import IconDomainsHosting from '../../assets/icon-webshop-miluconnect.png'
import Layout from '../../components/Layout/Layout'
import MetaTags from '../../components/MetaTags/MetaTags'
import PageTitle from '../../components/PageTitle/PageTitle'

// Ikony z react-icons
import { FaServer, FaGlobe, FaShieldAlt } from 'react-icons/fa'
import { MdBackup, MdEmail } from 'react-icons/md'
import { BsGear } from 'react-icons/bs'
import { _technologyContents } from '../../consts/home.consts'

const DomainsAndHosting = () => {
  return (
    <>
      <MetaTags
        title='MILU Connect - Domeny i hosting'
        description='Kompleksowe usługi w zakresie zakupu i utrzymania domen, hostingu, skrzynek mailowych, migracji i backupów. Wszystko, czego potrzebujesz do sprawnego działania swojej strony.'
      />
      <PageTitle img={IconDomainsHosting}>
        <h1 className='text-4xl! md:text-5xl! lg:text-6xl!'>
          &gt; <span className='text-gradient'>Domeny i Hosting</span>
          <br />
        </h1>
      </PageTitle>
      <Layout variants={'sidenavRight'}>
        <section className="flex-3 background-top py-3 px-2 md:p-4 lg:p-8 ml-0 md:ml-4 lg:ml-8">
            <div className="category-boxes_webpages flex flex-col gap-4">
                <p className="text-xl! relative">
                <span className='text-3xl block'>
                    <strong>Zadbaj o stabilne fundamenty</strong> swojej obecności w sieci.
                </span>
                W MILU Connect oferujemy pełną obsługę w zakresie <u>domen</u> i <u>hostingu</u> – od zakupu i konfiguracji,
                aż po bieżące utrzymanie. Rozumiemy, jak istotna jest <strong>niezawodność</strong> środowiska serwerowego
                dla Twojej strony, sklepu internetowego czy aplikacji online.
                </p>

                <img
                src={ImageDomainsHosting}
                className='p-2 place-self-center mb-8 transition-transform duration-300 hover:scale-105'
                alt='MiluConnect - Domeny i Hosting'
                />

                <p>
                Bez względu na to, czy potrzebujesz prostego hostingu współdzielonego, czy <strong>dedykowanego serwera</strong> 
                ze specjalistycznym oprogramowaniem, możesz liczyć na nasze wsparcie i doradztwo. Zajmujemy się również
                <span className="text-[var(--gradient-light-color-mid)]"> migracją danych</span>, konfiguracją skrzynek mailowych
                i regularnymi <u>backupami</u>, aby Twoje pliki oraz poczta były zawsze bezpieczne i łatwo dostępne.
                </p>

                <section>
                <h2 className='flex items-center gap-2'>
                    <FaGlobe size={24} className='text-[var(--gradient-light-color-mid)] animate-bounce' />
                    <span>Zakres naszych usług:</span>
                </h2>
                <ul className='mt-2 flex flex-col gap-2'>
                    <li className='flex items-start gap-2'>
                    <BsGear size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Rejestracja domen:</span> 
                        &nbsp;doradzamy przy wyborze rozszerzeń i zajmujemy się formalnościami.
                    </span>
                    </li>
                    <li className='flex items-start gap-2'>
                    <FaServer size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Hosting współdzielony i dedykowany:</span>
                        &nbsp;dobieramy parametry do potrzeb Twojego projektu.
                    </span>
                    </li>
                    <li className='flex items-start gap-2'>
                    <MdEmail size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Skrzynki mailowe:</span>
                        &nbsp;konfigurujemy pocztę firmową z zabezpieczeniami antyspamowymi.
                    </span>
                    </li>
                    <li className='flex items-start gap-2'>
                    <MdBackup size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Migracje i backupy:</span>
                        &nbsp;przenosimy istniejące strony na nowe serwery i zapewniamy cykliczne kopie zapasowe.
                    </span>
                    </li>
                    <li className='flex items-start gap-2'>
                    <FaShieldAlt size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Zabezpieczenia i certyfikaty SSL:</span>
                        &nbsp;chronimy Twoją stronę przed atakami i dbamy o szyfrowanie danych użytkowników.
                    </span>
                    </li>
                    <li className='flex items-start gap-2'>
                    <BsGear size={20} className='text-[var(--gradient-light-color-mid)] mt-1' />
                    <span>
                        <span className='text-[var(--gradient-light-color-mid)]'>• Monitoring i wsparcie techniczne:</span>
                        &nbsp;nadzorujemy pracę serwerów i szybko reagujemy na zgłoszenia.
                    </span>
                    </li>
                </ul>
                </section>

                <p>
                Naszym celem jest zapewnienie <strong>bezproblemowego działania</strong> Twoich usług online. 
                Dzięki stałemu wsparciu specjalistów oraz regularnym aktualizacjom i kontrolom, nie musisz
                martwić się o utratę danych czy nieoczekiwane przerwy w dostępie.
                </p>
                <div className="flex flex-col items-start">
                    <h3>Technologia, na której się znamy:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mt-8">
                        {_technologyContents.map((technology, index) => (
                            <img
                            key={index}
                            src={technology.url}
                            alt={technology.alt}
                            className="p-2"
                            />
                        ))}
                    </div>
                </div>
            </div>
          <div className='my-8 border-t-2 pt-8 border-[var(--color-accent-secondary)] text-center'>
            <p className='text-lg hover:animate-pulse'>
              Gotowy, by usprawnić działanie swojej strony w sieci? 
              <br /> Skontaktuj się z nami i postaw na niezawodne domeny oraz hosting w MILU Connect!
            </p>
          </div>
          
        </section>
      </Layout>
    </>
  )
}

export default DomainsAndHosting
