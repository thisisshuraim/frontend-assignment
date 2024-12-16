import "./TableView.css";
import { useEffect, useState } from "react";
import { getTotalNumberOfPages, getPaginatedItems, getTableProps } from "../../ui/utils";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import DataNotAvailable from "../DataNotAvailable/DataNotAvailable";

const TableView = ({ items = [], onCheckAgain }) => {
	const itemsPerPage = 5;
	const [pageNumber, setPageNumber] = useState(1);
	const [filteredItems, setFilteredItems] = useState(items);

	useEffect(() => {
		updatePageNumberAndItems(pageNumber);
	}, [items]);

	const updatePageNumberAndItems = currentPageNumber => {
		const updatedFilteredItems = getPaginatedItems(items, currentPageNumber, itemsPerPage);
		setFilteredItems(updatedFilteredItems);
		setPageNumber(currentPageNumber);
	}

  return (
    <div className="tableview-container">
			{
				filteredItems.length < 1 ?
					<DataNotAvailable onCheckAgain={onCheckAgain} /> :
					<>
						<div className="tableview-table-container"><Table {...getTableProps(filteredItems)} /></div>
						<div className="tableview-pagination-container">
							<Pagination currentPage={pageNumber} totalPages={getTotalNumberOfPages(items, itemsPerPage)} onPageChange={updatePageNumberAndItems} />
						</div>
					</>
			}
    </div>
  )
}

export default TableView;