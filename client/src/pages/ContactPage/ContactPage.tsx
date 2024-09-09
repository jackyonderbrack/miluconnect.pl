import ContactForm from '../../components/ContactForm/ContactForm';
import Header from '../../components/Header/Header';
import './ContactPage.css';
import ContactImg from '../../assets/background-letters-01-miluconnect.webp';
import PhoneIcon from '../../assets/icons/icon-phone.png';
import MailIcon from '../../assets/icons/icon-mail.png';
import MetaTags from '../../components/MetaTags/MetaTags';

const ContactPage = () => {
	return (
		<>
			<MetaTags
				title='MILU Connect - Szybka i darmowa wycena'
				description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu. Katowice, Rybnik, Żory, Mikołów, Śląsk'
			/>
			<Header
				content={
					<div>
						<h1>
							Masz jakiekolwiek <br />
							<span className='text-gradient'>Pytania?</span>
						</h1>
					</div>
				}
				imgUrl={ContactImg}
				align='start'
			/>
			<div className='contactPageLayout grid grid-cols-2 gap-4 background-top pt-4 pb-8'>
				<div>
					<ContactForm />
				</div>
				<div className='flex flex-col '>
					<h3>INFORMACJE DODATKOWE</h3>
					<p>
						Jeśli masz jakiekolwiek pytania zawsze możesz napisać do mnie zwykły
						prosty e-mail
					</p>
					<section>
						<h4>Możesz to nas napisać lub zadzwonić</h4>
						<div className='contact-cta'>
							<a href='mailto:kontakt@miluconnect.pl' className='contact-cta-child'>
								<img src={MailIcon} alt='Mail Icon' />
								kontakt@miluconnect.pl
							</a>
							<a href='tel:+48575740815' className='contact-cta-child'>
								<img src={PhoneIcon} alt='Phone Icon' />
								+48 575 740 815
							</a>
							<p>
								MILU Connect
								<br />
								Ul. Starowiejska 33a
								<br />
								44-245 Żory
							</p>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
