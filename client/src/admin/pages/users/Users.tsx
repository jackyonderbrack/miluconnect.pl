import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { deleteUser, getUsers } from '../../services/user.service';
import Button from '../../../components/Button/Button';
import { User } from '../../models/user.model';
import './User.css';

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

	const handleUpdate = async (userId: string) => {
		try {
			await deleteUser(userId);
			const updateUsers = usersData.filter((user) => user.id !== userId);
			setUsersData(updateUsers);
			console.log('Usunięto i uaktualniono listę');
		} catch (error) {
			console.error('Błąd podczas usuwania użytkownika:', error);
		}
	};

	const handleDelete = async (userId: string) => {
		try {
			await deleteUser(userId);
			const updateUsers = usersData.filter((user) => user.id !== userId);
			setUsersData(updateUsers);
			console.log('Usunięto i uaktualniono listę');
		} catch (error) {
			console.error('Błąd podczas usuwania użytkownika:', error);
		}
	};

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
							<span>Id: {user.id}</span>
							<span>
								{user.email} | {user.role}
							</span>
						</div>
					</>
				)}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export default Users;
