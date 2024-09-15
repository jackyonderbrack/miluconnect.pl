import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './new.css';
import React, { useState } from 'react';
import { addUser } from '../../services/user.service';
import { addPost } from '../../services/post.service';
import { User } from '../../models/user.model';
import { Post } from '../../models/post.model';

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
		{ name: 'author', label: 'Autor', type: 'text' },
	],
	user: [
		{ name: 'name', label: 'Imię i nazwisko', type: 'text' },
		{ name: 'email', label: 'Email', type: 'email' },
		{ name: 'password', label: 'Hasło', type: 'password' },
	],
	report: [
		{ name: 'title', label: 'Title', type: 'text' },
		{ name: 'content', label: 'Content', type: 'textarea' },
		{ name: 'date', label: 'Date', type: 'date' },
	],
};

const New: React.FC = () => {
	const { type } = useParams<{ type: string }>();
	const fields = type ? fieldConfigurations[type] || [] : [];
	const navigate = useNavigate();

	const [formData, setFormData] = useState<Record<string, string>>({});
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (type === 'user') {
				await addUser(formData as unknown as User);
				navigate('/admin-panel/users');
			}
			if (type === 'post') {
				await addPost(formData as unknown as Post);
				navigate('/admin-panel/posts');
			}
		} catch (error) {
			setError('Nie udało się dodać użytkownika');
			console.error(error);
		}
	};

	return (
		<div>
			{type === 'user' && <Header title='Nowy użytkownik' />}
			{type === 'post' && <Header title='Nowy wpis' />}
			{type === 'report' && <Header title='Nowy raport' />}

			<form onSubmit={handleSubmit}>
				{fields.map((field: Field) => (
					<div key={field.name} className='form-new form-group'>
						<label htmlFor={field.name}>{field.label}</label>
						<div className='form-inputs'>
							{field.type === 'textarea' ? (
								<textarea id={field.name} name={field.name} onChange={handleChange} />
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
				{error && <p className='error'>{error}</p>}
				<button type='submit'>Utwórz</button>
			</form>
		</div>
	);
};

export default New;
