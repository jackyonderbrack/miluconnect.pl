import { useState } from 'react';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const Account = () => {
	const navigate = useNavigate();
	const [error, setError] = useState<string | null>(null);
	const handleLogout = () => {
		try {
			localStorage.removeItem('TOKEN');
			navigate('/admin-login');
		} catch (err) {
			console.error('Nie udało się wylogować', err);
			setError('Nie udało się wylogować');
		}
	};
	return (
		<div id='logout-page'>
			<Header title='Konto' />
			<button onClick={handleLogout}>Wyloguj się</button>
			{error && <p className='logout-error'>Błąd przy wylogowaniu</p>}
		</div>
	);
};

export default Account;
