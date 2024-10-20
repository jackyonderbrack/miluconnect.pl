import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
	const token = localStorage.getItem('TOKEN');
	
	return token ? <Outlet /> : <Navigate to='/admin-login' />;
	
};

export default PrivateRoute;
