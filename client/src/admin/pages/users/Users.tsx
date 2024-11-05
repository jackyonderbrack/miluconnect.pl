import { useEffect, useState } from 'react';
import PanelHeader from '../../components/PanelHeader/PanelHeader';
import List from '../../components/List/List';
import { deleteUser, getUsers } from '../../services/user.service';
import Button from '../../../components/Button/Button';
import { User } from '../../models/user.model';
import './User.css';

const Users = () => {
	const [usersData, setUsersData] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await getUsers();
				setUsersData(response.data);
				await new Promise(resolve => setTimeout(resolve, 500));
				setIsLoading(false)
				console.log('Pobrano liste użytkowników:', response);
			} catch (error) {
				console.error('Nie udało się pobrać użytkowników:', error);
				setIsLoading(false)
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
			<PanelHeader title='Użytkownicy' />
			<div className='add-button-wrapper text-align-end'>
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
						<p className='user-name'>{user.name}</p>
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
				isLoading={isLoading}
			/>
		</div>
	);
};

export default Users;
