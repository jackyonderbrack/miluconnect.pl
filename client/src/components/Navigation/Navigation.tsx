import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '../../assets/icon-close-miluconnect.png';
import NavIcon from '../../assets/icon-menu-miluconnect.png';
import Logo from '../../assets/logo/miluconnect-f5b642-transparent.png';
import './Navigation.css';

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const naviRef = useRef<null | HTMLDivElement>(null);
	const location = useLocation()

	useEffect(() => {
		const navigation = naviRef.current;
		if (navigation) {
			if (isMenuOpen) {
				navigation.classList.add('navigation-active');
				navigation.classList.remove('navigation-hidden');
			} else {
				navigation.classList.add('navigation-hidden');
				setTimeout(() => {
					navigation.classList.remove('navigation-active');
					navigation.classList.remove('navigation-hidden');
				}, 300);
			}
		}
	}, [isMenuOpen]);

	const toggleMobileNav = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}></div>
			<div className='navigation'>
				<div className='navigation-header items-center justify-between'>
					<Link to='/#' className='mainLogoContainer'>
						<img src={Logo} alt='Logo miluConnect' className='mainLogoImg' />
						<div className='mainLogoText'>
							<p>
								<span>m</span>
								<span>ilu</span>
							</p>
							<p>CONNECT</p>
						</div>
					</Link>
				</div>
				{location.pathname !== '/kontakt' && (
					<a className='absolute top-4 right-2 w-20 text-center text-xs! font-light! border-1 border-[var(--color-accent-primary)] rounded-sm py-1.5' href='/kontakt'>Darmowa wycena</a>
				)}
				<div ref={naviRef} className='main-navigation-links'>
					<Link to='/' onClick={toggleMobileNav}>
						Strona główna
					</Link>
					<Link to='/rozwiazania' onClick={toggleMobileNav}>
						Rozwiązania
					</Link>
					{/* <Link to='/blog' onClick={toggleMobileNav}>
						Blog
					</Link> */}
					<Link to='/kontakt' onClick={toggleMobileNav}>
						Kontakt
					</Link>
					
				</div>
				<div className='mobileNav'>
					<img
						src={!isMenuOpen ? NavIcon : CloseIcon}
						alt='NavIcon'
						className='nav-mobile-icon'
						onClick={toggleMobileNav}
					/>
				</div>
			</div>
		</>
	);
};

export default Navigation;
