import axios, { AxiosResponse } from 'axios';

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

class UserService {
  private apiUrl = 'https://miluconnect.pl/api/users'; 

  async addUser(user: User): Promise<AxiosResponse<User>> {
    try {
      const response = await axios.post<User>(this.apiUrl, user);
      return response;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }
}

export const userService = new UserService();
