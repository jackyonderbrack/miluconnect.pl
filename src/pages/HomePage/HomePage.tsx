// Styles
import "./HomePage.css";
// Icons
import IconDedidcatedSolutions from "../../assets/icon-dedicated-miluconnect.png";
import IconMobileApps from "../../assets/icon-mobileapps-miluconnect.png";
import IconSpectialistTeam from "../../assets/icon-webspecialists-miluconnect.png";
import IconPartnership from "../../assets/icon-partnership-miluconnect.png";
// Banners
import EarthImg from "../../assets/background-earth-01-miluconnect.webp";

// Clients
import Partner1 from "../../assets/partners/partner-artmageddon-miluconnect.png";
import Partner2 from "../../assets/partners/partner-gentlemanshop-miluconnect.png";
import Partner3 from "../../assets/partners/partner-holisticspa-miluconnect.png";
import Partner4 from "../../assets/partners/partner-lesnaperla-miluconnect.png";
import Partner5 from "../../assets/partners/partner-mensworldbarbershop-miluconnect.png";
import Partner6 from "../../assets/partners/partner-metkom-miluconnect.png";
import Partner7 from "../../assets/partners/partner-natarasie-miluconnect.png";
import Partner8 from "../../assets/partners/partner-vending4all-miluconnect.png";

// Components
import ImageBox from "../../components/ImageBox/ImageBox";
import Title from "../../components/Title/Title";
import ImagesRow from "../../components/ImageRow/ImageRow";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

// Images
import PortfolioSkinsnImg from "../../assets/portfolio/07_miluconnect-skinsn-plock-rybnik-strony.png";
import PortfolioRestauracjaLesnaPerlaImg from "../../assets/portfolio/03_miluconnect-lesnaperla-strony-rybnik-radlin.png";
import PorftolioNatarasieImg from "../../assets/portfolio/05_miluconnect-natarasie-strony-rybnik-zory.png";
import PortfolioVending4AllImg from "../../assets/portfolio/10_miluconnect-vending-strony-rybnik-zory.png";
import PortfolioMensworldImg from "../../assets/portfolio/04_miluconnect-mensworld-barbershop-strony-rybnik.png";
import PortfolioMetkomImg from "../../assets/portfolio/06_miluconnect-metkom-zory-cieszyn-strony-internetowe.png";
import PortfolioArtmageddonImg from "../../assets/portfolio/01_miluconnect-atrmageddon-strony-rybnik.png";
import PortfolioHolisticSpaImg from "../../assets/portfolio/08_miluconnect-holisticspa-spaslask-strony-rybnik-czerwionka-salon.png";
import PortfolioGentlemanshopImg from "../../assets/portfolio/02_miluconnect-gentlemanshop-strony-rybnik.png"
import PortfolioStolarniaprecyzjaImg from "../../assets/portfolio/09_miluconnect-stolarniaprecyzja-spaslask-strony-rybnik-czerwionka-biznes.png"
import MetaTags from "../../components/MetaTags/MetaTags";

const HomePage = () => {
  const _homeContents_ImageBox = [
    {
      imgsrc: IconDedidcatedSolutions,
      heading: "Dedykowane rozwiązania",
      content:
        "Strony internetowe, sklepy oraz wszystko co związane z siecią. Mamy doświadczenie w tworzeniu systemów zarządzania produkcją, zasobami, ale również interaktywnych gier, programów i sieci. Nasze rozwiązania są dostosowane do specyficznych potrzeb klienta, zapewniając elastyczność, skalowalność i integrację z istniejącymi systemami.",
    },
    {
      imgsrc: IconMobileApps,
      heading: "Aplikacje mobilne",
      content:
        "Projektujemy zaawansowane aplikacje mobilne dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod, a także stabilną działalność. Nasze aplikacje są zoptymalizowane pod kątem wydajności i bezpieczeństwa, co gwarantuje doskonałe wrażenia użytkownika.",
    },
    {
      imgsrc: IconPartnership,
      heading: "Partnerstwo technologiczne",
      content:
        "Dostarczamy wszechstronne konsultacje w dziedzinie technologii IT. Naszym celem jest osiągnięcie wyznaczonych rezultatów w ścisłej współpracy z naszymi klientami. Oferujemy wsparcie na każdym etapie projektu, od planowania, przez wdrożenie, aż po utrzymanie i rozwój.",
    },
    {
      imgsrc: IconSpectialistTeam,
      heading: "Kadra specjalistyczna",
      content:
        "Nasza kadra to zespół wysoko wykwalifikowanych specjalistów, którzy projektują zaawansowane rozwiązania dla systemów iOS i Android. Zapewniamy intuicyjny interfejs użytkownika, niezawodny i bezpieczny kod oraz stabilną działalność aplikacji. Dzięki naszym ekspertom, możemy sprostać najbardziej wymagającym projektom.",
    },
  ];

  return (
    <>
      <MetaTags
        title="MILU Connect"
        description="Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu. Katowice, Rybnik, Żory, Mikołów, Śląsk"
      />
      <Header
        content={
          <div>
            <h1>
              Potrzebujesz nowego rozwiązania? <br />
              Twoja <span className="text-gradient">strona internetowa</span>
              <br />
              pozyska klientów dla ciebie
            </h1>
          </div>
        }
        imgUrl={EarthImg}
      />
      <section
        id="CategoryBoxes"
        className="grid grid-cols-4 gap-1">
        {_homeContents_ImageBox.map((item, index) => (
          <ImageBox
            key={index}
            heading={item.heading}
            imgsrc={item.imgsrc}
            content={item.content}
          />
        ))}
      </section>
      <section className="background-top my-3 py-4">
        <div className="flex flex-col justify-content-center align-items-center">
          <h2>
            Sprawdź niektóre nasze <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-align-center container">
            Wszystkie nasze realizacje są <strong>realnymi</strong> projektami, którymi klienci się cieszą, zarządzają i
            wykorzystują w swoim biznesie, chwaląc sie zaś swoim potencjalnym klientom. Mimo tego, że każdy projekt
            zakładał inny scenariusz, wszystkie są
            <strong> responsywne i dostosowane</strong> do warunków dzisiejszego Web-view.
          </p>
          <h3>Wybierz i zobacz nasze projekty na żywo</h3>
        </div>
        <div className="p-4 pt-4 flex flex-1 flex-wrap justify-center gap-4">
          <Card
            title="SKIN Simply Nutrition"
            description="SKLEP I KOSMETOLOGIA"
            imageUrl={PortfolioSkinsnImg}
            buttonLink="https://skinsn.eu"
          />
          <Card
            title="Stolarnia Precyzja"
            description="WITRYNA BIZNESOWA"
            imageUrl={PortfolioStolarniaprecyzjaImg}
            buttonLink="https://stolarniaprecyzja.pl"
          />
          <Card
            title="Gentleman Shop"
            description="SKLEP BRANŻOWY"
            imageUrl={PortfolioGentlemanshopImg}
            buttonLink="https://gentlemanshop.com.pl"
          />
          <Card
            title="Leśna Perła"
            description="DOM PRZYJĘĆ"
            imageUrl={PortfolioRestauracjaLesnaPerlaImg}
            buttonLink="https://lesna-perla.pl"
          />
          <Card
            title="Na Tarasie"
            description="BRANŻA OGRODNICZA"
            imageUrl={PorftolioNatarasieImg}
            buttonLink="https://natarasie.eu"
          />
          <Card
            title="Vending 4 All"
            description="WIZYTÓWKA PRODUCENTA"
            imageUrl={PortfolioVending4AllImg}
            buttonLink="https://vending4all.eu"
          />
          <Card
            title="Men’s World"
            description="WITRYNA I SKLEP"
            imageUrl={PortfolioMensworldImg}
            buttonLink="http://mensworldbarbershop.pl"
          />
          <Card
            title="Metkom"
            description="STRONA, BLOG, KATALOG"
            imageUrl={PortfolioMetkomImg}
            buttonLink="https://metkom.com.pl"
          />
          <Card
            title="Artmageddon"
            description="WIZYTÓWKA STUDIA TATUAŻU"
            imageUrl={PortfolioArtmageddonImg}
            buttonLink="https://artmageddon.pl"
          />
          <Card
            title="Holistic Spa"
            description="GABINET SPECJALISTYCZNY"
            imageUrl={PortfolioHolisticSpaImg}
            buttonLink="https://spaslask.pl"
          />
        </div>
      </section>

      <section className="background-top pt-2 pb-6">
        <div className="flex flex-col align-items-center pb-6">
          <Title
            gradientHeader="Nasi klienci"
            leadHeader={null}
            leadParagraph={
              <div>
                <h2>Dołącz i ciesz się rozwijającym się biznesem</h2>
                <p>Zaufali nam m.in:</p>
              </div>
            }
          />
          <ImagesRow imageUrls={[Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8]} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
