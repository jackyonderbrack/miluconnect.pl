import axios, { AxiosResponse } from 'axios';

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
		const response = await axios.post<User>(apiUrl, user);
		return response;
	} catch (error) {
		console.error('Error adding user:', error);
		throw error;
	}
};

export const getUsers = async (): Promise<AxiosResponse<User[]>> => {
	let apiUrl = 'http://localhost:42204/api/users';
	try {
		const response = await axios.get<User[]>(apiUrl);
		return response;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};
