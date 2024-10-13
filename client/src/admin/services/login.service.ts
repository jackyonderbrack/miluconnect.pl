import axios from 'axios';
import { Login } from '../models/login.model';

const API_URL = import.meta.env.VITE_API_URL;

export const getToken = async ({ email, password }: Login) => {
	const response = await axios.post(`${API_URL}/api/login`, {
		email,
		password,
	});

	const token: string = response.data.token;
	localStorage.setItem('TOKEN', token);
};
