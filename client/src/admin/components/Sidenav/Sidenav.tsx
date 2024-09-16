import { NavLink } from 'react-router-dom';
import './sidenav.css';
import { useEffect, useRef, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Sidenav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigationRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		const navigation = navigationRef.current;
		if (navigation) {
			if (isMenuOpen) {
				navigation.classList.add('sidenav-active');
				navigation.classList.remove('sidenav-hidden');
			} else {
				navigation.classList.add('sidenav-hidden');
				setTimeout(() => {
					navigation.classList.remove('sidenav-active');
					navigation.classList.remove('sidenav-hidden');
				}, 300);
			}
		}
	}, [isMenuOpen]);

	const toggleMobileNav = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	// Funkcja zwracająca odpowiednią klasę CSS w zależności od aktywności linku
	const getLinkClass = ({ isActive }: { isActive: Boolean }) =>
		isActive ? 'sidenav-link active' : 'sidenav-link';

	return (
		<>
			<div className='sidenav-toggle' onClick={toggleMobileNav}>
				{!isMenuOpen ? <HiMenu size={32} /> : <HiX size={32} />}
			</div>
			<div className={`overlay ${isMenuOpen ? 'active' : ''}`}></div>
			<div className='sidenav' ref={navigationRef}>
				<div className='sidenav-header'>Admin Panel</div>
				<ul className='sidenav-menu' onClick={toggleMobileNav}>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel' className={getLinkClass} end>
							Dashboard
						</NavLink>
					</li>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel/posts' className={getLinkClass}>
							Wpisy
						</NavLink>
					</li>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel/users' className={getLinkClass}>
							Użytkownicy
						</NavLink>
					</li>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel/reports' className={getLinkClass}>
							Raporty
						</NavLink>
					</li>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel/settings' className={getLinkClass}>
							Ustawienia
						</NavLink>
					</li>
					<li className='sidenav-item'>
						<NavLink to='/admin-panel/account' className={getLinkClass}>
							Konto
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidenav;
