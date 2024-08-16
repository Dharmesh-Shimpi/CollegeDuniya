function filterAndSortData(data, filters, sortOrder, skip, limit) {
	let items = [...data];
	console.log(sortOrder);
	// Apply filters and sorting
	if (filters === 'rating') {
		items.sort((a, b) => {
			const aValue = a.cd_rank;
			const bValue = b.cd_rank;
			return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
		});
	}

	if (filters === 'fees') {
		items.sort((a, b) => {
			const aValue = a.course_fees.amount;
			const bValue = b.course_fees.amount;
			return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
		});
	}

	if (filters === 'user_review_rating') {
		items.sort((a, b) => {
			const aValue = a.user_reviews.rating;
			const bValue = b.user_reviews.rating;
			return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
		});
	}

	const paginatedData = items.slice(skip, skip + limit);
	return paginatedData;
}

export default filterAndSortData;
