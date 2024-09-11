import { useFormik } from 'formik';
import * as Yup from 'yup';

// Schemat walidacji dla formularza kontaktowego
const contactFormValidationSchema = Yup.object({
	contactFormClientName: Yup.string().required('Proszę podać swoje imię'),
	contactFormClientEmail: Yup.string()
		.email('Niepoprawny adres email')
		.required('Email jest wymagany'),
	contactFormMessage: Yup.string().required('Proszę wpisać wiadomość'),
});

const loginFormValidationSchema = Yup.object({
	loginFormEmail: Yup.string()
		.required('Wpisz swój e-mail')
		.email('Niepoprawny adres e-mail')
		.required('Email jest wymagany'),
	loginFormPassword: Yup.string()
		.required('Wpisz hasło')
		.min(8, 'Hasło musi mieć co najmniej 8 znaków')
		.max(64, 'Hasło może mieć maksymalnie 64 znaki'),
});

export const useContactFormik = (
	onSubmit: (emailValues: {
		contactFormClientName: string;
		contactFormClientEmail: string;
		contactFormMessage: string;
	}) => void
) => {
	return useFormik({
		initialValues: {
			contactFormClientName: '',
			contactFormClientEmail: '',
			contactFormMessage: '',
		},
		validationSchema: contactFormValidationSchema,
		onSubmit,
	});
};

export const useLoginFormik = (
	onSubmit: (emailValues: {
		loginFormEmail: string;
		loginFormPassword: string;
	}) => void
) => {
	return useFormik({
		initialValues: {
			loginFormEmail: '',
			loginFormPassword: '',
		},
		validationSchema: loginFormValidationSchema,
		onSubmit,
	});
};
