import Logo from '../../assets/logo/miluconnect_logo_light_3.png';
import FacebookSocialHover from '../../assets/socials/facebook_icon_dark_hover.png';
import GithubSocialHover from '../../assets/socials/github_icon_dark_hover.png';

import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Footer = () => {
	return (
		<footer id='Footer' className='background-top px-4'>
			<section className='grid grid-cols-4 items-center gap-2 px-4 py-2'>
					<Link to='/#' className=''>
						<img src={Logo} alt='Logo MILU Connect' className='w-32 place-self-center md:place-self-start' />
					</Link>

					<nav className='flex flex-col gap-2'>
						<Link to='/'>Strona główna</Link>
						<Link to='/rozwiazania'>Rozwiązania</Link>
						<Link to='/kontakt'>Kontakt</Link>
					</nav>

					<div className='flex gap-2'>
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
				<div className='footerHeaderCol'>
					<Button
						linkTo='/kontakt'
						buttonText='Skontaktuj się z nami'
						theme='btn-outline'
					/>
				</div>
			</section>
			<section className='footerBottom px-4'>
				<PrivacyPolicy />
			</section>
		</footer>
	);
};

export default Footer;
