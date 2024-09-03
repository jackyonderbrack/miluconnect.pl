import { NavLink } from 'react-router-dom';
import './sidenav.css';

const Sidenav = () => {
	// Funkcja zwracająca odpowiednią klasę CSS w zależności od aktywności linku
	const getLinkClass = ({ isActive }: { isActive: Boolean }) =>
		isActive ? 'sidenav-link active' : 'sidenav-link';

	return (
		<nav className='sidenav'>
			<div className='sidenav-header'>Admin Panel</div>
			<ul className='sidenav-menu'>
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
		</nav>
	);
};

export default Sidenav;
