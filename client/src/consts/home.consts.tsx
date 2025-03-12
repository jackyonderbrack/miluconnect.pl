// Icons
import IconBrainstorm from '../assets/icon-brainstorm-miluconnect.png';
import IconDedicatedSolutions from '../assets/icon-dedicated-miluconnect.png';
import IconLongTerm from '../assets/icon-longterm-miluconnect.png';
import IconMobileApps from '../assets/icon-mobileapps-miluconnect.png';
import IconPartnership from '../assets/icon-partnership-miluconnect.png';
import IconSpectialistTeam from '../assets/icon-webspecialists-miluconnect.png';
import IconWebAdjustment from '../assets/icon-webadjustment-miluconnect.png';
import IconEcommerce from '../assets/icon-idea-miluconnect.webp';
import IconWebsite from '../assets/icon-website-miluconnect.png'
import IconGraphicDesign from '../assets/icon-web-design-miluconnect.png'

// Images
import PortfolioRestauracjaLesnaPerlaImg from '../assets/portfolio/03_miluconnect-lesnaperla-strony-rybnik-radlin.png';
import PorftolioNatarasieImg from '../assets/portfolio/05_miluconnect-natarasie-strony-rybnik-zory.png';
import PortfolioMetkomImg from '../assets/portfolio/06_miluconnect-metkom-zory-cieszyn-strony-internetowe.png';
import PortfolioSkinsnImg from '../assets/portfolio/07_miluconnect-skinsn-plock-rybnik-strony.png';
import PortfolioHolisticSpaImg from '../assets/portfolio/08_miluconnect-holisticspa-spaslask-strony-rybnik-czerwionka-salon.png';
import PortfolioStolarniaprecyzjaImg from '../assets/portfolio/09_miluconnect-stolarniaprecyzja-spaslask-strony-rybnik-czerwionka-biznes.png';
import PortfolioVending4AllImg from '../assets/portfolio/10_miluconnect-vending-strony-rybnik-zory.png';
import PortfolioCentrumBagsImg from '../assets/portfolio/11_miluconnect-centrumbags-strony-rybnik-zory.png';
import PortfolioDarelBizPlImg from '../assets/portfolio/miluconnect-darel-strony-internetowe-rybnik-zory.png';

// Clients
import IntegrationAllegro from '../assets/integrations/integrations-allegro-miluconnect.webp';
import IntegrationBaseLinker from '../assets/integrations/integrations-baselinker-light-miluconnect.webp';
import IntegrationCyberFolks from '../assets/integrations/integrations-cyberfolks-light-miluconnect.webp';
import IntegrationInPost from '../assets/integrations/integrations-inpost-light-miluconnect.webp';
import IntegrationPresta from '../assets/integrations/integrations-prestashop-light-miluconnect.webp';
import IntegrationShopGold from '../assets/integrations/integrations-shopgold-light-miluconnect.webp';
import IntegrationWooCommerce from '../assets/integrations/integrations-woocommerce-light-miluconnect.webp';
import IntegrationWordpress from '../assets/integrations/integrations-wordpress-light-miluconnect.webp';

// Technologies
import TechnologyKotlin from '../assets/technologies/integrations-kotlin.webp';
import TechnologyAngular from '../assets/technologies/solutions-agular-miluconnect.webp';
import TechnologyExpress from '../assets/technologies/solutions-expressjs-light-miluconnect.webp';
import TechnologyGolang from '../assets/technologies/solutions-go-miluconnect.webp';
import TechnologyMongodb from '../assets/technologies/solutions-mongodb-light-miluconnect.webp';
import TechnologyNodejs from '../assets/technologies/solutions-nodejs-light-miluconnect.webp';
import TechnologyReactjs from '../assets/technologies/solutions-react-miluconnect.webp';
import TechnologySharepoint from '../assets/technologies/solutions-sharepoint-light-miluconnect.webp';

// Profelio
import ProfelioImg1 from '../assets/portfolio/profelio-miluconnect-image-1.png';
import ProfelioImg2 from '../assets/portfolio/profelio-miluconnect-image-2.png';
import ProfelioImg3 from '../assets/portfolio/profelio-miluconnect-image-3.png';
import ProfelioImg4 from '../assets/portfolio/profelio-miluconnect-image-4.png';
import { BoxProps } from '../components/Box/Box';

// Clients
import Partner3 from '../assets/partners/miluconnect-partner-holisticspa.png';
import Partner1 from '../assets/partners/miluconnect-partner-hurtownia-slonca.png';
import Partner5 from '../assets/partners/partner-darel-miluconnect.png';
import Partner2 from '../assets/partners/partner-gentlemanshop-miluconnect.png';
import Partner4 from '../assets/partners/partner-lesnaperla-miluconnect.png';
import Partner6 from '../assets/partners/partner-metkom-miluconnect.png';
import Partner7 from '../assets/partners/partner-natarasie-miluconnect.png';
import Partner8 from '../assets/partners/partner-vending4all-miluconnect.png';

export const offer_boxes: BoxProps[] = [
    {
        title: 'Strony internetowe',
        iconUrl: IconWebsite,
        buttonLink: '/strony-internetowe'
    }, 
    {
        title: 'Projektowanie graficzne',
        iconUrl: IconGraphicDesign,
        buttonLink: ''
    },
    {
        title: 'Pozycjonowanie i Google Ads',
        iconUrl: IconLongTerm,
        buttonLink: ''
    }, 
    {
        title: 'Domeny i hosting',
        iconUrl: IconWebAdjustment,
        buttonLink: ''
    },
    {
        title: 'Sklepy internetowe',
        iconUrl: IconEcommerce,
        buttonLink: '/ecommerce'
    }, 
    {
        title: 'Aplikacje mobilne',
        iconUrl: IconMobileApps,
        buttonLink: ''
    },
]

export const _portfolio_items = [
    {
        title: 'Centrum Bags - Bytom',
        description: 'SKLEP INTERNETOWY',
        imageUrl: PortfolioCentrumBagsImg,
        buttonLink: 'https://centrumbags.pl',
    },
    {
        title: 'Leśna Perła',
        description: 'DOM PRZYJĘĆ',
        imageUrl: PortfolioRestauracjaLesnaPerlaImg,
        buttonLink: 'https://lesna-perla.pl',
    },
    {
        title: 'Stolarnia Precyzja',
        description: 'WITRYNA BIZNESOWA',
        imageUrl: PortfolioStolarniaprecyzjaImg,
        buttonLink: 'https://stolarniaprecyzja.pl',
    },

    {
        title: 'Na Tarasie',
        description: 'BRANŻA OGRODNICZA',
        imageUrl: PorftolioNatarasieImg,
        buttonLink: 'https://natarasie.eu',
    },
    {
        title: 'SKIN Simply Nutrition',
        description: 'SKLEP I KOSMETOLOGIA',
        imageUrl: PortfolioSkinsnImg,
        buttonLink: 'https://skinsn.eu',
    },
    {
        title: 'Vending 4 All',
        description: 'WIZYTÓWKA PRODUCENTA',
        imageUrl: PortfolioVending4AllImg,
        buttonLink: 'https://vending4all.eu',
    },
    {
        title: 'Metkom',
        description: 'STRONA, BLOG, KATALOG',
        imageUrl: PortfolioMetkomImg,
        buttonLink: 'https://metkom.com.pl',
    },
    {
        title: 'Holistic Spa',
        description: 'GABINET SPECJALISTYCZNY',
        imageUrl: PortfolioHolisticSpaImg,
        buttonLink: 'https://spaslask.pl',
    },
    {
        title: 'Darel - IE',
        description: 'LOKALNY SKLEP BRANŻOWY',
        imageUrl: PortfolioDarelBizPlImg,
        buttonLink: 'https://darel.biz.pl',
    },
];

export const _integrationsContents = [
    { url: IntegrationAllegro, alt: 'Allegro' },
    { url: IntegrationBaseLinker, alt: 'BaseLinker' },
    { url: IntegrationPresta, alt: 'PrestaShop' },
    { url: IntegrationWordpress, alt: 'WordPress' },
    { url: IntegrationWooCommerce, alt: 'WooCommerce' },
    { url: IntegrationShopGold, alt: 'ShopGold' },
    { url: IntegrationInPost, alt: 'InPost' },
    { url: IntegrationCyberFolks, alt: 'CyberFolks' },
];

export const _technologyContents = [
    { url: TechnologyAngular, alt: 'Angular' },
    { url: TechnologyExpress, alt: 'Express.js' },
    { url: TechnologyGolang, alt: 'Golang' },
    { url: TechnologyKotlin, alt: 'Kotlin' },
    { url: TechnologyMongodb, alt: 'MongoDB' },
    { url: TechnologyNodejs, alt: 'Node.js' },
    { url: TechnologyReactjs, alt: 'React.js' },
    { url: TechnologySharepoint, alt: 'SharePoint' },
];

export const _clientsContents = [
    { url: Partner1, alt: 'Logo Hurtownia słońca' },
    { url: Partner2, alt: 'Logo Gentleman Shop' },
    { url: Partner3, alt: 'Logo Holistic Spa' },
    { url: Partner4, alt: 'Logo Restauracja Leśna Perła' },
    { url: Partner5, alt: 'Logo Instalacje Darel.biz' },
    { url: Partner6, alt: 'Logo Grupa Metkom' },
    { url: Partner7, alt: 'Logo Na tarasie' },
    { url: Partner8, alt: 'Logo Vending 4 All' },
];

export const _homeContents_ImageBox_1 = [
{
        imgsrc: IconDedicatedSolutions,
        heading: 'Pełny e-commerce',
        url: 'rozwiazania-wordpress-woocommerce',
        content: (
            <div className='text-align-left'>
                <p>
                    Specjalizujemy się w projektowaniu i wdrażaniu rozwiązań eCommerce na
                    platformie <a href='/rozwiazania'>WordPress WooCommerce</a>, które
                    wspierają rozwój sklepów internetowych i zwiększają konwersję.
                </p>
                <p>
                    Nasze <a href='#realizacje'>projekty</a> obejmują kompleksowe tworzenie
                    stron, sklepów, systemów zarządzania produkcją i zasobami oraz integrację
                    z systemami ERP i CRM. Dzięki doświadczeniu i elastycznemu podejściu
                    pomagamy firmom zyskać przewagę konkurencyjną.
                </p>
            </div>
        ),
        labels: ['WordPress', 'WooCommerce', 'eCommerce', 'Baselinker'],
    },
    {
        imgsrc: IconMobileApps,
        heading: 'Mobilność i responsywność',
        url: 'projektowanie-mobile-first',
        content: (
            <div className='text-align-left'>
                <p>
                    Tworzymy strony i aplikacje web i mobilne oparte na podejściu Mobile
                    First, dostosowane do urządzeń mobilnych oraz desktopowych.
                </p>
                <p>
                    Dbamy o intuicyjny interfejs użytkownika, szybkość działania i
                    responsywność, co jest kluczowe dla SEO i zadowolenia użytkowników.
                </p>
            </div>
        ),
        labels: ['Mobile First', 'Responsywność', 'UI', 'SEO'],
    },
];

export const _homeContents_ImageBox_2 = [
    {
        imgsrc: IconLongTerm,
        heading: 'Profesjonalizm i długoterminowość',
        url: 'profesjonalizm-długoterminowość',
        content: (
            <div className='text-align-left'>
                <p>
                    O gwarancjach można wiersze pisać. My chwalimy się efektami i zadowoleniem
                    klientów.
                </p>
                <p>
                    Znamy się na rzeczy, działamy szybko, a szybka praca nie zawsze idzie w
                    parze z szybkim projektem. Zastanawiamy się, planujemy, opisujemy,
                    działamy.
                </p>
                <p>
                    Nasze działania często trwają tygodniami, miesiącami... Dlatego nie boimy
                    się dużych projektów – przeciwnie. Małe, szybkie i proste cieszą, ale to
                    te wielkie napawają do dumy. Zaangażowanie zawsze przynosi upragniony
                    efekt.
                </p>
            </div>
        ),
        labels: ['Profesjonalizm', 'Planowanie', 'Długoterminowość'],
    },
    {
        imgsrc: IconBrainstorm,
        heading: 'Konsultacje technologiczne i wsparcie IT',
        url: 'konsultacje-technologiczne',
        content: (
            <div className='text-align-left'>
                <p>
                    Nasz zespół oferuje wsparcie technologiczne na każdym etapie projektu.
                </p>
                <p>
                    Pomagamy dopracowywać różne projekty – od planowania, przez wdrożenie, aż
                    po optymalizację. Zapewniamy efektywne i nowoczesne rozwiązania IT, które
                    wspierają Twoją firmę w osiąganiu kluczowych celów.
                </p>
            </div>
        ),
        labels: ['Konsultacje', 'Wsparcie', 'Technologie'],
    },
    {
        imgsrc: IconSpectialistTeam,
        heading: 'Audyt i optymalizacja SEO',
        url: 'audyt-seo',
        content: (
            <div className='text-align-left'>
                <p>
                    Nasze audyty SEO to szczegółowa analiza stron internetowych pod kątem
                    wyszukiwarek.
                </p>
                <p>
                    Pomagamy zidentyfikować i wyeliminować techniczne problemy, poprawić
                    struktury linków i zwiększyć pozycję Twojej strony w wynikach
                    wyszukiwania.
                </p>
            </div>
        ),
        labels: ['SEO', 'Audyt', 'Optymalizacja'],
    },
    {
        imgsrc: IconPartnership,
        heading: 'Zespół ekspertów IT',
        url: 'zespol-ekspertow-it',
        content: (
            <div className='text-align-left'>
                <p>
                    Mamy zespół specjalistów IT – doświadczonych programistów i projektantów,
                    którzy tworzą zaawansowane rozwiązania e-commerce.
                </p>
                <p>
                    Niezależnie od skali projektu, zapewniamy stabilność, bezpieczeństwo i
                    najwyższą jakość wdrożeń, odpowiadających na potrzeby biznesowe.
                </p>
            </div>
        ),
        labels: ['Programowanie', 'Dedykowane rozwiązania'],
    },
];

export const _homeContents_ImageBox_Profelio = [
    {
        imgsrc: [ProfelioImg1, ProfelioImg2, ProfelioImg3, ProfelioImg4],
        heading: 'Profelio',
        url: 'odkryj-profelio',
        content: (
            <div className='flex flex-col'>
                <p className="text-xl mb-4">
					Przedstawiamy <strong>Profelio</strong> – nowoczesne narzędzie do zarządzania projektami, działające na zasadach znanych z Jira. Dzięki Profelio możesz kompleksowo <span className='text-[var(--color-accent-secondary)] font-bold'>planować, monitorować i koordynować</span> prace zespołu, korzystając z intuicyjnego interfejsu i wysokiej wydajności. To rozwiązanie usprawnia procesy projektowe, <strong>zwiększa produktywność</strong> i pomaga osiągać cele biznesowe.
				</p>
                <button className='btn-primary mt-6'>Poproś o wcześniejszy dostęp</button>
            </div>
        ),
        labels: ['Planowanie', 'Zarządzanie'],
    },
];