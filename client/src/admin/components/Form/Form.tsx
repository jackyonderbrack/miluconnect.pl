import { useNavigate, useParams } from 'react-router-dom';
import PanelHeader from '../PanelHeader/PanelHeader';
import './form.css';
import React, { useRef, useState } from 'react';
import { addUser } from '../../services/user.service';
import { addPost } from '../../services/post.service';
import { NewUser } from '../../models/user.model';
import { Post } from '../../models/post.model';
import Editor from '../Editor/Editor';
import Quill from 'quill';
import '../Editor/Editor.css'

const Delta = Quill.import('delta');

interface Field {
	name: string;
	label: string;
	type: 'text' | 'textarea' | 'email' | 'password' | 'date' | 'number';
}

type FieldConfigurations = {
	[key: string]: Field[];
};

const fieldConfigurations: FieldConfigurations = {
	post: [
		{ name: 'title', label: 'Tytuł', type: 'text' },
		{ name: 'description', label: 'Krótki opis', type: 'text' },
		{ name: 'category', label: 'Kategoria', type: 'text' },
		{ name: 'content', label: "Treść", type: 'textarea'}
	],
	user: [
		{ name: 'name', label: 'Imię i nazwisko', type: 'text' },
		{ name: 'email', label: 'Email', type: 'email' },
		{ name: 'password', label: 'Hasło', type: 'password' },
		{ name: 'passwordConfirm', label: 'Potwierdź hasło', type: 'password' },
	],
	report: [
		{ name: 'title', label: 'Title', type: 'text' },
		{ name: 'content', label: 'Content', type: 'textarea' },
		{ name: 'date', label: 'Date', type: 'date' },
	],
};

const Form: React.FC = () => {
	const [setRange] = useState();
	const [setLastChange] = useState();
	const [readOnly] = useState(false);
	const { type } = useParams<{ type: string }>();
	const fields = type ? fieldConfigurations[type] || [] : [];
	const navigate = useNavigate();

	const [formData, setFormData] = useState<Record<string, string>>({});
	const [error, setError] = useState<string | null>(null);

	const quillRef = useRef<Quill | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// const handleEditorChange = (content: string) => {
	// 	setFormData({ ...formData, content });
	// };

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (type === 'user' && formData.password !== formData.passwordConfirm) {
			setError('Hasła muszą być takie same');
			return;
		}

		try {
			if (type === 'user') {
				await addUser(formData as unknown as NewUser);
				navigate('/admin-panel/users');
			}
			if (type === 'post') {
				await addPost(formData as unknown as Post);
				navigate('/admin-panel/posts');
			}
		} catch (error) {
			setError('Błąd, sprawdź pola i spróbuj jeszcze raz');
			console.error(error);
		}
	};

	return (
		<div>
			{type === 'user' && <PanelHeader title='Nowy użytkownik' />}
			{type === 'post' && <PanelHeader title='Nowy wpis' />}
			{type === 'report' && <PanelHeader title='Nowy raport' />}

			<form onSubmit={handleSubmit}>
				{fields.map((field: Field) => (
					<div key={field.name} className='form-new form-group'>
						<label htmlFor={field.name}>{field.label}</label>
						<div className='form-inputs'>
							{field.type === 'textarea' ? (
								<Editor
									ref={quillRef}
									readOnly={readOnly}
								defaultValue={new Delta().insert('Usuń i wpisz tresć')}
								onSelectionChange={setRange}
								onTextChange={setLastChange}
							/>
							) : (
								<input
									type={field.type}
									id={field.name}
									name={field.name}
									onChange={handleChange}
								/>
							)}
						</div>
					</div>
				))}
				{error && <p className='error-message'>{error}</p>}
				<button type='submit' className='btn-primary'>Utwórz</button>
				<button type='reset' className='btn-underline'>Anuluj</button>
			</form>
		</div>
	);
};

export default Form;
