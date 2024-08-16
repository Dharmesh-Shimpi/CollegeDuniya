export default async function fetchCollege(
	page,
	limit,
	filters,
	sortOrder,
	name,
) {
	try {
		const skip = (page - 1) * limit;
		const queryParams = new URLSearchParams({
			limit,
			skip,
			sortOrder,
			filters,
			name,
		});

		const res = await fetch(`/api/college?${queryParams}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
}
