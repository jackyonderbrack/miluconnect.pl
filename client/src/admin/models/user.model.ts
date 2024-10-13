export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	role: string;
}

export type NewUser = Omit<User, 'id' | 'role'>;
