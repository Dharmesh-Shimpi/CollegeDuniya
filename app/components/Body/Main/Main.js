'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import Table from './table';
import Loading from '../../Loading/loading';
import { setFilters, setPage } from '@/app/redux/college.redux';
import Filter from '../Navbar/Filter';

export default function Main() {
	const { data, hasMore, filters, status, error } = useSelector(
		(state) => state.colleges,
	);

	const dispatch = useDispatch();

	const loadMoreData = () => {
		dispatch(setPage(page + 1));
	};

	const handleFilterChange = (e) => {
		dispatch(setFilters(e.target.value));
	};
	return (
		<div
			style={{ backgroundColor: '#f3f7fa' }}
			className="w-full flex items-center justify-start flex-col">
			<div className="m-10 px-10 w-fit relative top-16 z-0 bg-white rounded-3xl">
				<Filter
					filters={filters}
					handleFilterChange={handleFilterChange}
				/>
				<div className="flex justify-center items-center">
					{status === 'loading' && <Loading />}
					<Loading />
				</div>

				{data.length > 0 && (
					<InfiniteScroll
						dataLength={data.length}
						next={loadMoreData}
						hasMore={hasMore}
						endMessage={<p>No more data to load</p>}>
						<Table data={data} />
					</InfiniteScroll>
				)}
				{error && <div>{error}</div>}
			</div>
		</div>
	);
}
