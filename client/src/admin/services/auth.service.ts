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

	handleUnauthorized: (error: any) => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem('TOKEN');
			window.location.href = '/admin-login'
		};
	},
};
