export const authService = {
	getToken: () => {
		return localStorage.getItem('TOKEN');
	},

	getAuthHeader: () => {
		const token = authService.getToken();
		return token ? { Authorization: `Bearer ${token}` } : {};
	},
};
