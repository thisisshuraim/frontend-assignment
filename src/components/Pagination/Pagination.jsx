import "./Pagination.css";
import { usePagination } from "../../hooks/usePagination";
import { defaultItemsPerPage } from "../../ui/constants";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    boundaryCount,
    itemsPerPage : defaultItemsPerPage
  });

  if (currentPage === 0 || totalPages < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "dots") {
          return (
            <span
              key={`dots-${index}`}
              className="pagination-dots"
            >
              &#183;&#183;&#183;
            </span>
          );
        }

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`
              pagination-number
              ${currentPage === pageNumber ? "pagination-number-active" : ""}
            `}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className="pagination-button"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;