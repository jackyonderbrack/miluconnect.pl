import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { getUsers } from '../../services/user.service';
import Button from '../../../components/Button/Button';
import { User } from '../../models/user.model';

const Users = () => {
	const [usersData, setUsersData] = useState<User[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await getUsers();
				setUsersData(response.data);
				console.log('Pobrano liste użytkowników:', response);
			} catch (error) {
				console.error('Nie udało się pobrać użytkowników:', error);
			}
		};
		fetchUsers();
	}, []);

	return (
		<div className='users-page flex flex-col gap-2'>
			<Header title='Użytkownicy' />
			<div className='button-wrapper'>
				<Button
					linkTo={'/admin-panel/user/new'}
					buttonText={'+ Dodaj użytkownika'}
					theme={'btn-primary'}
				/>
			</div>
			<List
				items={usersData}
				itemsPerPage={6}
				renderItem={(user) => (
					<>
						<h3 className='user-name'>{user.name}</h3>
						<div className='post-meta'>
							<span>{user.email}</span>
							<span>{user.role}</span>
						</div>
					</>
				)}
			/>
		</div>
	);
};

export default Users;
