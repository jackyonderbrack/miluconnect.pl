import { User } from '../models/user.model';
import { getData, postData, deleteData } from './http.service';

export const getUsers = () => getData<User[]>('users');

export const getUser = (userId: string) => getData<User>(`user/${userId}`);

export const addUser = (user: User) => postData<User>('user', user);

export const deleteUser = (userId: string) => deleteData(`user/${userId}`);
