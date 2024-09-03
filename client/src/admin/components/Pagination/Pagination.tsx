 import './pagination.css'
 
 interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void
 }

 const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }
    return (
        <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt;
        </button>
        <span>
          Strona {currentPage} z {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            &gt;
        </button>
      </div>
    )
 }

 export default Pagination