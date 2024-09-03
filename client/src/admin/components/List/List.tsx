import { ReactNode, useState } from 'react';
import './list.css'; // Dodaj stylizację
import Pagination from '../Pagination/Pagination';

interface ListProps<T> {
items: T[];
  itemsPerPage: number;
  renderItem: (item: T) => ReactNode;
}

function List<T>({ items, renderItem, itemsPerPage }: ListProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const currentItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

  return (
    <div className="list-container">
      {currentItems.map((item, index) => (
        <div key={index} className="list-item">
          {renderItem(item)}
        </div>
      ))}
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
