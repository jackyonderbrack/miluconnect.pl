import React, { useState } from 'react';
import './ContactForm.css';
import { useContactFormik } from '../../utils/useFormikConfig';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL + import.meta.env.VITE_BASE_API_SUFIX 

const ContactForm: React.FC = () => {
	const [submitErrorStatus, setSubmitErrorStatus] = useState('');
	const [submitSuccessStatus, setSubmitSuccessStatus] = useState('');
	const formik = useContactFormik(async (formData) => {
		try {
			const response = await fetch(`${BASE_API_URL}/send-email`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				const responseData = await response.text();
				console.log(responseData);
				formik.resetForm();
				setSubmitErrorStatus('');
				setSubmitSuccessStatus('Poszło! Do usłyszenia.');
			} else {
				console.error('Błąd serwera:', response.status);
				setSubmitErrorStatus('Błąd serwera, spróbuj ponownie');
				setSubmitSuccessStatus('');
			}
		} catch (error) {
			console.error('Błąd podczas wysyłania formularza:', error);
			setSubmitErrorStatus('Błąd wysyłania, spróbuj ponownie');
			setSubmitSuccessStatus('');
		}
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit} id='ContactForm'>
				<div className='input-field'>
					<input
						type='text'
						name='contactFormClientName'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.contactFormClientName}
						placeholder='Jak się nazywasz?'
					/>
					{formik.touched.contactFormClientName &&
					formik.errors.contactFormClientName ? (
						<p className='error-message'>{formik.errors.contactFormClientName}</p>
					) : null}
				</div>
				<div className='input-field'>
					<input
						type='email'
						name='contactFormClientEmail'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.contactFormClientEmail}
						placeholder='Twój e-mail'
					/>
					{formik.touched.contactFormClientEmail &&
					formik.errors.contactFormClientEmail ? (
						<p className='error-message'>{formik.errors.contactFormClientEmail}</p>
					) : null}
				</div>
				<div className='textarea-field'>
					<textarea
						name='contactFormMessage'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.contactFormMessage}
						placeholder='O co chcesz zapytać?'
						style={{ fontFamily: 'inherit' }}
					/>
					{formik.touched.contactFormMessage && formik.errors.contactFormMessage ? (
						<p className='error-message'>{formik.errors.contactFormMessage}</p>
					) : null}
				</div>

				<div className='submitArea'>
					{submitSuccessStatus && (
						<p className='submit-success-status'>{submitSuccessStatus}</p>
					)}
					{submitErrorStatus && (
						<p className='submit-error-status'>{submitErrorStatus}</p>
					)}
					<button type='submit' className='btn-primary'>
						Wyślij
					</button>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
