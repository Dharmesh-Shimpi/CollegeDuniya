import { NextResponse } from 'next/server';
import filterAndSortData from './process';
import { data } from './data';

export async function GET(req) {
	try {
		const { searchParams } = new URL(req.url);
		const page = parseInt(searchParams.get('page'), 10) || 1;
		const limit = 10; 
		const skip = (page - 1) * limit;
		const sortOrder = searchParams.get('sortOrder') || 'asc';
		const filters = searchParams.get('filters') || null;
		const name = searchParams.get('name') || '';

		let filteredData = data;

		if (name) {
			filteredData = filteredData.filter((item) =>
				item.college.name.toLowerCase().includes(name.toLowerCase()),
			);
		}

		let sortedAndPagedData = filterAndSortData(
			filteredData,
			filters,
			sortOrder,
			skip,
			limit,
		);

		return NextResponse.json(sortedAndPagedData);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
	}
}
