// post.service.ts
import { Post } from '../models/post.model';
import { getData, postData, deleteData } from './http.service';

export const getPosts = () => getData<Post[]>('posts');

export const addPost = (post: Post) => postData<Post>('post', post);

export const deletePost = (postId: string) => deleteData(`post/${postId}`);
