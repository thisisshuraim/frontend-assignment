import { defaultItemsPerPage, itemKeys, itemLabels } from "./constants";

const getTotalNumberOfPages = (items, itemsPerPage = defaultItemsPerPage) => (items.length === 0) || (itemsPerPage === 0) ? 0 : Math.ceil(items.length / itemsPerPage);

const getPaginatedItems = (items, pageNumber, itemsPerPage = defaultItemsPerPage) => {
	const totalPages = Math.ceil(items.length / itemsPerPage);
	if ((pageNumber < 1) || (pageNumber > totalPages))
		return [];

	const startIndex = (pageNumber - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	return items.slice(startIndex, endIndex);
}

const getTableProps = items => ({
	itemKeys,
	itemLabels,
	items
})

export { getTotalNumberOfPages, getPaginatedItems, getTableProps };