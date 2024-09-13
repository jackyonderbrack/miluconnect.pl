import axios, { AxiosResponse } from 'axios';
import { authService } from './auth.service';

export interface User {
	id?: string;
	name: string;
	email: string;
	password: string;
	role?: string;
}

export const addUser = async (user: User): Promise<AxiosResponse<User>> => {
	const apiUrl = 'http://localhost:42204/api/user';
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.post<User>(apiUrl, user, { headers });
		return response;
	} catch (error) {
		console.error('Error adding user:', error);
		throw error;
	}
};

export const getUsers = async (): Promise<AxiosResponse<User[]>> => {
	let apiUrl = 'http://localhost:42204/api/users';
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.get<User[]>(apiUrl, { headers });
		return response;
	} catch (error) {
		console.error('Błąd podczas pobierania użytkowników:', error);
		throw error;
	}
};
