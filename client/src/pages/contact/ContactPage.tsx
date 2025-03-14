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
				<div className='flex flex-col additional-info space-y-4'>
					<h3>INFORMACJE DODATKOWE</h3>
					
					<div className='contact-cta my-6 space-y-4'>
						<div className='space-y-2'>
							<p>Jeśli masz jakiekolwiek pytania zawsze możesz napisać do mnie zwykły prosty e-mail:</p>
							<a href='mailto:kontakt@miluconnect.pl' className='contact-cta-child text-2xl! items-center h-10'>
								<img src={MailIcon} alt='Ikona e-mail'/>
								kontakt@miluconnect.pl
							</a>	
						</div>
						<div className='space-y-2'>
							<p>Jeśli chcesz omówić parę rzeczy wpierw:</p>
							<a href='tel:+48575740815' className='contact-cta-child text-2xl! items-center'>
								<img src={PhoneIcon} alt='Ikona telefonu' />
								+48 575 740 815
							</a>
						</div>
						<p>
							MILU Connect
							<br />
							Ul. Sławików 12A/13
							<br />
							44-200 Rybnik
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
