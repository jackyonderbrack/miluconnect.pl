import axios, { AxiosResponse } from 'axios';

export interface Post {
  category: string;
  title: string;
  description: string;
  author: string;
}

const apiUrl = 'http://localhost:42204/api/post';

export const addPost = async (post: Post): Promise<AxiosResponse<Post>> => {
  try {
    const response = await axios.post<Post>(apiUrl, post);
    return response;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

