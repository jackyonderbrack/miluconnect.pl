import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import { Post } from '../../models/post.model';
import { deletePost } from '../../services/post.service';

const Posts = () => {
	const [postsData, setPostsData] = useState<Post[]>([]);

	const handleUpdate = async (postId: string) => {
		try {
			await deletePost(postId);
			const updateUsers = postsData.filter((post) => post.id !== postId);
			setPostsData(updateUsers);
			console.log('Usunięto i uaktualniono listę');
		} catch (error) {
			console.error('Błąd podczas usuwania użytkownika:', error);
		}
	};

	const handleDelete = async (postId: string) => {
		try {
			await deletePost(postId);
			const updateUsers = postsData.filter((post) => post.id !== postId);
			setPostsData(updateUsers);
			console.log('Usunięto i uaktualniono listę');
		} catch (error) {
			console.error('Błąd podczas usuwania użytkownika:', error);
		}
	};
	return (
		<div className='posts-page flex flex-col gap-2'>
			<Header title='Wpisy' />
			<div className='button-wrapper'>
				<Button
					linkTo={'/admin-panel/post/new'}
					buttonText={'+ Nowy wpis'}
					theme={'btn-primary'}
				/>
			</div>
			<List
				items={postsData}
				itemsPerPage={3}
				renderItem={(item) => (
					<>
						<h3 className='post-title'>{item.title}</h3>
						<div className='post-meta'>
							<span>
								{item.author} - {item.date}
							</span>
							<span>{item.category}</span>
							<span>{item.tags.join(', ')}</span>
						</div>
						<p className='post-content'>{item.content}</p>
					</>
				)}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export default Posts;
