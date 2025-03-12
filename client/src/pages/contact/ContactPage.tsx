import ContactImg from '../../assets/background-letters-01-miluconnect.webp';
import MailIcon from '../../assets/icons/icon-mail.png';
import PhoneIcon from '../../assets/icons/icon-phone.png';
import ContactForm from '../../components/ContactForm/ContactForm';
import MetaTags from '../../components/MetaTags/MetaTags';
import PageTitle from '../../components/PageTitle/PageTitle';
import './ContactPage.css';

const ContactPage = () => {
	return (
		<div id='ContactPage'>
			<MetaTags
				title='MILU Connect - Szybka i darmowa wycena'
				description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu.'
			/>
			<PageTitle img={ContactImg}>
				<h1>
					Masz jakiekolwiek <br />
					<span className='text-gradient'>Pytania?</span>
				</h1>
			</PageTitle>
			<div className='contactPageLayout grid grid-cols-1 md:grid-cols-2 gap-4 background-top pt-4 pb-8'>
				<div>
					<ContactForm />
				</div>
				<div className='flex flex-col additional-info'>
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
								Ul. Sławików 12A/13
								<br />
								44-200 Rybnik
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
