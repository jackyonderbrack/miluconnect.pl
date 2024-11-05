import { ReactNode, useState } from 'react';
import './list.css'; // Dodaj stylizację
import Pagination from '../Pagination/Pagination';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';

interface ListItem {
	id: string;
}
interface ListProps<T extends ListItem> {
	items: T[];
	itemsPerPage: number;
	renderItem: (item: T) => ReactNode;
	onUpdate: (itemId: string) => void;
	onDelete: (itemId: string) => void;
	isLoading: boolean;
}

function List<T extends ListItem>({
	items,
	renderItem,
	itemsPerPage,
	onUpdate,
	onDelete,
	isLoading,
}: ListProps<T>) {
	const [currentPage, setCurrentPage] = useState(1);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const currentItems = Array.isArray(items)
		? items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
		: [];

	return (
		<div className='list-container'>
			{isLoading ? (
				<div className='list-item loading-item'></div>
			) : items.length === 0 ? (
				<div className='list-item'>Brak elementów</div>
			) : (
				currentItems.map((item, index) => (
					<div 
					key={item.id} 
					className='list-item'
					style={{
							animationDelay: `${index * 100}ms`,
						}}
					>
						<div className='list-item-content'>{renderItem(item)}</div>
						<div className='list-item-icons'>
							<HiPencilAlt size={32} onClick={() => onUpdate(item.id)} />
							<HiOutlineTrash
								size={32}
								color='var(--color-danger)'
								onClick={() => onDelete(item.id)}
							/>
						</div>
					</div>
				))
			)}
			<Pagination
				currentPage={currentPage}
				totalItems={items.length}
				itemsPerPage={itemsPerPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default List;
