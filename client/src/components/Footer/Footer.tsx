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
						<Link to='/#' className=''>
							<img src={Logo} alt='Logo MILU Connect' className='w-32 place-self-center md:place-self-start' />
						</Link>

						<nav className='flex flex-col gap-2 items-center md:items-start'>
							<Link to='/'>Strona główna</Link>
							<Link to='/rozwiazania'>Rozwiązania</Link>
							<Link to='/kontakt'>Kontakt</Link>
							<Link to='/polityka-prywatności'>Polityka prywatności</Link>
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
							buttonText='Kontakt'
							theme='btn-outline'
						/>
						<Button
							linkTo='/'
							buttonText='Wycena'
							theme='btn-underline'
						/>
					</div>
				</section>
				<section className='footerBottom px-4'>
					<PrivacyPolicy />
				</section>
			</footer>
		</>
		
	);
};

export default Footer;
