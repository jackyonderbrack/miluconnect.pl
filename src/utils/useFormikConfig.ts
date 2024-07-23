import { useFormik } from "formik";
import * as Yup from "yup";

// Schemat walidacji dla formularza kontaktowego
const contactFormValidationSchema = Yup.object({
  contactFormClientName: Yup.string().required("Proszę podać swoje imię"),
  contactFormClientEmail: Yup.string().email("Niepoprawny adres email").required("Email jest wymagany"),
  contactFormMessage: Yup.string().required("Proszę wpisać wiadomość"),
});

export const useContactFormik = (
  onSubmit: (emailValues: { contactFormClientName: string; contactFormClientEmail: string; contactFormMessage: string }) => void
) => {
  return useFormik({
    initialValues: {
      contactFormClientName: "",
      contactFormClientEmail: "",
      contactFormMessage: "",
    },
    validationSchema: contactFormValidationSchema,
    onSubmit,
  });
};
