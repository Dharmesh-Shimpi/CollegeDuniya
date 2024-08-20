'use client';

import dynamic from 'next/dynamic';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setPage, fetchColleges } from '@/app/redux/college.redux';
import { useEffect, useCallback, useMemo } from 'react';

const Table = dynamic(() => import('./table'));
// const Loading = dynamic(() => import('./Loading/loading'));
const Filter = dynamic(() => import('./Navbar/Filter'));

export default function Main() {
	const { data, hasMore, filters, status, error, page, name, sortOrder } =
		useSelector((state) => state.colleges);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchColleges({ page, filters, sortOrder, name }));
	}, [dispatch, page, filters, sortOrder, name]);

	function loadMoreData() {
		dispatch(setPage(page + 1));
	}

	// const loadMoreData = useCallback(() => {
	// 	dispatch(setPage(page + 1));
	// }, [ dispatch, page ] );

	function handleFilterChange(e) {
		dispatch(setFilters(e.target.value));
	}

	// const handleFilterChange = useCallback(
	// 	(e) => {
	// 		dispatch(setFilters(e.target.value));
	// 	},
	// 	[dispatch],
	// );

	// const filterProps = useMemo(() => ({}), [filters, handleFilterChange]);

	return (
		<div
			style={{ backgroundColor: '#f3f7fa' }}
			className="flex items-center justify-start flex-col">
			<div
				className="m-10 px-10 sm:w-full md:w-full lg:w-7/8 xl:w-4/5 relative top-16 z-0 bg-white rounded-3xl"
				style={{ minHeight: '500px' }} // Reserve space for content to avoid shifts
			>
				<Filter
					filters={filters}
					handleFilterChange={handleFilterChange}
				/>

				{/* {status === 'loading' && (
					<div
						className="flex justify-center items-center"
						style={{ minHeight: '50px' }} // Reserve space for the loading indicator
					>
						<Loading />
					</div>
				)} */}

				{data.length > 0 && (
					<InfiniteScroll
						dataLength={data.length}
						next={loadMoreData}
						hasMore={hasMore}
						// loader={<Loading />}
						endMessage={<p>No more data to load</p>}>
						<Table data={data} />
					</InfiniteScroll>
				)}

				{error && <div>{error}</div>}
			</div>
		</div>
	);
}
