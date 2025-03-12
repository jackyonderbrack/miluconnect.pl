import Header from '../../components/Header/Header';
import ContactImg from '../../assets/background-letters-01-miluconnect.webp';
import MetaTags from '../../components/MetaTags/MetaTags';

const ContactPage = () => {
	return (
		<>
			<MetaTags
				title='MILU Connect - Nowości technologiczne'
				description='Tworzenie stron internetowych, sklepów online i usługi IT. Skontaktuj się z nami, aby uzyskać dedykowane rozwiązania dla Twojego biznesu. Katowice, Rybnik, Żory, Mikołów, Śląsk'
			/>
			<Header
				content={
					<div>
						<h1>
							Co nowego w<br />
							<span className='text-gradient'>branży IT?</span>
						</h1>
					</div>
				}
				imgUrl={ContactImg}
			/>
			<div className='contactPageLayout grid grid-cols-2 gap-4 background-top pt-4 pb-8'></div>
		</>
	);
};

export default ContactPage;
