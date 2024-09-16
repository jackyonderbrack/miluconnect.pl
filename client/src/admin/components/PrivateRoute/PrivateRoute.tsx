import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const local = import.meta.env.DEV;

const PrivateRoute: React.FC = () => {
	const token = localStorage.getItem('TOKEN');

	if (local) {
		return <Outlet />;
	} else {
		return token ? <Outlet /> : <Navigate to='/admin-login' />;
	}
};

export default PrivateRoute;
