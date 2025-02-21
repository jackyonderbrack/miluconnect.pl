import { FC } from 'react';

export interface BlogListItemProps {
	item: {
		id: string;
		author: string;
		title: string;
		exceprt: string;
		publicationDate: string;
		reactions: string;
		comments: string;
		settings?: React.ReactNode;
		imageUrl: string;
	};
}

const BlogListItem: FC<BlogListItemProps> = ({ item }) => {
	return (
		<div
			className='p-1 flex items-center justify-between h-72 border-b-2 border-b-[var(--color-accent-secondary)]'
			key={item.id}
		>
			<div className='flex-2 p-2'>
				<p>{item.author}</p>
				<h2 className='text-ellipsis nowrap'>{item.title}</h2>
				<p>{item.exceprt}</p>
			</div>
			<div className='aspect-[4/3]'>
				<img
					src={item.imageUrl}
					alt={`${item.id} blog image`}
					className='flex-1 p-2 h-30 w-40 object-cover'
				/>
			</div>
		</div>
	);
};

export default BlogListItem;
