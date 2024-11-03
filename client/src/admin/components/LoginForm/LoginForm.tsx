import { useNavigate } from 'react-router-dom';
import PanelHeader from '../PanelHeader/PanelHeader';
import './LoginForm.css';
import { getToken } from '../../services/login.service';
import { useLoginFormik } from '../../../utils/useFormikConfig';
import { useState } from 'react';

const LoginForm = () => {
	const navigate = useNavigate();
	const [submitErrorStatus, setSubmitErrorStatus] = useState<string>('');
	const [submitSuccessStatus, setSubmitSuccessStatus] = useState<string>('');

	const formik = useLoginFormik(async (values) => {
		try {
			await getToken({
				email: values.loginFormEmail,
				password: values.loginFormPassword,
			});
			setSubmitSuccessStatus('Zalogowano pomyślnie!');
			setSubmitErrorStatus('');
			navigate('/admin-panel');
		} catch (err: any) {
			if (err.response && err.response.status === 401) {
				setSubmitErrorStatus('Nieprawidłowy email lub hasło');
			} else {
				setSubmitErrorStatus('Błąd serwera. Spróbuj ponownie później.');
			}
			setSubmitSuccessStatus('');
			console.error('Błąd logowania: ', err);
		}
	});
	return (
		<div id='LoginForm'>
			<PanelHeader title='Admin Panel' />
			<p>Zaloguj się do panelu administracyjnego</p>
			<form onSubmit={formik.handleSubmit}>
				<div className='form-group login-form'>
					<label htmlFor='loginFormEmail'>Email:</label>
					<input
						type='email'
						id='loginFormEmail'
						name='loginFormEmail'
						value={formik.values.loginFormEmail}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={
							formik.touched.loginFormEmail && formik.errors.loginFormEmail
								? 'input-error'
								: ''
						}
					/>
					{formik.touched.loginFormEmail && formik.errors.loginFormEmail ? (
						<p className='error-message'>{formik.errors.loginFormEmail}</p>
					) : (
						<p className='error-message'></p>
					)}

					<label htmlFor='loginFormPassword'>Hasło:</label>
					<input
						type='password'
						id='loginFormPassword'
						name='loginFormPassword'
						value={formik.values.loginFormPassword}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className={
							formik.touched.loginFormPassword && formik.errors.loginFormPassword
								? 'input-error'
								: ''
						}
					/>
					{formik.touched.loginFormPassword && formik.errors.loginFormPassword ? (
						<p className='error-message'>{formik.errors.loginFormPassword}</p>
					) : (
						<p className='error-message'></p>
					)}
				</div>

				<button type='submit' className='btn-outline'>
					Zaloguj się
				</button>
			</form>
			{submitErrorStatus ? (
				<p className='form-error'>Błąd: {submitErrorStatus}</p>
			) : (
				<p className='form-error'></p>
			)}
			{submitSuccessStatus && (
				<p className='form-success'>{submitSuccessStatus}</p>
			)}
		</div>
	);
};

export default LoginForm;
