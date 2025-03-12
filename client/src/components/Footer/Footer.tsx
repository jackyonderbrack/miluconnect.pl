import Logo from '../../assets/logo/miluconnect_logo_light_3.png';
import FacebookSocialHover from '../../assets/socials/facebook_icon_dark_hover.png';
import GithubSocialHover from '../../assets/socials/github_icon_dark_hover.png';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Pricing from '../Pricing/Pricing';

const Footer = () => {
	return (
		<>
			<Pricing />
			<footer id='Footer' className='px-4 py-8'>
				<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 px-4 py-2'>
						<Link to='/#'>
							<img src={Logo} alt='Logo MILU Connect' className='w-32 place-self-center md:place-self-start' />
						</Link>

						<nav className='flex flex-col gap-8 md:flex-row md:gap-4 items-center md:items-start'>
							<div className='flex flex-col gap-2 items-center md:items-start'>
								<p className='font-black! text-2xl!'>Menu:</p>
								<Link to='/' className='font-light! text-lg/5!'>Strona główna</Link>
								<Link to='/rozwiazania' className='font-light! text-lg/5!'>Rozwiązania</Link>
								<Link to='/kontakt' className='font-light!'>Kontakt</Link>
								<Link to='/polityka-prywatnosci' className='font-light! text-lg/5!'>Polityka Prywatności</Link>
							</div>
							<div className='flex flex-col gap-2 items-center md:items-start'>
								<p className='font-black! text-2xl!'>Oferta:</p>
								<Link to='/seo-i-google-ads' className='font-light! text-lg/5!'>SEO i Google ADS</Link>
								<Link to='/projektowanie-graficzne' className='font-light! text-lg/5!'>Projektowanie graficzne</Link>
								<Link to='/ecommerce' className='font-light! text-lg/5!'>E-Commerce</Link>
								<Link to='/domeny-i-hosting' className='font-light! text-lg/5!'>Domeny i Hosting</Link>
								<Link to='/strony-internetowe' className='font-light! text-lg/5!'>Strony internetowe</Link>
								<Link to='/aplikacje-mobilne' className='font-light! text-lg/5!'>Aplikacje mobilne</Link>
							</div>
						</nav>

						<div className='flex gap-2 justify-center'>
							<div className='relative w-8 object-contain h-8'>
								<a href='https://www.facebook.com/people/MILU-Connect/61571345354897/' target='_blank' rel='nofollow, noopener'>
									<img
										className='filter grayscale contrast-200 hover:filter-none transition'
										src={FacebookSocialHover}
										alt='Facebook social icon'
									/>
								</a>
							</div>
							<div className='relative w-8 object-contain h-8'>
								<a href='https://github.com/jackyonderbrack' target='_blank' rel='nofollow, noopener'>
									<img
										className='filter grayscale contrast-200 hover:filter-none transition'
										src={GithubSocialHover}
										alt='Github social icon hover'
									/>
								</a>
							</div>
							<div className='relative w-8 object-contain h-8'>
								<a href='https://github.com/tokarskadev' target='_blank' rel='nofollow, noopener'>
									<img
										className='filter grayscale contrast-200 hover:filter-none transition'
										src={GithubSocialHover}
										alt='Github social icon hover'
									/>
								</a>
							</div>
					</div>
					<div className='flex flex-col gap-2'>
						<Button
							linkTo='/kontakt'
							buttonText='Napisz do nas'
							theme='btn-outline'
						/>
						<PrivacyPolicy />
					</div>
				</section>
			</footer>
		</>
		
	);
};

export default Footer;
