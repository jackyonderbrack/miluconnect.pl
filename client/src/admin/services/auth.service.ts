export const authService = {
	getToken: () => {
		const token = localStorage.getItem('TOKEN');
		return token;
	},

	getAuthHeader: () => {
		const token = authService.getToken();
		const headers = token ? { Authorization: `Bearer ${token}` } : {};
		return headers;
	},
};
