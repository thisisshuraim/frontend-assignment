import { useMemo } from "react";
import { defaultItemsPerPage } from "../ui/constants";

export const usePagination = ({
	totalPages,
	currentPage,
	siblingCount = 1,
	boundaryCount = 1,
	itemsPerPage = defaultItemsPerPage
}) => {
	const paginationRange = useMemo(() => {
		const range = (start, end) => {
			const length = end - start + 1;
			return Array.from({ length }, (_, index) => start + index);
		};

		if (totalPages <= itemsPerPage) {
			return range(1, totalPages);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

		const showLeftDots = leftSiblingIndex > boundaryCount + 1;
		const showRightDots = rightSiblingIndex < totalPages - boundaryCount;

		if (!showLeftDots && showRightDots) {
			const leftRange = range(1, Math.max(boundaryCount + siblingCount * 2, 5));
			return [...leftRange, "dots", totalPages];
		}

		if (showLeftDots && !showRightDots) {
			const rightRange = range(totalPages - (boundaryCount + siblingCount * 2) + 1, totalPages);
			return [1, "dots", ...rightRange];
		}

		if (showLeftDots && showRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [1, "dots", ...middleRange, "dots", totalPages];
		}

		return range(1, totalPages);
	}, [totalPages, currentPage, siblingCount, boundaryCount, itemsPerPage]);

	return paginationRange;
};