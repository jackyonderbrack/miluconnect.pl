import axios from 'axios';
import { Login } from '../models/login.model';

export const getToken = async ({ email, password }: Login) => {
	const response = await axios.post('http://localhost:42204/api/login', {
		email,
		password,
	});

	const token: string = response.data.token;
	localStorage.setItem('TOKEN', token);
};
