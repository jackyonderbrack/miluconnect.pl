import { useEffect } from "react";
import Header from "../../components/Header/Header";
import "./ContactPage.css";
import ContactImg from "../../assets/background-letters-01-miluconnect.webp";
import { useAccess } from "../../contexts/AccessContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Helmet } from "react-helmet";

const ContactPageSent = () => {
    const { accessGranted } = useAccess()
    const navigate = useNavigate()

    useEffect(() => {
        if (accessGranted) {
            navigate('/kontakt')
        }
    }, [accessGranted, navigate]);

    return (
        <>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z45CNGHHXT"></script>
                <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-Z45CNGHHXT');
                `}
                </script>
            </Helmet>
            <Header
                content={
                    <div>
                        <h1>
                            Twoje zapytanie <br />
                            <span className="text-gradient">zostało wysłane</span>
                        </h1>
                        <h3 className="my-4">Dziękujemy za zaufanie</h3>
                        <div className="flex flex-col">
                            <p>Wkrótce się odezwiemy</p>
                            <h4>kontakt@miluconnect.pl</h4>
                        </div>
                        <div className="my-4">
                            <Button linkTo="/" buttonText="Powrót na Stronę główną" theme="btn-secondary" />
                        </div>
                    </div>
                }
                imgUrl={ContactImg}
            />
        </>
    );
};

export default ContactPageSent;
