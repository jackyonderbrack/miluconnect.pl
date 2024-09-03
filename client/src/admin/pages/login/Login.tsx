import { useState } from 'react';
import Header from '../../components/Header/Header';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/login.service';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			getToken({ email, password });
			navigate('/admin-panel');
		} catch (err) {
			setError('Nieprawidłowy email lub hasło');
			console.error('Błąd logowania: ', error);
		}
	};
	return (
		<div>
			<Header title='Login' />
			<form onSubmit={handleLogin}>
				<div className='form-group login-form'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor='password'>Hasło:</label>
					<input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit'>Zaloguj się</button>
				{error && <p className='login-error'>Błąd: {error}</p>}
			</form>
		</div>
	);
};

export default Login;
