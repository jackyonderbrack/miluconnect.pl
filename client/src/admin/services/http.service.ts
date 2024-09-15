import axios, { AxiosResponse } from 'axios';
import { authService } from './auth.service';

export const getData = async <T>(
	endpoint: string
): Promise<AxiosResponse<T>> => {
	const apiUrl = `http://localhost:42204/api/${endpoint}`;
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.get<T>(apiUrl, { headers });
		return response;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

export const postData = async <T>(
	endpoint: string,
	data: T
): Promise<AxiosResponse<T>> => {
	const apiUrl = `http://localhost:42204/api/${endpoint}`;
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.post<T>(apiUrl, data, { headers });
		return response;
	} catch (error) {
		console.error('Error posting data:', error);
		throw error;
	}
};

export const putData = async <T>(
	endpoint: string,
	data: T
): Promise<AxiosResponse<T>> => {
	const apiUrl = `http://localhost:42204/api/${endpoint}`;
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.put<T>(apiUrl, data, { headers });
		return response;
	} catch (error) {
		console.error('Error updating data:', error);
		throw error;
	}
};

export const deleteData = async (
	endpoint: string
): Promise<AxiosResponse<string>> => {
	const apiUrl = `http://localhost:42204/api/${endpoint}`;
	try {
		const headers = authService.getAuthHeader();
		const response = await axios.delete<string>(apiUrl, { headers });
		return response;
	} catch (error) {
		console.error('Error deleting data:', error);
		throw error;
	}
};
